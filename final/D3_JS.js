// Appel des données
d3.json("allDataClean.json", data =>{
  // Création d'une variable qui est composée de tous les éléments de notre base de données '
  let elements = Object.keys(data[0])
                .filter(function(d){
                  // Je retire juste le name et affiliation pour garder uniquement les données numériques
                    return ((d != "name") && (d != "affiliation"));
                });
  let selection = elements[0];
  // console.log(selection)

  // Création des marges
  // const width = 1000;
  // const height = 1000;
  // const padding = 200;
  // const barPadding = 1;

  // let plop_width = document.getElementById("plop").offsetWidth

  // const width_dognut = plop_width*2;
  const width = window.innerWidth-30
  const height =  500
  const padding = 100
  const barPadding = 1

  // Création du svg
  let svg = d3.select("#graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height)


// Pour que tout soit mis à l'échelle sur l'axe y
    let yScale = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d){
                        return +d[selection];
                    })])
                    .range([height-padding, padding])

// Pour que tout soit mis à l'échelle sur l'axe x
    let xScale = d3.scaleBand()
                    .domain(0, d3.range(data.length))
                    .range([padding, width]) // Il y aura peut-être qqch à faire par ici

// Variables pour les axes
let axeX = d3.axisBottom(xScale)
            .ticks(0)

let axeY = d3.axisLeft(yScale)
            .ticks(10)

// Création du tooltip
let tooltip = d3.select("body").append("div").attr("class", "toolTip")


// enter : nouveaux noeuds
// Création des barres
//le let doit être ici, sinon les transition ne fonctionnent pas
let barres = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d,i){
            return 2+(padding+(i*((width-padding)/data.length-barPadding)))+'px';
        })
        .attr("y", function(d){
            return -2+(yScale(+d[selection]))
        })
        .attr("width",((width-padding)/data.length-barPadding))
        .attr("height", 0)
        .attr("class", "bars")
        .on("mouseover", function(d){
          tooltip.style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              // Affiche un "undefined" lors du lancement de la page, mais disparaît lorsqu'on sélectionne qqch au dropdrown menu
              // .html((d.name) + "<br>" + d[selection])
              .html((d.name) + "<br>" + d[selection.value])
        })
        .attr("fill", function(d){
              if(d.affiliation == "Galactic Empire"){
                return 'hsl(61, 59%, 24%)'
              }
              else {
                return 'hsl(61, 59%, 33%)'
              }
            })
        .on("mouseout", function(d){
          tooltip.style("display", "none")
        })

// Ajout d'animation sur les barres
        barres.transition()
        .duration(10)
        .attr("height", function(d){
            return (height-yScale(+d[selection]))-padding;
        })
        // .html((d.name) + "<br>" + d[selection.value])



// Création des labels
// Variable pour les textes
let labels = svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(function(d){
            return d.name
        })
        .attr("x", function(d,i){
            return padding+(i*((width-padding)/data.length-barPadding)+(width/data.length-barPadding)/2);
        })
        .attr("y", function(d){
            return 3 + (height - (padding-5));
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "0px")
        .attr("fill", '#c7bca8')
        .attr("text-anchor", "start")
        .attr("writing-mode","tb-rl")

labels.transition()
        .duration(10)
        .attr("font-size", "10px")


// Création des axes
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0,"+(height-padding)+")")
        .call(axeX)

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+padding+",0)")
        .call(axeY)

// update : modification des noeuds

// Création du sélecteur
let selector = d3.select("#drop")
  .append("select")
  .attr("id", "dropdown")
  .on("change", function(d){
      selection = document.getElementById("dropdown");

      yScale.domain([0, d3.max(data, function(d){
          return +d[selection.value];
      })]);

      axeY.scale(yScale);

      d3.selectAll(".bars")
          .transition()
        .attr("height", function(d){
              return (height-yScale(+d[selection.value]))-padding;
        })
        .attr("y", function(d){
              return yScale(+d[selection.value]);
        })

        d3.selectAll("g.y.axis")
            .transition()
            .call(axeY);
  })

// Menu déroulant
selector.selectAll("option")
  .data(elements)
  .enter()
  .append("option")
  .attr("value", function(d){
    return d;
  })
  .text(function(d){
    return d;
  })
});


//data bataille Endor
let dataEndor = [
    {nom: "MC80 star cruisers", value: 2, affiliation : "Rebel Alliance" },
    {nom: "CR90 corvettes", value: 5, affiliation : "Rebel Alliance" },
    {nom: "EF76 Nebulon-B escort frigates", value: 2, affiliation : "Rebel Alliance"},
    {nom: "GR-75 medium transports", value: 3, affiliation : "Rebel Alliance"},
    {nom: "Death Star II", value: 1, affiliation : "Galactic Empire"},
    {nom: "Executor-class Star Dreadnought", value: 1, affiliation :"Galactic Empire"},
    {nom: "Battlecruiser", value: 1, affiliation : "Galactic Empire"},
    {nom: "Star Destroyers", value: 3, affiliation : "Galactic Empire"},
    {nom: "AT-ST", value: 5, affiliation : "Galactic Empire"},
          ];
