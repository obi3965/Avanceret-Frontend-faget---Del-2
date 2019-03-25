document.addEventListener('DOMContentLoaded',()=>{

    var productElement = document.querySelector('.product');
      
    var dataset = productElement.dataset;
    // productElement.getAttribute('data-price');
    console.log(productElement);

    // A -> B
    // A.B

   console.log(productElement.dataset.price );
   console.log(productElement.dataset.antal );

   productElement.innerHTML =  " it cost " + dataset.price  +  ' for ' + dataset.antal + ' items' ;
})