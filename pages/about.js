import logo from "../public/logopc4.png";
//it is responsive thanks god
//margin top on wrapper to be enhanced when adding navbar
export default function AboutPage() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover">
      <div className="h-screen w-screen flex flex-col mt-10">
        <div className="flex flex-row items-center ">
          <div className="basis-1/2 flex justify-center items-center flex-col">
            <div className="flex flex-col">
              <h1 className=" text-7xl tracking-widest font-bold text-primary ml-3 flex flex-col  ">
                About Us
              </h1>
              <h2 className="text-4xl text-accent tracking-widest font-bold ml-3">
                We are stuff
              </h2>
              <h3 className="text-3xl text-accent tracking-widest font-bold  ml-3">
                And you are not xd
              </h3>
            </div>
          </div>
          <div className="basis-1/2 justify-center flex">
            <img src="/logopc4.png" />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="basis-1/2 justify-center flex">
            <img className="" src="/logopc4.png" />
          </div>
          <div className="basis-1/2 flex justify-center items-center flex-col">
            <div className="flex flex-col">
              <h1 className=" text-7xl tracking-widest font-bold text-primary ml-3 flex flex-col  ">
                About Us
              </h1>
              <h2 className="text-4xl text-accent tracking-widest font-bold ml-3">
                We are stuff
              </h2>
              <h3 className="text-3xl text-accent tracking-widest font-bold  ml-3">
                And you are not xd
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
