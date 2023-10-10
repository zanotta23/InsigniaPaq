function addProduto(){
    let quantidade = document.getElementById("imputquantidade").value
    let produto = document.getElementById("imputprod").value
    let valor = document.getElementById("imputvalor").value
    let mensagem = quantidade + " - " + produto + " - R$ " + valor
    alert(mensagem)
}