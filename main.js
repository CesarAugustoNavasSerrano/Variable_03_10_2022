addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("https://cesaraugustonavasserrano.000webhostapp.com/Variable_03_10_2022/api.php");
    let data = await peticion.text();
    document.body.innerHTML = data;
})