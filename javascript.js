let listaCarros = [
    {
        "nome": "Argo",
        "img": "img/argo.jpeg",
        "descricao": "O Argo é um carro compacto esportivo com estilo e desempenho notáveis."
    },
    {
        "nome": "Esportivo",
        "img": "img/esportivos.jpeg",
        "descricao": "Potência, design elegante e alta performance combinam em um veículo emocionante."
    },
    {
        "nome": "Kwid",
        "img": "img/kwid.jpg",
        "descricao": "Carro compacto, versátil e econômico, perfeito para a cidade e aventuras urbanas."
    },
    {
        "nome": "Mobi",
        "img": "img/mobi.jpg",
        "descricao": "Compacto, ágil e ideal para manobras urbanas. Confortável e econômico."
    },
    {
        "nome": "Pulse",
        "img": "img/pulse.jpg",
        "descricao": "SUV compacto com estilo moderno e tecnologia avançada, perfeito para aventuras urbanas."
    },
    {
        "nome": "Toyota",
        "img": "img/Toyota.jpg",
        "descricao": "Marca de renome mundial, conhecida por qualidade, durabilidade e confiabilidade em seus carros."
    }
];

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML +=
        `<div class="col-md-4">
            <div class="card m-2">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <a href="#" class="btn btn-secondary" onclick="zoomImg(${posicao})"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>`;
});

function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light"); // Correção: "light" em vez de "ligth"
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`; // Correção: "moon-fill" em vez de "moon-fiil"
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}
