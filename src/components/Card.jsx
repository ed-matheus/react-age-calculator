import './Card.css'

/* 
    - Months with less days -
    February: 28 days
    April: 30 days
    June: 30
    September: 30
    November: 30
*/

const Card = () => {
    // Auto catching the current date
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()+1
    const currentYear = currentDate.getFullYear()

    const ageCalc = () => {
        // Catching the elements
        const labelElements = document.querySelectorAll('label')  
        const dayNasc = document.querySelector('#day')
        const monthNasc = document.querySelector('#month')
        const yearNasc = document.querySelector('#year')

        const years = document.querySelector('#years')
        const months = document.querySelector('#months')
        const days = document.querySelector('#days')

        const warningElements = document.querySelectorAll('.warning')

        // Checking if at least one of the fields is empty, or if the inserted date is valid
        if(dayNasc.value === "" || monthNasc.value === "" || yearNasc.value === "") {
            labelElements.forEach(e => {
                e.className = "text-danger"
            })

            dayNasc.className = "border-danger"
            monthNasc.className = "border-danger"
            yearNasc.className = "border-danger"

            warningElements.forEach(e => {
                e.classList.remove('hide')
            })

        } else {
            labelElements.forEach(e => {
                e.className = ""
            })

            dayNasc.className = ""
            monthNasc.className = ""
            yearNasc.className = ""

            warningElements.forEach(e => {
                e.classList.add('hide')
            })

            // Calculating age and months
            let age = currentYear - yearNasc.value
            let monthCalc = currentMonth - monthNasc.value

            // Calculating the days between the dates
            const userBirthdayThisYear = new Date(currentYear, monthNasc.value - 1, dayNasc.value);
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
    }

    return (
        <>
            <div className="container__card m-3">
                <form className='mb-4'>
                    <div className='d-flex flex-column align-items-start'>
                        <label htmlFor="day">DAY</label>
                        <input type="text" id='day' placeholder='DD' />
                        <p className='warning text-danger hide'>This field is required</p>
                    </div>

                    <div className='d-flex flex-column align-items-start'>
                        <label htmlFor="month">MONTH</label>
                        <input type="text" id='month' placeholder='MM' />
                        <p className='warning text-danger hide'>This field is required</p>
                    </div>

                    <div className='d-flex flex-column align-items-start'>
                        <label htmlFor="year">YEAR</label>
                        <input type="text" id='year' placeholder='YYYY' />
                        <p className='warning text-danger hide'>This field is required</p>
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