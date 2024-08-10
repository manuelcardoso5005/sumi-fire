/* PAÇO 1 */

/* RECUPERANDO OS ELEMENTOS DO DOM */
const btnStep1 = document.querySelector('#step1');
const step1Btn = document.querySelector('.basic-info');
const step2Btn = document.querySelector('.structure-info');
const errorName = document.querySelector('.erroName');
const buildName = document.querySelector('#name');
const address = document.querySelector('#address');
const errorAddress = document.querySelector('.erroAddress');
const constrution = document.querySelector('#constrution');
const errorConstrution = document.querySelector('.erroConstrution');
const year = document.querySelector('#year');
const erroYear = document.querySelector('.erroYear');
const containerBiuld = document.querySelector('.bild');
const estrutura = document.querySelector('.structure');

/* função para mostrar a mensagem de erro */
function errorShow (error){
    error.style.opacity = '1';
}

/* função para colocar bordas vermelhas*/
function borderError (border){
    border.style.border = '1px solid var(--strawberry-red)'
}

/* Limpar o estilo de erros dos campos*/
function cleanValue (error, element){
    error.style.opacity = '0';
    element.style.border = '1px solid var(--light-gray)';
}

/* funcao para adicionar class */
function hideContent(box, className){
    box.classList.add(className);
}

/* funcao para remover class */
function showContent(box, className){
    box.classList.remove(className);
}

buildName.addEventListener('input', ()=>{
    cleanValue (errorName, buildName);
});

address.addEventListener('input', ()=>{
    cleanValue (errorAddress, address);
});

constrution.addEventListener('change', ()=>{
    cleanValue (errorConstrution, constrution);
});

year.addEventListener('input', function() {
    cleanValue(erroYear, year);
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
});

btnStep1.addEventListener('click', ()=>{
    const buildNameValue = buildName.value;
    const addressValue = address.value;
    const construtionValue = constrution.value;
    const yearValue = year.value;
 
    let allFieldsFilled = true;

    if (buildNameValue === '') {
        errorShow(errorName);
        borderError(buildName);
        allFieldsFilled = false;
    }

    if (addressValue === '') {
        errorShow(errorAddress);
        borderError(address);
        allFieldsFilled = false;
    }

    if (construtionValue === '') {
        errorShow(errorConstrution);
        borderError(constrution);
        allFieldsFilled = false;
    }

    if (yearValue === '' || yearValue.length < 4) {
        errorShow(erroYear);
        borderError(year);
        allFieldsFilled = false;
    }

    if (allFieldsFilled) {
        hideContent(containerBiuld, 'hideBox');
        showContent(estrutura, 'hideBox');
        hideContent(step2Btn, 'activeBox');
        showContent(step1Btn, 'activeBox');
    }
});

/* PAÇO 2 */

const btnBack1 = document.querySelector('#back1');
const btnNext2 = document.querySelector('#step2');
const erroMaterial = document.querySelector('.erroMaterialConstrution');
const material = document.querySelector('#materialConstrution'); 
const floors = document.querySelector('#floors');
const erroFloors = document.querySelector(".erroFloors");
const erroArea = document.querySelector('.erroArea');
const area = document.querySelector('#area');
const otherMaterial = document.querySelector('#otherMaterial');
const checkboxes = document.querySelectorAll('input[name="opcao"]');
const erroPrevention = document.querySelector('.erroPrevention');
const ocupation = document.querySelector('.ocupation');
const step3Btn = document.querySelector('.ocupation-info');
const preventionOption = document.querySelector('#preventionOption');
 
btnBack1.addEventListener('click', ()=>{
    showContent(containerBiuld, 'hideBox');
    hideContent(estrutura, 'hideBox');
    showContent(step2Btn, 'activeBox');
    hideContent(step1Btn, 'activeBox');
});

material.addEventListener('change', () => {
    const materialValue = material.value; 
    cleanValue(erroMaterial, material);
    if (materialValue === 'outros') {
        showContent(otherMaterial, 'hideBox');
    } else {
        hideContent(otherMaterial, 'hideBox');
    }
});

