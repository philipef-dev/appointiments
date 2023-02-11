import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";

import { FormEvent, useContext, useState, useTransition } from "react";
import { useTransaction } from "../../hook/useTransaction";

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionsProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsProps) {

    const { createTransaction } = useTransaction()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type="button"
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="Preço"
                    value={amount}
                    onChange={event => setAmount(parseInt(event.target.value))}
                />

                <TransactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="btnEntrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdrawn') }}
                        isActive={type === 'withdrawn'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="btnSaida" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal >
    )
}