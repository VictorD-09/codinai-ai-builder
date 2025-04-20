
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { getUrlWithUtm } from "@/utils/urlUtils";

const PricingCard = () => {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://go.perfectpay.com.br/PPU38CPMH30");
    window.location.href = url;
  };

  return (
    <Card className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <CardHeader className="text-center p-6">
        <p className="text-sm text-gray-600 uppercase">padrão</p>
        <div className="mt-2">
          <span className="text-4xl font-bold text-[#00BFFF]">R$197</span>
          <span className="text-gray-500 ml-2">por mês</span>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-[#00BFFF] text-white">
        <ul className="space-y-4">
          {[
            "✅ Acesso completo ao curso CodinAI",
            "✅ 6 módulos práticos com mais de 30 aulas",
            "✅ Atualizações vitalícias",
            "✅ Comunidade exclusiva no Discord",
            "✅ Suporte personalizado",
            "✅ Certificado de conclusão",
            "✅ Templates prontos para usar",
            "✅ Biblioteca de prompts validados",
            "✅ Guia de otimização de tráfego"
          ].map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 bg-[#00BFFF]">
        <Button 
          onClick={handleCtaClick}
          className="w-full bg-white text-[#00BFFF] hover:bg-gray-100"
        >
          Obter plano
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
