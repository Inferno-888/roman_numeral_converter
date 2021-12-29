function convertToRoman(num) {

  const ROMAN_NUMERALS_ONES = [[1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5, "V"], [6, "VI"], [7, "VII"], [8, "VIII"], [9, "IX"]];

  const ROMAN_NUMERALS_TENS = [[10, "X"], [20, "XX"], [30, "XXX"], [40, "XL"], [50, "L"], [60, "LX"], [70, "LXX"], [80, "LXXX"], [90, "XC"]];

  const ROMAN_NUMERALS_HUNDEREDS = [[100, "C"], [200, "CC"], [300, "CCC"], [400, "CD"], [500, "D"], [600, "DC"], [700, "DCC"], [800, "DCCC"], [900, "CM"]];

  const ROMAN_NUMERALS_THOUSANDS = [[1000, "M"], [2000, "MM"], [3000, "MMM"]];

  Object.freeze(ROMAN_NUMERALS_ONES);
  Object.freeze(ROMAN_NUMERALS_TENS);
  Object.freeze(ROMAN_NUMERALS_HUNDEREDS);
  Object.freeze(ROMAN_NUMERALS_THOUSANDS);

  let result = [];
  let loops = 0;
  let val = 1;
  let digit = "";

  while(num !== 0) {

    loops++;

    for(let i = 1; i < loops; i++) {
      val *= 10;
    }

    switch(val) {
      case 1: 
        digit = "ones";
        break;
      case 10: 
        digit = "tens";
        break;
      case 100:
        digit = "hundereds";
        break;
      case 1000:
        digit = "thousands";
        break;
    };

    if(digit === "ones") {
      for(let i = 0; i < ROMAN_NUMERALS_ONES.length; i++) {
        if(num % 10 === ROMAN_NUMERALS_ONES[i][0]) {
          result.unshift(ROMAN_NUMERALS_ONES[i][1]);
          break;
        }
      }
    } else if(digit === "tens") {
      for(let i = 0; i < ROMAN_NUMERALS_TENS.length; i++) {
        if((num % 10) * 10 === ROMAN_NUMERALS_TENS[i][0]) {
          result.unshift(ROMAN_NUMERALS_TENS[i][1]);
          break;
        }
      }
    } else if(digit === "hundereds") {
      for(let i = 0; i < ROMAN_NUMERALS_HUNDEREDS.length; i++) {
        if((num % 10) * 100 === ROMAN_NUMERALS_HUNDEREDS[i][0]) {
          result.unshift(ROMAN_NUMERALS_HUNDEREDS[i][1]);
          break;
        }
      }
    } else {
      for(let i = 0; i < ROMAN_NUMERALS_THOUSANDS.length; i++) {
        if((num % 10) * 1000 === ROMAN_NUMERALS_THOUSANDS[i][0]) {
          result.unshift(ROMAN_NUMERALS_THOUSANDS[i][1]);
          break;
        }
      }
    }

    num = Math.floor(num / 10);
    val = 1;

  }

  return result.join("");

}
