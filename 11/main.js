const russiaIMGUrl =
  "https://img2.joyreactor.cc/pics/post/Fantasy-art-красивые-картинки-ork-2468149.jpeg";
const USAIMGRUrl =
  "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
const UaIMGUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Flag_of_Ukraine_%28with_coat_of_arms_2%29.svg/2560px-Flag_of_Ukraine_%28with_coat_of_arms_2%29.svg.png";
const ItaliaIMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png";
const UKIMG =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png";
const FranciaIMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/1200px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png";
let totalsum = 0
const allProductPrices = []
const listOfProducts = [
  {
    productName: "Bread",
    productData: {
      weight: 200,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UA",
    productPrice: 11.75,
  },
  {
    productName: "Milk",
    productData: {
      weight: 300,
      certificate: false,
      dateOfExpiry: "09/08/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "russia",
    productPrice: 21.4,
  },
  {
    productName: "Eggs",
    productData: {
      weight: 96,
      certificate: false,
      dateOfExpiry: "02/02/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 16,
  },
  {
    productName: "Protein",
    productData: {
      weight: 146,
      certificate: true,
      dateOfExpiry: "09/10/22",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "Francia",
    productPrice: 254,
  },
  {
    productName: "Creatine",
    productData: {
      weight: 123,
      certificate: false,
      dateOfExpiry: "04/12/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice:134,
  },
  {
    productName: "BCA",
    productData: {
      weight: 121,
      certificate: true,
      dateOfExpiry: "03/01/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "Francia",
    productPrice: 16,
  },
  {
    productName: "Milk",
    productData: {
      weight: 96,
      certificate: false,
      dateOfExpiry: "16/06/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 16,
  },
  {
    productName: "Protein",
    productData: {
      weight: 96,
      certificate: false,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 145,
  },
  {
    productName: "Jagermeister",
    productData: {
      weight: 56,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "UK",
    productPrice: 115,
  },
  {
    productName: "Spaghetti",
    productData: {
      weight: 96,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "Italia",
    productPrice: 16,
  },
  {
    productName: "Protein",
    productData: {
      weight: 96,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 211,
  },
  {
    productName: "Protein",
    productData: {
      weight: 96,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 211,
  },
  {
    productName: "Protein",
    productData: {
      weight: 96,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 211,
  },
  {
    productName: "Protein",
    productData: {
      weight: 96,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 211,
  },
  {
    productName: "Protein",
    productData: {
      weight: 96,
      certificate: true,
      dateOfExpiry: "21/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "USA",
    productPrice: 211,
  },
  
];
let i = 0;
const div = document.createElement("div");
div.className = "box";
document.body.append(div);
function createListAndInsertToHTML() {
  const ul = document.createElement("ul");
  div.append(ul);
  for (let key of listOfProducts) {
    const li = document.createElement("li");
    li.innerHTML = key.productName;
    i--;
    ul.append(li);
    const childUl = document.createElement("ul");
    li.append(childUl);
    for (let parameter in key) {
      i++;
      if (parameter !== "productName" && !(key[parameter] instanceof Object)) {
        const childLi = document.createElement("li");
        childLi.innerHTML = `${parameter} : ${key[parameter]}`;
        isElementTwin(childLi, i);
        childUl.append(childLi);
        if (parameter == "productCountry") {
          const image = document.createElement("img");
          if (key[parameter] == "UA") {
            IMGSetAttribute(image, UaIMGUrl);
            childLi.append(image);
          }
          if (key[parameter] == "russia") {
            IMGSetAttribute(image, russiaIMGUrl);
            childLi.append(image);
          }
          if (key[parameter] == "USA") {
            IMGSetAttribute(image, USAIMGRUrl);
            childLi.append(image);
          }
          if (key[parameter] == "UK") {
            IMGSetAttribute(image, UKIMG);
            childLi.append(image);
          }
          if (key[parameter] == "Italia") {
            IMGSetAttribute(image, ItaliaIMG);
            childLi.append(image);
          }
          if (key[parameter] == "Francia") {
            IMGSetAttribute(image, FranciaIMG);
            childLi.append(image);
          }
        }
        if (parameter == "productPrice"){
          totalsum += key[parameter]
          allProductPrices.push(key[parameter])
        }
      } else if (key[parameter] instanceof Object) {
        const liOfObject = document.createElement("li");
        liOfObject.innerHTML = `${parameter}`;
        isElementTwin(liOfObject, i);
        childUl.append(liOfObject);
        const childObjectUl = document.createElement("ul");
        liOfObject.append(childObjectUl);
        for (let newkey in key[parameter]) {
          i++;
          const childLiOfObject = document.createElement("li");
          childLiOfObject.innerHTML = ` ${newkey} : ${key[parameter][newkey]}`;
          if (newkey== 'certificate'){
            if (key[parameter][newkey] === false){
              childLiOfObject.setAttribute('id', "attention")
            }
          }
          isElementTwin(childLiOfObject, i);
          childObjectUl.append(childLiOfObject);
        }
      }
    }
  }
}

createListAndInsertToHTML();
function isElementTwin(sometag, pointer) {
  if (pointer % 2 == 0) {
    return (sometag.style = "background-color: aqua");
  }
}
function IMGSetAttribute(tag, country) {
  tag.setAttribute("src", country);
  tag.setAttribute("alt", "something gone wrong(");
  tag.setAttribute("height", "14px");
  tag.setAttribute("width", "18px");
}
const averagePriceOfAllProducts = +(totalsum / (listOfProducts.length)).toFixed(1)
const theLargestNumber = Math.max.apply(null, allProductPrices)
console.log(averagePriceOfAllProducts)
const divWithListInfo = document.createElement('div')
divWithListInfo.className = 'center'
div.appendChild(divWithListInfo)
const listinfo = document.createElement('strong')
listinfo.innerHTML = `Max price <mark>${theLargestNumber}</mark>, average price <mark>${averagePriceOfAllProducts}</mark>, total price <mark>${+(totalsum).toFixed(2)}</mark>.`
divWithListInfo.appendChild(listinfo)