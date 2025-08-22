import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="glass-card p-12 neon-glow">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-fade-in">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 text-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold neon-glow"
              asChild
            >
              <a href="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card border-primary/50 hover:bg-primary/10 font-semibold"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
