import React, { useState } from 'react';
import Investment from './components/Body/UserInput/Investment';
import ResultatTable from './components/Body/Resulat/ResulatTable';
import Header from './components/Header/Header';



function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const [initialeInvestment, setInitialeInvestement] = useState(0);

  const calculateHandler = (form) => {
    let yearlyData= [];
    if(form){

      let currentSavings = form.currentSavings;
      let yearlyContribution = form.yearlyContribution;
      let expectedReturn = form.expectedReturn /100;
      let duration = form.duration;

      setInitialeInvestement(currentSavings)
      
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution ;   
        
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }

    setYearlyData(yearlyData);
  };




  return (
    <div>
      <Header />
      <Investment onSubmit={calculateHandler} setYearlyData={setYearlyData}/>
      {
        yearlyData.length > 0 ? 
          <ResultatTable data={yearlyData} initialeInvestment={initialeInvestment} />
        : 
          <p style={{color: 'orange', textAlign: 'center'}}> Please Enter Values </p>
      }
      </div>
  );
}

export default App;
