let parent = document.getElementsByClassName("todo-list");
let finishoya=document.getElementsByClassName('finishoya');

var data=JSON.parse(localStorage.getItem('key'));
var data2=JSON.parse(localStorage.getItem('key2'));
// readingのif文
if (data==null){
  data=[];
}else{
  for(var i=0;i<data.length;i++){
    creatTask(data[i],parent);
 };
}
// finishedのif分
if (data2==null){
  data2=[];
}else{
  for(var i=0;i<data2.length;i++){
    creatTask(data2[i],finishoya);
 };
// 一緒に取ったdoneを
// 下のdoneだけを消す
 let finishbtns= document.querySelectorAll('.finishoya .finish');
 for (const finish of finishbtns) {
   finish.remove();
 }
}

let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
  let input = document.getElementById('input');
    const task = input.value;
    
    if(task!=''){
      creatTask(task,parent);
      data.push(task);
      let text = JSON.stringify(data);
      // ローカルストレージに保存
      localStorage.setItem('key',text);
  };
});
// 関数を作る
function creatTask(karabako,karabako2){
  let li = document.createElement('li');

  li.classList.add('list');

  li.textContent = karabako;

  karabako2[0].appendChild(li);
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
　//  　finish押したら
  finish.addEventListener('click',function(){
    // this.parentElement.remove();
    console.log(karabako2);
    console.log(this);
    this.remove();
    
    finishoya[0].appendChild(li);

    data2.push(karabako);
    console.log(data2);
    
    text = JSON.stringify(data2);
    // ローカルストレージに保存
    localStorage.setItem('key2',text);   
    // readingに入ったのを消す
    data.splice(data.indexOf(karabako));
       text = JSON.stringify(data);
    // ローカルストレージに保存
    localStorage.setItem('key',text);   
  });
  
  trash.addEventListener('click',function(){
    let judge = this.closest(".finishoya");
    // finishが親じゃない時nullになる
    this.parentElement.parentElement.remove();

   //  配列から消す
   // indexOf()で何番目か特定
    let text='';
    let res=data.indexOf(karabako);

    // 消してね
    if(judge == null){
      data.splice(data.indexOf(karabako));
      let text = JSON.stringify(data);
      // ローカルストレージに保存
      localStorage.setItem('key',text);   
    }else{
      data2.splice(data2.indexOf(karabako));
      text = JSON.stringify(data2);
      // ローカルストレージに保存
      localStorage.setItem('key2',text);     
    }
  });

};


