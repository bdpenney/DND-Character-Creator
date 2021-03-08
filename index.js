/* Const NavBar Buttons */
const homeButton = document.getElementById("homeButton");
const classButton = document.getElementById("classButton");
const raceButton = document.getElementById("raceButton");
const abilitiesButton = document.getElementById("abilitiesButton");
const charactersheetButton = document.getElementById("charactersheetButton");

/* Const Back/Continue Buttons */
const heroButton = document.getElementById("heroButton");
const heroBack = document.getElementById("heroBack")
const raceContinue = document.getElementById("raceContinue");
const classBack = document.getElementById("classBack")
const abilitiesContinue = document.getElementById("abilitiesContinue")
const raceBack = document.getElementById("raceBack");
const charactersheetContinue = document.getElementById("charactersheetContinue");

/* Const Sections */
const navbarSection = document.getElementById("navbarSection");
const heroSection = document.getElementById("heroSection");
const classSection = document.getElementById("classSection");
const raceSection = document.getElementById("raceSection");
const abilitiesSection = document.getElementById("abilitiesSection");
const charactersheetSection = document.getElementById("charactersheetSection");

/*Character Selection Array*/

const characterSelections = [];

/* Race Selection Consts */

const elfButton = document.getElementById("elfButton");
const dwarfButton = document.getElementById("dwarfButton");
const gnomeButton = document.getElementById("gnomeButton");

/* Class Selection Consts */

const rogueButton = document.getElementById("rogueButton");
const fighterButton = document.getElementById("fighterButton");
const wizardButton = document.getElementById("wizardButton");

/* Abilities Selection Consts */

const strLeft = document.getElementById("strLeft");
const strRight = document.getElementById("strRight");

let strResult = 8;

strLeft.addEventListener('click', () => {
    if(strResult > 8 ){
        strResult --;
        document.getElementById("strResult").innerHTML = strResult;
      }
})

strRight.addEventListener('click', () => {
    if(strResult < 13 ){
        strResult ++; 
        document.getElementById("strResult").innerHTML = strResult;
      }
})




/* Class Selection Event Listeners */

rogueButton.addEventListener('click', () => {
    rogueButton.classList.add('classSelected');
    characterSelections[0] = 'Rogue';
})

fighterButton.addEventListener('click', () => {
    fighterButton.classList.add('classSelected');
    characterSelections[0] = "Fighter";
})

wizardButton.addEventListener('click', () => {
    wizardButton.classList.add('classSelected');
    characterSelections[0] = 'Wizard';
})

/* Race Selection Event Listeners */

elfButton.addEventListener('click', () => {
    elfButton.classList.add('classSelected');
    characterSelections[1] = 'Elf';
})

dwarfButton.addEventListener('click', () => {
    dwarfButton.classList.add('classSelected');
    characterSelections[1] = 'Dwarf';
})

gnomeButton.addEventListener('click', () => {
    gnomeButton.classList.add('classSelected');
    characterSelections[1] = 'Gnome';
})

/* Abilities Selection Event Listeners */



/* Navigation Bar Buttons */

homeButton.addEventListener('click', () => {
    heroSection.classList.remove('hidden');
    navbarSection.classList.add('hidden');
    classSection.classList.add('hidden');
    raceSection.classList.add('hidden');
    abilitiesSection.classList.add('hidden');
    charactersheetSection.classList.add('hidden');
});

classButton.addEventListener('click', () => {
    classSection.classList.remove('hidden');
    raceSection.classList.add('hidden');
    abilitiesSection.classList.add('hidden');
    charactersheetSection.classList.add('hidden');
})

raceButton.addEventListener('click', () => {
    raceSection.classList.remove('hidden');
    classSection.classList.add('hidden');
    abilitiesSection.classList.add('hidden');
    charactersheetSection.classList.add('hidden');
})

abilitiesButton.addEventListener('click', () => {
    abilitiesSection.classList.remove('hidden');
    raceSection.classList.add('hidden');
    classSection.classList.add('hidden');
    charactersheetSection.classList.add('hidden');
})

charactersheetButton.addEventListener('click', () => {
    charactersheetSection.classList.remove('hidden');
    raceSection.classList.add('hidden');
    abilitiesSection.classList.add('hidden');
    classSection.classList.add('hidden');
})

/* Navigation Buttons */

heroButton.addEventListener('click', () => {
    classSection.classList.remove('hidden');
    heroSection.classList.add('hidden');
    navbarSection.classList.remove('hidden');
})

heroBack.addEventListener('click', () => {
    heroSection.classList.remove('hidden');
    classSection.classList.add('hidden');
    navbarSection.classList.add('hidden');
})

raceContinue.addEventListener('click', () => {
    raceSection.classList.remove('hidden');
    classSection.classList.add('hidden');
})

classBack.addEventListener('click', () => {
    classSection.classList.remove('hidden');
    raceSection.classList.add('hidden');
})

abilitiesContinue.addEventListener('click', () => {
    abilitiesSection.classList.remove('hidden');
    raceSection.classList.add('hidden');
})

raceBack.addEventListener('click', () => {
    raceSection.classList.remove('hidden');
    abilitiesSection.classList.add('hidden');
})

charactersheetContinue.addEventListener('click', () => {
    charactersheetSection.classList.remove('hidden');
    abilitiesSection.classList.add('hidden');
})



