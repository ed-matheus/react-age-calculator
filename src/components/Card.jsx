import './Card.css'
// import { useState } from 'react'

const Card = () => {
    // Auto catching the date
    const actualDate = new Date()
    const currentDay = actualDate.getDate()
    const currentMonth = actualDate.getMonth()+1
    const currentYear = actualDate.getFullYear()

    const ageCalc = () => {
        const dayValue = document.querySelector('#day').value
        const monthValue = document.querySelector('#month').value
        const yearValue = document.querySelector('#year').value

        // Catching the span elements
        const years = document.querySelector('#years')
        const months = document.querySelector('#months')
        const days = document.querySelector('#days')

        // console.log(`dia: ${dayValue}, mês: ${monthValue}, ano: ${yearValue}`)
        // console.log(`Data: ${day}/${month}/${year}`)

        // Calculating...
        const age = currentYear - yearValue
        const monthCalc = currentMonth - monthValue

        // Showing the results
        years.textContent = age
        months.textContent = monthCalc
    }

    // let [data, setData] = useState('- -')

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