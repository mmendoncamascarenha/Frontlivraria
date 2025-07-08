/**
 * Esta Função lista todos os livros 
 */
function carregar_novidades(){
    
    const livros_novidades = document.getElementById("livrosnovidades")
    let saida = "";
    /**
     * A Função fetch(busca) realiza a chamada da URL (recurso) do servidor de backend com o resultado de uma consulta select para exibir todos os livros cadastrados em banco de dados
     */
    fetch("http://127.0.0.1:5000/api/v1/Produto/listar")
    .then((res)=>res.json())                                             /*+= vai acumular os livros*/ 
    .then((dados)=>{
        /**
         * A função fetch espera o retorno dos dados da chamada da url, e quando retorna dados, esta são mapeados, portanto cada um dos livros é passado para a variavel liv e,então realizados a montagem de uma saída estruturada dos livros em divs html
         */
        dados.map((liv)=>{
            saida += `   
            <div class="livro">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="preco">R$ ${liv.preco}</p>
                <button> <img src="img/carrinho-de-compras.png">
                <p>Adicionar ao carrinho</p>
                </button>
            </div>
            `                  
        })
        // com a saída de divs montada adicionamos a uma div livros que está na tela
        livros_novidades.innerHTML = saida;
    })

    carregar_maisvendidos();
}

function carregar_maisvendidos(){
    
    const livros_maisvendidos = document.getElementById("livrosmaisvendidos")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarmaisvendidos")
    .then((res)=>res.json())                                             
    .then((dados)=>{
        dados.map((liv)=>{
            saida += `   
            <div class="livro">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="quantidade">Qtd: ${liv.quantidade}</p>
            </div>`                  
        })
        livros_maisvendidos.innerHTML = saida;
    })
    carregar_autores();
}

function carregar_autores(){
    
    const livros_autores = document.getElementById("livrosautores")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/autor/listar")
    .then((res)=>res.json())                                             
    .then((dados)=>{
        dados.map((liv)=>{
            saida += `   
            <div class="autor">
                <img src="${liv.foto}" alt="Autor ${liv.nome}">
                <h3>${liv.nome}</h3>
            </div>`                  
        })
        livros_autores.innerHTML = saida;
    })
}
/**
 * aquii estamos criando uma estrutura para realizar a rolagem das fotos dos livros a variavel pe está sendo usada para armazenar a posição da caixa de fotos. ela tambem é usada para realizar o ponto de parada, do lado esquerdo e direto
 */

let pe = 0;
function rolarNovidadesEsquerda(){

    
    if(pe < -1000){
        pe = -1050;
    }
    else{
        pe-=100;
    }
    let livrosnovidades = document.getElementById("livrosnovidades");
    livrosnovidades.style.marginLeft=`${pe}px`;
    
    //console.log(livrosnovidades.style.marginLeft)
}

function rolarNovidadesDireita(){

    
    if(pe < 0){
        pe = -0;
    }
    else{
        pe+= 0;
    }
    let livrosnovidades = document.getElementById("livrosnovidades");
    livrosnovidades.style.marginLeft=`${pe}px`;
    

}

