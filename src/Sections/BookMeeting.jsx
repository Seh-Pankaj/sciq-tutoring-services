import React from "react";
import { InlineWidget } from "react-calendly";

const BookMeeting = () => {
  return (
    <section
      id="schedule"
      className="font-inter flex-1 p-6 sm:px-8 sm:py-8 lg:px-12"
    >
      <h2 className="mb-6 text-4xl font-light max-[576px]:text-3xl min-[880px]:mb-2">
        Schedule a meeting
      </h2>

      <InlineWidget
        url="https://calendly.com/sciq-tutoring-services/30min"
        className="h-[800px]"
      />
    </section>
  );
};

export default BookMeeting;
