function alterarBotao(){
    const html = document.documentElement
    html.classList.toggle("light")

    /*if(body.classList.contains('light')){
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }*/


    // pegar a tag imagem

    const img = document.querySelector("#profile img")

     //substituir a imagem
    //se tiver light mode , adcionar a imagem light
    if(html.classList.contains("light")){
        img.setAttribute("src", "./images/avatar-light-mode.png")

    }
    //se nao, manter a imagem normal
    else{
        img.setAttribute("src","./images/Avatar.png")

    }
   
       

    
}
