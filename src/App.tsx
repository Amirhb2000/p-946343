
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create placeholder pages for sidebar navigation
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex min-h-screen bg-gray-100">
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-4">{title} Page</h1>
      <p>This is a placeholder for the {title} page.</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customers" element={<PlaceholderPage title="Customers" />} />
          <Route path="/reservations" element={<PlaceholderPage title="Reservations" />} />
          <Route path="/transactions" element={<PlaceholderPage title="Transactions" />} />
          <Route path="/agents" element={<PlaceholderPage title="Agents" />} />
          <Route path="/categories" element={<PlaceholderPage title="Categories" />} />
          <Route path="/services" element={<PlaceholderPage title="Services" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
