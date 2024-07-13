let btn = document.getElementById('btn');
let np = document.getElementById('np');
let boxs = document.querySelectorAll('.box');
let drag=null;

btn.onclick = function () {
    if (np.value != '') {
      
            boxs[0].innerHTML += `<p class="item" draggable="true">${np.value}</p>`;
      
        np.value = '';
    }
    dragItem();
}

function dragItem() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            console.log('drag start');
            drag=item;
            item.style.opacity='0.5'
        boxs.forEach(box=>{
            box.addEventListener('dragover',function(e){
                e.preventDefault()
                console.log('drag over');
                this.style.backgroundColor='green';
                this.style.color='white';
            })
            box.addEventListener('dragleave',function(){
                console.log('drag over');
                this.style.backgroundColor='white';
                this.style.color='black';
            })
            box.addEventListener('drop',function(){
                box.append(drag);
               console.log('drop');
               this.style.backgroundColor='white';
               this.style.color='black';
            })
              
          
        })
        });
        item.addEventListener('dragend', function () {
            console.log('drag end');
            drag=null;
            item.style.opacity='1'
        });
    });
}

