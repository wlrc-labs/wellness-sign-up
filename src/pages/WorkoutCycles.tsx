import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const WorkoutCycles = () => {
  const navigate = useNavigate();

  // Mock data - será substituído por dados reais posteriormente
  const cycles = [
    {
      id: 1,
      name: "Hipertrofia Iniciante",
      startDate: "01/01/2024",
      endDate: "31/03/2024",
      workoutCount: 4,
    },
    {
      id: 2,
      name: "Preparação Verão",
      startDate: "15/11/2023",
      endDate: undefined,
      workoutCount: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Meus Ciclos de Treino</h1>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        {cycles.map((cycle) => (
          <Card
            key={cycle.id}
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() => navigate(`/cycle/${cycle.id}`)}
          >
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{cycle.name}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="space-y-1">
                  <p>Início: {cycle.startDate}</p>
                  {cycle.endDate ? (
                    <p>Fim: {cycle.endDate}</p>
                  ) : (
                    <p>Indefinido</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">
                    {cycle.workoutCount} {cycle.workoutCount === 1 ? "Treino" : "Treinos"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      <Button
        size="icon"
        className="fixed bottom-20 right-6 h-14 w-14 rounded-full shadow-lg"
        onClick={() => navigate("/cycle/new")}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WorkoutCycles;
