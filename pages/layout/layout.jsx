import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { DialogPopup } from './dialogPopup.jsx'
import * as Switch from '@radix-ui/react-switch'
import styles from '@/styles/Home.module.css'

export const Layout = ({ children, switchMode, color}) => {

    const defaultColors = {
        nav: "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700",
        text: "text-black dark:text-white"
    }

    const updateMode = () => {
        switchMode();
    }


    return (
        <div className={color}>
            <NavigationMenu.Root className={`px-2 ${defaultColors.nav}`}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <a href="#" className={`flex items-center}`}>
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-10" alt="Todoloo Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">todoloo</span>
                    </a>

                    <NavigationMenu.List className={`flex flex-wrap justify-center space-x-14 mx-auto ${defaultColors.text}`}>
                        <Switch.Root className={`${styles.switchRoot} border-solid border border-black dark:border-white`} id="dark-mode" onCheckedChange={updateMode}>
                            <Switch.Thumb className={styles.switchThumb} />
                        </Switch.Root>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className={``} href="">To Do</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="NavigationMenuLink" href="">To Stay</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="NavigationMenuLink" href="">To Ride</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <DialogPopup />
                    </NavigationMenu.List>


                </div>
            </NavigationMenu.Root >
            {children}
        </div>
    )
}