import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pic1 from "../imagess/seo.jpeg"
import Pic2 from "../imagess/contentmarketing.png"
import Pic3 from "../imagess/Social-Media-Marketing-Plan.jpg"
import pic4 from "../imagess/email-marketing-strategy.jpg"
import pic5 from "../imagess/ppc-advertising.jpg"
import pic6 from "../imagess/Influencer-Marketing.jpg"

const CaseStudyAreaOne = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className='case-study-area bg-relative pd-top-110'>
        <img
          className='animate-img-1 top_image_bounce'
          src='assets/img/banner/2.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>GALLERY HERE</h6>
            {/* <h2 className='title'>
              Leading The <span>Digital</span> Revolution
            </h2> */}

            <h2 className='title'>
              Leading The <span>Digital marketing</span> Explaine
            </h2>
          </div>
          {/* <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Tecnology Farms</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Tecnology Farms</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Tecnology Farms</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  {/* <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' /> */}
                  <img src={Pic1} alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Search Engine Optimization (SEO) </Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  {/* <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' /> */}
                  <img src={Pic2} alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Content Marketing</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  {/* <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' /> */}
                  <img src={Pic3} />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Social Media Marketing</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  {/* <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' /> */}
                  <img src={pic4} alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Email Marketing </Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  {/* <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' /> */}
                  <img src={pic5} alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Pay-Per-Click (PPC) Advertising</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  {/* <img src='assets/img/case-study/reluctionimg3.jpg' alt='img' /> */}
                  <img src={pic6} />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Influencer Marketing</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaOne;
