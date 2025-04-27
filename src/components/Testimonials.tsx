
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 4,
    name: "Anderson Costa",
    role: "Ex-Desempregado",
    image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Estava desempregado e perdido. Com a CodinAI, criei meu próprio site de serviços em poucos dias e comecei a pegar clientes online. Hoje consigo fazer de R$2000 a R$5000 sem depender de patrão.",
    stars: 5,
  },
  {
    id: 5,
    name: "Marcos Ramos",
    role: "Motorista de Aplicativo",
    image: "https://plus.unsplash.com/premium_photo-1661371875041-41e6f1e867b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Trabalho como Uber e sempre quis uma renda extra. Aprendi a criar aplicativos simples para negócios locais usando IA. Já vendi meu primeiro projeto para uma hamburgueria!",
    stars: 5,
  },
  {
    id: 6,
    name: "Juliano Mota",
    role: "Dono de Delivery",
    image: "https://images.unsplash.com/photo-1673993386955-45fc437f5de9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Tenho uma pizzaria e estava buscando desenvolver um cardapio digital próprio pensei que deveria gastar muito dinheiro. Usando a CodinAI, criei o meu em 3 dias sem gastar com agência ou desenvolvedores. As vendas dobraram no mês seguinte.",
    stars: 5,
  },
  {
    id: 7,
    name: "Renata Alencar",
    role: "Manicure e Designer de Unhas",
    image: "https://plus.unsplash.com/premium_photo-1677434519189-c37c1bb6b848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Sempre dependi do Instagram para divulgar meu trabalho. Agora tenho meu próprio site e app de agendamento criado com IA, onde agendo clientes direto e passo muito mais confiança e meu processo fico muito melhor.",
    stars: 5,
  }
  
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold animate-text bg-300% bg-gradient-to-b from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-6">
            O que os alunos estão dizendo
          </h2>
          <p className="text-xl text-gray-300">
            Pessoas como você transformando suas ideias em produtos digitais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl relative hover:border-[#00BFFF] transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00BFFF]" 
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="text-[#00BFFF]/20 w-10 h-10" />
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} fill="#FFD700" color="#FFD700" size={18} />
                ))}
              </div>
              
              <p className="text-gray-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