// console.log(dataEndor)

//data bataille Hot
let dataHot = [
  {nom: "GR-75", value: 17, affiliation : "Rebel Alliance" },
  {nom: "Kleeque-class", value: 6, affiliation : "Rebel Alliance" },
  {nom: "EF76 Nebulon-B escort frigates", value: 2, affiliation : "Rebel Alliance"},
  {nom: "GR-75 medium transports", value: 3, affiliation : "Rebel Alliance"},
  {nom: "Imperial-class Star Destroyer", value: 1, affiliation : "Galactic Empire"},
  {nom: "Imperial II-class Star Destroyer", value: 1, affiliation : "Galactic Empire"},
  {nom: "Imperial I-class Star Destroyer", value: 1, affiliation : "Galactic Empire"},
  {nom: "AT-ARs", value: "Uknown", affiliation : "Galactic Empire"},
  {nom: "AT-PTs", value: "Uknown", affiliation : "Galactic Empire"},
  {nom: "AT-ATs", value: "Uknown", affiliation : "Galactic Empire"},
  {nom: "AT-STs", value: "Uknown", affiliation : "Galactic Empire"},
  {nom: "TIE Advanced x7 prototypes", value: 7 , affiliation : "Galactic Empire"},
        ];

// console.log(dataHot)

//data bataille Yavin 4
let dataYavin = [
  {nom: "X-wings", value: 20, affiliation : "Rebel Alliance" },
  {nom: "Y-wings", value: 7, affiliation : "Rebel Alliance" },
  {nom: "Death Star I", value: 1, affiliation : "Galactic Empire"},
  {nom: "TIE Fighters", value: 7, affiliation : "Galactic Empire"},
        ];

// console.log(dataYavin)
let width_div = document.getElementById("line_dognuts").offsetWidth

// Création d'une variable text vide pour laisser l'espace creux disponible pour le mouseover ?
let text = " ";

// création des consts
const width = width_div/4;
const height = 300;

// défini l'épaisseur du donut
const thickness = 40;
// défini le rayon du donut
const radius = Math.min(width, height) / 2;

// const de couleur et choix de catégorisation des couleurs (https://d3-wiki.readthedocs.io/zh_CN/master/Ordinal-Scales/)
const color = d3.scaleOrdinal(d3.schemeCategory20c);

//Donut Chart pour la bataille de Endor
// sélection div "donut chart" dans la page HTML
let svg_1 = d3.select("#chart_1")
            //création du svg
            .append('svg')
            //attribution d'une classe, d'une largeur et d'une hauteur
            .attr('class', 'pie')
            .attr('width', width)
            .attr('height', height);

let svg_2 = d3.select("#chart_2")
            //création du svg
            .append('svg')
            //attribution d'une classe, d'une largeur et d'une hauteur
            .attr('class', 'pie')
            .attr('width', width)
            .attr('height', height);

let svg_3 = d3.select("#chart_3")
            //création du svg
            .append('svg')
            //attribution d'une classe, d'une largeur et d'une hauteur
            .attr('class', 'pie')
            .attr('width', width)
            .attr('height', height);
//création de l'élément g dnas le svg
let g_1 = svg_1.append('g')
          .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

let g_2 = svg_2.append('g')
          .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

let g_3 = svg_3.append('g')
          .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
//variable arc
let arc = d3.arc()
          .innerRadius(radius - thickness)
          .outerRadius(radius);

//variable pie
// Première charte
let pie_1 = d3.pie()
            // défini sur quelle valeur le donut chart doit se construire
            .value(function(d) { return d.value; })
            //pas de trie
            .sort(null);
            //variable path
            let path_1 = g_1.selectAll('path')
            //sélection des données Endor
            .data(pie_1(dataEndor))
            .enter()
            .append("g")

            //création d'un mouseover pour afficher les données au sein du donut
            .on("mouseover", function(d) {
                  let g = d3.select(this)
                  // remplacer le curseur par le signe ?
                  // .style("cursor", "help")
                  //attribution d'une couleure
                  .style("fill", "#c7bca8")
                  .append("g")
                  .attr("class", "text-group");

                  //cération du texte central
                  g.append("text")
                    .attr("class", "name-text")
                    //sélection de la variable nom dans la variable data
                    .text(`${d.data.nom}`)
                    //défini l'emplacement du texte
                    .attr('text-anchor', 'middle')
                    .attr('dy', '-1.2em');
                    //création du chiffre central

                  g.append("text")
                    .attr("class", "value-text")
                    //sélection de la variable value dans la variable data
                    .text(`${d.data.value}`)
                    //défini l'emplacement du chiffre
                    .attr('text-anchor', 'middle')
                    .attr('dy', '.6em');
            })
        //création du mouseout
      .on("mouseout", function(d) {
          d3.select(this)
          //transforme le curseur help en curseur normale
            .style("cursor", "none")
          //replace la couleur originelle
            .style("fill", color(this._current))
            .select(".text-group").remove()
        })
      //création de la variavle path et appel des variables
      .append('path')
      .attr('d', arc)
      .attr('fill', (d,i) => color(i))
      .on("mouseover", function(d) {
          d3.select(this)
            .style("cursor", "default")
            .style("fill", "#c7bca8");
        })
      .on("mouseout", function(d) {
          d3.select(this)
            .style("cursor", "none")
            .style("fill", color(this._current));
        })
      .each(function(d, i) { this._current = i; });


