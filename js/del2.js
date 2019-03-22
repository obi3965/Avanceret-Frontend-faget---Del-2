



    


    
    window.addEventListener("load", (event)=>{

        fetch('../partial/nav.html')
        .then((response)=>{
            return response.text();
        })
        .then((navHtml)=>{
            document.querySelector("nav").innerHTML = navHtml;
        })



        
    })
    
    

    function all_items(){
       
        var parentElement = document.querySelectorAll('.item');
        //console.log(itemElement)
        var itemElement_1 = document.querySelector(".item-title");
        var itemElement_2 = document.querySelector(".item-description");
          
        for(var i = 0; i < parentElement.length; i++ ){
             itemElement_1.innerHTML += "x";
             itemElement_2.innerHTML += "x";
             itemElement_1.classList.add("item_element_1");
             itemElement_2.classList.add("item_element_2");
        }
            
        itemElement_1.addEventListener('click', function(){
            
            console.log("item1")
        })

        itemElement_2.addEventListener('click', function(){
            
            console.log("item2")
        })
        
        console.log(parentElement)
    
    }
    
    all_items();
        
        
        