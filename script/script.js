// Decides her name
nameNum = 0;
pseudonym = "";

const decideName = () => {
    nameNum = rando(5);
    if (nameNum === 0) {
        pseudonym = "Lana";
        document.getElementById("name").innerHTML = pseudonym;
    } else if (nameNum === 1) {
        pseudonym = "Gemma";
        document.getElementById("name").innerHTML = pseudonym;
    } else if (nameNum === 2) {
        pseudonym = "Jean";
        document.getElementById("name").innerHTML = pseudonym;
    } else if (nameNum === 3) {
        pseudonym = "Sarah";
        document.getElementById("name").innerHTML = pseudonym;
    } else if (nameNum === 4) {
        pseudonym = "Bella";
        document.getElementById("name").innerHTML = pseudonym;
    } else if (nameNum === 5) {
        pseudonym = "Klara";
        document.getElementById("name").innerHTML = pseudonym;
    } else {
        console.log("invalid nameNum")
    }
}

decideName();


// Decides her height 
heightNum = 0;
height = "";

const decideHeight = () => {
    heightNum = rando(2);
    if (heightNum === 0) {
        height = "short";
        document.getElementById("height").innerHTML = "a " + height;
    } else if (heightNum === 1) {
        height = "tall";
        document.getElementById("height").innerHTML = "a " + height;
    } else if (heightNum === 2) {
        height = "medium height"
        document.getElementById("height").innerHTML = "a " + height;
    } else {
        console.log("invalid heightNum")
    }
}

decideHeight();

// Decides her body type
bodyNum = 0;
body = "";

const decideBodyType = () => {
    bodyNum = rando(3);
    if (bodyNum === 0) {
        body = "fat";
        document.getElementById("body-type").innerHTML = body;
    } else if (bodyNum === 1) {
        body = "chubby";
        document.getElementById("body-type").innerHTML = body;
    } else if (bodyNum === 2) {
        body = "thin";
        document.getElementById("body-type").innerHTML = body;
    } else if (bodyNum === 3) {
        body = "athletic";
        document.getElementById("body-type").innerHTML = body;
    } else {
        console.log("invalid bodyNum");
    }
}

decideBodyType();

// Decides her hair color
hairColorNum = 0;
hairColor = "";

