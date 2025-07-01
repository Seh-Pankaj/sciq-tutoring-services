const Hero = () => {
  return (
    <section className="flex gap-8">
      <div className="m-6 sm:m-8 md:w-1/2 lg:m-12">
        <div className="font-matangi relative z-10 mb-4 text-xl leading-relaxed font-bold underline-offset-4 md:mb-8 md:text-3xl lg:mb-12 lg:text-4xl dark:text-gray-200">
          <img src="/hero.jpg" alt="student" className="rounded-xl md:hidden" />
          <div className="absolute top-6 right-4 w-[40%] text-white md:static md:w-full md:text-black dark:text-white">
            One size <span className="underline">doesn't</span> fit all.
          </div>
        </div>
        <div className="font-inter mb-8 leading-relaxed lg:mb-12 dark:text-gray-200">
          SciQ Tutoring specialises in high school and VCE Biology. Sessions are
          led by an experienced, registered teacher with a valid Working With
          Children Check. Lessons are tailored to suit diverse learning needs,
          helping students feel confident and capable—whether they’re catching
          up or aiming high.
        </div>
        <div className="flex justify-center">
          <a
            href="#schedule"
            className="mx-auto inline-block cursor-pointer rounded bg-black px-5 py-3 text-lg font-bold text-white"
          >
            Book Complementary Consulation
          </a>
        </div>
      </div>
      <div className="m-4 hidden w-1/2 md:m-8 md:inline lg:m-12">
        <img
          src="/hero.jpg"
          alt="quote-image"
          className="md: aspect-[1/1.1] w-[70%] self-center rounded-2xl object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
