// naming all my variables and gets.
const fuel = document.querySelectorAll('.fuel');

let phrase = document.querySelector('.phrase');

const alphabet = document.querySelector('.alphabet');

const restart = document.querySelector('.restart');

const winTxt = document.querySelector('.winnertxt');

const notification = document.querySelector('.notify');

const under = document.querySelector('.under');




// make a words array.
let words = [
	'space',
	'earth',
	'jupiter',
	'mars',
	'neptune',
	'moon',
	'moon',
	'mercury',
	'pluto',
	'saturn',
	'venus',
	'uranus',
	'planet',
	'asteroid',
	'blackhole',
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
	'crater',
	'equinox',
	'eclipse',
	'ecliptic',
	'planets',
	'galaxy',
	'lunar',
	'meteorite',
	'meteor',
	'meteoroid',
	'lens',
	'gravity',
	'fullmoon',
	'inertia',
	'milkyway',
	'mass',
	'magnitude',
	'nebula',
	'orbit',
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
	'penumbra',
	'light',
	'rings',
	'observatory',
	'orbital',
	'universe',
	'zodiac',
	'sun',
	'starlight',
	'telescope',
];

// set up a mathfloor math random on the array of spacewords call the output of that phraseRandom
let phraseRandom = words[Math.floor(Math.random() * words.length)];

// push phraseRandom into phrase as an array of each letter
// turn number of letters into blank spaces
//give those blank spaces an underline or different color background or other style change.

let underline = [' _ '];
let underlineNum = [];
for (let i = 0; i < phraseRandom.length; i++) {
	underlineNum[i] = underline.join(underline);
	under.innerText = underlineNum.join('');
}

//created arrays for wrong and right lettters

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
		winTxt.innerText = 'Congradulations!';
	}
}

const rightLetters = [];

const wrongLetters = [];

function updateWrongLetter() {
	wrongLetters.innerhtml = `
	${wrongLetters.length > 0 ? '<p>wrong</p>' : ''}
	${wrongLetters.map((letter) => `span${letter}</span>`)}
	`;

	fuel.forEach((cell, index) => {
		const errors = wrongLetters.length;

		if (index < errors) {
			cell.style.display = 'block';
		} else {
			cell.style.display = 'none';
		}
	});
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
console.log(wrongLetters);
