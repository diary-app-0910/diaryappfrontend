import React from 'react'


const Button = ({buttonName} : {buttonName: string}) => {
    return (
        <div>
            <button type='submit' className='w-full rounded-md bg-teal-500 px-10 py-2 my-8 text-md text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'w-full  >{buttonName}</button>
        </div>
    )
}

export default Button
