var A99 = 0
var B15 = 0
var C40 = 0
var T34 = 0
var receipt = ''

function addToList(SKUButton) {
  var SKU = document.getElementById("checkoutUserInput").value
       if((SKU || SKUButton) === 'A99') {A99 += 1, addToReceipt(50)}
  else if((SKU || SKUButton) === 'B15') {B15 += 1, addToReceipt(30)}
  else if((SKU || SKUButton) === 'C40') {C40 += 1, addToReceipt(60)}
  else if((SKU || SKUButton) === 'T34') {T34 += 1, addToReceipt(99)}
  else {document.getElementById("error-hidden").innerHTML = 'Not a valid SKU'}
}

function Total() {
  total = (A99 * 50) + (B15 * 30) + (C40 * 60) + (T34 * 99) -
  ((Math.floor(A99/3)) * 20) - ((Math.floor(B15/2)) * 15)
  document.getElementById("total-hidden").innerHTML = total
}

function reset() {
  A99 = 0
  B15 = 0
  C40 = 0
  T34 = 0
  resetUserInput()
  document.getElementById("total-hidden").innerHTML = ''
  document.getElementById("receipt-hidden").innerHTML = ''
  receipt = ''
}

function addToReceipt(amount) {
  receipt += ' +' + amount
  if(amount === 50 && Number.isInteger(A99/3)) {
    receipt += ' -20'
  }
  else if (amount === 30 && Number.isInteger(B15/2)) {
    receipt += ' -15'
  }
  else {}
  document.getElementById("receipt-hidden").innerHTML = receipt
}

function resetUserInput() {
  document.getElementById("checkoutUserInput").value = ''
  document.getElementById("error-hidden").innerHTML = ''
}

function resetError() {
  document.getElementById("error-hidden").innerHTML = ''
}