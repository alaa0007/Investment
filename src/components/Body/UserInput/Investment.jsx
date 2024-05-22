import React, { useState } from 'react'
import classes from './Investment.module.css'


const initialForm = {
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0,
};


const Investment = ({ onSubmit, setYearlyData }) => {
    /*HOOKS */
    const [form, setForm] = useState(initialForm);

    /* FUNCTIONS */
    const onChangeValues = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm((prevFrom) => ({
          ...prevFrom,
          [name]: +value,
        }));
      };
    
      const handleResetForm = () => {
        setForm(initialForm);
        setYearlyData([]);
      };


    const handleSubitForm = (event) => {
        event.preventDefault();
        onSubmit(form);
    }
    
    return (
        <form className={classes.form} onSubmit={handleSubitForm}>
            <div className={classes.inputGroup}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" name="currentSavings" value={form.currentSavings} id="currentSavings" onChange={onChangeValues}/>
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" name="yearlyContribution" value={form.yearlyContribution} id="yearlyContribution"  onChange={onChangeValues}/>
            </p>
            </div>
            <div className={classes.inputGroup}>
            <p>
                <label htmlFor="expected-return">
                Expected Interest (%, per year)
                </label>
                <input type="number" name="expectedReturn" value={form.expectedReturn} id="expectedReturn"  onChange={onChangeValues}/>
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" name="duration" value={form.duration} id="duration"  onChange={onChangeValues}/>
            </p>
            </div>
            <p className={classes.actions}>
            <button onClick={handleResetForm} type="reset" className={classes.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={classes.button}>
                Calculate
            </button>
            </p>
        </form>
    )
}

export default Investment;