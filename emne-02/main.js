

       
    var allItems = document.querySelectorAll('.item');
    
    for(var i = 0; i < allItems.length; i++ ){
         
    allItems[i].addEventListener("click", function() {
            allItems[i].classList.toggle(".item_1");
          });
         
         
    }
        
    

