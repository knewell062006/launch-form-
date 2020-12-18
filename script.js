// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      div.innerHTML =`
      <ol>
   <li
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}">

      `
   });
   });
   let form = document.querySelector("form");
   let pilotStatus= document.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")
   let faultyItems = document.getElementById("faultyItems")
   let fuelStatus = document.getElementById("fuelStatus")
   let launchStatus= document.getElementById("launchStatus")
   let cargoStatus = document.getElementById("cargoStatus")
      faultyItems.style.visibility= 'hidden'
      form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name= pilotName]");
      let coPilotName = document.querySelector("input[name= copilotName]");
      let fuelLevelInput = document.querySelector("input[name= fuelLevel");
      let cargoMassInput = document.querySelector("input[name= cargoMass");
      
      if (pilotInput.value === "" || coPilotName.value === "" || fuelLevelInput.value ===""  || cargoMassInput.value === "" ) {
         alert("All fields are required!");
         console.log("made it here")
      } else if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) || !isNaN(pilotInput.value)  || !isNaN(coPilotName.value)){
         alert("All fields are required!");  
      } else{ faultyItems.style.visibility= 'visible';
            fuelStatus.innerHTML = `${"Fuel level high enough for launch"}`
            pilotStatus.innerHTML = `Pilot ${pilotInput.value } is ready for launch`
            copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is ready for launch`
         if (fuelLevelInput.value <= 10000){ 
            fuelStatus.innerHTML = "There is not enough fuel for the journey"
            launchStatus.style.color = 'Red'
            launchStatus.innerHTML = "Shuttle not ready for launch"
         }else {
            if (cargoMassInput.value >= 10000){
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"
               launchStatus.innerHTML = "Shuttle not ready for launch"
               launchStatus.style.color = 'Red'
            }else {launchStatus.innerHTML = "Shuttle is ready for launch"
               launchStatus.style.color = 'Green'
            }
        }
      }
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li
   <li>Name: ${json.name}</li>
   <li>Diameter: ${json.diameter}</li>
   <li>Star: ${json.star}</li>
   <li>Distance from Earth: ${json.distance}</li>
   <li>Number of Moons: ${json.moons}</li>
</ol>
<img src="${json.image}">
*/
