let minutes=document.getElementById('minutes');
let secondes=document.getElementById('seconds');
let btnPlus= document.querySelector('.btnPlus');
let btnMines= document.querySelector('.btnMines');
let btnPlusB= document.querySelector('.btnPlusB');
let btnMinesB= document.querySelector('.btnMinesB');
let comptnumber= document.querySelector('.comptnumber');
let comptnumberB= document.querySelector('.comptnumberB');
let pausebtn= document.querySelector('#pausebtn');
let interval;
console.log(btnPlus);
console.log(btnMines);
console.log(comptnumber);


let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');
let setMunit=parseInt(comptnumber.innerHTML);
let setbreak=parseInt(comptnumberB.innerHTML);

console.log(setbreak)

let workTime = 2;
let breakTime = 1;

let seconds = "00"
pausebtn.addEventListener('click', ()=>{
    pause();
});

btnPlus.addEventListener('click', () =>{
    comptnumber.innerHTML =parseInt(comptnumber.innerHTML)+1;
    setMunit=comptnumber.innerHTML;
    minutes.innerHTML=comptnumber.innerHTML
    workTime=setMunit
    if(comptnumber.innerHTML==61){

        comptnumber.innerHTML=60
    }
    
});
btnMines.addEventListener('click', () =>{
    comptnumber.innerHTML =parseInt(comptnumber.innerHTML)-1;
    setMunit=comptnumber.innerHTML;
    minutes.innerHTML=comptnumber.innerHTML
    workTime=setMunit;
    if(comptnumber.innerHTML==-1){

        comptnumber.innerHTML=0
    }
})
btnPlusB.addEventListener('click', () =>{
    comptnumberB.innerHTML =parseInt(comptnumberB.innerHTML)+1;
    setbreak=comptnumberB.innerHTML;
    breakTime=setbreak
    console.log(setbreak)
    if(comptnumberB.innerHTML==11){

        comptnumberB.innerHTML=10
    }
    
});
btnMinesB.addEventListener('click', () =>{
    comptnumberB.innerHTML =parseInt(comptnumberB.innerHTML)-1;
    setbreak=comptnumberB.innerHTML;
    breakTime=setbreak
    console.log(setbreak)
    if(comptnumberB.innerHTML==4){

        comptnumberB.innerHTML=5
    }

   

})

// display
window.onload = () => {
    minutes.innerHTML = workTime;
    secondes.innerHTML = seconds;

    workTittle.classList.add('active');
}

// start timer
let start = ()=>{

    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        minutes.innerHTML = workMinutes;
        secondes.innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // change the painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    // continue work
                    workMinutes = workTime -1;
                    breakCount++

                    // change the painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    interval= setInterval(timerFunction, 1000); // 1000 = 1s
    
}
let pause=()=>{

    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    clearInterval(interval);

}