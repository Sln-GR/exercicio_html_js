/*
    let valido = window.document.getElementById("text")
    let color = window.document.getElementById("res-color")
    let campoa = window.document.getElementById("precoA")
    let campob = window.document.getElementById("precoB")
    window.alert("hi")
    function adicionar(a,b){
        let a = Number(campoa)
        let b = Number(campob)
        if (a > b){
            color.innerHTML(`red`)
        }
    }



*/



let valido = window.document.getElementById("text")
let color = window.document.getElementById("res-color")
let campoa = window.document.getElementById("precoA")
let campob = window.document.getElementById("precoB")



function adicionar(){
    let a = Number(campoa.value)
    let b = Number(campob.value)

    if (a > b){
        color.innerHTML = 'Formulário inválido!'
        color.style.backgroundColor = "red"
        color.style.color = 'white'
    } else {
        color.innerHTML = 'Formulário válido!'
        color.style.backgroundColor = 'green'
        color.style.color = 'white'
    }
}


