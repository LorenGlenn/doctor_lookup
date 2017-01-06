var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var foundDoctors = new Doctor();
  $('#doctorLocation').click(function() {
    var issue = $('#issue').val();
    $('#issue').val("");
    foundDoctors.getDoctors(issue);
  });
});
