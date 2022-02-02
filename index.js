/*　変数　*/
let hensu = 'hello world';
hensu = 'hello world2';

//定数
const bigHensu = 'Heeeeelooooo world';
console.log(bigHensu);

//配列
let hInoki = ['1','2','3','da-'];
console.log(hInoki);

//ループ文
let index = 0;
while(index < 4){
  //繰り返した命令
  console.log(hInoki[index])
  index++;
  console.log(index);
}

//if  / else
// if(hInoki.length > 3){
//   console.log('ボンバイエ');
// }else{
//   console.log('ボンバ...!');
// }

//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(hInoki.length > arg){
    console.log('ボンバイエ');
  }else{
    console.log('ボンバ...!');
  }
};
test(6);

//オブジェクト
const teisu = {
  color:'pink',
  size: 'large',
  perfume:'mink',
  goConsole: () => {
    console.log('Hello world');
  }
};

console.log(teisu);
console.log(teisu.size);
console.log(teisu.goConsole());

//windowオブジェクト
//ブラウザの全てがある
console.log(window);
//window.alert('alert');
//documentオブジェクト
//document : web上にあるdomそのもの
console.log(document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('you push button');
}));
