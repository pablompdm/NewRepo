const {Pepe, Paco, Sonia} = require ("./persona");

const isValidNotas = (persona) => {
    const minMates = 50;
    const minLengua = 75;

    const isValidMates = persona.NotaMates >= minMates;
    const isValidLengua = persona.NotaLengua >= minLengua;

    return isValidLengua && isValidMates;
}

console.log("Pepe: ", isValidNotas(Pepe));
console.log("Paco: ", isValidNotas(Paco));


