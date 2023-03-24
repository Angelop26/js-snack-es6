// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// const bikes = [
//     {
//         name: 'pippo',
//         peso: 2
//     },
//     {
//         name: 'pluto',
//         peso: 1
//     },
//     {
//         name: 'paperino',
//         peso: 1.4
//     },
//     {
//         name: 'mountainbike',
//         peso: 4
//     },
//     {
//         name: 'clarence',
//         peso: 2.5
//     },
// ]

// let weight = ''
// let bikeName
// bikes.forEach((oneBike) => {
//     const {peso, name} = oneBike
//     if (weight === '' || weight > peso) {
//         weight = peso
//         bikeName = name
//     }
// });
// const message = `La bici ${bikeName} con peso: ${weight} è quella più leggera`
// console.log(message);


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// const footballTeams = [
//     {
//         name:'roma',
//         point:0,
//         foulsSouffered:0
//     },
//     {
//         name:'inter',
//         point:0,
//         foulsSouffered:0
//     },
//     {
//         name:'napoli',
//         point:0,
//         foulsSouffered:0
//     },
//     {
//         name:'milan',
//         point:0,
//         foulsSouffered:0
//     },
//     {
//         name:'juve',
//         point:0,
//         foulsSouffered:0
//     },
// ]

// footballTeams.forEach((team) =>{
//     team.point = Math.floor(Math.random() * 101);
//     team.foulsSouffered = Math.floor(Math.random() * 51);
// })
// console.log(footballTeams);

// let newArray = []
// footballTeams.forEach((team) => {
//     const {name, foulsSouffered} = team
//     newArray.push({name, foulsSouffered})
// })
// console.log(newArray);


// Snack Bonus
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numbArray = [10,5,2,4,6,2,67,32,567,245,85]
const newArray = getSubArray(numbArray,2,5)

//////////////////////////////////////////////////////////////////
//FUNCTION
/////////////////////////////////////////////////////////////////
function getSubArray(array,a,b){
    // let subArray = []
    // array.forEach((element,index) => {
    //     if(index >= a && index <= b){
    //       subArray.push(element)
    //     }   
    //     // console.log(subArray);
    // }); 
    // return subArray
    return array.filter((elem,index) => index >= a && index <= b)
}
console.log(newArray);
