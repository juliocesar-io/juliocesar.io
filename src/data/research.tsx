export type Research = {
    title: string;
    yearOfPub: number;
    publisherLink: string;
    publisherName: string;
    authorsList?: string;
    codeUrl?: string;
    slides?: string;
};
  
export const researchData: Research[] = [
    {
      title: "Data Federation in Healthcare for Artificial Intelligence Solutions",
      yearOfPub: 2022,
      publisherLink: "https://pubmed.ncbi.nlm.nih.gov/35773834/",
      publisherName: "IOS Press (PubMed)",
      authorsList: "J Castellanos, G Raposo, L Antunez",
      codeUrl: "https://github.com/juliocesar-io/ariadne-federation-services",
      slides: "https://slides.com/juliocesar_io/data-federation-life-sciences"
    },
    {
      title: "Near Real-Time Telemetry of Nation-Wide ICU’s Capacity Strain in Argentina",
      yearOfPub: 2021,
      publisherLink: "https://pubmed.ncbi.nlm.nih.gov/34042787/",
      publisherName: "IOS Press (PubMed)",
      authorsList: "G Raposo, J Castellanos, H Hernandez"
    },
    {
      title: "A flexible AI pipeline for medical imaging in a radiology workflow",
      yearOfPub: 2021,
      publisherLink: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12088/1208816/A-flexible-AI-pipeline-for-medical-imaging-in-a-radiology/10.1117/12.2606146.short",
      publisherName: "SPIE",
      authorsList: "L Antunez, J Castellanos, G Raposo, C Murga M.D."
    },
];