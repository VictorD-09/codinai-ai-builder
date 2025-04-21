
import React from 'react';

const timelineData = [
  {
    title: "Comece sem conhecimento prévio",
    content: "Não precisa saber programar! O curso é totalmente focado em pessoas sem experiência prévia em programação, guiando passo a passo e utilizando inteligência artificial."
  },
  {
    title: "Ferramentas gratuitas ao seu alcance",
    content: "Todas as ferramentas apresentadas no curso possuem versões gratuitas, perfeitas para começar sem nenhum investimento extra além do curso."
  },
  {
    title: "Aprenda no seu ritmo",
    content: "Você terá acesso por 12 meses ao conteúdo e a todas as atualizações feitas durante este período, além da comunidade exclusiva para tirar suas dúvidas."
  },
  {
    title: "Crie projetos profissionais",
    content: "Você vai aprender a criar plataformas SaaS com funcionalidades reais, incluindo login, painel de usuário, pagamentos e integrações."
  },
  {
    title: "Suporte contínuo",
    content: "Você terá acesso ao grupo exclusivo no WhatsApp e suporte direto com o professor para ajudar em qualquer etapa da sua jornada."
  }
];

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="outer">
        {timelineData.map((item, index) => (
          <div key={index} className="card">
            <div className="info">
              <h3 className="title">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
