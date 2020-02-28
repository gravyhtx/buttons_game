//////////////
/// FLASH ////
//////////////

function christmas(){
var rand1 = Math.floor(Math.random() * 3)
var rand2 = Math.floor(Math.random() * 3)
$(".1").css('background-color', 'lightsteelblue')
$(".2").css('background-color', 'lightsteelblue')
$(".3").css('background-color', 'lightsteelblue')
$(".4").css('background-color', 'lightsteelblue')
$(".5").css('background-color', 'lightsteelblue')
$(".6").css('background-color', 'lightsteelblue')
$(".7").css('background-color', 'lightsteelblue')
$(".8").css('background-color', 'lightsteelblue')
$(".9").css('background-color', 'lightsteelblue')
$(".10").css('background-color', 'lightsteelblue')
$(".11").css('background-color', 'lightsteelblue')
$(".12").css('background-color', 'lightsteelblue')
    if (rand1==1){              
    $(".1").css('background-color', 'white')}
    if (rand2==3 || rand1==1){              
    $(".2").css('background-color', 'white')}
    if (rand1==2){              
    $(".3").css('background-color', 'white')}
    if (rand2==1 || rand2==2){              
    $(".4").css('background-color', 'white')}
    if (rand1==3){              
    $(".5").css('background-color', 'white')}
    if (rand2==1 || rand1==3){              
    $(".6").css('background-color', 'white')}
    if (rand1==2 || rand2==1){              
    $(".7").css('background-color', 'white')}
    if (rand2==3 || rand1==2){              
    $(".8").css('background-color', 'white')}
    if (rand1==1 || rand2==3){              
    $(".9").css('background-color', 'white')}
    if (rand2==2 || rand1==1){              
    $(".10").css('background-color', 'white')}
    if (rand1==3 || rand2==2){              
    $(".11").css('background-color', 'white')}
    if (rand2==1 || rand1==3){              
    $(".12").css('background-color', 'white')}
    if (isCorrect==true){score++/1.5}
    console.log(score)
}


// //////////////
// // BATTERY ///
// //////////////
    
// if(navigator.getBattery) {
//     navigator.getBattery().then(function(battery) {

//     console.warn("Battery charging: ", battery.charging);
//     console.warn("Initial battery level: ", battery.level);

//     var node = document.getElementById("batteryLevel");
//     var change = function(e) {
//         console.warn("Battery level change: ", battery.level);
//         var perc = Math.floor(battery.level * 100) + "%";
//         node.style.width = perc;
//         node.innerHTML = perc;
//     };
    
//     var chargeChange = function() {
//         console.warn("Battery charge change: ", battery.charging);
//         var chargeNode = document.getElementById("chargingStatus");
//         chargeNode.innerHTML = "<span style='color:" + (battery.charging ? "green" : "red") + "'>" + (battery.charging ? "Charging" : "NOT Charging") + "</span>";
//     };

//     battery.addEventListener("chargingchange", chargeChange, false);
//     battery.addEventListener("chargingtimechange", function(e) {
//         console.warn("Battery charge time change: ", battery.chargingTime);
//     }, false);
//     battery.addEventListener("dischargingtimechange", function(e) {
//         console.warn("Battery discharging time change: ", battery.dischargingTime);
//     }, false);
//     battery.addEventListener("levelchange", change, false);

//     change();
//     chargeChange();
        
//     });
// }
// else {
//     console.warn("Your browser does not have the navigator.mozBattery object");
// }