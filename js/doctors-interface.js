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
