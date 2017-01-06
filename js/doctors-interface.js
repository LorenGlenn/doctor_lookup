var Doctor = require('./../js/doctors.js').doctorModule;

$(document).ready(function() {
  var foundDoctors = new Doctor();
  $('#doctorLocation').click(function() {
    var issue = $('#issue').val();
    $('#issue').val("");
    foundDoctors.getDoctors(issue);
  });
});
