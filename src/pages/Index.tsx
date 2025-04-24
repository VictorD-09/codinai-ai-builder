
import { ArrowRight, Check, Star, MessageSquare, Users, RocketIcon, Clock, ArrowDown, Sparkles, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseContent } from "@/components/CourseContent";
import { getUrlWithUtm } from "@/utils/urlUtils";
import PricingCard from "@/components/PricingCard";
import FAQSection from "@/components/FAQSection";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import CountdownTimer from "@/components/CountdownTimer";
import ResultsShowcase from "@/components/ResultsShowcase";
import FloatingCTA from "@/components/FloatingCTA";
import "../styles/timeline.css";

export default function Index() {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://pay.kiwify.com.br/ffU3D5d");
    window.location.href = url;
  };

  return <div className="min-h-screen bg-gray-900 relative">
    <FloatingCTA onClick={handleCtaClick} />
    
    {/* Enhanced Hero Section */}
    <section className="relative overflow-hidden pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto pt-10">
          <img className="mx-auto mb-6" width="220" src="/logo.png" alt="logo" />
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-blue-400 mb-6 leading-tight">
            Crie Sites, Aplicativos e Plataformas Usando Apenas a IA – Mesmo Sem Saber Programar!
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transforme suas ideias em projetos reais sem conhecimento técnico. Aprenda a usar IA para desenvolver sites, landing pages e até mesmo MVPs de startups prontos para validar ou vender.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleCtaClick}
              className="bg-[#F97316] hover:bg-orange-600 text-white text-lg md:text-xl px-8 py-6 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Começar Agora 
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white/20 backdrop-blur bg-white/10 hover:bg-white/20 text-lg md:text-xl px-8 py-6 rounded-xl"
              onClick={() => document.getElementById('content')?.scrollIntoView({behavior: 'smooth'})}
            >
              Ver Conteúdo do Curso
              <ArrowDown className="ml-2" />
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 shadow-xl">
            <CountdownTimer />
            <p className="text-white/80 mt-2">Oferta por tempo limitado! Vagas restritas para manter suporte individualizado.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Results Showcase Section */}
    <ResultsShowcase />

    {/* Testimonials Section */}
    <Testimonials />

    {/* Expert Section - Moved up */}
    <section className="relative py-20 bg-gradient-to-br from-[#e6f7fb] to-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 max-w-5xl">
        <div className="w-full md:w-2/5">
          <img src="/autor.jpg" alt="Victor Bertram" className="rounded-2xl shadow-2xl border-4 border-[#00BFFF] bg-white object-cover" />
        </div>
        <div className="w-full md:w-3/5 space-y-6 text-gray-700">
          <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF]">
            Victor Bertram — seu mentor nessa jornada
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <Check className="text-green-500" />
            <p className="font-medium">Desenvolvedor full stack com +4 anos de experiência</p>
          </div>
          <p className="text-lg md:text-xl">
            <span className="font-semibold italic">"Você já pensou que sua ideia poderia virar um negócio, mas travou por não saber programar? Eu criei o CodinAI exatamente pra você."</span>
          </p>
          <p className="text-lg md:text-xl">
            Meu propósito é destravar quem está parado, mostrar que é possível começar do zero e, com as ferramentas certas, transformar ideias em projetos reais e lucrativos. Essa tecnologia mudou a minha vida, abriu muitas portas — e <span className="underline">eu acredito que pode mudar a sua também.</span>
          </p>
          <p className="text-lg md:text-xl">
            Hoje participo de projetos que ultrapassaram <span className="font-bold">seis dígitos em faturamento</span>, seja por lançamentos ou vendas recorrentes.
          </p>
          <Button onClick={handleCtaClick} className="bg-[#F97316] hover:bg-orange-600 text-white">
            Quero aprender com o Victor
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] text-center mb-12">
          Não é só um curso — é um convite pra testar ideias, lançar projetos e até vender o que você criar.
          </h2>
          <Timeline />
          
          {/* Mid-page CTA */}
          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-gray-700 mb-4">👉 Já quer começar? Clique abaixo para garantir sua vaga com desconto!</p>
            <Button 
              onClick={handleCtaClick}
              className="bg-[#F97316] hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-lg"
            >
              Garantir minha vaga agora
              <Sparkles className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Course Content Section */}
    <section id="content" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00BFFF] mb-12">
          Veja parte do conteúdo do CodinAI que você ter acesso
        </h2>
        <CourseContent />
        <p className="text-center mt-8 font-semibold text-gray-300">
          Todas as ferramentas utilizadas possuem planos gratuitos, perfeitos para quem está começando sem investir em ferramentas caras.
        </p>
        
        {/* Content Section CTA */}
        <div className="mt-12 text-center">
          <Button 
            onClick={handleCtaClick}
            className="bg-[#F97316] hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-lg"
          >
            Quero dominar essas ferramentas
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>

    {/* Pricing Section with Content */}
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-6">
            Aprenda do básico até o avançado de criação de projetos.
            </h2>
            <p className="text-xl text-blue-200">Você vai sair do curso com projetos prontos, novas habilidades e até ideias que podem virar negócios.</p>
          </div>
          <div className="relative z-20 flex justify-center">
            <PricingCard />
          </div>

          <div className="text-center mb-4">
            <p className="text-lg text-gray-300 mt-4">
              Esta curso tem garantia de 7 dias. Se você não gostar, não conseguir aprender ou não achar que valeu a pena, basta solicitar o reembolso e devolveremos seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <FAQSection />

    {/* Footer */}
    <footer className="text-white py-4 bg-[#00BFFF]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-800">
          © 2024 CodinAI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </div>;
}
