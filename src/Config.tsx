import Curie from './img/Curie.jpg'
import Newton from './img/Newton.jpg'
import Hawking from './img/Hawking.jpg'
import Franklin from './img/Franklin.jpg'

export interface Domein {
    naam: string
    quote : string
    wetenschapper: string
    concurrenten: Array<string>
    afbeeldingen: Array<string>
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
    "A. Tegenwind",
    "B. Neergestort",
    "C. Te Groot",
    "D. In beslag genomen"
];

export const faalVraag: string = "Wat faalde er bij de legerdemonstratie van het eerste vliegtuig?";

export const faalJuistAntwoord: number = 1;


export const domeinen: Array<Domein> = [
    {
        naam: "Fysica",
        wetenschapper: "Sir Isaac Newton",
        quote: "Wat naar boven gaat, komt terug naar beneden",
        concurrenten: ["Stephen Hawking", "Marie Curie", "Benjamin Franklin"],
        afbeeldingen: [Hawking, Curie, Franklin, Newton],
        hints: ["man", "lang haar", "1687", "krullen"]
    },
    {
        naam: "Impro",
        wetenschapper: "Patti Styles",
        quote: "Happy feet!",
        afbeeldingen: [Hawking, Curie, Franklin, Newton],
        concurrenten: ["Johnstone", "De lange van Whose Line", "Sinterklaas van den Broeck"],
        hints: ["vrouw", "Zus van Harry", "Australie", "Krabby"],
    },
    {
        naam: "Hoofdstof",
        quote: "Beep beep",
        wetenschapper: "De beamer",
        afbeeldingen: [Hawking, Curie, Franklin, Newton],
        concurrenten: ["Ben Verhoeven", "Charlotte Demetsenaere", "Ingmar Dasseville"],
        hints: ["klein", "licht", "doet soms beep beep", "lights up your day"],
    }
];
