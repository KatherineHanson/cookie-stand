// First, create a separate JS object literal (no constructor functions... yet)
// for each shop location that does the following:
  // Stores the min/max hourly customers, and the average cookies per customer,
  // in object properties
  // Uses a method of that object to generate a random number of customers
  // per hour. Objects/Math/random
  // Calculate and store the simulated amounts of cookies purchased for
  // each hour at each location using average cookies purchased and the
  // random number of customers generated
  // Store the results for each location in a separate array...
  // perhaps as a property of the object representing that location
  // Display the values of each array as unordered lists in the browser
  // Calculating the sum of these hourly totals; your output for each location
  // should look as shown in assignment
  // Display the lists on sales.html. We will be adding features to this
  // application and working with its layout throughout the week.

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookiesPerHour = [];

var allShops = [];
var theTable = document.getElementById('shops');

function Shop(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookieValues = [];
  allShops.push(this);
}

Shop.prototype.calcCustomersThisHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
};

Shop.prototype.calcCookiesEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookieValues.push(Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer));
    cookiesPerHour.push(hours[i] + ': ' + (Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer)));
  }
  var totalPerDay = this.cookieValues.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  // cookieValues = cookie sale numbers alone
  this.cookieValues.push(totalPerDay);
  console.log(this.cookieValues);
  // cookiesPerHour = cookie sale numbers with coordinating times or 'Total: '
  cookiesPerHour.push('Total: ' + totalPerDay);
  return cookiesPerHour;
};

// CREATE TABLE HEADER
function header() {
//  <thead>             create thead
  var theadEl = document.createElement('thead');
  // <tr>              create tr
  var trEl = document.createElement('tr');
  //   <th>blank space</th>   create a th, give it content, add it to tr
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  // <th scope="col">time</th>  create a th, give it content, add it to tr
  for (k = 0; k < hours.length; k++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[k];
    trEl.appendChild(thEl);
  }
  //   <th>Daily Location Total</th>   create a th, give it content, add it to tr
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  // </tr>             add tr to the table
  theTable.appendChild(trEl);
  // </thead>             add thead to the table
  theTable.appendChild(theadEl);
};

// CREATE TABLE BODY
Shop.prototype.render = function() {
  //  <tbody>             create tbody
  // var tbodyEl = document.createElement('tbody');
  // <tr>              create tr
  var trEl = document.createElement('tr');
  //  <th scope="row">location name</th>  create a th, give it content, add it to tr
  var thEl = document.createElement('th');
  thEl.textContent = this.locationName;
  trEl.appendChild(thEl);
  //      <td>number sold at each time</td> create a td, give it content, add it tr
  for (var k = 0; (k < hours.length + 1); k++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookieValues[k];
    trEl.appendChild(tdEl);
    console.log('Hello!');
  }
  trEl.appendChild(tdEl);
  // </tr>             add tr to the table
  theTable.appendChild(trEl);
  // </tbody>             add tbody to the table
  // theTable.appendChild(tbodyEl);
};

function renderAllShops() {
  for(var i = 0; i < allShops.length; i++){
    allShops[i].render();
  }
};

pikePlaceMkt = new Shop('1st and Pike', 23, 65, 6.3);
seaTac = new Shop('SeaTac Airport', 3, 24, 1.2);
seaCenter = new Shop('Seattle Center', 11, 38, 3.7);
capHill = new Shop('Capitol Hill', 20, 38, 2.3);
alki = new Shop('Alki', 2, 16, 4.6);

// pikePlaceMkt.calcCookiesEachHour();
// seaTac.calcCookiesEachHour();
// seaCenter.calcCookiesEachHour();
// capHill.calcCookiesEachHour();
// alki.calcCookiesEachHour();

function renderAllShopsData() {
  for(var i = 0; i < allShops.length; i++){
    allShops[i].calcCookiesEachHour();
  }
};

header();
renderAllShopsData();
renderAllShops();
