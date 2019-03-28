document.addEventListener('DOMContentLoaded', (event)=>{

  //FIRST EXAMPLE
  let divs = document.querySelectorAll('.item');

  for (let index = 0; index < divs.length; ++index) {

    divs[index].addEventListener('click', (e) => {
      divs[index].classList.toggle('item_1');
      console.log("index is :" + index);
    })

  }



  //SECOND EXAMPLE
  
  // let divs = document.querySelectorAll('.item');

  // for (let index = 0; index < divs.length; ++index) {

  //   divs[index].addEventListener('click', (e) => {
      
  //     if(divs[index].classList.contains('item_1')){
  //       divs[index].classList.remove('item_1');
        
  //     }else{
  //       divs[index].classList.add('item_1')
  //     }
  //     console.log("index is :" + index);
  //   })

  // }

  
})
        
    