function carregarlivrosesporte(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/esporte")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livesporte>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosficcao(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/ficcao")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livficcao>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosromance(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/romance")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livromance>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosfantasia(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/fantasia")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livfantasia>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosmanga(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/manga")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livmanga>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

//##########################################################################################################################
//################################################# ADICIONAR CARRINHO
let nome_carrinho = "carrinho"

/**
 * estamos criando um variavel que ira guarda os produtos no carrinho de compras. temos uma verificaççao no banco de dados do navegador para saber se já existe algum produto no carrinho. Caso exista, vamos colocar os produtos na variavel produtos_no_carrinho , caso contrario, criaremos uma lista completamente vazia
 */
let produtos_no_carrinho = localStorage.getItem(nome_carrinho) ?JSON.parse(localStorage.getItem(nome_carrinho)) :   [];
/**
 * A funçao adicionar_carrinho recebe 5 parametros para adicionar um novo produto ao carrinho. Dentro da funçãoi criamos um objeto chamado produto que recebe dos os 5 dados passados sobre o produto que se deseja adicionar ao carrinho 
 */

function adicionar_carrinho(id,foto,nome,preco,qtd){
    //alert(`${foto} \n ${nome} \n ${preco} \n ${qtd}`);
    let produto = {
        id:id,
        nome_produto:nome,
        foto_produto:foto,
        preco_produto:preco,
        quantidade_produto:qtd
    }
    produtos_no_carrinho.push(produto);

    // vamos adicionar a lista de produtos do carrinho ao banco
    // de dados do navegador, usando o comando localstorage
    window.localStorage.setItem(nome_carrinho,JSON.stringify(produtos_no_carrinho))
}

function carregar_detalhes(){

    let idlivro = window.location.search.split('=')
    //console.log(idlivro);
    idlivro = idlivro[1];

    const div_detalhes = document.getElementById("detalhes")

    fetch(`http://127.0.0.1:5000/api/v1/produto/listarporid/${idlivro}`)
    .then((res)=>res.json())
    .then((dt)=>{
        console.log(dt);
        let div_img = document.createElement("div");
        div_img.setAttribute("id","div_img");
        let div_capa = document.createElement("div");
        div_capa.setAttribute("id","div_capa");
        let img_capa = document.createElement("img");
        img_capa.src=dt[0].foto1;
        // adicionar a imagem da capa, na div capa
        div_capa.appendChild(img_capa)

        // adicionar a div capa a div imagem
        div_img.appendChild(div_capa)

        let div_miniatura = document.createElement("div");
        div_miniatura.setAttribute("id","div_miniatura");
        let img_miniatura1 = document.createElement("img");
        let img_miniatura2 = document.createElement("img");
        let img_miniatura3 = document.createElement("img");
        img_miniatura1.src=dt[0].foto1;
        img_miniatura2.src=dt[0].foto2;
        img_miniatura3.src=dt[0].foto3;
        // colocar as fotos de mininatura dentro da div miniatura
        div_miniatura.appendChild(img_miniatura1);
        div_miniatura.appendChild(img_miniatura2);
        div_miniatura.appendChild(img_miniatura3);

       // colocar a div miniatura dentro da div imagem
       div_img.appendChild(div_miniatura);

       // colocar a div de imagens dentro da div detalhes
       div_detalhes.appendChild(div_img);

       let div_titulo_descricao = document.createElement("div");
       div_titulo_descricao.setAttribute("id","div_titulo_descricao");
       
        let h3_titulo = document.createElement("h3");
        h3_titulo.innerHTML = dt[0].nome;

        let p_descricao = document.createElement("p");
        p_descricao.innerHTML = dt[0].descricao;
    
        // adicionar o titulo e a descrição dentro da div titulo dscricao
        div_titulo_descricao.appendChild(h3_titulo);
        div_titulo_descricao.appendChild(p_descricao);
        
        div_detalhes.appendChild(div_titulo_descricao);

        let div_carrinho = document.createElement("id");
        div_carrinho.setAttribute("id","div_carrinho");

        let p_preco = document.createElement("div");
        p_preco.innerHTML = dt[0].preco;

        let btn_adicionar_carrinho = document.createElement("button")
        btn_adicionar_carrinho.innerHTML = "Adicionar ao carrinho";

        //btn_adicionar_carrinho.setAttribute("onclick",adicionar_carrinho);
        // função adicionar_carrinho e passamos como parametro os dados do livro na quele momento
        btn_adicionar_carrinho.onclick = ()=>{
            adicionar_carrinho(dt[0].id,dt[0].foto1,dt[0].nome,dt[0].preco,1);
        }

        //adicionar o p e o btn a div carrinho 
        div_carrinho.appendChild(p_preco);
        div_carrinho.appendChild(btn_adicionar_carrinho)

        div_detalhes.appendChild(div_carrinho);
    })
    .catch((error)=>{
        console.error(error)
    })
}
//icone do carrinho na barra de navegação
const area_carrinho = document.getElementsByClassName("carrinho")[0];
const div_qtd_itens = document.createElement("div")
div_qtd_itens.setAttribute("id","div_qtd_itens");
area_carrinho.appendChild(div_qtd_itens) 

/**
 * Para Remover um item do carrinho, faremos o uso do comando filter que ira nos ajurdar a fazer um filtro na lista de produtos no carrinho
 */
function remover_do_carrinho(id){
    //Vamos filtrar os todods os produtos diferentes(!==) do produtos selecionado.
    //depoiis passamos para o carrinho apenas os produtos que sobram sem o produto removido
    
    produtos_no_carrinho = produtos_no_carrinho.filter(item => item.id !== id);
    window.localStorage.setItem(nome_carrinho,JSON.stringify(produtos_no_carrinho));
    // recarrega a pagina mostrando somente os prodtps restantes no carrinho
    window.location.reload();

}




//let qtd_produtos_carrinho = 0;
function carregar_produtos_carrinho(){

    let produtos = window.localStorage.getItem("carrinho");
    if(produtos!=null){
        document.getElementById("div_qtd_itens").style.display="block";
    }
    console.log(produtos);
    console.log(JSON.parse(produtos));
    console.log(JSON.parse(produtos).length);
    // adiciona a quantidade de elementos no carrinho ao icone do carrinho na barra de navegação
    //qtd_produtos_carrinho = JSON.parse(produtos).produtos_no_carrinho.length;
    div_qtd_itens.innerHTML = JSON.parse(produtos).length;

    const lista_produtos_carrinho = document.getElementById("lista_produtos_carrinho");
    JSON.parse(produtos).map((itens)=>{
        let mont = `<div>
        <input type="checkbox" name="selecionado">
        <img src=${itens.foto_produto}>
        <h4>${itens.nome_produto}</h4>
        <h5>${itens.preco_produto}</h5>
        <input type="number" value=1 min=1 max=10 class="qtd">
        <p class="valor_total">${itens.preco_produto}</p>
        <img src="img/lixeira.png" class="btnexcluir" onclick="remover_do_carrinho(${itens.id})">
        </div>`;
        lista_produtos_carrinho.innerHTML+=mont;
    })


}
    // nome do localStorage para o usuario logado
    let usuario_logado = "usuario_logado"

    if(window.localStorage.getItem(usuario_logado)){
        let us = window.localStorage.getItem(usuario_logado);

        us = JSON.parse(us)

        let img_usuario = `<img src=${us.payload.fotousuario} class ="img_usuario">`
        let nome_us = us.payload.nomeusuario; 

        document.getElementsByClassName("usuario")[0].style.padding="15px"
        document.getElementsByClassName("usuario")[0].innerHTML = img_usuario + nome_us

    }




    function efetuarlogin(){
        const usuario = document.getElementById("txtusuario")
        const senha = document.getElementById("txtpassword")
    
        fetch("http://127.0.0.1:5000/api/v1/usuario/login",{
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                usuario:usuario.value,
                senha:senha.value
            })
        })
        .then((rs)=>rs.json())
        .then((dados)=>{
            //console.log(dados);
            window.localStorage.setItem(usuario_logado,JSON.stringify(dados))
        
        //limpar o formulario
        usuario.value = "";
        senha.value = "";
        // atualizar a tela
        window.location.reload();
    })
        .catch((erro)=>console.error(erro))
    }



