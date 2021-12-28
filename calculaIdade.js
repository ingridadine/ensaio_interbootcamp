function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Roverdi",
    idade: 26
}

const pessoa2 = {
    nome: "Dini",
    idade: 32
}

// console.log(calculaIdade.call(pessoa2, 10));
console.log(calculaIdade.apply(pessoa1, [10]));