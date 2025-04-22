
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Users, Check, DollarSign, RocketIcon, CircleCheck, CircleDollarSign, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    title: "Acesso por 12 meses + Comunidade",
    price: "R$197,00",
    upfront: "à vista",
    installments: "ou 12x R$20,37 no cartão",
    oldPrice: "R$497",
    withCommunity: true,
    checkout: "https://pay.kiwify.com.br/ffU3D5d",
    benefits: [
      { label: "Acesso completo ao curso CodinAI", icon: Check },
      { label: "Módulos práticos com mais de 30 aulas", icon: RocketIcon },
      { label: "Atualizações vitalícias com novas ferramentas", icon: Check },
      { label: "Suporte direto com o professor", icon: Users },
      { label: "Crédito de $200 num servidor para você rodar seu projeto sem custo por 60 dias", icon: DollarSign },
      { label: "Bônus: Templates prontos para usar", icon: CircleCheck },
      { label: "Bônus: Biblioteca de prompts validados", icon: CircleCheck },
      { label: "Comunidade exclusiva no Whatsapp", icon: Users },
    ],
    highlight: "Mais recomendado",
  },
  {
    title: "Acesso por 12 meses",
    price: "R$97,00",
    upfront: "à vista",
    installments: "ou 12x R$10,03 no cartão",
    oldPrice: "R$497",
    withCommunity: false,
    checkout: "https://pay.kiwify.com.br/Pu7JTax",
    benefits: [
      { label: "Acesso completo ao curso CodinAI", icon: Check },
      { label: "Módulos práticos com mais de 30 aulas", icon: RocketIcon },
      { label: "Atualizações vitalícias com novas ferramentas", icon: Check },
      { label: "Suporte direto com o professor", icon: Users },
      { label: "Crédito de $200 num servidor para você rodar seu projeto sem custo por 60 dias", icon: DollarSign },
      { label: "Bônus: Templates prontos para usar", icon: CircleCheck },
      { label: "Bônus: Biblioteca de prompts validados", icon: CircleCheck },
      { label: "Sem acesso à comunidade", icon: CircleX },
    ],
    highlight: "",
  },
  {
    title: "Acesso por 12 meses (Extra)",
    price: "R$97,00",
    upfront: "à vista",
    installments: "ou 12x R$10,03 no cartão",
    oldPrice: "R$497",
    withCommunity: false,
    checkout: "https://pay.kiwify.com.br/Pu7JTax",
    benefits: [
      { label: "Acesso completo ao curso CodinAI", icon: Check },
      { label: "Módulos práticos com mais de 30 aulas", icon: RocketIcon },
      { label: "Atualizações vitalícias com novas ferramentas", icon: Check },
      { label: "Suporte direto com o professor", icon: Users },
      { label: "Crédito de $200 num servidor para você rodar seu projeto sem custo por 60 dias", icon: DollarSign },
      { label: "Bônus: Templates prontos para usar", icon: CircleCheck },
      { label: "Bônus: Biblioteca de prompts validados", icon: CircleCheck },
      { label: "Sem acesso à comunidade", icon: CircleX },
    ],
    highlight: "",
  },
];

const PricingCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center">
      {offers.map((offer, idx) => (
        <Card
          key={idx}
          className={`w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative z-20 border-2 ${
            offer.withCommunity ? "border-[#00BFFF]" : "border-gray-200"
          }`}
        >
          {offer.highlight && (
            <span className="absolute top-0 left-0 right-0 py-2 text-xs bg-[#00BFFF] text-white font-bold text-center rounded-t-xl z-30">
              {offer.highlight}
            </span>
          )}
          <CardHeader className="text-center p-6 pb-0">
            <p className="text-lg font-bold text-gray-600 uppercase">{offer.title}</p>
            <p className="text-sm text-gray-300 mt-2">
              <s>De {offer.oldPrice}</s> por apenas
            </p>
            <div className="mt-2">
              <span className="text-4xl font-bold text-[#00BFFF]">{offer.price}</span>
              <span className="text-gray-500 ml-2">{offer.upfront}</span>
            </div>
            <p className="text-lg text-gray-500">{offer.installments}</p>
          </CardHeader>
          <CardContent className="px-6 pb-6 pt-4">
            <ul className="space-y-2 text-left mb-4">
              {offer.benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={i}
                    className={`flex items-center gap-3 text-base ${
                      item.label.includes("Sem acesso") ? "text-red-500 font-medium" : "text-gray-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
            <Button
              className="w-full bg-[#00BFFF] text-white hover:bg-[#0099cc] text-lg font-bold py-3 mt-2"
              asChild
            >
              <a href={offer.checkout} target="_blank" rel="noopener noreferrer">
                Quero esse plano
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingCard;
