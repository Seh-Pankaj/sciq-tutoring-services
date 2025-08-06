import { motion } from "framer-motion";

const initialAnimationState = { opacity: 0, y: 60 };
const ani = { opacity: 1, y: 0 };
const tran = { duration: 0.8, ease: "easeOut" };

const Hero = () => {
  const images = [
    "/hero.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/girl.jpg",
  ];

  const variants = {
    hidden: { x: "50%", opacity: 0 },
    visible: (i) => ({
      x: "0%",
      opacity: 1,
      transition: {
        delay: i * 0.5, // staggered delay
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="m-6 sm:m-8 lg:m-12">
      <div className="relative float-end m-4 hidden h-[300px] w-[400px] overflow-hidden sm:block md:mx-8 lg:mx-12">
        {images.map((src, i) => (
          <motion.img
            key={src}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variants}
            src={src}
            alt={`Image ${i + 1}`}
            className="absolute top-0 left-0 rounded-2xl object-cover"
          />
        ))}
      </div>
      <div className="relative z-10 mb-4 aspect-video overflow-hidden sm:aspect-auto md:mb-8 lg:mb-10">
        {images.map((src, i) => (
          <motion.img
            key={src}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variants}
            src={src}
            alt={`Image ${i + 1}`}
            className="absolute top-0 left-0 h-full w-full rounded-2xl object-cover sm:hidden"
          />
        ))}
        <motion.div
          initial={initialAnimationState}
          animate={ani}
          transition={tran}
          className="font-matangi absolute right-0 bottom-3 z-20 w-[40%] text-lg leading-relaxed font-bold text-amber-950 underline-offset-4 min-[420px]:text-xl sm:static sm:w-full sm:text-2xl md:text-3xl md:text-black lg:text-4xl dark:text-gray-200 dark:sm:text-white"
        >
          One size <span className="underline">doesn't</span> fit all.
        </motion.div>
      </div>

      <motion.div
        initial={initialAnimationState}
        animate={ani}
        transition={tran}
        className="font-inter mb-8 leading-relaxed text-balance lg:mb-12 dark:text-gray-200"
      >
        At SciQ Biology Tutoring, we are a dedicated team of <b>Melbourne</b>{" "}
        based qualified science educators and industry professionals working
        within the scientific community. Led by a <b>VIT-registered</b> teacher
        and former <b>researcher</b>, our mission is to help students succeed in
        high school Biology, while supporting diverse learning needs. <br />
        <br />
        We specialise in <b>1-on-1</b> tutoring that aligns with the{" "}
        <b>Victorian Curriculum</b> and the{" "}
        <b>updated VCE Biology Study Design</b>, including advanced biological
        concepts such as <b>CRISPR-Cas9 gene editing</b>, <b>epigenetics</b>,
        and <b>biotechnology</b>. Our sessions are designed to complement
        classroom learning, reinforce key scientific principles, and develop
        skills in scientific inquiry and critical thinking. <br />
        <br />
        At SciQ, we combine deep subject expertise with{" "}
        <b>evidence-based teaching strategies</b>, helping students improve
        their <b>academic performance</b>, <b>gain exam confidence</b>, and
        foster a lasting interest in science. Whether you're aiming for{" "}
        <b>top results in VCE Biology</b>, looking to strengthen your
        understanding of core topics, or need tailored support, SciQ Tutoring is
        here to help you thrive.
      </motion.div>
      <div className="flex">
        <a
          href="#schedule"
          className="text-md mx-auto inline-block cursor-pointer rounded bg-black px-4 py-3 font-bold text-white min-[400px]:text-lg"
        >
          Book Complementary Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
