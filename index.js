const {p1, p2, p3} = require ("./persona.js");  

const isValidNotas = (persona) => {
    const minMates = 50;
    const minLengua = 75;

    const isValidMates = persona.notaMates >= minMates;
    const isValidLengua = persona.notaLengua >= minLengua;

    return isValidLengua && isValidMates;
}


console.log(p1.name, ":", isValidNotas(p1));
console.log(p2.name, ":", isValidNotas(p2));
console.log(p3.name, ":", isValidNotas(p2));


