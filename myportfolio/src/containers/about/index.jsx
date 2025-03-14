import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiApple ,  DiAndroid } from "react-icons/di";
import { FaDev , FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name:",
    value: "Zeenat Shekh",
  },
  {
    label: "Age:",
    value: "19",
  },
  {
    label: "Address:",
    value: "655/176 adil nagar, lko",
  },
  {
    label: "Email:",
    value: "zeenatshekh794@gmail.com",
  },
  {
    label: "Contact:",
    value: "+91 7068592948",
  },
];

const jobSummary = "Currently pursuing my Bachelors in technology from Maharishi University Of Information Technology, LKO in Computer Science and Engineering..Seasoned and independent front end developer passionate about new trends in tech field."
const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3 className='personalInformationHeaderText'>Personal Information
            </h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
        <Animate play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(700px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
          <div className='about__content__servicesWrapper__innerContent'>
          <div>
            <FaDev size={60} color='var(--yellow-theme-main-color)'/>
          </div>
          <div>
          <DiAndroid size={60} color='var(--yellow-theme-main-color)'/>
          </div>
          <div>
          <FaDatabase size={60} color='var(--yellow-theme-main-color)'/>
          </div> 
          <div>
          <DiApple size={60} color='var(--yellow-theme-main-color)'/>
          </div>
          </div>
          </Animate>
          
        </div>
      </div>
    </section>
  )
}

export default About;
