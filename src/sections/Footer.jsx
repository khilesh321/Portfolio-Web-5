import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center justify-center text-[1.7rem] transform transition-transform duration-200 hover:text-white hover:scale-110">
              <i className={social.icon}></i>
            </span>
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Khilesh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
