//Sélecteurs du vaisseau 1
let select_spaceship1_1_2 = document.getElementById("A-Wing_2")
let select_spaceship1_2_2 = document.getElementById("AT-AT_2")
let select_spaceship1_3_2 = document.getElementById("AT-ST_2")
let select_spaceship1_4_2 = document.getElementById("B-Wing_2")
let select_spaceship1_5_2 = document.getElementById("Imperial_Shuttle_2")
let select_spaceship1_6_2 = document.getElementById("Imperial_Speeder_Bike_2")
let select_spaceship1_7_2 = document.getElementById("Millennium_Falcon_2")
let select_spaceship1_8_2 = document.getElementById("Slave_1_2")
let select_spaceship1_9_2 = document.getElementById("Snowspeeder_2")
let select_spaceship1_10_2 = document.getElementById("T-16_skyhopper_2")
let select_spaceship1_11_2 = document.getElementById("TIE_Advanced_X1_2")
let select_spaceship1_12_2 = document.getElementById("TIE_Bomber_2")
let select_spaceship1_13_2 = document.getElementById("TIE-IN_Interceptor_2")
let select_spaceship1_14_2 = document.getElementById("TIE-IN_Starfighter_2")
let select_spaceship1_15_2 = document.getElementById("X34_Landspeeder_2")
let select_spaceship1_16_2 = document.getElementById("X-Wing_2")
let select_spaceship1_17_2 = document.getElementById("Y-Wing_2")


//Création des marges
const width_vaisseau_2 = 500;
const height_vaisseau_2 = 200;
const barPadding_2 = 1;


// Création des svg
const svg_vaisseau_2 = d3.select("#vaisseau_2_graph")
    .append("svg")
    .attr("width", width_vaisseau_2/2)
    .attr("height", height_vaisseau_2)

const svg_cost_in_credits_2 = d3.select("#vaisseau_2_cost")
    .append('svg')
    .attr('width', width_vaisseau_2/2)
    .attr('height', height_vaisseau_2/2)

const svg_img_vaisseau_2 = d3.select("#img_vaisseau_2")
      .append('svg')
      .attr('width', width_vaisseau_2/2)
      .attr('height', height_vaisseau_2)


let choixVaisseau_2 = function choixRadioVaisseau2(){
  if (select_spaceship1_1_2.checked == true){
    // let test = console.log('test')
    // return test
    return "data_spaceships/a-wing.json";
    // let AWing = "data_spaceships/a-wing.json"
    // return AWing;
  }
  else if (select_spaceship1_2_2.checked == true){
    return "data_spaceships/AT-AT.json";
  }
  else if (select_spaceship1_3_2.checked == true){
    return "data_spaceships/AT-ST.json";
  }
  else if (select_spaceship1_4_2.checked == true){
    return "data_spaceships/b-wing.json";
  }
  else if (select_spaceship1_5_2.checked == true){
    return "data_spaceships/imperial_shuttle.json";
  }
  else if (select_spaceship1_6_2.checked == true){
    return "data_spaceships/Imperial_speeder_bike.json";
  }
  else if (select_spaceship1_7_2.checked == true){
    return "data_spaceships/Millennium_Falcon.json";
  }
  else if (select_spaceship1_8_2.checked == true){
    return "data_spaceships/Slave_1.json";
  }
  else if (select_spaceship1_9_2.checked == true){
    return "data_spaceships/snowspeeder.json";
  }
  else if (select_spaceship1_10_2.checked == true){
    return "data_spaceships/t-16_skyhopper.json";
  }
  else if (select_spaceship1_11_2.checked == true){
    return "data_spaceships/tie_advanced_x1.json";
  }
  else if (select_spaceship1_12_2.checked == true){
    return "data_spaceships/tie_bomber.json";
  }
  else if (select_spaceship1_13_2.checked == true){
    return "data_spaceships/TIE-IN_Interceptor.json";
  }
  else if (select_spaceship1_14_2.checked == true){
    return "data_spaceships/tie-ln_starfighter.json";
  }
  else if (select_spaceship1_15_2.checked == true){
    return "data_spaceships/x-34_landspeeder.json";
  }
  else if (select_spaceship1_16_2.checked == true){
    return "data_spaceships/x-wing.json";
  }
  else if (select_spaceship1_17_2.checked == true){
    return "data_spaceships/y-wing.json";
  }
}

// choixVaisseau()

