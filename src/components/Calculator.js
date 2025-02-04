import { useState } from 'react';

const Calculator = () => {
  const [dayValue, setDayValue] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');

  const [dayValueError, setDayValueError] = useState(false);
  const [monthValueError, setMonthValueError] = useState(false);
  const [yearValueError, setYearValueError] = useState(false);

  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

  function setDay(value) {
    if (value > 0 && value <= 31) {
      setDayValueError(false);
    } else {
      setDayValueError(true);
    }
    setDayValue(value);
  }

  function setMonth(value) {
    if (value > 0 && value <= 12) {
      setMonthValueError(false);
    } else {
      setMonthValueError(true);
    }
    setMonthValue(value);
  }

  function setYear(value) {
    if (value > 1900 && value <= new Date().getFullYear()) {
      setYearValueError(false);
    } else {
      setYearValueError(true);
    }
    setYearValue(value);
  }

  function calculateAge() {
    if (dayValueError || monthValueError || yearValueError || !dayValue || !monthValue || !yearValue) {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
      return;
    }

    const birthDate = new Date(yearValue, monthValue - 1, dayValue);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  }

  return (
    <section className='main-calculator'>
      <header className='label-header'>
        <div className={dayValueError ? 'the-label-error' : 'the-label'}>
          <label className='label-box'>DAY</label>
        </div>
        <div className={monthValueError ? 'the-label-error' : 'the-label'}>
          <label className='label-box'>MONTH</label>
        </div>
        <div className={yearValueError ? 'the-label-error' : 'the-label'}>
          <label className='label-box'>YEAR</label>
        </div>
      </header>

      <header className='main-header'>
        <div className='the-box'>
          <input
            className={dayValueError ? 'input-box-error' : 'input-box'}
            value={dayValue}
            onChange={(e) => setDay(e.target.value)}
            type='number'
          />
        </div>
        <div className='the-box'>
          <input
            className={monthValueError ? 'input-box-error' : 'input-box'}
            value={monthValue}
            onChange={(e) => setMonth(e.target.value)}
            type='number'
          />
        </div>
        <div className='the-box'>
          <input
            className={yearValueError ? 'input-box-error' : 'input-box'}
            value={yearValue}
            onChange={(e) => setYear(e.target.value)}
            type='number'
          />
        </div>
      </header>

      <center style={{ width: '100%', position: 'relative' }}>
        <div className='separator'>
          
            <button onClick={calculateAge} className='circle-navigator'>
              <img src={'icon-arrow.svg'} className='img-arrow' alt='Calculate' />
            </button>
          
        </div>
      </center>

      <div className='result-age-main'>
        <div><label>{age.years} </label>years</div>
        <div><label>{age.months}</label> months</div>
        <div><label>{age.days}</label> days</div>
      </div>
    </section>
  );
};

export default Calculator;
