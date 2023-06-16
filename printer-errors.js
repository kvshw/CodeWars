// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  // error will count the errors inside the string
  let error = 0;
  // total is the total length of the string it's created because it can be used at the end as a parameter
  let total = s.length;
  // iterate through the string and getting the length and items
  for (let i = 0; i < total; i++) {
    // check if the s[i] is between a & m
    if (s[i] < "a" || s[i] > "m") {
      // if so add 1 to error
      error++;
    }
  }
  // return the error number as a string literal
  return `${error}/${total}`;
}
