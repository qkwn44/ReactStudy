import React from 'react'
import Header from '../include/Header'
import Contents from '../include/Contents'
import Footer from '../include/Footer'
import WrapTitle from '../include/WrapTitle'
import { gsap } from 'gsap'

function Script() {
  const start = () => {
    setTimeout(() => {
      gsap.set('.wrap__title h2 strong', { opacity: 0, y: 100 })
      gsap.set('.wrap__title h2 em', { opacity: 0, y: 100 })
      gsap.set('#header', { opacity: 0, top: '-100%' })
      gsap.set('#footer', { opacity: 0, bottom: '-100%' })

      gsap.to('.wrap__title h2 strong', {
        duration: 0.4,
        delay: 1,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
      })
      gsap.to('.wrap__title h2 em', {
        duration: 0.4,
        delay: 1.4,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
      })
      gsap.to('#header', {
        duration: 0.4,
        delay: 1.8,
        top: 0,
        opacity: 1,
        ease: 'power3.out',
      })
      gsap.to('#footer', {
        duration: 0.4,
        delay: 1.8,
        bottom: 0,
        opacity: 1,
        ease: 'power3.out',
      })
    }, 2000)
  }
  start()
  return (
    <div>
      <Header />
      <Contents>
        <section id="scriptCont">
          <div className="container">
            <WrapTitle text={['SCRIPT', 'REFERENCE']} />
            <div className="script__cont">
              <div className="script">
                <div className="script-left">
                  <h3>Parallax Effect</h3>
                  <p>
                    Vanila javascript와 jQuery를 이용한 Parallax Effect입니다.
                  </p>
                </div>
                <div className="script-right">
                  <div className="view">
                    <iframe
                      title="페럴렉스 이펙트 스크립트"
                      src="http://jeonhyeonjeong.dothome.co.kr/parallax/parallaxEffect05-javascript.html"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="script">
                <div className="script-left">
                  <h3>Mouse Effect</h3>
                  <p>Vanila Javascript와 jQuery를 이용한 Mouse Effect입니다.</p>
                  <p>다양한 mouse hover 효과를 구현했습니다.</p>
                </div>
                <div className="script-right">
                  <div className="view">
                    <iframe
                      title="마우스 이펙트 스크립트"
                      src="http://jeonhyeonjeong.dothome.co.kr/mouseEffect/mouseEffect01-javascript.html"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="script">
                <div className="script-left">
                  <h3>Slider Effect</h3>
                  <p>Vanila Javascript와 jQuery를 이용한 Mouse Effect입니다.</p>
                </div>
                <div className="script-right">
                  <div className="view">
                    <iframe
                      title="슬라이드 이펙트 스크립트"
                      src="http://jeonhyeonjeong.dothome.co.kr/parallax/parallaxEffect05-javascript.html"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contactInfo">
          <div className="contact__info">
            <div>
              <p>Let’s create something new</p>
              <h3>
                LET`S Get IN
                <br />
                TOUCH
              </h3>
              <a href="contact.html" className="contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </Contents>
      <Footer />
    </div>
  )
}

export default Script
