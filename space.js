// assing all my variables and gets.
const fuel = document.querySelectorAll('.fuel')

let phrase = document.querySelector('#phrase')

const alphabet = document.querySelector('.alphabet')

const restart = document.querySelector('.restart')

//word

// make a spacewords array.
let spacewords = [ 'space', 'earth', 'solar system', 'jupiter', 'mars', 'quarter moon', 'neptune', 'moon', 'gibbous moon', 'mercury', 'pluto', 'half moon', 'saturn', 'venus', 'crescent moon', 'uranus', 'planet', 'axial tilt', 'asteroid belt', 'asteroid', 'black hole', 'big bang theory', 'astronaut', 'comet', 'binary star', 'astronomer', 'astronomy', 'elliptical orbit', 'density', 'constellation', 'deep space', 'cosmonaut', 'cosmos', 'dwarf planet', 'crater', 'dwarf star',  'equinox', 'inner planets', 'eclipse', 'ecliptic', 'inferior planets', 'galaxy', 'lunar', 'falling star', 'meteorite', 'meteor', 'meteor shower', 'meteoroid', 'lens', 'gravity', 'full moon', 'inertia', 'milky way', 'mass', 'magnitude', 'outer planets', 'nebula', 'orbit', 'shooting star', 'rocket', 'solar', 'space exploration', 'solstice', 'star', 'total eclipse', 'umbra', 'vernal equinox', 'sky', 'satellite', 'solar system', 'new moon', 'penumbra', 'solar wind', 'light year', 'rings', 'partial eclipse', 'observatory', 'phase', 'orbital inclination', 'universe', 'zodiac', 'space station', 'sun', 'starlight', 'telescope']

// set up a mathfloor math random on the array of spacewords call the output of that phraseRandom 
let phraseRandom = spacewords[Math.floor(Math.random()* spacewords.length)]
// console.log(phraseRandom);

// push phraseRandom into phrase as an array of each letter
// turn number of letters into blank spaces
//give those blank spaces an underline or different color background or other style change.
// let phraseSpaced = []
// for (let i = 0; i < phraseRandom.length; i++) {
//     phraseSpaced[i] = (' _ ')
    
// }
// console.log(phraseSpaced);
// phrase = phraseRandom.length
// console.log(phrase);
let phraseBlank = []
for (let i = 0; i < phraseRandom.length; i++) {
    phraseBlank[i] = (' _ ') 
    // console.log(phraseBlank);
}

phrase.innerText = phraseBlank

alphabet.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event)

    for (let i = 0; i < phraseRandom.length; i++) {
        if (event.target.innerHTML !== phraseRandom[i]) {
            console.log("yess");
        } else {
            console.log('Noooo');
        }
       
       
    
    }
// console.log(event.target.innerHTML);
})
