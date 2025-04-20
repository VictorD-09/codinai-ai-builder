
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Circle } from "lucide-react";
import { getUrlWithUtm } from "@/utils/urlUtils";

const PricingCard = () => {
 

  return (
    <Card className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative z-20">
      <CardHeader className="text-center p-6">
        <p className="text-lg  font-bold text-gray-600 uppercase ">Acesso por 12 meses</p>
        <p className="text-sm text-gray-300 mt-2">
          <s>De R$497</s> por apenas
        </p>
    
        <div className="mt-2">
          <span className="text-4xl font-bold text-[#00BFFF]">R$197</span>
          <span className="text-gray-500 ml-2">à vista</span>
        </div>
        <p className='text-lg text-gray-500'>ou 12x R$20,37</p>
      </CardHeader>
    
    </Card>
  );
};

export default PricingCard;
