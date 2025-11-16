import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const NewWorkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [restTime, setRestTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleNext = () => {
    if (!name) {
      toast({
        title: "Campo obrigatório",
        description: "Preencha o nome do treino",
        variant: "destructive",
      });
      return;
    }

    // Navegar para a próxima etapa
    navigate(`/cycle/${id}/workout/exercises`, {
      state: { name, location, restTime, notes },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <X className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Novo Treino</h1>
            <Button onClick={handleNext}>Avançar</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Ex: Treino A - Peito e Tríceps"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Local do Treino</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger id="location">
              <SelectValue placeholder="Selecione o local" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="commercial-gym">Academia comercial</SelectItem>
              <SelectItem value="condo-gym">Academia de condomínio</SelectItem>
              <SelectItem value="home">Casa</SelectItem>
              <SelectItem value="outdoor">Ar livre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="restTime">Tempo de descanso entre séries (segundos)</Label>
          <Input
            id="restTime"
            type="number"
            placeholder="Ex: 60"
            value={restTime}
            onChange={(e) => setRestTime(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notas do treino (opcional)</Label>
          <Textarea
            id="notes"
            placeholder="Adicione observações sobre o treino"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />
        </div>
      </main>
    </div>
  );
};

export default NewWorkout;
