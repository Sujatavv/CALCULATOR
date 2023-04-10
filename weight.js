let kgRef=document.getElementById("kg");
let lbRef=document.getElementById("lb");
let ozRef=document.getElementById("oz");

let convertFromkg =() =>{
    let kgRef=kg.Value;
    // let kg = parseFloat(document.getElementById("kgInput").value);

    // tofixe(2) limits the decimal 2 digits
    lbRef.value =(kg * 2.205).toFixed(2);
    ozRef.value =(kg * 35.274).toFixed(2);
};

let convertFromLb = () =>{
    let lb=lbRef.value;
    kgRef.value =(lb / 2.205).toFixed(2)
    ozRef.value =(lb*16).toFixed(2);
};

let convertFromOz =() =>{
    let oz =ozRef.value;
    kgRef= (oz/35.274).toFixed(2);
    lbRef.value=(oz/16).toFixed(2);
};

kgRef.addEventListener("input",convertFromkg);
lbRef.addEventListener("input",convertFromLb);
ozRef.addEventListener("input",convertFromOz);