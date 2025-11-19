import iphone from '../assets/img/iphone.png';

const Hero = () => {
  return (
    <div className='w-full bg-[#211C24] px-4 text-white flex flex-col justify-between items-center'>
        <div className='flex flex-col justify-center text-center items-center mt-20'>
            <h2 className='text-2xl text-white/60 font-semibold'>Pro.Beyound.</h2>
            <h1 className='font-extralight text-center text-7xl'>Iphone 14 <span className='font-bold'>Pro</span></h1>
            <p className='text-2xl text-white/60'>Created to change everything for the better. For everyone</p>
            <div className='mt-8'>
                <button className='border py-4 px-14 rounded-sm hover:bg-white hover:text-black font-light transition-colors duration-300'>
                    Shop Now
                </button>
            </div>
        </div>
        <div className='mt-8'>
            <img src={iphone} alt="iPhone 14 Pro" />
        </div>
    </div>
  )
}

export default Hero