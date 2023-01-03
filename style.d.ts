import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            text: string;
            error: string;
            correct: string;
            brackets: string;
        };

        backgroundImage: {
            src: string;
            footer: string;
        };
    }
}
