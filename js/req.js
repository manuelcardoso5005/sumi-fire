const DEFAULT_URL = 'http://localhost:8000/api';

const $construtionContent = document.querySelector('#constrution');
const $materialConstrution = document.querySelector('#materialConstrution');
const $typeOcupaction = document.querySelector('#typeOcupaction');
const $frequnceMaintance = document.querySelector('#frequnceMaintance');
const $lblActivity = document.querySelector('#lblActivity');
const $preventionOption = document.querySelector('#preventionOption');

// Função para adicionar uma nova opção ao <select>
function adicionarOpcao(select, valor, texto) {
    const novaOpcao = document.createElement('option');
    novaOpcao.value = valor;
    novaOpcao.textContent = texto;
    select.appendChild(novaOpcao);
}

// Função para fazer a requisição
function requi(address, element){
    fetch(`${DEFAULT_URL}/${address}`)
    .then(resp => resp.json())
    .then(data => {
        const dataFiles = data.data;
        dataFiles.forEach(item => {
            adicionarOpcao(element, item.id, item.nome);
        });
    })
    .catch(error => {
        console.error('Problema no:', error);
    });
}

requi('tipos-de-construcao', $construtionContent);
requi('materiais-de-construcao', $materialConstrution);
requi('tipos-de-ocupacao', $typeOcupaction);
requi('frequencia-de-manutencao', $frequnceMaintance);
requi('actividades-realizadas', $lblActivity);
requi('tipos-de-prevencao', $preventionOption);