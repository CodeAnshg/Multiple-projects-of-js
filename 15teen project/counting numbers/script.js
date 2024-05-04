const counterValue = document.querySelector('h2');
const decreaseBtn = document.querySelector('button:nth-of-type(1)');
const resetBtn = document.querySelector('button:nth-of-type(2)');
const increaseBtn = document.querySelector('button:nth-of-type(3)');


let count = 0;


function updateCounter() {
    if(count==0){
        counterValue.style.color = 'black';
        counterValue.textContent = count;
    }else if(count<0){
        counterValue.style.color = 'red';
        counterValue.textContent = count;
    }else{
        counterValue.style.color = 'green'
        counterValue.textContent = count
    }
    
}

decreaseBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

increaseBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});
updateCounter();
