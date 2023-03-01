const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const container = document.getElementById("container")

hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
    let hexColor = '#'

    for(let i = 1;i <= 6; i++ ){
        hexColor += randhexvalue()
    }
    container.style.backgroundColor = hexColor
    colortext.innerHTML = hexColor

})

function randhexvalue(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
}

