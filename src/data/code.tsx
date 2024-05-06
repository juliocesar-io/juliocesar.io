import { link } from "fs";

export type Code = { markdown: string; img: string; link: string;};


export const codeData: Code[] = [
    {
        img: "/img/fed.png",
        markdown: "[ariadne-federation-services](https://github.com/juliocesar-io/ariadne-federation-services) is a federated GraphQL services example for Healthcare AI applications.",
        link: "https://github.com/juliocesar-io/ariadne-federation-services",
    },
    {
        img: "/img/voyager-bot-diagram.png",
        markdown: "[voyager-bot](https://github.com/juliocesar-io/voyager-bot) is a fun Arduino bot controlled from a web browser using Nodejs on Docker for Raspberry pi with live cam streaming.",
        link: "https://github.com/juliocesar-io/voyager-bot"
    },
    {
        img: "/img/oauth.png",
        markdown: "A Flask template to implement OAuth 2.0 with Google, Linkedin and Facebook. [login-OAuth2-flask](https://github.com/juliocesar-io/login-OAuth2-flask/tree/master)",
        link: "https://github.com/juliocesar-io/login-OAuth2-flask/"
    }
];