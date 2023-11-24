function add_div(n,cl){
    for (let i = 1; i <=n; i++) {
        main = document.querySelector(cl)
        let sub = document.createElement('div');
        sub.classList.add('sub-grid');
        for(let j =1;j<=n;j++){
            let div = document.createElement('div');
            div.classList.add('grid_item');
           
            sub.appendChild(div);
        }
        main.appendChild(sub);
    }
}

add_div(16,'.main-grid')
let divs = document.querySelectorAll('.grid_item');

divs.forEach(div => {
  div.addEventListener('mousedown', function(e) {
    e.stopPropagation(); // Prevent mousedown from bubbling up
    div.style.backgroundColor = 'black';
  });

  div.addEventListener('mouseover', function(e) {
    div.style.backgroundColor = 'black';
  });
});

