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

var cookieValues = [];

function Shop(locationName, minCustomersPerHour, maxCustomersPerHour) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = 6.3;
}

Shop.prototype.calcCustomersThisHour = function() {
  console.log(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
};

pikePlaceMkt = new Shop('1st and Pike', 23, 65);

// var PikePlaceMkt = {
//   locationName: '1st and Pike',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   calcCustomersThisHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
//   },
//   cookiesPerHour: [],
//   cookieValues: [],
//   calcCookiesEachHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.cookieValues.push(Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer));
//       this.cookiesPerHour.push(hours[i] + ': ' + (Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer)));
//     }
//     this.cookiesPerHour.push('Total: ' + this.cookieValues.reduce(function(acc, val) {
//       return acc + val;
//     }, 0));
//     return this.cookiesPerHour;
//   },
//   render: function () {//stuff being added to the DOM, element.textContent etc}
//     var cookies = document.getElementById('PikePlaceMkt');
//     cookies.textContent = '1st and Pike Cookie Sales';
//     for (var j = 0; j < (hours.length + 1); j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = this.calcCookiesEachHour()[j];
//       cookies.appendChild(liEl);
//     }
//   }
// };
//
// var SeaTac = {
//   locationName: 'SeaTac Airport',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   avgCookiesPerCustomer: 1.2,
//   calcCustomersThisHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
//   },
//   cookiesPerHour: [],
//   cookieValues: [],
//   calcCookiesEachHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.cookieValues.push(Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer));
//       this.cookiesPerHour.push(hours[i] + ': ' + (Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer)));
//     }
//     this.cookiesPerHour.push('Total: ' + this.cookieValues.reduce(function(acc, val) {
//       return acc + val;
//     }, 0));
//     return this.cookiesPerHour;
//   },
//   render: function () {//stuff being added to the DOM, element.textContent etc}
//     var cookies = document.getElementById('SeaTac');
//     cookies.textContent = 'SeaTac Airport Cookie Sales';
//     for (var j = 0; j < (hours.length + 1); j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = this.calcCookiesEachHour()[j];
//       cookies.appendChild(liEl);
//     }
//   }
// };
//
// var SeaCenter = {
//   locationName: 'Seattle Center',
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 38,
//   avgCookiesPerCustomer: 3.7,
//   calcCustomersThisHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
//   },
//   cookiesPerHour: [],
//   cookieValues: [],
//   calcCookiesEachHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.cookieValues.push(Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer));
//       this.cookiesPerHour.push(hours[i] + ': ' + (Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer)));
//     }
//     this.cookiesPerHour.push('Total: ' + this.cookieValues.reduce(function(acc, val) {
//       return acc + val;
//     }, 0));
//     return this.cookiesPerHour;
//   },
//   render: function () {//stuff being added to the DOM, element.textContent etc}
//     var cookies = document.getElementById('SeaCenter');
//     cookies.textContent = 'Seattle Center Cookie Sales';
//     for (var j = 0; j < (hours.length + 1); j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = this.calcCookiesEachHour()[j];
//       cookies.appendChild(liEl);
//     }
//   }
// };
//
// var CapHill = {
//   locationName: 'Capitol Hill',
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   avgCookiesPerCustomer: 2.3,
//   calcCustomersThisHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
//   },
//   cookiesPerHour: [],
//   cookieValues: [],
//   calcCookiesEachHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.cookieValues.push(Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer));
//       this.cookiesPerHour.push(hours[i] + ': ' + (Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer)));
//     }
//     this.cookiesPerHour.push('Total: ' + this.cookieValues.reduce(function(acc, val) {
//       return acc + val;
//     }, 0));
//     return this.cookiesPerHour;
//   },
//   render: function () {//stuff being added to the DOM, element.textContent etc}
//     var cookies = document.getElementById('CapHill');
//     cookies.textContent = 'Capitol Hill Cookie Sales';
//     for (var j = 0; j < (hours.length + 1); j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = this.calcCookiesEachHour()[j];
//       cookies.appendChild(liEl);
//     }
//   }
// };
//
// var Alki = {
//   locationName: 'Alki',
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   avgCookiesPerCustomer: 4.6,
//   calcCustomersThisHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
//   },
//   cookiesPerHour: [],
//   cookieValues: [],
//   calcCookiesEachHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.cookieValues.push(Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer));
//       this.cookiesPerHour.push(hours[i] + ': ' + (Math.ceil(this.calcCustomersThisHour() * this.avgCookiesPerCustomer)));
//     }
//     this.cookiesPerHour.push('Total: ' + this.cookieValues.reduce(function(acc, val) {
//       return acc + val;
//     }, 0));
//     return this.cookiesPerHour;
//   },
//   render: function () {//stuff being added to the DOM, element.textContent etc}
//     var cookies = document.getElementById('Alki');
//     cookies.textContent = 'Alki Cookie Sales';
//     for (var j = 0; j < (hours.length + 1); j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = this.calcCookiesEachHour()[j];
//       cookies.appendChild(liEl);
//     }
//   }
// };
//
// PikePlaceMkt.render();
// SeaTac.render();
// SeaCenter.render();
// CapHill.render();
// Alki.render();
