// loading
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time (you can replace this with your actual loading logic)
  setTimeout(function () {
    // Hide the loading container
    document.getElementById("loading").style.display = "none";
    // Show the content
    document.getElementById("content").style.display = "block";
  }, 1500); // Replace 2000 with the actual loading time in milliseconds
});



// dropdown
let bar = document.getElementById("bars");
let close = document.getElementById("close");
let nav=document.getElementById("navbar");
if(bar){
    bar.addEventListener("click",()=> {
        nav.classList.add("active");
    }
    
    )
}

// close dropdown
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    nmb = 0;
  });

}
// cart plus add
let nmb=0;
function add(i) {
  nmb += 1;
  let a = document.getElementById(`tr${i}`);
  a.style.display = "flex";
  let b=document.getElementById("span");
  b.style.display = "inline-block";
  if (nmb >= 17) {
    alert("please you can't add more than 16 products to your cart");
    nmb =0;
  }
  b.innerHTML = `${nmb} ` ;
}
// remove listpro
function remove(i) {
    nmb -= 1;
  let a=document.getElementById(`tr${i}`)
  a.style.display="none";
  let b = document.getElementById("span");
  b.innerHTML = `${nmb} `;
  
  if (nmb == 17) {
    document.getElementById("listcart").style.display = "none";
  }

}
// coupon 

function Apply(){
  let a=document.getElementById("coupon-inp");
  if (a.value == "#123" || a.value == "#zaka" || a.value == "#anas" || a.value == "#30") {
    if (a.value == "#123"){document.getElementById("coupon-text").innerHTML =
      "Félicitations ! Vous avez gagné une réduction de 50%.";}
       if (a.value == "#zaka") {
         document.getElementById("coupon-text").innerHTML =
           "Félicitations ! Vous avez gagné une réduction de 60%.";
       }
        if (a.value == "#30") {
          document.getElementById("coupon-text").innerHTML =
            "Félicitations ! Vous avez gagné une réduction de 30%.";
        }
       if (a.value == "#anas") {
         document.getElementById("coupon-text").innerHTML =
           "Félicitations ! Vous avez gagné une réduction de 79%.";
       }
    // add total price
    // tatal
  } 
  else { document.getElementById(
    "coupon-text"
  ).innerHTML = `Désolé, vous n'avez pas gagné`;}
  a.onkeyup=()=>{
    document.getElementById(
      "coupon-text"
    ).innerHTML = ``;
  }
}
let cart = document.getElementById("cart-plus");
let close2 = document.getElementById("close2");
let closebtn = document.getElementById("closebtn");
let carttab = document.getElementById("cart-tab");
// cart plus add
if (cart) {
  cart.addEventListener("click", () => {
    carttab.classList.add("active1");
  });
}
// cart plus remove
if (close2) {
  close2.addEventListener("click", () => {
    carttab.classList.remove("active1");
  });
}
// cart plus remove
if (closebtn) {
  closebtn.addEventListener("click", () => {
    carttab.classList.remove("active1");
  });
}
// add total price
// tatal
let p = 0;

function addToCart(productPrice) {
  p += productPrice;
  updateTotalPrice();
}
function removeFromCart(productPrice) {
  p -= productPrice;
  // Ensure total price is not negative
  p = Math.max(p, 0);
  updateTotalPrice();
}
function updateTotalPrice() {
  let a = document.getElementById("t");
  a.innerHTML = `${p}DH`;
}

let phone = document.getElementById("Phone");
phone.onclick=()=>{
  phone.value = "+212 ";
}
// sproduct
function sproductchange(i){
  let img1 = "img/jacket1.jpg";
  let img2 = "img/hat.jpg";
  let img3 = "img/jeans.jpg";
  let img4 =
    "img/short-sleeve-shirt-cloth-hanger-with-white-wall-background.jpg";
  let img = document.getElementById(`MainImg`);
  let price = document.getElementById(`price`);
  let name = document.getElementById(`name`);

  if(i==1){
  img.src = img1;
  price.innerHTML = "300DH";
  name.innerHTML = "Hoodie Grise";
}
  if (i == 2){ img.src = img2;
  img.src = img2;
  price.innerHTML = "90DH";
  name.innerHTML = "Casquette";

}
  if (i == 3){ img.src = img3;
  img.src = img3;
  price.innerHTML = "210DH";
  name.innerHTML = "Jeans";

  }
  if (i == 4){ img.src = img4;
  img.src = img4;
  price.innerHTML = "240DH";
  name.innerHTML = "T-shirt Noir";

  }
}
function validateForm() {
  let a = document.getElementById("mailadmi").value;
  let b = document.getElementById("motpass").value;
  if(a === "zakariae@gmail.com" && b === "123"){alert("bonjur zakaria"); 
  return true;
}
if (a === "anas@gmail.com" && b === "123") {
  alert("bonjour anas");
  return true;
} else {
  alert("Veuillez entrer une adresse email valide. ou mot de passe");
  return false;
}
  
}
// form
function signIn() {
  // Get the entered values
  const username = document.getElementById("Prénom").value;
  const nom = document.getElementById("nom").value;
  const phone = document.getElementById("Phone").value;
  const email = document.getElementById("E-mail").value;

  // Check if all required fields are filled
  if (username && phone && email) {
    // Validate email format
    if (!isValidEmail(email)) {
      alert("Veuillez saisir une adresse e-mail valide.");

      return;
    }

    // All fields are filled and email is valid, show the success alert
  alert(
    `bonjour ${username}_${nom} Félicitations ! Vous avez gagner 30% de reduction."#30"`
  );

  }
}

function isValidEmail(email) {
  // Simple email validation regex, you might want to use a more robust solution
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
