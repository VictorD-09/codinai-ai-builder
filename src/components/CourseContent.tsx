
import { FileCode, Globe, RocketIcon, Wrench, Users, Database, Phone } from "lucide-react";

const modules = [
  {
    icon: <Wrench className="h-6 w-6 text-[#00BFFF]" />,
    title: "Criando Landing Page",
    items: [
      "Monte a estrutura base da landing page utilizando IA gratuita",
      "Edite partes específicas da página (textos, botões, seções, etc.)",
      "Adicione ou troque imagens, vídeos e ícones com facilidade",
      "Aplique técnicas de SEO para otimizar sua página para buscadores"
    ]
  },
  {
    icon: <FileCode className="h-6 w-6 text-[#00BFFF]" />,
    title: "Criando Website com Várias Seções",
    items: [
      "Planeje e defina a estrutura do seu site (home, sobre, contato, etc.)",
      "Desenvolva a criação prática do site em duas etapas (front-end e back-end)",
      "Personalize estilos, cores e fontes utilizando IA, adaptando o design ao seu nicho",
      "Adicione funcionalidades interativas com JavaScript e APIs externas"
    ]
  },
  {
    icon: <RocketIcon className="h-6 w-6 text-[#00BFFF]" />,
    title: "Criando um MVP de Plataforma SaaS",
    items: [
      "Defina o escopo do seu projeto SaaS e visualize o MVP",
      "Crie o prompt perfeito para a IA gerar o código do seu MVP",
      "Integre com Supabase (banco de dados) para gestão de dados em tempo real",
      "Conecte com Stripe para processar pagamentos online de forma segura",
      "Implemente sistemas de autenticação e login de usuários"
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-[#00BFFF]" />,
    title: "Pixel (Rastreadores e Analytics)",
    items: [
      "Instale e configure o Pixel do Facebook, Clarity e UTMFY no seu projeto",
      "Monitore e analise o comportamento dos visitantes do site com ferramentas de rastreamento",
      "Otimize suas campanhas de tráfego utilizando dados analíticos e insights em tempo real",
      "Ajuste o funil de vendas com base nos dados coletados"
    ]
  },
  {
    icon: <Database className="h-6 w-6 text-[#00BFFF]" />,
    title: " Integrações",
    items: [
      "Integre OpenAI (versão gratuita) para gerar conteúdo automatizado e chatbots",
      "Configure Stripe, Supabase e Make para automação e pagamentos",
      "Utilize Three.js para integrar elementos 3D interativos no seu projeto",
      "Implemente Mercado Pago com checkout transparente para facilitar pagamentos em múltiplos países"
    ]
  },
  {
    icon: <Phone className="h-6 w-6 text-[#00BFFF]" />,
    title: " Desenvolvimento de Aplicativos Móveis",
    items: [
      "Aprenda a criar aplicativos móveis com React Native e IA para gerar código automaticamente",
      "Desenvolva funcionalidades como login, banco de dados e notificações push",
      "Otimize a interface do aplicativo para diferentes dispositivos e tamanhos de tela",
      "Implemente APIs e serviços de terceiros para melhorar a experiência do usuário no app"
    ]
  },
  {
    icon: <Globe className="h-6 w-6 text-[#00BFFF]" />,
    title: "Deploy (Colocando Tudo no Ar)",
    items: [
      "Utilize GitHub para versionamento de código e colaboração",
      "Configure DigitalOcean e Droplet com Droplex para hospedar seu projeto",
      "Conecte seu domínio com DNS e configure Cloudflare para melhorar a performance e segurança",
      "Implemente SSL de forma profissional para garantir a segurança no tráfego de dados"
    ]
  }
];

export const CourseContent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {modules.map((module, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            {module.icon}
            <h3 className="text-xl font-semibold">{module.title}</h3>
          </div>
          <ul className="space-y-3">
            {module.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <div className="rounded-full bg-[#00BFFF]/10 p-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#00BFFF]" />
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
