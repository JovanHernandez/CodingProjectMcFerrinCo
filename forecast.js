
//function setCity(){attempted to call this onclick but didnt display data
var key = "982b9440993bcccf41cfad2fa85fc922";
var city = "Knoxville"; // My test case was "Knoxville"
var url = "https://api.openweathermap.org/data/2.5/forecast";
var array = [];//hold temperatuee data for each day by index value

//  var city = document.getElementById(mycity).value; // COULD Not get this to WORK
$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "imperial",
    cnt: "10"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $("#cityname").html(wf);
    wf = "";
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += val.main.temp + "&degF" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "</p>" // Closing paragraph tag
      array.push(wf);//add to array[days]
      wf = "";
    });

//Put temperature data in appropriate divs
    $("#today").html(array[0]);
    $("#Day1").html(array[1]);
    $("#Day2").html(array[2]);
    $("#Day3").html(array[3]);
    $("#Day4").html(array[4]);
    $("#Day5").html(array[5]);
    $("#Day6").html(array[6]);

  }
});
//}
