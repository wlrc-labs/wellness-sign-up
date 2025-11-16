import { ArrowLeft, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useParams } from "react-router-dom";

const CycleDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data
  const cycle = {
    name: "Hipertrofia Iniciante",
    startDate: "01/01/2024",
    endDate: "31/03/2024",
  };

  const workouts = [
    {
      id: 1,
      name: "Treino A - Peito e Tríceps",
      muscleGroups: ["Peitoral", "Tríceps"],
      exerciseImages: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      id: 2,
      name: "Treino B - Costas e Bíceps",
      muscleGroups: ["Costas", "Bíceps"],
      exerciseImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  ];

  const hasWorkouts = workouts.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Meu Ciclo</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Duplicar</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Remover do Ciclo
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{cycle.name}</h2>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Início: {cycle.startDate}</p>
            {cycle.endDate ? <p>Fim: {cycle.endDate}</p> : <p>Indefinido</p>}
          </div>
        </div>

        {!hasWorkouts ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
              <Plus className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Nenhum treino adicionado
            </h3>
            <p className="text-muted-foreground mb-6">
              Adicione seu primeiro treino ao ciclo usando o botão abaixo
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {workouts.map((workout) => (
              <Card
                key={workout.id}
                className="cursor-pointer hover:bg-accent transition-colors"
                onClick={() => navigate(`/workout/${workout.id}`)}
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{workout.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {workout.muscleGroups.join(" • ")}
                  </p>
                  <div className="flex gap-2 overflow-x-auto">
                    {workout.exerciseImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="w-16 h-16 rounded-md bg-muted flex-shrink-0"
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Button
        size="icon"
        className="fixed bottom-20 right-6 h-14 w-14 rounded-full shadow-lg"
        onClick={() => navigate(`/cycle/${id}/new-workout`)}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default CycleDetails;
