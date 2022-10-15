import React from 'react'

const OutputContent = ({ value }) => {
    const [link, setLink] = React.useState('')
    const nameAlternative = 'my_qr_code'

    React.useEffect(() => {
        if (value === '') {
            const data = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=type_your_input_first`
            setLink(data)
        } else {
            const data = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${value}`
            setLink(data)
        }
    }, [value])

    const download = (e) => {
        fetch(link, {
            method: "GET",
            headers: {},
        })
            .then((response) => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${value === '' ? nameAlternative : value}.png`); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div className='max-w-[300px] p-5 mb-5 rounded-lg bg-white dark:bg-[#3F3B51] flex justify-center text-center items-center flex-col'>
            <h1 className='font-bold text-xl'>Your QR Code</h1>
            <br /><br />
            <div className='w-[200px] mx-auto'>
                <img className='w-[200px]' src={link} alt='QR Code' />
            </div>
            <br /><br />
            <a href={link} download onClick={(e) => download(e)} target="_blank" rel="noreferrer">
                <p className='bg-slate-500 text-white dark:bg-[#2D2D3D] rounded-lg p-2 w-full hover:bg-slate-300 hover:text-black dark:hover:bg-white'>Download</p>
            </a>
        </div>
    )
}

export default OutputContent