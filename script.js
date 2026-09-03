var inputbox=document.getElementById("searchbox");
var products=document.querySelectorAll(".product");




//search product
inputbox.addEventListener("input", function(){
	
	let inputtext=inputbox.value.toLowerCase();
	
	products.forEach(function(product){
		
		let productname=product.querySelector("p").textContent.toLowerCase();
	
		if(productname.includes(inputtext)){
			product.style.display="block";
		}
			
		else{
			
			product.style.display="none";
		}

    });

});
