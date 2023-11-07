import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideLoadding } from "../redux/LoaddingReducer/LoaddingReducer";
import ReactTooltip from "react-tooltip";

import HeroHome from "../components/HeroHome/HeroHome";
import avatar from "../assets/img/luan.jpg";
import h1 from "../assets/img/demos/h1-min.png";
import h2 from "../assets/img/demos/h2-min.png";
import h3 from "../assets/img/demos/h3-min.png";
import h4 from "../assets/img/demos/h4-min.png";
import h5 from "../assets/img/demos/h5-min.png";
import h6 from "../assets/img/demos/h6-min.png";
import h7 from "../assets/img/demos/h7-min.png";
import h8 from "../assets/img/demos/h8-min.png";
import h9 from "../assets/img/demos/h9-min.png";
import c1 from "../assets/img/demos/1.jpg";
import c2 from "../assets/img/demos/2.jpg";
import c3 from "../assets/img/demos/3.jpg";
import c4 from "../assets/img/demos/4.png";
import c5 from "../assets/img/demos/5.png";
import c6 from "../assets/img/demos/6.png";
import demoTienDungCPC from "../assets/img/tiendungcpc-demo.gif";
import demoSankaTech from "../assets/img/demo-SankaTech.gif";
import demoHomeStay from "../assets/img/demoHomeStay.gif";
import thuanPhongDemo from "../assets/img/thuan-phong.gif";

