//Sélecteurs du vaisseau 1
let select_spaceship1_1 = document.getElementById("A-Wing")
let select_spaceship1_2 = document.getElementById("AT-AT")
let select_spaceship1_3 = document.getElementById("AT-ST")
let select_spaceship1_4 = document.getElementById("B-Wing")
let select_spaceship1_5 = document.getElementById("Imperial_Shuttle")
let select_spaceship1_6 = document.getElementById("Imperial_Speeder_Bike")
let select_spaceship1_7 = document.getElementById("Millennium_Falcon")
let select_spaceship1_8 = document.getElementById("Slave_1")
let select_spaceship1_9 = document.getElementById("Snowspeeder")
let select_spaceship1_10 = document.getElementById("T-16_skyhopper")
let select_spaceship1_11 = document.getElementById("TIE_Advanced_X1")
let select_spaceship1_12 = document.getElementById("TIE_Bomber")
let select_spaceship1_13 = document.getElementById("TIE-IN_Interceptor")
let select_spaceship1_14 = document.getElementById("TIE-IN_Starfighter")
let select_spaceship1_15 = document.getElementById("X34_Landspeeder")
let select_spaceship1_16 = document.getElementById("X-Wing")
let select_spaceship1_17 = document.getElementById("Y-Wing")

// Création du svg
//Création des marges
const width_vaisseau = 500;
const height_vaisseau = 200;
const barPadding = 1;


// Création des svg
const svg_vaisseau_1 = d3.select("#vaisseau_1_graph")
    .append("svg")
    .attr("width", width_vaisseau/2)
    .attr("height", height_vaisseau)

const svg_cost_in_credits_1 = d3.select("#vaisseau_1_cost")
    .append('svg')
    .attr('width', width_vaisseau/2)
    .attr('height', height_vaisseau/2)

const svg_img_vaisseau_1 = d3.select("#img_vaisseau_1")
      .append('svg')
      .attr('width', width_vaisseau/2)
      .attr('height', height_vaisseau)

// Quelques questions: je pense stocker chaque chemin à une donnée dans une variable et l'appeler dans d3.json.

// Création de variables pour les bases de données


let choixVaisseau = function choixRadioVaisseau1(){
  if (select_spaceship1_1.checked == true){
    // let test = console.log('test')
    // return test
    return "data_spaceships/a-wing.json";
    // let AWing = "data_spaceships/a-wing.json"
    // return AWing;
  }
  else if (select_spaceship1_2.checked == true){
    return "data_spaceships/AT-AT.json";
  }
  else if (select_spaceship1_3.checked == true){
    return "data_spaceships/AT-ST.json";
  }
  else if (select_spaceship1_4.checked == true){
    return "data_spaceships/b-wing.json";
  }
  else if (select_spaceship1_5.checked == true){
    return "data_spaceships/imperial_shuttle.json";
  }
  else if (select_spaceship1_6.checked == true){
    return "data_spaceships/Imperial_speeder_bike.json";
  }
  else if (select_spaceship1_7.checked == true){
    return "data_spaceships/Millennium_Falcon.json";
  }
  else if (select_spaceship1_8.checked == true){
    return "data_spaceships/Slave_1.json";
  }
  else if (select_spaceship1_9.checked == true){
    return "data_spaceships/snowspeeder.json";
  }
  else if (select_spaceship1_10.checked == true){
    return "data_spaceships/t-16_skyhopper.json";
  }
  else if (select_spaceship1_11.checked == true){
    return "data_spaceships/tie_advanced_x1.json";
  }
  else if (select_spaceship1_12.checked == true){
    return "data_spaceships/tie_bomber.json";
  }
  else if (select_spaceship1_13.checked == true){
    return "data_spaceships/TIE-IN_Interceptor.json";
  }
  else if (select_spaceship1_14.checked == true){
    return "data_spaceships/tie-ln_starfighter.json";
  }
  else if (select_spaceship1_15.checked == true){
    return "data_spaceships/x-34_landspeeder.json";
  }
  else if (select_spaceship1_16.checked == true){
    return "data_spaceships/x-wing.json";
  }
  else if (select_spaceship1_17.checked == true){
    return "data_spaceships/y-wing.json";
  }
}


function cost_1(){
  d3.json(choixVaisseau(), function(data){

    delete data.length
    delete data.max_atmosphering_speed
    delete data.crew
    delete data.passengers
    delete data.cargo_capacity
    delete data.img
    delete data.MGLT

    let elements_cost = Object.values(data)
    let selection = elements_cost

  //barre du cost in cost_in_credits
  let barre_cost = svg_cost_in_credits_1.selectAll("rect").data(elements_cost)
  let cost_title = svg_cost_in_credits_1.selectAll("text")

  d3.selectAll(".shiptxt").remove();

// texte
svg_cost_in_credits_1.append("text")
            .attr('x', "5px")
            .attr("y", "25px")
            .style("font-size", "13px")
            .attr("fill", "#c7bca8")
            .text("Coût en crédits")
            .attr("class","shiptxt")


  // Création des barres
      barre_cost.enter()
            .append('rect')
            .transition()
            .duration(3000)
            .attr('x', "0px")
            .attr('y', "0px")
            .attr('width', 0)
            .attr('height', 50)
            .attr("fill", 'hsl(61, 59%, 33%)')

    // Ajout d'animation sur les barres
      barre_cost.transition()
      .duration(500)
      .attr("width", function(d){
        return d/100
      })

      // Valeur numérique
      let nombres_cost = svg_cost_in_credits_1.selectAll("text.nombres").data(elements_cost)
      d3.selectAll(".shipnb_cost").remove();
            nombres_cost.enter()
                  .append("text")
                  .text(function(d){
                    return d
                  })
                  .attr("x", (width/2) - 5)
                  .attr('y', '25px')
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "13px")
                  .attr("fill", "#c7bca8")
                  .attr("class","shipnb_cost")



  })
}


