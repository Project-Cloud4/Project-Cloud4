import Navbar from "../components/navbar";

function Footer() {
  const members = [
    {
      username: "Murariu Georgiana-Roxana",
      ig: "@georgiamurariu",
      iglink: "https://www.instagram.com/georgiamurariu/",
      mail: "georgiamurariu@gmail.com",
    },
    {
      username: "Sainenco Luchian",
      ig: "@molecule_sain",
      iglink: "https://www.instagram.com/molecule_sain/",
      mail: "lucasainenco2@gmail.com",
    },
    {
      username: "Vranciu Andra",
      ig: "@andravranciu",
      iglink: "https://www.instagram.com/andravranciu/",
      mail: "a.vranciu@yahoo.com",
    },
    {
      username: "Zgîmbău Tudor",
      ig: "@tudor_codes",
      iglink: "https://www.instagram.com/tudor_codes/",
      mail: "tudor.zgimbau@gmail.com",
    },
  ];

  return (
    <footer className="footer p-10 bg-base-100 text-neutral-content">
      {members.map((member) => (
        <Member key={member.ig} member={member}></Member>
      ))}
    </footer>
  );
}

function Member({ member }) {
  return (
    <div>
      <span className="footer-title">{member.username}</span>
      <a href={member.iglink} className="link link-hover">
        Instagram: {member.ig}
      </a>
      <a href={"mailto:" + member.mail} className="link link-hover">
        Email: {member.mail}
      </a>
    </div>
  );
}

function Contact() {
  const contactInfo = [
    {
      title: "Instagram: @project_cloud4",
      link: "https://www.instagram.com/project_cloud4/",
    },
    {
      title: "Email: tudor.zgimbau@gmail.com",
      link: "mailto: tudor.zgimbau@gmail.com",
    },
    {
      title: "GitHub: https://github.com/Project-Cloud4",
      link: "https://github.com/Project-Cloud4",
    },
    {
      title: "Tiktok: @project_cloud4",
      link: "https://www.tiktok.com/@project_cloud4",
    },
  ];

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
                {contactInfo.map((contact) => {
                  return (
                    <li key={contact.link}>
                      <a
                        className="text-xl font-mono rounded-lg"
                        href={contact.link}
                        target="_blank"
                      >
                        {contact.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <label
              htmlFor="my-modal-5"
              className="btn bg-secondary border-secondary"
            >
              US
            </label>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-5/12 max-w-5xl bg-gradient-to-br from-base-100 to-accent">
                <img src="/us.png"></img>
                <div className="modal-action">
                  <label htmlFor="my-modal-5" className="btn bg-neutral">
                    <img className="invert" src="/cloud.svg" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
