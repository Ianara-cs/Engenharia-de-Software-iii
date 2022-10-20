abstract class Funcinario {

    constructor(protected salario: number) {
        this.salario
    }

    abstract getBonificacao(): number
}

class Gerente extends Funcinario {
    getBonificacao(): number {
        return this.salario * 0.4
    }

}

class Diretor extends Gerente {
    getBonificacao(): number {
        return this.salario * 0.6
    }
}

class Presidente extends Funcinario {
    getBonificacao(): number {
        return this.salario + 1000
    }
}

const gerente: Funcinario = new Gerente(3000)
console.log(`Bonificação do Gerente: R$${gerente.getBonificacao().toFixed(2)}`)
const diretor: Funcinario = new Diretor(6000)
console.log(`Bonificação do Diretor: R$${diretor.getBonificacao().toFixed(2)}`)
const presidente: Funcinario = new Presidente(10000)
console.log(`Bonificação do Presidente: R$${presidente.getBonificacao().toFixed(2)}`)
