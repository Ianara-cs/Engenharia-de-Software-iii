import { Conta } from "./Conta.";
import { AplicacaoError, ContaInexistenteError, NumeroInvalidoError, PoupancaInvalidaError } from "./errors/error";
import { Poupanca } from "./Poupanca";

export class Banco {
	private _contas: Conta[] = [];

	get contas(): Conta[] {
		return this._contas;
	}

	private validarNumeroConta(numero: String) {
		if (numero === '' || numero.length !== 4 || numero === '0000') {
			throw new NumeroInvalidoError('Número de conta inválido')
		}
	}
	
	inserir(conta: Conta): void {
		var c!: Conta
		
		this.validarNumeroConta(conta.numero)

		try {
			c = this.consultar(conta.numero);
		} catch (e) {
			this._contas.push(conta);
		}	

		if(c){
			throw new AplicacaoError('Conta já existe')
		}
	}

	consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		this.validarNumeroConta(numero)

		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
        
        if(!contaConsultada ) {
            throw new ContaInexistenteError('Conta não existe!')
        } else {
            return contaConsultada;
        }

	}

	private consultarPorIndice(numero: String): number {
		this.validarNumeroConta(numero)
		
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}

        if(indice === -1) {
            throw new ContaInexistenteError('Conta não existe!')
        } else {
            return indice;
        }

	}

	alterar(conta: Conta): void {
		this.validarNumeroConta(conta.numero)
		
		let indice: number = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
	}

	excluir(numero: string): void {
		this.validarNumeroConta(numero)
		
		let indice: number = this.consultarPorIndice(numero);
		
        for (let i: number = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i+1];
        }

        this._contas.pop(); 
	}

	depositar(numero: String, valor: number): void {
		this.validarNumeroConta(numero)
		
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void {
		this.validarNumeroConta(numero)
		
        let contaConsultada = this.consultar(numero);

		contaConsultada.sacar(valor);
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
		this.validarNumeroConta(numeroDebito)
		this.validarNumeroConta(numeroCredito)
		
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);

		contaDebito.transferir(contaCredito, valor);
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

	renderJuros(numero: String) {
		this.validarNumeroConta(numero)

		let contaConsultada = this.consultar(numero);
		
		if (!(contaConsultada instanceof Poupanca)) {
			throw new PoupancaInvalidaError('A conta deve ser do tipo poupança')
		}
		
		let poupanca: Poupanca = <Poupanca> contaConsultada;
		poupanca.renderJuros();
	}

}
