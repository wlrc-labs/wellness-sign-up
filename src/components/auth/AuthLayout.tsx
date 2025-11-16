import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  onBackClick?: () => void;
  title: string;
  subtitle?: string;
}

export const AuthLayout = ({ children, showBackButton = false, onBackClick, title, subtitle }: AuthLayoutProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showBackButton && (
        <button
          onClick={handleBackClick}
          className="absolute top-6 left-6 p-2 hover:bg-muted rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
      )}
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};
