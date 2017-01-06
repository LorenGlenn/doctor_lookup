var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     result.data.forEach(function(doctor){
      $('#solution').append("<li> Name: " + doctor.profile.last_name + ", " + doctor.profile.first_name + " " + doctor.profile.title+ "<br> Bio: " + doctor.profile.bio + "</li>")
     });
     console.log(result);
    })
   .fail(function(error){
    });
};

exports.doctorModule = Doctor;
