import React from 'react'
import './MyStyle.css'
import styles from './myStyle.module.css'


const styling={
    fontSize:'30px',
    color:'blue'

}
export default function MyStyle({name}) {
    return (
        <div>
            <p className={name}>Welcome</p>
            <p style={styling}>Inline Styling</p>
            <p className={styles.sucess}>Sucess From css Module file</p>
            <p className={styles.error}>Error From css Module file</p>


        </div>
    )
}