export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoadding());
    }, 3000);
  }, []);
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#header"
      data-bs-offset="0"
      className="scrollspy-example"
      tabIndex="0"
    >
      {/* ======= Hero Section ======= */}
      <HeroHome />
      {/* End Hero */}

      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-up">Giới thiệu</h2>
              <p data-aos="fade-up">
                Chào nhà tuyển dụng! Mình là Luân đến từ Tây Ninh, hiện tại mình
                đang sống và làm việc tại Bình Dương.
                <br />
                Trước 2022, mình là nhân viên văn phòng bình thường, sau khi học
                qua 6 khóa lập trình từ cơ bản đến nâng cao '
                <strong>Có Cấp Bằng</strong>'. Mình có thể lập trình Website
                ,.Net, Java, Python,... sử dụng nhiều phần mềm chỉ cần đọc, tra
                cứu tài liệu.
                <br />
                Ngoài kĩ năng lập trình được dạy, mình còn tự học thêm các kiến
                thức đáp ứng cho công ty như: lập trình tự động Excel, SAP, Tool
                tự động google chrome, Sử dụng được API chatGPT để tích hợp vào
                ứng dụng, code ra các chức năng tiện ích,....
                <br />
                Khoảng nửa năm gần đây, mình có nghiên cứu các thuật toán của
                google - facebook, setup Fanpage, setup Profile Facebook, lập
                trình Python để lấy dữ liệu, học phân tích từ khóa, và cho ra
                các module nhỏ để giảm bớt công việc Marketing Social thao tác
                tay.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src={avatar}
                  loading="lazy"
                  className="img-fluid"
                  alt="avatar"
                />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <h3>Web Developer</h3>

                <div className="row mt-5">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Ngày sinh:</strong> <span>06-06-1997</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Github:</strong>{" "}
                        <span>
                          <a
                            target="_blank"
                            href="https://github.com/black134614"
                          >
                            black134614
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Số điện thoại:</strong>
                        <a href="tel:+84354624774">
                          <span>035.462.4774</span>
                        </a>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Nơi ở:</strong>{" "}
                        <span>Châu Thành, Tây Ninh</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Skills Section ======= */}
        <section id="skill" className="skills section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Kỹ Năng</h2>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <ul>
                  <h5>Kỹ năng chính</h5>
                  <li>
                    Cơ bản
                    <ul>
                      <li>HTML, Css, Js, Jquery</li>
                      <li>Boostrap, Tailwindcss, ...</li>
                    </ul>
                  </li>
                  <li>
                    Nâng cao
                    <ul>
                      <li>Main Gallery: Reactjs Main Framework: Nextjs</li>
                      <li>
                        Support Gallery: Redux, Redux-toolkit, Redux thunk,
                        Redux saga, Axios, React router dom, Ant design,
                        Tailwind,...
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
                <ul>
                  <h5>Kỹ năng khác</h5>
                  <li>
                    Có kĩ năng cơ bản về Java,Python, SQL server, aps.net
                    webform, MVC, .net API,...
                  </li>
                  <li>
                    Lập trình VBA excel - SAP, tiện ích Google Chrome
                    Extendsion.
                  </li>
                  <li>
                    Có kinh nghiệm kỹ năng văn phòng, làm việc trong môi trường
                    công nghiệp.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="activities" className="resume">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Học Thêm - Thực Chiến</h2>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">2018 - 2019</h3>
                <div className="resume-item pb-0">
                  <h4>Học offline</h4>
                  <p>
                    <em>Hoàn thành 3 khóa offline - có chứng chỉ</em>
                  </p>
                  <ul>
                    <li>Thiết kế web cơ bản</li>
                    <li>Thiết kế web nâng cao &#40;admin&#41;</li>
                    <li>Lập trình web cơ bản &#40;C#, Asp.net webform&#41;</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
                <h3 className="resume-title">2021 - 2022</h3>
                <div className="resume-item">
                  <h4>Học online</h4>
                  <p>
                    <em>
                      Hoàn thành lộ trình 3 khóa của CyberSoft - đợi cấp chứng
                      chỉ
                    </em>
                  </p>
                  <ul>
                    <li>
                      Tư duy lập trình,Thuật toán, Hướng đối tượng
                      &#40;Java&#41;
                    </li>
                    <li>Lập trình Front end Foundation</li>
                    <li>Lập trình Front end master Reactjs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Resume Section */}
        {/* ======= Portfolio Section ======= */}
        <section id="experience" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-up">Kinh nghiệm cá nhân</h2>
              <p data-aos="fade-up">
                Bên dưới là những kinh nghiệm lập trình website cá nhân của mình.
                <br /> Ngoài ra còn có các Project auto Facebook, Python, Craw data website khác,... mình sẽ không công khai.
              </p>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    Tất cả
                  </li>
                  <li data-filter=".filter-template">Template</li>
                  <li data-filter=".filter-reactjs">Reactjs</li>
                  <li data-filter=".filter-realproject">Dự án thực</li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up">
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-realproject"
                data-tip="Phát triển web & quản trị website Thuận Phong Corp"
              >
                <div className="card portfolio-wrap bg-primary text-light">
                  <img src={thuanPhongDemo} />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">Phát triển Web thuanphongcorp.vn</h5>
                    <p className="card-text">
                      Phát triển web thương hiệu Thuận Phong.
                      <br /> Công nghệ sử dụng: Nextjs và Wordpress API.
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://www.thuanphongcorp.vn/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-realproject"
                data-tip="Phát triển web & quản trị website Tiến Dũng CPC"
              >
                <div className="card portfolio-wrap bg-primary text-light">
                  <img src={demoTienDungCPC} />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">Web Develope & SEO </h5>
                    <p className="card-text">
                      Phát triển web và SEO cho công ty tư nhân TNHH Tiến Dũng
                      CPC Bình Dương - Chuyên bán lẻ phụ kiện, PC, Laptop , đồ
                      dùng công nghệ... thi công lắp đặt cammera, đèn năng lượng
                      mặt trời.
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="#"
                        className="btn btn-danger me-3"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Đang Thực Hiện Deloy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-realproject"
                data-tip="Phát triển web bán đồ điện - nước "
              >
                <div className="card portfolio-wrap bg-primary text-light">
                  <img src={demoSankaTech} />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">Web Develope & SEO</h5>
                    <p className="card-text">
                      Phát triển web và SEO cho Sanka Tech - Chuyên bán các mặt
                      hàng gia dụng - gia đình như: Máy nước nóng, Máy lọc nước,
                      Bếp Gas,... của hãng Sanka
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="#"
                        className="btn btn-danger me-3"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Hoàn thiện Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-realproject"
                data-tip="Phát triển web landding page Home Stay "
              >
                <div className="card portfolio-wrap bg-primary text-light">
                  <img src={demoHomeStay} />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">
                      Home Sweet Home Lannding Page - Thiết lập bán phòng
                    </h5>
                    <p className="card-text">
                      Phát triển Landing Page & Thiết lập bán phòng kênh Agoda,
                      Booking và hướng dẫn SEO facebook tăng traffic và chứng
                      thực cho Home Stay Home Sweet Home Tây Ninh.
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://homestaytayninh.mooo.com/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/TayNinhHomeStay.github.io"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-template"
                data-tip="Thực hành cover template nhưng sử dụng SASS"
              >
                <div className="card portfolio-wrap bg-primary text-light">
                  <img src={h1} className="card-img" alt="h1" />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">Massive Home Template</h5>
                    <p className="card-text">
                      Cover trang chủ Massive template bằng SASS
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="http://massivehome-naul.surge.sh/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/MassiveHome_SASS_BS5"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-template"
                data-tip="Thử sức làm một trang landding page sử dụng plugin, jquery , boostrap"
              >
                <div className="card portfolio-wrap text-light">
                  <img src={h2} className="card-img" alt="h2" />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">
                      Landing Page giới thiệu phòng khám
                    </h5>
                    <p className="card-text">
                      Làm trang lannding page giới thiệu phòng khám cho bạn bè.
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://black134614.github.io/TamAnhDemo.github.io"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/TamAnhDemo.github.io"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-template"
                data-tip="Tập cover template và học tư duy ui-ux của nước ngoài"
              >
                <div className="card portfolio-wrap text-light">
                  <img src={h9} className="card-img" alt="h9" />
                  <div className="card-body card-img-overlay ">
                    <h5 className="card-title">Cover wedding template</h5>
                    <p className="card-text">Cover home page trang wedding.</p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://weddingcover.surge.sh/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/Cover_Template_Wedding"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-reactjs"
                data-tip="viết app reactjs cơ bản - nhập môn"
              >
                <div className="card portfolio-wrap bg-success text-light">
                  <img src={h3} className="card-img" alt="h3" />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">Máy tính đơn giản</h5>
                    <p className="card-text">
                      App cover máy tính đơn giản để ôn học cơ bản reactjs, sử
                      dụng class conponent.
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://simple-caculator-naul.surge.sh/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/Reactjs_Khoa1_Caculator"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-reactjs"
                data-tip="Sử dụng class conponent và thực hành thao tác với state"
              >
                <div className="card portfolio-wrap bg-secondary text-light">
                  <img src={h4} className="card-img" alt="h4" />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">App đặt burger đơn giản</h5>
                    <p className="card-text">
                      Xây dựng app đặt burger đơn giản học chia components, sử
                      dụng class conponent.
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://simple-burger-oder-naul.surge.sh/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/Reactjs_Khoa2_Components_Burgur-Order-App"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-reactjs"
                data-tip="Sử dụng class conponent và thực hành thao tác với state và lifecycle"
              >
                <div className="card portfolio-wrap bg-primary text-light">
                  <img src={h5} className="card-img" alt="h5" />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">
                      Trang quản lý người dùng đơn giản
                    </h5>
                    <p className="card-text">
                      Xây dựng trang quản lý người dùng đơn giản để ôn tập về
                      life cycle sử dụng class conponent.
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://simple-users-manage-naul.surge.sh/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/Reactjs_Khoa3_LifeCycle_Quan-Ly-Nguoi-Dung"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-reactjs"
                data-tip={`Trang được build từ jira reactjs template chuyên để build một trang quản lý sử dụng reactjs. <br/> Sử dụng class component, chia HOC , dữ liệu lấy từ api có sẵn thông qua redux, redux-saga, thư viện thiết kế ant design, <br/> form xử lý bẳng fomrik, yup,...<br/>Chức năng: Đăng kí, Đăng nhập, Quản lý dự án, Quản lý task, Quản lý người dùng,... <br/>Tài khoản: luanvo1ad@gmail.com, Mật Khẩu: 123456`}
              >
                <div className="card portfolio-wrap bg-success text-light">
                  <img src={h7} className="card-img" alt="h7" />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">Trang quản lý task</h5>
                    <p className="card-text">
                      Build từ jira để xây dựng trang quản lý task.
                      <br />
                      Tài khoản: luanvo1ad@gmail.com, Mật Khẩu: 123456
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://jiraclone-task-manage-naul.surge.sh/login"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/Reactjs_Khoa4_Jira-Clone_Task-User-Manage_Comments"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-reactjs"
                data-tip="Thư viện chính yếu: redux, redux-thunk, axios, antd,... <br/>API cung cấp sẵn, sử dụng tailwind v2 + antd để thiết kế giao diện và HOC ,ultis tiện ích từ project jiraclone.<br/>Chức năng chính: Đăng kí , đăng nhập, Hiển thị phim, đặt vé online bằng signalR, Quản lý người dùng, Quản lý film,...<br/>Hiện tại antd nặng và hay lỗi đang xây dựng lại và bổ dung theme dark-light, responsive tốt hơn (hoàn toàn sử dụng tailwind v3)"
              >
                <div className="card portfolio-wrap bg-secondary text-light">
                  <img src={h8} className="card-img" alt="h8" />
                  <div className="card-body card-img-overlay">
                    <h5 className="card-title">Trang đặt vé xem phim</h5>
                    <p className="card-text">
                      Xây dựng trang đặt vé xem phim.
                      <br />
                      Tài Khoản: luanadmin, mật khẩu: 123456
                    </p>
                    <div className="btn-wapper">
                      <a
                        target="_blank"
                        href="https://movieticket-naul.surge.sh/"
                        className="btn btn-danger me-3"
                      >
                        Xem
                      </a>
                      <a
                        target="_blank"
                        href="https://movieticket-naul.surge.sh/admin"
                        className="btn btn-info me-3"
                      >
                        admin
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/black134614/React_Khoa5_MovieTicket"
                        className="btn btn-warning"
                      >
                        Soure code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
        <section id="certificate" className="certificate">
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-up">Chứng nhận</h2>
              <p data-aos="fade-up">Chứng nhận từ trung tâm.</p>
            </div>
            <div className="row d-flex justify-content-center">
              <div
                className="col-lg-3 col-md-4 col-6 mb-3 item"
                data-aos="fade-up"
              >
                <img className="img-fluid" src={c1} alt="c1" />
              </div>
              <div
                className="col-lg-3  col-md-4 col-6 mb-3 item"
                data-aos="fade-up"
              >
                <img className="img-fluid" src={c2} alt="c2" />
              </div>
              <div
                className="col-lg-3  col-md-4 col-6 mb-3 item"
                data-aos="fade-up"
              >
                <img className="img-fluid" src={c3} alt="c3" />
              </div>
              <div
                className="col-lg-3  col-md-4 col-6 mb-3 item"
                data-aos="fade-up"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1WTdPOt5qM6rykO-l8QOjB1p5q088ntF-/view"
                >
                  <img className="img-fluid" src={c4} alt="c4" />
                  <span>Xem bảng điểm</span>
                </a>
              </div>
              <div
                className="col-lg-3  col-md-4 col-6 mb-3 item"
                data-aos="fade-up"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1xpUwAHfOAW-nmZC8yGudVMfpzIP2AGPC/view"
                >
                  <img className="img-fluid" src={c6} alt="c6" />
                  <span>Xem bảng điểm</span>
                </a>
              </div>
              <div
                className="col-lg-3  col-md-4 col-6 mb-3 item"
                data-aos="fade-up"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1S7cGLAp5iF0aZTmOtQ7DmQYvyAf-bT-u/view"
                >
                  <img className="img-fluid" src={c5} alt="c5" />
                  <span>Xem bảng điểm</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-up">Liên hệ</h2>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Nơi ở:</h4>
                    <p>Bình Chuẩn, Thuận Giao, Bình Dương</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>luanvo1ad@gmail.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Số điện thoại:</h4>
                    <p>035.462.4774</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.698503612047!2d106.71240703392533!3d10.986114446982873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d0984c869eb9%3A0xd2e9895d479a5803!2zQsOsbmggQ2h14bqpbiAxNywgQsOsbmggQ2h14bqpbiwgVGh14bqtbiBBbiwgQsOsbmggRMawxqFuZw!5e0!3m2!1sen!2s!4v1657315159925!5m2!1sen!2s"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div>
              <div
                className="d-none d-lg-block col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img src="https://picsum.photos/1000/600" />
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
    </div>
  );
}
