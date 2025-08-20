import timImg from '../assets/Frame 2.png';

function Side_section() {
  return (
    <div className='w-full h-full bg-white p-4'>
        <div><img src={timImg} alt="tim-Img" className='w-full md:max-w-50 items-center'/></div>
        <h2 className='text-2xl  font-bold mt-4'>Hammed Timothy</h2>
        <p className='text-gray-700  mt-2'>Product Designer  web3 UX Ultraminimax</p>

        <div className='mt-4  text-gray-400'> 
            <p>Product designer specializing in Fintech and Web3 UX</p>
            <div className='icons flex flex-row'></div>
        </div>

    </div>
  )
}

export default Side_section