import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Calendar, Phone, Edit2, FileText, Award } from "lucide-react";

const CompleteProfile = () => {
  const [userType, setUserType] = useState<"aluno" | "profissional" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    phoneCountryCode: "+55",
    phone: "",
    documentType: "CPF",
    documentNumber: "",
    credential: "CREF",
    credentialNumber: "",
    termsAccepted: false,
    marketingAccepted: false,
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      alert("Por favor, selecione se você é Aluno ou Profissional");
      return;
    }
    // Navigate to main app after profile completion
    navigate("/");
  };

  if (!userType) {
    return (
      <AuthLayout title="Criando nova conta" showBackButton>
        <div className="space-y-6">
          <div className="text-center mb-8">
            <p className="text-foreground/80 mb-6">Selecione o tipo de perfil</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => setUserType("aluno")}
              variant="outline"
              className="w-full h-16 text-lg font-semibold border-2 hover:border-primary hover:bg-primary/10"
            >
              Sou Aluno
            </Button>

            <Button
              onClick={() => setUserType("profissional")}
              variant="outline"
              className="w-full h-16 text-lg font-semibold border-2 hover:border-primary hover:bg-primary/10"
            >
              Sou Profissional
            </Button>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Criando nova conta" 
      showBackButton
      onBackClick={() => setUserType(null)}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nome */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Seu Nome*
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="pl-10 h-12 bg-input border-border"
              required
            />
          </div>
        </div>

        {/* Data de Nascimento */}
        <div className="space-y-2">
          <Label htmlFor="birthDate" className="text-foreground">
            Data de Nascimento*
          </Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className="pl-10 h-12 bg-input border-border"
              required
            />
          </div>
          <p className="text-sm text-muted-foreground">
            A idade ajuda personal trainers a criarem treinos personalizados e alunos a encontrarem o personal correto.
          </p>
        </div>

        {/* Telefone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Telefone*
          </Label>
          <div className="flex gap-2">
            <div className="relative w-24">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                value={formData.phoneCountryCode}
                onChange={(e) => setFormData({ ...formData, phoneCountryCode: e.target.value })}
                className="pl-10 h-12 bg-input border-border pr-8"
              />
              <Edit2 className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="flex-1 h-12 bg-input border-border"
              required
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Usamos o WhatsApp para fazer a comunicação entre Personal e Aluno. Seu número só será visível para conexões que você aprovar.
          </p>
        </div>

        {/* Documento de identificação - Only for Profissional */}
        {userType === "profissional" && (
          <div className="space-y-2">
            <Label htmlFor="documentNumber" className="text-foreground">
              Documento de identificação*
            </Label>
            <div className="flex gap-2">
              <Select value={formData.documentType} onValueChange={(value) => setFormData({ ...formData, documentType: value })}>
                <SelectTrigger className="w-32 h-12 bg-input border-border">
                  <FileText className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CPF">CPF</SelectItem>
                  <SelectItem value="CNPJ">CNPJ</SelectItem>
                  <SelectItem value="Passaporte">Passaporte</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="documentNumber"
                type="text"
                value={formData.documentNumber}
                onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
                className="flex-1 h-12 bg-input border-border"
                required
              />
            </div>
          </div>
        )}

        {/* Credencial - Only for Profissional */}
        {userType === "profissional" && (
          <div className="space-y-2">
            <Label htmlFor="credentialNumber" className="text-foreground">
              Credencial
            </Label>
            <div className="flex gap-2">
              <Select value={formData.credential} onValueChange={(value) => setFormData({ ...formData, credential: value })}>
                <SelectTrigger className="w-32 h-12 bg-input border-border">
                  <Award className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CREF">CREF</SelectItem>
                  <SelectItem value="ISAK">ISAK</SelectItem>
                  <SelectItem value="NSCA">NSCA</SelectItem>
                  <SelectItem value="ACE">ACE</SelectItem>
                  <SelectItem value="NASM">NASM</SelectItem>
                  <SelectItem value="AUSActive">AUSActive</SelectItem>
                  <SelectItem value="EREPS">EREPS</SelectItem>
                  <SelectItem value="CSAln">CSAln</SelectItem>
                  <SelectItem value="REPs UAE">REPs UAE</SelectItem>
                  <SelectItem value="REPS Ireland">REPS Ireland</SelectItem>
                  <SelectItem value="CSEP">CSEP</SelectItem>
                  <SelectItem value="ISSA">ISSA</SelectItem>
                  <SelectItem value="Kl 1">Kl 1</SelectItem>
                  <SelectItem value="FIF">FIF</SelectItem>
                  <SelectItem value="AMED">AMED</SelectItem>
                  <SelectItem value="IranREPs">IranREPs</SelectItem>
                  <SelectItem value="REPs NZ">REPs NZ</SelectItem>
                  <SelectItem value="REPSSA">REPSSA</SelectItem>
                  <SelectItem value="CIMSPA">CIMSPA</SelectItem>
                  <SelectItem value="ACSM">ACSM</SelectItem>
                  <SelectItem value="NCSF">NCSF</SelectItem>
                  <SelectItem value="IPDJ">IPDJ</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="credentialNumber"
                type="text"
                value={formData.credentialNumber}
                onChange={(e) => setFormData({ ...formData, credentialNumber: e.target.value })}
                className="flex-1 h-12 bg-input border-border"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Informar credenciais válidas possibilita que seu perfil ganhe um selo de verificação. O processo de validação pode demorar por volta de 2 dias úteis.
            </p>
          </div>
        )}

        {/* Checkboxes */}
        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={formData.termsAccepted}
              onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
              className="mt-1 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              required
            />
            <label htmlFor="terms" className="text-sm text-foreground leading-tight cursor-pointer">
              Declaro que li e aceito os{" "}
              <span className="text-secondary font-semibold">termos de uso</span> e a{" "}
              <span className="text-secondary font-semibold">política de privacidade</span>
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing"
              checked={formData.marketingAccepted}
              onCheckedChange={(checked) => setFormData({ ...formData, marketingAccepted: checked as boolean })}
              className="mt-1 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="marketing" className="text-sm text-foreground leading-tight cursor-pointer">
              Aceito receber comunicações de marketing, promoções e novidades por e-mail e outros meios.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!formData.termsAccepted}
          className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold mt-6"
        >
          Criar Conta
        </Button>
      </form>
    </AuthLayout>
  );
};

export default CompleteProfile;
