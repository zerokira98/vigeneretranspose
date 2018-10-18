
function enkripkotak(plain,key1,key2){
  $("#encoded").html("");
  var nplain = plain.split("");
  var key1 = key1;
  var key2 = key2 ;var count=0,encoded="";
  if ((key2*key2)<nplain.length) {
    alert("Key 2 terlalu kecil");
    return null;
  }
  //new key2xkey2 array
var arr2d = new Array(key2);
  for (var i = 0; i < key2; i++) {
    arr2d[i] = new Array(key2);
  }
// nullify with " "
  for (var i = 0; i < key2; i++) {
    for (var s = 0; s < key2; s++) {
      arr2d[i][s] = " ";
    }
  }
  console.log(nplain);
//call vignere function
nplain = vigenereEnChiper(nplain,key1);
console.log(nplain);
//insert to 2Darray, kiri atas -> kanan atas ->bawah
  for (var i = 0; i < nplain.length; i++) {
    arr2d[count][i%(key2)] = nplain[i];
    if (i!=0 && (i+1)%key2==0) {
      count++;
    }
  }
//baca dari kiri atas -> kiri bawah -> kanan
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
  //insert to 2D Array
  for (var i = 0; i < nchiper.length; i++) {
    arr2d[count][i%(key2)] = nchiper[i];
    if (i!=0 && (i+1)%key2==0) {
      count++;
    }
  }
  console.log(arr2d);
//membuat array1D utk digunakan di fungsi vigeneredeChiper()
var arraydechiper = new Array(key2*key2);
count=0;
//baca dari kiri atas -> kiri bawah -> kanan
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
      arraydechiper[count] = arr2d[j][i];
      count++;
    }
  }
  console.log(arraydechiper);
  arraydechiper = vigeneredeChiper(arraydechiper,key1);
  console.log(arraydechiper);
    for (var i = 0; i < arraydechiper.length; i++) {
      decoded += arraydechiper[i];
    }
  $("#decoded").append(decoded);//print to html
return null;
}

function vigenereEnChiper(array,key) { //array1D
  var key= key.split("");
  var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var newalfa = alfabet.split("");
  var alfanum = 0;
    for (var i = 0; i < key.length; i++) {
      for (var j = 61; j >= 0; j--) {
        //merubah huruf ->angka
        if (key[i]==newalfa[j]) {
          key[i]=j;
        }
      }
    }
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < newalfa.length; j++) {
        if (array[i]==newalfa[j]) {
          alfanum = (j+(key[i%key.length]))%62;
        }
      }
      if (array[i]!=" ") {
          array[i]=newalfa[alfanum];
      }
    }
return array;
}
function vigeneredeChiper(array,key) {
  var key= key.split("");
  var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var newalfa = alfabet.split("");
  var alfanum = 0;
    for (var i = 0; i < key.length; i++) {
      for (var j = 61; j >= 0; j--) {
        //merubah huruf->angka
        if (key[i]==newalfa[j]) {
          key[i]=j;
        }
      }
    }
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < newalfa.length; j++) {
        if (array[i]==newalfa[j]) {
          alfanum = (62+(j-key[i%key.length])%62)%62;
        }
      }
      if (array[i]!=" ") {
          array[i]=newalfa[alfanum];
      }
    }
  return array;
}
