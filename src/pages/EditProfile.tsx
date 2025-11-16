import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Plus, Calendar, Edit2 } from "lucide-react";

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock user data - will be replaced with real data later
  const [formData, setFormData] = useState({
    // Informações Pessoais
    name: "Teste 1",
    phoneCountryCode: "+55",
    phone: "999999999",
    bio: "",
    gender: "",
    birthDate: "1998-11-15",
    country: "Brasil",
    profilePhoto: null as File | null,
    
    // Informações de Treino
    languages: ["Português"],
    objective: "",
    experience: "",
    frequency: "",
    trainingLocations: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
    }
  };

  const addLanguage = () => {
    // Will implement language selection later
    toast({
      title: "Em desenvolvimento",
      description: "Funcionalidade de adicionar idioma será implementada em breve.",
    });
  };

  const addTrainingLocation = () => {
    // Will implement location addition later
    toast({
      title: "Em desenvolvimento",
      description: "Funcionalidade de adicionar local será implementada em breve.",
    });
  };

  return (
    <AuthLayout
      title="Editar Perfil"
      subtitle="Atualize suas informações"
      showBackButton
      onBackClick={() => navigate("/home")}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Informações Pessoais */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
            Informações Pessoais
          </h2>

          {/* Foto de Perfil */}
          <div className="space-y-2">
            <Label className="text-foreground">Foto de perfil</Label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center border border-border relative overflow-hidden">
                {formData.profilePhoto ? (
                  <img
                    src={URL.createObjectURL(formData.profilePhoto)}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Upload className="w-6 h-6 text-muted-foreground" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Nome*
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="h-12 bg-input border-border"
              required
            />
          </div>

          {/* Telefone */}
          <div className="space-y-2">
            <Label className="text-foreground">Telefone*</Label>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 w-28 bg-input border border-border rounded-md px-3">
                <span className="text-foreground">{formData.phoneCountryCode}</span>
                <Edit2 className="w-4 h-4 text-muted-foreground" />
              </div>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="flex-1 h-12 bg-input border-border"
                required
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Usamos o WhatsApp para fazer a comunicação entre Personal e Aluno. Seu número só será visível para conexões que você aprovar.
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-foreground">
              Bio
            </Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              className="min-h-24 bg-input border-border resize-none"
              placeholder="Conte um pouco sobre você..."
            />
          </div>

          {/* Gênero */}
          <div className="space-y-2">
            <Label className="text-foreground">Gênero</Label>
            <div className="flex items-center gap-2 h-12 bg-input border border-border rounded-md px-3">
              <span className="text-foreground flex-1">
                {formData.gender || "Selecione"}
              </span>
              <Edit2 className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Data de Nascimento */}
          <div className="space-y-2">
            <Label htmlFor="birthDate" className="text-foreground">
              Nascimento*
            </Label>
            <div className="relative">
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleChange("birthDate", e.target.value)}
                className="h-12 bg-input border-border"
                required
              />
              <Calendar className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* País */}
          <div className="space-y-2">
            <Label className="text-foreground">País</Label>
            <div className="flex items-center gap-2 h-12 bg-input border border-border rounded-md px-3">
              <span className="text-foreground flex-1">{formData.country}</span>
              <Edit2 className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Informações de Treino */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
            Informações de Treino
          </h2>

          {/* Idiomas */}
          <div className="space-y-2">
            <Label className="text-foreground">Idiomas</Label>
            <div className="flex items-center gap-2 h-12 bg-input border border-border rounded-md px-3">
              <span className="text-foreground flex-1">
                {formData.languages.join(", ")}
              </span>
              <button
                type="button"
                onClick={addLanguage}
                className="text-muted-foreground hover:text-foreground"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Objetivo */}
          <div className="space-y-2">
            <Label htmlFor="objective" className="text-foreground">
              Objetivo
            </Label>
            <div className="flex items-center gap-2 h-12 bg-input border border-border rounded-md px-3">
              <Input
                id="objective"
                type="text"
                value={formData.objective}
                onChange={(e) => handleChange("objective", e.target.value)}
                className="border-0 bg-transparent h-full p-0 focus-visible:ring-0"
                placeholder="Ex: Hipertrofia, Emagrecimento..."
              />
              <Edit2 className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Experiência */}
          <div className="space-y-2">
            <Label htmlFor="experience" className="text-foreground">
              Experiência
            </Label>
            <div className="flex items-center gap-2 h-12 bg-input border border-border rounded-md px-3">
              <Input
                id="experience"
                type="text"
                value={formData.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                className="border-0 bg-transparent h-full p-0 focus-visible:ring-0"
                placeholder="Ex: Iniciante, Intermediário..."
              />
              <Edit2 className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Frequência */}
          <div className="space-y-2">
            <Label htmlFor="frequency" className="text-foreground">
              Frequência
            </Label>
            <div className="flex items-center gap-2 h-12 bg-input border border-border rounded-md px-3">
              <Input
                id="frequency"
                type="text"
                value={formData.frequency}
                onChange={(e) => handleChange("frequency", e.target.value)}
                className="border-0 bg-transparent h-full p-0 focus-visible:ring-0"
                placeholder="Ex: 3x por semana..."
              />
              <Edit2 className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Locais de treino */}
          <div className="space-y-2">
            <Label className="text-foreground">Locais de treino</Label>
            <div className="flex items-center gap-2 h-12 bg-input border border-border rounded-md px-3">
              <span className="text-muted-foreground flex-1 text-sm">
                {formData.trainingLocations.length > 0
                  ? formData.trainingLocations.join(", ")
                  : "Adicione seus locais de treino"}
              </span>
              <button
                type="button"
                onClick={addTrainingLocation}
                className="text-muted-foreground hover:text-foreground"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
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
