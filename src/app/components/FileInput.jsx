'use client'
import React, { useState } from 'react'

export const FileInput = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [loading, setLoading] = useState(false);
    const  [upload,setUpload]=useState(false)
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        const newFileName = selectedFile.name;
        setFileName(newFileName);
    };

    const handleUpload = () => {
        if (file) {
            setLoading(true);

            //File upload simulation
            setTimeout(() => {
                setLoading(false);
                setUpload(true)
            }, 2000);
        }
    };
    return (
        <>
            <h1 className='md:hidden mt-10  ml-3 mb-2 res-head'>Upload CSV</h1>
            <div className='bg-white p-4 w-1/2 mx-auto mt-40 box'>
                <div className='border border-dotted p-16 text-center'>
                    <img src="./icons/Excel.svg" alt="no" className='h-12 w-12 mx-auto' />
                    {fileName && upload? <h2>{fileName}</h2> :
                        <>
                            <h2 className='mx-auto mt-10'>Drop your excel sheet here or <label htmlFor="fileInput" className='text-blue-500 cursor-pointer'>browse</label></h2>
                            <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                        </>
                    }
                </div>
                <button className='mx-auto uploadBtn flex ' onClick={handleUpload} disabled={upload} style={{'opacity':upload?'40%':"100%"}}>
                    {!loading ? <>
                        <img src="./icons/UploadFile.svg" alt="" />
                        <h2> Upload</h2>
                    </> : <img src='./icons/Load.svg'></img>}
                </button>
            </div>

        </>
    )
}
