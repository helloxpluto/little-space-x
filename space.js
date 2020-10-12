// assing all my variables and gets.
const fuel = document.querySelectorAll('.fuel');

let phrase = document.querySelector('.phrase');

const alphabet = document.querySelector('.alphabet');

const restart = document.querySelector('.restart');

const winTxt = document.querySelector('.winnertxt');
//word

// make a words array.
let words = [
	'space',
	'earth',
	'solar system',
	'jupiter',
	'mars',
	'quartermoon',
	'neptune',
	'moon',
	'moon',
	'mercury',
	'pluto',
	'halfmoon',
	'saturn',
	'venus',
	'crescentmoon',
	'uranus',
	'planet',
	'axialtilt',
	'asteroidbelt',
	'asteroid',
	'blackhole',
	'bigbangtheory',
	'astronaut',
	'comet',
	'binarystar',
	'astronomer',
	'astronomy',
	'elliptical',
	'density',
	'constellation',
	'deepspace',
	'cosmonaut',
	'cosmos',
	'dwarfplanet',
	'crater',
	'equinox',
	'innerplanets',
	'eclipse',
	'ecliptic',
	'uuuplanets',
	'galaxy',
	'lunar',
	'fallingstar',
	'meteorite',
	'meteor',
	'meteorshower',
	'meteoroid',
	'lens',
	'gravity',
	'fullmoon',
	'inertia',
	'milkyway',
	'mass',
	'magnitude',
	'outerplanets',
	'nebula',
	'orbit',
	'shootingstar',
	'rocket',
	'solar',
	'exploration',
	'solstice',
	'star',
	'eclipse',
	'umbra',
	'equinox',
	'sky',
	'satellite',
	'solar system',
	'new moon',
	'penumbra',
	'solar wind',
	'light',
	'rings',
	'observatory',
	'phase',
	'orbital',
	'universe',
	'zodiac',
	'spacestation',
	'sun',
	'starlight',
	'telescope',
];

// set up a mathfloor math random on the array of spacewords call the output of that phraseRandom
let phraseRandom = words[Math.floor(Math.random() * words.length)];
// console.log(phraseRandom);

// push phraseRandom into phrase as an array of each letter
// turn number of letters into blank spaces
//give those blank spaces an underline or different color background or other style change.
// let phraseSpaced = [];
// for (let i = 0; i < phraseRandom.length; i++) {
// 	phraseSpaced[i] = ' _ ';
// }
const rightLetters = [' '];
const wrongLetters = [' '];
function displayPhrase() {
	phrase.innerHTML = `${phraseRandom
		.split('')
		.map(
			(letter) => `
                <span class = "letter">
                  ${rightLetters.includes(letter) ? letter : ''}
                </span>
            `
		)
		.join('')}
    `;
	const innerPhrase = phrase.innerText.replace(/\n/g, '');
	if (innerPhrase === phraseRandom) {
		finalMessage.innerText = 'Congradulations!';
	}
}

function showNotification() {
	Notification.classList.add('show');
}

alphabet.addEventListener('click', (event) => {
	event.preventDefault();
	const letter = event.target.value;
	if (phraseRandom.includes(letter)) {
		if (!rightLetters.includes(letter)) {
			rightLetters.push(letter);

			displayPhrase();
		} else {
			showNotification();
		}
	} else {
		if (!wrongLetters.includes(letter)) {
			wrongLetters.push(letter);

			updateWrongLetter();
		} else {
			showNotification();
		}
	}
	
});

displayPhrase();
console.log(rightLetters);