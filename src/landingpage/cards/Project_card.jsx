
import { BsArrowUpRight } from "react-icons/bs";


function Project_card({ project }) {
  return (
    <div className='flex flex-col md:flex-row w-full bg-white p-3 gap-4 items-start md:items-center justify-between'>
  
  <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'>
    

    <div>
      <img src={project.img} alt="thumbnail" className='w-full md:max-w-36 rounded-xl' />
    </div>

   
    <div className='flex flex-col'>
      <h2 className='text-lg font-bold'>{project.title}</h2>
      <p className='text-gray-400 text-sm mt-1'>{project.description}</p>
      <button className='bg-blue-50 text-blue-600 mt-2 px-4 py-1 rounded-4xl text-sm w-max'>
        Live Project
      </button>
    </div>

  </div>

 
  <div className='hidden md:block mt-2 md:mt-0 flex-shrink-0'>
    <BsArrowUpRight className="text-red-600 text-xl" />
  </div>

</div>

  )
}

export default Project_card