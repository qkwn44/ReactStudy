import React from 'react'
import Header from '../include/Header'
import Loding from '../include/Loding'
import Contents from '../include/Contents'
import Footer from '../include/Footer'
import { gsap } from 'gsap'

function Contact() {
  const start = () => {
    setTimeout(() => {
      document.getElementById('loading').classList.remove('loading-active')

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
      <Loding />
      <Header />
      <Contents>
        <section id="mainCont">
          <h2 className="sr-only">연락처 컨텐츠 영역입니다.</h2>
          <div className="main__cont">
            <div className="l1">CONTACT</div>
            <div className="l2">ME</div>
            <div className="l3">THANK U!</div>
          </div>
        </section>
      </Contents>
      <Footer />
    </div>
  )
}

// class Contact extends React.Component {
//   state = {
//     isLoading: true,
//     refers: [],
//   }
//   getRefer = async () => {
//     this.setState({ isLoading: false })
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       document.getElementById('loading').classList.remove('loading-active')
//       gsap.set('.wrap__title h2 strong', { opacity: 0, y: 100 })
//       gsap.set('.wrap__title h2 em', { opacity: 0, y: 100 })
//       gsap.set('#header', { opacity: 0, top: '-100%' })
//       gsap.set('#footer', { opacity: 0, bottom: '-100%' })
//       gsap.set('.main__cont', { opacity: 0 })

//       gsap.to('.wrap__title h2 strong', {
//         duration: 0.4,
//         delay: 1,
//         y: 0,
//         opacity: 1,
//         ease: 'power3.out',
//       })
//       gsap.to('.wrap__title h2 em', {
//         duration: 0.4,
//         delay: 1.4,
//         y: 0,
//         opacity: 1,
//         ease: 'power3.out',
//       })
//       gsap.to('#header', {
//         duration: 0.4,
//         delay: 1.8,
//         top: 0,
//         opacity: 1,
//         ease: 'power3.out',
//       })
//       gsap.to('#footer', {
//         duration: 0.4,
//         delay: 1.8,
//         bottom: 0,
//         opacity: 1,
//         ease: 'power3.out',
//       })
//       gsap.to('.l1', {
//         duration: 0.4,
//         delay: 2,
//         opacity: 1,
//         ease: 'power3.out',
//       })
//       this.getRefer()
//     }, 2000)
//   }

//   render() {
//     const { isLoading } = this.state
//     return (
//       <div>
//         {isLoading ? (
//           <Loding />
//         ) : (
//           <div>
//             <Header />
//             <Contents>
//               {isLoading ? '로딩중...' : '준비되었습니다.'}
//               <section id="mainCont">
//                 <h2 className="sr-only">연락처 컨텐츠 영역입니다.</h2>
//                 <div className="main__cont">
//                   <div className="l1">CONTACT </div>
//                   <div className="l2">ME !</div>
//                 </div>
//               </section>
//             </Contents>
//             <Footer />
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// function Contact(){
//     return (

//     <div>
//         {isLoading ? (
//                     <Loding />

//                 ) : (
//         <div>
//             <Header />
//             <Contents>
//                 <section id="mainCont">
//                     <h2 className="sr-only">연락처 컨텐츠 영역입니다.</h2>
//                     <div className="main__cont">
//                         <div className="l1">MACH DOCH</div>
//                         <div className="l2">WAS DU </div>
//                         <div className="l3">WILST</div>
//                     </div>
//                 </section>
//             </Contents>
//             <Footer />
//         </div>
//                 )}
//    </div> )
// }

export default Contact
