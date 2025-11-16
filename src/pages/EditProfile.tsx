import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock user data - will be replaced with real data later
  const [formData, setFormData] = useState({
    name: "João Silva",
    email: "joao@email.com",
    phone: "(11) 99999-9999",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Will implement real update later
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
    
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      title="Editar Perfil"
      subtitle="Atualize suas informações pessoais"
      showBackButton
      onBackClick={() => navigate("/home")}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nome */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Nome completo
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="h-12 bg-input border-border"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="h-12 bg-input border-border"
            required
          />
        </div>

        {/* Telefone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Telefone
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="h-12 bg-input border-border"
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Salvar alterações
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default EditProfile;
