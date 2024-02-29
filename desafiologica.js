// variaveis o nome do herói e a quantidade de XP
const nomeHeroi = prompt("Digite o nome do herói:");
const xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

//coloquei a condicional switch para o nível do herói com base na quantidade de XP
let nivelHeroi;
switch (true) {
    case xpHeroi < 1000:
        nivelHeroi = "Ferro";
        break;
    case xpHeroi <= 2000:
        nivelHeroi = "Bronze";
        break;
    case xpHeroi <= 5000:
        nivelHeroi = "Prata";
        break;
    case xpHeroi <= 7000:
        nivelHeroi = "Ouro";
        break;
    case xpHeroi <= 8000:
        nivelHeroi = "Platina";
        break;
    case xpHeroi <= 9000:
        nivelHeroi = "Ascendente";
        break;
    case xpHeroi <= 10000:
        nivelHeroi = "Imortal";
        break;
    default:
        nivelHeroi = "Radiante";
}

// finalização do codigo com a mensagem com o nome do herói e seu nível
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}.`);
