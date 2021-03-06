# Star Wars : projet de visualisations de données

![alt text](https://github.com/OddOneOut1337/Data-Visualization-D3-Master-Project/blob/master/solo-tryptich-Final-reg.jpg)
Image trouvée sur : [https://bottleneckgallery.com/products/mark-englert-she-s-got-it-where-it-counts](https://bottleneckgallery.com/products/mark-englert-she-s-got-it-where-it-counts)

## Description
Cette visualisation interactive a pour but de montrer et de comparer différentes caractéristiques appartenant aux vaisseaux issus des films de la première trilogie:
- LUCAS, George, *Star Wars : Episode IV - A New Hope*, Lucasfilm, 1977.
- LUCAS, George, *Star Wars : Episode V - The Empire Strikes Back*, Lucasfilm, 1980.
- LUCAS, George, *Star Wars : Episode VI - Return of the Jedi*, Lucasfilm, 1983.

Le but de ce travail est de présenter différentes approches pour comparer ées vaisseaux de Star Wars il peut être utilisé comme base de donnée pour les jeux de rôle.

## Données
Nos données ont été tirées de la Star Wars A.P.I. ([SWAPI](https://swapi.co/)) puis converties en document JSON locaux. Nous avons arrangé les ressources pour uniquement garder ce dont nous avions besoin.

Nous nous sommes également inspirés des données proposées par le site de fans [Star Wars Wiki](http://starwars.wikia.com/wiki/Main_Page) qui nous a fourni certaines données sur les batailles.

## Prcédure de lancement
Pour lancer le script, il y a une procédure de lancement différente selon l'OS

### Sur Windows
Il faut avoir installé [Python](https://www.python.org/). 
Il faut ensuite ouvrir l'invite de commandes et y écrire "python -m http.server".
Normalement, vous devriez recevoir un message qui confirme l'ouverture de votre serveur local : "Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ..."
Passer par cette étape permet de lire les données présentes sur le document JSON.
Il suffit ensuite d'ouvrir une page web en double-cliquant sur le fichier HTML.

### Sur Mac
Il suffit de lancer le script via le fichier HTML.

## Interface
Notre page se divise en quatre sections:
- La première section propose un schéma avec des cercles dont tout est modulable. Pour la faire apparaître, il suffit de cliquer sur le bouton "show". 
Le visiteur peut ensuite choisir la donnée qu'il souhaite entrer pour chaque axe, le rayon du cercle et la couleur. 
Des cercles se disposeront comme voulu avec les noms des vaisseaux en rouge pour l'Empire et en bleu pour l'Alliance rebelle.

- La deuxième partie permet de comparer deux vaisseax entre eux. Le visiteur peut choisir le vaisseau dans la liste et le comparer à un autre.

- La troisième partie permet de comparer tous les vaisseaux entre eux en choisissant la donnée voulue depuis le menu déroulant. Un petit bug persiste, le premier résultat du tooltip est marqué "undefined", mais lorsqu'il y a changement de données, les valeurs sont ensuite mises au bon endroit, à la place d'undefined.

- La quatrième partie montre une estimation des pertes en véhicule par bataille.

## Historique
Lors des premières ébauches de projet, nous n'avions pas différencié les grands vaisseaux des petits ce qui a eu pour conséquence de nous créer des visualisations trop planes à cause de valeurs extrêmes de certains vaisseaux.
Par exemple, les valeurs de l'Étoile Noire dépassaient de plusieurs centaines de milliers les autres valeurs et écrasaient le tout.

Au début de notre travail, nous avions cherché à rendre visible une partie des données concernant les vaisseaux apparaissant dans la première trilogie dans une même visualisation (Première section). 
Nous nous sommes aperçus que cela formait une trop grosse agglomération de données visuellement peu parlantes. Dès lors, nous nous sommes orientés dans des graphiques plus simples (Sections trois et quatre), permettant d'obtenir un résultat que nous trouvions plus convainquant.
Suite à un entretien avec notre superviseur, il a été décidé que le projet prendrait une tournure plus rôlistique avec la section deux qui permet de comparer rapidement les valeurs de deux vaisseaux.

## Auteurs
Travail réalisé par Daniel Escoval & David Renaud dans le cadre du cours "Visualisation de données" de l'Université de Lausanne (UNIL), sous la supervision d'Isaac Pante.
