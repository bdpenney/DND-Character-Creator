// Const NavBar Buttons
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

/* Class Selection Event Listeners */


//Add a way to only add 'classSelected' to the chosen class//

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

// Abilities Selection Consts 

const strLeft = document.getElementById("strLeft");
const strRight = document.getElementById("strRight");

let strValue = 8; 

strLeft.addEventListener('click', () => {
    if(strValue > 8 ){
        strValue --;
        document.getElementById("strResult").innerHTML = strValue;
      }
})

strRight.addEventListener('click', () => {
    if(strValue < 15 ){
        strValue ++; 
        document.getElementById("strResult").innerHTML = strValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
})


const dexLeft = document.getElementById("dexLeft");
const dexRight = document.getElementById("dexRight");

let dexValue = 8;

dexLeft.addEventListener('click', () => {
    if(dexValue > 8 ){
        dexValue --;
        document.getElementById("dexResult").innerHTML = dexValue;
      }
})

dexRight.addEventListener('click', () => {
    if(dexValue < 15 ){
        dexValue ++; 
        document.getElementById("dexResult").innerHTML = dexValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
})

const conLeft = document.getElementById("conLeft");
const conRight = document.getElementById("conRight");

let conValue = 8;

conLeft.addEventListener('click', () => {
    if(conValue > 8 ){
        conValue --;
        document.getElementById("conResult").innerHTML = conValue;
      }
})

conRight.addEventListener('click', () => {
    if(conValue < 15 ){
        conValue ++; 
        document.getElementById("conResult").innerHTML = conValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
})

const intLeft = document.getElementById("intLeft");
const intRight = document.getElementById("intRight");


let intValue = 8;

intLeft.addEventListener('click', () => {
    if(intValue > 8 ){
        intValue --;
        document.getElementById("intResult").innerHTML = intValue;
      }
})

intRight.addEventListener('click', () => {
    if(intValue < 15 ){
        intValue ++; 
        document.getElementById("intResult").innerHTML = intValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
})

const wisLeft = document.getElementById("wisLeft");
const wisRight = document.getElementById("wisRight");

let wisValue = 8;

wisLeft.addEventListener('click', () => {
    if(wisValue > 8 ){
        wisValue --;
        document.getElementById("wisResult").innerHTML = wisValue;
      }
})

wisRight.addEventListener('click', () => {
    if(wisValue < 15 ){
        wisValue ++; 
        document.getElementById("wisResult").innerHTML = wisValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
})

const chaLeft = document.getElementById("chaLeft");
const chaRight = document.getElementById("chaRight");

let chaValue = 8;

chaLeft.addEventListener('click', () => {
    if(chaValue > 8 ){
        chaValue --;
        document.getElementById("chaResult").innerHTML = chaValue;
      }
})

chaRight.addEventListener('click', () => {
    if(chaValue < 15 ){
        chaValue ++; 
        document.getElementById("chaResult").innerHTML = chaValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
})

//Points Counter

let pointTotal = 27;

// Navigation Bar Buttons

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
    characterSelections[2]= strValue;
    characterSelections[3] = dexValue;
    characterSelections[4] = conValue;
    characterSelections[5] = intValue;
    characterSelections[6] = wisValue;
    characterSelections[7] = chaValue;
})



