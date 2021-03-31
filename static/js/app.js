// from data.js
var tableData = data;

// YOUR CODE HERE!


// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("#form");


var tbody = d3.select("tbody");


data.forEach(ufoSighting => {
    // console.log(ufoSighting);
    var row = tbody.append("tr");


    Object.entries(ufoSighting).forEach(function([key, value]) {


      //   console.log(key, value);
      // Append a cell to the row for each value
      
      var cell = row.append("td");
      cell.text(value);



    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");


// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

    // Prevent the page from refreshing
  
  
    d3.event.preventDefault();
  
  
  
    // Select the input element and get the raw HTML node
    var inputElement=d3.select("#datetime");
    // Get the value property of the input element
    var inputValue=inputElement.property('value');
  
    // console.log(inputValue)

    var inputCity=d3.select("#city");
    // Get the value property of the input element
    var inputCityValue=inputCity.property('value');

    var inputState=d3.select("#state");
    // Get the value property of the input element
    var inputStateValue=inputState.property('value');

    var inputCountry=d3.select("#country");
    // Get the value property of the input element
    var inputCountryValue=inputCountry.property('value');

    var inputShape=d3.select("#shape");
    // Get the value property of the input element
    var inputShapeValue=inputShape.property('value');

    

    var filterData=tableData;
    // // Use the form input to filter the data by datetime
    


    if (inputValue){
      filterData=filterData.filter(sighting=> sighting.datetime==inputValue);
    }
    else if (inputCityValue){
      filterData=filterData.filter(sighting=> sighting.city==inputCityValue);

    }
    else if(inputCountryValue){
      filterData=filterData.filter(sighting=> sighting.country==inputCountryValue);
    }
    else if (inputCountryValue){
      filterData=filterData.filter(sighting=> sighting.state==inputStateValue);
    }
    else{

      filterData=filterData.filter(sighting=> sighting.shape==inputShapeValue);
    }
  
    
  
    
  
    var tbody = d3.select("tbody");
    
    tbody.html("")


    


    filterData.forEach(ufoSighting => {
        // console.log(ufoSighting);
        var row = tbody.append("tr");
    
    
        Object.entries(ufoSighting).forEach(function([key, value]) {
    
    
          //   console.log(key, value);
          // Append a cell to the row for each value
          
          var cell = row.append("td");
          cell.text(value);
    
    
    
        });
    });
  
  
  
}
  