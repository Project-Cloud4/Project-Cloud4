import TwoWrapper from "./two_thingy/twowrap";
import ProjectC4 from "./assets/pc4.png";
import Logo from "./assets/logopc4.png";

//to do: fix responsivness CRITICAL
//add nextjs Link wrapper to Contact Button button
//integrate navbar
//make elements less *hardcoded*

const HomePage_Main = () => {
  return (
    <div className="flex-initial w-3/4 items-end">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl tracking-widest font-bold text-primary ml-3">
          PROJECT CLOUD4
        </h1>
        <br />
        <div className="flex flex-row">
          <div>
            <h1 className="text-5xl tracking-wider font-bold flex flex-row basis-1/2">
              Coming <h1 className="text-primary ml-4">S</h1>
              <h1 className="text-secondary ">oo</h1>
              <h1 className="text-primary">n</h1>
            </h1>
            <br />
            <br />
            <button className="btn-primary btn">Contact</button>
          </div>
          <div className="basis-1/2 flex-1 w-96"></div>
        </div>
      </div>
    </div>
  );
};

const HomePage_Showcase = () => {
  return (
    <div className="relative h-screen">
      <div className="flex flex-row absolute h-screen w-full justify-end items-center -ml-20">
        <img className="h-2/3 flex" src={Logo}></img>
      </div>
      <div className="flex flex-row justify-end items-center mt-36 flex-1 place-self-end">
        <TwoWrapper></TwoWrapper>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center ">
      <HomePage_Main />
      <HomePage_Showcase />
    </div>
  );
}
