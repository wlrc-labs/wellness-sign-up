import { Home, Dumbbell } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const BottomNav = () => {
  const navItems = [
    {
      name: "Home",
      icon: Home,
      path: "/home",
    },
    {
      name: "Meus Ciclos",
      icon: Dumbbell,
      path: "/my-workouts",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center gap-1 py-2 px-6 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
