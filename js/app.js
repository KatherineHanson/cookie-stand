'use strict';

// GLOBAL VARIABLES
// For creating table
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var theTable = document.getElementById('shops');
// For form submission
var formInput = document.getElementById('form-input');

// CONSTRUCTOR FOR SHOPS
function Shop(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookieValues = [];
  Shop.all.push(this);
}

Shop.prototype.calcCustomersThisHour = function() {
  return Math.ceil(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
};

Shop.prototype.calcCookiesEachHour = function() {
  // console.log('TEST');
  for (var i = 0; i < hours.length; i++) {
    var calcCustomersPerHour = this.calcCustomersThisHour();
    // cookieValues = cookie sale numbers alone
    this.cookieValues.push(Math.ceil(calcCustomersPerHour * this.avgCookiesPerCustomer));
  }
  var totalPerDay = this.cookieValues.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  this.cookieValues.push(totalPerDay);
};

function makeElement(elementType, content, parent) {
  // create
  var newEl = document.createElement(elementType);
  // content
  newEl.textContent = content;
  // append
  parent.appendChild(newEl);
};

// Render table body
Shop.prototype.render = function() {
  this.calcCookiesEachHour();
  // <tr>              create tr
  var trEl = document.createElement('tr');

  //  <th scope="row">location name</th>  create a th, give it content, add it to tr
  makeElement('th', this.locationName, trEl);
  // var thEl = document.createElement('th');
  // thEl.textContent = this.locationName;
  // trEl.appendChild(thEl);
  //      <td>number sold at each time</td> create a td, give it content, add it tr
  for (var k = 0; k < hours.length + 1; k++) {
    console.log(this.cookieValues[k]);
    makeElement('td', this.cookieValues[k], trEl);
    // var tdEl = document.createElement('td');
    // tdEl.textContent = this.cookieValues[k];
    // trEl.appendChild(tdEl);
    // console.log('Hello!');
  }
  // trEl.appendChild(tdEl); SOURCE OF ERROR after using makeElement() in for loop
  // </tr>             add tr to the table
  theTable.appendChild(trEl);
};

// Instantiate Shop objects and store in array
Shop.all = [];
new Shop('1st and Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24, 1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 2.3);
new Shop('Alki', 2, 16, 4.6);

// This function is the event handler for the submission of shop data
function handleShopDataSubmit(event) {
  event.preventDefault();

  var locationName = event.target.locationName.value;
  var minCustomersPerHour = event.target.minCustomersPerHour.value;
  var maxCustomersPerHour = event.target.maxCustomersPerHour.value;
  var avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  for (var i = 0; i < Shop.all.length; i++){
    if(locationName === Shop.all[i].locationName) {
      // reassigning the starter properties
      Shop.all[i].minCustomersPerHour = minCustomersPerHour;
      Shop.all[i].maxCustomersPerHour = maxCustomersPerHour;
      Shop.all[i].avgCookiesPerCustomer = avgCookiesPerCustomer;

      // zeroing out the results of our calculations
      // Shop.all[i].calcCustomersThisHour = [];
      Shop.all[i].totalPerDay = 0;
      Shop.all[i].cookieValues = [];

      // doing the calculations
      console.log('Hello');
      // Shop.all[i].calcCookiesEachHour();
      console.log('Bye');
      clearForm();
      init();
      return;
    }
  }

  var newShop = new Shop(locationName,minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCustomer);

  function clearForm() {
    event.target.locationName.value = null;
    event.target.minCustomersPerHour.value = null;
    event.target.maxCustomersPerHour.value = null;
    event.target.avgCookiesPerCustomer.value = null;
  };
  clearForm();
  init();
};

// Create table header
function makeHeader() {
  // <tr>              create tr
  var trEl = document.createElement('tr');
  //   <th>blank space</th>   create a th, give it content, add it to tr
  makeElement('th', '', trEl);
  // var thEl = document.createElement('th');
  // thEl.textContent = '';
  // trEl.appendChild(thEl);
  // <th scope="col">time</th>  create a th, give it content, add it to tr
  for (var k = 0; k < hours.length; k++) {
    makeElement('th', hours[k], trEl);
    // var thEl = document.createElement('th');
    // thEl.textContent = hours[k];
    // trEl.appendChild(thEl);
  }
  //   <th>Daily Location Total</th>   create a th, give it content, add it to tr
  makeElement('th', 'Daily Location Total', trEl);
  // var thEl = document.createElement('th');
  // thEl.textContent = 'Daily Location Total';
  // trEl.appendChild(thEl);
  // </tr>             add tr to the table
  theTable.appendChild(trEl);
};

// Create table footer
function makeFooter() {
  var trEl = document.createElement('tr');

  makeElement('th', 'Hourly Totals for Each Location', trEl);
  // var thEl = document.createElement('th');
  // thEl.textContent = 'Hourly Totals for Each Location';
  // trEl.appendChild(thEl);

  var totalOfTotals = 0;
  var hourlyTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < Shop.all.length; j++){
      hourlyTotal += Shop.all[j].cookieValues[i];
      totalOfTotals += Shop.all[j].cookieValues[i];
    }
    makeElement('th', hourlyTotal, trEl);
    // thEl = document.createElement('th');
    // thEl.textContent = hourlyTotal;
    // trEl.appendChild(thEl);
  }

  makeElement('th', totalOfTotals, trEl);
  // thEl = document.createElement('th');
  // thEl.textContent = totalOfTotals;
  // trEl.appendChild(thEl);

  theTable.appendChild(trEl);
};

// This function gots through the array of shops and
// calls the calcCookiesEachHour() and render() methods on each one
function init() {
  theTable.innerHTML = '';
  makeHeader();
  for(var i = 0; i < Shop.all.length; i++){
    Shop.all[i].render();
  }
  makeFooter();
};

// Event listener for shop data submission form
formInput.addEventListener('submit', handleShopDataSubmit);

// Call table rendering function
init();
