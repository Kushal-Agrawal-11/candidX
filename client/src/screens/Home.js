import React from 'react';
import "./Home.css"
import "../images/untitled2png@2x.png"

const Home = () => {
  return (
      <div className="frame-parent">
      <div className="contact-us-parent">
        <div className="contact-us">
          <div className="divu-layout-row">
            <div className="divu-container-layout">
              <img
                className="untitled3png-icon"
                alt=""
                src="./public/untitled3png@2x.png"
              />

              <div className="heading-2">Contact Us</div>
              <div className="pu-text">
                <div className="infoavenircom-190-ottley-container">
                  <p className="p">(404) 899-5451 </p>
                  <p className="p">info@avenir.com</p>
                  <p className="p">190 Ottley Drive, GA 30324</p>
                </div>
              </div>
              <img
                className="untitled2png-icon"
                alt=""
                src="../images/untitled2png@2x.png"
              />

              <div className="divu-social-icons">
                <div className="link-svg">
                  <img
                    className="svg-5a3f-icon"
                    alt=""
                    src="../images/svg5a3f.svg"
                  />
                </div>
                <div className="link-svg">
                  <img
                    className="svg-5a3f-icon"
                    alt=""
                    src="../images/svg094b.svg"
                  />
                </div>
                <div className="link-svg">
                  <img
                    className="svg-5a3f-icon"
                    alt=""
                    src="./public/svge9b2.svg"
                  />
                </div>
                <div className="link-svg">
                  <img
                    className="svg-5a3f-icon"
                    alt=""
                    src="./public/svg5001.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divu-container-layout1">
              <div className="form">
                <div className="input">
                  <div className="pseudo">
                    <div className="enter-your-name">Enter your Name</div>
                  </div>
                </div>
                <div className="input1">
                  <div className="pseudo1">
                    <div className="enter-your-name">
                      Enter a valid email address
                    </div>
                  </div>
                </div>
                <div className="textarea">
                  <div className="enter-your-message">Enter your message</div>
                </div>
                <div className="link">
                  <div className="submit">Submit</div>
                </div>
              </div>
              <img
                className="untitled3png-icon1"
                alt=""
                src="./public/untitled3png1@2x.png"
              />
            </div>
          </div>
        </div>
        
        <div className="divsite-wrap">
          <img className="img-1jpg-icon" alt="" src="../images/img-1jpg@2x.png" />

          <img className="img-2jpg-icon" alt="" src="../images/img-2jpg@2x.png" />

          <div className="divimage-wrap-2">
            <img className="img-3jpg-icon" alt="" src="./public/img-3jpg@2x.png" />
          </div>
          <div className="pseudo2"></div>
          <img className="img-4jpg-icon" alt="" src="./public/img-4jpg@2x.png" />

          <img className="img-5jpg-icon" alt="" src="./public/img-5jpg@2x.png" />

          <img className="img-6jpg-icon" alt="" src="./public/img-6jpg@2x.png" />

          <img className="img-7jpg-icon" alt="" src="./public/img-7jpg@2x.png" />

          <img className="img-3jpg-icon1" alt="" src="./public/img-3jpg1@2x.png" />

          <img className="img-4jpg-icon1" alt="" src="./public/img-4jpg1@2x.png" />
        </div>
        <div className="navbar">
          <div className="divcol-6">
            <div className="heading-1-container">
              <span>Candid</span>
              <span className="x">X</span>
            </div>
          </div>
          <div className="divcol-10">
            <div className="navigation-list">
              <b className="item-link">Home</b>
              <b className="item-link1">Services</b>
              <b className="item-link2">About</b>
              <b className="item-link3">Contact</b>
              <div className="item-link4">
                <b className="gallery">Gallery</b>
                <div className="symbol"></div>
              </div>
            </div>
          </div>
          <div className="divu-social-icons1">
            <div className="link-svg">
              <img className="svg-5a3f-icon" alt="" src="./public/svg5a3f1.svg" />
            </div>
            <div className="link-svg">
              <img className="svg-5a3f-icon" alt="" src="./public/svg094b1.svg" />
            </div>
            <div className="link-svg">
              <img className="svg-5a3f-icon" alt="" src="./public/svge9b21.svg" />
            </div>
            <div className="link-svg">
              <img className="svg-5a3f-icon" alt="" src="./public/svg50011.svg" />
            </div>
          </div>
        </div>
        <div className="carousel">
          <img
            className="slides-box-icon1"
            alt=""
            src="./public/slides-box1@2x.png"
          />

          <div className="slides-navigation1">
            <div className="click-area2">
              <img
                className="arrow-left-icon1"
                alt=""
                src='../images/untitled2png@2x.png'
              />
            </div>
            <div className="slide-indicator1">
              <img
                className="dot-indictaor-11"
                alt=""
                src="./public/activetrue.svg"
              />

              <img
                className="dot-indictaor-21"
                alt=""
                src="./public/activefalse.svg"
              />

              <img
                className="dot-indictaor-21"
                alt=""
                src="./public/activefalse.svg"
              />

              <img
                className="dot-indictaor-21"
                alt=""
                src="./public/activefalse.svg"
              />

              <img
                className="dot-indictaor-21"
                alt=""
                src="./public/activefalse.svg"
              />
            </div>
            <div className="click-area2">
              <img
                className="arrow-left-icon1"
                alt=""
                src="./public/arrow-right1.svg"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="link-emplate">CandidX</div>
          <div className="div">©️</div>
        </div>
      </div>
    </div>
  )
}

export default Home
