
import { ArrowRight, Check, Star, MessageSquare, Users, RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00BFFF]/10 to-white pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Crie Sites, Apps, Páginas de Vendas e até SaaS com Inteligência Artificial
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Mesmo que você nunca tenha programado na vida. Usando apenas ferramentas de IA gratuitas.
            </p>
            <p className="text-xl text-gray-700 font-medium mb-8">
              👉 Você descreve. A IA gratuita constrói.
            </p>
            <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white px-8 py-6 rounded-full text-lg">
              Quero aprender agora <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Você já quis ter seu próprio site, aplicativo ou plataforma…
              <br />Mas travou por não saber por onde começar?
            </h2>
            <div className="space-y-6 text-left">
              {[
                "Já gastou dinheiro com agências e não teve resultado",
                "Tentou aprender programação, mas ficou perdido",
                "Tem uma ideia incrível, mas não tem conhecimento técnico",
                "Quer vender mais no digital, mas não tem presença online"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full bg-[#00BFFF]/10 p-2">
                    <Check className="h-6 w-6 text-[#00BFFF]" />
                  </div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-xl text-gray-700 font-medium">
              Você não está sozinho — e a solução agora está nas suas mãos.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O CodinAI é um curso prático, direto ao ponto e feito pra você
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <RocketIcon className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Landing Pages profissionais",
                  description: "Crie páginas de alta conversão em minutos"
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Websites completos",
                  description: "Desenvolva sites com várias seções"
                },
                {
                  icon: <Star className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Aplicativos mobile",
                  description: "Crie apps funcionais sem código"
                },
                {
                  icon: <Users className="h-8 w-8 text-[#00BFFF]" />,
                  title: "SaaS que funcionam",
                  description: "Monte seu próprio software como serviço"
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

      {/* What You'll Get Section */}
      <section className="py-20 bg-gradient-to-b from-[#00BFFF]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              O Que Você Vai Receber
            </h2>
            <div className="space-y-6">
              {[
                "Acesso completo ao curso CodinAI",
                "Aulas práticas e rápidas (5 a 8 minutos)",
                "Modelos prontos e prompts validados",
                "Ferramentas 100% gratuitas e acessíveis",
                "Acesso a uma comunidade exclusiva com suporte",
                "Atualizações vitalícias"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <Check className="h-6 w-6 text-[#00BFFF]" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00BFFF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comece Sua Jornada Agora
            </h2>
            <p className="text-xl mb-8 opacity-90">
              De R$497 por apenas R$197 (por tempo limitado)
            </p>
            <Button size="lg" className="bg-white text-[#00BFFF] hover:bg-gray-100 px-8 py-6 rounded-full text-lg">
              Quero começar agora <ArrowRight className="ml-2" />
            </Button>
            <p className="mt-6 text-sm opacity-75">
              🔒 Garantia incondicional de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 CodinAI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
