import { ArrowLeft, Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const WorkoutExercises = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const workoutConfig = location.state || {};

  // Mock data
  const exercises = [
    {
      id: 1,
      name: "Supino Reto",
      image: "/placeholder.svg",
      sets: "3",
      reps: "10",
      weight: "60",
    },
    {
      id: 2,
      name: "Supino Inclinado",
      image: "/placeholder.svg",
      sets: "3",
      reps: "12",
      weight: "50",
    },
  ];

  const muscleGroups = ["Peitoral", "Tríceps"];
  const hasExercises = exercises.length > 0;

  const handleSave = () => {
    if (!hasExercises) {
      toast({
        title: "Adicione exercícios",
        description: "Adicione pelo menos um exercício ao treino",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Treino criado",
      description: "Seu treino foi criado com sucesso",
    });
    navigate(-2);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Novo Treino</h1>
            <Button onClick={handleSave}>Salvar</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6 p-4 bg-accent rounded-lg">
          <h2 className="text-xl font-bold mb-2">{workoutConfig.name}</h2>
          {muscleGroups.length > 0 && (
            <p className="text-sm text-muted-foreground mb-2">
              {muscleGroups.join(" • ")}
            </p>
          )}
          {workoutConfig.location && (
            <p className="text-sm text-muted-foreground">
              Local: {workoutConfig.location}
            </p>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-4">Exercícios</h3>

        {!hasExercises ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
              <Plus className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Nenhum exercício adicionado
            </h3>
            <p className="text-muted-foreground mb-6">
              Use o botão abaixo para adicionar o primeiro exercício
            </p>
          </div>
        ) : (
          <div className="space-y-4 pb-20">
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
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold">{exercise.name}</h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Duplicar</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Remover
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Séries</Label>
                          <Input
                            type="number"
                            defaultValue={exercise.sets}
                            className="h-8 text-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Reps</Label>
                          <Input
                            type="number"
                            defaultValue={exercise.reps}
                            className="h-8 text-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Peso (kg)</Label>
                          <Input
                            type="number"
                            defaultValue={exercise.weight}
                            className="h-8 text-sm"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Button
        size="icon"
        className="fixed bottom-20 right-6 h-14 w-14 rounded-full shadow-lg"
        onClick={() => toast({ title: "Catálogo em desenvolvimento" })}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WorkoutExercises;
