console.log("testes rapidos")

function limpar(){
    document.getElementById('marca').value = "--Selecionar--"
    document.getElementById('ano').value = ""
    document.getElementById('foto').value = ""
    document.getElementById('modelo').value = ""
    document.getElementById('preco').value = ""
    document.getElementById('cor').value = "--Selecionar--"
    document.getElementById('descricao').value = ""
}


function rotinaclientes (){
    /*var clienteobjeto = [];

    clienteobjeto = {
         marca: '',
         ano: 0,
         foto: '',
         modelo:'',
         preco:0,
         cor:'',
         descricao:'',
         id:0
    };*/

    console.log("VALORES QUE VEM DO FORM E CHEGA NO CLIENTES.JS")
    console.log(localStorage.getItem('marca'))
    console.log(localStorage.getItem('ano'))
    console.log(localStorage.getItem('foto'))
    console.log(localStorage.getItem('modelo'))
    console.log(localStorage.getItem('preco'))
    console.log(localStorage.getItem('cor'))
    console.log(localStorage.getItem('descricao'))



    var clienteobjeto  = {
        marca: localStorage.getItem('marca'),
        ano: localStorage.getItem('ano'),
        foto: localStorage.getItem('foto'),
        modelo: localStorage.getItem('modelo'),
        preco: localStorage.getItem('preco'),
        cor: localStorage.getItem('cor'),
        descricao: localStorage.getItem('descricao')
    }

    var cadastrados = localStorage.cadastrados ? JSON.parse(localStorage.cadastrados) : [];
    cadastrados.push(clienteobjeto)

    localStorage.cadastrados = JSON.stringify(cadastrados);
    console.log(cadastrados)

    
    

    window.location.href = "cadastrocompleto.html";

    

    
    
}


