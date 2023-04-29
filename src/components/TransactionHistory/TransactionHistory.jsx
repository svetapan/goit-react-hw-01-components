import PropTypes from 'prop-types';
import transactions from 'transactions.json';
import css from './TransactionHistory.module.css';

export const TransactionHistory = () => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody}>
                { transactions.map(({id, type, amount, currency}) => (
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
                ))
                }
            </tbody>
        </table>
    )
}

TransactionHistory.prototype = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}