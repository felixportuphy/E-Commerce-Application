$(document).ready(function(){
 
 // query for data from html
 var itemName= $('#item-name').text();
 var price=$('#price').text();
 var itemSize=$('#size').text();
 var quantity=$('#quantity').val();
 
 

// Object of products From products page
var productObject ={
     itemName:itemName,
     itemPrice:price,
     size:itemSize,
     itemQuantity:quantity

}


//put object into storage
$('#addToCartBox').on('click', ()=>{
    
    localStorage.setItem('product',JSON.stringify(productObject));
    $('#cartBox').css('visibility', 'visible'); 
    
      
})







//retrieving object from storage
$('#checkout').on('click', () =>{
    for(var product in productObject){
        var retrievedItem = localStorage.getItem('product');
        var retrievedProductObject = JSON.parse(retrievedItem);

        $('#co-item-name').text(retrievedProductObject.itemName);
        $('#co-item-price').text(retrievedProductObject.itemPrice);
        $('#co-item-total').text(calculatePrice());
        // $('#co-item-color').text();
        // $('#co-item-style').text();
        $('#co-item-size').text(retrievedProductObject.size);
        $('#co-item-qty').text(retrievedProductObject.quantity);
    }

});





// Calculator

function calculatePrice(){
    return (itemPrice * quantity);

}

function calculatTax(){
    return tax;
}


$('#close-btn').on('click', ()=>{
    $('#cartBox').css('visibility', 'hidden');  
  
      
})






//change product-image on click of thumb-image
$('#thumb-image-1').on('click', () => {
    $('#image-1').css('display', 'block');
    $('#image-2').css('display', 'none');
    $('#image-3').css('display', 'none');
});
$('#thumb-image-2').on('click', () => {
    $('#image-2').css('display', 'block');
    $('#image-1').css('display', 'none');
    $('#image-3').css('display', 'none');
});
$('#thumb-image-3').on('click', () => {
    $('#image-3').css('display', 'block');
    $('#image-1').css('display', 'none');
    $('#image-2').css('display', 'none');
});


});
   