import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8 px-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">Wellness Connection</h1>
          <p className="text-xl text-muted-foreground">
            Conecte-se com seu bem-estar
          </p>
        </div>
        
        <div className="space-y-4 max-w-md mx-auto">
          <Button
            onClick={() => navigate("/signup")}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Criar Conta
          </Button>
          
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="w-full h-12 border-2 border-primary text-foreground font-semibold hover:bg-primary/10"
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
