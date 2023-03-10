function calcular(tipo, valor) {

    if (tipo === 'acao') {

        if (valor === 'c') {
            // limpar o valor (id resultado)
            document.getElementById('resultado_visor').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado_visor').value += valor
        }

        if (valor === "=") {
            var valor_campo = eval(document.getElementById('resultado_visor').value)
            
            document.getElementById('resultado_visor').value = valor_campo
        }


    } else if (tipo === 'valor') {


        document.getElementById('resultado_visor').value += valor


    }


}