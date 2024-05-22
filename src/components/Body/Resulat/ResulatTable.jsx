import React from 'react'
import classes from './ResulatTable.module.css'


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const ResultatTable = ({ data, initialeInvestment }) => {
    return (
        <table className={classes.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td> YEAY NUMBER </td>
                    <td> TOTAL SAVINGS END OF YEAR </td>
                    <td> INTEREST GAINED IN YEAR </td>
                    <td> TOTAL INTEREST GAINED </td>
                    <td> TOTAL INVESTED CAPITAL </td>
                </tr>
                {
                    data.map(value => (
                        <tr key={value.year}>
                            <td> {value.year} </td>
                            <td> {formatter.format(value.savingsEndOfYear)}</td>
                            <td> {formatter.format(value.yearlyInterest)}</td>
                            <td> {formatter.format(value.yearlyInterest - initialeInvestment - (value.yearlyContribution * value.year) )}</td>
                            <td> {formatter.format(initialeInvestment + (value.yearlyContribution * value.year))}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ResultatTable;