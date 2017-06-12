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

var myFavoriteUL = document.getElementById('PikePlaceMkt');

var cookiesPerHour = [];

var PikePlaceMkt = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  calcCustomersThisHour: function() {
    return Math.floor(Math.random() * (65 - 23 + 1)) + 23;
  },
  calcCookiesEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      cookiesPerHour.push(hours[i] + ': ' + (Math.floor(this.calcCustomersThisHour() * this.avgCookiesPerCustomer)));
    }
    return cookiesPerHour;
  }
  // render: function () {//stuff being added to the DOM, element.textContent etc}
  //   for (var j = 0; j < cookiesEachHour.length; j++) {
  //     var liEl = document.createElement('li');
  //     liEl.textContent = cookiesEachHour[i];
  //     myFavoriteUL.appendChild(liEl);
  //   }
  // }
};
