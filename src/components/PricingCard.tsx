
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const offers = [
  {
    title: "Acesso por 12 meses",
    price: "R$197,00",
    upfront: "à vista",
    installments: "ou 12x R$20,37 no cartão",
    oldPrice: "R$497",
    withCommunity: true,
    benefits: [
      "Acesso completo ao curso CodinAI",
      "Módulos práticos com mais de 30 aulas",
      "Atualizações vitalícias com novas ferramentas",
      "Suporte direto com o professor",
      "Crédito de $200 num servidor para você rodar seu projeto sem custo por 60 dias",
      "Bônus: Templates prontos para usar",
      "Bônus: Biblioteca de prompts validados",
      "Comunidade exclusiva no Whatsapp",
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
    benefits: [
      "Acesso completo ao curso CodinAI",
      "Módulos práticos com mais de 30 aulas",
      "Atualizações vitalícias com novas ferramentas",
      "Suporte direto com o professor",
      "Crédito de $200 num servidor para você rodar seu projeto sem custo por 60 dias",
      "Bônus: Templates prontos para usar",
      "Bônus: Biblioteca de prompts validados",
      "Sem acesso à comunidade",
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
          className={`w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative z-20 border-2 ${offer.withCommunity ? "border-[#00BFFF]" : "border-gray-200"}`}
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
            <ul className="space-y-2 text-left">
              {offer.benefits.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 text-base ${item.includes("Sem acesso à comunidade") ? "text-red-500 font-medium" : "text-gray-700"}`}
                >
                  {item.includes("Comunidade exclusiva") || item.includes("Sem acesso à comunidade") ? <Users className="h-4 w-4" /> : <span className="w-4 h-4 inline-block rounded-full bg-[#00BFFF]" />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingCard;
