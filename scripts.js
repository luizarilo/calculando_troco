function calcular_valor() {
    var valor_recebido = document.querySelector("#receber");
    var valor_total = document.querySelector("#total");
    var recebido = valor_recebido.value;
    var total = valor_total.value;
    var troco = (recebido - total);
    var arredondar_troco = parseFloat(troco.toFixed(2));

    console.log(recebido);
    console.log(total);
    console.log(arredondar_troco);

    alert("O troco é R$" + arredondar_troco)
    
}
