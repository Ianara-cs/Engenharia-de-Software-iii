// Q4, Q5 e Q6

interface ITributavel {
    calcularTributo(): number
}

class Conta {
    constructor(private _nome: string, private _saldo: number) {
        this._nome
        this._saldo
    }


    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }

    get saldo(): number {
        return this._saldo
    }

    set saldo(saldo: number) {
        this._saldo = saldo
    }
}

class ContaCorrente extends Conta implements ITributavel {
    calcularTributo(): number {
        return this.saldo * 0.1
    }

}

class SeguroDeVida implements ITributavel {
    calcularTributo(): number {
        return 50
    }

}

class AuditoriaInterna {
    tributavelLista: ITributavel[] = []

    adicionar(tributavel: ITributavel) {
        this.tributavelLista.push(tributavel)
    }

    calcularTributos() {
        let resul = 0

        this.tributavelLista.map(t => {
            resul += t.calcularTributo()
        })

        return resul
    }
}

class Teste3 {
    teste() {
        const c1 = new ContaCorrente('Matheus', 100)
        const c2 = new ContaCorrente('Maria', 200)
        const c3 = new ContaCorrente('Ana', 600)
        const c4 = new ContaCorrente('João', 130)

        const s1 = new SeguroDeVida()
        const s2 = new SeguroDeVida()
        const s3 = new SeguroDeVida()
        const s4 = new SeguroDeVida()

        const auditoriaInterna = new AuditoriaInterna()
        auditoriaInterna.adicionar(c1)
        auditoriaInterna.adicionar(c2)
        auditoriaInterna.adicionar(c3)
        auditoriaInterna.adicionar(c4)
        auditoriaInterna.adicionar(s1)
        auditoriaInterna.adicionar(s2)
        auditoriaInterna.adicionar(s3)
        auditoriaInterna.adicionar(s4)

        console.log(auditoriaInterna.calcularTributos())
    }
}

const t = new Teste3()
t.teste()