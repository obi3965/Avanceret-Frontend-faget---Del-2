function all_items(){
       
    var parentElement = document.querySelectorAll('.item');
    //console.log(itemElement)
    var itemElement_1 = document.querySelector(".item-title1");
    var itemElement_2 = document.querySelector(".item-title2");
      
    for(var i = 0; i < parentElement.length; i++ ){
         itemElement_1.innerHTML += "itme1";
         itemElement_2.innerHTML += "item2";
        
    }
        
    itemElement_1.addEventListener('click', function(){
         itemElement_1.classList.toggle("item_element_1");
        console.log("item1")
    })

    itemElement_2.addEventListener('click', function(){
        
        itemElement_2.classList.toggle("item_element_2");
        console.log("item2")
    })
    
    console.log(parentElement)

}

all_items();