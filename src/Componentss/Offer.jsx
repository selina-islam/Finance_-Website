import { div } from 'framer-motion/client';
import React from 'react'

function Offer() {
        const OfferList = [
          {
            tittle: "Cardano Debit-Cards",
            des: "Cardano, simplified. The debit card that makes crypto spending easy.",
            icon: "/dolar.png",
          },
          {
            tittle: "On & Off Ramp",
            des: "Fiat meets crypto, effortlessly buy, sell, and manage.",
            icon: "/link.png",
          },
          {
            tittle: "Solutions for business",
            des: "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
            icon: "/f.pnf",
          },
        ];
  return (
    <section className="space-y-12">
      <h2 className="font-bold leading-tight text-center text-2xl lg:text-3xl">
        What do we offer?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {OfferList.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="bg-[#3D3F54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5">
              <img className='h-6 w-6' src={item.icon} alt="Photo" />
            </div>
            <div>
              <h4 className='font-bold text-lg'>{item.tittle}</h4>
              <p className='text-secondary text-sm'>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offer