import { ArrowRight, Check, Star, MessageSquare, Users, RocketIcon, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseContent } from "@/components/CourseContent";
import { getUrlWithUtm } from "@/utils/urlUtils";
import PricingCard from "@/components/PricingCard";
import { CardFooter } from "@/components/ui/card";
import FAQSection from "@/components/FAQSection";

export default function Index() {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://pay.kiwify.com.br/ffU3D5d");
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidde pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto pt-10">
            <h1 className="text-3xl md:text-6xl font-bold text-[#00BFFF] mb-6">
              Domine a IA e Crie Qualquer Projeto Digital do Zero — Mesmo Sem Saber Programar
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              No curso, você aprende a usar IA gratuita para criar sites, páginas de vendas, aplicativos e até SaaS, apenas descrevendo o que quer.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Você já quis ter seu próprio site, app ou até uma plataforma, mas travou por não saber por onde começar — ou porque não tinha dinheiro pra contratar alguém?
            </h2>
            <p className="text-2xl   font-semibold  text-gray-600 ">Com a Inteligência Artificial, você não precisa mais depender de programadores caros nem passar meses tentando aprender código. Agora, basta descrever o que você quer... e a IA faz pra você.

            </p>

          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-6">
                O CodinAI é um curso prático, direto ao ponto e com foco em resultados rapidos.
              </h2>
              <p className="text-2xl text-gray-500">Em poucos minutos você conseguir criar o que precisa sem gastar 1 centavo com ferramentas ou AI, você vai conseguir criar:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <RocketIcon className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Landing Pages profissionais",
                  description: "Crie páginas de alta conversão em poucos minutos, perfeitas para capturar leads, vender produtos ou divulgar seu serviço com visual moderno e otimizado."
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Websites completos",
                  description: "Desenvolva sites com várias seções como 'Sobre', 'Serviços', 'Contato' e muito mais, tudo de forma visual, rápida e sem precisar escrever uma linha de código."
                },
                {
                  icon: <Star className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Aplicativos mobile",
                  description: "Crie aplicativos funcionais para Android e iOS apenas descrevendo o que precisa. Ideal para validar ideias, criar MVPs ou lançar no mercado com rapidez."
                },
                {
                  icon: <Users className="h-8 w-8 text-[#00BFFF]" />,
                  title: "SaaS que funcionam",
                  description: "Monte seu próprio Software como Serviço com login de usuários, painel administrativo, planos pagos e integrações — tudo isso com ajuda da IA."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00BFFF] mb-12">
            Este sera o conteúdo que você vai aprender no curso:
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
                Oferta Especial para novos integrantes
              </h2>
              <p className="text-lg text-gray-400 font-semibold ">
                Comece agora mesmo e desbloque o curso e todos os bônus exclusivos
              </p>
            </div>
            <div className="relative z-20 -mt-40 mb-12 flex justify-center">
              <PricingCard />
            </div>
            <div className="bg-[#00BFFF] text-gray-800 rounded-xl p-8 mt-[-2rem] relative z-0 shadow-lg border border-gray-100">
              <ul className="space-y-4 mt-6 text-left mb-8">
                {[
                  "Acesso completo ao curso CodinAI",
                  "6 módulos práticos com mais de 30 aulas",
                  "Atualizações vitalícias com novas ferramentas",
                  "Comunidade exclusiva no Whatsapp",
                  "Suporte direto com o professor",
                  "Bônus: Templates prontos para usar",
                  "Bônus: Biblioteca de prompts validados"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <Circle className="h-4 w-4 text-gray-800" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleCtaClick}
                className="w-full bg-green-600 hover:bg-green-500/90  hover:text-white text-white py-6 text-lg"
              >
                Quero começar agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#e6f7fb] to-white overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 max-w-4xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/autor.jpg"
              alt="Victor Bertram"
              className="rounded-2xl shadow-2xl object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-[#00BFFF] bg-white"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-[#00BFFF]">
              Victor Bertram — seu mentor nessa jornada com a IA
            </h3>
            <p className="text-lg md:text-xl font-semibold">
              Sou Desenvolvedor Full Stack com mais de 4 anos de experiência prática na criação de aplicativos, sites, plataformas SaaS e micro-SaaS.
            </p>
            <p className="text-lg md:text-xl">
              Domino diversas tecnologias e linguagens de programação — de JavaScript a Python, passando por React, Node.js, .NET e muito mais.
            </p>
            <p className="text-lg md:text-xl">
              Já participei do desenvolvimento de projetos que somam mais de R$ 150 mil reais em faturamento, seja por lançamentos ou vendas diretas.
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
    </div>
  );
}
