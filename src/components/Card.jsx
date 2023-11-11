import './Card.css'

const Card = () => {
    return (
        <>
            <div className="container__card p-4 m-3">
                <form className='d-flex justify-content-between mb-4'>
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

                    <button>
                        <img src="/icon-arrow.svg" alt="arrow icon" />
                    </button>
                </form>

                <div className='output__container'>
                    <p><span>38</span> years</p>
                    <p><span>3</span> months</p>
                    <p><span>26</span> days</p>
                </div>
            </div>
        </>
    )
}

export default Card