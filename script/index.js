// Decides what animal she is
animalNum = 0;
animal = "";

// Decides whether skin, scales, or fur
skin = "";

const decideAnimal = () => {
    animalNum = rando(9);
    if (animalNum === 0) {
        animal = "scarab";
        document.getElementById("animal").innerHTML = "scarab";
        skin = "exoskeleton";
        document.getElementById("skin-type").innerHTML = "exoskeleton";
    } else if (animalNum === 1) {
        animal = "honey bee";
        document.getElementById("animal").innerHTML = "honey bee";
        skin = "fur";
        document.getElementById("skin-type").innerHTML = "fur";
    } else if (animalNum === 2) {
        animal = "house gecko";
        document.getElementById("animal").innerHTML = "house gecko";
        skin = "scales";
        document.getElementById("skin-type").innerHTML = "scales";
    } else if (animalNum === 3) {
        animal = "bobcat";
        document.getElementById("animal").innerHTML = "bobcat";
        skin = "fur";
        document.getElementById("skin-type").innerHTML = "fur";
    } else if (animalNum === 4) {
        animal = "lobster";
        document.getElementById("animal").innerHTML = "lobster";
        skin = "exoskeleton";
        document.getElementById("skin-type").innerHTML = "exoskeleton";
    } else if (animalNum === 5) {
        animal = "alpaca";
        document.getElementById("animal").innerHTML = "alpaca";
        skin = "fur";
        document.getElementById("skin-type").innerHTML = "fur";
    } else if (animalNum === 6) {
        animal = "catfish";
        document.getElementById("animal").innerHTML = "catfish";
        skin = "scales";
        document.getElementById("skin-type").innerHTML = "scales";
    } else if (animalNum === 7) {
        animal = "wyvern";
        document.getElementById("animal").innerHTML = "wyvern";
        skin = "scales";
        document.getElementById("skin-type").innerHTML = "scales";
    } else if (animalNum === 8) {
        animal = "hyena";
        document.getElementById("animal").innerHTML = "hyena";
        skin = "fur";
        document.getElementById("skin-type").innerHTML = "fur";
    } else if (animalNum === 9) {
        animal = "snail"
        document.getElementById("animal").innerHTML = "snail";
        skin = "skin";
        document.getElementById("skin-type").innerHTML = "skin";
    } else {
        console.log("Error, no number between 0 and 9 for animalNum");
    }
}

decideAnimal();

// Decides her height 
heightNum = 0;
height = "";

const decideHeight = () => {
    heightNum = rando(4);
    if (heightNum === 0) {
        height = "tiny";
        document.getElementById("height").innerHTML = "a " + height;
    } else if (heightNum === 1) {
        height = "short";
        document.getElementById("height").innerHTML = "a " + height;
    } else if (heightNum === 2) {
        height = "medium"
        document.getElementById("height").innerHTML = "a " + height;
    } else if (heightNum === 3) {
        height = "imposing";
        document.getElementById("height").innerHTML = "an " + height;
    } else if (heightNum === 4) {
        height = "tall";
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
    bodyNum = rando(4);
    if (bodyNum === 0) {
        body = "fat";
        document.getElementById("body-type").innerHTML = body;
    } else if (bodyNum === 1) {
        body = "sorta chubby";
        document.getElementById("body-type").innerHTML = body;
    } else if (bodyNum === 2) {
        body = "twig thin";
        document.getElementById("body-type").innerHTML = body;
    } else if (bodyNum === 3) {
        body = "toned";
        document.getElementById("body-type").innerHTML = body;
    } else if (bodyNum === 4) {
        body = "muscly";
        document.getElementById("body-type").innerHTML = body;
    } else {
        console.log("invalid bodyNum");
    }
}

decideBodyType();

// Decides skin color
skinColorNum = 0;
skinColor = "";

const decideSkinColor = () => {
    skinColorNum = rando(11);
    if (skinColorNum === 0) {
        skinColor = "pastel pink";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 1) {
        skinColor = "dingy brown";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 2) {
        skinColor = "teal";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 3) {
        skinColor = "burgundy";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 4) {
        skinColor = "pear green";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 5) {
        skinColor = "see-through";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 6) {
        skinColor = "vantablack";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 7) {
        skinColor = "bright red";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 8) {
        skinColor = "rust";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 9) {
        skinColor = "mustard";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 10) {
        skinColor = "blush pink";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else if (skinColorNum === 11) {
        skinColor = "plaid";
        document.getElementById("skin-color").innerHTML = skinColor;
    } else {
        console.log("invalid skinColorNum");
    }
}

decideSkinColor();

// Decides her hair color
hairColorNum = 0;
hairColor = "";

const decideHairColor = () => {
    hairColorNum = rando(7);
    if (hairColorNum === 0) {
        hairColor = "neon green";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 1) {
        hairColor = "pastel orange";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 2) {
        hairColor = "wormy beige";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 3) {
        hairColor = "magenta";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 4) {
        hairColor = "dull grey";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 5) {
        hairColor = "simply yellow";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 6) {
        hairColor = "sandy beige";
        document.getElementById("hair-color").innerHTML = hairColor;
    } else if (hairColorNum === 7) {
        hairColor = "verdant green";
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
        hairStyle = "long, straight, with hime bangs";
        document.getElementById("hair-style").innerHTML = "a long, straight haircut with hime bangs";
    } else if (hairStyleNum === 2) {
        hairStyle = "messy bedhead";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle + " haircut";
    } else if (hairStyleNum === 3) {
        hairStyle = "buzzcut";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle;
    } else if (hairStyleNum === 4) {
        hairStyle = "anime gokuesque";
        document.getElementById("hair-style").innerHTML = "an " + hairStyle + " haircut";
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
        clothes = "ancient";
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
        unique = "teeth";
        document.getElementById("unique").innerHTML = "unique " + unique;
    } else if (uniqueNum === 4) {
        unique = "walking stick";
        document.getElementById("unique").innerHTML = "a unique " + unique;
    } else if (uniqueNum === 5) {
        unique = "piercing/s";
        document.getElementById("unique").innerHTML = "a unique " + unique;
    } else {
        console.log("invalid uniqueNum");
    }
}

decideUnique();

// Decides her face trait
faceNum = 0;
face = "";

const decideFaceTrait = () => {
    faceNum = rando(5);
    if (faceNum === 0) {
        face = "bitchy";
        document.getElementById("face").innerHTML = face;
    } else if (faceNum === 1) {
        face = "coy";
        document.getElementById("face").innerHTML = face;
    } else if (faceNum === 2) {
        face = "innocent";
        document.getElementById("face").innerHTML = face;
    } else if (faceNum === 3) {
        face = "malicious";
        document.getElementById("face").innerHTML = face;
    } else if (faceNum === 4) {
        face = "especially regular";
        document.getElementById("face").innerHTML = face;
    } else if (faceNum === 5) {
        face = "pretty";
        document.getElementById("face").innerHTML = face;
    } else {
        console.log("invalid faceNum");
    }
}

decideFaceTrait();