import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import kappi from "../assets/kappi.svg";
import lbyh from "../assets/lbyh.svg";
import juris from "../assets/juris.svg";
import sushi from "../assets/sushi.svg";

function Projects() {
  const projects = [
    {
      titleTop: "Kappi Crave",
      titleBottom: "Coffee Shop App",
      cardBg: "bg-white",
      titleBg: "bg-[#B9FF66]",
      textColor: "text-black",
      arrowColor: "text-[#B9FF66]",
      arrowBg: "bg-black",
      img: kappi,
      link: "/kappi",
    },
    {
      titleTop: "LBYH: Elearning",
      titleBottom: "Website",
      cardBg: "bg-[#B9FF66]",
      titleBg: "bg-white",
      textColor: "text-black",
      arrowColor: "text-[#B9FF66]",
      arrowBg: "bg-black",
      img: lbyh,
      link: "/lbyh",
    },
    {
      titleTop: "Juris LegalBot",
      titleBottom: "ChatBot",
      cardBg: "bg-slate-900",
      titleBg: "bg-white",
      textColor: "text-white",
      arrowColor: "text-black",
      arrowBg: "bg-white",
      img: juris,
      link: "/juris",
    },
    {
      titleTop: "SushiNinja",
      titleBottom: "Sushi Seller Website",
      cardBg: "bg-white",
      titleBg: "bg-[#B9FF66]",
      textColor: "text-black",
      arrowColor: "text-[#B9FF66]",
      arrowBg: "bg-black",
      img: sushi,
      link: "/sushi",
    },
  ];

  return (
    <section className="w-full px-[100px] py-16 bg-black">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[48px] font-[400] font-sora text-white">
          My <span className="font-extrabold">Project</span>
        </h2>
        <p className="text-[20px] text-[#B9FF66] font-spacegrotesk cursor-pointer hover:underline">
          See all
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full h-[200px] rounded-xl px-6 py-4 flex justify-between items-center ${project.cardBg}`}
          >
            {/* Left: Title + CTA */}
            <div className="flex flex-col justify-between h-full">
              <div className="leading-tight ">
                <div
                  className={`px-2 py-1 text-[18px] font-medium font-sans rounded-sm ${project.titleBg}`}
                >
                  {project.titleTop}
                </div>
                <div
                  className={`px-2 py-1 text-[18px] font-medium font-sans rounded-sm ${project.titleBg}`}
                >
                  {project.titleBottom}
                </div>
              </div>

              {/* Learn More */}
              <Link to={project.link}>
                <div className="flex items-center gap-2 mt-2 cursor-pointer">
                  <div
                    className={`w-[36px] h-[36px] rounded-full ${project.arrowBg} flex items-center justify-center`}
                  >
                    <ArrowRight size={18} className={`${project.arrowColor}`} />
                  </div>
                  <p
                    className={`text-[16px] font-medium font-spacegrotesk ${
                      project.cardBg === "bg-slate-900"
                        ? "text-white"
                        : project.textColor
                    }`}
                  >
                    Learn more
                  </p>
                </div>
              </Link>
            </div>

            {/* Right: Image */}
            <div className="w-[130px] md:w-[150px]">
              <img
                src={project.img}
                alt={project.titleTop}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
