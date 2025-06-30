import { useRef, useState } from "react";

const Contact = () => {
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
    e.preventDefault();

    if (!validate()) {
      console.log("Data invalid");
      return;
    }

    try {
      const res = await fetch(
        "https://formsubmit.co/sciq.tutoringservices@gmail.com",
        {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-language": "en-US,en;q=0.8",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            priority: "u=0, i",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "cross-site",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1",
          },
          referrer: "http://localhost:5173/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: `name=Userasdf&email=pankajsehrawat.605%40gmail.com&query=This+is+custom+query&_next=http%3A%2F%2Flocalhost%3A5173%2F`,
          method: "POST",
          mode: "cors",
          credentials: "omit",
        },
      );

      if (res.ok) {
        console.log("Success!");
        setFormDetails(initialState);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.log("Submission failed.");
      }
    } catch (error) {
      console.log("Error in posting data", error);
    }
  };

  return (
    <section
      id="contact"
      className="font-inter flex-1 p-6 sm:px-8 sm:py-8 lg:px-12"
    >
      <h2 className="mb-6 text-4xl font-light max-[576px]:text-3xl">
        Get in touch
      </h2>
      {isSubmitted && <p>Thank You! Your response has been submitted.</p>}
      <form
        // onSubmit={sendDetails}
        action="https://formsubmit.co/sciq.tutoringservices@gmail.com"
        method="POST"
        id="details-form"
      >
        <div className="mb-4">
          <input
            ref={nameRef}
            className="mr-8 mb-0 w-60 rounded border-2 border-gray-300 p-2 focus:outline-gray-600 max-[576px]:mb-4"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
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
            required
            value={formDetails.email}
            className="w-60 rounded border-2 border-gray-300 p-2 focus:outline-gray-600"
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
          required
          placeholder="Ask me!"
          value={formDetails.query}
          className="h-24 w-128 rounded border-2 border-gray-300 p-2 focus:outline-gray-600 max-[576px]:w-60"
          onChange={(e) => {
            setFormDetails({ ...formDetails, query: e.target.value });
            queryRef.current.classList.add("border-gray-300");
            queryRef.current.classList.remove("border-red-500");
          }}
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/"
        ></input>
        <br />
        <button
          type="submit"
          className="my-2 w-60 cursor-pointer rounded bg-black px-4 py-2 text-center text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
