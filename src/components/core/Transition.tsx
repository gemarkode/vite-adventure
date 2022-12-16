import { motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

export default function Transition({ children, ...props }: TransitionProps) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
