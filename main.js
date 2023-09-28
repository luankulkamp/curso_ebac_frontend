const form = document.getElementById('validacao')
const n1 = document.getElementById('number-one');
const n2 = document.getElementById('number-two');
let formValida = false;

function validaValores(nA, nB){        
    console.log(nA.value);
    console.log(nB.value);

    const comparacao = (nB.value/nA.value);

    console.log(comparacao);

    return comparacao > 1;
}

form.addEventListener('submit', function (e){

    e.preventDefault();

    console.log(n1.value);
    console.log(n2.value);

    formValida = validaValores(n1, n2);

    console.log(formValida);

    if(formValida){
        document.querySelector('.success-menssage').style.display = 'block';
        n1.value = '';
        n2.value = '';
        document.querySelector('.error-menssage').style.display = 'none';
    }else{
        document.querySelector('.error-menssage').style.display = 'block';
        document.querySelector('.success-menssage').style.display = 'none';
        n1.value = '';
        n2.value = '';
    }
})