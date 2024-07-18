import { useState } from 'react'

export default function TextPasswordInput({label = "", hinttext="", type="text" }) {
    const [show, setShow] = useState({
        showPassword:false,
    });
    const showHide= (e) =>{
        setShow({ showPassword: !show.showPassword});
    }

    return (
    <>
        <div className='h-fit grid grid-flow-row mt-3'>
            <label className=' font-semibold'>{label}</label>
            {type == "text" ? (
                <input placeholder={hinttext} className='h-8 border-2 border-none rounded-2xl px-3 w-full outline-none' />
            ):(
                <div className='h-fit grid grid-flow-col mt-0 bg-white rounded-3xl'>
                    <div className='col-span-11'>
                        <input type={show.showPassword ? "text" : "password"} placeholder={hinttext} className='h-8 border-none border-2 rounded-2xl w-full px-3 outline-none' />
                    </div>
                    <div onClick={(e) => showHide(e)}
                        className='col-span-1 text-xl grid place-content-center text-black p-0.5 cursor-pointer overflow-hidden mr-3 w-full'>
                            &nbsp;&hearts;
                    </div>

                </div>
            )}
        </div>
    </>
    )
}
