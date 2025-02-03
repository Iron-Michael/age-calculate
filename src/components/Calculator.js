import React, { useState } from 'react'

const Calculator = () => {

  const [dayValue,setDayValue]=useState("")
  const [monthValue, setMonthValue] = useState("")
  const [yearValue, setYearValue] = useState("")

  const [dayValueError,setDayValueError]=useState(false)
  const [monthValueError, setMonthValueError] = useState(false)
  const [yearValueError, setYearValueError] = useState(false)

  function setDay(value){
    if (value < 32){
      setDayValueError(false)
      setDayValue(value)
    }else{
      setDayValueError(true)
      setDayValue(value)
    }
  }

  function setMonth(value) {
    if (value < 12) {
      setMonthValueError(false)
      setMonthValue(value)
    } else {
      setMonthValueError(true)
      setMonthValue(value)
    }
  }

  function setYear(value) {
    if (value < 2025) {
      setYearValueError(false)
      setYearValue(value)
    } else {
      setYearValueError(true)
      setYearValue(value)
    }
  }


  return (
    <section className='main-calculator'>
      <header className='label-header'>
        <div className={dayValueError?'the-label-error':'the-label'} >
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
          <input className={dayValueError ? 'input-box-error' : 'input-box'} value={dayValue} onChange={(e) => setDay(e.target.value)}></input>
          </div>
          <div className='the-box'>
          <input className={monthValueError ? 'input-box-error' : 'input-box'} value={monthValue} onChange={(e) => setMonth(e.target.value)}></input>
          </div>
          <div className='the-box'>
          <input className={yearValueError ? 'input-box-error' : 'input-box'}  value={yearValue} onChange={(e) => setYear(e.target.value)} ></input>
          </div>
        </header>
        <center style={{width:"100%",position:"relative"}}>
        <div className='separator'>  
            <div className='circle-navigator'>
            <img src={'icon-arrow.svg'} className='img-arrow' ></img>
            </div>
        </div>
      
        </center>
    </section>
  )
}

export default Calculator