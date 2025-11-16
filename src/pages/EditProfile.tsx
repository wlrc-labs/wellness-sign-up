import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Plus, Calendar, X } from "lucide-react";

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
    languages: ["Português"],
    profilePhoto: null as File | null,
    
    // Informações de Treino
    objective: "",
    experience: "",
    frequency: "",
    trainingLocations: [] as string[],
  });

  const genderOptions = ["Masculino", "Feminino"];
  const countryOptions = [
    "Brasil", "Estados Unidos", "Espanha", "Alemanha", "Reino Unido", 
    "Portugal", "Afeganistão", "Albânia", "Argélia", "Andorra", "Angola", 
    "Antígua e Barbuda", "Argentina"
  ];
  const languageOptions = [
    "Inglês", "Português", "Espanhol", "Alemão", "Francês", "Italiano",
    "Japonês", "Africâner", "Albanês", "Árabe", "Azerbaijano", "Bengali"
  ];
  const objectiveOptions = [
    "Hipertrofia", "Emagrecimento", "Manter condicionamento", "Ganho de Força"
  ];
  const experienceOptions = ["Iniciante", "Intermediário", "Avançado"];
  const frequencyOptions = [
    "1x / semana", "2x / semana", "3x / semana", "4x / semana",
    "5x / semana", "6x / semana", "7x / semana"
  ];

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

  const toggleLanguage = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }));
  };

  const removeLanguage = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((l) => l !== language),
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
    }
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
              <Select value={formData.phoneCountryCode} onValueChange={(value) => handleChange("phoneCountryCode", value)}>
                <SelectTrigger className="w-28 h-12 bg-input border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+55">+55</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+34">+34</SelectItem>
                  <SelectItem value="+49">+49</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+351">+351</SelectItem>
                </SelectContent>
              </Select>
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
            <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
              <SelectTrigger className="h-12 bg-input border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {genderOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
              <SelectTrigger className="h-12 bg-input border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Idiomas */}
          <div className="space-y-2">
            <Label className="text-foreground">Idiomas</Label>
            <Select onValueChange={toggleLanguage}>
              <SelectTrigger className="h-12 bg-input border-border">
                <SelectValue placeholder="Adicionar idioma" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.languages.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.languages.map((language) => (
                  <div
                    key={language}
                    className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    <span>{language}</span>
                    <button
                      type="button"
                      onClick={() => removeLanguage(language)}
                      className="hover:bg-primary/20 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Informações de Treino */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
            Informações de Treino
          </h2>

          {/* Objetivo */}
          <div className="space-y-2">
            <Label className="text-foreground">Objetivo</Label>
            <Select value={formData.objective} onValueChange={(value) => handleChange("objective", value)}>
              <SelectTrigger className="h-12 bg-input border-border">
                <SelectValue placeholder="Selecione seu objetivo" />
              </SelectTrigger>
              <SelectContent>
                {objectiveOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Experiência */}
          <div className="space-y-2">
            <Label className="text-foreground">Experiência</Label>
            <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
              <SelectTrigger className="h-12 bg-input border-border">
                <SelectValue placeholder="Selecione sua experiência" />
              </SelectTrigger>
              <SelectContent>
                {experienceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Frequência */}
          <div className="space-y-2">
            <Label className="text-foreground">Frequência</Label>
            <Select value={formData.frequency} onValueChange={(value) => handleChange("frequency", value)}>
              <SelectTrigger className="h-12 bg-input border-border">
                <SelectValue placeholder="Selecione a frequência" />
              </SelectTrigger>
              <SelectContent>
                {frequencyOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
