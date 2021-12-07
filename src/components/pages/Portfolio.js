import React from 'react'
import Header from '../include/Header'
import Loding from '../include/Loding'
import Contents from '../include/Contents'
import Footer from '../include/Footer'
import PortInfo from '../info/PortInfo'
import axios from 'axios'
import WrapTitle from '../include/WrapTitle'
import { gsap } from 'gsap'

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  }

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      'https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json',
    )
    //console.log(ports);
    //console.log(ports.data.data.ports);
    this.setState({ ports, isLoading: false })
  }

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('loading').classList.remove('loading-active')
      gsap.set('.wrap__title h2 strong', { opacity: 0, y: 100 })
      gsap.set('.wrap__title h2 em', { opacity: 0, y: 100 })
      gsap.set('#header', { opacity: 0, top: '-100%' })
      gsap.set('#footer', { opacity: 0, bottom: '-100%' })
      gsap.set('.youtube__cont', { opacity: 0 })

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
      this.getPorts()
    }, 3000)
  }

  render() {
    const { isLoading, ports } = this.state

    return (
      <div>
        <Header />
        <Contents>
          <section id="portCont">
            <div className="container">
              <WrapTitle text={['portfolio', 'site']} />
              <div className="port__cont">
                {isLoading ? (
                  <Loding />
                ) : (
                  <>
                    {ports.map((port) => (
                      <PortInfo
                        key={port.id}
                        id={port.id}
                        title={port.title}
                        category={port.category}
                        link={port.link}
                        image={port.image}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </section>
        </Contents>
        <Footer />
      </div>
    )
  }
}

// function Portfolio(){
//     return (
//         <div>
//             <Header />
//             <Contents>
//                 <section id="portCont">
//                     <div className="container">
//                         <div className="wrap__title">
//                             <h2><strong>portfolio</strong><em>Site</em></h2>
//                         </div>
//                         <div className="port__cont">
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="port">
//                                 <a href="/">
//                                     <div className="pImg">
//                                         <img src="img/port01.jpg" alt="포트폴리오1" />
//                                     </div>
//                                     <div className="pText">
//                                         <h3>PORTFOLIO HWANG</h3>
//                                         <p>PORTFOLIO</p>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Contents>
//             <Footer />
//         </div>
//     )
// }

export default Portfolio
