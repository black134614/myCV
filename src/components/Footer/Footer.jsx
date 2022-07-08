import React from 'react'
import CV from '../../assets/Vo-Minh-Luan-CV.pdf'

export default function Footer() {
    return (
        <footer id="footer" className='text-center'>
             <a className='btn btn-danger' target='_blank' href={CV}>Link CV</a>
        </footer>
    )
}
