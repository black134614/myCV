import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { hideLoadding } from '../redux/LoaddingReducer/LoaddingReducer';
import HeroHome from '../components/HeroHome/HeroHome'
import avatar from '../assets/img/luan.jpg'
export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoadding());
    }, 1000);
  }, []);
  return (
      <div data-bs-spy="scroll" data-bs-target="#header" data-bs-offset="0" className="scrollspy-example" tabindex="0">
        {/* ======= Hero Section ======= */}
        <HeroHome />
        {/* End Hero */}

        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>Giới thiệu</h2>
                <p>
                  Chào! Mình là Luân đến từ Tây Ninh, hiện tại mình đang sống và làm việc ở Bình Dương.
                  <br />
                  Trước dịch 2018-2019, có học offline 3 khóa cơ bản về Front end và Back end thời còn chuộng jquery từ thầy Lê Minh Hiếu hiện đang là giảng viên trường đại học Kinh Tế - Kỹ Thuật Bình Dương.
                  <br />
                  Trong và sau mùa dịch mình theo học 3 khóa online của Cybersoft dạy từ căn bản tư duy lập trình , front end cơ bản - nâng cao và cuối cùng là reactjs.
                  <br />
                  Hiện tại mình đã có gia đình nên sẽ ưu tiên tìm việc gần nhà.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                  <img src={avatar} className="img-fluid" alt />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                  <h3>Designer &amp; Web Developer.</h3>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right" /> <strong>Ngày sinh:</strong> <span>06-06-1997</span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>Github:</strong> <span><a href='https://github.com/black134614'>black134614</a></span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>Số điện thoại:</strong><a href='tel:+84354624774'><span>035.462.4774</span></a></li>
                        <li><i className="bi bi-chevron-right" /> <strong>Nơi ở:</strong> <span>Bình Chuẩn, Bình Dương</span></li>
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Skills Section ======= */}
          <section id="skill" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Kỹ Năng</h2>
              </div>
              <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                  <ul>
                    <h5>Kỹ năng chính</h5>
                    <li>
                      Cơ bản
                      <ul>
                        <li>
                          HTML, Css, Js, Jquery
                        </li>
                        <li>
                          Boostrap, Tailwindcss, ...
                        </li>
                      </ul>
                    </li>
                    <li>
                      Nâng cao
                      <ul>
                        <li>
                          Framework: Reactjs
                        </li>
                        <li>
                          Gallery: Redux, Redux-toolkit, Redux thunk, Redux saga, Axios, React router dom, Ant design, Tailwind,...
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                  <ul>
                    <h5>Kỹ năng khác</h5>
                    <li>
                      Có kĩ năng cơ bản về Java, SQL server, aps.net webform, MVC,...
                    </li>
                    <li>
                      Có kinh nghiệm kỹ năng văn phòng, làm việc trong môi trường công nghiệp.
                    </li>
                    <li>
                      Đọc tài liệu, tư duy giải quyết vấn đề và tự tìm kiếm từ khóa.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>{/* End Skills Section */}
          {/* ======= Resume Section ======= */}
          <section id="activities" className="resume">
            <div className="container">
              <div className="section-title">
                <h2>Quá trình học tập</h2>
              </div>
              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">2018 - 2019</h3>
                  <div className="resume-item pb-0">
                    <h4>Học offline</h4>
                    <p><em>Hoàn thành 3 khóa offline - có chứng chỉ</em></p>
                    <ul>
                      <li>Thiết kế web cơ bản</li>
                      <li>Thiết kế web nâng cao &#40;admin&#41;</li>
                      <li>Lập trình web cơ bản &#40;C#, Asp.net webform&#41;</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                  <h3 className="resume-title">2021 - 2022</h3>
                  <div className="resume-item">
                    <h4>Học online</h4>
                    <p><em>Hoàn thành lộ trình 3 khóa của CyberSoft - đợi cấp chứng chỉ</em></p>
                    <ul>
                      <li>Tư duy lập trình,Thuật toán, Hướng đối tượng &#40;Java&#41;</li>
                      <li>Lập trình Front end Foundation</li>
                      <li>Lập trình Front end master Reactjs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Resume Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="experience" className="portfolio section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Kinh nghiệm cá nhân</h2>
                <p>Trước 2020 mình rất ít dùng github nên đa phần sẽ là kinh nghiệm học ở Cybersoft.</p>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">Tất cả</li>
                    <li data-filter=".filter-template">Template</li>
                    <li data-filter=".filter-reactjs">Reactjs</li>
                    <li data-filter=".filter-realproject">Dự án thực</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6 portfolio-item filter-template">
                  <div class="card portfolio-wrap bg-primary text-light">
                    <div class="card-header">
                      SASS
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Massive Home Template</h5>
                      <p class="card-text">Cover trang chủ Massive template bằng SASS</p>
                      <a href="http://massivehome-naul.surge.sh/" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/MassiveHome_SASS_BS5" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-template">
                  <div class="card portfolio-wrap " >
                    <div class="card-header">
                      HTML, Css, Js, Jquery
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Landing Page giới thiệu phòng khám</h5>
                      <p class="card-text">Làm trang lannding page giới thiệu phòng khám cho bạn bè.</p>
                      <a href="https://black134614.github.io/TamAnhDemo.github.io" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/TamAnhDemo.github.io" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-reactjs">
                  <div class="card portfolio-wrap bg-success text-light">
                    <div class="card-header">
                      Reactjs
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Máy tính đơn giản</h5>
                      <p class="card-text">App cover máy tính đơn giản để ôn học cơ bản reactjs, sử dụng class conponent.</p>
                      <a href="https://simple-caculator-naul.surge.sh/" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/Reactjs_Khoa1_Caculator" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-reactjs">
                  <div class="card portfolio-wrap bg-secondary text-light">
                    <div class="card-header">
                      Reactjs
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">App đặt burger đơn giản</h5>
                      <p class="card-text">Xây dựng app đặt burger đơn giản học chia components, sử dụng class conponent.</p>
                      <a href="https://simple-burger-oder-naul.surge.sh/" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/Reactjs_Khoa2_Components_Burgur-Order-App" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-reactjs">
                  <div class="card portfolio-wrap bg-primary text-light">
                    <div class="card-header">
                      Reactjs
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Trang quản lý người dùng đơn giản</h5>
                      <p class="card-text">Xây dựng trang quản lý người dùng đơn giản để ôn tập về life cycle sử dụng class conponent.</p>
                      <a href="https://simple-users-manage-naul.surge.sh/" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/Reactjs_Khoa3_LifeCycle_Quan-Ly-Nguoi-Dung" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-reactjs">
                  <div class="card portfolio-wrap">
                    <div class="card-header">
                      Reactjs
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Phòng thử đồ đơn giản</h5>
                      <p class="card-text">Xây dựng chức năng phòng thử đồ đơn giản để ôn tập life cycle và hook, sử dụng funtional components và thư viện spring animation</p>
                      <a href="https://simple-dressing-room-naul.surge.sh/" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/Reactjs_Khoa3_Hook-Spring-Animation_Dressing-Room" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-reactjs">
                  <div class="card portfolio-wrap bg-success text-light">
                    <div class="card-header">
                      Reactjs
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Trang quản lý task</h5>
                      <p class="card-text">Build từ jira để xây dựng trang quản lý task.Dữ liệu lấy từ API cung cấp từ trung tâm. Sử dụng funtional components, thư viện redux, redux saga, ant design,...
                        Task tự thực hiện: bình luận, đăng kí, chỉnh sửa và quản lý thông tin người dùng.</p>
                      <a href="https://jiraclone-task-manage-naul.surge.sh/" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/Reactjs_Khoa4_Jira-Clone_Task-User-Manage_Comments" class="btn btn-waring">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-reactjs">
                  <div class="card portfolio-wrap bg-secondary text-light">
                    <div class="card-header">
                      Reactjs
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Trang đặt vé xem phim</h5>
                      <p class="card-text">Xây dựng trang đặt vé xem phim. Dữ liệu lấy từ API cung cấp từ trung tâm.
                        Task tự thực hiện: Đăng kí, trang người dùng, lịch sử đặt vé, trang quản lý người dùng bao gồm: thêm, sửa , xóa người dùng...</p>
                      <a href="https://movieticket-naul.surge.sh/" class="btn btn-danger me-3">Xem</a>
                      <a href="https://github.com/black134614/React_Khoa5_MovieTicket" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-realproject">
                  <div class="card portfolio-wrap bg-primary text-light">
                    <div class="card-header">
                      Admin Reactjs, API .netCore 6 + SQL Server, User Page MVC
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Trang web mới cho trại dế Oanh Vĩnh</h5>
                      <p class="card-text">
                        Xây dựng trang web giới thiệu sản phẩm, đăng tin tức của trại dế Oanh Vĩnh từ Tây Ninh.
                        <br />
                        <ul>
                          <li>Trang hiện đang trong quá trình chờ deloy.</li>
                          <li>Team có 2 thành viên.</li>
                          <li>Task chính của mình: Xây dựng trang admin dựa trên API, thiết kế trang người dùng, thiết kế database, đổ dữ liệu người dùng. Dữ liệu trong database là demo nên có thể public.</li>
                          <li>Dữ liệu trong database là demo nên mình xin public được.</li>
                        </ul>
                      </p>
                      <a href="https://github.com/black134614/OanhVinhWebFull" class="btn btn-warning">Soure code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Portfolio Section */}
          
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>Liên hệ</h2>
              </div>
              <div className="row" data-aos="fade-in">
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.698503612047!2d106.71240703392533!3d10.986114446982873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d0984c869eb9%3A0xd2e9895d479a5803!2zQsOsbmggQ2h14bqpbiAxNywgQsOsbmggQ2h14bqpbiwgVGh14bqtbiBBbiwgQsOsbmggRMawxqFuZw!5e0!3m2!1sen!2s!4v1657315159925!5m2!1sen!2s" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />
                  </div>
                </div>
                <div className="d-none d-lg-block col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                 <img src="https://picsum.photos/500/600"/>
                </div>
              </div>
            </div>
          </section>{/* End Contact Section */}
        </main>
        {/* End #main */}
      </div>
  )
}
