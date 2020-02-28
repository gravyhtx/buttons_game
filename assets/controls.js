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

    console.log(popRand)
    
    if (seconds <= 0 || gameWin == true){

        clearInterval(started);
        stoppedDuration == 0;
        timeBegan = null;
        timeStopped = null;
        document.getElementById("display-area").innerHTML = "00:01:20.000";

        seconds=0

        if (score>=100) {alert("YOU WIN!")}
        else {alert("YOU LOSE!")}
        $(".waves-effect").attr("disabled", true);   
        clearInterval(countdown)
    } 
    if (warning==true) {
        alert("WARNING! Unauthorized user detected!");
        popUp=0
        // dawarn.play();
    };
        warning=false
        console.log(seconds)
    }, 1000);
setTimeout(repeater,5)
})

//////////////
// REPEATER //
//////////////
                
function repeater(){

    console.log(score)
    console.log(gameWin)
    
    isCorrect = false;
    if (score <= 33) {$("#myprogressBar").css('background-color', 'red')}
    if (score > 33 && score < 67) {$("#myprogressBar").css('background-color', 'yellow')}
    if (score >= 67 && score < 100) {$("#myprogressBar").css('background-color', 'green')}
    if (score >= 100 && seconds <= 120) {
        $("#myprogressBar").css('background-color', 'blue')
        $("#myprogressBar").width('100%')
    }
    
    let flasher = Math.floor(Math.random() * 9)
    let flashInt = setInterval(flashTimer, 150);
    i=0;

    function flashTimer() {           
        if (flasher == 1 && seconds>=0) {
            if (seconds<=60){
            christmas();
            i++
        }
        if (i>=14){
            num = [Math.floor(Math.random() * numbersArr.length) +1];
            flasher==0
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
            buttonLight(); 
            clearInterval(flashInt)
        }};
        }

    if (seconds !== 0) {
    $(".score").text(score)
    let element = document.getElementById("myprogressBar");
    num = [Math.floor(Math.random() * numbersArr.length) +1];

    function buttonLight(){           
    if (num == 1) {
        $(".1").css('background-color', 'white')
        $(".1").on("click", function() { 
            if (num==1 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                if (kRand == 1){k2.play();}
                if (kRand == 2){k3.play();}                  
            $(".1").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%"; }
            repeater();}
            })
        }
    if (num == 2) {
        $(".2").css('background-color', 'white')
        $(".2").on("click", function() {
            if (num==2 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}
            $(".2").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
            })
        }
    if (num == 3 && seconds>=0) {
        $(".3").css('background-color', 'white')
        $(".3").on("click", function() {
            if (num==3 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}  
            $(".3").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
            })
        }
    if (num == 4) {
        $(".4").css('background-color', 'white')
        $(".4").on("click", function() {
            $(".4").css('background-color', 'lightsteelblue')
            if (num==4 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}  
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}    
            repeater();}
            });
    }
    if (num == 5) {
        $(".5").css('background-color', 'white')
        $(".5").on("click", function() {
            if (num==5 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();} 
            $(".5").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
    });
    }
    if (num == 6) {
        $(".6").css('background-color', 'white')
        $(".6").on("click", function() {
            if (num==6 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();} 
            $(".6").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
    });
    }
    if (num == 7) {
        $(".7").css('background-color', 'white')
        $(".7").on("click", function() { 
            if (num==7 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}
            $(".7").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
            })
        }
    if (num == 8) {
        $(".8").css('background-color', 'white')
        $(".8").on("click", function() {
            if (num==8 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}  
            $(".8").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
            })
        }
    if (num == 9) {
        $(".9").css('background-color', 'white')
        $(".9").on("click", function() {
            if (num==9 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();} 
            $(".9").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
            })
    }
    if (num == 10) {
        $(".10").css('background-color', 'white')
        $(".10").on("click", function() {
            $(".10").css('background-color', 'lightsteelblue')
            if (num==10 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}   
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}    
            repeater();}
            });
    }
    if (num == 11) {
        
        $(".11").css('background-color', 'white')
        $(".11").on("click", function() {
            if (num==11 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}  
            $(".11").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
            });
    }
    if (num == 12) {
        $(".12").css('background-color', 'white')
        $(".12").on("click", function() {
            if (num==12 && seconds>=0){ 
                isCorrect=true
                var kRand = Math.floor(Math.random() * 2)
                if (kRand == 0){k1.play();}
                else if (kRand == 1){k2.play();}
                else if (kRand == 2){k3.play();}   
                else if (kRand == 3){k4.play();}  
            $(".12").css('background-color', 'lightsteelblue')
            score+=1.23;
            if (score<=100){
            element.style.width = score + "%";}
            repeater();}
            });
    }}
    }
    else {
        $(".waves-effect").attr("disabled", true);
        return;
    }
    buttonLight();
}

