import React, { useRef, useEffect } from 'react';
import { motion as Motion, useInView, useAnimation } from 'framer-motion';

const SectionReveal = ({ children, delay = 0.2, width = "100%" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <Motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay, ease: [0.17, 0.55, 0.55, 1] }} // smooth ease-out-quart
      >
        {children}
      </Motion.div>
    </div>
  );
};

export default SectionReveal;
