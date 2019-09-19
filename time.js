// A $( document ).ready() block.
$(document).ready(function() {
  var dNow = new Date();
  var localdate =
    dNow.getMonth() +
    1 +
    "/" +
    dNow.getDate() +
    "/" +
    dNow.getFullYear() +
    " " +
    dNow.getHours() +
    ":" +
    dNow.getMinutes();
  // To show current date to card
  $("#upcoming").text("Today");
  $("#currentDate").text(localdate);

  $("body").on("click", "#timeList", function(event) {
    var target = event.target;
    var targetId = target.id;
    if (targetId === "next_day" || targetId === "next_day_a") {
      nextDay();
    } else if (targetId === "next_week" || targetId === "next_week_a") {
      console.log("next_week");
      nextWeek();
    } else if (targetId === "next_month" || targetId === "next_month_a") {
      next_month();
    } else if (
      targetId === "next_threeMonth" ||
      targetId === "next_threeMonth_a"
    ) {
      next_threeMonth();
    }
  });
  $("body").on("click", "#prevTimeList", function(event) {
    var target = event.target;
    var targetId = target.id;
    if (targetId === "prev_day" || targetId === "prev_day_a") {
      previousDay();
    } else if (targetId === "prev_week" || targetId === "prev_week_a") {
      previousWeek();
    } else if (targetId === "prev_month" || targetId === "prev_month_a") {
      previous_month();
    } else if (
      targetId === "prev_threeMonth" ||
      targetId === "prev_threeMonth_a"
    ) {
      previous_threeMonth();
    }
  });
});

function nextDay() {
  var CurrentDate = new Date();
  CurrentDate.setDate(CurrentDate.getDate() + 1);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#upcoming").text("Next Day");
  $("#currentDate").text(localdate);
}

function nextWeek() {
  var CurrentDate = new Date();
  CurrentDate.setDate(CurrentDate.getDate() + 7);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#upcoming").text("Next Week");
  $("#currentDate").text(localdate);
}

function next_month() {
  var CurrentDate = new Date();
  console.log("Current date:", CurrentDate);
  CurrentDate.setMonth(CurrentDate.getMonth() + 1);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#upcoming").text("Next Month");
  $("#currentDate").text(localdate);
}

function next_threeMonth() {
  var CurrentDate = new Date();
  CurrentDate.setMonth(CurrentDate.getMonth() + 3);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#upcoming").text("Next 3 Months");
  $("#currentDate").text(localdate);
}
//previous
var dNow = new Date();
var localdate =
  dNow.getMonth() +
  1 +
  "/" +
  dNow.getDate() +
  "/" +
  dNow.getFullYear() +
  " " +
  dNow.getHours() +
  ":" +
  dNow.getMinutes();
// To show current date to card
$("#previous").text("Today");
$("#prevDate").text(localdate);

function previousDay() {
  var CurrentDate = new Date();
  CurrentDate.setDate(CurrentDate.getDate() - 1);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#previous").text("Previous Day");
  $("#prevDate").text(localdate);
}

function previousWeek() {
  var CurrentDate = new Date();
  CurrentDate.setDate(CurrentDate.getDate() - 7);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#previous").text("Previous Week");
  $("#prevDate").text(localdate);
}

function previous_month() {
  var CurrentDate = new Date();
  console.log("Current date:", CurrentDate);
  CurrentDate.setMonth(CurrentDate.getMonth() - 1);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#previous").text("Previous Month");
  $("#prevDate").text(localdate);
}

function previous_threeMonth() {
  var CurrentDate = new Date();
  CurrentDate.setMonth(CurrentDate.getMonth() - 3);
  var localdate =
    CurrentDate.getMonth() +
    1 +
    "/" +
    CurrentDate.getDate() +
    "/" +
    CurrentDate.getFullYear() +
    " " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes();
  $("#previous").text("Previous 3 Months");
  $("#prevDate").text(localdate);
}
