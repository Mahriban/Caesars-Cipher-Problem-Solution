function rot13(str) { // LBH QVQ VG!
    let newArr = [];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ?!.".split("");
    let rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ?!.".split("");
    let strArr=  str.split("");
    
    for (let i= 0; i<alphabet.length; i++){
      if (alphabet.indexOf(strArr[i]) != -1){
        newArr.push(rot13[alphabet.indexOf(strArr[i])])
      }
    }
    
      return newArr.join("")
    }
    
    
    // Change the inputs below to test
    rot13("SERR CVMMN!");
