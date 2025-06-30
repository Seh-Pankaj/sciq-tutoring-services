import { BiSolidSquare } from "react-icons/bi";

const Services = () => {
  return (
    <section
      className="font-inter flex-1 p-6 sm:px-8 sm:py-8 lg:px-12"
      id="services"
    >
      <h2 className="mb-6 text-4xl font-light max-[576px]:text-3xl">
        What We offer
      </h2>
      <ul className="space-y-1">
        <li>
          <BiSolidSquare className="mr-2 mb-1 inline size-3" />
          VCE Biology Tutoring (Units 1-4)
        </li>
        <li>
          <BiSolidSquare className="mr-2 mb-1 inline size-3" />
          High School Biology Support (Years 7-10)
        </li>
        <li>
          <BiSolidSquare className="mr-2 mb-1 inline size-3" />
          Revision and Exam Preparation
        </li>
        <li>
          <BiSolidSquare className="mr-2 mb-1 inline size-3" />
          Support for Students with Diverse Learning Needs
        </li>
        <li>
          <BiSolidSquare className="mr-2 mb-1 inline size-3" />
          Available Online or In-Person (if applicable)
        </li>
      </ul>
    </section>
  );
};

export default Services;

//relative inline-block after:absolute after:-bottom-0.5 after:left-8 after:block after:h-[14px] after:w-[90%] after:bg-[rgba(0,0,0,0.6)]
