import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import EmailVerification from "./pages/EmailVerification";
import CreatePassword from "./pages/CreatePassword";
import Login from "./pages/Login";
import PasswordPrompt from "./pages/PasswordPrompt";
import IdentityConfirmation from "./pages/IdentityConfirmation";
import ForgotPassword from "./pages/ForgotPassword";
import ResetCodeVerification from "./pages/ResetCodeVerification";
import ResetPassword from "./pages/ResetPassword";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-prompt" element={<PasswordPrompt />} />
          <Route path="/identity-confirmation" element={<IdentityConfirmation />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-code-verification" element={<ResetCodeVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
