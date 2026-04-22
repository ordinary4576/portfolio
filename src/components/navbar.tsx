import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { NAV_LINKS, SOCIALS, PERSONAL_INFO } from "../constants";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

// Navbar
export const Navbar = ({ hide }: NavbarProps) => {
  const [active, setActive] = useState("Profile");
  const [toggle, setToggle] = useState(false);

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Default to "Profile" (hero) if at the very top
      if (scrollTop < 100) {
        setActive("Profile");
        return;
      }

      let currentActive = "";

      for (const link of NAV_LINKS) {
        if (link.link) continue;

        const section = document.getElementById(link.id);
        if (section) {
          // Use getBoundingClientRect to get absolute position relative to viewport + scrollY for document position
          const offsetTop = section.getBoundingClientRect().top + window.scrollY - 100;

          if (scrollTop >= offsetTop) {
            currentActive = link.title;
          }
        }
      }

      if (currentActive) {
        setActive(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px]">
        {/* Logo */}
        <Link
          to="/"
          className="h-auto w-auto flex flex-row items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin w-10 h-10 object-contain"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            {PERSONAL_INFO.name}
          </span>
        </Link>

        {/* Desktop Links (Pill Shape) */}
        <div className="hidden md:flex w-auto h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-5">
            {NAV_LINKS.map((link) =>
              link.link ? (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn(
                    "cursor-pointer hover:text-white transition-colors",
                    active === link.title ? "text-white border-b-2 border-[#915EFF]" : "text-gray-200"
                  )}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </a>
              )
            )}
          </div>
        </div>

        {/* Socials & Mobile Toggle */}
        <div className="flex flex-row gap-5 items-center">
          {/* Social Icons (Desktop/Mobile) */}
          <div className="flex flex-row gap-5">
            {SOCIALS.map((social) => (
              'isEmail' in social ? (
                <button
                  key={social.name}
                  type="button"
                  onClick={() => {
                    window.location.href = `mailto:${PERSONAL_INFO.email}`;
                  }}
                  className="bg-transparent border-none p-0 cursor-pointer"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="hover:animate-spin"
                  />
                </button>
              ) : (
                <a
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer hover:animate-spin"
                  />
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="Menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={cn(
                !toggle ? "hidden" : "flex",
                "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
              )}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.id}
                    className={cn(
                      active === link.title ? "text-white" : "text-secondary",
                      "font-poppins font-medium cursor-pointer text-[16px]"
                    )}
                    onClick={() => {
                      setToggle(!toggle);
                      if (!link.link) setActive(link.title);
                    }}
                  >
                    {link.link ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <a href={`#${link.id}`}>{link.title}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
