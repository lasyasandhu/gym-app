// import React from 'react'

export default function Button({ text, func }) {
    // const { text, func } = props
    return (
        <button onClick={func} className='px-20 mx-auto py-4 rounded-md border-[2px] bg-amber-300 border-none font-semibold text-xl blueShadow duration-200'>
            <p>{text}</p>
        </button>
    )
}