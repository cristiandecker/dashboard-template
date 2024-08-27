import React, {useState} from 'react'
import { Link } from 'react-router-dom';
//icons
import { RiEdit2Line,RiShieldCheckLine } from 'react-icons/ri';
import { Switch } from '@headlessui/react'

export const Profile = () => {
    const [enabled, setEnabled] = useState(false)

  return (
    <>
    {/*Profile */}
    <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
    <h1 className='text-2xl text-gray-100'>Profile</h1>
    <hr className='my-8 border-gray-500/30'/>
    <form>
        <div className='flex items-center mb-8'>
            <div className='w-1/4'>
                <p>Avatar</p>
            </div>
            <div className='flex-1'>
                <div className='relative mb-2'>
                    <img 
                        src='https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg'
                        className='w-28 h-28 object-cover rounded-lg'
                    />
                    <label 
                        htmlFor='avatar' 
                        className='absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-3 left-24'>
                        <RiEdit2Line/>
                    </label>
                    <input type='file' id='avatar' className='hidden' />
                    
                </div>
                    <p className='text-gray-500 text-sm'>
                        lkkjau cuan siemlaadsfa asdd : 
                    </p>
            </div>
        </div>
        <div className='flex items-center mb-8'>
            <div className='w-1/4'>
                <p>Nombre completo <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 flex items-center gap-4'>
                <div className='w-full'>
                    <input 
                        type='text'
                        className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                        placeholder='Nombre(s)'
                    
                    />
                </div>
                <div className='w-full'>
                    <input 
                        type='text'
                        className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                        placeholder='Apellido(s)'
                    />
                </div>
                
            </div>
        </div>
        <div className='flex items-center mb-8'>
            <div className='w-1/4'>
                <p>Nombre de la Empresa <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
                <div className='w-full'>
                    <input 
                        type='text'
                        className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                        placeholder='Nombre(s)'
                    
                    />
                </div>                
            </div>
        </div>
        <div className='flex items-center mb-8'>
            <div className='w-1/4'>
                <p>Numero de contacto <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
                <div className='w-full'>
                    <input 
                        type='text'
                        className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                        placeholder='Nombre(s)'
                    
                    />
                </div>                
            </div>
        </div>
        <div className='flex items-center mb-8'>
            <div className='w-1/4'>
                <p>Pagina web <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
                <div className='w-full'>
                    <input 
                        type='text'
                        className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                        placeholder='Nombre(s)'
                    
                    />
                </div>                
            </div>
        </div>
        <div className='flex items-center mb-8'>
            <div className='w-1/4'>
                <p>País <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
                <div className='w-full'>
                    <select className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none'>
                        <option value="Argentina" selected>Argentina</option>
                        <option value="México">México</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Perú">Perú</option>
                        <option value="Chile">Chile</option>
                        <option value="Venezuela">Venezuela</option>
                    </select>
                </div>                
            </div>
        </div>
        <div className='flex items-center mb-8'>
            <div className='w-1/4'>
                <p>Ciudad <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
                <div className='w-full'>
                    <select className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none'>
                        <option value="Bogotá" selected>Bogotá</option>
                        <option value="Lima">Lima</option>
                        <option value="Montevideo">Montevideo</option>
                        <option value="Caracas">Caracas</option>
                        <option value="Buga">Buga</option>
                        <option value="ciudad-mexico">Ciudad de México</option>
                    </select>
                </div>                
            </div>
        </div>
    </form>
    <hr className='my-8 border-gray-500/30'/>
    <div className='flex justify-end'>
        <button 
            className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
        Guardar
        </button>
    </div>
    
    </div>

    {/* Cambio de Password */}
    <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
    <h1 className='text-2xl text-gray-100'>Usuario y contraseña</h1>
    <hr className='my-8 border-gray-500/30'/>
    <form className='mb-8'>
        <div className='flex items-center justify-between'>
            <div>
                <h5 className='text-gray-100 text-xl mb-1'>Correo electronico</h5>
                <p className='text-gray-500 text-sm'>decker@gmail.com</p>
            </div>
            <div>
                <button 
                    className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-gray-100'>
                    Cambiar email
                </button>
            </div>
        </div>
        <hr className='my-8 border-gray-500/30 border-dashed'/>
        <div className='flex items-center justify-between'>
            <div>
                <h5 className='text-gray-100 text-xl mb-1'>Contraseña</h5>
                <p className='text-gray-500 text-sm'>************</p>
            </div>
            <div>
                <button 
                    className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-gray-100'>
                    Cambiar contraseña
                </button>
            </div>
        </div>
    </form>
    <div className='grid grid-cols-1 md:grid-cols-8 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600' >
        <div className='flex justify-center'>
            <RiShieldCheckLine className='text-5xl text-green-600'/>
        </div>
        <div className='md:col-span-6'>
           <h5 className='text-gray-100 text-xl mb-2'>Asegura tu cuenta</h5>
           <p className='text-gray-500'>Verificacion de dos factorires, por favor verifica tu correo electroci para poder verificar tu corre electronico
            y podemos saber que tu correo es real
           </p>
        </div>
        <div className='flex justify-center'>
            <button className='bg-green-600/70 py-2 px-5 rounded-lg text-gray-100 hover:bg-green-600 transition-colors'>
                Activar
            </button>
        </div>

    </div>
    
    </div>
    {/* conexion de cuentas */}
    <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
    <h1 className='text-2xl text-gray-100'>Conectar con cuentas</h1>
    <hr className='my-8 border-gray-500/30'/>
    <div className='flex gap-4 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8' >
        <div className='flex justify-center'>
            <RiShieldCheckLine className='text-5xl text-green-600'/>
        </div>
        <div className='flex-1'>
           <p className='text-gray-500'>
            Verificacion de dos factorires, por favor verifica tu correo electroci para poder verificar tu corre electronico
            y podemos saber que tu correo es real. <Link to='/' className='text-green-400'>Leer más</Link>
           </p>
        </div>
    </div>
    <form className='mb-8'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img 
                    src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png' 
                    className='w-8 h-8 object-cover'
                />
                <div className='flex flex-col gap-y-1'>
                    <h5 className='text-gray-100'>Google</h5>
                    <p className='text-gray-500 text-sm'>Plan de google para conectar</p>
                </div>
            </div>
            <div>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-primary' : 'bg-secondary-900'
                        } relative inline-flex h-6 w-11 items-center rounded-full`
                    }
                >
                    <span className='sr-only'>Enable notificacions</span>
                    <span
                        className={`${
                            enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'
                            }  inline-block h-4 w-4 transform rounded-full transition`} 
                    />
                </Switch>
            </div>
        </div>
        <hr className='my-8 border-gray-500/30 border-dashed'/>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img 
                    src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png' 
                    className='w-8 h-8 object-cover'
                />
                <div className='flex flex-col gap-y-1'>
                    <h5 className='text-gray-100'>Google</h5>
                    <p className='text-gray-500 text-sm'>Plan de google para conectar</p>
                </div>
            </div>
            <div>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-primary' : 'bg-secondary-900'
                        } relative inline-flex h-6 w-11 items-center rounded-full`
                    }
                >
                    <span className='sr-only'>Enable notificacions</span>
                    <span
                        className={`${
                            enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'
                            }  inline-block h-4 w-4 transform rounded-full transition`} 
                    />
                </Switch>
            </div>
        </div>
        <hr className='my-8 border-gray-500/30 border-dashed'/>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img 
                    src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png' 
                    className='w-8 h-8 object-cover'
                />
                <div className='flex flex-col gap-y-1'>
                    <h5 className='text-gray-100'>Google</h5>
                    <p className='text-gray-500 text-sm'>Plan de google para conectar</p>
                </div>
            </div>
            <div>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-primary' : 'bg-secondary-900'
                        } relative inline-flex h-6 w-11 items-center rounded-full`
                    }
                >
                    <span className='sr-only'>Enable notificacions</span>
                    <span
                        className={`${
                            enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'
                            }  inline-block h-4 w-4 transform rounded-full transition`} 
                    />
                </Switch>
            </div>
        </div>
    </form>
    
    
    </div>
    </>
  
  )
}

export default Profile;