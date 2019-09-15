import React from 'react'
import {
  MDBContainer, MDBRow, MDBCol
} from 'mdbreact'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const framework = []
const lang = []
const frameworks = importAll(require.context('../../Images/framework/', false, /\.(png)$/))
for (var i = 0; i < frameworks[0].length; i++) {
  framework.push({
    name: frameworks[1][i].substr(2).slice(0, -4),
    img: frameworks[0][i]
  })
}

const Langs = importAll(require.context('../../Images/Lang/', false, /\.(png)$/))
for (i = 0; i < Langs[0].length; i++) {
  lang.push({
    name: Langs[1][i].substr(2).slice(0, -4),
    img: Langs[0][i]
  })
}

export default class Skill extends React.Component {
  render () {
    const settings = {
      speed: 500,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <section className='text-center my-5' id='skill'>
        <MDBContainer>
          <h1 className='h1-responsive font-weight-bold my-5'>
            My Skills
          </h1>
          <MDBRow>
            <MDBCol>
              <h2> Frameworks</h2>
              <Slider {...settings}>
                {framework.map((i) =>
                  <React.Fragment key={i.name}>
                    <div className='SliderImgDiv'>
                      <img className='SliderImg' src={i.img} alt={i.name} />
                    </div>
                    <p>{i.name}</p>
                  </React.Fragment>
                )}
              </Slider>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol>
              <h2>Languages</h2>
              <Slider {...settings}>
                {lang.map((i) =>
                  <React.Fragment key={i.name}>
                    <div className='SliderImgDiv'>
                      <img className='SliderImg' src={i.img} alt={i.name} />
                    </div>
                    <p>{i.name}</p>
                  </React.Fragment>
                )}
              </Slider>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </section>

    )
  }
}

function importAll (r) {
  return [r.keys().map(r), r.keys()]
}
