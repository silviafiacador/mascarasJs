//máscara para o cpf
let input = document.querySelector("#cpf")
//querySelector: tag, id, classe
//para id e classe utilizar a mesma notação usada pelo css

//  () função anônima 
//  => arrow function
// function nome()
//{    }
input.addEventListener("keypress", () => {
let inputlength = input.value.length

if (inputlength==3 || inputlength==7 ) {
    input.value+= "."
   // input.value = input.value+"."
}
if (inputlength==11) {
    input.value+= "-"
}
})

//=====================================
//máscara para o cnpj
let inputCnpj=document.querySelector("#cnpj")
inputCnpj.addEventListener("keypress",() => 
{
   let cnpjLength= inputCnpj.value.length
   if (cnpjLength==2 ||cnpjLength==6 )
    {
     inputCnpj.value+="."
    }
   if (cnpjLength==10)
    {
    inputCnpj.value+="/"
    }
   if (cnpjLength==15)
    {
    inputCnpj.value+="-"
    }

})