import timImg from '../assets/timothy-pix.png';
import timotheousImg from '../assets/Timotheus.png';
import timotheousImg2 from '../assets/DSC09662 1.png';
import Project_card from './cards/Project_card';
import thumbnail from '../assets/Thumbnail.jpg';
import Experience_card from './cards/experience_card'
import Certification_card from './cards/Certification_card';
import figma from '../assets/figma 1.png'
import photoshop from '../assets/photoshop 1.png'
import illustrator from '../assets/Frame 36 (1).png'
import chatgpt from '../assets/chat-gpt 1.png'
import adobe from '../assets/Frame 36.png'
import webflow from '../assets/Image 23.png'
import Booking from './cards/Booking';
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


function Main_section() {

  const projects = [
    {
      'title': 'Favex Crypto & Giftcard',
      'description': 'Mobile app design for Favex, a crypto Giftcard and bills payment platform ',
      img: thumbnail
    },
    {
      'title': 'Zeelpay - Crypto & Bills',
      'description': 'Mobile app design for Favex, a crypto Giftcard and bills payment platform ',
      img: thumbnail
    },
    {
      'title': 'Africard - Virtual card & Bills',
      'description': 'Mobile app design for Favex, a crypto Giftcard and bills payment platform ',
      img: thumbnail
    }
  ]

  const experiences = [
    {
      'title': 'Favex Crypto & Giftcard',
      'body': 'Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.',
      'date': 'Jan 2025 - Present',
      'mode': 'Remote'
    },
    {
      'title': 'PartyJollof Africa',
      'body': 'Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.',
      'date': 'Sept 2024 - Present',
      'mode': 'Remote'
    },
    {
      'title': 'Dignity Technology Academy',
      'body': 'Creative tutor and UIUX design instructor. Mentoring aspiring designers in UIUX principles and best practices. ',
      'date': 'Dec 2022 - Oct 2023',
      'mode': 'Hybrid'
    }
  ]

  const certifications = [
    {
      'title': 'Google UIUX Course (Coursera)',
      'body': 'User Experience (UX) Design course',
      'date': 'Aug 2023',
      'platform': 'Coursera'
    },
    {
      'title': 'Aptlearn Product Design Course',
      'body': 'Complete UIUX Design Course',
      'date': 'Mar 2023',
      'platform': 'Aptlearn.io'
    },
    {
      'title': 'Ekiti State University, Nigeria',
      'body': 'Bsc. Political Science',
      'date': 'May 2025',
      'platform': 'Second Class upper'
    }
  ]

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-white pb-1 px-4 md:px-8 md:gap-4 mb-8 overflow-x-hidden">

     {/* side_section */} 
     <div className="w-full md:h-screen md:max-w-1/3 bg-white p-4 top-0 flex flex-col items-center pb-5 md:justify-center md:pb-15">

       <div className='max-w-full md:fixed'> 
        <div className="flex justify-center items-center w-full"> 
          <img src={timImg} alt="tim-Img" className="w-70 bg-white rounded-full" /> 
        </div> 
        
        <div className='max-w-55 ml-6'> 
           <h2 className="text-xl text-center font-bold mt-4">Hammed Timothy</h2> 
            <p className="text-gray-700 text-center mt-2"> Product Designer | Web3 UX • Ultra Minimalist </p> 
            <div className="mt-4 text-center text-gray-400"> 
              <p>Product designer specializing in Fintech and Web3 UX</p> 
               <div className="icons text-blue-800 flex justify-center gap-3 mt-3 text-xl"> 
                <BsWhatsapp /> 
                <AiOutlineFacebook /> 
                <CiLinkedin /> 
                <FaInstagram /> 
                <FaSquareXTwitter /> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>

      {/* main section */}
      <div className=' w-full md:max-w-200 h-full mt-0 md:mt-40 md:max-w-3/4 bg-white p-4 pt-0'>
        <div>
          <h1 className='hidden md:block text-7xl font-bold text-gray-600'>
            PRODUCT <br /> <span className='text-gray-400'>DESIGNER</span>
          </h1>
          <p className='Bio max-w-120 text-gray-500 text-center md:text-left md:mt-8 text-lg'>
            I‘m Hammed Timothy, a Product Designer with over six years experience conceptualizing and crafting digital products, helping businesses and non-profits expand their capacity for impact.
          </p>
        </div>

        <div id='home' className='items-center justify-center md:justify-start mt-8 flex flex-row gap-8 font-bold text-gray-500 text-md md:text-xl md:gap-20'>
          <p><span className='text-4xl md:text-6xl text-gray-300'>6+</span> <br /> YEARS OF <br />EXPERIENCE</p>
          <p><span className='text-4xl md:text-6xl text-gray-300'>20+</span> <br />PROJECTS <br />COMPLETED </p>
          <p><span className='text-4xl md:text-6xl text-gray-300'>5+</span> <br />HAPPY <br />CLIENTS</p>
        </div>

        <div className='w-full h-full bg-white flex flex-col md:flex-row gap-6 mt-10'>
          <img src={timotheousImg2} alt="timotheousImg2" className='w-full md:w-auto max-w-full md:max-w-200 rounded-4xl shadow-md' />
          <img src={timotheousImg} alt="timotheousImg" className='w-full md:w-auto max-w-full md:max-w-200 rounded-4xl shadow-md' />
        </div>

        {/* Project feature */}
        <div id='project' className='mt-2'>
          <h1 className='text-5xl font-bold text-gray-600 mt-18 mb-6'>
            FEATURED <br /> <span className='text-gray-300'>PROJECTS</span>
          </h1>

          {projects.map((project, index) => (
            <Project_card key={index} project={project} />
          ))}

          <p className='text-center text-sm text-blue-800 font-semibold'>View all Projects</p>
        </div>

        {/* Work Experience */}
        <section>
          <h1 className='text-5xl font-bold text-gray-600 mt-12 mb-6'>
            WORK <br /> <span className='text-gray-300'>EXPERIENCE</span>
          </h1>

          {experiences.map((exp, index) => (
            <Experience_card key={index} experience={exp} />
          ))}
        </section>

        {/* Certification Section */}
        <section>
          <h1 className='text-5xl font-bold text-gray-600 mt-12 mb-6'>
            PROFESSIONAL <br /> <span className='text-gray-300'>CERTIFICATION</span>
          </h1>

          {certifications.map((cert, index) => (
            <Certification_card key={index} certification={cert} />
          ))}
        </section>

        {/* Tools */}
        <section>
          <h1 className='text-5xl font-bold text-gray-300 mt-12 mb-8'>TOOLS </h1>

          <div className='grid md:grid-cols-2 grid-cols-none gap-4'>
            <div className='flex flex-row gap-2 text-md mb-3'>
              <img src={figma} alt="figma logo" className='max-w-11 p-2 bg-black rounded-xl' />
              <p className='mt-3'>Figma Design</p>
            </div>

            <div className='flex flex-row gap-2 text-md mb-3'>
              <img src={illustrator} alt="figma logo" className='max-w-12 max-h-11 p-1 bg-black rounded-xl' />
              <p className='mt-3'>Adobe Illustrator</p>
            </div>

            <div className='flex flex-row gap-2 text-md mb-3'>
              <img src={photoshop} alt="photoshop logo" className='max-w-11 rounded-xl' />
              <p className='mt-3'>Adobe Photoshop</p>
            </div>

            <div className='flex flex-row gap-2 text-md mb-3'>
              <img src={adobe} alt="Adobe logo" className='max-w-11 ' />
              <p className='mt-3'>Adobe AfterEffects</p>
            </div>

            <div className='flex flex-row gap-2 text-md mb-3'>
              <img src={chatgpt} alt="chatgpt logo" className='max-w-15 p-1 bg-black rounded-xl' />
              <p className='mt-3'>AI Assistant</p>
            </div>

            <div className='flex flex-row gap-2 text-md mb-3'>
              <img src={webflow} alt="WebFlow logo" className='max-w-11 rounded-xl' />
              <p className='mt-3'>WebFlow</p>
            </div>
          </div>
        </section>

        {/* Booking */} 
        <section id='w-full call justify-center items-center md:justify-start'> 
          <h1 className='text-5xl font-bold text-gray-300 mt-12 mb-2'>BOOK A CALL </h1> 
           <p className='text-gray-600 mb-8'>Let's talk about your project, submit form to get in touch with Timothy.</p> 
           <Booking />
          </section>

      </div>
    </div>
  )
}

export default Main_section
