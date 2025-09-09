import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Eventi from "@/pages/eventi";
import Camere from "@/pages/camere";
import Servizi from "@/pages/servizi";
import Spa from "@/pages/spa";
import Chiesa from "@/pages/chiesa";
import Prenota from "@/pages/prenota";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/eventi" component={Eventi} />
          <Route path="/camere" component={Camere} />
          <Route path="/servizi" component={Servizi} />
          <Route path="/spa" component={Spa} />
          <Route path="/chiesa" component={Chiesa} />
          <Route path="/prenota" component={Prenota} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
