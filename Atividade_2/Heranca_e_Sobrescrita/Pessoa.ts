class Pessoa {
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this._nome = nome
        this._sobrenome = sobrenome
    }

    get nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`
    }
}

class Funcionario extends Pessoa {
    private _matricula: string
    private _salario: number

    constructor(matricula: string, salario: number, _nome: string, _sobrenome: string) {
        super(_nome, _sobrenome)
        this._matricula = matricula,
        this._salario = salario
    }

    get matricula() {
        return this._matricula
    }

    get salario() {
        return this._salario
    }

    calcularSalarioPrimeiraParcela(): number {
        if(this.salario < 0){
            throw new Error("Salário negativo")
        }
        const parcela = (this._salario * 0.6) 
        return parcela
    }

    calcularSalarioSegundaParcela(): number {
        if(this.salario < 0){
            throw new Error("Salário negativo")
        }
        const parcela = (this._salario * 0.4)
        return parcela 
    }
}

class Professor extends Funcionario {
    private _titulacao: string

    constructor(titulacao: string, _matricula: string, _salario: number, _nome: string, _sobrenome: string) {
        super(_matricula, _salario, _nome, _sobrenome)
        this._titulacao = titulacao
    }
    
    override calcularSalarioPrimeiraParcela(): number {
        return this.salario
    }

    override calcularSalarioSegundaParcela(): number {
        return 0
    }

    get titulacao() {
        return this._titulacao
    }
}

const pessoa: Pessoa = new Pessoa('Ianara', 'Silva')
console.log(`Nome Completo: ${pessoa.nomeCompleto}`)

const funcionario: Funcionario = new Funcionario('1', 1200, 'Rebeca', 'Lima')
console.log(`Funcionario(a)\n Nome Completo: ${funcionario.nomeCompleto}\n Matricula: ${funcionario.matricula}`) 
console.log(` Salário: R$${funcionario.salario.toFixed(2)}\nParcelas:\n 1ª - R$${funcionario.calcularSalarioPrimeiraParcela().toFixed(2)}\n 2ª - R$${funcionario.calcularSalarioSegundaParcela().toFixed(2)} `) 

const professor: Funcionario = new Professor('12', '1', 1200, 'Amanda', 'Lima')
console.log(`Professor(a)\n Nome Completo: ${professor.nomeCompleto}\n Matricula: ${professor.matricula}`) 
console.log(` Salário: R$${professor.salario.toFixed(2)}\nParcelas:\n 1ª - R$${professor.calcularSalarioPrimeiraParcela().toFixed(2)}\n 2ª - R$${professor.calcularSalarioSegundaParcela().toFixed(2)} `) 

