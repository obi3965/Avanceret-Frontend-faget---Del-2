



    


    
    window.addEventListener("load", (event)=>{

        fetch('../emne-01/nav.html')
        .then((response)=>{
            return response.text();
        })
        .then((navHtml)=>{
            document.querySelector("nav").innerHTML = navHtml;
        })



        
    })
    
    

    
        
        

    
        