function allowOnlyPositiveNumbers(inputElement, error) {
    inputElement.addEventListener('input', function() {
        cleanValue(error, inputElement);
        
        inputElement.value = inputElement.value.replace(/[^0-9]/g, '');

        if (inputElement.value.startsWith('0')) {
            inputElement.value = inputElement.value.replace(/^0+/, '');
        }
    });
}

allowOnlyPositiveNumbers(floors, erroFloors);
allowOnlyPositiveNumbers(area, erroArea);

preventionOption.addEventListener('change', ()=>{
    cleanValue (erroPrevention, preventionOption);
});

btnNext2.addEventListener('click', ()=>{
    const materialValue = material.value;
    const floorsValue = floors.value;
    const areaValue = area.value;
/*     const sprinklersCheckbox = document.querySelector('#sprinklers');
    const alarmesCheckbox = document.getElementById('alarmes');
    const extintoresCheckbox = document.getElementById('extintores'); */

    let allFieldsFilled = true;

    if (materialValue === '') {
        errorShow(erroMaterial);
        borderError(material);
        allFieldsFilled = false;
    }
    
    if (floorsValue === '') {
        errorShow(erroFloors);
        borderError(floors);
        allFieldsFilled = false;
    }

    if (areaValue === '') {
        errorShow(erroArea);
        borderError(area);
        allFieldsFilled = false;
    }

    if (preventionOption.selectedOptions.length === 0) {
        errorShow(erroPrevention);
        allFieldsFilled = false;
    }

    if (allFieldsFilled) {
        hideContent(estrutura, 'hideBox');
        showContent(ocupation, 'hideBox');
        hideContent(step3Btn, 'activeBox');
        showContent(step2Btn, 'activeBox');
        erroPrevention.style.opacity = '0';
    }
});

/* PAÇO 3 */

const btnBack2 = document.querySelector('#back2');
const erroPeople = document.querySelector('.erroPeople');
const people = document.querySelector('#people');
const erroTypeOcupaction = document.querySelector('.erroTypeOcupaction');
const typeOcupaction = document.querySelector('#typeOcupaction');
const erroActivity = document.querySelector('.erroActivity')
const historyContainer = document.querySelector('.history');
const btnNext3 = document.querySelector('#step3');
const step4Btn = document.querySelector('.history-info');
const lblActivity = document.querySelector('#lblActivity');

btnBack2.addEventListener('click', ()=>{
    showContent(estrutura, 'hideBox');
    hideContent(ocupation, 'hideBox');
    hideContent(step2Btn, 'activeBox');
    showContent(step3Btn, 'activeBox');
});

allowOnlyPositiveNumbers(people, erroPeople);

typeOcupaction.addEventListener('change', ()=>{
    cleanValue (erroTypeOcupaction, typeOcupaction);
});

lblActivity.addEventListener('change', ()=>{
    cleanValue (erroActivity, lblActivity);
});

btnNext3.addEventListener('click', () => {
    const peopleValue = people.value;
    const typeOcupactionValue = typeOcupaction.value;

    let allFieldsFilled = true;

    if (peopleValue === '') {
        errorShow(erroPeople);
        borderError(people);
        allFieldsFilled = false;
    }

    if (typeOcupactionValue === '') {
        errorShow(erroTypeOcupaction);
        borderError(typeOcupaction);
        allFieldsFilled = false;
    }

    if (lblActivity.selectedOptions.length === 0) {
        errorShow(erroActivity);
        allFieldsFilled = false;
    }
    
    if (allFieldsFilled) {
        hideContent(ocupation, 'hideBox');
        showContent(historyContainer, 'hideBox');
        hideContent(step4Btn, 'activeBox');
        showContent(step3Btn, 'activeBox');
        erroActivity.style.opacity = '0';
    }
});

/* PAÇO 4 */

const btnBack3 = document.querySelector('#back3');
const btnNext4 = document.querySelector('#step4');
const maintenance = document.querySelector('.maintenance');
const step5Btn = document.querySelector('.maintance-info')

