// 1- Find at least 3 conversion formulas you want to use with your multiconverter
// I. Conversion from CHF to EUR:
    //     result = chf * 1.0;
// II. Conversion Miles to KM:
    // result = mph * 1.609344;
// III. Conversion C° to Farenheit:
// (celsius * 9/5) + 32 = Farnheit

// 2- Write a function for each formula
// I. Conversion from CHF to EUR:
function chfToEurConversion(chf){
   var msg1 = "The conversion from ";
   var msg2 = " CHF is ";
   var msg3 = " EUR."
   result = chf * 1.0;
   return msg1 + chf.toString() + msg2 + result.toString() + msg3;
}
console.log(chfToEurConversion(30));


// // // II. Conversion Miles to KM:
function speedConvert(mph){
    var msg4 = "The conversion from ";
    var msg5 = " mph is ";
    var msg6 = " kmh.";
    result = mph * 1.609344;
    return msg4 + mph.toString() + msg5 + result.toString() + msg6;
}
console.log(speedConvert(30));

// // // III. Conversion C° to Farenheit:
function tempConverter(celsius){
    var msg7 = "The conversion from ";
    var msg8 = " Celsius is ";
    var msg9 = " Farenheit.";
    result = (celsius * 9/5) + 32;
    return msg7 + celsius.toString() + msg8 + result.toString() + msg9;
}
console.log(tempConverter(21.5));


// 3- Use the window.prompt() function to get inputs from the user 
var userInput = window.prompt("Enter your name: ");
console.log(userInput);


// 4- Display the conversion results in the browser console
// Quit when user finished converting the values
// // 
// allFunctions = ["chfToEurConversion", "speedConvert", "tempConvert"];
//  for (i = 0; i < allFunctions.length; i = i + 1){
//      console.log(funct[i]);}


// If the user chooses a non supported conversion, display that in the console

    
    