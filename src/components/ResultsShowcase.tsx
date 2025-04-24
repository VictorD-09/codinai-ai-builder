import React from 'react';
import { ArrowRight, Layout, Briefcase, PiggyBank, ListChecks, CalendarDays, ClipboardCheck, ShoppingCart, Layers, List, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [{
  icon: Layout,
  name: "Landing Page Profissional",
  description: "Crie páginas de captura atraentes para divulgar seus serviços e conquistar clientes.",
  example: "Perfeito para consultórios médicos, dentistas, psicólogos e outros profissionais autônomos",
  tags: ["Marketing Digital", "Vendas", "React", "Tailwind"]
}, {
  icon: Briefcase,
  name: "CRM Simplificado",
  description: "Sistema para gerenciar clientes, leads e acompanhar vendas de forma descomplicada.",
  example: "Ideal para pequenas empresas, escritórios de advocacia e consultorias",
  tags: ["Gestão", "Vendas", "React Query", "Database"]
}, {
  icon: PiggyBank,
  name: "Controle Financeiro",
  description: "Aplicativo para controlar receitas, despesas e gerar relatórios financeiros.",
  example: "Perfeito para MEIs, autônomos e controle pessoal",
  tags: ["Finanças", "Relatórios", "Charts", "API"]
}, {
  icon: ListChecks,
  name: "Quiz Diagnóstico",
  description: "Crie questionários interativos que geram diagnósticos personalizados.",
  example: "Excelente para coaches, consultores e profissionais de marketing",
  tags: ["Lead Generation", "Marketing", "React", "Forms"]
}, {
  icon: CalendarDays,
  name: "Sistema de Agendamento",
  description: "Plataforma para gerenciar horários, clientes e serviços automaticamente.",
  example: "Ideal para salões de beleza, clínicas e profissionais que atendem com hora marcada",
  tags: ["Serviços", "Automação", "Calendar", "Database"]
}, {
  icon: ClipboardCheck,
  name: "Portfólio Digital",
  description: "Site profissional para mostrar seus trabalhos e conquistar mais projetos.",
  example: "Perfeito para designers, desenvolvedores e criativos freelancers",
  tags: ["Portfolio", "Marketing", "Gallery", "React"]
}, {
  icon: ShoppingCart,
  name: "Site de Vendas",
  description: "Loja virtual completa com carrinho e checkout para vender seus produtos.",
  example: "Ótimo para artesãos, produtores digitais e pequenos comércios",
  tags: ["E-commerce", "Vendas", "Payments", "API"]
}, {
  icon: Layers,
  name: "Mini SaaS de Hábitos",
  description: "App para usuários acompanharem metas e desenvolverem hábitos positivos.",
  example: "Ideal para coaches de produtividade e consultores de desenvolvimento pessoal",
  tags: ["SaaS", "Produtividade", "React", "Database"]
}, {
  icon: List,
  name: "Checklist Interativo",
  description: "Sistema de checklists personalizados para acompanhamento de processos.",
  example: "Perfeito para consultores, agências e gestão de projetos",
  tags: ["Processos", "Gestão", "React", "Forms"]
}, {
  icon: Calculator,
  name: "Calculadora Especializada",
  description: "Ferramentas de cálculo personalizadas para seu nicho de mercado.",
  example: "Excelente para nutricionistas, consultores financeiros e profissionais técnicos",
  tags: ["Ferramentas", "Conversão", "React", "Calculator"]
}];

const ResultsShowcase = () => {
  return <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text bg-gradient-to-r from-[#c0c0c0] via-[#ffffff] to-[#c0c0c0] bg-clip-text text-transparent bg-300% hover:bg-gradient-to-l transition-all duration-200">
            Veja exemplos do que você pode criar com o CodinAI – mesmo sem saber programar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Você vai dominar a base para a criação de qualquer tipo de projeto isso apenas descrevendo o que você precisa e deixando a AI Fazer todo o trabalho pesado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white hover:border-[#00BFFF] transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <project.icon className="w-6 h-6 text-[#00BFFF]" />
                  <CardTitle className="text-xl animate-text bg-gradient-to-r from-[#a0a0a0] via-[#f0f0f0] to-[#a0a0a0] bg-clip-text text-transparent bg-300% hover:bg-gradient-to-l transition-all duration-200">
                    {project.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-3">
                  {project.example}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                      {tag}
                    </span>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6"></p>
          <Button onClick={() => {
          const element = document.getElementById('pricing');
          element?.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="text-white font-semibold bg-green-600 hover:bg-green-500">
            Quero criar meus projetos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>;
};

export default ResultsShowcase;
