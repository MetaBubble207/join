import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import FullScroll from 'react-full-scroll';
import ReactPageScroller from 'react-page-scroller';
import * as THREE from 'three'
import p5 from 'p5'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.png'
import BIRDS from 'vanta/dist/vanta.birds.min'
// @ts-ignore
import TOPOLOGY from 'vanta/dist/vanta.topology.min'
// @ts-ignore
import GOLOBE from 'vanta/dist/vanta.golobe.min'
// @ts-ignore
import HALO from 'vanta/dist/vanta.halo.min'
const MyComponent = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TOPOLOGY({
        el: myRef.current,
        // THREE: THREE,
        p5: p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x82f0ff,
        backgroundColor: 0x0
      }))
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className="App" ref={myRef}>
    <div className='center-content'>
      <p className='logo'>
        <span id="n">M</span>
        <span id="e">E</span>
        <span id="o">T</span>
        <span id="n2">A</span>
        <span id="n2">BUBBLE</span>
      </p>
      <div className='introduce'>
        An organization to expore the world
      </div>
      <div className='github-contact' onClick={() => { window.location.href = 'https://github.com/MetaBubble207' }}>
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className='githublogo'>
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span> See us in Github</span>
      </div>
    </div>
  </div>
}
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactPageScroller>
        <MyComponent></MyComponent>

        {/* <div className="App">
            <div className='center-content'>
              <p className='logo'>
                <span id="n">M</span>
                <span id="e">E</span>
                <span id="o">T</span>
                <span id="n2">A</span>
                <span id="n2">BUBBLE</span>
              </p>
              <div className='introduce'>
                An organization to expore the world
              </div>
              <div className='github-contact' onClick={() => { window.location.href = 'https://github.com/MetaBubble207' }}>
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className='githublogo'>
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
               <span> See us in Github</span>
              </div>
            </div>
          </div> */}
        <div className="bigcontainer">
          <h1>Main Contributors</h1>
          <h3 style={{ color: 'black' }}>introduce of that page</h3>
          <div className="container">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img className="role1" src={img1} />
                  <h3 style={{ color: 'black' }}>

                    <div className='github-contact-card'>
                      <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className='githublogo-black'>
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                      LinkingChain
                    </div>
                  </h3>

                </div>

              </div>
              <div className="face face2" style={{ background: 'white' }}>
                <div className="content">
                  {/* <h3 style={{ color: 'black' }}>LinkingChain</h3> */}

                  {/* <span>Tong Gu and Ren, the hero in the light novel the realm of swords and swords and its derivative works. [1] At the beginning of the story, he was 14 years old when he began to play Sao. Two years later, this story (here refers to after he left SAO) was 16 years old. A serious online game player worthy of the name. Have superior reflex nerve and insight.</p> */}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img className="role1" src={img2} />
                  <h3 style={{ color: 'black' }}>
                    <div className='github-contact-card'>
                      <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className='githublogo-black'>
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                      黄希
                    </div>
                  </h3>
                </div>
              </div>
              <div className="face face2" style={{ background: 'white' }} >
                <div className="content">
                  <h3>黄希</h3>
                  {/* <span>Tong Gu and Ren, the hero in the light novel the realm of swords and swords and its derivative works. [1] At the beginning of the story, he was 14 years old when he began to play Sao. Two years later, this story (here refers to after he left SAO) was 16 years old. A serious online game player worthy of the name. Have superior reflex nerve and insight.</p> */}

                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img className="role1" src={img3} />
                  <h3 style={{ color: 'black' }}>
                    <div className='github-contact-card'>
                      <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className='githublogo-black'>
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                      麦智烨Plini
                    </div>
                  </h3>
                </div>
              </div>
              <div className="face face2" style={{ background: 'white' }} >
                <div className="content">
                  <h3>黄希</h3>
                  {/* <span>Tong Gu and Ren, the hero in the light novel the realm of swords and swords and its derivative works. [1] At the beginning of the story, he was 14 years old when he began to play Sao. Two years later, this story (here refers to after he left SAO) was 16 years old. A serious online game player worthy of the name. Have superior reflex nerve and insight.</p> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactPageScroller>
    </div>

  );
}

export default App;
