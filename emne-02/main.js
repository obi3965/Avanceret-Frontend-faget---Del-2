
const parent = document.querySelectorAll(".item");

parent.addEventListener('click', (e) => {
  e.target.classList.add('.item_1');
  console.log(e.target);
});
  
        
    

