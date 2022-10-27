// Q1

export interface IFigurasGeometricas {
    calcularArea(): number
    calcularPerimetro(): number

}

export interface IComparevel {
    comparar(formaGeometrica: FigurasGeometricas): number
}

export class FigurasGeometricas {

    constructor(protected altura: number, protected base: number ) {
        this.altura
        this.base
    }
}

export class Quadrado extends FigurasGeometricas implements IFigurasGeometricas {

    calcularArea(): number {
        let area = this.altura * this.altura
        return area
    }

    calcularPerimetro(): number {
        let perimetro = this.altura * 4
        return perimetro
    }
}

export class Triangulo extends FigurasGeometricas implements IFigurasGeometricas {
    protected terceiroLado: number

    constructor(altura: number, base: number, terceiroLado: number ) {
        super( altura, base)
        this.terceiroLado = terceiroLado
    }

    calcularArea(): number {
        let area = (this.base * this.altura) / 2
        return area
    }

    calcularPerimetro(): number {
        let perimetro = this.base + this.altura + this.terceiroLado
        return perimetro
    }
}

export class Retangulo extends FigurasGeometricas implements IFigurasGeometricas {
    calcularArea(): number {
        let area = this.base * this.altura
        return area
    }

    calcularPerimetro(): number {
        let perimetro = (this.base * 2) + (this.altura * 2)
        return perimetro
    }
} 


class Teste1 {
    teste() {
        const quadrado: IFigurasGeometricas = new Quadrado(5, 5)
        console.log(`Quadrado - Area: ${quadrado.calcularArea()} Perímetro: ${quadrado.calcularPerimetro()}`)

        const triangulo: IFigurasGeometricas = new Triangulo(4, 6, 4)
        console.log(`Triângulo - Area: ${triangulo.calcularArea()}  Perímetro: ${triangulo.calcularPerimetro()}`)

        const retangulo: IFigurasGeometricas = new Retangulo(5, 6)
        console.log(`Retangulo - Area: ${retangulo.calcularArea()} Perímetro: ${retangulo.calcularPerimetro()}`)
    }
}

const q1 = new Teste1()
q1.teste()