import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  const initialState = {
    name: "",
    email: "",
    query: "",
  };
  const [formDetails, setFormDetails] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const queryRef = useRef();

  const validate = () => {
    setFormDetails({
      name: formDetails.name.trim(),
      email: formDetails.email.trim(),
      query: formDetails.query.trim(),
    });

    const { name, email, query } = formDetails;

    if (name === "" || email === "" || query === "") {
      if (name === "") {
        nameRef.current.classList.remove("border-gray-300");
        nameRef.current.classList.add("border-red-500");
      }
      if (email === "") {
        emailRef.current.classList.remove("border-gray-300");
        emailRef.current.classList.add("border-red-500");
      }
      if (query === "") {
        queryRef.current.classList.remove("border-gray-300");
        queryRef.current.classList.add("border-red-500");
      }
      return false;
    } else return true;
  };

  const sendDetails = async (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="font-inter flex-1 p-6 sm:px-8 sm:py-8 lg:px-12 dark:text-gray-200"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="mb-6 text-4xl font-light max-[576px]:text-3xl">
          Get in touch
        </h2>
        {isSubmitted && <p>Thank You! Your response has been submitted.</p>}
        <form
          onSubmit={sendDetails}
          action="https://formsubmit.co/sciq.tutoringservices@gmail.com"
          method="POST"
          id="details-form"
        >
          <div className="mb-4">
            <input
              ref={nameRef}
              className="mr-8 mb-0 w-60 rounded border-2 border-gray-300 p-2 focus:outline-gray-600 max-[576px]:mb-4 dark:placeholder:text-gray-200"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formDetails.name}
              onChange={(e) => {
                setFormDetails({ ...formDetails, name: e.target.value });
                nameRef.current.classList.add("border-gray-300");
                nameRef.current.classList.remove("border-red-500");
              }}
            />
            <input
              type="email"
              ref={emailRef}
              name="email"
              id="email"
              placeholder="Email"
              value={formDetails.email}
              className="w-60 rounded border-2 border-gray-300 p-2 focus:outline-gray-600 dark:placeholder:text-gray-200"
              onChange={(e) => {
                setFormDetails({ ...formDetails, email: e.target.value });
                emailRef.current.classList.add("border-gray-300");
                emailRef.current.classList.remove("border-red-500");
              }}
            />
          </div>
          <textarea
            name="query"
            ref={queryRef}
            id="query"
            placeholder="Ask me!"
            value={formDetails.query}
            className="h-24 w-128 rounded border-2 border-gray-300 p-2 focus:outline-gray-600 max-[576px]:w-60 dark:placeholder:text-gray-200"
            onChange={(e) => {
              setFormDetails({ ...formDetails, query: e.target.value });
              queryRef.current.classList.add("border-gray-300");
              queryRef.current.classList.remove("border-red-500");
            }}
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value="https://sciq-tutoring-services.vercel.app/"
          ></input>
          <br />
          <button
            type="submit"
            className="my-2 w-60 cursor-pointer rounded bg-black px-4 py-2 text-center text-white"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
