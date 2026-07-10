import type { CuratedEntry } from "@/lib/types";

export const curatedResearchEntries: CuratedEntry[] = [
  {
    kind: "curated",
    id: "research-data-federation-healthcare-ai",
    title: "Data Federation in Healthcare for Artificial Intelligence Solutions",
    date: "2022-06-01",
    year: 2022,
    tags: ["Research"],
    description: "IOS Press (PubMed) - J Castellanos, G Raposo, L Antunez",
    url: "https://pubmed.ncbi.nlm.nih.gov/35773834/",
  },
  {
    kind: "curated",
    id: "research-real-time-icu-capacity-strain",
    title: "Near Real-Time Telemetry of Nation-Wide ICU's Capacity Strain in Argentina",
    date: "2021-06-01",
    year: 2021,
    tags: ["Research"],
    description: "IOS Press (PubMed) - G Raposo, J Castellanos, H Hernandez",
    url: "https://pubmed.ncbi.nlm.nih.gov/34042787/",
  },
  {
    kind: "curated",
    id: "research-ai-pipeline-radiology",
    title: "A flexible AI pipeline for medical imaging in a radiology workflow",
    date: "2021-09-01",
    year: 2021,
    tags: ["Research"],
    description: "SPIE - L Antunez, J Castellanos, G Raposo, C Murga M.D.",
    url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12088/1208816/A-flexible-AI-pipeline-for-medical-imaging-in-a-radiology/10.1117/12.2606146.short",
  },
];

export const curatedCodeEntries: CuratedEntry[] = [
  {
    kind: "curated",
    id: "code-pla-net",
    title: "PLA-Net (fork): GraphConv protein-ligand interactions",
    date: "2024-03-01",
    year: 2024,
    tags: ["Code"],
    description: "PyTorch retraining + Docker + Hugging Face Space",
    url: "https://github.com/juliocesar-io/PLA-Net",
  },
  {
    kind: "curated",
    id: "code-openfold",
    title: "OpenFold improvements for local inference and metrics",
    date: "2024-04-01",
    year: 2024,
    tags: ["Code"],
    description: "Dockerized AlphaFold2 workflow with local notebooks",
    url: "https://github.com/juliocesar-io/openfold",
  },
  {
    kind: "curated",
    id: "code-voyager-bot",
    title: "voyager-bot: Arduino robot controlled from browser",
    date: "2016-08-01",
    year: 2016,
    tags: ["Code"],
    description: "Node.js + Docker + Raspberry Pi + live camera streaming",
    url: "https://github.com/juliocesar-io/voyager-bot",
  },
];
