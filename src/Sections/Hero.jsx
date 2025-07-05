const Hero = () => {
  return (
    <section className="m-6 sm:m-8 lg:m-12">
      <div className="float-end m-4 hidden w-1/3 sm:block md:mx-8 lg:mx-16">
        <img
          src="/girl.jpg"
          alt="quote-image"
          className="aspect-[7/8] self-center rounded-2xl mask-t-from-50% object-cover object-bottom"
        />
      </div>
      <div className="font-matangi relative z-10 mb-4 text-xl leading-relaxed font-bold underline-offset-4 sm:text-2xl md:mb-8 md:text-3xl lg:mb-10 lg:text-4xl dark:text-gray-200">
        <img src="/girl.jpg" alt="student" className="rounded-xl sm:hidden" />
        <div className="absolute right-0 bottom-3 w-[40%] text-amber-950 sm:static sm:w-full md:text-black dark:sm:text-white">
          One size <span className="underline">doesn't</span> fit all.
        </div>
      </div>

      <div className="font-inter mb-8 leading-relaxed text-balance lg:mb-12 dark:text-gray-200">
        At SciQ Biology Tutoring, we are a dedicated team of qualified science
        educators and industry professionals working within the scientific
        community. Led by a <b>VIT-registered</b> teacher and former{" "}
        <b>researcher</b>, our mission is to help students succeed in high
        school Biology, while supporting diverse learning needs. <br />
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
      </div>
      <div className="flex">
        <a
          href="#schedule"
          className="mx-auto inline-block cursor-pointer rounded bg-black px-5 py-3 text-lg font-bold text-white"
        >
          Book Complementary Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
