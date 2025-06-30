import {
  SiFigma,
  SiFramer,
  SiJavascript,
  SiReact,
  SiPython,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Figma", icon: <SiFigma size={48} className="text-[#F24E1E]" /> },
    { name: "Framer", icon: <SiFramer size={48} className="text-[#0055FF]" /> },
    { name: "JavaScript", icon: <SiJavascript size={48} className="text-[#F7DF1E]" /> },
    { name: "React.js", icon: <SiReact size={48} className="text-[#61DAFB]" /> },
    { name: "Python", icon: <SiPython size={48} className="text-[#3776AB]" /> },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-[100px] py-16 bg-white">
      {/* Title */}
      <h2 className="text-center text-[32px] sm:text-[40px] lg:text-[48px] font-[400] font-sora mb-12">
        My <span className="font-extrabold text-black">Skill</span>
      </h2>

      {/* Skill Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-full max-w-[140px] aspect-square border border-black flex flex-col justify-center items-center transition-all duration-300 hover:bg-black group mx-auto"
          >
            <div className="group-hover:text-white transition-all duration-300 mb-3">
              {skill.icon}
            </div>
            <p className="text-[16px] sm:text-[18px] font-bold font-sora text-black group-hover:text-white transition-all duration-300 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
