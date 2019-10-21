import Curie from './img/fysica/Curie.jpg'
import Newton from './img/fysica/Newton.jpg'
import Hawking from './img/fysica/Hawking.jpg'
import Franklin from './img/fysica/Franklin.jpg'
import Aristoteles from './img/biologie/aristoteles.jpeg'
import Campbell from './img/biologie/campbell.jpeg'
import Darwin from './img/biologie/darwin.jpeg'
import Leewenhoek from './img/biologie/leeuwenhoek.jpeg'
import Babbage from './img/informatica/babbage.jpeg'
import Hopper from './img/informatica/hopper.jpeg'
import Neumann from './img/informatica/neumann.jpg'
import Turing from './img/informatica/turing.jpeg'
import Boyle from './img/chemie/boyle.jpg'
import Nobel from './img/chemie/nobel.jpg'
import Pasteur from './img/chemie/pasteur.jpg'
import Lavoisier from './img/chemie/lavoisier.jpg'
import Bandura from './img/psychologie/bandura.jpg'
import Freud from './img/psychologie/freud.jpg'
import Piaget from './img/psychologie/piaget.jpg'
import Skinner from './img/psychologie/skinner.jpg'

export interface Domein {
    naam: string
    quote: string
    wetenschapper: string
    concurrenten: Array<string>
    afbeeldingen: Array<string>
    hints: Array<string>
}

export const uitvindingen: Array<string> = [
    "Velcro",
    "Cornflakes",
    "Post-its",
    "Het theezakje",
    "Het raketijsje",
    "Chips",
    "Play-Doh",
    "Coca-Cola"
];

export const speechQuestions: Array<string> = [
    "Een voorwerp",
    "Een vloekwoord",
    "Een bekend vlogger",
    "Een liedjestitel",
    "Een plaats waar je op vakantie gaat",
    "Een superkracht",
    "Beroep van je moeder",
    "Wat zit standaard in je brooddoos?",
    "Een stripfiguur",
    "Een emoji",
    "Drie emojis"
];

export const faalAntwoorden: Array<string> = [
    "A. Tegenwind",
    "B. Neergestort",
    "C. Te Groot",
    "D. In beslag genomen"
];

export const faalVraag: string = "Wat faalde er bij de legerdemonstratie van het eerste vliegtuig?";

export const faalJuistAntwoord: number = 1;

const fysica: Domein = {
    naam: "Fysica",
    wetenschapper: "Sir Isaac Newton",
    quote: "Wat naar boven gaat, komt terug naar beneden",
    concurrenten: ["Stephen Hawking", "Marie Curie", "Benjamin Franklin"],
    afbeeldingen: [Hawking, Curie, Franklin, Newton],
    hints: ["man", "lang haar", "1687", "krullen"]
};

const biologie: Domein = {
    naam: "Biologie",
    wetenschapper: "Charles Darwin",
    quote: "Als iedereen hetzelfde was, zou er niets zoals schoonheid bestaan",
    afbeeldingen: [Aristoteles, Campbell, Leewenhoek, Darwin],
    concurrenten: ["Aristoteles", "Keith Campbell", "Antonie van Leeuwenhoek"],
    hints: ["HMS Beagle", "foto", "baard", "19de eeuw"],
};

const informatica: Domein = {
    naam: "Informatica",
    quote: "Als we van een machine verwachten dat hij foutloos is, kan hij niet intelligent zijn",
    wetenschapper: "Alan Turing",
    afbeeldingen: [Hopper, Babbage, Neumann, Turing],
    concurrenten: ["Grace Hopper", "Charles Babbage", "John von Neumann"],
    hints: ["zwart-wit", "test voor AI's", "gestorven op 41-jarige leeftijd", "je ziet maar 1 oor"],
};

const chemie: Domein = {
    naam: "Chemie",
    quote: "Verbazing is de eerste stap naar ontdekking",
    wetenschapper: "Louis Pasteur",
    afbeeldingen: [Nobel, Lavoisier, Boyle, Pasteur],
    concurrenten: ["Alfred Nobel", "Antoine Lavoisier", "Robert Boyle"],
    hints: ["baard", "Fransman", "Iets met melk", "Vaccins"]
};

const psychologie: Domein = {
    naam: "Psychologie",
    quote: "Intelligentie is wat je gebruikt als je niet weet wat gedaan",
    wetenschapper: "Jean Piaget",
    concurrenten: ["BF Skinner", "Sigmund Freud", "Albert Bandura"],
    afbeeldingen: [Skinner, Freud, Bandura, Piaget],
    hints: ["Zwitser", "bril", "zwart-wit", "3.14"]
};

export const domeinen: Array<Domein> = [
    fysica,
    chemie,
    biologie,
    psychologie,
    informatica,
];