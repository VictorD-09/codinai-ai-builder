
import React from 'react';

const timelineData = [
  {
    title: "Comece sem conhecimento prévio",
    content: "Não precisa saber programar! O curso é totalmente focado em  pessoas sem experiência prévia em programação nem tecnologia,te ensinarei passo a passo e utilizando inteligência artificial desde a criação do projeto até colocar no ar."
  },
  {
    title: "Ferramentas gratuitas",
    content: "Todas as ferramentas apresentadas no curso possuem versões gratuitas, alem disso você recebe um Bonus de $200 para rodar seu projeto sem custo por 60 dias num servidor, então você vai criar seu projeto sem nenhum investimento extra além do curso."
  },
  {
    title: "Aprenda no seu ritmo",
    content: "Você terá acesso por 12 meses ao conteúdo e a todas as atualizações realizadas durante esse período. Além disso, poderá utilizar os projetos já desenvolvidos — prontos para copiar e rodar com a sua marca — e também os que forem criados ao longo do curso. Você ainda contará com uma comunidade exclusiva para tirar dúvidas diretamente com o professor."
  },
  {
    title: "Crie projetos profissionais",
    content: "Você vai aprender a criar Landing Pages, Websites completos, Aplicativos, plataformas SaaS com funcionalidades reais, incluindo login, painel de usuário, pagamentos, integrações e muito mais."
  },
  {
    title: "Suporte contínuo",
    content: "Você terá acesso ao grupo exclusivo no WhatsApp e suporte direto com o professor para ajudar em qualquer etapa da sua jornada."
  }
];

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="">
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
