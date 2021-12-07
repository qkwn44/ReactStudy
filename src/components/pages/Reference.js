import React from 'react'
import Header from '../include/Header'
import Contents from '../include/Contents'
import Footer from '../include/Footer'
import WrapTitle from '../include/WrapTitle'
import Loding from '../include/Loding'
import ReferInfo from '../info/ReferInfo'
import axios from 'axios'
import { gsap } from 'gsap'

class Reference extends React.Component {
  //변수, 상수, 배열, 객체 -> 데이터 저장소, state (리액트에서 추가된 저장소)

  state = {
    isLoading: true,
    refers: [],
  }
  getStart = () => {
    gsap.set('#header', { opacity: 0, top: '-100%' })
    gsap.set('#footer', { opacity: 0, bottom: '-100%' })

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
  }
  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      'https://webstoryboy.github.io/react5001/src/assets/json/refer.json',
    )
    this.setState({ htmlRefer, isLoading: false })
    console.log(htmlRefer)
  }

  componentDidMount() {
    setTimeout(() => {
      this.getStart()
      this.getRefer()
    }, 2000)
  }

  //출력함수
  render() {
    const { isLoading, htmlRefer } = this.state
    //htmlRefer 받아오기
    return (
      <div>
        {isLoading ? (
          <Loding />
        ) : (
          <div>
            <Header />
            <Contents>
              {isLoading ? '로딩중...' : '준비되었습니다.'}
              <section id="referCont">
                <div className="container">
                  <WrapTitle text={['reference', 'book']} />
                  <div className="refer__cont">
                    <div className="table">
                      <h3>HTML</h3>
                      <ul>
                        {htmlRefer.map((refer) => (
                          <ReferInfo
                            key={refer.id}
                            id={refer.id}
                            title={refer.title}
                            desc1={refer.desc1}
                            desc2={refer.desc2}
                            element={refer.element}
                            tag={refer.tag}
                            version={refer.version}
                            view={refer.view}
                            use={refer.use}
                            definition={refer.definition}
                          /> //refer.json에서 필요한 데이터 전달
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Contents>
            <Footer />
          </div>
        )}
      </div>
      // <div>
      //     <Header />
      //     <Contents>
      //         {isLoading ? "로딩중..." : "준비되었습니다."}
      //         <section id="referCont">
      //             <div className="container">
      //                 <WrapTitle text={["reference","book"]}/>
      //                 <div className="refer__cont">
      //                     {isLoading ? "로딩중…" : "준비되었습니다. "}
      //                 </div>
      //             </div>
      //         </section>
      //     </Contents>
      //     <Footer />
      // </div>
    )
  }
}

export default Reference
