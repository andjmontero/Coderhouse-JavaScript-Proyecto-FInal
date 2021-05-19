//CARGA DE CARDS HTML
generateCards(productsArray);

//App
$(document).ready(function () {
  if (localStorage.getItem("cart") != undefined) {
    updateValues("cart");
    updateColorBtn();
  }
  addClick();
  $("#clear").click(function () {
    clearCart();
  });
  priceRange();
});

//Arrays
let cart = JSON.parse(localStorage.getItem("cart"));

// Esta parte setea el carrito y el local storage para que no retorne null y la funcion addProduct no devuelva error el metodo .find  .(En el caso de que el localSotorage no haya tenido ninguna entrada o sea borrado)
if (cart === null) {
  clearCart();
}
//FUNCIONES

function addProduct(event) {
  let clickedItem = cart.find((element) => element.id == event.target.id);
  if (clickedItem === undefined) {
    let selectedProduct = productsArray.find(
      (element) => element.id == event.target.id
    );
    cart.push(selectedProduct);
    $(event.target).text("Added to Cart").css("color", "#776363");
    cartAnimation();
  } else {
  }
  saveLocal("cart", JSON.stringify(cart));
}

function updateHtmlCart(list) {
  $("#cart").empty();
  for (const product of list) {
    $("#cart").append(` <div class=' row cart-item '>
      <div class='col-5 img'>
          <img src='${product.img}' height='60px' width='120px' alt='product'>
      </div>
      <div class='col-5 text-center item-info'>
          <h6>${product.marca}<br>${product.modelo}</h6>
          <h5>$${product.price}</h5>
          <button class='remove-item' id="${product.id}">Remove</button>
      </div>
      <div class='col-2 item-amount'>
          <div>
             <i class='fas fa-chevron-up add-item' onclick="addAmount(${product.id})"></i>
              <p class='item-amount' >${product.amount}</p>
              <i class='fas fa-chevron-down substract-item' onclick="substractAmount(${product.id})"></i>
          </div>
      </div>
  </div>`);
  }
  removeItem();
}

function saveLocal(key, value) {
  localStorage.setItem(key, value);
}

function updateCart() {
  let storedCartItems = JSON.parse(localStorage.getItem("cart"));
  let cartItems = [];
  for (const item of storedCartItems) {
    cartItems.push(
      new Product(
        item.id,
        item.marca,
        item.modelo,
        item.price,
        item.img,
        item.alt,
        item.amount
      )
    );
  }
}

function clearCart() {
  $(".btn_add_to_cart").text("Add to Cart").css("color", "white");
  $("#cart").empty();
  localStorage.removeItem("cart");
  cart = [];
  cartItems = [];
  $("#cart-total").text(0);
  $("#items-number").text(0);
}

function removeItem() {
  $(".remove-item").click(function (event) {
    let cartContent = JSON.parse(localStorage.getItem("cart"));
    let productRemoved = cartContent.find(
      (product) => product.id == event.target.id
    );
    let newCart = cartContent.filter(
      (element) => element.id !== productRemoved.id
    );
    cart = newCart;
    saveLocal("cart", JSON.stringify(newCart));
    updateHtmlCart(newCart);
    updateValues("cart");
    $(`#${productRemoved.id}`).text("Add to Cart").css("color", "white");
  });
}

function updateValues(list) {
  let updatedItems = JSON.parse(localStorage.getItem(list));
  let totalCart = 0;
  for (let item of updatedItems) {
    totalCart += item.price * item.amount;
  }
  let itemsTotal = 0;
  for (let item of updatedItems) {
    itemsTotal += item.amount;
  }
  $("#items-number").text(itemsTotal);
  $("#cart-total").text(totalCart);
  updateHtmlCart(JSON.parse(localStorage.getItem("cart")));
}

function addAmount(item) {
  let storageItems = JSON.parse(localStorage.getItem("cart"));
  let itemInCart = storageItems.find((pro) => pro.id == item);
  itemInCart.amount = itemInCart.amount + 1;
  saveLocal("cart", JSON.stringify(storageItems));
  updateValues("cart");
}
function substractAmount(item) {
  let storageItems = JSON.parse(localStorage.getItem("cart"));
  let itemInCart = storageItems.find((pro) => pro.id == item);
  if (itemInCart.amount > 1) {
    itemInCart.amount = itemInCart.amount - 1;
    saveLocal("cart", JSON.stringify(storageItems));
    updateValues("cart");
  } else {
  }
}
function priceRange() {
  $("#queryList").click(function (e) {
    let min = $("#minQuery").val();
    let max = $("#maxQuery").val();
    const filteredProducts = productsArray.filter(function (element) {
      return element.price >= min && element.price <= max;
    });
    $("#productos").empty();

    if (filteredProducts == 0) {
      $("#productos").append(
        `<h2 class="no-items">No items available in that price range.</h2>`
      );
      $(".range").html("<button class='reset'>Reset</button>");
    } else {
      generateCards(filteredProducts);
      addClick();
      updateColorBtn();
    }
  });
}

function generateCards(array) {
  for (const element of array) {
    $("#productos")
      .append(`<div class='card text-center  col-sm-5 col-md-4 col-lg-3'>
      <img src='${element.img}' class='card-img-top' alt='${element.alt}'>
      <div class='card-body'>
          <div class='text-center '>
              <h4 class='card-title'>${element.marca}</h4><h5>${element.modelo}</h5>
          </div>
          <p class='card-text'>$${element.price}</p>
          <button  class='btn_add_to_cart ${element.id}' id = '${element.id}'>Add to Cart</button>
      </div>
    </div>`);
  }
}

function updateColorBtn() {
  let itemsSaved = JSON.parse(localStorage.getItem("cart"));
  for (let item of itemsSaved) {
    $(`.${item.id}`).text("Added to Cart").css("color", "grey");
  }
}

function addClick() {
  $(".btn_add_to_cart").click(function (e) {
    addProduct(e);
    removeItem();
    updateValues("cart");
  });
}

//Animaciones
function openNav() {
  document.getElementById("mySidebar").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function cartAnimation() {
  $(".fa-shopping-cart").css("color", "white").fadeOut(200).fadeIn(200);
}
