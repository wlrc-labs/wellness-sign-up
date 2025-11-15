import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { Button } from "@/components/ui/button";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const requirements = [
    { text: "8 a 128 caracteres", met: password.length >= 8 && password.length <= 128 },
    { text: "Pelo menos 1 número", met: /\d/.test(password) },
    { text: "Pelo menos 1 letra maiúscula", met: /[A-Z]/.test(password) },
  ];

  const allRequirementsMet = requirements.every((req) => req.met);

  const handleContinue = () => {
    if (allRequirementsMet) {
      navigate("/login");
    }
  };

  return (
    <AuthLayout showBackButton title="Crie uma nova senha">
      <div className="space-y-6">
        <PasswordInput value={password} onChange={setPassword} />

        <div className="space-y-3">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  req.met ? "bg-primary" : "bg-muted"
                }`}
              >
                {req.met ? (
                  <Check className="w-3 h-3 text-primary-foreground" />
                ) : (
                  <X className="w-3 h-3 text-muted-foreground" />
                )}
              </div>
              <span className={req.met ? "text-foreground" : "text-muted-foreground"}>
                {req.text}
              </span>
            </div>
          ))}
        </div>

        <Button
          onClick={handleContinue}
          disabled={!allRequirementsMet}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50"
        >
          Continuar
        </Button>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
