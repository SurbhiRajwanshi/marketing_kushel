import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaOne = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div className='team-area bg-relative pd-top-90 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>MEET OUR EXPERTS</h6>
            <h2 className='title'>
              {/* Your Partner In <span>Digital</span> Success */}
               Our <span>Success</span> Story
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/digiimg11.jpg' alt='img' />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  {/* <Link to='/team-details'>Devon Lane</Link> */}
                  <Link to='/team-details'> Project-1 </Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/digiimg2.webp' alt='img' />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  {/* <Link to='/team-details'>Darrell Steward</Link> */}
                  <Link to='/team-details'>Project -2</Link>
                  </h5>
                  <p>It Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/digi3.webp' alt='img' />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  {/* <Link to='/team-details'>Bessie Cooper</Link> */}
                  <Link to='/team-details'>Project -3</Link>
                  </h5>
                  <p>Software Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaOne;
