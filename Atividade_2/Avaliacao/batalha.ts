import { CenarioDeBatalha } from "./CenarioDeBatalha"
import { JaEliminadoException } from "./errors"

export interface Defensivel {
    estaEliminado(): boolean
    defenderAtaque(valorAtaque: number): void
}

class Guerreiro implements Defensivel {
    private id: number 
    private descricao: string 
    private forcaAtaque: number
    private life: number = 10

    constructor(id: number, descricao: string, forcaAtaque: number) {
        this.id = id
        this.descricao = descricao
        this.forcaAtaque = forcaAtaque
    }

    estaEliminado(): boolean {
        if(this.life <= 0) {
            return true
        } else {
            return false
        }
    }

    defenderAtaque(valorAtaque: number): void {
        this.life = this.life - valorAtaque
    }

    atacar(defensivel: Defensivel) {
        if(defensivel.estaEliminado() == true) {
            throw new JaEliminadoException(`Já está eliminado!`)
        }

        defensivel.defenderAtaque(this.forcaAtaque)
    }
}

class BaseMilitar implements Defensivel{
    private id: number
    private localizacaoX: string 
    private localizacaoY: string 
    private danos: number = 0

    constructor(id: number, localizacaoX: string, localizacaoY: string) {
        this.id = id
        this.localizacaoX = localizacaoX
        this.localizacaoY = localizacaoY
    }

    estaEliminado(): boolean {
        if(this.danos >= 90) {
            return true
        } else {
            return false
        }
    }

    defenderAtaque(valorAtaque: number): void {
        this.danos = this.danos + valorAtaque
    }
}

function main () {
    try {

        const guerreiro1 = new Guerreiro(1, 'Forte', 20)
        const guerreiro2 = new Guerreiro(2, 'Rápido', 10)
       
    
        const base1 = new BaseMilitar(1, '333', '226')
        const base2 = new BaseMilitar(2, '312', '432')
    
    
        guerreiro1.atacar(base1)
        guerreiro1.atacar(base1)
        guerreiro1.atacar(base1)
        base1.defenderAtaque(20)
        guerreiro2.atacar(base2)
        base2.defenderAtaque(10)
        base1.defenderAtaque(20)
        base1.defenderAtaque(5)
        guerreiro1.defenderAtaque(10)
        guerreiro1.atacar(base1)
        guerreiro2.atacar(base1)

        const cenario = new CenarioDeBatalha()
        const basesMilitares = [guerreiro1, guerreiro2]
        const guerreiros = [base1, base2]

        cenario.avaliar(guerreiros, basesMilitares)



    } catch (err) {
        if(err instanceof JaEliminadoException) {
            console.log(err.message)
        }else if (err instanceof Error) {
            console.log('Erro no Sistema. Contate o administrador.')
        }
    }


    
}

main()