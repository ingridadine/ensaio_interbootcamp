const alunos = [
    {
        nome: 'Haskell',
        nota: 8,
    },
    {
        nome: 'Lua',
        nota: 9,
    },
    {
        nome: 'Java',
        nota: 10,
    },
    {
        nome: 'Senna',
        nota: 7,
    },
    {
        nome: 'Void',
        nota: 4,
    },
];



function alunosAprovados(array, media){
    let aprovados = [];

     for(let i = 0; i < array.length; i++){
        const {nome, nota} = array[i];

         if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));


