import logo from "./assets/logopc4.png";
//it is responsive thanks god
//margin top on wrapper to be enhanced when adding navbar
export default function AboutPage() {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col mt-10">
        <div className="flex flex-row items-center ">
          <div className="basis-1/2 flex justify-center">
            <h1 className=" text-7xl tracking-widest font-bold text-primary ml-3 flex flex-col  ">
              About Us
              <h2 className="text-4xl text-accent">We are stuff</h2>
              <h3 className="text-3xl text-accent">And you are not xd</h3>
            </h1>
          </div>
          <div className="basis-1/2 justify-center flex">
            <img src={logo} />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="basis-1/2 justify-center flex">
            <img className="" src={logo} />
          </div>
          <div className="basis-1/2 flex justify-center">
            <h1 className=" text-7xl tracking-widest font-bold text-primary ml-3 flex flex-col  ">
              About Us
              <h2 className="text-4xl text-accent">We are stuff</h2>
              <h3 className="text-3xl text-accent">And you are not xd</h3>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
