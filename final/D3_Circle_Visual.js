//constantes
const w = 1000;
const h = 500;
const padding = 100;


//création du svg
const svg = d3.select("#graph_bonus")
    .append("svg")
    .attr("width", w)
    .attr("height", h)

//sélecteurs
let noSelectX = document.getElementById("noSelectX");
let noSelectY = document.getElementById("noSelectY");
let noSelectR = document.getElementById("noSelectR");
let noSelectC = document.getElementById("noSelectC");

// cout
let coutX = document.getElementById("coutX");
let coutY = document.getElementById("coutY");
let coutR = document.getElementById("coutR");
let coutC = document.getElementById("coutC");

// length
let lengthX = document.getElementById("lengthX");
let lengthY = document.getElementById("lengthY");
let lengthR = document.getElementById("lengthR");
let lengthC = document.getElementById("lengthC");

// vitesse en atmosphère
let atmoX = document.getElementById("atmoX");
let atmoY = document.getElementById("atmoY");
let atmoR = document.getElementById("atmoR");
let atmoC = document.getElementById("atmoC");

// équipage
let crewX = document.getElementById("crewX");
let crewY = document.getElementById("crewY");
let crewR = document.getElementById("crewR");
let crewC = document.getElementById("crewC");

// passagers
let passengersX = document.getElementById("passengersX");
let passengersY = document.getElementById("passengersY");
let passengersR = document.getElementById("passengersR");
let passengersC = document.getElementById("passengersC");

// cargaison
let cargoX = document.getElementById("cargoX")
let cargoY = document.getElementById("cargoY")
let cargoR = document.getElementById("cargoR")
let cargoC = document.getElementById("cargoC")

// vitesse lumière
let lumX = document.getElementById("lumX");
let lumY = document.getElementById("lumY");
let lumR = document.getElementById("lumR");
let lumC = document.getElementById("lumC");

// début de fonction
function graph_bonus(){
// appel de la base de données
d3.json("allDataClean.json", data => {


//scalling
let xScale = d3.scaleLinear()
                .domain([0, d3.max(data, function(d){
                    if(noSelectX.checked==true){
                        return padding;
                    } else if (coutX.checked==true) {
                    return +d.cost_in_credits;
                    } else if(lengthX.checked==true){
                        return +d.length;
                    } else if(atmoX.checked==true){
                        return +d.max_atmosphering_speed;
                    } else if(crewX.checked==true){
                        return +d.crew;
                    } else if(passengersX.checked==true){
                        return +d.passengers;
                    } else if(cargoX.checked==true){
                        return +d.cargo_capacity;
                    } else if(lumX.checked==true){
                        return +d.MGLT
                    } else {
                        console.log("probleme")
                    }
                })])
                .range([padding,w-padding])

let yScale = d3.scaleLinear()
                .domain([0, d3.max(data, function(d){
                    if(noSelectY.checked==true){
                        return padding;
                    } else if (coutY.checked==true) {
                    return +d.cost_in_credits;
                    } else if(lengthY.checked==true){
                        return +d.length;
                    } else if(atmoY.checked==true){
                        return +d.max_atmosphering_speed;
                    } else if(crewY.checked==true){
                        return +d.crew;
                    } else if(passengersY.checked==true){
                        return +d.passengers;
                    } else if(cargoY.checked==true){
                        return +d.cargo_capacity;
                    } else if(lumY.checked==true){
                        return +d.MGLT
                    } else {
                        console.log("probleme")
                    }
                })])
                .range([h-padding,padding])

let rScale = d3.scaleLinear()
                .domain([0, d3.max(data, function(d){
                    if(noSelectR.checked==true){
                        return padding;
                    } else if (coutR.checked==true) {
                    return +d.cost_in_credits;
                    } else if(lengthR.checked==true){
                        return +d.length;
                    } else if(atmoR.checked==true){
                        return +d.max_atmosphering_speed;
                    } else if(crewR.checked==true){
                        return +d.crew;
                    } else if(passengersR.checked==true){
                        return +d.passengers;
                    } else if(cargoR.checked==true){
                        return +d.cargo_capacity;
                    } else if(lumR.checked==true){
                        return +d.MGLT
                    } else {
                        console.log("probleme")
                    }
                })])
                .range([10,35])

let colorScale = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d){
                        if(noSelectC.checked==true){
                            return padding;
                        } else if (coutC.checked==true) {
                        return +d.cost_in_credits;
                        } else if(lengthC.checked==true){
                            return +d.length;
                        } else if(atmoC.checked==true){
                            return +d.max_atmosphering_speed;
                        } else if(crewC.checked==true){
                            return +d.crew;
                        } else if(passengersC.checked==true){
                            return +d.passengers;
                        } else if(cargoC.checked==true){
                            return +d.cargo_capacity;
                        } else if(lumC.checked==true){
                            return +d.MGLT
                        } else {
                            console.log("probleme")
                        }
                    })])
                    .range([50,200])


// variables
    let graphique = svg.selectAll("circle").data(data);
    let texte = svg.selectAll("text").data(data);
    let axeX = d3.axisBottom(xScale)
                    .ticks(5);

    let axeY = d3.axisLeft(yScale)
                    .ticks(5)

