
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Circle } from "lucide-react";
import { getUrlWithUtm } from "@/utils/urlUtils";

const PricingCard = () => {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://go.perfectpay.com.br/PPU38CPMH30");
    window.location.href = url;
  };

  return (
    <Card className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative z-20">
      <CardHeader className="text-center p-6">
        <p className="text-sm text-gray-600 uppercase">Acesso Vitalício</p>
        <div className="mt-2">
          <span className="text-4xl font-bold text-[#00BFFF]">R$197</span>
          <span className="text-gray-500 ml-2">à vista</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          <s>De R$497</s> por apenas
        </p>
      </CardHeader>
      <CardFooter className="p-6 bg-white">
        <Button 
          onClick={handleCtaClick}
          className="w-full bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white py-6"
        >
          Quero começar agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
