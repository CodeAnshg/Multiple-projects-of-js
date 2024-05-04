const user = [
    {

    id:1,
    name:"mahi manoj",
    job: "web developer",
    img:"download (2).jpeg",
    text:"My journey in web development began with a fascination for how the digital world can be shaped and molded to create impactful solutions. Over the years, I've honed my skills in both frontend and backend development, leveraging technologies like HTML, CSS, JavaScript, and various frameworks to build responsive "

    },
    {
        id : 2,
        name:"shreya verma",
        job : "UI/UX designer",
        img: " download (1).jpeg",
        text:"My journey in the world of design began with a fascination for understanding how users interact with technology and how design can profoundly impact their experiences. With [X] years of experience in the field, I've had the privilege of working on a diverse range of projects, from mobile apps to web platforms, always striving to create intuitive and   "
    },
    {
        id :3,
        name:"rajkumar ",
        job:"backend developer",
        img:"fotor-20240412175143.jpg",
        text:"My journey into the realm of backend development began with a deep-rooted curiosity for understanding the inner workings of software systems and the mechanisms that power them. With [X] years of hands-on experience in the field, I've had the privilege of working on a variety of projects, from e-commerce platforms to enterprise ."

    
    },
    {
        id :4,
        name:"Elon musk",
        job:"designer",
        img:"elon musk.jpeg",
        text:"My journey in graphic design began with a fascination for the power of imagery and its ability to evoke emotions, convey messages, and inspire action. With [X] years of experience in the field, I've had the privilege of working on diverse projects spanning branding, marketing collateral, digital media, and more, where I've honed my skills in "

    }

]

const img = document.getElementById("person")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")


const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")


let currentItem = 0
window.addEventListener("DOMContentLoaded",function (){
    showPerson(currentItem)
} );

function showPerson(person){
    const item = user[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text


}


nextBtn.addEventListener("click",function(){
    currentItem++
    if (currentItem > user.length-1){
        currentItem= 0 
    }


    showPerson(currentItem)
})

prevBtn.addEventListener("click",function(){
    currentItem--
    if (currentItem < 0 ){

        currentItem= user.length-1 
    }


    showPerson(currentItem)
})

