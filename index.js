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
    characterSelections[8] = 'Dexterity';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
})

fighterButton.addEventListener('click', () => {
    fighterButton.classList.add('classSelected');
    characterSelections[0] = 'Fighter';
    characterSelections[8] = 'Strength';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
})

wizardButton.addEventListener('click', () => {
    wizardButton.classList.add('classSelected');
    characterSelections[0] = 'Wizard';
    characterSelections[8] = 'Intelligence';
    document.getElementById("primaryAbilityCS").innerHTML = characterSelections[8];
    raceContinue.classList.add('continueButtonSelected');
})

/* Race Selection Event Listeners */

elfButton.addEventListener('click', () => {
    elfButton.classList.add('classSelected');
    characterSelections[1] = 'Elf';
    abilitiesContinue.classList.add('continueButtonSelected');
})

dwarfButton.addEventListener('click', () => {
    dwarfButton.classList.add('classSelected');
    characterSelections[1] = 'Dwarf';
    abilitiesContinue.classList.add('continueButtonSelected');
})

gnomeButton.addEventListener('click', () => {
    gnomeButton.classList.add('classSelected');
    characterSelections[1] = 'Gnome';
    abilitiesContinue.classList.add('continueButtonSelected');
})

// Class Info Popups

let classPop = document.getElementById("classInfoPopup");
let racePop = document.getElementById("raceInfoPopup");
let roguePop = document.getElementById("rogueInfoPopup");
let fighterPop = document.getElementById("fighterInfoPopup")
let wizardPop = document.getElementById("wizardInfoPopup")


classPopup.addEventListener('click', () => {
    classInfoPopup.classList.toggle('hidden');
    classPop.classList.toggle('')
})

racePopup.addEventListener('click', () => {
    raceInfoPopup.classList.toggle('hidden');
    racePop.classList.toggle('')
})

roguePopup.addEventListener('click', () => {
    rogueInfoPopup.classList.toggle('hidden');
    roguePop.classList.toggle('')
})

fighterPopup.addEventListener('click', () => {
    fighterInfoPopup.classList.toggle('hidden');
    fighterPop.classList.toggle('')
})

wizardPopup.addEventListener('click', () => {
    wizardInfoPopup.classList.toggle('hidden');
    wizardPop.classList.toggle('')
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
    if((dexValue > 8) && (strValue <= 13)){
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
    document.getElementById("strAbilityCS").innerHTML = characterSelections[2]
    document.getElementById("wisAbilityCS").innerHTML = characterSelections[6]
    document.getElementById("chaAbilityCS").innerHTML = characterSelections[7]

    //Race Bonus Scores
    switch (abilityBonus){

    }
})



