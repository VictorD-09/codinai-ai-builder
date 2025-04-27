
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Empresário",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    content: "Nunca achei que conseguiria criar meu próprio app, mas com o CodinAI eu fiz isso em 2 dias! Agora estou validando minha ideia com usuários reais.",
    stars: 5,
  },
  {
    id: 2,
    name: "Ana Ferreira",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    content: "Como designer, sempre precisei de desenvolvedores para transformar meus layouts em sites. Agora faço tudo sozinha usando IA, economizando tempo e dinheiro.",
    stars: 5,
  },
  {
    id: 3,
    name: "Marcos Oliveira",
    role: "Empreendedor",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    content: "Já vendi 3 projetos desenvolvidos com as técnicas que aprendi no CodinAI. Estou realmente impressionado com o quanto é possível fazer sem precisar programar.",
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
