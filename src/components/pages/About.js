import React from 'react'
import Header from '../include/Header'
import Contents from '../include/Contents'
import Footer from '../include/Footer'
import WrapTitle from '../include/WrapTitle'
import { gsap } from 'gsap'

function About() {
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
        <section id="aboutCont">
          <div className="container">
            <WrapTitle text={['About', 'me']} />
            <div className="about__cont">
              <div className="about">
                <div className="about__img">
                  <img src="img/me.jpg" alt="이미지" />
                </div>
                <div className="about__txt">
                  <h3>새로운 경험을 즐기는 개발자</h3>
                  <p>
                    배움에 두려움이 없는 신입 개발자 전현정입니다. 꾸준히 새로운
                    것에 도전하고 배우며 능력을 향상시키는 개발자가 될 것입니다.
                    국비 과정 수료 이후 스터디에 참여해 react, vue, php 등
                    다양한 언어를 배우며 포트폴리오를 채워나갔습니다. 더 나은
                    프론트 엔드 개발자를 꿈꾸며 공부하고 만들어 본 결과물들을
                    담았습니다. 재밌게 감상해주세요
                  </p>
                </div>
              </div>
              <div className="about">
                <div className="about__img">
                  <img src="img/me2.jpg" alt="내사진" />
                </div>
                <div className="about__txt">
                  <h3>여행으로부터 에너지를 얻는 개발자</h3>
                  <p>
                    배움에 두려움이 없는 신입 개발자 전현정입니다. 꾸준히 새로운
                    것에 도전하고 배우며 능력을 향상시키는 개발자가 될 것입니다.
                    국비 과정 수료 이후 스터디에 참여해 react, vue, php 등
                    다양한 언어를 배우며 포트폴리오를 채워나갔습니다. 더 나은
                    프론트 엔드 개발자를 꿈꾸며 공부하고 만들어 본 결과물들을
                    담았습니다. 재밌게 감상해주세요
                  </p>
                </div>
              </div>
              <div className="about">
                <div className="about__img">
                  <img src="img/me3.jpg" alt="내사진" />
                </div>
                <div className="about__txt">
                  <h3>하고 싶은건 무조건 하고 보는 개발자</h3>
                  <p>
                    매년 제 버킷 리스트는 새로운 내용들이 업데이트되고 있어요.
                    1월 1일 해외에서 보내기, 해외에서 1년 이상 살아보기, 터키의
                    카파도키아에서 열기구 보기, 서핑하기, 베이킹하기 등 등 이미
                    이루어 진 것들이 많아요. 제 이번 새 버킷 리스트는
                    개발자되기입니다. 이번 목표도 꼭 이루어지리라 믿어요!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Contents>
      <Footer />
    </div>
  )
}

export default About
