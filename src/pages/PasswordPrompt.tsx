import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { Button } from "@/components/ui/button";

const PasswordPrompt = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "seu@email.com";

  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    return `${name.charAt(0)}${"*".repeat(Math.min(name.length - 1, 4))}@${domain}`;
  };

  const handleContinue = () => {
    if (password) {
      navigate("/");
    }
  };

  return (
    <AuthLayout 
      showBackButton 
      title="Digite sua senha"
      subtitle={maskEmail(email)}
    >
      <div className="space-y-6">
        <PasswordInput value={password} onChange={setPassword} />
        
        <Button
          onClick={handleContinue}
          disabled={!password}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50"
        >
          Continuar
        </Button>

        <div className="text-center">
          <button className="text-foreground hover:text-primary transition-colors font-medium">
            Esqueceu sua senha?
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default PasswordPrompt;
