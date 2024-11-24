import './App.css'
import { Button } from "@nextui-org/react";
import NavbarArea from './Componentss/Navbar';
import Hero from './Componentss/Hero';
import Vision from './Componentss/Vision';
import Offer from './Componentss/Offer';
import DevitCard from './Componentss/DevitCard';
import PerfectCard from './Componentss/PerfectCard';
import Great from './Componentss/Great';


function App() {

  return (
    <>
      <main className="overflow-x-hidden">
        <NavbarArea />
        <div className="w-full max-w-[1400px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto py-5">
          <div className='space-y-[80px]'>
            <Hero />
            <Vision />
            <Offer />
            <DevitCard />
            <PerfectCard />
            <Great/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
