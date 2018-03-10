var Plotly = require('plotly.js/lib/core');
var Plotlybar = require('plotly.js/lib/bar');

Plotly.register(Plotlybar);

// At the end of the _charts.js file
console.log('hello, this is my charts file!');


var countyHomicides = annualTotals.map(a => a.homicides_total);
var harvardParkHomicides = annualTotals.map(a => a.homicides_harvard_park);
var years = annualTotals.map(a => a.year);

function createChart(x, y, element, color, title) {
  var settings = [{
    x: x,
    y: y,
    type: 'bar',
    marker: {
      color: color
    },
    // Add this to your chart settings
    hoverinfo: 'y',
    hoverlabel: {
  bgcolor: '#777777'
}
  }];

  var layout = {
    xaxis: {
      title: 'Year',
      fixedrange: true
    },
    yaxis: {
      fixedrange: true
    },
    margin: {
      l: 30,
      r: 15,
      t: 45,
      b: 30
    },
    height: 250,
    title: title
  }

  // Create Charts

  Plotly.newPlot(element, settings, layout, {displayModeBar: false})
}
createChart(years, countyHomicides, 'county-homicides', 'blue', '<b>County Homicides</b>');
createChart(years, harvardParkHomicides, 'harvard-park-homicides', 'red', '<i>Harvard Park Homicides</I>');
