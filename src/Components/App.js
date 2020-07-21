import React, { useRef, useEffect } from 'react';

import './App.css';

function App() {


  const background1 = useRef(null)
  const background2 = useRef(null)
  const foreground1 = useRef(null)
  const foreground2 = useRef(null)
  const redQueen_alice_sprite = useRef(null)




  useEffect(() => {

    const sceneryFrames = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ];

    const sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity
    };

    const sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity
    };

    const background1Movement = background1.current.animate(sceneryFrames, sceneryTimingBackground
    )

    background1Movement.currentTime = background1Movement.effect.getTiming().duration / 2;

    const background2Movement = background2.current.animate(sceneryFrames, sceneryTimingBackground)

    const foreground1Movement = foreground1.current.animate(sceneryFrames, sceneryTimingForeground)
    foreground1Movement.currentTime = foreground1Movement.effect.getTiming().duration / 2;
    const foreground2Movement = foreground2.current.animate(sceneryFrames, sceneryTimingForeground)

    const spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }
    ];
    const redQueen_alice = redQueen_alice_sprite.current.animate(
      spriteFrames, {
      easing: 'steps(7,end)',
      direction: 'reverse',
      duration: 600,
      playbackRate: 1,
      iterations: Infinity

    }
    )


    const sceneries = [foreground1Movement, foreground2Movement, background2Movement, background1Movement ]

const adjustBackgroundPlayback = ()=> {
if (redQueen_alice.playbackRate < .8){
  sceneries.forEach((anim)=>{
    anim.playbackRate = redQueen_alice.playbackRate/2 * -1;
  }

  )
} else if (redQueen_alice.playbackRate > 1.2){
  sceneries.forEach((anim)=>{
    anim.playbackRate = redQueen_alice.playbackRate/2;

  }

  )
} else {
  sceneries.forEach((anim)=>{
    anim.playbackRate = 0

  }
)}}

    adjustBackgroundPlayback();


    setInterval (()=>{
      if (redQueen_alice.playbackRate > .4 ){
        redQueen_alice.playbackRate *= .9;
      }
      adjustBackgroundPlayback();
    }, 3000)


    const goFaster = ()=>{
      /* But they can be speed up by giving the screen a click or a tap. */
      redQueen_alice.playbackRate *= 1.1;
      adjustBackgroundPlayback();

    }

window.addEventListener('click', goFaster)
window.addEventListener('touchstart', goFaster)
  
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <div className="sky"></div>

        <div className="earth">
          <div id="red-queen_and_alice">
            <img id="red-queen_and_alice_sprite" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"} srcset={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"} alt={"Alice and the Red Queen running to stay in place."} ref={redQueen_alice_sprite} />
          </div>
        </div>

        <div className="scenery" id="foreground1" ref={foreground1} >
          <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
        </div>

        <div className="scenery" id="foreground2" ref={foreground2} >
          <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
          <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
        </div>

        <div className="scenery" id="background1" ref={background1}>
          <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
          <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
          <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
        </div>

        <div className="scenery" id="background2" ref={background2} >
          <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

          <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
          <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
        </div>


      </div>
    </div>
  );
}

export default App;
