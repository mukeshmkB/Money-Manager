import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="display-item-container">
      <div className="balance-container balance-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div>
          <p  className="cash-maintain-text">Your Balance</p>
          <p data-testid="balanceAmount" className="cash-maintain-text">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="balance-container income-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-img"
        />
        <div>
          <p  className="cash-maintain-text">Your Income</p>
          <p data-testid="incomeAmount" className="cash-maintain-text">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="balance-container expense-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-img"
        />
        <div>
          <p  className="cash-maintain-text">Your Expenses</p>
          <p data-testid="expensesAmount" className="cash-maintain-text">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
