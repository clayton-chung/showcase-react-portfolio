import './index.scss'
import ArduinoClaw from '../../assets/images/arduino_claw.gif'
import ArduinoTest from '../../assets/images/arduino_test.gif'
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About me
                </h1>
                <p>
                    I am a second year Computer Engineering student studying at UBC,
                    looking for an internship role in all areas related to software development/engineering.
                </p>
                <p>
                    Curious in all matters technology,
                    the languages I am most proficient in are C and Java,
                    however I am always working on improving other languages,
                    such as Javascript and CSS which is what this website is built on :)
                </p>
                <p>
                    Here is an autonomous claw that I had the opportunity to program in my first year.
                    It was done in Arduino, and the attached sonar detects when to open or close the claw.
                </p>
            </div>
            <div className="arduino-claw">
                <img src={ArduinoClaw} alt="claw" width="20%" />
                <img src={ArduinoTest} alt="test" width="20%"/>
            </div>
        </div>
        <Loader type="ball-clip-rotate" />
        </>
    )
}

export default About