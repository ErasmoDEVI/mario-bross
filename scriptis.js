/*variaveis

    3 jeitos de criar uma variavel:
    1 var / nao use 
    2 let / voce pode alterar o valor depois
    3 const > constante 


    funções 
    um treho de codigo que so e executado quando e chamado 

*/
const formulario = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")


function cliqueinobotao(){
    formulario.style.left = "50%"
    formulario.style.transform = translateX(-50)
    mascara.styles.visibility = "visible"
  }
     function esconderform(){
        formulario.style.left = "-300px"
        formulario.style.transform = translateX(-50)
        mascara.styles.visibility = "visible"
     }

 