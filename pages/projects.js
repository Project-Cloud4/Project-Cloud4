import Link from "next/link.js";
import Navbar from "../components/Navbar.js";

function Card({ project }) {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl border-primary border-2">
        <figure className="m-4 rounded-lg">
          <img src={project.image} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-accent text-3xl font-mono">
            {project.title}
          </h2>
          <p className="font-mono text-xl">{project.phrase}</p>
          <div className="card-actions justify-end">
            <Link href={project.linkk}>
              <button className="btn btn-primary text-xl font-mono  ">
                {project.button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  const projects = [
    {
      title: "Lumina de luna",
      phrase: "Mihai Eminescu presented in a different & attractive way!",
      image: "/eminescu.png",
      button: "Check it now",
      linkk: "https://eminescu.netlify.app",
    },
    {
      title: "Equanimity",
      phrase: "Learning, the true way",
      image: "/samsung.png",
      button: "check it now",
      linkk: "https://sam-eq.netlify.app",
    },
  ];

  return (
    <div className="h-screen bg-[url('/bg.png')] bg-cover">
      <div className="fixed mt-0 w-screen">
        <Navbar />
      </div>
      <div className="h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center flex-initial">
          <h1 className="text-7xl font-mono text-accent text-bold mt-32 inline-block">
            OUR PROJECTS
          </h1>
        </div>

        <div className="flex justify-center items-center flex-1 -mt-16">
          <div className=" w-screen grid grid-cols-3 gap-4 place-items-center place-content-center">
            {projects.map((project) => {
              return <Card project={project} />;
            })}

            <div className="card card-compact w-96 bg-base-100 shadow-2xl border-secondary border-2">
              <figure className="m-4">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-accent text-3xl font-mono">
                  PoliHack!
                </h2>
                <div className="badge badge-secondary text-xl font-mono">
                  new
                </div>
                <p className="font-mono text-xl">Coming soon!</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
