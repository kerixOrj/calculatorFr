# Calculatrice Node.js

## Description

Ce projet est une calculatrice interactive basée sur Node.js. Elle permet d'effectuer des opérations mathématiques de base :

- Addition (`+`)
- Soustraction (`-`)
- Multiplication (`*`)
- Division (`/`)

L'application fonctionne en ligne de commande et guide l'utilisateur pour entrer les nombres et l'opération souhaitée.

---

## Fonctionnalités

- Saisie interactive des nombres et de l'opération.
- Messages d'erreur clairs (exemple : division par zéro, entrée invalide).
- Possibilité d'enchaîner plusieurs calculs sans redémarrer l'application.

---

## Structure du projet

Voici les fichiers principaux :

- **index.js** : Le point d'entrée de l'application, responsable de l'interaction avec l'utilisateur.
- **calculer.js** : Contient la fonction de calcul séparée pour les opérations mathématiques.

---

## Installation

1. Assurez-vous que Node.js est installé sur votre machine.

   ```bash
   node -v
   npm -v
   ```

2. Clonez ou téléchargez ce projet dans un répertoire local.

   ```bash
   git clone https://github.com/kerixOrj/calculatorFr
   cd calculatorFr
   ```

3. Initialisez le projet (facultatif) :

   ```bash
   npm init -y
   ```

---

## Utilisation

1. Lancez l'application avec la commande suivante :

   ```bash
   node index.js
   ```

2. Suivez les instructions affichées dans le terminal :

   - Entrez le premier nombre.
   - Entrez le deuxième nombre.
   - Choisissez une opération (`+`, `-`, `*`, `/`).

3. Le résultat sera affiché à l'écran avec un message clair.

4. Vous pouvez continuer ou quitter l'application selon vos besoins.

---

## Exemple d'exécution

```text
Entrez le premier nombre : 10
Entrez le deuxième nombre : 5
Choisissez une opération (+, -, *, /) : *
Le résultat de la multiplication est : 50
Voulez-vous effectuer un autre calcul ? (oui/non) : non
Merci d'avoir utilisé la calculatrice. À bientôt !
```

---

## Améliorations possibles

- Ajouter d'autres opérations mathématiques (exponentiation, racine carrée, etc.).
- Intégrer une interface utilisateur web (avec Express.js).
- Enregistrer les résultats dans un fichier ou une base de données.

---

## Auteur

Créé par ORAIJE AYOUB .









