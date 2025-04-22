
// Como o usuário pediu FAQ com pelo menos 5 perguntas, já temos um componente FAQSection no projeto com 5 perguntas e o botão para WhatsApp.
// Vou aproveitar e garantir que o botão linka para o número e a mensagem indicada.

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";

const FAQS = [
  {
    question: "Em quanto tempo consigo fazer o meu projeto?",
    answer: "Você pode criar um projeto simples em apenas alguns minutos. O curso é dividido em módulos que você pode seguir no seu ritmo. Dependendo do projeto, em poucas horas você já terá algo funcional e pronto para rodar!"
  },
  {
    question: "Posso aplicar o que aprendo para vender serviços também?",
    answer: "Com certeza! O que você aprende no curso também pode ser usado para oferecer serviços como desenvolvedor no code, criador de MVPs ou consultor em projetos digitais."
  },
  {
    question: "Preciso ter uma ideia de negócio antes de começar?",
    answer: "Não! Se você ainda não tem uma ideia definida, mas quer aprender a usar IA para criar e vender projetos ou oferecer serviços, eu posso te ajudar a desenvolver algo do zero. O curso é focado em te ensinar a usar a inteligência artificial para criar qualquer tipo de projeto digital. Ou seja, você pode começar com uma ideia ou aprender a construir um projeto desde o início."
  },
  {
    question: "Esse curso é para mim mesmo que eu nunca tenha trabalhado com tecnologia?",
    answer: "Sim! O conteúdo foi pensado justamente para quem quer entrar no mundo tech mesmo sem nenhuma base. Tudo é explicado de forma simples, com apoio da inteligência artificial e o professor claro."
  },
  {
    question: "Vou conseguir lançar meu projeto mesmo sem equipe?",
    answer: "Sim! Você vai aprender a construir e lançar projetos sozinho, usando ferramentas que automatizam boa parte do processo."
  }
];

const whatsappNumber = "554998218294";
const whatsappMessage = "Tenho interesse no curso CodinAi quero saber mais";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto max-w-3xl px-4">
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
          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            style={{whiteSpace: "wrap"}}
            className="bg-[#25D366] w-full py-[2rem] hover:bg-[#128C7E] text-white text-lg font-bold rounded-full shadow-lg "
          >
            
            Tem uma dúvida?<br/> Fale comigo no WhatsApp
           
          </Button>
      </div>
    </section>
  );
}

