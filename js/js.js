
function enkripkotak(plain,key1,key2){
  $("#encoded").html("");
  var nplain = plain.split("");
  var key1 = key1;
  var key2 = key2 ;var count=0,encoded="";
  //new key2xkey2 array
  if ((key2*key2)<nplain.length) {
    alert("Key 2 terlalu kecil");
    return null;
  }
  var arr2d = new Array(key2);
  for (var i = 0; i < key2; i++) {
  arr2d[i] = new Array(key2);
 }
// nullify
for (var i = 0; i < key2; i++) {
  for (var s = 0; s < key2; s++) {
    arr2d[i][s] = " ";
  }
}
//chiper
//nplain = chiperbykey(nplain,key1);
//vignere
nplain = vigenereEnChiper(nplain,key1);
//insert to 2Darray, kiri atas -> kanan atas ->bawah
for (var i = 0; i < nplain.length; i++) {
  arr2d[count][i%(key2)] = nplain[i];
  if (i!=0 && (i+1)%key2==0) {
    count++;
  }
}
  console.log(arr2d);
//kiri atas -> kiri bawah -> kanan
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
    encoded += arr2d[j][i];
    }
  }
  console.log(arr2d);
  $("#encoded").val(encoded);
}

function dekripkotak(chiper,key1,key2){
  $("#decoded").html("");
  var nchiper = chiper.split("");
  var key1 = key1;
  var key2 = key2 ;var count=0,decoded="";
  //new key2xkey2 array
  if ((key2*key2)<nchiper.length) {
    alert("Key 2 terlalu kecil");
    return null;
  }
  var arr2d = new Array(key2);
  for (var i = 0; i < key2; i++) {
  arr2d[i] = new Array(key2);
 }
// nullify
for (var i = 0; i < key2; i++) {
  for (var s = 0; s < key2; s++) {
    arr2d[i][s] = " ";
  }
}
//chiper shift
//nchiper = dechiperbykey(nchiper,key1);
//insert to 2D Array
for (var i = 0; i < nchiper.length; i++) {
  arr2d[count][i%(key2)] = nchiper[i];
  if (i!=0 && (i+1)%key2==0) {
    count++;
  }
}
//vignere
var arraydechiper = new Array(key2*key2);
count=0;
//read from left to right, then next row below(same as decrypt)
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
    arraydechiper[count] = arr2d[j][i];
    count++;
    }
  }
  arraydechiper = vigeneredeChiper(arraydechiper,key1);
  for (var i = 0; i < arraydechiper.length; i++) {
    decoded += arraydechiper[i];
  }
  $("#decoded").append(decoded);//print to html
return null;
}

function chiperbykey(nplain,key1) {
  var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var newalfa = alfabet.split("");
  var alfanum = 0;
  for (var i = 0; i < nplain.length; i++) {
    for (var j = 0; j < newalfa.length; j++) {
      //check what number from newalpha
      if (nplain[i]==newalfa[j]) {
        alfanum = (j+key1)%62;
      }
    }
    if (nplain[i]!=" ") {
        nplain[i]=newalfa[alfanum];
    }
  }
  return nplain;
}
function dechiperbykey(nchiper,key) {
var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var newalfa = alfabet.split("");
var alfanum = 0;
for (var i = 0; i < nchiper.length; i++) {
  for (var j = 0; j < newalfa.length; j++) {
    if (nchiper[i]==newalfa[j]) {
      alfanum = (62+(j-key)%62)%62;
    }
  }
  if (nchiper[i]!=" ") {
      nchiper[i]=newalfa[alfanum];
  }
}
 return nchiper;
}

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
      console.log("metode 1");
   }
   if (metode == 2){
     var nex = enkripsitransposisi(plain,key1);
     console.log("metode 2");
   }
   else{
     console.log("do nothing");
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
      if (metode == 2) {
        var newx = enkripsitransposisi(plain,key1);
  }else{
    console.log("do nothing");
  }
});
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
