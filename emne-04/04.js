document.addEventListener('DOMContentLoaded',()=>{

    var productElement = document.querySelector('.product');
    
    // productElement.getAttribute('data-price');
    console.log(productElement);

    // A -> B
    // A.B

   console.log(productElement.dataset.price );
   console.log(productElement.dataset.antal );
})