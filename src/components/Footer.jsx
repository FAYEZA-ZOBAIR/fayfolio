function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white px-6 sm:px-8 md:px-12 lg:px-[100px] py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
      {/* Left side: name & note */}
      <div className="text-[14px] sm:text-[15px] md:text-[16px] font-spacegrotesk">
        <p className="mb-1">&copy; {new Date().getFullYear()} Fayeza Zobair</p>
        <p className="text-zinc-400 text-[13px] sm:text-[14px]">
          Designed & developed with ❤️ and React
        </p>
      </div>

      {/* Right side: contact */}
      <div className="text-[13px] sm:text-[14px] text-zinc-400 font-sora">
        <p>
          Let’s connect —{" "}
          <a
            href="mailto:fayeza.zobair@gmail.com"
            className="underline hover:text-[#B9FF66] transition-colors"
          >
            Email me
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
