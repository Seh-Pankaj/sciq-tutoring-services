import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const BookMeeting = () => {
  const [preloadReady, setPreloadReady] = useState(false);

  useEffect(() => {
    // Trigger Calendly preload as soon as component mounts
    setPreloadReady(true);
  }, []);
  return (
    <>
      {preloadReady && (
        <div
          style={{
            position: "fixed",
            top: "-9999px",
            left: "-9999px",
            width: "1000px",
            height: "800px",
            opacity: 0,
            pointerEvents: "none",
            zIndex: -9999,
          }}
          aria-hidden="true"
        >
          <InlineWidget url="https://calendly.com/sciq-tutoring-services/30min" />
        </div>
      )}
      <section
        id="schedule"
        className="font-inter flex-1 p-6 sm:px-8 sm:py-8 lg:px-12 dark:text-gray-200"
      >
        <h2 className="mb-6 text-4xl font-light max-[576px]:text-3xl min-[880px]:mb-2">
          Schedule a meeting
        </h2>

        <InlineWidget
          url="https://calendly.com/sciq-tutoring-services/30min"
          className="h-[800px]"
        />
      </section>
    </>
  );
};

export default BookMeeting;
