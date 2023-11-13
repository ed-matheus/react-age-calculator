import './Card.css'
// import { useState } from 'react'

const Card = () => {
    // Auto catching the current date
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()+1
    const currentYear = currentDate.getFullYear()

    const ageCalc = () => {
        const dayNasc = document.querySelector('#day').value
        const monthNasc = document.querySelector('#month').value
        const yearNasc = document.querySelector('#year').value

        // Catching the span elements
        const years = document.querySelector('#years')
        const months = document.querySelector('#months')
        const days = document.querySelector('#days')

        // Calculating age and months
        let age = currentYear - yearNasc
        let monthCalc = currentMonth - monthNasc

        // Calculating the days between the dates
        const userBirthdayThisYear = new Date(currentYear, monthNasc - 1, dayNasc);
        let daysCalc = Math.floor((currentDate - userBirthdayThisYear) / (1000 * 60 * 60 * 24));

        if(monthCalc < 0) {
            age--
            monthCalc = 0
        }

        if(daysCalc < 0) {
            daysCalc = 0
        }

        // Showing the results
        years.textContent = age
        months.textContent = monthCalc
        days.textContent = daysCalc
    }

    return (
        <>
            <div className="container__card m-3">
                <form className='mb-4'>
                    <div className='d-flex flex-column align-items-start'>
                        <label htmlFor="day">DAY</label>
                        <input type="text" id='day' />
                    </div>

                    <div className='d-flex flex-column align-items-start'>
                        <label htmlFor="month">MONTH</label>
                        <input type="text" id='month' />
                    </div>

                    <div className='d-flex flex-column align-items-start'>
                        <label htmlFor="year">YEAR</label>
                        <input type="text" id='year' />
                    </div>

                    <button type='button' onClick={ageCalc}>
                        <img src="/icon-arrow.svg" alt="arrow icon" />
                    </button>
                </form>

                <div className='output__container'>
                    <p><span id='years'>- -</span> years</p>
                    <p><span id='months'>- -</span> months</p>
                    <p><span id='days'>- -</span> days</p>
                </div>
            </div>
        </>
    )
}

export default Card