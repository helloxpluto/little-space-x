// assing all my variables and gets.
const fuel = document.querySelector('.fuel')

const phrase = document.querySelector('phrase')

const alphabet = document.querySelector('.alphabet')

const restart = document.querySelector('.restart')

//word

// make a spacewords array.
let spacewords = [ 'Space', 'Earth', 'Solar System', 'Jupiter', 'Mars', 'quarter moon', 'Neptune', 'moon', 'gibbous moon', 'Mercury', 'Pluto', 'half moon', 'Saturn', 'Venus', 'crescent moon', 'Uranus', 'planet', 'axial tilt', 'asteroid belt', 'asteroid', 'black hole', 'big bang theory', 'astronaut', 'comet', 'binary star', 'astronomer', 'astronomy', 'elliptical orbit', 'density', 'constellation', 'deep space', 'cosmonaut', 'cosmos', 'dwarf planet', 'crater', 'dwarf star',  'equinox', 'inner planets', 'eclipse', 'ecliptic', 'inferior planets', 'galaxy', 'lunar', 'falling star', 'meteorite', 'meteor', 'meteor shower', 'meteoroid', 'lens', 'gravity', 'full moon', 'inertia', 'Milky Way', 'mass', 'magnitude', 'outer planets', 'nebula', 'orbit', 'shooting star', 'rocket', 'solar', 'space exploration', 'solstice', 'star', 'total eclipse', 'umbra', 'vernal equinox', 'sky', 'satellite', 'solar system', 'new moon', 'penumbra', 'solar wind', 'light year', 'rings', 'partial eclipse', 'observatory', 'phase', 'orbital inclination', 'universe', 'zodiac', 'space station', 'sun', 'starlight', 'telescope']

// set up a mathfloor math random on the array of spacewords call the output of that phraseRandom 
phraseRandom = spacewords[Math.floor(Math.random()* spacewords.length)]
// console.log(phraseRandom);

// push phraseRandom into phrase as an array of letters



// turn number of letters into blank spaces
//give those blank spaces an underline or different color background or other style change.
