import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email) {
      navigate("/reset-code-verification", { state: { email } });
    }
  };

  return (
    <AuthLayout 
      showBackButton 
      title="Esqueceu sua senha?"
      subtitle="Digite seu e-mail para receber um código de verificação"
    >
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-input border-border"
        />
        
        <Button
          onClick={handleContinue}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Continuar
        </Button>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
