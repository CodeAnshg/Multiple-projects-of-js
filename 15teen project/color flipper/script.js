const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.querySelector('.btn')
const color=document.querySelector('.color')

const currentURL = window.location.href;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

if (!currentURL.includes('#')){
    btn.addEventListener('click',function(){
        const randomNumber = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent=colors[randomNumber]
    })

}else{
    btn.addEventListener('click',function(){
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor
        color.textContent=randomColor;
    })
}







