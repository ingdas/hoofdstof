export interface Domein {
    naam: string
    wetenschapper: string
    concurrenten: Array<string>
    hints: Array<string>
}

export const uitvindingen: Array<string> = [
    "Cornflakes",
    "Post-its",
    "Chips",
    "Pacemaker",
    "Velcro"
];

export const speechQuestions: Array<string> = [
    "Een voorwerp",
    "Een uitspraak",
    "Een sprookjesfiguur",
    "Een vak op school"
];

export const faalAntwoorden: Array<string> = [
    "A. De gebroeders Wright hadden niet gedacht aan wind tegen en konden daardoor niet opstijgen.",
    "B. Het vliegtuig stortte neer met een soldaat en een van de broers erin. ",
    "C. Het vliegtuig was veel te groot voor de landingsbaan en kon daardoor niet opstijgen.",
    "D. Het leger nam het vliegtuig direct in beslag als mogelijk wapen.   "
];

export const faalVraag: string = "De gebroeders Wright zijn bekend geworden met de uitvinding van het vliegtuig. Na hun uitvinding in 1902, bouwden ze een nieuw vliegtuig voor twee personen om te verkopen aan het Amerikaanse leger. Wat gebeurde er bij hun eerste demonstratievlucht?";

export const faalJuistAntwoord: number = 1;


export const domeinen: Array<Domein> = [
    {
        naam: "Fysica",
        wetenschapper: "Sir Isaac Newton",
        concurrenten: ["Stephen Hawkins", "Marie Curie", "Benjamin Franklin"],
        hints: ["man", "lang haar", "1687", "krullen"]
    },
    {
        naam: "Wiskunde",
        wetenschapper: "Kurt Gödel",
        concurrenten: ["Stephen Hawkins", "Marie Curie", "Benjamin Franklin"],
        hints: ["man", "lang haar", "1687", "krullen"],
    },
    {
        naam: "Informatica",
        wetenschapper: "Alan Turing",
        concurrenten: ["Stephen Hawkins", "Marie Curie", "Benjamin Franklin"],
        hints: ["man", "lang haar", "1687", "krullen"],
    }
];