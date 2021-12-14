var data=JSON.parse(localStorage.getItem('key'));
if (data==null){
  data=[];
}else{
  for(var i=0;i<data.length;i++){
    creatTask(data[i]);
 };
}
// let code=JSON.parse(text);
let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
  let input = document.getElementById('input');
    const task = input.value;
    
    if(task!=''){
      creatTask(task);
      data.push(task);
      let text = JSON.stringify(data);
      // ローカルストレージに保存
      localStorage.setItem('key',text);

  //  let li = document.createElement('li');

  //  li.classList.add('list');

  //  li.textContent = task;

  //  let parent = document.getElementsByClassName("todo-list");
  //  parent[0].appendChild(li);
   
  //  let trash = document.createElement('div');
  //  trash.textContent = 'Delete';
  //  trash.classList.add('delete');
   
  //  let finish = document.createElement('div');
  //  let oya1=document.createElement('div');
  //  oya1.classList.add('oya');

  //  finish.textContent ='Done';
  // //  console.log(finish);
  //  finish.classList.add('finish')
  //  oya1.appendChild(finish);
  //  oya1.appendChild(trash);
  //  li.appendChild(oya1);

  //  finish.addEventListener('click',function(){
  //   // this.parentElement.remove();
  //   let finishoya=document.getElementsByClassName('finishoya')
  //   console.log(finishoya);
  //   this.remove();
  //   finishoya[0].appendChild(li);
  //  });
   
   
  };
});

function creatTask(karabako){
  let li = document.createElement('li');

  li.classList.add('list');

  li.textContent = karabako;

  let parent = document.getElementsByClassName("todo-list");
  parent[0].appendChild(li);
  // ゴミ箱の要素を作る
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

    //  配列から消す
    // indexOf()で何番目か特定
    let res=data.indexOf(karabako);
    
    data.splice(data.indexOf(karabako));

    let text = JSON.stringify(data);
    // ローカルストレージに保存
    localStorage.setItem('key',text);    
  });
  
  trash.addEventListener('click',function(){
    this.parentElement.parentElement.remove();
   // console.log(this.parentElement.parentElement);
  });

};