g_1.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em')
  .text(text);


// Deuxième charte
//Bataille de Hot
let pie_2 = d3.pie()
              // défini sur quelle valeur le donut chart doit se construire
              .value(function(d) { return d.value; })
              //pas de trie
              .sort(null);
              //variable path
              let path_2 = g_2.selectAll('path')
              //sélection des données Endor
              .data(pie_2(dataHot))
              .enter()
              .append("g")

              //création d'un mouseover pour afficher les données au sein du donut
              .on("mouseover", function(d) {
                    let g = d3.select(this)
                    // remplacer le curseur par le signe ?
                    // .style("cursor", "help")
                    //attribution d'une couleure
                    .style("fill", "#c7bca8")
                    .append("g")
                    .attr("class", "text-group");

                    //cération du texte central
                    g.append("text")
                      .attr("class", "name-text")
                      //sélection de la variable nom dans la variable data
                      .text(`${d.data.nom}`)
                      //défini l'emplacement du texte
                      .attr('text-anchor', 'middle')
                      .attr('dy', '-1.2em');
                      //création du chiffre central

                    g.append("text")
                      .attr("class", "value-text")
                      //sélection de la variable value dans la variable data
                      .text(`${d.data.value}`)
                      //défini l'emplacement du chiffre
                      .attr('text-anchor', 'middle')
                      .attr('dy', '.6em');
              })
          //création du mouseout
        .on("mouseout", function(d) {
            d3.select(this)
            //transforme le curseur help en curseur normale
              .style("cursor", "none")
            //replace la couleur originelle
              .style("fill", color(this._current))
              .select(".text-group").remove()
          })
        //création de la variavle path et appel des variables
        .append('path')
        .attr('d', arc)
        .attr('fill', (d,i) => color(i))
        .on("mouseover", function(d) {
            d3.select(this)
              .style("cursor", "default")
              .style("fill", "#c7bca8");
          })
        .on("mouseout", function(d) {
            d3.select(this)
              .style("cursor", "none")
              .style("fill", color(this._current));
          })
        .each(function(d, i) { this._current = i; });


  g_2.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '.35em')
    .text(text);

  // Troisième charte
  // Bataille de Yavin IV
  let pie_3 = d3.pie()
              // défini sur quelle valeur le donut chart doit se construire
              .value(function(d) { return d.value; })
              //pas de trie
              .sort(null);
              //variable path
              let path_3 = g_3.selectAll('path')
              //sélection des données Endor
              .data(pie_3(dataYavin))
              .enter()
              .append("g")

              //création d'un mouseover pour afficher les données au sein du donut
              .on("mouseover", function(d) {
                    let g = d3.select(this)
                    // remplacer le curseur par le signe ?
                    // .style("cursor", "help")
                    //attribution d'une couleure
                    .style("fill", "red")
                    .append("g")
                    .attr("class", "text-group");

                    //cération du texte central
                    g.append("text")
                      .attr("class", "name-text")
                      //sélection de la variable nom dans la variable data
                      .text(`${d.data.nom}`)
                      //défini l'emplacement du texte
                      .attr('text-anchor', 'middle')
                      .attr('dy', '-1.2em');
                      //création du chiffre central

                    g.append("text")
                      .attr("class", "value-text")
                      //sélection de la variable value dans la variable data
                      .text(`${d.data.value}`)
                      //défini l'emplacement du chiffre
                      .attr('text-anchor', 'middle')
                      .attr('dy', '.6em');
              })
          //création du mouseout
        .on("mouseout", function(d) {
            d3.select(this)
            //transforme le curseur help en curseur normale
              .style("cursor", "none")
            //replace la couleur originelle
              .style("fill", color(this._current))
              .select(".text-group").remove()
          })
        //création de la variavle path et appel des variables
        .append('path')
        .attr('d', arc)
        .attr('fill', (d,i) => color(i))
        .on("mouseover", function(d) {
            d3.select(this)
              .style("cursor", "default")
              .style("fill", "red");
          })
        .on("mouseout", function(d) {
            d3.select(this)
              .style("cursor", "none")
              .style("fill", color(this._current));
          })
        .each(function(d, i) { this._current = i; });


  g_3.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '.35em')
    .text(text);
