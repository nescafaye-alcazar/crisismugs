if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

//remove all items
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-summary')
    var cartItems = document.getElementsByClassName('cart-row')[0]
    var cartProducts = document.getElementsByClassName('cart-summary')[0]
    var total = document.getElementsByClassName('cart-total-price')[0].innerText

    var titlesum = []
    var pricesum = []
    var imagesum = []
    var qtysum = []
    
    while (cartItems.hasChildNodes()) {
        var title = document.getElementsByClassName('cart-item-title')[0].innerText
        var price = document.getElementsByClassName('cart-price cart-column')[0].innerText
        var imageSrc = document.getElementsByClassName('cart-item-image')[0].src
        var qty = document.getElementsByClassName('cart-quantity-input')[0].value

        titlesum.push(title)
        pricesum.push(price)
        imagesum.push(imageSrc)
        qtysum.push(qty)

        cartItems.removeChild(cartItems.firstChild)
    }
    console.log(titlesum)
    console.log(pricesum)
    console.log(imagesum)
    console.log(qtysum)
    console.log(titlesum.length)

    for (var i = 0; i < titlesum.length; i++) {
        var summaryContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imagesum[i]}" width="100" height="100">
            <span class="cart-item-title">${titlesum[i]}</span>
        </div>
        <span class="cart-price cart-column">${pricesum[i]}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-quantity-input">${qtysum[i]}</span>
        </div>`
        cartRow.innerHTML = summaryContents
        cartProducts.append(cartRow)
    }
    document.getElementsByClassName('cart-total-price-summary')[0].innerText = total
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total
}

// MODALS
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");

// BTNS
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];
var span9 = document.getElementsByClassName("close9")[0];

// When the user clicks on the button, open the modal

window.onload = function(){ 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    btn2.onclick = function() {
        modal2.style.display = "block";
    }
    
    btn3.onclick = function() {
        modal3.style.display = "block";
    }
    
    btn4.onclick = function() {
        modal4.style.display = "block";
    }
    
    btn5.onclick = function() {
        modal5.style.display = "block";
    }
    
    btn6.onclick = function() {
        modal6.style.display = "block";
    }

    btn7.onclick = function() {
        modal7.style.display = "block";
    }
    
    btn8.onclick = function() {
        modal8.style.display = "block";
    }
    
    btn9.onclick = function() {
        modal9.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
    }
    span4.onclick = function() {
        modal4.style.display = "none";
    }
    span5.onclick = function() {
        modal5.style.display = "none";
    }
    span6.onclick = function() {
        modal6.style.display = "none";
    }
    span7.onclick = function() {
        modal7.style.display = "none";
    }
    span8.onclick = function() {
        modal8.style.display = "none";
    }
    span9.onclick = function() {
        modal9.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }if (event.target == modal2) {
        modal2.style.display = "none";
      }if (event.target == modal3) {
        modal3.style.display = "none";
      }if (event.target == modal4) {
        modal4.style.display = "none";
      }if (event.target == modal5) {
        modal5.style.display = "none";
      }if (event.target == modal6) {
        modal6.style.display = "none";
      }if (event.target == modal7) {
        modal7.style.display = "none";
      }if (event.target == modal8) {
        modal8.style.display = "none";
      }if (event.target == modal9) {
        modal9.style.display = "none";
      }
    }
};

$('.rating .fa-star').click(function() {
    $('.rating .active-rating').removeClass('active-rating');
    $(this).toggleClass('active-rating');
 });