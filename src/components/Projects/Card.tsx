import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useHotkeys } from "@mantine/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton, Description } from "./style";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";
const Item = [
    {
        title: "Potodo",
        description: "Aplicativo de Pomodoro com Todo-list",
        image: "Projects/CardPotodo.webp",
        github: "https://github.com/Juniokoi/Potodo",
        website: "https://potodo.live",
    },
    {
        title: "Feedget",
        description:
            "Este projeto foi desenvolvido com o intuito de facilitar a coleta de feedbacks dos usuários, que em vez do usuário ter que enviar um email todo específico, basta clicar no widget no canto de sua tela e já abrira um menu de itens de tópicos que deseja tratar, tudo de maneira fácil e direta.",
        image: "Projects/CardFeedget.webp",
        github: "https://github.com/Juniokoi/Feedget",
        website: "https://feedget-landingpage.vercel.app/",
    },
    {
        title: "Meu portfólio",
        description: "Esse portfólio foi feito com React e Styled Components",
        image: "Projects/CardPortfolio.webp",
        github: "https://github.com/Juniokoi/Portfolio",
        website: "#",
    },
];

export const Card = ({ onClick, Id }: CardProps) => {
    useHotkeys([["Escape", () => onClick()]]);
    return (
        <div tabIndex={-1}>
            <AnimatePresence>
                <Blur onClick={onClick} key={123} />
                <motion.div
                    className="openCard"
                    initial={{ y: 10 }}
                    animate={{ y: 0, transition: { delay: 0.2 } }}
                    layout
                >
                    <h5> {Item[Id].title}</h5>
                    <img src={Item[Id].image} alt="Teste" />
                    <Description>
                        <div className="DescriptionBox">
                            <h6>#Description</h6>
                            <p>{Item[Id].description}</p>
                        </div>
                        <div className="Buttons">
                            <a href={Item[Id].github} target="blank">
                                <button>
                                    {" "}
                                    <span>
                                        Projeto no
                                        <br /> <strong>Github</strong>
                                    </span>{" "}
                                    <GitHubIcon />
                                </button>
                            </a>

                            <a href={Item[Id].website} target="blank">
                                <button>
                                    <ShortcutRoundedIcon />
                                    <span>
                                        <strong>Website</strong> <br />
                                        da Aplicação
                                    </span>{" "}
                                </button>
                            </a>
                        </div>
                    </Description>

                    <CloseButton onClick={onClick}>
                        <CloseRoundedIcon />
                    </CloseButton>
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
