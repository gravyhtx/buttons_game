//////////////
/// START ////
//////////////

$(".go").click(function (){

    $(".score").text("0")
    $(".go").attr("disabled", true);
    $(".elapsedT").text("00:00:00.000");
    bkgMusic.play();

    var countdown = setInterval(function() {
        
    if (seconds==80){
        start()
        warn.play()
        $(".status").text("UNAUTHORIZED USER DETECTED!")
        $(".status").css("color", "red") 
        }

    seconds--;
    if (seconds<78){popUp++}
    
    if(seconds <= 10) {$(".timer").css('color', 'red')}
    if(seconds >60) {popRand = Math.floor(Math.random() * 12)};
    if(seconds <=60 && seconds >=20) {popRand = Math.floor(Math.random() * 10)};
    if(seconds <20) {popRand = Math.floor(Math.random() * 6)};
    if (popRand == 1 && seconds < 78 && seconds>3 && popUp>=3 || popUp==10){
        dawarn.play();
        warning =true
    }
    
    if (seconds <= 0 || gameWin == true){

        clearInterval(started);
        stoppedDuration == 0;
        timeBegan = null;
        timeStopped = null;
        document.getElementById("display-area").innerHTML = "00:01:20.000";
        seconds=0;
        if (score>=100) {alert("YOU WIN!")}
        else {alert("YOU LOSE!")}
        $(".waves-effect").attr("disabled", true);   
        clearInterval(countdown)
    } 
    if (warning==true) {
        alert("WARNING! Unauthorized user detected!");
        popUp=0;
    };
        warning=false;
    }, 1000);
setTimeout(repeater,5);
})

//////////////
// REPEATER //
//////////////

function repeater(){
    
    isCorrect = false;
    if (score <= 33) {$("#myprogressBar").css('background-color', 'red')}
    if (score > 33 && score < 67) {$("#myprogressBar").css('background-color', 'yellow')}
    if (score >= 67 && score < 100) {$("#myprogressBar").css('background-color', 'green')}
    if (score >= 100 && seconds <= 120) {
        $("#myprogressBar").css('background-color', 'blue')
        $("#myprogressBar").width('100%')
    }
    let flasher = Math.floor(Math.random() * 9);
    let flashInt = setInterval(flashTimer, 150);
    i=0;
    function flashTimer() {           
        if (flasher == 1 && seconds>=0) {
            if (seconds<=60){
            christmas();
            i++;
        }
        if (i>=14){
            num = [Math.floor(Math.random() * numbersArr.length) +1];
            flasher==0;
            for (let btn of buttonClassesArray) {
                $(btn).css('background-color', 'lightsteelblue')
            }
            buttonLight(); 
            clearInterval(flashInt);
        }};
        }
    if (seconds !== 0) {
    $(".score").text(score)
    let element = document.getElementById("myprogressBar");
    num = [Math.floor(Math.random() * numbersArr.length) +1];

    function buttonLight(){       
        $("."+num).css('background-color', 'white');
        $("."+num).on("click", function() { 
            // console.log($(this).text())
            if (num==$(this).text() && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2);
                if (kRand == 0){k1.play();}
                if (kRand == 1){k2.play();}
                if (kRand == 2){k3.play();}                  
            $("."+num).css('background-color', 'lightsteelblue');
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%"; }
            repeater();}
            })
        }    
    }
    else {
        $(".waves-effect").attr("disabled", true);
        return;
    }
    buttonLight();
}

