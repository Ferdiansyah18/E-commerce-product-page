let jumlahbarang = document.getElementById("inputValue");

function minBtn() {
    var value = parseInt(jumlahbarang.value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    jumlahbarang.value = value;
}

function sumBtn() {
    jumlahbarang.value++;
} 

let cartItems = document.getElementById("cartItems");
let paraEmpty = document.getElementById("paraEmpty");
let discountPrice = 125;
let itemsPrice = document.getElementById("itemsPrice");
let hargaHasil = document.getElementById("itemsPriceHasil");
let hargaAkhir = discountPrice + jumlahbarang.value;

function submitBtn() {
    cartItems.classList.add("filled");
    paraEmpty.style.display = "none";
    itemsPrice.innerHTML = "$" + "125.00 " + "x " + jumlahbarang.value + " " ;
    hargaHasil.innerHTML = "$" + discountPrice * jumlahbarang.value + ".00";
}

let thumbnail1 = document.getElementById("img1");
let thumbnail2 = document.getElementById("img2");
let thumbnail3 = document.getElementById("img3");
let thumbnail4 = document.getElementById("img4");
let mainImg = document.getElementById("mainImg");

function imgBtn1() {
thumbnail1.classList.add("active");
thumbnail2.classList.remove("active");
thumbnail3.classList.remove("active");
thumbnail4.classList.remove("active");
mainImg.src = "./images/image-product-1.jpg"
}

function imgBtn2() {
    thumbnail1.classList.remove("active");
    thumbnail2.classList.add("active");
    thumbnail3.classList.remove("active");
    thumbnail4.classList.remove("active");
    mainImg.src = "./images/image-product-2.jpg"
}

function imgBtn3() {
    thumbnail1.classList.remove("active");
    thumbnail2.classList.remove("active");
    thumbnail3.classList.add("active");
    thumbnail4.classList.remove("active");
    mainImg.src = "./images/image-product-3.jpg"
}

function imgBtn4() {
    thumbnail1.classList.remove("active");
    thumbnail2.classList.remove("active");
    thumbnail3.classList.remove("active");
    thumbnail4.classList.add("active");
    mainImg.src = "./images/image-product-4.jpg"
}

let cartBasket = document.getElementById("cartBasket");

function cartBtn() {
    cartBasket.classList.toggle("active");
}

function removeBtn() {
    cartItems.classList.remove("filled");
    paraEmpty.style.display = "flex";
}

function lightboxBtn() {
    console.log("halo");
}