// fonctions pour plus de lisibilité
// axe X
let choixFonctionX = function choixRadioX(d){
    if(noSelectX.checked==true){
        return xScale(padding);
    } else if (coutX.checked==true) {
        return xScale(+d.cost_in_credits);
    } else if(lengthX.checked==true){
        return xScale(+d.length);
    } else if(atmoX.checked==true){
        return xScale(+d.max_atmosphering_speed);
    } else if(crewX.checked==true){
        return xScale(+d.crew);
    } else if(passengersX.checked==true){
        return xScale(+d.passengers);
    } else if(cargoX.checked==true){
        return xScale(+d.cargo_capacity);
    } else if(lumX.checked==true){
        return xScale(+d.MGLT)
    } else {
        console.log("probleme")
    }
}

// axe Y
let choixFonctionY = function choixRadioY(d){
    if(noSelectY.checked==true){
        return yScale(padding);
    } else if (coutY.checked==true) {
        return yScale(+d.cost_in_credits);
    } else if(lengthY.checked==true){
        return yScale(+d.length);
    } else if(atmoY.checked==true){
        return yScale(+d.max_atmosphering_speed);
    } else if(crewY.checked==true){
        return yScale(+d.crew);
    } else if(passengersY.checked==true){
        return yScale(+d.passengers);
    } else if(cargoY.checked==true){
        return yScale(+d.cargo_capacity);
    } else if(lumY.checked==true){
        return yScale(+d.MGLT)
    } else {
        console.log("probleme")
    }
}

// rayon
let choixFonctionR = function choixRadioR(d){
    if(noSelectR.checked==true){
        return rScale(padding);
    } else if (coutR.checked==true) {
        return rScale(+d.cost_in_credits);
    } else if(lengthR.checked==true){
        return rScale(+d.length);
    } else if(atmoR.checked==true){
        return rScale(+d.max_atmosphering_speed);
    } else if(crewR.checked==true){
        return rScale(+d.crew);
    } else if(passengersR.checked==true){
        return rScale(+d.passengers);
    } else if(cargoR.checked==true){
        return rScale(+d.cargo_capacity);
    } else if(lumR.checked==true){
        return rScale(+d.MGLT)
    } else {
        console.log("probleme")
    }
}

// couleur
let choixFonctionC = function choixRadioC(d){
    if(noSelectC.checked==true){
        return "hsl("+ colorScale(padding)+",75%, 50%)";
    } else if (coutC.checked==true) {
        return "hsl("+ colorScale(+d.cost_in_credits)+",75%, 50%)";
    } else if(lengthC.checked==true){
        return "hsl("+ colorScale(+d.length)+",75%, 50%)";
    } else if(atmoC.checked==true){
        return "hsl("+ colorScale(+d.max_atmosphering_speed)+", 75%, 50%)";
    } else if(crewC.checked==true){
        return "hsl("+ colorScale(+d.crew)+",75%, 50%)";
    } else if(passengersC.checked==true){
        return "hsl("+ colorScale(+d.passengers)+",75%, 50%)";
    } else if(cargoC.checked==true){
        return "hsl("+ colorScale(+d.cargo_capacity)+",75%, 50%)";
    } else if(lumC.checked==true){
        return "hsl("+ colorScale(+d.MGLT)+",75%, 50%)";
    } else {
        console.log("probleme")
    }
}

//enter : nouveaux noeuds
// cercles
    graphique.enter()
        .append("circle")
        .transition()
        .duration(4000)
        .attr("cx", choixFonctionX)
        .attr("cy", choixFonctionY)
        .attr("r", choixFonctionR)
        .attr("fill", choixFonctionC)

//textes
        texte.enter()
            .append("text")
            .transition()
            .duration(5000)
            .text(function(d){
                return d.name
            })
            .attr("x", choixFonctionX)
            .attr("y", choixFonctionY)
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", function(d){
                if(d.affiliation == "Galactic Empire"){
                    return "hsl(1, 75%, 50%)"
                } else {
                    return "hsl(250,75%, 50%)"
                }
            })
// axes
// axe x
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0,"+(h-padding)+")")

// axe y
        svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate("+padding+",0)")


//update : noeuds existants
// cercles
    graphique.transition()
        .duration(4000)
        .attr("cx", choixFonctionX)
        .attr("cy", choixFonctionY)
        .attr("r", choixFonctionR)
        .attr("fill", choixFonctionC)
        .attr("class", "cercle")

// texte
    texte.transition()
    .duration(5000)
    .attr("x", choixFonctionX)
    .attr("y", choixFonctionY)

// axes
// axe x
    svg.select(".x.axis")
        .transition()
        .duration(3000)
        .call(axeX)

// axe y
    svg.select(".y.axis")
        .transition()
        .duration(3000)
        .call(axeY)

//exit : noeuds sortants
    graphique.exit()
        .transition()
        .duration(1000)
        .attr("r",0)
        .remove();

    texte.exit()
        .transition()
        .duration(1000)
        .attr("font-size", "0px")
        .remove();
})
}

d3.select("#bouton_bonus")
    .on("click", function(){
        graph_bonus();
    });
