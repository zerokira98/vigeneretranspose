//-----------DOM manipulation
M.AutoInit();
$(document).ready(function(){
  $(".splashscreen").css("top","-100%").css("opacity","0.20");
});

$(".copyboard").on("click", function() {
  event.preventDefault();
  $("#encoded").select();
  document.execCommand("copy");
   M.toast({html: 'Text copied to clipboard'});
});
$(".encrypt").on("click", function () {
   event.preventDefault();
   var metode = $(".caraenkrip").val();
   var plain = $("#textarea1").val();
   var key1 = $("#ekey1").val();
   if (metode == 1) {
      var key2 = $("#ekey2").val();
      var nex = enkripkotak(plain,key1,key2);
   }
});
$(".decrypt").on("click", function () {
  event.preventDefault();
    var plain = $("#textarea2").val();
    var key1 = $("#dkey1").val();
    var metode = $(".caradekrip").val();
      if (metode == 1) {
        var key2 = $("#dkey2").val();
        var newx = dekripkotak(plain,key1,key2);
  }
});
/*
$(".caraenkrip").change(function(){
  if($(this).val()==2){
  $("#ekey2").parent().attr("style","display:none");
  $("#ekey1").parent().removeClass("s6");
  $("#ekey1").parent().addClass("s12");
}
if ($(this).val()==1) {
  $("#ekey2").parent().attr("style","display:block");
  $("#ekey1").parent().removeClass("s12");
  $("#ekey1").parent().addClass("s6");
}
});
$(".caradekrip").change(function(){
  if($(this).val()==2){
  $("#dkey2").parent().attr("style","display:none");
  $("#dkey1").parent().removeClass("s6");
  $("#dkey1").parent().addClass("s12");
}
if ($(this).val()==1) {
  $("#dkey2").parent().attr("style","display:block");
  $("#dkey1").parent().removeClass("s12");
  $("#dkey1").parent().addClass("s6");
}
});
*/
