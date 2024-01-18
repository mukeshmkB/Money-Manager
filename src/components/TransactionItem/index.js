import './index.css'
const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, optionId} = transactionDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="list-items-container">
      <p className="list-items-heading">{title}</p>
      <p className="list-items-heading"> RS {amount}</p>
      <p className="list-items-heading">{optionId}</p>
      <button className="dlt-btn" data-testid="delete" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-btn"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
