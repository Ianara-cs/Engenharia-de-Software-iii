// Q2 e Q3

interface IComparavel {
    comparar(formaGeometrica: FiguraGeometrica): number
}

abstract class FiguraGeometrica {

    constructor(protected altura: number, protected base: number ) {
        this.altura
        this.base
    }

    abstract calcularArea(): number
    abstract calcularPerimetro(): number
}

class Quadrado extends FiguraGeometrica implements IComparavel{

    calcularArea(): number {
        let area = this.altura * this.altura
        return area
    }

    calcularPerimetro(): number {
        let perimetro = this.base * 4
        return perimetro
    }

    comparar(formaGeometrica: FiguraGeometrica): number {
        if(this.calcularArea() < formaGeometrica.calcularArea()) {
            return -1
        } else if (this.calcularArea() == formaGeometrica.calcularArea()) {
            return 0
        } else {
            return 1
        }
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

    comparar(formaGeometrica: FiguraGeometrica): number {
        if(this.calcularArea() < formaGeometrica.calcularArea()) {
            return -1
        } else if (this.calcularArea() == formaGeometrica.calcularArea()) {
            return 0
        } else {
            return 1
        }
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

    comparar(formaGeometrica: FiguraGeometrica): number {
        if(this.calcularArea() < formaGeometrica.calcularArea()) {
            return -1
        } else if (this.calcularArea() == formaGeometrica.calcularArea()) {
            return 0
        } else {
            return 1
        }
    }
} 


class Teste2 {
    teste() {
        const quadrado: IComparavel = new Quadrado(5, 5)
        const triangulo: IComparavel = new Triangulo(4, 6, 4)
        const retangulo: IComparavel = new Retangulo(5, 6)

        const newQuadrado : FiguraGeometrica = new Quadrado(5, 5)
        const newTriangulo : FiguraGeometrica = new Triangulo(5, 5, 7)
        const newRetangulo : FiguraGeometrica = new Retangulo(5, 8)

        console.log(quadrado.comparar(newQuadrado))
        console.log(quadrado.comparar(newTriangulo))
        console.log(quadrado.comparar(newRetangulo))

        console.log(triangulo.comparar(newQuadrado))
        console.log(triangulo.comparar(newRetangulo))
        console.log(triangulo.comparar(newRetangulo))

        console.log(retangulo.comparar(newTriangulo))
        console.log(retangulo.comparar(newQuadrado))
        console.log(retangulo.comparar(newRetangulo))
    }
}

const q1 = new Teste2()
q1.teste()