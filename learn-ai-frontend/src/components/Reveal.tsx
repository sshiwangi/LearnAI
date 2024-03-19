import { motion } from "framer-motion";
interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
export const Reveal = ({ children }: Props) => {
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
            transition: { duration: 0.5, delay: 0.25 },
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.25 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
};
