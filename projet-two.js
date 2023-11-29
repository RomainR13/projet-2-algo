const prompt = require("prompt-sync")();

let result = 0;

let questionOne = {
    question: "En 1945 un groupe clandestin de combattants juifs fut fondé pour punir les criminels de guerre nazis. Quel était leur nom ? ",
    response: ["1) Les Avengers.", "2) La Justice League.", "3) Les Inglorious Basterds.", "4) Les Rabbins des Bois."],
}
questionOne.goodAnswer = questionOne.response[2]

let questionTwo = {
    question: "Quel métier Bernard Tapis n'a-t-il pas fait ? ",
    response: ["1) Chanteur.", "2) Animateur télé.", "3) Vendeur de télé.", "4) Jongleur."],
}
questionTwo.goodAnswer = questionTwo.response[3]

let questionThree = {
    question: "Pourquoi Superman porte-t-il son slip sur son pantalon ? ",
    response: ["1) Pour le salir moins vite.", "2) Parce que personne n'ose lui faire la remarque.", "3) Parce que c'est super dur de se changer dans une cabine téléphonique.", "4) Il n'y a aucune explication officielle a cette question."],
}
questionThree.goodAnswer = questionThree.response[3]

let questionFour = {
    question: "Parmi ces 4 voitures, laquelle a vraiment existé ? ",
    response: ["1) La Skoda « Tapina ».", "2) La Nissan « Gigolo ».", "3) La Mazda « Laputa ».", "4) La Fiat « 500 l'amour et 200 la pipe »."],
}
questionFour.goodAnswer = questionFour.response[2]


let questArr = [questionOne, questionTwo, questionThree, questionFour];
let choice;

function sleep() {
    return new Promise(resolve => {
        setTimeout(resolve, 1500);
    });
}


async function main() {
    console.log("Bienvenue dans le Burger Quizz ! ");
    await sleep()
    console.log("Choississez une réponse de 1 a 4 ! ");
    await sleep()
    for (let i = 0; i < questArr.length; i++) {
        console.log(questArr[i].question);
        await sleep()
        for (let j = 0; j < questArr[i].response.length; j++) {
            console.log(questArr[i].response[j]);
        }
        await sleep()
       choice = prompt('votre reponse ? ')

        while (choice < 1 && choice > 4) {
            choice = prompt("Entrez un nombre de 1 a 4 ! ")
        }
        await sleep()
        if (questArr[i].response[choice - 1] === questArr[i].goodAnswer) {
          
            result++
            console.log("gagné ! ");
            console.log("+-----+\n\
|     |\n\
|  +1 |\n\
|     |\n\
+-----+\n\
");
        } else {
            console.log("perdu ! ");
            console.log("⠀⠀⠀⠀⠁⠀⠀⠀⣠⣿⡿⣫⡽⠶⠶⠯⣏⠻⡿⡄\n\
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣯⢷⠃⢄⢂⠰⡀⠌⣧⢻⣿\n\
⠀⠀⠀⠀⠀⠀⠀⠀⣯⣟⣿⡀⢂⠌⡐⢠⢘⣼⣿⡿\n\
⠀⠀⠀⠀⠀⠀⠀⠀⣧⡿⡄⠿⣧⣄⣤⣤⠿⢃⣟⡇\n\
⠀⠀⠀⠀⠀⠀⠀⠀⣷⣿⡇⡱⢂⠲⣐⢢⡑⣊⣿⡷\n\
⠀⠀⠀⠀⠀⠀⠀⠀⢻⣾⡧⣁⠏⠦⡑⢆⡒⣡⣿⣿\n\
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣹⣷⠠⣋⠒⣍⠒⡬⢸⣿⡧\n\
⠀⠀⠀⠀⢀⣠⣤⣤⢼⣿⣿⠰⡡⢋⠤⣋⠔⣹⣿⠷⣾⣶⠦⣄\n\
⠀⠀⢀⣴⡿⢛⠩⣉⠛⡛⣿⠰⢡⢋⠦⣑⠪⠔⣿⠋⡔⢢⠍⡛⣿⣄⣀⡀\n\
⠀⠀⣾⣽⡇⢎⡱⢌⡱⢂⢿⡇⡱⢊⠴⡡⢃⢾⣏⠜⣌⠣⡜⢰⢹⡿⢓⠛⠹⠦\n\
⠀⠀⣿⣟⡇⡜⡡⢎⡱⡘⢼⣇⢃⠞⣠⢃⠞⣸⡟⢤⢙⢢⡑⠎⣼⡇⡜⡰⢂⠄\n\
⠀⢈⣷⣿⡇⡘⢥⢢⠱⡘⢼⣯⠌⡚⠔⣊⠖⣸⡟⢤⡉⢦⡘⠥⣺⡇⢜⡡⢎⠂\n\
⣿⣿⡿⣿⡇⡱⢊⢆⠣⢍⡜⣿⠰⣉⠞⠤⡓⣸⡟⠤⣉⠦⣑⢊⣽⡇⢪⠔⡩⢆\n\
⣿⡿⣽⢷⣧⢡⢃⠎⡜⢢⠜⣿⠰⡡⢎⡱⢢⢹⡏⡒⢥⠚⣄⠣⢾⡇⣑⢪⢑⠢\n\
⣿⣽⢯⡿⣿⢠⠋⡜⢌⠣⠜⣩⠒⡱⢌⡒⠥⢚⡡⡙⠤⠓⡌⠥⢻⡑⠌⢦⡉⠖\n\
⢿⣾⣻⣽⢿⣆⠭⡘⡌⢣⣉⡶⠩⡔⢣⢌⢃⠧⡰⣉⢎⡱⢌⡓⣂⢿⢘⢢⠩⠜\n\
⠀⠙⣯⢫⣿⣿⢰⠑⡌⢣⡌⣷⠑⡌⢣⠘⡌⠒⣷⠈⢲⠘⡆⡜⢰⠊⡌⣦⡟⣾\n\
⠀⠀⠉⢧⢿⡾⣿⣶⣭⣶⣌⣆⠱⣉⠎⡥⡙⠴⣁⢋⢆⠳⢨⡑⠥⣪⡽⣟⣻⠟\n\
⠀⠀⠀⠈⠳⢿⣓⣿⣯⢿⡽⣿⣷⣆⠚⡤⢙⢢⣑⣮⣴⣿⢶⡾⣟⡯⣿⠏⠁\n\
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣙⠿⣟⣾⣿⣿⠿⣿⡿⢿⣛⡿⢿⢭⠟⠚⣋⠁\n")
        }
    }


    console.log(`Vous avez un score de ${result}/4`);
}
main()

