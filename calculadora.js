function calcularNivel(vitorias, derrotas) {
    const saldo = vitorias - derrotas;

    let nivel;
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldo} vitórias e está no nível de ${nivel}.`;
}

// Exemplo de uso:
const vitoriasExemplo = 75;
const derrotasExemplo = 20;
const resultado = calcularNivel(vitoriasExemplo, derrotasExemplo);
console.log(resultado);
