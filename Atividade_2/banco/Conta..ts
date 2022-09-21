import { SaldoInsuficienteError, ValorInvalidoError } from "./errors/error";

export class Conta {
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this.depositar(saldoInicial)
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	get numero(): String {
		return this._numero;
        
	}

	get saldo(): number {
		return this._saldo;
	}


	
	private validarValor(valor: number) {
		if(valor <= 0) {
			throw new ValorInvalidoError('Valor inválido')
		}
	}
	
	sacar(valor: number): number {

		this.validarValor(valor)
		
		if (this._saldo < valor) {
			throw new SaldoInsuficienteError('Saldo insuficiente!')
		}

		return this._saldo = this._saldo - valor;
  	}

	depositar(valor: number): number {

		this.validarValor(valor)

		return this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}