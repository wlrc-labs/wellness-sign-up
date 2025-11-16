import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, Dumbbell, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home = () => {
  const navigate = useNavigate();
  // Mock user data - will be replaced with real data later
  const [user] = useState({
    name: "João Silva",
    email: "joao@email.com",
    type: "Profissional",
  });

  const handleLogout = () => {
    // Will implement real logout later
    navigate("/login");
  };

  const handleEditProfile = () => {
    // Navigate to profile edit page
    navigate("/edit-profile");
  };

  const handleMyWorkouts = () => {
    // Navigate to workouts page
    navigate("/my-workouts");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-foreground">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.type}</p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleEditProfile}>
                <Edit2 className="mr-2 h-4 w-4" />
                Editar Perfil
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-muted-foreground">
              Gerencie seus treinos e informações de perfil
            </p>
          </div>

          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Meu Perfil</span>
                <Button variant="ghost" size="sm" onClick={handleEditProfile}>
                  <Edit2 className="mr-2 h-4 w-4" />
                  Editar
                </Button>
              </CardTitle>
              <CardDescription>
                Suas informações pessoais e de conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Nome</p>
                <p className="text-foreground">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tipo de Conta</p>
                <p className="text-foreground">{user.type}</p>
              </div>
            </CardContent>
          </Card>

          {/* My Workouts Card */}
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors" onClick={handleMyWorkouts}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle>Meus Treinos</CardTitle>
                  <CardDescription>
                    Acesse e gerencie seus treinos personalizados
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
