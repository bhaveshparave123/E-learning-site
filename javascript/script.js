var menulist = document.getElementById('menulist').innerHTML;
menulist.style.maxHeight = "0px";

function togglemenu(){

  if(menulist.style.maxHeight == "0px")
{
  menulist.style.maxHeight="130px";
}

else
{
  menulist.style.maxHeight="0px";
}
}



function button(){
    document.getElementById("display").style="border:1px solid red";
}



function show(){
    document.getElementById("show").style="display:block";
}

function wanish(){
    document.getElementById("show").style= "display:none";

}

// for(var a = 1; a<=15; a++){
//     console.log("hello this is bhavesh");
// }