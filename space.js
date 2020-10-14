// naming all my variables and gets.
const fuel = document.querySelectorAll('.fuel');

const cell = document.querySelectorAll('.cell');

let phrase = document.querySelector('.phrase');

const alphabet = document.querySelector('.alphabet');

const restart = document.querySelector('.restart');

const under = document.querySelector('.under');

let popup = document.querySelector('.popup-container');

const finalMessage = document.querySelector('#final-message');

// make a words array.
let words = ['space','earth','jupiter','mars','neptune','moon','mercury','pluto','saturn','venus','uranus','planet','asteroid','blackhole','astronaut','comet','binarystar','astronomer','astronomy','elliptical','density','constellation','deepspace','cosmonaut','cosmos','crater','equinox','eclipse','ecliptic','planets','galaxy','lunar','meteorite','meteor','meteoroid','lens','gravity','fullmoon','inertia','milkyway','mass','magnitude','nebula','orbit','rocket','solar','exploration','solstice','star','eclipse','umbra','equinox','sky','satellite','penumbra','light','rings','observatory','orbital','universe','zodiac','sun','starlight','telescope',];

// set up a mathfloor math random on the array of spacewords call the output of that phraseRandom
let phraseRandom = words[Math.floor(Math.random() * words.length)];

// push phraseRandom into phrase as an array of each letter
// turn number of letters into blank spaces
//give those blank spaces an underline or different color background or other style change.

let underline = [' _ '];
let underlineNum = [];
for (let i = 0; i < phraseRandom.length; i++) {
	underlineNum[i] = underline.join('_');
	under.innerText = underlineNum.join('');
}

//created arrays for wrong and right lettters
const rightLetters = [];

const wrongLetters = [];

//place phrase letters into phrase
function displayPhrase() {
	phrase.innerHTML = `${phraseRandom
		.split('')
		.map(
			(letter) => `
                <span class = "letter">
                  ${rightLetters.includes(letter) ? letter : '_'}
                </span>
            `
		)
		.join('')}
    `;
}

function updateWrongLetters() {
	wrongLetters.innerhtml = `
	${wrongLetters.length > 0 ? '<p>wrong</p>' : ''}
	${wrongLetters.map((letter) => `<span>${letter}</span>`)}
	`;

	cell.forEach((part, index) => {
		const errors = wrongLetters.length;

		if (index < errors) {
			part.style.display = 'none';
		} else {
			part.style.display = 'block';
		}
	});

	if (wrongLetters.length === cell.length) {
		finalMessage.innerText = 'you lost... TRY AGAIN. ';
		popup.style.display = 'flex';
	}
}

alphabet.addEventListener('click', (event) => {
	event.preventDefault();
	const letter = event.target.value;
	if (phraseRandom.includes(letter)) {
		if (!rightLetters.includes(letter)) {
			rightLetters.push(letter);

			displayPhrase();
		}
	} else {
		if (!wrongLetters.includes(letter)) {
			wrongLetters.push(letter);

			updateWrongLetters();
		}
	}
	if (underlineNum.length === rightLetters.length) {
		finalMessage.innerText = 'YOU WON !!';
		popup.style.display = 'flex';
	}
});

displayPhrase();
