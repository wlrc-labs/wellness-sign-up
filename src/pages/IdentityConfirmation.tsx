import { useLocation } from "react-router-dom";
import { Fingerprint } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";

const IdentityConfirmation = () => {
  const location = useLocation();
  const email = location.state?.email || "seu@email.com";

  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    return `${name.charAt(0)}${"*".repeat(Math.min(name.length - 1, 4))}@${domain}`;
  };

  const handleVerify = () => {
    // Aqui seria implementada a verificação biométrica
    console.log("Iniciando verificação biométrica...");
  };

  return (
    <AuthLayout 
      showBackButton 
      title="Verifique sua identidade"
      subtitle={maskEmail(email)}
    >
      <div className="space-y-8">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
            <Fingerprint className="w-16 h-16 text-primary" />
          </div>
        </div>

        <p className="text-center text-muted-foreground px-4">
          Seu dispositivo solicitará sua impressão digital, verificação facial ou bloqueio de tela.
        </p>

        <Button
          onClick={handleVerify}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Toque para verificar
        </Button>
      </div>
    </AuthLayout>
  );
};

export default IdentityConfirmation;
