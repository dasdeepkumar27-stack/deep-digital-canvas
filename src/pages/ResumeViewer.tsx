import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumeViewer = () => {
  const navigate = useNavigate();

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

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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

      {/* PDF Viewer Container */}
      <main className="flex-1 pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto h-full">
          <div 
            className="relative w-full bg-muted rounded-xl overflow-hidden shadow-xl border border-border"
            style={{ height: 'calc(100vh - 8rem)' }}
          >
            {/* PDF object viewer */}
            <object
              data="/resume/DEEP_KUMAR_RESUME.pdf#toolbar=0&navpanes=0&scrollbar=1"
              type="application/pdf"
              className="w-full h-full"
              style={{ 
                userSelect: 'none'
              }}
            >
              {/* Fallback for browsers that don't support object */}
              <embed
                src="/resume/DEEP_KUMAR_RESUME.pdf#toolbar=0&navpanes=0"
                type="application/pdf"
                className="w-full h-full"
              />
            </object>
          </div>
          
          {/* Mobile-friendly message */}
          <p className="text-center text-muted-foreground text-sm mt-4">
            Scroll to read the full resume • View only
          </p>
        </div>
      </main>

      {/* Prevent text selection globally on this page */}
      <style>{`
        .resume-page * {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
        }
      `}</style>
    </div>
  );
};

export default ResumeViewer;
