import React from 'react'

const WhiteButton = ({buttonName} : {buttonName: string}) => {
    return (
        <div>
            <button type='submit'
                className='w-full rounded-md bg-teal-white border-solid border-2 border-teal-500 px-10 py-2 my-8 text-md text-teal-500 shadow-sm hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                >
                {buttonName}
            </button>
        </div>
    )
}

export default WhiteButton
