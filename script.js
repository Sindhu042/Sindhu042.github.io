var data1 = {image : "./photo2.jpeg",  name : "JANJARAPU SINDHUJA", deisgnation : "Student"};
var data2 = {image : "./photo3.jpeg",  name : "SINDHU", deisgnation : "Software Intern"};
var isData1 = true;
var displayData;
var changePic = function(){
    if(isData1){
        displayData = data2;
        isData1 = false;
    }
    else{
        displayData = data1;
        isData1 = true;
    }
    document.getElementById("myImage").src = displayData.image;
    document.getElementById("myName").innerHTML = displayData.name;
    document.getElementById("myDesgn").innerHTML = displayData.deisgnation;
}