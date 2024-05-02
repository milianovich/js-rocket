var timer = null;
var CountDownNumber = 10;

var changeState= function(state){
    document.body.classname = 'body-state' + state;
    clearInterval(timer);
    if(state == 2) {
        document.getElementById('countdown').innerHTML= CountDownNumber;
        CountDownNumber = CountDownNumber -1;
        if (countdownnumber <=0){
            changeState(3);
        }
    }

};
else if (state == 3) {
    var success = setTimeout (function(){
        var randomNumber = math.round(math.random()*10);
        // success
        if (randomNumber > 5) {
            changeState (4);
        } else {
            changeState(5); // oh no
        }
        }, 2000);
   
   
    };
