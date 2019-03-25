



    


    
    window.addEventListener("load", (event)=>{

        fetch('../partial/nav.html')
        .then((response)=>{
            return response.text();
        })
        .then((navHtml)=>{
            document.querySelector("nav").innerHTML = navHtml;
        })



        
    })
    
    

    
        
        

    
        