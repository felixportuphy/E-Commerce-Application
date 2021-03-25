$(document).ready(function(){
    
    var itemName= $('#item-name');
    var price=$('#price');
    var itemSize=$('#size');
    var quantity=$('#qty');
    var addtoCart =$('#addToCartBox');

    var numberofOrders;
     
    if(localStorage.getItem('numberofOrders') ==null){
        numberofOrders = 0;
    }
    else{
        numberofOrders = localStorage.getItem('numberofOrders');
    }

    $cart-trigger.on('click',function(event){
        event.preventDefault();
        $cart-itemSize.html(fetchOrders());
        var order = JSON.parse(localStorage.getItem('orderDetails'));
        var totoalPrice = 0.0;
        for(var i =0; i< order.length;i++){

        }

    });

    addtoCart.on('click',function(event){
        event.preventDefault();setDetails();
        fetchOrders();
    });

    function setDetails(){
        numberofOrders +=1;

        details ={
            itemName: $itemName.text(),
            price:$price.text(),
            size:$size.val(),
            color:$color.val(),
            id:numberofOrders
        }

        var initialOrder;

        orderDetails = [details]

        if(localStorage.getItem('orderDetails') !=null){
            initialOrder=JSON.parse(localStorage.getItem('orderDetails'));
            initialOrder.push(details);
            localStorage.setItem('orderDetails',JSON.stringify(initialOrder));
        }

        else{
            localStorage.setItem('orderDetails',JSON.stringify(orderDetails));
        }

        $cartItems.html(fetchOrders());

    }
    function fetchOrders(){
        var order = JSON.parse(localStorage.getItem('orderDetails'));
        var cartHtml = "";
        for(var i =0; i < order.length; i++){
            cartHtml +=
                `
                <li id="${order[i].productName.toLowerCase().split(" ")[0]}id" class= "${order[i].productName.toLowerCase().split(" ")[0] + 'item'}">
                <div class="text-dark-grey text-bold"><span id="cart-productName">${order[i].productName}</span></div>
                <div class="cd-price">Price: <span id="cart-price">${order[i].price}</span></div>
                <div class="cd-price">Quantity: <span id="cart-quantity">${order[i].quantity}</span></div>
                <div class="cd-price">Size: <span id="cart-size">${order[i].size}</span></div>
                <div class="cd-price">Color: <span id="cart-color">${order[i].color}</span></div>
                <a href="#0" id = "${order[i].id}" class="${order[i].productName.toLowerCase().split(" ")[0]} cd-item-remove cd-img-replace">Remove</a>
                </li>
    
                `
        }
        // add event listeners to anchor tags
        var totalPrice = 0.0;
        for(var i =0; i < order.length; i++){
            var anchors = document.querySelectorAll(`.${order[i].productName.toLowerCase().split(" ")[0]}`)
            anchors.forEach(anchor => {
                anchor.addEventListener("click", function(e){
                    var totalPrice = 0.0;
                    var newOrders = JSON.parse(localStorage.getItem('orderDetails'));
                    e.currentTarget.parentNode.remove();
                    var id = parseInt(e.target.id);
                    // remove item from local storage
                    newOrders = newOrders.filter(order => order.id != id);
                    localStorage.setItem('orderDetails', JSON.stringify(newOrders));
                    for(var i=0; i < newOrders.length; i++){
                        totalPrice += parseInt(order[i].quantity) * parseFloat(order[i].price);
                        localStorage.setItem('totalPrice', totalPrice);
                    }
                    updateTotalPrice();
                    })               
            })
            // calculate total price
            totalPrice += parseInt(order[i].quantity) * parseFloat(order[i].price);
            localStorage.setItem('totalPrice', totalPrice);
            updateTotalPrice();
        }
        return cartHtml;
    }
    function updateTotalPrice(){
        $cartPrice.text(`$${localStorage.getItem('totalPrice')}`);
    }
    
    

});