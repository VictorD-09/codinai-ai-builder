
import { ArrowRight, Check, Star, MessageSquare, Users, RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseContent } from "@/components/CourseContent";
import { getUrlWithUtm } from "@/utils/urlUtils";
import PricingCard from "@/components/PricingCard";
import FAQSection from "@/components/FAQSection";
import Timeline from "@/components/Timeline";
import "../styles/timeline.css";

export default function Index() {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://pay.kiwify.com.br/ffU3D5d");
    window.location.href = url;
  };

  return <div className="min-h-screen bg-gray-900">
    {/* Hero Section */}
    <section className="relative overflow-hidde pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto pt-10">
          <img className="mx-auto" width="220" src="/logo.png" alt="logo" />
          <h1 className="text-3xl md:text-6xl font-bold text-[#00BFFF] mb-6">
            Domine a IA e Crie Qualquer Projeto Digital do Zero — Mesmo Sem Saber Programar
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            No curso, você aprende a usar IA gratuita para criar sites, páginas de vendas, aplicativos e até SaaS, apenas descrevendo o que quer.
          </p>
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] text-center mb-12">
            É sua Oportunidade para tirar seus projetos do papel ou vender projetos feitos com IA
          </h2>
          <Timeline />
        </div>
      </div>
    </section>



    {/* Course Content Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00BFFF] mb-12">
         Veja parte do conteúdo do curso CodinAI que você ter acesso
        </h2>
        <CourseContent />
        <p className="text-center mt-8 font-semibold text-gray-300">
          Todas as ferramentas utilizadas possuem planos gratuitos, perfeitos para quem está começando sem investir em ferramentas caras.
        </p>
      </div>
    </section>

    {/* Pricing Section with Content */}
    <section className="relative py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-6">
              Aprenda do básico até o avançado de criação de projetos
            </h2>
          </div>
          <div className="relative z-20 flex justify-center">
            <PricingCard />
          </div>
          <div className="bg-[#00BFFF] text-gray-800 rounded-xl p-8 mt-[-2rem] relative z-0 shadow-lg border border-gray-100">
            <ul className="space-y-4 mt-6 text-left mb-8">
              {[
                "Acesso completo ao curso CodinAI",
                "Módulos práticos com mais de 30 aulas",
                "Atualizações vitalícias com novas ferramentas",
                "Comunidade exclusiva no Whatsapp",
                "Suporte direto com o professor",
                "Credito de $200 num servidor para você rodar seu projeto sem custo por 60 dias",
                "Bônus: Templates prontos para usar",
                "Bônus: Biblioteca de prompts validados"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Check className="h-5 w-5 text-gray-800" />
                  <span className="text-gray-800 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <Button onClick={handleCtaClick} className="w-full bg-green-600 hover:bg-green-500/90  hover:text-white text-white py-6 text-lg">
              Quero começar agora
            </Button>
          </div>
          <div className="text-center mb-4">
            <p className="text-lg text-gray-300 mt-4">
              Esta curso tem garantia de 7 dias. Se você não gostar, não conseguir aprender ou não achar que valeu a pena, basta solicitar o reembolso e devolveremos seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Especialista Section */}
    <section className="relative py-20 bg-gradient-to-br from-[#e6f7fb] to-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 max-w-4xl">
        <div className="w-full">
          <img src="/autor.jpg" alt="Victor Bertram" className="rounded-2xl shadow-2xl border-4 border-[#00BFFF] bg-white object-cover" />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold text-[#00BFFF]">
            Victor Bertram — seu mentor nessa jornada com a IA
          </h3>
          <p className="text-lg md:text-xl mt-4">
            Meu propósito aqui é destravar quem está parado, mostrar que é possível começar do zero e, com as ferramentas certas, transformar ideias em projetos reais e lucrativos. Essa tecnologia mudou a minha vida, abriu muitas portas — e eu acredito que pode mudar a sua também.
          </p>
          <p className="text-lg md:text-xl font-semibold">
            Sou Desenvolvedor Full Stack com mais de 4 anos de experiência prática na criação de aplicativos, sites, plataformas SaaS e micro-SaaS.
          </p>
          <p className="text-lg md:text-xl">
           Hoje participo de projetos que ultrapassaram seis dígitos em faturamento, seja por lançamentos ou vendas recorrentes.
          </p>
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
