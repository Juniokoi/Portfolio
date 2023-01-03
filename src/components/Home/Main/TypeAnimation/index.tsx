import * as React from "react";
import { Code, CodeBracket } from "./style";
import TerminalType, { typePhase } from "./TerminalType/TerminalType";
import cn from "classnames";

const strings = [
    "Desenvolvedor frontend ✨",
    "Centralizador de divs",
    "Amante de um bom café",
];

export default function TypeAnimation() {
    const { typedString, selectedString, phase } = TerminalType(strings);

    return (
        <>
            <CodeBracket>&lt;</CodeBracket>
            <Code>
                <span
                    className={cn({
                        ["end-cursor"]: phase !== typePhase.Done,
                        ["blinking"]: phase === typePhase.Waiting,
                    })}
                    aria-label={selectedString}
                >
                    {typedString}
                </span>
            </Code>
            <CodeBracket>&#47;&gt; </CodeBracket>
        </>
    );
}
