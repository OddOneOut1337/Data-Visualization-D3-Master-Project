## Star Wars : projet de visualisations de données
### Description
Cette visualisation interactive a pour but de montrer et de comparer différentes caractéristiques appartenant aux vaisseaux issus des films de la première trilogie:
- LUCAS, George, *Star Wars : Episode IV - A New Hope*, Lucasfilm, 1977.
- LUCAS, George, *Star Wars : Episode V - The Empire Strikes Back*, Lucasfilm, 1980.
- LUCAS, George, *Star Wars : Episode VI - Return of the Jedi*, Lucasfilm, 1983.

Le but de ce travail est de présenter différentes approches pour comparer ées vaisseaux de Star Wars il peut être utilisé comme base de donnée pour les jeux de rôle.

### Données
Nos données ont été tirées de la Star Wars A.P.I. ([SWAPI](https://swapi.co/)) puis converties en document JSON locaux. Nous avons arrangé les ressources pour ne garder uniquement ce dont nous avions besoin.

Nous nous sommes également inspirés des données prpoposées par le site de fans [Star Wars Wiki](http://starwars.wikia.com/wiki/Main_Page) qui nous a fourni certaines données sur les batailles.

### Interface
Notre page se divise en quatre sections:
- La première section propose un schéma avec des cercles dont tout est modulable. Pour la faire apparaître, il suffit de cliquer sur le bouton "show". Le visiteur peut ensuite choisir la donnée qu'il souhaite entrer pour chaque axe, le rayon du cercle et la couleur. Des cercles se disposeront comme voulu avec les noms des vaisseaux en rouge pour l'Empire et en bleu pour l'Alliance rebelle.

- La deuxième partie permet de comparer deux vaisseax entre eux. Le visiteur peut choisir le vaisseau dans la liste et le comaprer à un autre.

- La troisième partie permet de comparer tous les vaisseaux entre eux en choisissant la donnée voulue ddepuis le menu déroulant.

- La quatrième partie montre une estimation des pertes en véhicule par bataille.

### Historique
Lors des premières ébauches de projet, nous n'avions pas différencié les grands vaisseaux des petits ce qui a eu pour conséquence de nous créer des visualisations trop planes à cause de valeurs extrêmes de certains vaisseaux.
Par exemple, les valeurs de l'Étoile Noire dépassaient de plusieurs centaines de milliers les autres valeurs et écrasait le tout.
Au début de notre travail, nous avions cherché à rendre visible une partie des données concernant les vaisseaux apparaissant dans la première trilogie dans une même visualisation (Première section). Nous nous sommes aperçus que cela formait une trop grosse agglomération de données visuellement peu parlantes. Dès lors, nous nous sommes orientés dans des graphiques plus simples (Sections trois et quatre), permettant d'obtenir un résultat que nous trouvions plus convainquant.
Suite à un entretien avec notre superviseur, il a été décidé que le projet prendrait une tournure plus rôlistique avec la section deux qui permet de comparer rapidement les valeurs de deux vaisseaux.

### Auteurs
Travail réalisé par Daniel Escoval & David Renaud dans le cadre du cours "Visualisation de données" de l'Université de Lausanne (UNIL), sous la supervision d'Isaac Pante.
