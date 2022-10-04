import React from 'react'
import Typical from 'react-typical'

export default function HeroHome() {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1 className='mb-5'>Minh Luan</h1>
                <div style={{ marginBottom: '-0.25rem' }}>Hello! I'am Luan. I'm a
                    <Typical
                        steps={["   Developer", 2000, "    Designer", 2000,"    Father", 2000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
        </section>
    )
}
