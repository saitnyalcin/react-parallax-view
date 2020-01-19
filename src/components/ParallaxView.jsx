import React from 'react';
import { Parallax, Background } from 'react-parallax';

const ParallaxView = () => {
  return (
    <div style={{ margin: '1em' }}>
      <div>
        {/* -----basic config-----*/}
        <Parallax
          blur={{ min: -20, max: 40 }}
          bgImage={require('../images/halifaxTown.jpg')}
          bgImageAlt="the cat"
          strength={200}
        >
          <div style={{ color: 'white' }}>
            <h1>
              {/* Put some text content here - even an empty div with fixed
              dimensions to have a height for the parallax. */}
            </h1>
          </div>

          <div style={{ height: '1000px' }} />
        </Parallax>

        {/* -----custom background element-----*/}
        <Parallax strength={300}>
          <div style={{ height: '10em' }}>
            <h1 style={{ fontSize: '10em' }}>Think Different</h1>
          </div>
          <Background className="custom-bg">
            <img
              src="https://cdn.vox-cdn.com/thumbor/WqMY2QINJvS9H0tqdrFBXsg2ghk=/0x86:706x557/1200x800/filters:focal(0x86:706x557)/cdn.vox-cdn.com/imported_assets/847184/stevejobs.png"
              alt="fill murray"
            />
          </Background>
        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
          blur={{ min: -20, max: 40 }}
          bgImage={require('../images/lightHouse.jpg')}
          bgImageAlt="the dog"
          strength={-200}
        >
          <div style={{ color: 'white' }}>
            {/* <h1>Blur transition from min to max</h1>{' '} */}
          </div>
          <div style={{ height: '1000px' }} />
        </Parallax>

        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
          blur={{ min: -15, max: 40 }}
          bgImage={require('../images/citadelHill.jpg')}
          strength={400}
          renderLayer={() => (
            <div
              style={{
                height: '1000px',
                left: '50%',
                top: '50%'
              }}
            />
          )}
        ></Parallax>
      </div>
    </div>
  );
};

export default ParallaxView;
