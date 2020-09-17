// usar o for eaach pra listar quem tem nos objetos
console.log("to aqui")

console.log(localStorage.getItem('cadastrados'))


const $ = q => document.querySelector(q);

console.log("TESTES")

console.log('INTERAÇÃO AGORA')
console.log(localStorage.getItem('modelo'))
console.log(localStorage.getItem('marca'))
console.log(localStorage.getItem('preco'))
console.log(localStorage.getItem('cor'))


var nomemodelo =  localStorage.getItem('modelo');
var nomemarca =  localStorage.getItem('marca');
var nomepreco = localStorage.getItem('preco');
var nomecor =  localStorage.getItem('cor');
var nomedescricao = localStorage.getItem('descricao');
var nomeano = localStorage.getItem('ano');


/*
var nomemodelo =  'muito bao'
var nomemarca = 'sensacional'
var nomepreco = 1986
var nomecor = 'nossa'
var nomedescricao ='bao demais'
*/


renderclientes();
function renderclientes(){
    
    const cadastrados = localStorage.cadastrados ? JSON.parse(localStorage.cadastrados) : [];

    cadastrados.forEach(c => listar(c))

}


function listar(){
 
  //listaE1[0] = document.querySelector('#cadastrosdecarros');
    //const conteudo = document.createElement('<p>')
   //listaE1[0].innerHTML="aaaaa"
    console.log("listou")

    const row = document.createElement("div");


    row.innerHTML = `
    <div class="row">
              <div class="col-sm-2">
                <img src="/img/hyundai.jpg" class="img-fluid" alt="Imagem responsiva">
              </div>
              <div class="col-sm">
                <p>
                    <h4 id='nomedomodelo'>${nomemodelo}</h4>
                </p>
                <p>
                    <strong>Marca:</strong> <label id="marcaveiculo">${nomemarca}</label>
                    <br>
                    <strong>Preço:</strong> R$ <label id="preco"> ${nomepreco}</label> 
                    <br>
                    <strong>Cor:</strong> <label id="cor">${nomecor}</label>
                    <br>
                    <strong>Ano:</strong> <label id="cor">${nomeano}</label>
                </p>
                <p>
                    <label id="descricao">${nomedescricao} </label>
                </p>
                <p class="float-right">
                    <a href="#"  class="btn btn-primary">Editar</a>
                    <a href="#" id="botaoexcluir" onclick="deletar()" class="btn btn-danger">Excluir</a>
                </p>
              </div>
              
            </div>
    `;

    $("#addcadastrosdecarros").appendChild(row);
}

function deletar(){
   console.log("deletar kekeke")
}
