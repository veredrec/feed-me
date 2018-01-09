var submitUser = document.getElementById('submit');

var cUser, dUser, pUser, name, distance, rating, address, meal, calorie;
var arrRating = [4.3, 5.0, 2.5, 4.2, 4.8, 4.1, 3.8];
var arrName = [
  'Dona Bella',
  'El mar',
  'Per Se',
  'Mariella',
  'ABC Kitchen',
  'The Smith',
  'Uplnd'
];
var arrAddress = [
  '1 Bristol Court, East Brunswick, NJ',
  '2 Newllin Road, Princeton, NJ',
  '3 Lawrence Drive, Princeton, NJ',
  '129 Snowhill Street, Spotwoods, NJ',
  '15 Georges Road, Dayton, NJ',
  '6 Heath Road, Monmouth Junction, NJ',
  '7262 Alexander Road, Princeton, NJ'
];
var arrMeal = [
  'Chicken Grill Sandwich',
  'Fajita Vegetables',
  'California Pizza Kitchen',
  "Chili's Grill",
  'Grilled Salmon',
  'Sizzling Chicken and Spinach',
  'The Buttermilk Oven-Fried Tofu'
];
var arrCalories = [
  '400 Cal.',
  '380 Cal.',
  '360 Cal.',
  '420 Cal.',
  '415 Cal.',
  '340 Cal.',
  '390 Cal.'
];

submitUser.addEventListener('click', function() {
  cUser = $('#cuisineUser').val();
  dUser = $('#distanceUser').val();
  pUser = $('#priceUser').val();
  var random = Math.floor(Math.random() * 7);
  name = arrName[random];
  rating = arrRating[random];
  address = arrAddress[random];
  calories = arrCalories[random];
  meal = arrMeal[random];

  if (dUser === 'Less than 1 mile') {
    distance = '0.5 mile';
  } else if (dUser === '1-2 miles') {
    distance = '1.3 miles';
  } else if (dUser === '3-5 miles') {
    distance = '4.8 miles';
  } else if (dUser === '6-10 miles') {
    distance = '7.4 miles';
  }

  restaurant.textContent = name;
  $('#rating').append(rating);
  $('#address').append(address);
  $('#cuisine').append(cUser);
  $('#price').append(pUser);
  $('#distance').append(distance);
  $('#mondayHours').append('9:00 AM - 9:00 PM');
  $('#tuesdayHours').append('9:00 AM - 9:00 PM');
  $('#wednesdayHours').append('9:00 AM - 9:00 PM');
  $('#thursdayHours').append('9:00 AM - 9:00 PM');
  $('#fridayHours').append('9:00 AM - 9:00 PM');
  $('#saturdayHours').append('10:00 AM - 11:00 PM');
  $('#sundayHours').append('11:00 AM - 5:00 PM');
  $('#calories').append(calories);
  $('#meal').append(meal);
});
