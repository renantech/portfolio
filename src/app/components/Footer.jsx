import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12 flex justify-center">
        <p className="text-slate-600">&copy; 2024 - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;