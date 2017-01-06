(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "57e0527a2a203960b4ce874d40f731cb";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
