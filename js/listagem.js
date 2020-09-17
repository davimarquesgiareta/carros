// usar o for eaach pra listar quem tem nos objetos
console.log("to aqui")



const $ = q => document.querySelector(q);





var nomemodelo =  localStorage.getItem('modelo');
var nomemarca =  localStorage.getItem('marca');
var nomepreco = localStorage.getItem('preco');
var nomecor =  localStorage.getItem('cor');
var nomedescricao = localStorage.getItem('descricao');
var nomeano = localStorage.getItem('ano');


for (var d=0; d<=localStorage.getItem("contador") ; d++){
          

  if(localStorage.getItem('marca' + " " + d)){
    listar(d)

  }
}


function listar(d){
 console.log(d)
  //listaE1[0] = document.querySelector('#cadastrosdecarros');
    //const conteudo = document.createElement('<p>')
   //listaE1[0].innerHTML="aaaaa"
    console.log("listou")

    const row = document.createElement("div");


    row.innerHTML = `
    <div class="row">
              <div class="col-sm-2">
                <img src="${localStorage.getItem('foto'+" " + d)}" class="img-fluid" alt="Imagem responsiva">
              </div>
              <div class="col-sm">
                <p>
                    <h4 id='nomedomodelo'>${localStorage.getItem('modelo'+" " + d)}</h4>
                </p>
                <label id="identificador"> ${d}</label>
                <p>
                    
                    <strong>Marca:</strong> <label id="marcaveiculo">${localStorage.getItem('marca'+" " + d)}</label>
                    <br>
                    <strong>Preço:</strong> R$ <label id="preco"> ${localStorage.getItem('preco'+" " + d)}</label> 
                    <br>
                    <strong>Cor:</strong> <label id="cor">${localStorage.getItem('cor'+" " + d)}</label>
                    <br>
                    <strong>Ano:</strong> <label id="cor">${localStorage.getItem('ano'+" " + d)}</label>
                </p>
                
                <p>
                    <label id="descricao">${localStorage.getItem('descricao'+" " + d)} </label>
                </p>
                
                <p class="float-right">
                    <a href="#" id="${d}" class="btn btn-primary">Editar</a>
                    <a href="#" id="${d}" onclick="deletar()" class="btn btn-danger">Excluir</a>
                </p>
              </div>
              
            </div>
    `;

    $("#addcadastrosdecarros").appendChild(row);
}

function deletar(){
   var marca = document.getElementById("descricao").value
  console.log(marca)
  
}
