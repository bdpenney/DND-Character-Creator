// Const NavBar Buttons
const homeButton = document.getElementById("homeButton");
const classButton = document.getElementById("classButton");
const raceButton = document.getElementById("raceButton");
const abilitiesButton = document.getElementById("abilitiesButton");
const charactersheetButton = document.getElementById("charactersheetButton");

// Const Back/Continue Buttons 
const heroButton = document.getElementById("heroButton");
const heroBack = document.getElementById("heroBack")
const raceContinue = document.getElementById("raceContinue");
const classBack = document.getElementById("classBack")
const abilitiesContinue = document.getElementById("abilitiesContinue")
const raceBack = document.getElementById("raceBack");
const charactersheetContinue = document.getElementById("charactersheetContinue");

// Const Sections
const navbarSection = document.getElementById("navbarSection");
const heroSection = document.getElementById("heroSection");
const classSection = document.getElementById("classSection");
const raceSection = document.getElementById("raceSection");
const abilitiesSection = document.getElementById("abilitiesSection");
const charactersheetSection = document.getElementById("charactersheetSection");

//Character Selection Array for stored character data

const characterSelections = [];

// Race Selection Consts 

const elfButton = document.getElementById("elfButton");
const dwarfButton = document.getElementById("dwarfButton");
const gnomeButton = document.getElementById("gnomeButton");

// Class Selection Consts for user selection

const rogueButton = document.getElementById("rogueButton");
const fighterButton = document.getElementById("fighterButton");
const wizardButton = document.getElementById("wizardButton");
const clericButton = document.getElementById("clericButton");
const bardButton = document.getElementById("bardButton");
const barbarianButton = document.getElementById("barbarianButton");
const druidButton = document.getElementById("druidButton");
const rangerButton = document.getElementById("rangerButton");
const monkButton = document.getElementById("monkButton");
const paladinButton = document.getElementById("paladinButton");
const sorcererButton = document.getElementById("sorcererButton");
const warlockButton = document.getElementById("warlockButton");

// Class Selection Event Listeners


