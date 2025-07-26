import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CampsProvider } from "./contexts/CampsContext";
import React, { Suspense } from "react";

const queryClient = new QueryClient();

const Index = React.lazy(() => import("./pages/Index"));
const FindCamps = React.lazy(() => import("./pages/FindCamps"));
const ListCamp = React.lazy(() => import("./pages/ListCamp"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CampsProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/find-camps" element={<FindCamps />} />
              <Route path="/list-camp" element={<ListCamp />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </CampsProvider>
  </QueryClientProvider>
);

export default App;
