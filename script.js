
const inputField = document.getElementById("inputField")
const searchButton = document.getElementById("searchButton")

const ul = document.getElementById('ul')
console.log(ul)

function clicked(e){
    textContent=inputField.value.trim()
    if(!textContent){
        alert(textContent)
        return;
    }
    ul.innerHTML+=" <li><span class=\"check\" data-e=\"1\"></span>"+textContent+"<span class=\"terminate\">x</span></li>"
    inputField.value=''
}

searchButton.addEventListener('click', clicked)
inputField.addEventListener('keydown',function(e){
    if(e.key==='Enter')clicked(e)
})

ul.addEventListener('click', function(e){
    const target=e.target

    console.log(target.classList.contains('check'))
    if(target.classList.contains('check')){
        if(target.dataset.e=='0'){
            target.style.backgroundImage='none'
            target.parentElement.style.textDecoration='none'
            target.dataset.e='1'
        }else{
            target.style.backgroundImage='url(rg.avif)'
            target.parentElement.style.textDecoration='line-through'
            target.dataset.e='0'
        }
        console.log(getComputedStyle(target).backgroundImage,target.dataset.e)
    }
    if(target.classList.contains('terminate')){
        console.log(target.parentElement.remove())
    }
})
