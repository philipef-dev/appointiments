import { useTransaction } from "../../hook/useTransaction";
import { Search } from "../Search";
import { Container } from "./style";

export function TransactionTable() {

    const { transactions } = useTransaction()
    return (
        <Container>
            {/* <Search /> */}
            <table>
                <thead>
                    <tr>
                        <th>Títulos</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction =>
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR',).format(
                                new Date(transaction.createdAt)
                            )}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Container>

    )
}