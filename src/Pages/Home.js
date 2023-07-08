import './styles/Home.css';
import Arrow from '../Images/arrow.png'
import Card from '../Components/Card'
import FE from '../Images/frontend.png'
import BE from '../Images/backend.png'
import DB from '../Images/database.png'
import Figma from '../Images/figma.png'
import Sendy1 from '../Images/sendybnw.png'
import Sendy2 from '../Images/sendydi.png'
import Footer from '../Components/Footer'

export default function Home(){
    return(
        <div>
            <section id='header'>
                <div className="wrapper">
                    <div className='name'>Hello I'm Sendy,</div>
                    <div className='bottom-text'>
                        <div className="static-txt">I'm a</div>
                        <ul className="dynamic-txts">
                            <li><span>Web Developer</span></li>
                            <li><span>UI/UX Designer</span></li>
                            <li><span>Mobile Developer</span></li>
                            <li><span>Freelancer</span></li>
                        </ul>
                    </div>
                </div>

                <img className='person-header' src={Sendy1} alt="" />
                <img className='arrow' src={Arrow} alt='arrow' />
            </section>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d3d3d3" fill-opacity="1" d="M0,288L24,250.7C48,213,96,139,144,128C192,117,240,171,288,186.7C336,203,384,181,432,170.7C480,160,528,160,576,160C624,160,672,160,720,186.7C768,213,816,267,864,288C912,309,960,299,1008,282.7C1056,267,1104,245,1152,234.7C1200,224,1248,224,1296,202.7C1344,181,1392,139,1416,117.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>

            <section id='biodata'>
                <h1>Who Am I?</h1>
                <div className='bio-desc'>
                    <img alt='me' className='person' src={Sendy2} />
                    <p className='personal-desc'>
                         My name is Sendy Adriansyah, and I am a self-taught web developer, a freelancer, and a dedicated computer science student. With a passion for coding and a drive for continuous learning, I have honed my skills in web development through self-study and hands-on experience.<br /><br />
                         Currently pursuing a degree in computer science, I am committed to expanding my knowledge and staying up-to-date with the latest industry trends and technologies. Through my coursework, I am gaining a strong foundation in programming principles, algorithms, and software development methodologies, which complements my practical experience as a web developer.<br /><br />
                         Looking ahead, my career goal is to further grow as a web developer and expand my expertise in areas such as full-stack development, mobile app development, and user experience design. I aspire to contribute to impactful projects, collaborate with talented professionals, and make a meaningful impact in the digital realm.
                    </p>
                </div>
            </section>

            <section id='skills'>
            <h1 className='skill-title'>My Skills</h1>
                <div className='skill-card'>
                    <Card
                        imgUrl={FE}
                        altText="front-end"
                        title="Front End"
                        subTitle="Front End"
                        desc="For Front End i mainly using React with JavaScript and TypeScript.
                        have an understanding of React client-side with React-Router and reusable UI component
                        also fetching external APIs and backend with Axios. With Bootstrap as my main CSS framework,
                        i strive for beautiful UI
                        "
                    />
                    <Card
                        imgUrl={BE}
                        altText="back-end"
                        title="Back End"
                        subTitle="Back End"
                        desc="Since having the skill of javascript, i mainly use NodeJS and express for my
                        backend development. proficiency in building RESTful API and web services also with JWT.
                        sometimes i also made an app using Laravel and Java Spring Boot, usually i used them for client
                        requirement, expanding my skill or job requirements"
                    />
                    <Card
                        imgUrl={DB}
                        altText="database"
                        title="Database"
                        subTitle="Database"
                        desc="What's a backend without a database? for database i mainly use MongoDB and MySQL
                        a separate SQL and NoSQL databases for variety of functionality, usually i pair NodeJS with MongoDB, 
                        PostgreSQL with Java Spring Boot and MySQL with Laravel"
                    />
                    <Card
                        imgUrl={Figma}
                        altText="Design"
                        title="UI Design"
                        subTitle="UI Design"
                        desc="I made a web, mobile app prototype using Figma. having a skill in creating beautiful UI
                        design and protyping like wireframing"
                    />
                </div>
            </section>

            <section id='services'>
                <h1 className='service-title'>My Service</h1>
                <div className='service-body'>
                    <p>
                        I provide top-notch freelancing services as a skilled web developer and designer. Specializing 
                        in creating captivating websites, I offer customized solutions to clients seeking an impressive online presence. 
                        With expertise in both front-end and back-end development, I bring your ideas to life and deliver visually stunning 
                        and functional websites. Let's collaborate to make your digital vision a reality.
                    </p>
                    <div className='service-contact'>
                        <h1>Contact me if you need my service</h1>
                        <p>08111749544</p>
                        <hr />
                        <a target='_blank' href='https://www.linkedin.com/in/muhammad-sendy-996802216/' className='freelance-link'><button class="sosmed"><i class="fa-brands fa-linkedin"></i>Linkedin</button></a>
                        <a target='_blank' href='mailto:sendy.adriansyah17@gmail.com' className='freelance-link'><button class="sosmed email"><i class="fa-solid fa-envelope"></i>Email</button></a>
                        <a target='_blank' href='https://api.whatsapp.com/send?phone=08111749544' className='freelance-link'><button class="sosmed wa"><i class="fa-brands fa-whatsapp"></i>Whatsapp</button></a>
                    </div>
                    
                </div>
            </section>

            <Footer />
      </div>
    )
}