import { Defensivel } from "./batalha";

export class CenarioDeBatalha {
    avaliar(guerreiros: Defensivel[], basesMilitares: Defensivel[] ) {
        let totalGuerreirosEliminado = 0
        let totalBasesEliminada = 0

        guerreiros.map(guerreiro => {
            if (guerreiro.estaEliminado() === true) {
                totalGuerreirosEliminado  += 1
            }
        })

        basesMilitares.map(baseMilitar => {
            if(baseMilitar.estaEliminado() == true) {
                totalBasesEliminada += 1
            }
        })

        if (totalGuerreirosEliminado > totalBasesEliminada) {
            console.log("O Exército de Guerreiros venceu essa batalha")
        } else if (totalGuerreirosEliminado < totalBasesEliminada) {
            console.log("O Exército de Bases Militares venceu essa batalha")
        } else if (totalGuerreirosEliminado == totalBasesEliminada) {
            console.log("Batalha terminou sem vencedor!")

        } 
    }
}