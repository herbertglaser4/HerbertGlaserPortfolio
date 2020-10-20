console.log("Hello, World!");
var points = 27;
var str = 8;
function pointbuy (){
    totalpoints
}
pointbuy();

function totalpoints() {
   document.getElementById("points").innerHTML = points;
 }


function plus() {
if(str<13 && str>=8){

  document.getElementById("demo").innerHTML = str = str + 1;
  document.getElementById("points").innerHTML = points= points - 1;
  }
  else if(str >=13 && str<15){
    document.getElementById("points").innerHTML = points= points - 2;
    document.getElementById("demo").innerHTML = str = str + 1;

  }
}
function minus() {
  if(str<=13 && str>8){
    document.getElementById("demo").innerHTML = str = str - 1;
    document.getElementById("points").innerHTML = points= points + 1;
    }
    else if(str >13 && str<=15){
      document.getElementById("points").innerHTML = points= points + 2;
      document.getElementById("demo").innerHTML = str = str - 1;
    }
    else{
    console.log("squirt")
    }
}