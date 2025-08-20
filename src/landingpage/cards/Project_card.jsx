
import { BsArrowUpRight } from "react-icons/bs";


function Project_card({ project }) {
  return (
    <div className='flex flex-row w-full h-full bg-white p-3 pl-0 gap-4 items-center justify-between'>
      <div  className='flex gap-4'>
        <div><img src={project.img} alt="thumbnail" className='max-w-36 rounded-xl'/></div>
        <div>
            <h2 className='text-l font-bold '>{project.title}</h2>
            <p className='text-gray-400  text-sm w-70'>{project.description}</p>
            <button className='bg-blue-50 text-blue-600 mt-1 px-4 py-1 rounded-4xl text-sm'>Live Project</button>
         </div>
        </div>
          <div><BsArrowUpRight className="text-red-600"/></div>
        
    </div>
  )
}

export default Project_card