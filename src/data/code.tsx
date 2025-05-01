import { link } from "fs";

export type Code = { markdown: string; img: string; link: string;};


export const codeData: Code[] = [
    {
        img: "/img/pla_net.png",
        markdown: "Forked version of [PLA-Net](https://github.com/juliocesar-io/PLA-Net) Protein-Ligand Interactions with GraphConvolutional Networks for Interpretable Pharmaceutical Discovery. Re-trained with PyTorch and added Docker Support GPU and Huggingface Space 🤗  [Huggingface link](https://huggingface.co/spaces/juliocesar-io/PLA-Net). Reference:  [Nature Scientific Reports](https://www.nature.com/articles/s41598-022-12180-x)",
        link: "https://github.com/juliocesar-io/PLA-Net",
    },
    {
        img: "/img/openfold.png",
        markdown: "Improvements to run [OpenFold](https://github.com/juliocesar-io/openfold) with re-trained weights for AlphaFold2 and parallelized with 🐳 Docker and Local Notebook for interactive inference and metrics visualization for PLDDT and PAE. Local inference Notebook [here](https://github.com/juliocesar-io/openfold/blob/main/notebooks/OpenFoldLocal.ipynb). Reference: [Nature Methods](https://doi.org/10.1038/s41592-024-02272-z)",
        link: "https://github.com/juliocesar-io/openfold"
    },
    {
        img: "/img/voyager.png",
        markdown: "[voyager-bot](https://github.com/juliocesar-io/voyager-bot) is a fun Arduino bot controlled from a web browser using Nodejs on Docker for Raspberry pi with live cam streaming. Won 1st and 2nd place in the Oklahoma State University's 2016 Mercyry Robotics Challenge. [Slides](https://slides.com/juliocesar_io/voyager-redcolsi)",
        link: "https://github.com/juliocesar-io/voyager-bot"
    }
];