btnBack3.addEventListener('click', ()=> {
    hideContent(historyContainer, 'hideBox');
    showContent(ocupation, 'hideBox');
    hideContent(step3Btn, 'activeBox');
    showContent(step4Btn, 'activeBox');
});

btnNext4.addEventListener('click', ()=> {
    hideContent(historyContainer, 'hideBox');
    showContent(maintenance, 'hideBox');
    hideContent(step5Btn, 'activeBox');
    showContent(step4Btn, 'activeBox');
});

/* PAÇO 5 */

const btnBack4 = document.querySelector('#back4');
const frequnceMaintance = document.querySelector('#frequnceMaintance');
const erroMaintance = document.querySelector('.erroMaintance');
const optherFrequency = document.querySelector('#otherMaintance');
const emergencyContainer = document.querySelector('.emergencyContainer');
const step6Btn = document.querySelector('.emergency-info')
const btnNext5 = document.querySelector('#step5');

btnBack4.addEventListener('click', ()=> {
    hideContent(maintenance, 'hideBox');
    showContent(historyContainer, 'hideBox');
    hideContent(step4Btn, 'activeBox');
    showContent(step5Btn, 'activeBox');
});

frequnceMaintance.addEventListener('change', () => {
    const frequnceMaintanceValue = frequnceMaintance.value; 
    cleanValue(erroMaintance, frequnceMaintance);
    if (frequnceMaintanceValue === 'outro') {
        showContent(optherFrequency, 'hideBox');
    } else {
        hideContent(optherFrequency, 'hideBox');
    }
});

btnNext5.addEventListener('click', ()=>{
    const frequnceMaintanceValue = frequnceMaintance.value;

    let allFieldsFilled = true;

    if(frequnceMaintanceValue === ''){
        errorShow(erroMaintance);
        borderError(frequnceMaintance);
        allFieldsFilled = false;
    }

    if (allFieldsFilled) {
        hideContent(maintenance, 'hideBox');
        showContent(emergencyContainer, 'hideBox');
        hideContent(step6Btn, 'activeBox');
        showContent(step5Btn, 'activeBox');
    }

});

/* PAÇO 6 */

const btnNext6 = document.querySelector('#step6');
const btnBack5 = document.querySelector('#back5');
const distance = document.querySelector('#distance');
const erroDistance = document.querySelector('.erroDistance');
const finalContainer = document.querySelector('.final');
const step7Btn = document.querySelector('.result-info');

btnBack5.addEventListener('click', () => {
    showContent(maintenance, 'hideBox');
    hideContent (emergencyContainer, 'hideBox');
    showContent(step6Btn, 'activeBox');
    hideContent(step5Btn, 'activeBox');
});

allowOnlyPositiveNumbers(distance, erroDistance);

btnNext6.addEventListener('click', () => {
    const distanceValue = distance.value;

    let allFieldsFilled = true;
    
    if (distanceValue === '') {
        errorShow(erroDistance);
        borderError(distance);
        allFieldsFilled = false;
    }

    if (allFieldsFilled) {
        showContent(finalContainer, 'hideBox');
        hideContent (emergencyContainer, 'hideBox');
        showContent(step6Btn, 'activeBox');
        hideContent(step7Btn, 'activeBox');
    }
});

/* Retornar */

const btnFinal = document.querySelector('.final');

btnFinal.addEventListener('click', ()=> {
    console.log('console');
    hideContent(step1Btn, 'activeBox');
    showContent(step7Btn, 'activeBox');
    hideContent(finalContainer, 'hideBox');
    showContent(containerBiuld, 'hideBox');
    location.reload();
});

const percent = document.querySelector('#perc');
const barProgress = document.querySelector('.bar-progress');

function updateProgress() {

    const percentValue = percent.textContent;
    const numericPercent = parseFloat(percentValue.replace('%', ''));
    barProgress.style.width = `${numericPercent}%`;
}

updateProgress();