import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email) {
      navigate("/email-verification", { state: { email } });
    }
  };

  return (
    <AuthLayout title="Crie sua conta Wellness">
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

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-4 text-muted-foreground">ou</span>
          </div>
        </div>

        <GoogleButton />

        <div className="text-center pt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Já possuo uma conta
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
