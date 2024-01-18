import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    amount: '',
    title: '',
    optionId: transactionTypeOptions[0].optionId,
  }
  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }
  onChangeAmount = event => {
    const amountNum = parseInt(event.target.value)
    this.setState({amount: amountNum})
  }
  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  onSubmitTransaction = event => {

    event.preventDefault()

    const {transactionList, optionId, title, amount} = this.state
    
    const typeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactionList} = this.state

    this.setState({
      transactionList: transactionList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    })
  }

  balanceAmount = () => {
    const {transactionList} = this.state
    let balance = 0
    let income = 0
    let expenses = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      } else {
        expenses += eachTransaction.amount
      }
    })
    balance = income - expenses
    return balance
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += eachTransaction.amount
      }
    })
    return expenses
  }
  render() {
    const {transactionList, optionId, title, amount} = this.state
    const balance = this.balanceAmount()
    const income = this.getIncome()
    const expenses = this.getExpenses()
    return (
      <div className="app-conatiner">
        <div className="manager-container">
          <div className="name-container">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="welcome-text">
              Welcome back to your
              <span className="money-manager">Money Manager</span>
            </p>
          </div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
          <div className="transaction-container">
            <form
              className="input-container"
              onSubmit={this.onSubmitTransaction}
            >
              <h1 className="transaction-heading">Add Transaction</h1>
              <label className="label-text" htmlFor="title">
                TITLE
              </label>
              <input
                className="input-bar"
                onChange={this.onChangeTitle}
                value={title}
                id="title"
              />

              <label className="label-text" htmlFor="amount">
                AMOUNT
              </label>

              <input
                id="amount"
                type="text"
                className="input-bar"
                onChange={this.onChangeAmount}
                value={amount}
              />

              <label className="label-text" htmlFor="type">
                TYPE
              </label>
              <select
                className="input-bar"
                onChange={this.onChangeType}
                id="type"
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="transaction-heading">History</h1>
              <ul className="list-container">
                <li className="list-item-container">
                  <p className="list-item-heading">Title</p>
                  <p className="list-item-heading">Amount</p>
                  <p className="list-item-heading">Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    key={eachTransaction.id}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
