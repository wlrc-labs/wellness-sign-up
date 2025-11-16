import { ArrowLeft, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useParams } from "react-router-dom";

const WorkoutView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data
  const workout = {
    name: "Treino A - Peito e Tríceps",
    muscleGroups: ["Peitoral", "Tríceps"],
    location: "Academia comercial",
  };

  const exercises = [
    {
      id: 1,
      name: "Supino Reto",
      image: "/placeholder.svg",
      prescription: "3 x 10 Reps",
      weight: "60 kg",
    },
    {
      id: 2,
      name: "Supino Inclinado",
      image: "/placeholder.svg",
      prescription: "3 x 12 Reps",
      weight: "50 kg",
    },
    {
      id: 3,
      name: "Crucifixo",
      image: "/placeholder.svg",
      prescription: "3 x 15 Reps",
      weight: "20 kg",
    },
    {
      id: 4,
      name: "Tríceps Testa",
      image: "/placeholder.svg",
      prescription: "3 x 12 Reps",
      weight: "30 kg",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Treino</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Duplicar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{workout.name}</h2>
          <p className="text-sm text-muted-foreground mb-1">
            {workout.muscleGroups.join(" • ")}
          </p>
          <p className="text-sm text-muted-foreground">
            Local: {workout.location}
          </p>
        </div>

        <div className="space-y-3">
          {exercises.map((exercise) => (
            <Card key={exercise.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-md bg-muted flex-shrink-0">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{exercise.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {exercise.prescription}
                    </p>
                    {exercise.weight && (
                      <p className="text-xs text-muted-foreground">
                        Peso inicial: {exercise.weight}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t border-border">
        <div className="container mx-auto">
          <Button
            className="w-full h-12 text-base"
            size="lg"
            onClick={() => navigate(`/workout/${id}/execute`)}
          >
            Iniciar Treino
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutView;
