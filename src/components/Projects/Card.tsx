import React from "react";
import { useHotkeys } from "@mantine/hooks";
import { motion, AnimatePresence } from "framer-motion";

const Item = [
  {
    title: "Projeto Teste",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque consequuntur aut iure autem!",
    image: "https://source.unsplash.com/random",
    link: "https://www.google.com",
  },
  {
    title: "Projeto Teste2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque consequuntur aut iure autem!",
    image: "https://source.unsplash.com/random",
    link: "https://www.google.com",
  },
  {
    title: "Projeto Teste3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque consequuntur aut iure autem!",
    image: "https://source.unsplash.com/random",
    link: "https://www.google.com",
  },
  {
    title: "Projeto Teste4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque consequuntur aut iure autem!",
    image: "https://source.unsplash.com/random",
    link: "https://www.google.com",
  },
];

export const Card = ({ onClick, Id }: CardProps) => {
  useHotkeys([["Escape", () => onClick()]]);
  return (
    <div tabIndex={-1}>
      <AnimatePresence>
        <Blur onClick={onClick} key={123} />
        <motion.div
          className="Carddd"
          initial={{ y: 10 }}
          animate={{ y: 0, transition: { delay: 0.2 } }}
          layout
        >
          <motion.h5> {Item[Id].title}</motion.h5>

          <motion.button onClick={() => alert("oi")}>
            {Item[Id].link}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Blur = ({ onClick }: BlurProps) => {
  return (
    <>
      <motion.div
        className="Blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        onClick={onClick}
      ></motion.div>
    </>
  );
};
interface BlurProps {
  onClick: () => void;
}
interface CardProps {
  onClick: () => void;
  Id: number;
}
