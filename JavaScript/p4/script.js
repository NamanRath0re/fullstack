let c = document.getElementById("p");
let count = 0;
let e = document.getElementById("even");
let even = "Even";
let odd = " Odd";
let p=document.getElementById('pc')
let cunt=0;
function incr() {
  if (count < 20)
   {
    count++;
    if (count % 2 == 0) {
      e.textContent = even;
      c.textContent = count;
    } else {
      e.textContent = odd;
      c.textContent = count;
    }
   
  }
  else{
    alert("Limit Reached cannot go above 20")
  }
}
function decr() {
  if (count > 0) {
    count--;

    if (count % 2 == 0) {
      e.textContent = even;
      c.textContent = count;
    } else {
      e.textContent = odd;
      c.textContent = count;
    }
  }
  else{
    alert("Limit Reached cannot go below 0")
  }
}
function reset() {
  count = 0;
  c.textContent = 0;
  e.textContent= "Even"
}

//modal
let isOpen=false
function fun()
{
    const modal= document.getElementById('body')
    const btn1=document.getElementById('btn1')
    let shrink='shrink'
    if(isOpen){
        modal.style.display='none'
        isOpen=false
        btn1.textContent= 'Counter App'
      }
    else{
        modal.style.display='block'
        isOpen=true
        btn1.textContent= shrink
    }
}

//change mode
function mode(){
    const main=document.getElementById('main')
    main.classList.toggle('dark')
}