
$(document).ready(function () {
    $("#submit").click(function () {
       $.post("http://localhost:8080/request",
          {
             name: "viSion",
             designation: "Professional gamer"
          },
          function (data, status) {
             console.log(data);
          });
    });
 });