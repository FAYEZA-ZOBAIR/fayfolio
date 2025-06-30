import icon from "../assets/icon.svg";

const journeyData = [
  {
    year: "2024",
    titleTop: "Freelance UI/UX Designer",
    subtitle: "AZ - E Wallet",
    description:
      "Designed a mobile interface for a digital wallet app. Developed interactive prototypes. Focused on maintaining design consistency and introducing features to enhance user engagement.",
  },
  {
    year: "2024",
    titleTop: "UI/UX Designer & Frontend Developer Intern",
    subtitle: "LBYH-CBSE",
    description:
      "Collaborated with design and development teams to enhance the e-learning platform UI. Created user flows and improved layout designs. Transformed low-fidelity ideas into interactive front-end pages for users.",
  },
  {
    year: "2024",
    titleTop: "Master of Computer Applications (MCA)",
    subtitle: "Aligarh Muslim University",
    description:
      "Enhanced technical skills in frontend technology and design thinking. Learned prototyping and developed responsive, functional interfaces. Engaged in real-world projects, refining skills with tools like Figma and React.",
  },
  {
    year: "2022",
    titleTop: "Bachelor of Science (Hons.) in Computer Applications",
    subtitle: "Aligarh Muslim University",
    description:
      "Established a foundational understanding of computing, programming, and logic building. Explored how software systems work, igniting an interest in design thinking and user-centered design.",
  },
];

function MyJourney() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-[100px] py-12 md:py-16 bg-white">
      {/* Top Title and Overview */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-12 md:mb-16">
        <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[30px] sm:text-[36px] md:text-[40px] font-medium font-spacegrotesk leading-none">
          My Journey
        </h2>
        <p className="text-black text-[16px] sm:text-[17px] md:text-[18px] font-normal font-spacegrotesk max-w-3xl leading-relaxed">
          This is a visual representation of a professional journey in the field of UI/UX design,
          highlighting educational accomplishments and work experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-16 sm:gap-20">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Left Year */}
            <div className="text-[36px] sm:text-[42px] md:text-[48px] font-spacegrotesk font-normal text-black leading-none min-w-[60px] md:min-w-[80px]">
              {item.year}
            </div>

            {/* Right Card */}
            <div className="bg-zinc-800 text-white rounded-[24px] sm:rounded-[30px] px-6 sm:px-8 py-6 max-w-full md:max-w-[800px] w-full shadow-sm">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <img src={icon} alt="icon" className="w-[28px] sm:w-[32px] md:w-[35px] h-auto mt-1" />

                {/* Text Content */}
                <div className="flex flex-col gap-1">
                  <div className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-tight">
                    {item.titleTop}
                  </div>
                  <div className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#B9FF66] leading-tight">
                    {item.subtitle}
                  </div>
                  <p className="text-zinc-300 mt-2 text-[15px] sm:text-[16px] leading-relaxed font-spacegrotesk">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyJourney;
