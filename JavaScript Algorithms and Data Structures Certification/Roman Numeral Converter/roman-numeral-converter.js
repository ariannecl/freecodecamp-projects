function convertToRoman(num) {
    let numArr = String(num).split("").map((num)=>{
        return Number(num);
      })
    let romanNum = '';
    
    if (numArr.length == 4) {
      let thousands = numArr.shift();
      romanNum += 'M'.repeat(thousands);
    }
  
    if (numArr.length == 3) {
      let hundreds = numArr.shift();
      if (hundreds == 9) {
        romanNum += 'CM';
      } else if (hundreds >= 5) {
        romanNum += 'D' + 'C'.repeat(hundreds - 5);
      } else if (hundreds == 4) {
        romanNum += 'CD';
      } else {
        romanNum += 'C'.repeat(hundreds);
      }
    }
  
    if (numArr.length == 2) {
      let tens = numArr.shift();
      if (tens == 9) {
        romanNum += 'XC';
      } else if (tens >= 5) {
        romanNum += 'L' + 'X'.repeat(tens - 5);
      } else if (tens == 4) {
        romanNum += 'XL';
      } else {
        romanNum += 'X'.repeat(tens);
      }
    }
  
    if (numArr.length == 1) {
      let ones = numArr.shift();
      if(ones == 9) {
        romanNum += 'IX';
      } else if(ones >= 5) {
        romanNum += 'V' + 'I'.repeat(ones - 5);
      } else if(ones == 4) {
        romanNum += 'IV';
      } else {
        romanNum += 'I'.repeat(ones);
      }
    }
  
    
    return romanNum;
  }
  
  console.log(convertToRoman(36));
  convertToRoman(36);