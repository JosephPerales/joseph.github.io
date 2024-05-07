
function randomHojas() {
    let arr= [];
    for(let i=0; i<10;i++) {
        arr.push(Math.floor((Math.random()*16)+20));
    }
    let suma = arr.reduce((acc, item) => acc + item)
    return {arr, suma}
}


function randomRoyaOrOjoPollo () {
    //Determinamos la lista de hojas con plaga de ojo de pollo o roya y la suma
    let arr= [];
    for(let i=0; i<10;i++) {
        arr.push(Math.floor(Math.random()*5));
    }
    let suma = arr.reduce((acc, item) => acc + item);
    
    // determinamos la lista de controladores biológicos y su suma
    const arrControl = arr.map((item)=> {
        if(item!=0){
            item--;
        }
        return item
    })
    let sumaControl = arrControl.reduce((acc, item) => acc + item);

    return {arr, suma, arrControl, sumaControl}
}


function randomFrutos() {
    let arr= [];
    for(let i=0; i<10;i++) {
        arr.push(Math.floor((Math.random()*51)+50));
    }
    let suma = arr.reduce((acc, item) => acc + item)
    return {arr, suma}
}

function randomBrocas () {
    //Determinamos la lista de frutos brocados y la suma
    let arr= [];
    for(let i=0; i<10;i++) {
        arr.push(Math.floor(Math.random()*7));
    }
    let suma = arr.reduce((acc, item) => acc + item);
    
    // determinamos la lista de controladores biológicos y su suma
    const arrControl = arr.map((item)=> {
        if(item!=0){
            item--;
        }
        return item
    })
    let sumaControl = arrControl.reduce((acc, item) => acc + item);

    return {arr, suma, arrControl, sumaControl}
}

function getListas() {
    const hojas = randomHojas();
    const frutos = randomFrutos();
    let hojasList = [...hojas.arr, hojas.suma, "100%"]
    let ojoPolloList= []
    let controlOjoPolloList = [] 
    let royaList = [] 
    let controlRoyaList = []
    let brocasList = []
    let controlBrocaList = []

    //calculamos la lista adecuada de ojo de pollo que pueda ir sin sobrepasar el 5%
    for(let i=0; ojoPolloList.length != 12; i++ ) {
        ojos_de_pollo = randomRoyaOrOjoPollo();
        if((ojos_de_pollo.suma/hojas.suma) < 0.04){
            ojoPolloList= [...ojos_de_pollo.arr, `${ojos_de_pollo.suma} / ${hojas.suma}`, `${(ojos_de_pollo.suma*100/hojas.suma).toFixed(3)}%`];
            controlOjoPolloList = [...ojos_de_pollo.arrControl, `${ojos_de_pollo.sumaControl} / ${hojas.suma}`, `${(ojos_de_pollo.sumaControl*100/hojas.suma).toFixed(3)}%` ]
        }
    }
    //calculamos la lista adecuada de roya que pueda ir sin sobrepasar el 5%
    for(let i=0; royaList.length != 12; i++ ) {
        royas = randomRoyaOrOjoPollo();
        if((royas.suma/hojas.suma) < 0.045){
            royaList= [...royas.arr, `${royas.suma} / ${hojas.suma}`, `${(royas.suma*100/hojas.suma).toFixed(3)}%`];
            controlRoyaList = [...royas.arrControl, `${royas.sumaControl} / ${hojas.suma}`, `${(royas.sumaControl*100/hojas.suma).toFixed(3)}%` ]
        }
    }

    //calculamos las brocas que puedan ir en los frutos sin pasar el 5%
    for(let i=0; brocasList.length != 12; i++ ) {
        brocas = randomBrocas();
        if((brocas.suma/frutos.suma) < 0.047){
            let count = -1
            brocas.arr = brocas.arr.map((item) =>{
                count = count + 1
                return `${item} / ${frutos.arr[count]}`
            })


            brocasList= [...brocas.arr, `${brocas.suma} / ${frutos.suma}`, `${(brocas.suma*100/frutos.suma).toFixed(3)}%`];

            count = -1
            brocas.arrControl = brocas.arrControl.map((item) =>{
                count = count + 1
                return `${item} / ${frutos.arr[count]}`
            })
            controlBrocaList = [...brocas.arrControl, `${brocas.sumaControl} / ${frutos.suma}`, `${(brocas.sumaControl*100/frutos.suma).toFixed(3)}%` ]
        }
    }

    return { ojoPolloList, controlOjoPolloList, royaList, controlRoyaList,hojasList, brocasList, controlBrocaList}

}


const node_ojoPollo = document.getElementById("ojo-pollo")
const node_controlOjoPollo = document.getElementById("control-ojo-pollo")
const node_roya = document.getElementById("roya")
const node_controlRoya = document.getElementById("control-roya")
const node_hojas = document.getElementById("hojas")
const node_brocas = document.getElementById("brocas")
const node_controlBrocas = document.getElementById("control-brocas")
const boton = document.getElementById("button")

function renderColumn (node, title, array) {
    node.innerHTML= `
    <div>${title}</div>
    <div>${array[0]}</div>
    <div>${array[1]}</div>
    <div>${array[2]}</div>
    <div>${array[3]}</div>
    <div>${array[4]}</div>
    <div>${array[5]}</div>
    <div>${array[6]}</div>
    <div>${array[7]}</div>
    <div>${array[8]}</div>
    <div>${array[9]}</div>
    <div>${array[10]}</div>
    <div>${array[11]}</div>
    `;
}

function renderAll() {
    const listas = getListas();
    renderColumn(node_ojoPollo, "Hojas con Ojo de Pollo", listas.ojoPolloList);
    renderColumn(node_controlOjoPollo, "Controlador", listas.controlOjoPolloList);
    renderColumn(node_roya, "Hojas con Roya", listas.royaList);
    renderColumn(node_controlRoya, "Controlador", listas.controlRoyaList);
    renderColumn(node_hojas, "Hojas", listas.hojasList);
    renderColumn(node_brocas, "Frutos Brocados", listas.brocasList);
    renderColumn(node_controlBrocas, "Controlador", listas.controlBrocaList);
} 


renderAll()
boton.addEventListener("click", renderAll)