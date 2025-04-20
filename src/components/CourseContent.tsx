
import { FileCode, Globe, RocketIcon, Wrench, Users, Database } from "lucide-react";

const modules = [
  {
    icon: <Wrench className="h-6 w-6 text-[#00BFFF]" />,
    title: "Módulo 1: Criando Landing Page",
    items: [
      "Monte a estrutura base com IA gratuita",
      "Edite partes específicas da página",
      "Adicione ou troque imagens com facilidade"
    ]
  },
  {
    icon: <FileCode className="h-6 w-6 text-[#00BFFF]" />,
    title: "Módulo 2: Criando Website com Várias Seções",
    items: [
      "Planeje a estrutura do seu site",
      "Criação prática em duas etapas",
      "Defina estilos, cores e fontes com IA"
    ]
  },
  {
    icon: <RocketIcon className="h-6 w-6 text-[#00BFFF]" />,
    title: "Módulo 3: Criando um MVP de Plataforma SaaS",
    items: [
      "Defina o projeto e visualize o MVP",
      "Crie o prompt perfeito para a IA",
      "Integre com Supabase (banco de dados)",
      "Conecte com Stripe (pagamentos online)"
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-[#00BFFF]" />,
    title: "Módulo 4: Pixel (rastreadores e analytics)",
    items: [
      "Instale Pixel do Facebook, Clarity e UTMFY",
      "Monitore o comportamento dos visitantes",
      "Otimize suas campanhas de tráfego"
    ]
  },
  {
    icon: <Database className="h-6 w-6 text-[#00BFFF]" />,
    title: "Módulo 5: Integrações Poderosas",
    items: [
      "OpenAI (versão gratuita), Stripe, Supabase e Make",
      "Three.js (elementos 3D)",
      "Mercado Pago com checkout transparente"
    ]
  },
  {
    icon: <Globe className="h-6 w-6 text-[#00BFFF]" />,
    title: "Módulo 6: Deploy (colocando tudo no ar)",
    items: [
      "GitHub, DigitalOcean e Droplet com Droplex",
      "Conecte domínio com DNS",
      "Configure Cloudflare e SSL de forma profissional"
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
