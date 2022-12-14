import Link from "next/link";
import dynamic from "next/dynamic";
const TwoWrapper = dynamic(() => import("../components/two_thingy/twowrap"), {
  ssr: false,
});
import Image from "next/image";
import Navbar from "../components/navbar";

//to do: fix responsivness CRITICAL
//make elements less *hardcoded*

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl tracking-widest font-mono font-bold text-primary ml-3">
        PROJECT
      </h1>
      <h1 className="text-7xl tracking-widest font-mono font-bold text-primary -ml-10">
        CLOUD4
      </h1>
      <br />
      <div className="flex flex-row ">
        <div>
          <div className="flex flex-row text-5xl tracking-wider font-mono font-bold ">
            <h1 className="text-5xl tracking-wider font-mono font-bold">
              Coming
            </h1>
            <h1 className="text-primary ml-4">S</h1>
            <h1 className="text-secondary ">oo</h1>
            <h1 className="text-primary">n</h1>
          </div>
          <br />
          <br />
          <Link href="/contact">
            <button className="btn-primary font-mono btn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  return (
    <div className="relative">
      <div className="z-0 h-screen flex flex-row justify-center items-center absolute -mt-8 ml-6">
        <TwoWrapper />
      </div>
      <div className="h-screen flex flex-row justify-center items-center z-1">
        <div className="h-1/2 w-1/2 relative ">
          <Image fill className="object-cover" src="/logopc4.png" />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <div className="w-screen fixed z-10">
        <Navbar />
      </div>
      <div className="h-screen w-screen flex flex-row justify-center items-center bg-[url('/bg.png')] bg-cover">
        <div className="basis-1/2">
          <Main />
        </div>
        <div className="basis-1/2">
          <Showcase />
        </div>
      </div>
    </div>
  );
}
