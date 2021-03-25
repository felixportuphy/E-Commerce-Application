$(document).ready(function(){

 // query for data from html
 var itemName= $('#co-item-name').text();
 var itemPrice=$('#co-item-price').text();
 var totalPrice=$('#co-item-total').text();
 var itemColor=$('#co-item-color').text();
 var itemStyle=$('#co-item-style').text();
 var itemSize=$('#co-item-size').text();
 var itemQuantity=$('#co-item-qty').text();
 var subtotal = $('#cart-amount').text();
 console.log(itemName);
 console.log(itemPrice);
 console.log(totalPrice);
 console.log(itemColor);
 console.log(itemStyle);
 console.log(itemSize);
 console.log(itemQuantity);
 
 

// Object of products
var productObject ={
     name:itemName,
     price:itemPrice,
     total:totalPrice,
     style:itemStyle,
     color:itemColor,
     size:itemSize,
     quantity:itemQuantity

 }

 


//put object into storage
var storage = localStorage.getItem('product');
var unpackedItem;
 $('checkout-box').on('click',()=>{
   unpackedItem = JSON.parse(storage);
   var realPrice =unpackedItem.price;
   itemPrice = itemPrice.text(realPrice);
 });





// Calculator

function calculatePrice(){
    return ( (parseFloat(itemPrice)) * parseInt((itemQuantity)) );

}

function calculatTax(){
    return tax;
}



subtotal = calculatePrice();
});

