

// product-image slider

    var slide_no = 1;
    display(slide_no);
    function prev(n){
        display(slide_no +=n);
        console.log("prev button is clicked");
    }

    function next(n){
        display(slide_no = n);
        console.log("nex button is clicked")
    }

    function display(n){
        var slide = document.getElementsByClassName("slides");
        if(n > slide.length){
            slide_no = 1 ;
        }
        if( n < 1){
            slide_no = slide.length;
        }
        for(var i = 0; i <slide.length;i++){
            slide[i].style.display ="none";
        }
        slide[slide_no -1].style.display = "block";
    }

    var images=document.getElementsByClassName('');
    images

    //quantity increment and reduction

    var increase = document.querySelector('#increase-no');
    var reduce = document.querySelector('#reduce-no');
    var quantity = document.querySelector('#quantity');
    
    var qty=0;
    quantity.value = 0;
    
    increase.addEventListener('click', () => {
        
        if (parseInt(quantity.value) <= 9){
            quantity.value = parseInt(quantity.value) + 1;
             qty = quantity.value;
            $('#qty').text(qty);
            $('.qty').text(qty);
        }
    });
    
   reduce.addEventListener('click', () => {
        if ( quantity.value  > 0) {
            quantity.value  = parseInt( quantity.value ) - 1;
             qty = quantity.value;
            $('#qty').text(qty);
            $('.qty').text(qty);
           
        } else {
            quantity.value = 0
             qty = quantity.value;
            $('#qty').text(qty);
            $('.qty').text(qty);
            
        }
   
    });

    $('#size-1').on('click',()=>{
       $('#size').text('Small');
    });
    $('#size-2').on('click',()=>{
        $('#size').text('Medium');
     });
     $('#size-3').on('click',()=>{
        $('#size').text('Large');
     });
     $('#size-4').on('click',()=>{
        $('#size').text('Medium-large');
     });
     $('#size-5').on('click',()=>{
        $('#size').text('Extra-large');
     });

     
      