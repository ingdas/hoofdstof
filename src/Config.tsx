import Curie from './img/Curie.jpg'
import Newton from './img/Newton.jpg'
import Hawking from './img/Hawking.jpg'
import Franklin from './img/Franklin.jpg'

export interface Domein {
    naam: string
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
        concurrenten: ["Stephen Hawking", "Marie Curie", "Benjamin Franklin"],
        afbeeldingen: [Hawking, Curie, Franklin, Newton],
        hints: ["man", "lang haar", "1687", "krullen"]
    },
    {
        naam: "Impro",
        wetenschapper: "Patti Styles",
        afbeeldingen: [Hawking, Curie, Franklin, Newton],
        concurrenten: ["Johnstone", "De lange van Whose Line", "Sinterklaas van den Broeck"],
        hints: ["vrouw", "Zus van Harry", "Australie", "Krabby"],
    },
    {
        naam: "Hoofdstof",
        wetenschapper: "De beamer",
        afbeeldingen: [Hawking, Curie, Franklin, Newton],
        concurrenten: ["Ben Verhoeven", "Charlotte Demetsenaere", "Ingmar Dasseville"],
        hints: ["klein", "licht", "doet soms beep beep", "lights up your day"],
    }
];
