// poem
var words = [
    '繁星点点，银河如带',
    '星辰大海，浩瀚无垠',
    '夜空中最亮的星，照亮前行的路',
    '星河滚烫，你是人间理想',
    '流星划过，许下心愿',
    '星辉斑斓，夜幕低垂',
    '银河倾泻，星辰闪烁',
    '星空下的誓言，永恒不变',
    '夜深人静，星辰作伴',
    '星海辽阔，心随星动',
    '繁星如织，织就梦幻夜空',
    '星河璀璨，照亮心房',
    '星空下的浪漫，只属于你我',
    '星辰大海，不及你眼眸的深邃',
    '星河长明，岁月静好',
    '星空下的诺言，穿越时空',
    '星海茫茫，寻找属于我们的星座',
    '星光不问赶路人，时光不负有心人',
    '星河欲转千帆舞，银汉无声转玉盘',
    '星空下的我们，渺小而又伟大',
    '星河遥望，梦想起航',
    '星空下的守候，静待花开',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}//#000000
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color="#ee9ca7";
        word.style.fontFamily = '楷体';
        word.style.fontSize = '30px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(16,40)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
       textone.innerHTML = "<h1 >昨天</h1>";
          textone.style.color = '#000000';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#000000';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#000000';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },3000)
//#000000
  setTimeout(function(){
       textone.innerHTML = "<h1>今天</h1>";
          textone.style.color = '#000000';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#000000';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#000000';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },7000)
setTimeout(function(){
       textone.innerHTML = "<h1>明天</h1>";
          textone.style.color = '#000000';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#000000';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#000000';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },11000)
setTimeout(function(){
       textone.innerHTML = "<h1>把握每一天</h1>";
          textone.style.color = '#000000';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#000000';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#000000';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },15000)




 
