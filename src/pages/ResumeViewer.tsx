import { useEffect, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeViewer = () => {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(800);

  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for save/print
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === 's' || e.key === 'p' || e.key === 'S' || e.key === 'P')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Handle resize for responsive PDF
    const updateWidth = () => {
      const width = Math.min(window.innerWidth - 32, 800);
      setContainerWidth(width);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', updateWidth);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 2));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col select-none">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            <h1 className="text-lg font-semibold gradient-text">Resume</h1>
          </div>
        </div>
      </header>

      {/* PDF Controls */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 bg-background/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-border flex items-center gap-4">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="p-1 hover:bg-muted rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        
        <span className="text-sm font-medium min-w-[80px] text-center">
          {pageNumber} / {numPages}
        </span>
        
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="p-1 hover:bg-muted rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>

        <div className="w-px h-6 bg-border" />

        <button
          onClick={zoomOut}
          disabled={scale <= 0.5}
          className="p-1 hover:bg-muted rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut size={18} />
        </button>
        
        <span className="text-sm font-medium min-w-[50px] text-center">
          {Math.round(scale * 100)}%
        </span>
        
        <button
          onClick={zoomIn}
          disabled={scale >= 2}
          className="p-1 hover:bg-muted rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn size={18} />
        </button>
      </div>

      {/* PDF Viewer Container */}
      <main className="flex-1 pt-32 pb-8 px-4 overflow-auto">
        <div className="flex justify-center">
          <div 
            className="bg-white rounded-xl shadow-xl overflow-auto"
            style={{ maxHeight: 'calc(100vh - 12rem)' }}
          >
            <Document
              file="/resume/DEEP_KUMAR_RESUME.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center w-full h-96">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              }
              error={
                <div className="flex items-center justify-center w-full h-96 text-muted-foreground">
                  <p>Failed to load resume. Please try again later.</p>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                width={containerWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
        
        {/* View only message */}
        <p className="text-center text-muted-foreground text-sm mt-4">
          View only • Use controls to navigate
        </p>
      </main>
    </div>
  );
};

export default ResumeViewer;
