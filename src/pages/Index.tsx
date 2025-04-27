
import { ArrowRight, Check, Star, Users, RocketIcon, Clock, Sparkles, Shield, Code, Database, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getUrlWithUtm } from "@/utils/urlUtils";
import PricingCard from "@/components/PricingCard";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import FloatingCTA from "@/components/FloatingCTA";

export default function Index() {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://pay.kiwify.com.br/ffU3D5d");
    window.location.href = url;
  };

  return <div className="min-h-screen bg-gray-900 relative">
    <FloatingCTA onClick={handleCtaClick} />
    
    {/* Hero Section with Headline */}
    <section className="relative overflow-hidden py-20 md:py-32 pt-10">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-b from-cyan-400 to-blue-600 animate-text bg-300% text-transparent bg-clip-text mb-6 leading-tight">
            Crie Sites, Aplicativos e Plataformas Usando Apenas a IA – Mesmo Sem Saber Programar!
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transforme suas ideias em projetos reais, lance negócios digitais ou preste serviços altamente valorizados — mesmo que você não tenha experiência em tecnologia.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={handleCtaClick} className="text-white text-lg md:text-xl px-8 py-6 rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 bg-green-600 hover:bg-green-500">
              Garantir Minha Vaga Agora
              <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white">
              <Code className="w-4 h-4 mr-1" /> React
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white">
              <Database className="w-4 h-4 mr-1" /> Supabase
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white">
              Tailwind CSS
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white">
              Shadcn/ui
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white">
              <Globe className="w-4 h-4 mr-1" /> AI Tools
            </Badge>
          </div>
        </div>
      </div>
    </section>

    {/* Storytelling Section */}
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg md:text-xl space-y-8">
          <p>
            Hoje, para ter sucesso online, você não precisa mais passar meses estudando programação ou contratando equipes caras.
          </p>
          <p>
            A inteligência artificial faz o trabalho pesado — mas apenas se você souber como usar do jeito certo.
          </p>
          <div className="my-12 bg-gray-800 p-8 rounded-xl border border-gray-700">
            <p className="font-medium text-white mb-4">
              Eu sou <span className="font-bold text-[#00BFFF]">Victor Bertram</span>, desenvolvedor full stack com +4 anos de experiência e projetos que já ultrapassaram <span className="font-bold text-green-400">20 milhões em vendas</span>.
            </p>
            <p className="font-medium text-white">
              Agora, estou te entregando o <span className="font-bold text-[#00BFFF]">método que uso para criar plataformas, apps e sites de forma rápida e poderosa</span> — usando apenas IA.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold animate-text bg-300% bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-6">
            O Que Você Vai Conseguir
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
          <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-lg">Criar landing pages, sites, apps e micro-SaaS descrevendo em poucos minutos.</p>
          </div>
          
          <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-lg">Validar ideias de negócios sem gastar rios de dinheiro em agências.</p>
          </div>
          
          <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-lg">Atender clientes e gerar renda extra (ou principal) criando projetos digitais.</p>
          </div>
          
          <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-lg">Lançar seu próprio produto digital, micro-SaaS ou startup.</p>
          </div>
          
          <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-lg">Ter liberdade geográfica e financeira através da tecnologia.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Authority Section */}
    <section className="py-20 bg-gradient-to-br from-[#e6f7fb] to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-cyan-600 to-blue-800 animate-text bg-300% text-transparent bg-clip-text mb-4">
            Quem é Victor Bertram?
          </h2>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="w-full md:w-2/5">
            <img src="/autor.jpg" alt="Victor Bertram" className="rounded-2xl shadow-2xl border-4 border-[#00BFFF] bg-white object-cover" />
          </div>
          <div className="w-full md:w-3/5 space-y-6 text-gray-700">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg">Desenvolvedor Full Stack especializado em criação de aplicativos, plataformas e micro-SaaS.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg">Domina tecnologias como JavaScript, TypeScript, React, Next.js, Node.js, C#, .NET Core e muito mais.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg">Projetos e produtos já somam mais de <span className="font-bold">R$20 milhões em vendas</span>.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg">Especialista em criar <span className="font-bold">projetos digitais escaláveis com IA</span>.</p>
              </li>
            </ul>
            
            <Button onClick={handleCtaClick} className="text-white py-8 w-full text-lg bg-green-600 hover:bg-green-500">
              Quero aprender com você
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Course Content Section */}
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold animate-text bg-300% bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-6">
            Conteúdo do Curso
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            No CodinAI você aprenderá:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Code className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="font-bold text-xl text-white">Criar Landing Pages e Sites</h3>
            </div>
            <p className="text-gray-300">Aprenda a desenvolver páginas profissionais mesmo sem programação.</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <RocketIcon className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="font-bold text-xl text-white">Desenvolver MVPs</h3>
            </div>
            <p className="text-gray-300">Construa SaaS e Micro-SaaS para testar e vender ideias.</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Database className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="font-bold text-xl text-white">Integrar Plataformas</h3>
            </div>
            <p className="text-gray-300">Conecte sistemas de pagamento, bancos de dados e IA.</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Globe className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="font-bold text-xl text-white">Publicar Seus Projetos</h3>
            </div>
            <p className="text-gray-300">Faça deploy com GitHub e Digital Ocean de forma simples.</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Users className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="font-bold text-xl text-white">Acesso à Comunidade</h3>
            </div>
            <p className="text-gray-300">Suporte exclusivo para tirar dúvidas e trocar experiências.</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Sparkles className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="font-bold text-xl text-white">Utilizar IA Gratuita</h3>
            </div>
            <p className="text-gray-300">Gere códigos, imagens e textos sem custos adicionais.</p>
          </div>
        </div>
      </div>
    </section>

    {/* "What You Can Create" Section */}
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text bg-300% bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            🔥 Veja o que você pode criar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exemplos de projetos que você poderá construir com o CodinAI:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            "Landing Page para Consultórios e Clínicas",
            "Sistema de Controle de Finanças Pessoais",
            "App de Agendamento para Salões de Beleza",
            "Micro-SaaS de Gestão de Leads para Pequenos Negócios",
            "Plataforma de Quizzes Online para Marketing Digital",
            "Sistema de CRM Simples para Negócios Locais",
            "Site de Portfólio para Freelancers",
            "Aplicativo de Controle de Treinos para Personal Trainers",
            "Sistema de Cadastro e Check-in de Eventos",
            "Plataforma de Agendamento para Clínicas Veterinárias"
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 border-gray-700 text-white hover:border-[#00BFFF] transition-all duration-300 hover:-translate-y-1 p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Check className="w-5 h-5 text-[#00BFFF]" />
                </div>
                <p className="font-medium text-lg">{project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-8">
            🚀 Bora transformar ideias em negócios reais usando o poder da IA?
          </h3>
          <Button onClick={handleCtaClick} className="text-white w-full max-w-2xl mx-auto text-lg py-8 font-semibold bg-green-600 hover:bg-green-500">
            Quero Começar a Criar Meus Projetos com IA
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <Testimonials />

    {/* Pricing Section */}
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-text bg-300% bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-6">
              Oferta Exclusiva de Lançamento
            </h2>
            <p className="text-xl text-blue-200">Acesso Completo + Bônus</p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">O que está incluído:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">Curso Completo CodinAI</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">Atualizações futuras gratuitas</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">Acesso à Comunidade Exclusiva</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">Suporte direto com a equipe</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">Certificado de Conclusão</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-gray-400 line-through">De R$497,00</p>
                  <div className="my-2">
                    <span className="text-4xl font-bold text-white">R$197,00</span>
                    <span className="text-gray-300 ml-2">à vista</span>
                  </div>
                  <p className="text-gray-300 mb-6">ou 12x de R$20,37 no cartão</p>
                  <Button onClick={handleCtaClick} className="w-full bg-green-600 hover:bg-green-500 text-white py-6 text-xl font-bold">
                    Garantir Minha Vaga Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guarantee Section */}
          <div className="bg-gray-700 border border-gray-600 p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-gray-800 p-4 rounded-full">
              <Shield className="h-12 w-12 text-[#00BFFF]" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-2">Garantia Incondicional de 7 Dias</h3>
              <p className="text-gray-300">Teste o CodinAI sem riscos. Se não gostar, basta pedir reembolso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <FAQSection />

    {/* Final CTA Section */}
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold animate-text bg-300% bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-6">
            Pronto para transformar suas ideias em projetos reais?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            O CodinAI te dá todas as ferramentas para criar sites, apps e plataformas usando apenas IA.
          </p>
          <Button onClick={handleCtaClick} className="text-white text-xl px-8 py-6 rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 bg-green-600 hover:bg-green-500">
            👉 Quero Começar a Criar Meus Projetos com IA e Ganhar Dinheiro!
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>

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