function cost_2(){
  d3.json(choixVaisseau_2(), function(data){

    delete data.length
    delete data.max_atmosphering_speed
    delete data.crew
    delete data.passengers
    delete data.cargo_capacity
    delete data.img
    delete data.MGLT

    let elements_cost_2 = Object.values(data)
    let selection_2 = elements_cost_2

  //barre du cost in cost_in_credits
  let barre_cost_2 = svg_cost_in_credits_2.selectAll("rect").data(elements_cost_2)
  let cost_title_2 = svg_cost_in_credits_2.selectAll("text")

d3.selectAll(".shiptxt_cost_2").remove();
svg_cost_in_credits_2.append("text")
            .attr('x', "5px")
            .attr("y", "25px")
            .style("font-size", "13px")
            .attr("fill", "#c7bca8")
            .text("Coût en crédits")
            .attr("class","shiptxt_cost_2")


  // Création des barres
      barre_cost_2.enter()
            .append('rect')
            .transition()
            .duration(3000)
            .attr('x', "0px")
            .attr('y', "0px")
            .attr('width', 0)
            .attr('height', 50)
            .attr("fill", 'hsl(61, 59%, 33%)')


    // Ajout d'animation sur les barres
      barre_cost_2.transition()
      .duration(500)
      .attr("width", function(d){
        return d/100
      })

      let nombres_cost_2 = svg_cost_in_credits_2.selectAll("text.nombres").data(elements_cost_2)
      d3.selectAll(".shipnb_cost_2").remove();
            nombres_cost_2.enter()
                  .append("text")
                  .text(function(d){
                    return d
                  })
                  .attr("x", (width/2) - 5)
                  .attr('y', '25px')
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "13px")
                  .attr("fill", "#c7bca8")
                  .attr("class","shipnb_cost_2")
  })
}


// début de la fonction
function graph_vaisseau_2(){
// Appel des données
// d3.json(AWing, function(data){
d3.json(choixVaisseau_2(), function(data){

    delete data.cost_in_credits
    delete data.img

    let elements_2 = Object.values(data)
    let elements_text_2 = Object.keys(data)

    // console.log(elements_2)
    // console.log(elements_sans_cost)
    // console.log(test)
    // console.log(data)
    // console.log(elements_sans_cost_values)


    // console.log(selection)

  //Mise à l'échelle
  let widthScale_2 = d3.scaleLinear()
                    .domain([0, 1000])
                    // .domain([1000, 0])
                    .range([100, 1000])

  // let x = d3.scaleLinear().range([1000, 100])

  // x.domain([0, d3.max(elements_2, function(d){return d.elements_2})]);

  // Je vais tenter de faire une mise à l'échelle différenciée selon l'attribut parce que le cost in credits est trop élevé
  // Peut-être faut-il isoler le cost in credits par une couleur et une échelle différente
  // let widthScale = d3.scaleLinear()


  let barres_2 = svg_vaisseau_2.selectAll("rect").data(elements_2)

  // Création des barres
      barres_2.enter()
            .append('rect')
            .transition()
            .duration(3000)
            .attr('x', 0)
            .attr('y', function(d,i){
              return (i*25) + "px"
            })
            .attr('width', 0)
            .attr('height', "20px")
            .attr("fill", 'hsl(61, 59%, 24%)')

    // Ajout d'animation sur les barres
      barres_2.transition()
      .duration(500)
      .attr("width", widthScale_2)



    let labels_2 = svg_vaisseau_2.selectAll("text.labels").data(elements_text_2)
    let nombres_2 = svg_vaisseau_2.selectAll("text.nombres").data(elements_2)

    // Création du texte
    // let labels = svg_vaisseau_1.selectAll("text.label")
    //                 // Si je veux mettre les nombres jsute changer .data(elements_text) par .data(elements)
    //                 .data(elements_text)
    //                 // .data(elements)
  d3.selectAll(".shiptxt_2").remove();
            labels_2.enter()
                    .append('text')
                    .text(function(d){
                      return d
                    })
                    .attr('x', "5px")
                    .attr('y', function(d,i){
                      return 10 + (i*25)
                    })
                    .attr("font-family", "sans-serif")
                    .attr("fill", "#c7bca8")
                    .attr("font-size", "10px")
                    .attr("class","shiptxt_2")


            labels_2.transition()
                    .duration(10)
                    .attr("font-size", "10px")

d3.selectAll(".shipnb_2").remove();

              nombres_2.enter()
                    .append("text")
                    .text(function(d){
                      return d
                    })
                    .attr("x", (width/2) - 5)
                    .attr('y', function(d,i){
                        return 10 + (i*25)
                    })
                    .attr("font-family", "sans-serif")
                    .attr("font-size", "10px")
                    .attr("fill", "#c7bca8")
                    .attr("class","shipnb_2")

              nombres_2.transition()
                      .duration(10)
                      .attr("fill", "white")
                      .attr("font-size", "10px")
})
}

// Gestion des images
function img_2(){
  d3.json(choixVaisseau_2(), function(data){

    delete data.cost_in_credits
    delete data.length
    delete data.max_atmosphering_speed
    delete data.crew
    delete data.passengers
    delete data.cargo_capacity
    delete data.MGLT

    let elements_2 = Object.values(data)
    // console.log(elements_2)

    let images_2 = svg_img_vaisseau_2.selectAll("image").data(elements_2)

    images_2.enter()
          .append("svg:image")
          .attr('xlink:href', '')
          .attr("x", 0)
          .attr("y", 0)
          .attr("height", 200)
          .attr("width", 200)

    images_2.transition()
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


//Bouton pour créer la fonction
d3.select("#bouton_vaisseau_2")
  .on("click", function(){
    graph_vaisseau_2();
    cost_2();
    img_2();
  });

// Disatch : simulation d'un click
  d3.select("#bouton_vaisseau_2").dispatch("click");
  d3.select("#bouton_vaisseau_2").dispatch("click");
