
var products = {
  A99: {
    price: 50,
    quantity: 0,
    offerTrigger: 3,
    discount: 20
  },
  B15: {
    price: 30,
    quantity: 0,
    offerTrigger: 2,
    discount: 15
  },
  C40: {
    price: 60,
    quantity: 0,
    offerTrigger: -1,
    discount: 0
  },
  T34: {
    price: 99,
    quantity: 0,
    offerTrigger: -1,
    discount: 0
  }
}


var receipt = ''

var totalElement =  document.getElementById("total-hidden")
var receiptElement = document.getElementById("receipt-hidden")
var errorElement = document.getElementById("error-hidden")
var userInputElement = document.getElementById("checkoutUserInput")
 
function addToList(SKU = null) {
  SKU = (SKU === null) ? userInputElement.value : SKU

  errorElement.innerHTML = ''

  if(products[SKU] !== undefined) {
    products[SKU].quantity++
    addToReceipt(SKU)
  } else {
    errorElement.innerHTML = 'Not a valid SKU'
  }

  userInputElement.value = ''
  totalElement.innerHTML = ''
}

function showTotal() {
  let total = 0
  let productKeys = getProductKeys()

  for(var i = 0; i < productKeys.length; i++) {
    let key = productKeys[i]
    let product = products[key]
    let discount = 0

    if (product.offerTrigger > 0) {
      discount = Math.floor(product.quantity/product.offerTrigger) * (product.discount)
    }

    total += (product.quantity * product.price) - discount
    console.log(product)
  }

  totalElement.innerHTML = `Total:&nbsp;£` + total
}

function addToReceipt(SKU) {
  var product = products[SKU]

  receipt += `${SKU}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;£${product.price}<br/>`
  
  if (Number.isInteger(product.quantity/product.offerTrigger) && product.quantity/product.offerTrigger > 0) {
    receipt += `Discount:&nbsp;- £${product.discount}<br/>`
  }
  receiptElement.innerHTML = receipt
}

function resetProductQuantities() {
  let productKeys = getProductKeys()

  for(var i = 0; i < productKeys.length; i++) {
    let product = products[productKeys[i]]

    product.quantity = 0
  }
}

function getProductKeys() {
  let productKeys = []
  for (key in products) {
    productKeys.push(key)
  }
  return productKeys
}


function reset() {
  resetProductQuantities()
  totalElement.innerHTML = ''
  receiptElement.innerHTML = ''
  errorElement.innerHTML = ''
  receipt = ''
}
