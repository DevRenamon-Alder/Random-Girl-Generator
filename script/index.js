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
        hairStyle = "long, straight, with hime bangs";
        document.getElementById("hair-style").innerHTML = "a long, straight haircut with hime bangs";
    } else if (hairStyleNum === 2) {
        hairStyle = "messy bedhead";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle + " haircut";
    } else if (hairStyleNum === 3) {
        hairStyle = "buzzcut";
        document.getElementById("hair-style").innerHTML = "a " + hairStyle;
    } else if (hairStyleNum === 4) {
        hairStyle = "spiky";
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

// Decides her face trait
faceNum = 0;
face = "";

const decideFaceTrait = () => {
    faceNum = rando(5);
    if (faceNum === 0) {
        face = "mean";
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