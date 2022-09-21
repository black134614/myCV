import React, { useState } from 'react'
import avatar from '../../assets/img/luan-anh-dai-dien.jpg'

export default function Header() {

    const [stateNav, setstateNav] = useState(false);
    return (
        <>
            {/* ======= Mobile nav toggle button ======= */}
            <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={() => {
                setstateNav(!stateNav)
            }} />
            {/* ======= Header ======= */}
            <header id="header" className={stateNav ? 'open' : 'close'}>
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={avatar} alt className="img-fluid rounded-circle"  data-aos="fade-in" />
                        <h1 className="text-light"><a href="index.html"  data-aos="fade-in" data-aos-delay='100'>Võ Minh Luân</a></h1>
                        <div className="social-links mt-3 text-center"  data-aos="fade-in" data-aos-delay='200'>
                            <a target='_blank' href="https://www.facebook.com/ov.naul.1" className="facebook"><i className="bx bxl-facebook" /></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li data-aos="fade-in" data-aos-delay='800'><a href="#hero" className="nav-link "><i className="bx bx-home" /> <span>Home</span></a></li>
                            <li data-aos="fade-in" data-aos-delay='900'><a href="#about" className="nav-link "><i className="bx bx-user" /> <span>Giới thiệu</span></a></li>
                            <li data-aos="fade-in" data-aos-delay='1000'><a href="#skill" className="nav-link "><i className="bx bx-book-content" /> <span>Kĩ năng</span></a></li>
                            <li data-aos="fade-in" data-aos-delay='1100'><a href="#activities" className="nav-link "><i className="bx bx-file-blank" /> <span>Quá trình học tập</span></a></li>
                            <li data-aos="fade-in" data-aos-delay='1200'><a href="#experience" className="nav-link "><i className="bx bx-archive" /> <span>Kinh nghiệm cá nhân</span></a></li>
                            <li data-aos="fade-in" data-aos-delay='1300'><a href="#certificate" className="nav-link "><i className="bx bx-certification" /> <span>Chứng nhận</span></a></li>
                            <li data-aos="fade-in" data-aos-delay='1400'><a href="#contact" className="nav-link "><i className="bx bx-envelope" /> <span>Liên hệ</span></a></li>
                        </ul>
                    </nav>{/* .nav-menu */}
                </div>
            </header>{/* End Header */}
        </>
    )
}
