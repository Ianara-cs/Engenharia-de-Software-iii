export class AplicacaoError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class ContaInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class SaldoInsuficienteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class ValorInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PoupancaInvalidaError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class NumeroInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}