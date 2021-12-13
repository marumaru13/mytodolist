let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
  let input = document.getElementById('input');
    const task = input.value;
    if(task!=''){
   let li = document.createElement('li');

   li.classList.add('list');

   li.textContent = task;

   let parent = document.getElementsByClassName("todo-list");
   parent[0].appendChild(li);
   
   let trash = document.createElement('div');
   trash.textContent = 'Delete';
   trash.classList.add('delete');
   
   let finish = document.createElement('div');
   let oya1=document.createElement('div');
   oya1.classList.add('oya');

   finish.textContent ='Done';
  //  console.log(finish);
   finish.classList.add('finish')
   oya1.appendChild(finish);
   oya1.appendChild(trash);
   li.appendChild(oya1);

   finish.addEventListener('click',function(){
    // this.parentElement.remove();
    let finishoya=document.getElementsByClassName('finishoya')
    console.log(finishoya);
    this.remove();
    finishoya[0].appendChild(li);
   });
   
   trash.addEventListener('click',function(){
     this.parentElement.parentElement.remove();
    // console.log(this.parentElement.parentElement);
   });
  }
});


