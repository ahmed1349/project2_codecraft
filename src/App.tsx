
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    // In a real app, you'd also update the document direction and lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index language={language} />} />
                <Route path="/courses" element={<Courses language={language} />} />
                <Route path="/courses/:id" element={<CourseDetail language={language} />} />
                <Route path="/about" element={<About language={language} />} />
                <Route path="/pricing" element={<Pricing language={language} />} />
                <Route path="/blog" element={<Blog language={language} />} />
                <Route path="/contact" element={<Contact language={language} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer language={language} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