// début de la fonction
function graph_vaisseau_1(){
// Appel des données
// d3.json(AWing, function(data){
d3.json(choixVaisseau(), function(data){

    delete data.cost_in_credits
    delete data.img

    let elements_text = Object.keys(data)
    let elements = Object.values(data)

    // console.log(elements)
    // console.log(elements_sans_cost)
    // console.log(test)
    // console.log(data)
    // console.log(elements_sans_cost_values)


    let selection = elements

  //Mise à l'échelle
  let widthScale = d3.scaleLinear()
                    .domain([0, 1000])
                    .range([100, 1000])

  // Je vais tenter de faire une mise à l'échelle différenciée selon l'attribut parce que le cost in credits est trop élevé
  // Peut-être faut-il isoler le cost in credits par une couleur et une échelle différente

  let barres = svg_vaisseau_1.selectAll("rect").data(elements)

  // Création des barres
      barres.enter()
            .append('rect')
            .transition()
            .duration(3000)
            .attr('x', "0px")
            .attr('y', function(d,i){
              return (i*25) + "px"
            })
            .attr('width', 0)
            .attr('height', "20px")
            .attr("fill", 'hsl(61, 59%, 24%)')

    // Ajout d'animation sur les barres
      barres.transition()
      .duration(500)
      .attr("width", widthScale)


// d3.selectAll(".shiptxt").remove();


    let nombres = svg_vaisseau_1.selectAll("text.nombres").data(elements);

    let labels = svg_vaisseau_1.selectAll("text.labels").data(elements_text);
    labels.enter()
          .append('text')
          .transition()
          .duration(1)
          .text(function(d){return d})
          .attr("x", "5px")
          .attr('y', function(d,i){
                    return 10 + (i*25)
                  })
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
          .attr("class","shiptxt")
          .attr("fill", "#c7bca8")


d3.selectAll(".shipnb").remove();

              nombres.enter()
                    .append("text")
                    .text(function(d){
                      return d
                    })
                    // .attr("x", function(d){
                    //   return 500
                    // })
                    .attr("x", (width/2) - 5)
                    .attr('y', function(d,i){
                        return 10 + (i*25)
                    })
                    .attr("font-family", "sans-serif")
                    .attr("font-size", "10")
                    .attr("fill", "#c7bca8")
                    .attr("class","shipnb")
                    // .attr("text-anchor", "start")

              nombres.transition()
                      .duration(10)
                      .attr("font-size", "10")

// update();
})
}

function img_1(){
  d3.json(choixVaisseau(), function(data){

    delete data.cost_in_credits
    delete data.length
    delete data.max_atmosphering_speed
    delete data.crew
    delete data.passengers
    delete data.cargo_capacity
    delete data.MGLT

    let elements = Object.values(data)
    console.log(elements)

    let images = svg_img_vaisseau_1.selectAll("image").data(elements)

    images.enter()
          .append("svg:image")
          .attr('xlink:href', '')
          // .attr("xlink:href", "img/A-Wing.png")
          .attr("x", 0)
          .attr("y", 0)
          .attr("height", 200)
          .attr("width", 200)

    images.transition()
          .duration(13)
          .attr("xlink:href", function(d){
            if (d == 1){
              return "img/A-Wing.png"
            }
            else if (d == 2){
              return "img/AT-AT.png"
            }
            else if (d == 3){
              return "img/AT-ST.png"
            }
            else if (d == 4){
              return "img/B-Wing.png"
            }
            else if (d == 5){
              return "img/Imperial_Shuttle.png"
            }
            else if (d == 6){
              return "img/Imperial_Speeder_Bike.png"
              // return "img/Imperial_Shuttle.png"
            }
            else if (d == 7){
              return "img/Millennium_Falcon.png"
            }
            else if (d == 8){
              return "img/Slave_1.png"
            }
            else if (d == 9){
              return "img/Snowspeeder.png"
            }
            else if (d == 10){
              return "img/T-16_Skyhooper.png"
            }
            else if (d == 11){
              return "img/TIE_Advanced.png"
            }
            else if (d == 12){
              return "img/TIE_Bomber.png"
            }
            else if (d == 13){
              return "img/TIE_Interceptor.png"
            }
            else if (d == 14){
              return "img/TIE_Fighter.png"
            }
            else if (d == 15){
              return "img/X-34_Landspeeder.png"
            }
            else if (d == 16){
              return "img/X-Wing.png"
            }
            else if (d == 17){
              return "img/Y-Wing.png"
            }
          })


  })
}



// J'ai un bug de bouton, j'arrive pas à le résoudre, à voir prochainement
//Bouton pour créer la fonction
d3.select("#bouton_vaisseau_1")
  .on("click", function(){
    graph_vaisseau_1();
    cost_1();
    img_1();
  });

  d3.select("#bouton_vaisseau_1").dispatch("click");
  d3.select("#bouton_vaisseau_1").dispatch("click");
