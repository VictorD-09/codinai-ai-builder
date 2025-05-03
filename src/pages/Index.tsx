
import { ArrowRight, Check, Users, RocketIcon, Sparkles, Shield, Code, Database, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getUrlWithUtm } from "@/utils/urlUtils";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import FloatingCTA from "@/components/FloatingCTA";

export default function Index() {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://pay.kiwify.com.br/Pu7JTax");
    window.location.href = url;
  };

  return <div className="min-h-screen  bg-gray-900 relative">
    <FloatingCTA onClick={handleCtaClick} />

    {/* Hero Section with Headline */}
    <section className="relative overflow-hidden py-20 md:py-32 pt-20">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-b from-cyan-400 to-blue-600 animate-text bg-300% text-transparent bg-clip-text mb-6 leading-tight">
            Crie e Lucre com Projetos Digitais Usando Apenas Inteligência Artificial!</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Domine a nova era da tecnologia e construa sites, apps e micro-SaaS do zero — mesmo que você nunca tenha programado antes. </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={handleCtaClick} className="text-white text-lg md:text-xl px-8 py-6 rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 bg-green-600 hover:bg-green-500">
              Quero começar agora
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Storytelling Section */}
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg md:text-xl space-y-8">
          <p> Hoje, existe uma oportunidade gigantesca: você pode criar seus próprios produtos ou oferecer serviços para consultorias, pessoas, autonomos, infoprodutores e muitos outros.</p>
          <p> A inteligência artificial assumiu o trabalho pesado — mas ela só faz a diferença se você souber como usar da maneira certa. </p>

          <p> Quem entende e aprende a como usar AI para Criar, consegue lançar ideias, montar negócios e atender clientes em tempo recorde — tudo sem precisar escrever uma linha de código. </p>
          <div className="my-12 bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="w-full md:w-2/5  m-auto">
              <img src="/autor1.webp" alt="Victor Bertram" className="rounded-2xl shadow-2xl border-4 border-[#00BFFF] bg-white object-cover" />
            </div>

            <p className="font-medium text-white mb-4 mt-3">
              Eu sou <span className="font-bold text-[#00BFFF]">Victor Bertram</span>. Com mais de 4 anos de experiência em desenvolvimento, criei diversos projetos que já geraram <span className="font-bold text-green-400">mais de R$200 mil em vendas</span>.
            </p>
            <p className="font-medium text-white">
              Agora, estou te entregando o <span className="font-bold text-[#00BFFF]">método que uso para criar plataformas, apps, sites, Saas e Micro-Saas de forma rápida e poderosa</span> — usando apenas IA.
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
            <p className="text-gray-200 text-lg">Validar ideias de negócios sem gastar rios de dinheiro.</p>
          </div>

          <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-lg">Atender clientes e gerar renda extra (ou principal) criando projetos digitais.</p>
          </div>

          <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00BFFF] transition-all hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-200 text-lg">Lançar seu próprio produto digital, micro-SaaS ou SaaS.</p>
          </div>

        </div>
      </div>
    </section>


    {/* "What You Can Create" Section */}
    {/* <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
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
    </section> */}

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
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-2xl font-bold text-blue-200  bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text ">Acesso Completo + Bônus</p>
                <h3 className="text-xl font-semibold text-white mb-6 mt-3">O que está incluído:</h3>
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
                    <p className="text-gray-200">Suporte direto com a professor</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">Certificado de Conclusão</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200"><b>Bônus:</b> Projetos prontos, apenas para copiar, colar e subir para rodar</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200"><b>Bônus:</b> Prompt secretos para obter melhor resultado</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200"><b>Bônus:</b> Acesso a minha lista de links pessoais, contem componentes, temas, templates e muito mais.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-200"><b>Bônus:</b> Cupom de $200 num servidor para rodar sua criação por 60 dias de graça.</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-gray-400 ">De <b className="line-through text-[red]">R$197,00</b> por</p>
                  <div className="my-2">
                    <span className="text-4xl font-bold text-white">R$10,03</span>
                    <span className="text-gray-300 ml-2 text-[14px]">no cartão em 12x</span>
                  </div>
                  <p className="text-gray-300 mb-6 text-[18px] font-medium">ou R$97,00 à vista</p>
                  <Button onClick={handleCtaClick} className="w-full bg-green-600 hover:bg-green-500 text-white py-6 text-xl font-bold">
                   Começar Agora
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
              <h3 className="font-bold text-2xl text-white mb-2">Garantia CodinAI: Risco Zero para Você</h3>
              <p className="text-gray-300">Acrediot tanto na transformação que o CodinAI pode trazer para você ou seu negócio que oferecemos uma garantia incondicional de 7 dias.</p>
              <p className="text-gray-300 mt-3">Se durante esse período você sentir que o conteudo não é para você,  por qualquer motivo, basta enviar uma mensagem. Que farei o reembolso completo, sem burocracia e sem questionamentos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <FAQSection />



  </div>;
}
