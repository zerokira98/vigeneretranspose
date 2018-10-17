function enkripsitransposisi(plain,key) {
  var nplain = plain.split("");
  var nkey = key.split(""),count=0,encoded="";
 var temparrlength = Math.floor(nplain.length/nkey.length);
 if (nplain.length%nkey.length!=0) {
   temparrlength +=1;
 }
 console.log(temparrlength);
  var arr2d = new Array(temparrlength);
  var arr2d2 = new Array(temparrlength);
  for (var i = 0; i < temparrlength; i++) {
  arr2d[i] = new Array(nkey.length);
  arr2d2[i] = new Array(nkey.length);
 }
 // nullify
 for (var i = 0; i < temparrlength; i++) {
   for (var s = 0; s < nkey.length; s++) {
     arr2d[i][s] = "-";
     arr2d2[i][s] = "-";
   }
 }
 //insert to 2Darray
 for (var i = 0; i < nplain.length; i++) {
   arr2d[count][i%(nkey.length)] = nplain[i];
   if (i!=0 && (i+1)%nkey.length==0) {//ganti baris
     count++;
   }
 }
 //encode to 2Darray2
 for (var i = 0; i < temparrlength; i++) {
   for (var j = 0; j < nkey.length; j++) {
         arr2d2[i][j] = arr2d[i][(nkey[j])-1];
   }
 }
 //left to right, then next row
   for (var i = 0; i < arr2d.length; i++) {
     for (var j = 0; j < arr2d[i].length; j++) {
     encoded += arr2d2[i][j];
     }
//     encoded += " ";
   }
   $("#encoded").val(encoded);
}
function dekripsitransposisi(plain,key) {
  var nplain = plain.split("");
  var nkey = key.split(""),count=0,decoded="";
  var temparrlength = Math.floor(nplain.length/nkey.length);
//  if (nplain.length%nkey.length!=0) {
//   temparrlength +=1;
//  }
  console.log(temparrlength);
  var arr2d = new Array(temparrlength);
  var arr2d2 = new Array(temparrlength);
  for (var i = 0; i < temparrlength; i++) {
  arr2d[i] = new Array(nkey.length);
  arr2d2[i] = new Array(nkey.length);
  }
  // nullify
  for (var i = 0; i < temparrlength; i++) {
   for (var s = 0; s < nkey.length; s++) {
     arr2d[i][s] = "-";
     arr2d2[i][s] = "-";
   }
  }
  //insert to 2Darray
  for (var i = 0; i < nplain.length; i++) {
   arr2d[count][i%(nkey.length)] = nplain[i];
   if (i!=0 && (i+1)%nkey.length==0) {//ganti baris
     count++;
   }
  }
  //encode to 2Darray2
  for (var i = 0; i < temparrlength; i++) {
   for (var j = nkey.length; j > 0; j--) {
         arr2d2[i][j] = arr2d[i][(nkey[j])-1];
   }
  }
  console.log(arr2d);
  console.log(arr2d2);
  //left to right, then next row
   for (var i = 0; i < arr2d.length; i++) {
     for (var j = 0; j < arr2d[i].length; j++) {
     decoded += arr2d2[i][j];
     }
//     decoded += " ";
   }
   $("#decoded").val(decoded);
}
function vigenereEnChiper(array,key) {
var key= key.split("");
  var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var newalfa = alfabet.split("");
  var alfanum = 0;
  for (var i = 0; i < key.length; i++) {
    for (var j = 0; j < newalfa.length-10; j++) {
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
    console.log(key);
    console.log(array);
return array;
}
function vigeneredeChiper(array,key) {
var key= key.split("");
var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var newalfa = alfabet.split("");
var alfanum = 0;
for (var i = 0; i < key.length; i++) {
  for (var j = 0; j < newalfa.length-10; j++) {
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
  console.log(key);
  console.log(array);
  return array;
}
