import React,{useState} from 'react'
import {Link} from "react-router-dom"

//icons
import { 
  RiBarChart2Line,
  RiEarthLine,  
  RiCalendarTodoLine,
  RiCustomerService2Line, 
  RiLogoutCircleLine, 
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine
  } from 'react-icons/ri';


export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowmenu]=useState(false);
  return (
    <>
    <div className={`xl:h-[100vh] fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 
    flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"} transition-all `}>
      <div>
        <h1 className="text-center text-2xl font-bold text-white mb-10">
          Admin<span className="text-primary text-4xl">.</span> 
        </h1>
        <ul>
          <li>
            <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
              <RiBarChart2Line className='text-primary' />Ferrelectricos
            </Link> 
          </li>
          <li>
            <button onClick={() => setShowmenu(!showSubmenu)} className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
              <span className='flex items-center gap-4'>
              <RiEarthLine className='text-primary' />Redes Sociales
              </span>
              <RiArrowRightSLine className={`mt-1 ${showSubmenu && "rotate-90"} transition-all`}/>
              
            </button>
            <ul className={`${!showSubmenu ? "h-[130px]": "h-0"} overflow-y-hidden`}>  
              <li>
                <Link to="/" className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 
                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                  Post red social
                </Link>
              </li>
              <li>
                <Link to="/" className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 
                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                  Estadisticas 
                </Link>
              </li>
              <li>
                <Link to="/" className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 
                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                  Perfil
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
              <RiCustomerService2Line className='text-primary' />Soporte técnico
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
              <RiCalendarTodoLine className='text-primary' />Calendario
            </Link>
          </li>
       
        </ul>

      </div>
      <nav>
        <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
            <RiLogoutCircleLine className='text-primary' />Cerrar Sesión
        </Link> 
      </nav>

    </div>
    <button 
      onClick={() => setShowMenu(!showMenu) } 
      className=" xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50">
        {showMenu ? <RiCloseLine/> : <RiMenu3Line/>}
    </button>
    </>

  )
}

export default Sidebar;