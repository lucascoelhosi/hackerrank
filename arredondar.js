/*
  Funcao de arredondamento de valores contidos em um vetor
  Para numeros maiores que 38 e, caso o proximo numero seja multiplo de 5 e a diferenca entre ele e
  o numero atual seja menor que 3, o numero atual será substituido pelo multiplo mais proximo
 */

function arredondar(dados) {
    for (let i = 0; i < dados.length; i++){
        if (dados[i] >= 38) {
            let diferenca = 0;
            while ((dados[i] + diferenca) % 5 !== 0) {
                diferenca++;
            }
            
            if (diferenca < 3) {
                dados[i] += diferenca;
            }
        }
    }
    return dados;
}