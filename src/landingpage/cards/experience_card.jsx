import { BsArrowUpRight } from "react-icons/bs";


function Experience_card({experience}) {
  return (
    <div className='mb-8 flex flex-row w-full h-full bg-white justify-between'>
        <div>
            <h2 className='text-xl font-bold'>{experience.title}</h2>
                <p className='text-gray-400  text-md max-w-130'>{experience.body}</p>
                <div className='flex flex-row gap-8 text-gray-500 text-md mt-4'>
                    <p>{experience.date}</p>
                    <span className="w-2 h-2 bg-gray-400 mt-2 rounded-full"></span>
                    <p className={experience.mode === 'Remote' ? 'text-green-500' : 'text-red-500'}>
                    
                        {experience.mode}</p>
                </div>
        </div>
        
        <div>
            <div><BsArrowUpRight className="text-red-600"/></div>
        </div>
    </div>
  )
}

export default Experience_card