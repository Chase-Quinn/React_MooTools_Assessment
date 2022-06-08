import React, {useState, useEffect} from 'react'
import styles from './Container.module.css'
import Button from '../button/Button.tsx'

export default function Container() {
  return (
    <>
    <div className={styles.container}>
    <Button />
    <div className={styles.words} id="words">
    </div>
    </div>
    </>
  )
}