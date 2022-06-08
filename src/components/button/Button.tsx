import React from 'react'
import styles from './Button.module.css'

const setFour = () => {
    document.getElementById('words').innerHTML = "Four"
    document.getElementById('wording').innerHTML = "Four"
}

export default function Button(props: any) {
    return (
        <>
            <button onClick={() => setFour()} className={styles.button}>Four</button>
        </>
    )
}
