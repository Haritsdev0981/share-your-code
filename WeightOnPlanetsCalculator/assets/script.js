var planet;
var PW;

function Mercury(){

    var weight = document.getElementById("inputWe").value;
    weight=Number(weight);
    
    if(isNaN(weight) || weight==" "){
        alert('enter valid weight');
    }else{
        var FinalW = 0.37*weight;
        document.getElementById('mercury').innerHTML = FinalW;
        var VW = 0.91*weight;
        document.getElementById('venus').innerHTML = VW;
        var MW = 1/6*weight;
        document.getElementById('moon').innerHTML = MW;
        var MarsW = 0.38*weight;
        document.getElementById('mars').innerHTML = MarsW;
        var JW = 2.34*weight;
        document.getElementById('jupiter').innerHTML = JW;
        var SW = 0.93*weight;
        document.getElementById('saturn').innerHTML = SW;
        var UW = 0.92*weight;
        document.getElementById('uranus').innerHTML = UW;
        var NW = 1.12*weight;
        document.getElementById('neptune').innerHTML = NW;
        var PW = 0.083*weight;
        document.getElementById('pluto').innerHTML = PW;
    }
}

