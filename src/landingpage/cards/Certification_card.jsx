
import { BsArrowUpRight } from "react-icons/bs";

function Certification_card({certification}) {
  return (
    <div className='mb-2 flex flex-row w-full h-full bg-white p-3 pl-0 justify-between '>
        <div>
            <h2 className='text-xl font-bold'>{certification.title}</h2>
                <p className='text-gray-400  text-md max-w-130'>{certification.body}</p>
                <div className='flex flex-row gap-8 text-gray-500 text-md mt-3'>
                    <p>{certification.date}</p>
                    <span className="w-2 h-2 bg-gray-400 mt-2 rounded-full"></span>
                    <p className='text-green-500' >
                    
                        {certification.platform}</p>
                </div>
        </div>
        
        <div>
            <div><BsArrowUpRight className="text-red-600"/></div>
        </div>
    </div>
  )
}

export default Certification_card