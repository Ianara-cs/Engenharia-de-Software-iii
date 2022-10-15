class Empregado {
    private _salario: number = 500;

    calcularSalario(): number {
        return this._salario
    }

}

class Diarista extends Empregado {

    override calcularSalario(): number { 
        const salario =  super.calcularSalario() / 30
        return salario
    }
}

class Horista extends Diarista {
    override calcularSalario(): number {
        const salario = super.calcularSalario() / 24
        return salario
    }
}

const empregado = new Empregado()
const diarista = new Diarista()
const horista = new Horista()

console.log(`R$${empregado.calcularSalario().toFixed(2)}`)
console.log(`R$${diarista.calcularSalario().toFixed(2)}` )
console.log(`R$${horista.calcularSalario().toFixed(2)}`)