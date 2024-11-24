import { div } from 'framer-motion/client';
import React from 'react'

function Great() {
        const GreatCard = [
          {
            img: "p1.png",
            des: `"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."`,
            name: "Hadid Khan",
            role: "UIUX Designer",
          },
          {
            img: "p2.png",
            des: `"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."`,
            name: "Wade Warren",
            role: "Web Designer",
          },
          {
            img: "p3.png",
            des: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`,
            name: "Jenny Wilson",
            role: "Trust Administrator",
          },
        ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {GreatCard.map((great, i) => (
        <div className="bg-[#27322F3D] rounded-md  py-6 px-5">
          <img src="/66.png" alt="Photo" className='mb-6' />
          <p>{great.des}</p>
          <div className="flex gap-3 my-8">
            <img src={great.img} alt="Photo" />
            <div className=''>
              <h6 className='font-bold'>{great.name}</h6>
              <p className='text-gray-400 text-sm '>{great.role}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Great