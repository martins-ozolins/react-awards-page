import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
import { WolfgangWordmark } from "./WolfgangWordmark";
import { FooterNav } from "./FooterNav";

export function Footer() {
  return (
    <footer className="bg-brand-dark pt-10">
      <FooterNav />
      <div className="overflow-hidden opacity-10 pointer-events-none flex pt-16">
        <div className="animate-footer-wordmark-scroll flex-none w-[130vw] md:w-[120vw] lg:w-[110vw]">
          <WolfgangWordmark className="w-full fill-white" />
        </div>
        <div
          className="animate-footer-wordmark-scroll flex-none w-[130vw] md:w-[120vw] lg:w-[110vw]"
          aria-hidden="true"
        >
          <WolfgangWordmark className="w-full fill-white" />
        </div>
      </div>
      <div className="px-4 py-10 md:px-10 xl:px-14">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white uppercase font-medium">
            <span>© 2026 Wolfgang</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white" />
              <a href="#" className="text-white transition-colors">
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white" />
              <a href="#" className="text-white transition-colors">
                Website Photos
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white" />
              <a
                href="#"
                className="border border-brand-slime px-2 py-0.5 text-brand-slime hover:opacity-80 transition-opacity"
              >
                Cookie Settings
              </a>
            </div>
          </div>

          <div className="flex items-center gap-1 lg:justify-center">
            {[
              {
                icon: <FaXTwitter />,
                label: "Twitter",
                href: "https://x.com/WolfgangDigital",
              },
              {
                icon: <FaInstagram />,
                label: "Instagram",
                href: "https://www.instagram.com/wolfgang.digital/",
              },
              {
                icon: <FaFacebookF />,
                label: "Facebook",
                href: "https://www.facebook.com/WolfgangDigitalDublin/",
              },
              {
                icon: <FaYoutube />,
                label: "YouTube",
                href: "https://www.youtube.com/user/WolfgangDigital1",
              },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-white text-white transition-colors hover:bg-brand-slime hover:border-brand-slime hover:text-brand-dark"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-white lg:text-right uppercase font-medium">
            Website{" "}
            <a
              href="https://madebyshape.co.uk"
              className="hover:text-white transition-colors"
            >
              MadeByShape
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
