import React from 'react'

const Summary = ({income,expense}) => {
    return (
     <>
     <div className="flex items-center justify-center md:gap-3 px-4">
      <div className=" shadow p-10">
        <h2 className="font-bold text-3xl">Expense</h2>
        <h4 className='mt-4'>#{expense}</h4>
      </div>
      <div className=" shadow p-10">
      <h2 className="font-bold text-3xl">Income</h2>
        <h4 className='mt-4'>#{expense}</h4>
      </div>
     </div>
     </>
    )
}

export default Summary;
