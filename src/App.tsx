import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hook/useTransaction";

import { GlobalStyle } from "./styles/global";
import ReactModal from "react-modal";


export function App() {

  const [isNewTransaction, setIsNewTransaction] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransaction(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransaction(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransaction}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  )
}
