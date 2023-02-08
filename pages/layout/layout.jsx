import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { DialogPopup } from '../../components/dialogPopup.jsx'
import LoginModal from '../login/loginModal.jsx'
import * as Switch from '@radix-ui/react-switch'
import styles from '@/styles/Home.module.css'

const Layout = ({ children, switchMode, color }) => {

    const defaultColors = {
        nav: "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700",
        text: "text-black dark:text-white"
    }

    const updateMode = () => {
        switchMode();
    }


    return (
        <div className={color}>
            <NavigationMenu.Root className={`px-2 py-4 ${defaultColors.nav}`}>
                <div className="container flex flex-wrap items-center justify-evenly lg:justify-between mx-auto">
                    <a href="#" className={`flex items-center`}>
                        <img src="/todoloo_logo.png" className="h-6 mr-3 sm:h-10" alt="Todoloo Logo" />
                    </a>
                    <div className='flex items-center'>
                        <div id="switch-container" className='flex items-center mr-5'>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onChange={updateMode} />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <NavigationMenu.List className={`flex flex-wrap justify-center space-x-14 mx-auto ${defaultColors.text} text-sm sm:text-lg font-medium align-middle`}>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link className={``} href="">To Do</NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="NavigationMenuLink" href="">To Stay</NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="NavigationMenuLink" href="">To Ride</NavigationMenu.Link>
                            </NavigationMenu.Item>
                        </NavigationMenu.List>
                        <LoginModal />
                    </div>
                </div>
            </NavigationMenu.Root >
            {children}
        </div>
    )
}

export default Layout;