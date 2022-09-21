import { Banco } from "./Banco"
import { Conta } from "./Conta."
import { AplicacaoError, PoupancaInvalidaError } from "./errors/error"
import { Poupanca } from "./Poupanca"

const input = require('prompt-sync')()

function inputNumeroValor() {
    const numero: string = input('Número da Conta: ')
    const valor: number = input('Valor: ')

    return { numero, valor}
}

function main() {
    const banco : Banco = new Banco()
    let opcao: string = ''

    do {
        console.log('O que deseja fazer:')
        console.log('1 - inserir \n2 - Consultar \n3 - Alterar \n4 -Excluir \n5 - Depositar \n6 - Sacar \n7 - Transferir \n8 - Render Juros \n9 - Sair ')
        try {
            opcao = input(`Digite a o número da opção: `)

            switch(opcao) {
                case "1": 
                    console.log('Tipo de Conta: \n1 - Conta Corrente \n2 - Conta Poupança')
                    const tipoConta: string = input('Opção: ')
                    if(tipoConta === '1') {
                        const inputToInserir = inputNumeroValor()
                        banco.inserir(new Conta(inputToInserir.numero, inputToInserir.valor))
                    }
                    if(tipoConta === '2') {
                        const inputToInserir = inputNumeroValor()
                        const rederJuros: number = input('Juros: ')
                        banco.inserir(new Poupanca(inputToInserir.numero, inputToInserir.valor, rederJuros))
                    }
                    break
                case "2":
                    const numeroConsulte: string = input('Número da Conta: ')
                    const conta = banco.consultar(numeroConsulte)
                    console.log(conta)
                    break
                case "3":
                    const numeroAlterar: string = input('Número da Conta: ')
                    const valor: number = input('Valor: ')
                    banco.alterar(new Conta(numeroAlterar, valor))
                    break
                case "4":
                    const numeroExcluir: string = input('Número da Conta: ')
                    banco.excluir(numeroExcluir)
                    break
                case "5": 
                    const inputToDepositar = inputNumeroValor()
                    banco.depositar(inputToDepositar.numero, inputToDepositar.valor)
                    break
                case "6":
                    const inputToSacar = inputNumeroValor()
                    banco.sacar(inputToSacar.numero, inputToSacar.valor)
                    break
                case "7": 
                    const numeroDebito: string = input('Número da sua Conta: ')
                    const numeroCredito: string = input('Número da Conta que vai receber a transferência: ')
                    const valorToTranferir: number = input('Valor da Tranferir: ')
                    banco.transferir(numeroDebito, numeroCredito, valorToTranferir)
                    break
                case "8": 
                    const numeroToRender: string = input('Número da sua Conta: ')
                    banco.renderJuros(numeroToRender)
                    break
                default:
                    break
            } 
        
        } catch (e) {
            if(e instanceof AplicacaoError) {
                console.log(e.message)
            } else if (e instanceof PoupancaInvalidaError) {
                console.log(e.message)
            } else if (e instanceof Error) {
                console.log('Erro no Sistema. Contate o administrador.')
            }
            
        } finally {
            console.log(' ----> Operação finalizada. Digite 9 para sair')
        }

    } while (opcao != "9");
    
    console.log('Aplicação encerrada')

}

main()