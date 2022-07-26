import React from "react";
import styleTransaction from "../css/transactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
    const tr = styleTransaction
    return (
    <table className={tr.table}>
        <thead>
        <tr className={tr.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>

        <tbody className={tr.body}>
            {items ? items.map(item => {
                return (
                <tr className={tr.line} key={item.id}>
                    <td className={tr.item}>{item.type}</td>
                    <td className={tr.item}>{item.amount}</td>
                    <td className={tr.item}>{item.currency}</td>
                </tr>
                );
            }) : []}
        </tbody>
    </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string,
        })
    ).isRequired,
};

export default TransactionHistory;