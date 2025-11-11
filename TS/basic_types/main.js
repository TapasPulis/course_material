// ! Primitive and Union Types
var userName = "Bro";
var highScore = 90;
var isLoggedIn = true;
var countdown = 10;
// ! Structured Data (Arrays and Objects)
var gameTages = ["Goofydude123", "Plankton5", "TonySoprano"];
var currentScore = {
    points: 50,
    isFinal: true,
};
var userSetting;
// ! Functions
var logError = function (errorMsg) {
    console.error(errorMsg);
};
logError("Something went wrong");
var calculatePercentage = function (part, whole) {
    return (part / whole) * 100;
};
var percentageResult = calculatePercentage(1, 100);
console.log(percentageResult);
