import React from 'react'
import Loding from '../include/Loding'
import Header from '../include/Header'
import Contents from '../include/Contents'
import Footer from '../include/Footer'
import { gsap } from 'gsap'

function Info({ text }) {
  return <div>{text}</div>
}

const textInfo = [
  { text: 'FROTDEND' },
  { text: 'DEVELOPER' },
  { text: 'PORTFOLIO' },
  { text: 'HYEONJEONG' },
]

function Main() {
  const start = () => {
    setTimeout(() => {
      document.getElementById('loading').classList.remove('loading-active')

      gsap.set('.main__cont div', { opacity: 0, y: 100 })
      gsap.set('.wrap__title h2 strong', { opacity: 0, y: 100 })
      gsap.set('.wrap__title h2 em', { opacity: 0, y: 100 })
      gsap.set('#header', { opacity: 0, top: '-100%' })
      gsap.set('#footer', { opacity: 0, bottom: '-100%' })

      gsap.to('.main__cont div', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 1,
        ease: 'power3.out',
      })
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
      <Loding />
      <Header />
      <Contents>
        <section id="mainCont">
          <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
          <div className="main__cont">
            {textInfo.map((txt) => (
              <Info text={txt.text} key={txt.text} />
            ))}
          </div>
        </section>
      </Contents>
      <Footer />
    </div>
  )
}

export default Main
