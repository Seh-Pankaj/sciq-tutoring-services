import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <section
      id="footer"
      className="font-inter flex flex-col items-center justify-center bg-black p-6 text-white sm:px-8 sm:py-8 lg:px-12"
    >
      <div className="mb-2">
        <span className="mr-2 inline-block">
          Query Email : sciq.tutoringservices@gmail.com
        </span>
        <a
          className="inline-block align-middle"
          href="mailto:sciq.tutoringservices@gmail.com"
        >
          <IoMdMail size={20} />
        </a>
      </div>

      <div>Links</div>
      <ul className="my-2 grid grid-cols-2 gap-2">
        <li className="underline">
          <a href="#home">Home</a>
        </li>
        <li className="underline">
          <a href="#services">Services</a>
        </li>
        <li className="underline">
          <a href="#about">About</a>
        </li>
        <li className="underline">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>&copy; {new Date().getFullYear()}</div>
    </section>
  );
};

export default Footer;
