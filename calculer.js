// Fonction pour effectuer les calculs
function calculer(operation, num1, num2) {
    let resultat;
    switch (operation) {
        case '+':
            resultat = num1 + num2;
            console.log(`Le résultat de l'addition est : ${resultat}`);
            break;
        case '-':
            resultat = num1 - num2;
            console.log(`Le résultat de la soustraction est : ${resultat}`);
            break;
        case '*':
            resultat = num1 * num2;
            console.log(`Le résultat de la multiplication est : ${resultat}`);
            break;
        case '/':
            if (num2 === 0) {
                console.log("Erreur : Division par zéro non autorisée.");
                return;
            }
            resultat = num1 / num2;
            console.log(`Le résultat de la division est : ${resultat}`);
            break;
        default:
            console.log("Opération non valide. Veuillez choisir parmi +, -, *, /.");
            return;
    }
}

module.exports = { calculer };
