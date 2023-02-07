import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import styles from '@/styles/Home.module.css'

export const DialogPopup = () => {

    return (

        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="border-solid border-2 border-sky-500 rounded-lg px-4 ml-5 dark:text-white" size="large">
                    Login
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay} />
                <Dialog.Content className={styles.dialogContent}>
                    <Dialog.Title className={styles.dialogTitle}>Login</Dialog.Title>
                    <Dialog.Description className={styles.dialogDescription}>
                        Enter username and password
                    </Dialog.Description>
                    <fieldset className="flex gap-10 items-center mb-5" >
                        <label className={styles.dialogLabel} htmlFor="username">Username</label>
                        <input className={`${styles.dialogInput} border-solid border-2 rounded-lg border-blue-600`} id="username" defaultValue="Enter Username" />
                    </fieldset>
                    <fieldset className="flex gap-10 items-center mb-5">
                        <label className={styles.dialogLabel} htmlFor="password">Password</label>
                        <input className={`${styles.dialogInput} border-solid border-2 rounded-lg border-blue-600`} id="password" defaultValue="Enter Password" />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                        <Dialog.Close asChild>
                            <button className={`${styles.dialogButton} bg-green-400 text-green-900`}>Save changes</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            x
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}