const decideHairColor = () => {
    hairColorNum = rando(7);
    if (hairColorNum === 0) {
        hairColor = "blonde";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 1) {
        hairColor = "brown";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 2) {
        hairColor = "auburn";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 3) {
        hairColor = "red";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 4) {
        hairColor = "dirty blonde";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 5) {
        hairColor = "black";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 6) {
        hairColor = "platinum blonde";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 7) {
        hairColor = "dark red";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else {
        console.log("invalid hairColorNum");
    }
}

decideHairColor();

// Decides her hair style
hairStyleNum = 0;
hairStyle = "";

const decideHairStyle = () => {
    hairStyleNum = rando(5);
    if (hairStyleNum === 0) {
        hairStyle = "bob";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle + " haircut";
    } else if (hairStyleNum === 1) {
        hairStyle = "straight";
        document.getElementById("hair-style").innerHTML = "a" + hairStyle + " haircut";
    } else if (hairStyleNum === 2) {
        hairStyle = "messy";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle + " haircut";
    } else if (hairStyleNum === 3) {
        hairStyle = "big 80's-style";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle;
    } else if (hairStyleNum === 4) {
        hairStyle = "ponytail";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle + " haircut";
    } else if (hairStyleNum === 5) {
        hairStyle = "short, simple";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle + " haircut";
    } else {
        console.log("invalid hairStyleNum");
    }
}

decideHairStyle();

// Decides how she dresses
clothesNum = 0;
clothes = "";

const decideClothesAdj = () => {
    clothesNum = rando(8);
    if (clothesNum === 0) {
        clothes = "goth";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 1) {
        clothes = "pastel";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 2) {
        clothes = "ragged";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 3) {
        clothes = "ancient looking";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 4) {
        clothes = "overly casual";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 5) {
        clothes = "cute 'n feminine";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 6) {
        clothes = "trendy";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 7) {
        clothes = "sparkly";
        document.getElementById("clothes").innerHTML = clothes;
    } else if (clothesNum === 8) {
        clothes = "fruit-themed";
        document.getElementById("clothes").innerHTML = clothes;
    } else {
        console.log("invalid clothesNum");
    }
}

decideClothesAdj();

// Decides her unique trait
uniqueNum = 0;
unique = "";

const decideUnique = () => {
    uniqueNum = rando(5);
    if (uniqueNum === 0) {
        unique = "scar";
        document.getElementById("unique").innerHTML = "a unique " + unique;
    } else if (uniqueNum === 1) {
        unique = "handbag";
        document.getElementById("unique").innerHTML = "a unique " + unique;
    } else if (uniqueNum === 2) {
        unique = "birthmark";
        document.getElementById("unique").innerHTML = "a unique " + unique;
    } else if (uniqueNum === 2) {
        unique = "eyes";
        document.getElementById("unique").innerHTML = "unique " + unique;
    } else if (uniqueNum === 3) {
        unique = "glasses";
        document.getElementById("unique").innerHTML = "unique " + unique;
    } else if (uniqueNum === 4) {
        unique = "walking stick";
        document.getElementById("unique").innerHTML = "a unique " + unique;
    } else if (uniqueNum === 5) {
        unique = "pin/badge";
        document.getElementById("unique").innerHTML = "a unique " + unique;
    } else {
        console.log("invalid uniqueNum");
    }
}

decideUnique();

// Decides interest one
interestOneNum = 0;
interestOne = "";

const decideInterestOne = () => {
    interestOneNum = rando(6);
    if (interestOneNum === 0) {
        interestOne = "Greek Mythology";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else if (interestOneNum === 1) {
        interestOne = "Plants";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else if (interestOneNum === 2) {
        interestOne = "Bugs";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else if (interestOneNum === 3) {
        interestOne = "Classic Literature";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else if (interestOneNum === 4) {
        interestOne = "Cartoons";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else if (interestOneNum === 5) {
        interestOne = "History";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else if (interestOneNum === 6) {
        interestOne = "Sci-Fi Novels";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else if (interestOneNum === 7) {
        interestOne = "Fantasy Literature";
        document.getElementById("interest-1").innerHTML = interestOne;
    } else {
        console.log("invalid interestOneNum");
    }
}

decideInterestOne();

// Decides interest two
interestTwoNum = 0;
interestTwo = "";

const decideInterestTwo = () => {
    interestTwoNum = rando(6);
    if (interestTwoNum === 0) {
        interestTwo = "Nintendo Games";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else if (interestTwoNum === 1) {
        interestTwo = "First Person Shooter Games";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else if (interestTwoNum === 2) {
        interestTwo = "Chemistry";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else if (interestTwoNum === 3) {
        interestTwo = "Biology";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else if (interestTwoNum === 4) {
        interestTwo = "Technology";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else if (interestTwoNum === 5) {
        interestTwo = "Politics";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else if (interestTwoNum === 6) {
        interestTwo = "RPG Video Games";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else if (interestTwoNum === 7) {
        interestTwo = "Animals";
        document.getElementById("interest-2").innerHTML = interestTwo;
    } else {
        console.log("invalid interestTwoNum");
    }
}

decideInterestTwo();

// Decides her hobby
hobbyNum = 0;
hobby = "";

const decideHobby = () => {
    hobbyNum = rando(8);
    if (hobbyNum === 0) {
        hobby = "Sewing";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 1) {
        hobby = "Board Games";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 2) {
        hobby = "Game Design";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 3) {
        hobby = "Hunting";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 4) {
        hobby = "Camping";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 5) {
        hobby = "Art";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 6) {
        hobby = "Programming";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 7) {
        hobby = "Dice Making";
        document.getElementById("hobby").innerHTML = hobby;
    } else if (hobbyNum === 8) {
        hobby = "Crocheting";
        document.getElementById("hobby").innerHTML = hobby;
    } else {
        console.log("invalid hobbyNum");
    }
}

decideHobby();

// decides fun fact
funFactNum = 0;
funFact = "";

const decideFunFact = () => {
    funFactNum = rando(8);
    if (funFactNum === 0) {
        funFact = "Once wrestled a bear and narrowly survived";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 1) {
        funFact = "Has won over 30 local poetry contests and over 50 digital art contests";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 2) {
        funFact = "Recently got out of a bad relationship";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 3) {
        funFact = "Has played every game in a long running series";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 4) {
        funFact = "Owns too many stuffed animals";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 5) {
        funFact = "Still has cable TV and still watches new Simpsons episodes"
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 6) {
        funFact = "Exercises way more than all her friends and struggles to find workout buddies that can keep up";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 7) {
        funFact = "Has an embarrassing birth mark on her face that she covers up with lots of makeup";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else if (funFactNum === 8) {
        funFact = "Knows how to play piano but mysteriously never does";
        document.getElementById("fun-fact").innerHTML = funFact;
    } else {
        console.log("invalid funFactNum");
    }
}

decideFunFact();

// Decides personality trait one
traitOneNum = 0;
traitOne = "";

// Decides personality trait two
traitTwoNum = 0;
traitTwo = "";

const decidePersonality = () => {
    traitOneNum = rando(5);
    traitTwoNum = rando(5);
    // Assigns trait two
    if (traitOneNum === 0) {
        traitOne = "Adventurous";
        document.getElementById("trait-one").innerHTML = traitOne;
    } else if (traitOneNum === 1) {
        traitOne = "Anxious";
        document.getElementById("trait-one").innerHTML = traitOne;
    } else if (traitOneNum === 2) {
        traitOne = "Creative";
        document.getElementById("trait-one").innerHTML = traitOne;
    } else if (traitOneNum === 3) {
        traitOne = "Dorky";
        document.getElementById("trait-one").innerHTML = traitOne;
    } else if (traitOneNum === 4) {
        traitOne = "Energetic";
        document.getElementById("trait-one").innerHTML = traitOne;
    } else if (traitOneNum = 5) {
        traitOne = "Wise";
        document.getElementById("trait-one").innerHTML = traitOne;
    } else {
        console.log("invalid traitOneNum");
    }
    // Assigns trait two
    if (traitTwoNum === 0) {
        traitTwo = "Reckless";
        document.getElementById("trait-two").innerHTML = traitTwo;
    } else if (traitTwoNum === 1) {
        traitTwo = "Shy";
        document.getElementById("trait-two").innerHTML = traitTwo;
    } else if (traitTwoNum === 2) {
        traitTwo = "Outgoing";
        document.getElementById("trait-two").innerHTML = traitTwo;
    } else if (traitTwoNum === 3) {
        traitTwo = "Clumsy";
        document.getElementById("trait-two").innerHTML = traitTwo;
    } else if (traitTwoNum === 4) {
        traitTwo = "Busy";
        document.getElementById("trait-two").innerHTML = traitTwo;
    } else if (traitTwoNum === 5) {
        traitTwo = "Hard-Working";
        document.getElementById("trait-two").innerHTML = traitTwo;
    } else {
        console.log("invalid traitTwoNum");
    }
}

decidePersonality();