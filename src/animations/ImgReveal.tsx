import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

type AnimatedInViewProps = {
  children: ReactNode;
  customDelay?: number; // Prop para el retraso personalizado
};

const TextReveal = ({ children, customDelay = 0.1 }: AnimatedInViewProps) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, damping: 100, delay: customDelay }} // Utiliza el retraso personalizado aquí
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

export default TextReveal;