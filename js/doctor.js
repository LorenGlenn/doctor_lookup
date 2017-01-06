var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     result.data.forEach(function(doctor){
       var doctorList = [];
       doctorList.push(doctor.profile.bio);
       console.log(doctorList);
       return(doctorList);
     });
    })
   .fail(function(error){
      return("fail");
    });
};

exports.doctorModule = Doctor;
