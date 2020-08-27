

var mesNum = []
var numGagnants = []
var win = 0;

$(".numero").click(function(){
  if(mesNum.length < 6){
    $(this).toggleClass('selected');
  }else{
    $(this).removeClass('selected');
  }

  if($.inArray(parseInt(event.target.id), mesNum)<0){
    if(mesNum.length < 6){
      mesNum.push(parseInt(event.target.id))
    }
  }else{
    mesNum.splice(mesNum.indexOf(parseInt(event.target.id)), 1)
  }

  $(".choix").text(mesNum.length)
  if (mesNum.length == 6) {
    $(".tirerNum").removeAttr("disabled")
  }else{
    $(".tirerNum").attr("disabled", true)
  }
  console.log(mesNum)
});



$(".tirerNum").click(function tirerNombres(e){
  e.preventDefault
  $(".numero").removeClass('colorWin')
  win = 0
  numGagnants.splice(0)

  for(var i = 0; i < 6; i++){
    var x = Math.ceil(Math.random()*50)
    if($.inArray(x, numGagnants) < 0){
        numGagnants.push(x)
    }else{
      numGagnants.splice(0)
      i = -1
    }
    console.log(numGagnants)
  }


  $(".num").html('')
  for(var i = 0; i < numGagnants.length; i++){
    $(".num").append('<span id = W'+ numGagnants[i] + '>' + numGagnants[i] + ' </span>')

  }
  won()
})


$(".effacerTirage").click(function(e){
  e.preventDefault
  numGagnants.splice(0)
  console.log(numGagnants)
  $(".num").html('')
  mesNum.splice(0)
  $(".numero").removeClass('selected colorWin')
  $(".choix").text(mesNum.length)
  $(".winNumber").html('')
  win = 0
  $(".tirerNum").attr("disabled", true)
})


function won(){
  for (var i = 0; i < mesNum.length; i++) {
    for (var j = 0; j < numGagnants.length; j++) {
      if(mesNum[i] == numGagnants[j]){
        win++;
        $("#" + numGagnants[j]).addClass('colorWin')
        $("#W" + numGagnants[j]).addClass('colorWin2')
      }
    }
  }
  $(".winNumber").text(win)
}
