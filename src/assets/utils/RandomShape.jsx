import * as patterns from "react-svg-blob/dist/lib/patterns";

const allPatterns = Object.values(patterns);

export function getRandomColor() {
    return "#" + Math.random().toString(16).substr(-6);
}

export function getRandomInt(numberMin, numberMax) {
    numberMin = Math.ceil(numberMin);
    numberMax = Math.floor(numberMax);
    return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
}

export function getRandomPattern() {
    return allPatterns[Math.floor(Math.random() * allPatterns.length)];
}
