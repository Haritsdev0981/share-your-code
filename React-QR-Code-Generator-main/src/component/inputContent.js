import React from 'react'

const InputContent = ({ value, handleChangeValue }) => {
    const handleClick = () => {
        window.open('https://github.com/zayyid123')
    }

    return (
        <div className='max-w-[400px] p-1 mb-5 flex justify-center flex-col'>
            <div className='mb-5 rounded-lg bg-white dark:bg-[#3F3B51] p-5'>
                <h1 className='font-bold text-3xl'>QR Code Generator</h1>
                <p className='font-thin mb-2'>By: <span onClick={handleClick} className='text-cyan-500 cursor-pointer'>zayyid123</span></p>
                <p>You can create a <span className='font-bold'>QR Code</span> just by <span className='font-bold'>writing something first</span> into the input field and the input <span className='font-bold'>must not contain spaces</span></p>
            </div>
            <input required onChange={handleChangeValue} value={value} className='dark:bg-[#2D2D3D] rounded-lg p-2 w-full mb-3' type='text' placeholder='Type yor input..'></input>
        </div>
    )
}

export default InputContent