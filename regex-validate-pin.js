function validatePIN(pin) {
  //checking if the pin has a length of 4 or 6
  if (pin.length == 4 || pin.length == 6) {
    //checking if string is included in pin
    // if(/^\d+$/.test(pin)){
    //   return true
    // }
    return /^\d+$/.test(pin);
  }
  return false;
}
