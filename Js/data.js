class Product {
  constructor(
    nuevoId,
    nuevaMarca,
    nuevoModelo,
    nuevoPrecio,
    nuevaImg,
    nuevoAlt,
    newAmount
  ) {
    (this.id = nuevoId),
      (this.marca = nuevaMarca),
      (this.modelo = nuevoModelo),
      (this.price = nuevoPrecio),
      (this.img = nuevaImg),
      (this.alt = nuevoAlt),
      (this.amount = newAmount);
  }
}
const productsArray = [];

productsArray.push(
  new Product(
    1,
    "HyperX",
    "Alloy Core",
    6000,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    2,
    "Razer",
    "BlackWidow",
    10000,
    "images/keyboard_hyperX.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    3,
    "Corsair",
    "K55",
    12000,
    "images/keyboard_corsair.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    4,
    "HyperX",
    "Alloy Core FPS",
    8000,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    5,
    "Razer",
    "k780",
    7000,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    6,
    "HyperX",
    "Alloy Core FPS",
    7600,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    7,
    "HyperX",
    "Alloy Core DUO PLUS",
    16000,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    8,
    "Razer",
    "xl-22",
    10600,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    9,
    "HyperX",
    "SuperStream",
    8600,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    10,
    "Corsair",
    "k-250",
    9900,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    11,
    "Logitech",
    "RainbowGamer",
    7800,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
productsArray.push(
  new Product(
    12,
    "Logitech",
    "Titanium",
    14000,
    "images/keyboard_blackwidow.jpg",
    "keyboard",
    1
  )
);
