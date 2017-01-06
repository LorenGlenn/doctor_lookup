var Calculator = require('./../js/doctor.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var foundDoctors = new Doctor();
  $('#doctorLocation').click(function() {
    var issue = $('#issue').val();
    $('#issue').val("");
    var output = foundDoctors.getDoctors(issue);
    output.data.forEach(function(doctor){
      $('#solution').append("<li>" + doctor.profile.first_name + "</li>");
    });
  });
});
