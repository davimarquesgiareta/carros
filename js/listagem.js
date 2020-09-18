// usar o for eaach pra listar quem tem nos objetos
console.log("to aqui")
console.log("AQUIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")


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
                <img src="${localStorage.getItem('foto'+" " + d)}" class="img-fluid" alt="Sem foto Cadastrada">
              </div>
              <div class="col-sm">
                <p>
                    <h4 id='nomedomodelo'>${localStorage.getItem('modelo'+" " + d)}</h4>
                </p>
                
                <p>
                    
                    <strong>Marca:</strong> <label id="marcaveiculo">${localStorage.getItem('marca'+" " + d)}</label>
                    <br>
                    <strong>Preço:</strong> R$ <label id="preco"> ${localStorage.getItem('preco'+" " + d)}</label> 
                    <br>
                    <strong>Cor:</strong> <label id="cor">${localStorage.getItem('cor'+" " + d)}</label>
                    <br>
                    <strong>Ano:</strong> <label id="ano">${localStorage.getItem('ano'+" " + d)}</label>
                </p>
                
                <p>
                    <label id="descricao">${localStorage.getItem('descricao'+" " + d)} </label>
                </p>
                
                <p class="float-right">
                    <a href="#" id="${d}" onclick="editar(${d})"class="btn btn-primary">Editar</a>
                    <a href="#" id="${d}" onclick="deletar(${d})" class="btn btn-danger">Excluir</a>
                </p>
              </div>
              
            </div>
    `;

    $("#addcadastrosdecarros").appendChild(row);
    
}

function deletar(d){
   
  console.log("deleta eu"+d)
  localStorage.removeItem('modelo' + " " + d)
  localStorage.removeItem('foto' + " " + d)
  localStorage.removeItem('ano' + " " + d)
  localStorage.removeItem('marca' + " " + d)
  localStorage.removeItem('descricao' + " " + d)
  localStorage.removeItem('cor' + " " + d)
  localStorage.removeItem('preco' + " " + d)

  window.location.href = "listagem.html";
  
}

function editar(d){
  //window.location.href = "listagem.html";
  
  localStorage.setItem('editor',d)
  window.location.href = "editarcadastro.html";
  
}