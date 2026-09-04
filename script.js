var inputbox=document.getElementById("searchbox");
var products=document.querySelectorAll(".product");
var buybuttons=document.querySelectorAll(".buttonbuy");

var popup=document.getElementById("popup");
var popupimg=document.getElementById("popup-img");
var popupname=document.getElementById("popup-name");
var popupPrice=document.getElementById("popup-price");

var close=document.getElementById("close");

var loginButton=document.getElementById("LoginButton");
var signupButton=document.getElementById("SignupButton");

var signupcontent=document.getElementById("signupcontent");
var logincontent=document.getElementById("logincontent");

var formtitle=document.getElementById("formtitle");
var formbutton=document.getElementById("formbutton");


//search product

if(inputbox)
{
inputbox.addEventListener("input",function()
{
let inputtext=inputbox.value.toLowerCase();

products.forEach(function(product)
{
let productname=product.querySelector("p").textContent.toLowerCase();

if(productname.includes(inputtext))
{
product.style.display="block";
}
else
{
product.style.display="none";
}
});
});
}


//buy button

buybuttons.forEach(function(button)
{
button.addEventListener("click",function()
{
let product=button.parentElement;
let img=product.querySelector("img");
let name=product.querySelector("p");
let price=product.querySelector("h3");

popupimg.src=img.src;
popupname.textContent=name.textContent;
popupPrice.textContent=price.textContent;
popup.style.display="flex";
});
});


//close popup

if(close)
{
close.addEventListener("click",function()
{
popup.style.display="none";
});
}


//login form

if(loginButton)
{
loginButton.addEventListener("click",function()
{
signupcontent.style.display="none";
logincontent.style.display="block";
formtitle.textContent="Login To Shoppino";
});
}


//signup form

if(signupButton)
{
signupButton.addEventListener("click",function()
{
logincontent.style.display="none";
signupcontent.style.display="block";
formtitle.textContent="Sign Up To Shoppino";
});
}
