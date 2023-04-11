// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a
let tvNames = []
inventory.map(item => {
    tvNames.push(item.name)
})

console.log(tvNames)

// Opdracht 1b
let soldOut = []

inventory.filter(tv => {
    if (tv.originalStock - tv.sold <= 0) {
        soldOut.push(tv)
    }
})

console.log(soldOut)

// Opdracht 1c
let ambiLight = []

inventory.filter(tv => {
    if (tv.options.ambiLight === true) {
        ambiLight.push(tv)
    }
})

console.log(ambiLight)

// Opdracht 1d
// inventory.sort((a, b) => {
//     return a.price - b.price
// })

console.log(inventory)

// Opdracht 2a
let sold = inventory.reduce((acc, item) => {
    return acc + item.sold;
}, 0);

console.log(sold);

// Opdracht 2b
const locationSold = document.getElementById('sold');
locationSold.innerHTML = `Amount of TV's sold: <span class="green-text">${sold}</span`;

// Opdracht 2c
let bought = inventory.reduce((acc, item) => {
    return acc + item.originalStock
}, 0)

console.log(bought)

// Opdracht 2d
const locationBought = document.getElementById('bought');
locationBought.innerHTML = `Amount of TV's bought: <span class="blue-text">${bought}</span`;

// Opdracht 2e
const locationInStock = document.getElementById('in-stock');
locationInStock.innerHTML = `Amount of TV's in stock: <span class="red-text">${bought - sold}</span>`;

// Opdracht 3a & b

function brands(inventory) {
    let brands = []

    inventory.map(brand => {
        brands.push(brand.brand)
    })

    return brands
}

const locationBrands = document.getElementById('brands');
const brandsList = brands(inventory).map(brand => `<li>${brand}</li>`).join('');
locationBrands.innerHTML = `Brands: <ul>${brandsList}</ul>`;

// Opdracht 4a

function generateTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

// Opdracht 4b
function generatePrice(tv) {
    return `${tv.price}`;
}

// Opdracht 4c
function generateScreenSizes(tv) {
    return tv.availableSizes.map(screenSize => `${screenSize} inch (${screenSize * 2.54} cm)`).join(" | ");
}

// Opdracht 4d
function generateProduct(tv) {
    return `${generateTvName(tv)}<br />${generatePrice(tv)}<br />${generateScreenSizes(tv)}<br /><br />`
}

// Opdracht 4e
function generateProductList(inventory) {
    return inventory.map(tv => `${generateTvName(tv)}<br />${generatePrice(tv)}<br />${generateScreenSizes(tv)}<br /><br />`)
}

// Bonus 1
function fSoldOut(inventory) {
    let soldOut = []

    inventory.filter(tv => {
        if (tv.originalStock - tv.sold <= 0) {
            soldOut.push(tv)
        }
    })
    console.log(soldOut)
    return soldOut
}

function fAmbiLight(inventory) {
    let ambiLight = []

    inventory.filter(tv => {
        if (tv.options.ambiLight === true) {
            ambiLight.push(tv)
        }
    })
    console.log(ambiLight)
    return ambiLight
}

// function fSortPrice(inventory) {
//     inventory.sort((a, b) => {
//         console.log(a.price - b.price)
//         return a.price - b.price
//     })
// }

const buttonSortPrice = document.getElementById('sort-price');
const buttonAmbilight = document.getElementById('ambilight');
const buttonSoldOut = document.getElementById('sold-out');
const productList = document.getElementById('product-list');

buttonSortPrice.addEventListener('click', () => {fSortPrice(inventory)})
buttonAmbilight.addEventListener('click', () => {fAmbiLight(inventory)})
buttonSoldOut.addEventListener('click', () => {fSoldOut(inventory)})

// Bonus 2

function fSortPrice(inventory) {
    return inventory.slice().sort((a, b) => a.price - b.price);
}

const locationProduct = document.getElementById('product-list');
locationProduct.innerHTML = generateProductList(inventory).join('');

buttonSortPrice.addEventListener('click', () => {
    const sortedInventory = fSortPrice(inventory);
    productList.innerHTML = generateProductList(sortedInventory);
});

buttonAmbilight.addEventListener('click', () => {
    const ambiLightInventory = fAmbiLight(inventory);
    productList.innerHTML = generateProductList(ambiLightInventory);
});

buttonSoldOut.addEventListener('click', () => {
    const soldOutInventory = fSoldOut(inventory);
    productList.innerHTML = generateProductList(soldOutInventory);
});