
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";

const FAQS = [
  {
    question: "Preciso saber programar para fazer o curso?",
    answer: "Não! O curso é totalmente focado em pessoas sem experiência prévia em programação, guiando passo a passo e utilizando inteligência artificial."
  },
  {
    question: "Vou precisar investir em ferramentas pagas?",
    answer: "Não. Todas as ferramentas apresentadas no curso possuem versões gratuitas, perfeitas para começar sem nenhum investimento extra."
  },
  {
    question: "Terei acesso vitalício ao conteúdo?",
    answer: "Você terá acesso por 12 meses ao conteúdo e a todas as atualizações feitas durante este período, além da comunidade exclusiva."
  },
  {
    question: "O curso ensina a criar SaaS de verdade?",
    answer: "Sim! Você vai aprender a criar plataformas SaaS com funcionalidades reais, incluindo login, painel de usuário, pagamentos e integrações."
  },
  {
    question: "Como posso tirar dúvidas durante o curso?",
    answer: "Você terá acesso ao grupo exclusivo no WhatsApp e suporte direto com o professor para ajudar em qualquer etapa da sua jornada."
  }
];

const whatsappNumber = "5549998218294";
const whatsappMessage = "Tenho interesse no curso CodinAi quero saber mais";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] text-center mb-10">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="mb-8">
          {FAQS.map((faq, idx) => (
            <AccordionItem value={`faq-${idx}`} key={faq.question}>
              <AccordionTrigger className="text-lg font-semibold text-gray-700">
                <Circle className="h-4 w-4 text-[#00BFFF] mr-3" />
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 bg-[#F6F8FA] rounded-b px-4 py-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com o Especialista no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
