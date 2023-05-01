"use client"
import Link from "next/link"

function HomePage() {
    
  return (
    <div className="sm:flex pt-[72px] sm:pt-20">
        {/* Form Section */}
        <div className="sm:w-1/2 md:w-2/5 border-t-2 border-gray-300
        p-2 sm:p-4 lg:p-6 lg:pr-[75px]">
          <div className="flex">
            <Link href="/newpage" className="">
            <img src="/images/Vector.svg" alt="icon" /></Link>
            <Link href="/newpage" className=" text-blue-500">
            <p className="text-[16px] font-bold pl-2">Back To Home</p>
            </Link>
          </div>
          <h2 className="text-[28px] sm:text-[38px] font-bold mt-4 sm:mt-6 mb-3 sm:mb-4">Create your account</h2>

          <form>
                <div><label htmlFor='YourName' className='text-[14px] font-semibold '>Your Name </label> <br />
                <input type='text'  name='YourName' className='py-2 pl-4 text-[16px] font-normal bg-gray-200 rounded-lg w-full mt-1' id='first_name' placeholder='Enter full name'/></div>
              
                <div className="mt-4"><label htmlFor='YourName' className='text-[14px] font-semibold '>Your Name </label> <br />
                <input type='text'  name='YourName' className='py-2 pl-4 mt-1 text-[16px] font-normal bg-gray-200 rounded-lg w-full' id='first_name' placeholder='Enter full name'/></div>

                <div className="mt-4"><label htmlFor='YourName' className='text-[14px] font-semibold '>Your Name </label> <br />
                <input type='text'  name='YourName' className='py-2 pl-4 mt-1 text-[16px] font-normal bg-gray-200 rounded-lg w-full' id='first_name' placeholder='Enter full name'/></div>
                
                <div className="flex justify-end">
                <button type='submit' className='bg-[#666666] rounded-lg text-[16px] font-bold text-white mt-4 px-4 py-2' id='btn__submit'>Create Account</button>
                </div>
          </form>
          <p className="text-[16px] font-normal text-center mt-5 sm:mt-10">Already have an account? <span className="text-blue-500 font-bold"><Link href="/newpage">
             Login
            </Link></span></p>
        </div>

        {/* Image */}
        <div className="sm:w-1/2 md:w-3/5">
            <div className="relative">
              <div className="absolute inset-0 w-full h-full bg-white bg-opacity-50 flex flex-col items-center justify-center "  id="fashionSign"> 
                <img src="/images/FA.svg" />
                <h3 className="text-blue-500 text-[32px] font-bold mt-3">Fashion AI</h3>
              </div>
              <img className="w-full" src="/images/hero.svg" alt="hero" />
            </div>                
        </div>
    </div>
  )
}

export default HomePage