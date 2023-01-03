import React, { useState, useContext, useEffect } from "react";

// Context to change the colors
import { SkillContext } from "../SkillContext";
import { ThemeContext } from "styled-components";
import SkillTypes from "./SkillTypes";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Package to handle conditionals inside classes.
import nc from "classnames";

// Styles
import {
    Container,
    List,
    ListItem,
    Header,
    ListBody,
    PanelItems,
    PanelDescription,
    PanelCard,
} from "./Style";

//Button to download curriculum
import CV from "./CV";

////
type PanelProps = {
    title: string;
    onShow: () => void;
    isActive: boolean;
    color: string;
    children: any;
    itemColor: string;
    backgroundColor: string;
    isDark: boolean;
};
type CardProps = {
    color: string;
    alias: string;
    title: string;
    img: string;
};

// Main component
export default function Skills() {
    const { title } = useContext(ThemeContext);
    const { setSkillTheme, TextColor, BackgroundColor } =
        useContext(SkillContext);

    // Handle which LI is currently active
    const [activeIndex, setActiveIndex] = useState(3);
    const [isDark, setIsDark] = useState<boolean>(title === "dark");

    // If user click on the Li twice it will close and set the activeIndex null
    function handleIndex(index: number) {
        index === activeIndex ? setActiveIndex(3) : setActiveIndex(index);
    }

    // Every time the user click on a list item, it will activate this function
    useEffect(() => {
        setSkillTheme(activeIndex);
    }, [activeIndex]);

    // Every time user change the theme, will update isDark state to handle CSS props
    useEffect(() => {
        title === "dark" ? setIsDark(true) : setIsDark(false);
    }, [title]);

    return (
        <>
            <Container color={TextColor} isDark={isDark}>
                <h2>
                    <span className="bodyFont">Minhas</span> habilidades.
                </h2>
                <hr />
                <List
                    color={TextColor}
                    className={nc(
                        activeIndex !== 3 ? "Glow insideBorder" : "baseBgColor",
                    )} // condition to apply CSS properties
                >
                    {SkillTypes.map(
                        ({ description, skills, title, itemColor }, index) => (
                            <Panel
                                key={index}
                                title={title}
                                onShow={() => handleIndex(index)}
                                isActive={activeIndex === index}
                                color={TextColor} //
                                itemColor={itemColor} // Change the list item bg on hover
                                backgroundColor={BackgroundColor} //Change background color of the list
                                isDark={isDark}
                            >
                                <PanelDescription>
                                    {description}{" "}
                                </PanelDescription>
                                <PanelItems>
                                    {skills.map(
                                        ({ alias, img, title }, index) => (
                                            <CardItem
                                                color={TextColor}
                                                key={index}
                                                title={title}
                                                img={"/about/" + img + ".svg"}
                                                alias={alias}
                                            />
                                        ),
                                    )}
                                </PanelItems>
                            </Panel>
                        ),
                    )}
                </List>
                <CV />
            </Container>
        </>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow,
    color,
    itemColor,
    backgroundColor,
    isDark,
}: PanelProps) {
    return (
        <ListItem
            className={"panel"}
            color={color}
            itemColor={itemColor}
            backgroundColor={backgroundColor}
            isDark={isDark}
        >
            <Header onClick={onShow} isExpanded={isActive}>
                <h3>{title}</h3>

                <ArrowDownwardIcon
                    className="ArrowIcon"
                    sx={{ width: "42px", height: "42px", transition: 0 }}
                />
            </Header>
            {isActive && <ListBody>{children}</ListBody>}
        </ListItem>
    );
}

function CardItem({ color, alias, title, img }: CardProps) {
    return (
        <PanelCard color={color}>
            <img src={img} alt={alias} />
            <h4>{title}</h4>
        </PanelCard>
    );
}
