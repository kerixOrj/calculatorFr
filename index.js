// Importation des modules nécessaires
const readline = require('readline');
const { calculer } = require('./calculer');

// Configuration de l'interface readline pour interagir avec l'utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction principale pour gérer l'interaction utilisateur
function demarrerCalculatrice() {
    rl.question('Entrez le premier nombre : ', (reponse1) => {
        const num1 = parseFloat(reponse1);
        if (isNaN(num1)) {
            console.log("Erreur : Vous devez entrer un nombre valide.");
            return demarrerCalculatrice();
        }

        rl.question('Entrez le deuxième nombre : ', (reponse2) => {
            const num2 = parseFloat(reponse2);
            if (isNaN(num2)) {
                console.log("Erreur : Vous devez entrer un nombre valide.");
                return demarrerCalculatrice();
            }

            rl.question('Choisissez une opération (+, -, *, /) : ', (operation) => {
                calculer(operation, num1, num2);
                rl.question('Voulez-vous effectuer un autre calcul ? (oui/non) : ', (reponse) => {
                    if (reponse.toLowerCase() === 'oui') {
                        demarrerCalculatrice();
                    } else {
                        console.log("Merci d'avoir utilisé la calculatrice. À bientôt !");
                        rl.close();
                    }
                });
            });
        });
    });
}

// Lancement de la calculatrice
demarrerCalculatrice();