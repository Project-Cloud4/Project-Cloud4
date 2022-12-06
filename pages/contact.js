import Navbar from "../components/NavBar";

function Footer_() {
  const Members = [
    {
      username: "Murariu Georgiana-Roxana",
      ig: "@georgiamurariu",
      iglink: "https://www.instagram.com/molecule_sain/?next=%2F",
      phone: "0758146962",
      mail: "georgiamurariu@gmail.com",
    },
    {
      username: "Sainenco Luchian",
      ig: "@molecule_sain",
      iglink: "https://www.instagram.com/molecule_sain/?next=%2F",
      phone: "0741649955",
      mail: "lucasainenco2@gmail.com",
    },
    {
      username: "Vranciu Andra",
      ig: "@andravranciu",
      iglink: "https://www.instagram.com/andravranciu/?next=%2F",
      phone: "0754294368",
      mail: "georgiamurariu@gmail.com",
    },
    {
      username: "Zgîmbău Tudor",
      ig: "@tudor_codes",
      iglink: "https://www.instagram.com/tudor_codes/?next=%2F",
      phone: "0751790642",
      mail: "georgiamurariu@gmail.com",
    },
  ];

  return (
    <footer className="footer p-10 bg-base-100 text-neutral-content">
      {Members.map((member) => (
        <Member member={member}></Member>
      ))}
    </footer>
  );
}

function Member({ member }) {
  return (
    <div>
      <span className="footer-title">{member.username}</span>
      <a href={member.iglink} className="link link-hover">
        Instagram: {member.ig} ;
      </a>
      <a href={"tel:+4" + member.phone} className="link link-hover">
        Phone number : {member.phone}
      </a>
      <a className="link link-hover">Email: {member.mail} ;</a>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover">
      <div className="fixed w-screen z-10">
        <Navbar />
      </div>
      <div className="hero min-h-screen bg-[url('/bg.png')] bg-cover">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/logopc4.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <a className="text-5xl font-bold font-mono rounded-lg">
              PROJECT CLOUD4
            </a>

            <div className="py-6">
              <a className="text-xl font-mono rounded-lg">
                You can find us on:
              </a>

              <ul>
                <li>
                  <a
                    className="text-xl font-mono rounded-lg"
                    href="https://www.instagram.com/project_cloud4/"
                    target="blanck"
                  >
                    Instagram: @project_cloud4 ;
                  </a>
                </li>
                <li>
                  <a className="text-xl font-mono rounded-lg">Email:</a>
                </li>
                <li>
                  <a href="tel:" className="text-xl font-mono rounded-lg">
                    Phone number:
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl font-mono rounded-lg"
                    href="https://github.com/Project-Cloud4"
                    target="blanck"
                  >
                    GitHub: https://github.com/Project-Cloud4
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="btn btn-primary"
              href="C:\Users\GEORGIANA\abrocadabra\src\us.png"
            >
              US
            </button>
          </div>
        </div>
      </div>
      <Footer_ />
    </div>
  );
}

export default Contact;
