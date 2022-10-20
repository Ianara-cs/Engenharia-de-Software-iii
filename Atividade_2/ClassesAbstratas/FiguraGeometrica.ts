abstract class FiguraGeometrica {

    constructor(protected altura: number, protected base: number ) {
        this.altura
        this.base
    }

    abstract calcularArea(): number
    abstract calcularPerimetro(): number
}

class Quadrado extends FiguraGeometrica {

    calcularArea(): number {
        let area = this.base * this.altura
        return area
    }

    calcularPerimetro(): number {
        let perimetro = this.base * 4
        return perimetro
    }
}

class Triangulo extends FiguraGeometrica {
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

class Retangulo extends FiguraGeometrica {
    calcularArea(): number {
        let area = this.base * this.altura
        return area
    }

    calcularPerimetro(): number {
        let perimetro = (this.base * 2) + (this.altura * 2)
        return perimetro
    }
} 