rogueButton.addEventListener('click', () => {
    rogueButton.classList.remove('hoverEffect');
    rogueButton.classList.remove('characterChoices');
    rogueButton.classList.add('characterSelected');
    characterSelections[0] = 'Rogue';
    characterSelections[8] = 'Dexterity';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

fighterButton.addEventListener('click', () => {
    fighterButton.classList.remove('hoverEffect');
    fighterButton.classList.remove('characterChoices');
    fighterButton.classList.add('characterSelected');
    characterSelections[0] = 'Fighter';
    characterSelections[8] = 'Strength';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

wizardButton.addEventListener('click', () => {
    wizardButton.classList.remove('hoverEffect');
    wizardButton.classList.remove('characterChoices');
    wizardButton.classList.add('characterSelected');
    characterSelections[0] = 'Wizard';
    characterSelections[8] = 'Intelligence';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

clericButton.addEventListener('click', () => {
    clericButton.classList.remove('hoverEffect');
    clericButton.classList.remove('characterChoices');
    clericButton.classList.add('characterSelected');
    characterSelections[0] = 'Cleric';
    characterSelections[8] = 'Wisdom';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

bardButton.addEventListener('click', () => {
    bardButton.classList.remove('hoverEffect');
    bardButton.classList.remove('characterChoices');
    bardButton.classList.add('characterSelected');
    characterSelections[0] = 'Bard';
    characterSelections[8] = 'Charisma';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

barbarianButton.addEventListener('click', () => {
    barbarianButton.classList.remove('hoverEffect');
    barbarianButton.classList.remove('characterChoices');
    barbarianButton.classList.add('characterSelected');
    characterSelections[0] = 'Barbarian';
    characterSelections[8] = 'Strength';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

druidButton.addEventListener('click', () => {
    druidButton.classList.remove('hoverEffect');
    druidButton.classList.remove('characterChoices');
    druidButton.classList.add('characterSelected');
    characterSelections[0] = 'Druid';
    characterSelections[8] = 'Wisdom';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

rangerButton.addEventListener('click', () => {
    rangerButton.classList.remove('hoverEffect');
    rangerButton.classList.remove('characterChoices');
    rangerButton.classList.add('characterSelected');
    characterSelections[0] = 'Ranger';
    characterSelections[8] = 'Dexterity';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

monkButton.addEventListener('click', () => {
    monkButton.classList.remove('hoverEffect');
    monkButton.classList.remove('characterChoices');
    monkButton.classList.add('characterSelected');
    characterSelections[0] = 'Monk';
    characterSelections[8] = 'Dexterity';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardkButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

paladinButton.addEventListener('click', () => {
    paladinButton.classList.remove('hoverEffect');
    paladinButton.classList.remove('characterChoices');
    paladinButton.classList.add('characterSelected');
    characterSelections[0] = 'Paladin';
    characterSelections[8] = 'Strength';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

sorcererButton.addEventListener('click', () => {
    sorcererButton.classList.remove('hoverEffect');
    sorcererButton.classList.remove('characterChoices');
    sorcererButton.classList.add('characterSelected');
    characterSelections[0] = 'Sorcerer';
    characterSelections[8] = 'Charisma';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
    warlockButton.classList.add('hoverEffect');
    warlockButton.classList.add('characterChoices');
    warlockButton.classList.remove('characterSelected');
})

warlockButton.addEventListener('click', () => {
    warlockButton.classList.remove('hoverEffect');
    warlockButton.classList.remove('characterChoices');
    warlockButton.classList.add('characterSelected');
    characterSelections[0] = 'Warlock';
    characterSelections[8] = 'Charisma';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
    rogueButton.classList.add('hoverEffect');
    rogueButton.classList.add('characterChoices');
    rogueButton.classList.remove('characterSelected');
    fighterButton.classList.add('hoverEffect');
    fighterButton.classList.add('characterChoices');
    fighterButton.classList.remove('characterSelected');
    clericButton.classList.add('hoverEffect');
    clericButton.classList.add('characterChoices');
    clericButton.classList.remove('characterSelected');
    druidButton.classList.add('hoverEffect');
    druidButton.classList.add('characterChoices');
    druidButton.classList.remove('characterSelected');
    bardButton.classList.add('hoverEffect');
    bardButton.classList.add('characterChoices');
    bardButton.classList.remove('characterSelected');
    barbarianButton.classList.add('hoverEffect');
    barbarianButton.classList.add('characterChoices');
    barbarianButton.classList.remove('characterSelected');
    rangerButton.classList.add('hoverEffect');
    rangerButton.classList.add('characterChoices');
    rangerButton.classList.remove('characterSelected');
    monkButton.classList.add('hoverEffect');
    monkButton.classList.add('characterChoices');
    monkButton.classList.remove('characterSelected');
    paladinButton.classList.add('hoverEffect');
    paladinButton.classList.add('characterChoices');
    paladinButton.classList.remove('characterSelected');
    sorcererButton.classList.add('hoverEffect');
    sorcererButton.classList.add('characterChoices');
    sorcererButton.classList.remove('characterSelected');
    wizardButton.classList.add('hoverEffect');
    wizardButton.classList.add('characterChoices');
    wizardButton.classList.remove('characterSelected');
})

// Race Selection Event Listeners

elfButton.addEventListener('click', () => {
    elfButton.classList.remove('hoverEffect');
    elfButton.classList.remove('characterChoices');
    elfButton.classList.add('characterSelected');
    characterSelections[1] = 'Elf';
    abilitiesContinue.classList.add('continueButtonSelected');
    dwarfButton.classList.add('hoverEffect');
    dwarfButton.classList.add('characterChoices');
    dwarfButton.classList.remove('characterSelected');
    gnomeButton.classList.add('hoverEffect');
    gnomeButton.classList.add('characterChoices');
    gnomeButton.classList.remove('characterSelected');
})

dwarfButton.addEventListener('click', () => {
    dwarfButton.classList.remove('hoverEffect');
    dwarfButton.classList.remove('characterChoices');
    dwarfButton.classList.add('characterSelected');
    characterSelections[1] = 'Dwarf';
    abilitiesContinue.classList.add('continueButtonSelected');
    elfButton.classList.add('hoverEffect');
    elfButton.classList.add('characterChoices');
    elfButton.classList.remove('characterSelected');
    gnomeButton.classList.add('hoverEffect');
    gnomeButton.classList.add('characterChoices');
    gnomeButton.classList.remove('characterSelected');
})

gnomeButton.addEventListener('click', () => {
    gnomeButton.classList.remove('hoverEffect');
    gnomeButton.classList.remove('characterChoices');
    gnomeButton.classList.add('characterSelected');
    characterSelections[1] = 'Gnome';
    abilitiesContinue.classList.add('continueButtonSelected');
    elfButton.classList.add('hoverEffect');
    elfButton.classList.add('characterChoices');
    elfButton.classList.remove('characterSelected');
    dwarfButton.classList.add('hoverEffect');
    dwarfButton.classList.add('characterChoices');
    dwarfButton.classList.remove('characterSelected');
})


// Abilities Selection Consts 

const strLeft = document.getElementById("strLeft");
const strRight = document.getElementById("strRight");

let strValue = 8; 

// Ability Score Counter Functions

strLeft.addEventListener('click', () => {
    if((strValue > 8) && (strValue <= 13)){
        strValue --;
        document.getElementById("strResult").innerHTML = strValue;
        pointTotal ++;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
    else if((strValue >= 13) && (strValue <= 15)){
        strValue --;
        document.getElementById("strResult").innerHTML = strValue;
        pointTotal += 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

strRight.addEventListener('click', () => {
    if((strValue < 13) && (pointTotal > 0)){
        strValue ++; 
        document.getElementById("strResult").innerHTML = strValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
    else if ((strValue >= 13) && (strValue < 15) && (pointTotal >= 2)){
        strValue ++;
        document.getElementById("strResult").innerHTML = strValue;
        pointTotal -= 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

const dexLeft = document.getElementById("dexLeft");
const dexRight = document.getElementById("dexRight");

let dexValue = 8;

dexLeft.addEventListener('click', () => {
    if((dexValue > 8) && (dexValue <= 13)){
        dexValue --;
        document.getElementById("dexResult").innerHTML = dexValue;
        pointTotal ++;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
      else if((dexValue >= 13) && (dexValue <= 15)){
        dexValue --;
        document.getElementById("dexResult").innerHTML = dexValue;
        pointTotal += 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

dexRight.addEventListener('click', () => {
    if((dexValue < 13 ) && (pointTotal > 0)){
        dexValue ++; 
        document.getElementById("dexResult").innerHTML = dexValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
      else if ((dexValue >= 13) && (dexValue < 15) && (pointTotal >= 2)){
        dexValue ++;
        document.getElementById("dexResult").innerHTML = dexValue;
        pointTotal -= 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

const conLeft = document.getElementById("conLeft");
const conRight = document.getElementById("conRight");

let conValue = 8;

conLeft.addEventListener('click', () => {
    if((conValue > 8) && (conValue <= 13)){
        conValue --;
        document.getElementById("conResult").innerHTML = conValue;
        pointTotal ++;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
    else if((conValue >= 13) && (conValue <= 15)){
        conValue --;
        document.getElementById("conResult").innerHTML = conValue;
        pointTotal += 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

conRight.addEventListener('click', () => {
    if((conValue < 13 ) && (pointTotal > 0)){
        conValue ++; 
        document.getElementById("conResult").innerHTML = conValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
      else if ((conValue >= 13) && (conValue < 15) && (pointTotal >= 2)){
        conValue ++;
        document.getElementById("conResult").innerHTML = conValue;
        pointTotal -= 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

const intLeft = document.getElementById("intLeft");
const intRight = document.getElementById("intRight");


let intValue = 8;

intLeft.addEventListener('click', () => {
    if((intValue > 8) && (intValue <= 13)){
        intValue --;
        document.getElementById("intResult").innerHTML = intValue;
        pointTotal ++;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
    else if((intValue >= 13) && (intValue <= 15)){
        intValue --;
        document.getElementById("intResult").innerHTML = intValue;
        pointTotal += 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

intRight.addEventListener('click', () => {
    if((intValue < 13) && (pointTotal > 0)){
        intValue ++; 
        document.getElementById("intResult").innerHTML = intValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
      else if ((intValue >= 13) && (intValue < 15) && (pointTotal >= 2)){
        intValue ++;
        document.getElementById("intResult").innerHTML = intValue;
        pointTotal -= 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

const wisLeft = document.getElementById("wisLeft");
const wisRight = document.getElementById("wisRight");

let wisValue = 8;

wisLeft.addEventListener('click', () => {
    if((wisValue > 8) && (wisValue <= 13)){
        wisValue --;
        document.getElementById("wisResult").innerHTML = wisValue;
        pointTotal ++;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
    else if((wisValue >= 13) && (wisValue <= 15)){
        wisValue --;
        document.getElementById("wisResult").innerHTML = wisValue;
        pointTotal += 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

wisRight.addEventListener('click', () => {
    if((wisValue < 13) && (pointTotal > 0)){
        wisValue ++; 
        document.getElementById("wisResult").innerHTML = wisValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
      else if ((wisValue >= 13) && (wisValue < 15) && (pointTotal >= 2)){
        wisValue ++;
        document.getElementById("wisResult").innerHTML = wisValue;
        pointTotal -= 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

const chaLeft = document.getElementById("chaLeft");
const chaRight = document.getElementById("chaRight");

let chaValue = 8;

chaLeft.addEventListener('click', () => {
    if((chaValue > 8) && (chaValue <= 13)){
        chaValue --;
        document.getElementById("chaResult").innerHTML = chaValue;
        pointTotal ++;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
    else if((chaValue >= 13) && (chaValue <= 15)){
        chaValue --;
        document.getElementById("chaResult").innerHTML = chaValue;
        pointTotal += 2;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
    }
})

chaRight.addEventListener('click', () => {
    if((chaValue < 13) && (pointTotal > 0)){
        chaValue ++; 
        document.getElementById("chaResult").innerHTML = chaValue;
        pointTotal --;
        document.getElementById("pointsCounter").innerHTML = pointTotal;
      }
      else if ((chaValue >= 13) && (chaValue < 15) && (pointTotal >= 2)){
        chaValue ++;
        document.getElementById("chaResult").innerHTML = chaValue;
        pointTotal -= 2;
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
    document.getElementById("classCS").innerHTML = characterSelections[0];
})

abilitiesButton.addEventListener('click', () => {
    abilitiesSection.classList.remove('hidden');
    raceSection.classList.add('hidden');
    classSection.classList.add('hidden');
    charactersheetSection.classList.add('hidden');
    document.getElementById("classCS").innerHTML = characterSelections[0];
})

charactersheetButton.addEventListener('click', () => {
    charactersheetSection.classList.remove('hidden');
    raceSection.classList.add('hidden');
    abilitiesSection.classList.add('hidden');
    classSection.classList.add('hidden');
    document.getElementById("classCS").innerHTML = characterSelections[0];
    document.getElementById("raceCS").innerHTML = characterSelections[1];

    if (dwarfButton.classList.contains('characterSelected')){
        document.getElementById("conAbilityCS").innerHTML = characterSelections[4] + 2;
        document.getElementById("dexAbilityCS").innerHTML = characterSelections[3];
        document.getElementById("intAbilityCS").innerHTML = characterSelections[5];
    }
    if (elfButton.classList.contains('characterSelected')){
        document.getElementById("dexAbilityCS").innerHTML = characterSelections[3] + 2;
        document.getElementById("conAbilityCS").innerHTML = characterSelections[4];
        document.getElementById("intAbilityCS").innerHTML = characterSelections[5];
    }
    if (gnomeButton.classList.contains('characterSelected')){
        document.getElementById("intAbilityCS").innerHTML = characterSelections[5] + 2;
        document.getElementById("conAbilityCS").innerHTML = characterSelections[4];
        document.getElementById("dexAbilityCS").innerHTML = characterSelections[3];
    }
})

/* Navigation Buttons */

heroButton.addEventListener('click', () => {
    classSection.classList.remove('hidden');
    heroSection.classList.add('hidden');
    navbarSection.classList.remove('hidden');
    document.getElementById("classCS").innerHTML = characterSelections[0];
})

heroBack.addEventListener('click', () => {
    heroSection.classList.remove('hidden');
    classSection.classList.add('hidden');
    navbarSection.classList.add('hidden');
})

raceContinue.addEventListener('click', () => {
    raceSection.classList.remove('hidden');
    classSection.classList.add('hidden');
    document.getElementById("RaceCS").innerHTML = characterSelections[1];
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

let RaceCS = document.getElementById("RaceCS");
let classCS = document.getElementById("classCS");
let strAbilityCS = document.getElementById("strAbilityCS");
let dexAbilityCS = document.getElementById("dexAbilityCS");
let conAbilityCS = document.getElementById("conAbilityCS");
let intAbilityCS = document.getElementById("intAbilityCS");
let wisAbilityCS = document.getElementById("wisAbilityCS");
let chaAbilityCS = document.getElementById("chaAbilityCS");

charactersheetContinue.addEventListener('click', () => {
    charactersheetSection.classList.remove('hidden');
    abilitiesSection.classList.add('hidden');
    characterSelections[2]= strValue;
    characterSelections[3] = dexValue;
    characterSelections[4] = conValue;
    characterSelections[5] = intValue;
    characterSelections[6] = wisValue;
    characterSelections[7] = chaValue;

    document.getElementById("classCS").innerHTML = characterSelections[0];
    document.getElementById("RaceCS").innerHTML = characterSelections[1];
    document.getElementById("strAbilityCS").innerHTML = characterSelections[2];
    document.getElementById("wisAbilityCS").innerHTML = characterSelections[6];
    document.getElementById("chaAbilityCS").innerHTML = characterSelections[7];

    if (dwarfButton.classList.contains('characterSelected')){
        document.getElementById("conAbilityCS").innerHTML = characterSelections[4] + 2;
        document.getElementById("dexAbilityCS").innerHTML = characterSelections[3];
        document.getElementById("intAbilityCS").innerHTML = characterSelections[5];
    }
    if (elfButton.classList.contains('characterSelected')){
        document.getElementById("dexAbilityCS").innerHTML = characterSelections[3] + 2;
        document.getElementById("conAbilityCS").innerHTML = characterSelections[4];
        document.getElementById("intAbilityCS").innerHTML = characterSelections[5];
    }
    if (gnomeButton.classList.contains('characterSelected')){
        document.getElementById("intAbilityCS").innerHTML = characterSelections[5] + 2;
        document.getElementById("conAbilityCS").innerHTML = characterSelections[4];
        document.getElementById("dexAbilityCS").innerHTML = characterSelections[3];
    }
})