import Curie from './img/fysica/Curie.jpg'
import Newton from './img/fysica/Newton.jpg'
import Hawking from './img/fysica/Hawking.jpg'
import Franklin from './img/fysica/Franklin.jpg'

//import Aristoteles from './img/biologie/aristoteles.jpeg'
import Campbell from './img/biologie/campbell.jpeg'
import Darwin from './img/biologie/darwin.jpeg'
//import Leewenhoek from './img/biologie/leeuwenhoek.jpeg'
import Abdulali from './img/biologie/abdulali.jpg'
import Carson from './img/biologie/carson.jpg'

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

import Geertz from './img/antropologie/Geertz.jpg'
import Goodall from './img/antropologie/Goodall.jpg'
import Hurston from './img/antropologie/Hurston.jpg'
import Mead from './img/antropologie/Mead.jpg'

import Chomsky from './img/taalkunde/Chomsky.jpg'
import Pei from './img/taalkunde/Pei.jpg'
import Pinker from './img/taalkunde/Pinker.jpg'
import Saussure from './img/taalkunde/Saussure.png'

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
    "Het raketijsje",
//    "Chips",
    "Play-Doh",
//    "Coca-Cola"
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

export const faalVraag: string = "Wat faalde er bij de legerdemonstratie\nvan het eerste vliegtuig?";

export const faalJuistAntwoord: number = 1;

const fysica: Domein = {
    naam: "Fysica",
    wetenschapper: "Sir Isaac Newton",
    quote: "Wat naar boven gaat, komt terug naar beneden",
    concurrenten: ["Stephen Hawking", "Marie Curie", "Benjamin Franklin"],
    afbeeldingen: [Hawking, Curie, Franklin, Newton],
    hints: ["man", "lang haar", "1687", "appel"]
};

const biologie: Domein = {
    naam: "Biologie",
    wetenschapper: "Charles Darwin",
    quote: "Als iedereen hetzelfde was, zou er niets zoals schoonheid bestaan",
    afbeeldingen: [Abdulali, Campbell, Carson, Darwin],
    concurrenten: ["Humayun Abdulali", "Keith Campbell", "Rachel Carson"],
    hints: ["HMS Beagle", "Galapagos", "baard", "19de eeuw"],
};

const informatica: Domein = {
    naam: "Informatica",
    quote: "Je kunt beter achteraf om vergeving vragen, dan vooraf om toestemming.",
    wetenschapper: "Grace Hopper",
    afbeeldingen: [Turing, Babbage, Neumann, Hopper],
    concurrenten: ["Alan Turing", "Charles Babbage", "John von Neumann"],
    hints: ["Wit hemd", "leger", "bril", "20ste eeuw"],
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

const taalkunde : Domein = {
    naam: "Taalkunde",
    quote: "Ik hou van slecht weer. Dat wil zeggen dat je je werk af krijgt.",
    wetenschapper: "Noam Chomsky",
    concurrenten : ["Ferdinand de Saussure", "Li Pei", "Steven Pinker"],
    afbeeldingen : [Saussure, Pei, Pinker, Chomsky],
    hints: ["man", "bril", "Amerikaan", "Leeft nog"]
}

const antropologie : Domein = {
    naam: "Menskunde",
    quote: "Het grootste gevaar voor onze toekomst is apathie.",
    wetenschapper: "Jane Goodall",
    concurrenten : ["Zora Neale Hurston", "Clifford Geertz", "Margaret Mead"],
    afbeeldingen : [Hurston, Geertz, Mead, Goodall],
    hints: ["Grijs", "Apen", "Vrouw", "Leeft nog"]
}

export const domeinen: Array<Domein> = [
    fysica,
    //chemie,
    biologie,
    //psychologie,
    informatica,
    taalkunde,
    antropologie
];

//taalkunde
//antropologie
