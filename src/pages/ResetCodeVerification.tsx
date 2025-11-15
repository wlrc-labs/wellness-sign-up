import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { CodeInput } from "@/components/auth/CodeInput";
import { Button } from "@/components/ui/button";

const ResetCodeVerification = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "seu@email.com";

  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    return `${name.charAt(0)}${"*".repeat(name.length - 1)}@${domain}`;
  };

  const handleContinue = () => {
    if (code.length === 6) {
      navigate("/reset-password", { state: { email } });
    }
  };

  return (
    <AuthLayout 
      showBackButton 
      title="Verifique seu e-mail"
      subtitle={`Um código de 6 dígitos foi enviado para ${maskEmail(email)}. Por favor, insira o código em até 30 minutos.`}
    >
      <div className="space-y-6">
        <CodeInput value={code} onChange={setCode} />
        
        <Button
          onClick={handleContinue}
          disabled={code.length !== 6}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50"
        >
          Continuar
        </Button>

        <div className="text-center">
          <button className="text-foreground hover:text-primary transition-colors font-medium">
            Não recebeu o código?
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetCodeVerification;
