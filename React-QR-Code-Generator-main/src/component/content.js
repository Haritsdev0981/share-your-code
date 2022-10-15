import React from 'react'
import InputContent from './inputContent'
import OutputContent from './outputContent'

const Content = () => {
    const [value, setValue] = React.useState('')

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='bg-slate-200 text-slate-900 dark:bg-[#211E2D] dark:text-white'>
            <div className='max-w-5xl mx-auto min-h-screen'>
                <div className='flex justify-evenly items-start pt-10 flex-wrap'>
                    <InputContent value={value} handleChangeValue={handleChangeValue} />
                    <OutputContent value={value} />
                </div>
            </div>
        </div>
    )
}

export default Content