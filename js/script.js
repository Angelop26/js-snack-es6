// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        name: 'pippo',
        peso: 2
    },
    {
        name: 'pluto',
        peso: 1
    },
    {
        name: 'paperino',
        peso: 1.4
    },
    {
        name: 'mountainbike',
        peso: 4
    },
    {
        name: 'clarence',
        peso: 2.5
    },
]

let weight = ''
let bikeName
bikes.forEach((oneBike) => {
    const {peso, name} = oneBike
    if (weight === '' || weight > peso) {
        weight = peso
        bikeName = name
    }
});
const message = `La bici ${bikeName} con peso: ${weight} è quella più leggera`
console.log(message);