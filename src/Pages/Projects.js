import './styles/Project.css'
import '../Components/ProjectBox'
import Footer from '../Components/Footer'
import ProjectBox from '../Components/ProjectBox'
import Weather from '../Images/weather.webp'
import Prototype from '../Images/prototype-porto.png'
import Youtube from '../Images/youtube.webp'
import Todolist from '../Images/todolist.png'
import Follio from '../Images/follio.png'
import Blog from '../Images/cung-blog.png'
import Toba from '../Images/tobatour.png'
import Resume from '../Images/resume.png'

export default function Project(){
    return(
        <div>
            <section id="project-header">
                <h1>Projects</h1>
            </section>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d3d3d3" fill-opacity="1" d="M0,288L24,250.7C48,213,96,139,144,128C192,117,240,171,288,186.7C336,203,384,181,432,170.7C480,160,528,160,576,160C624,160,672,160,720,186.7C768,213,816,267,864,288C912,309,960,299,1008,282.7C1056,267,1104,245,1152,234.7C1200,224,1248,224,1296,202.7C1344,181,1392,139,1416,117.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>

            <section id='project-section'>
                <ProjectBox
                    imgUrl={Weather}
                    altText="weather"
                    title="Weather App API"
                    desc="A simple backend and API project for weather. i use nodejs and express to build this app, and use a free weather API from
                    internet. no styling just yet just pure functionality."
                    proLink="https://cungcailin69.github.io/weather-api/"
                    repoLink="https://github.com/CungCaiLin69/weather-api"
                />
                <ProjectBox
                    imgUrl={Prototype}
                    altText="prototype"
                    title="First Prototype Portfolio Website"
                    desc="My very first portfolio website that i used to practice my HTML, CSS, and Bootstrap skill"
                    proLink="https://reliable-malabi-72b57f.netlify.app"
                    repoLink="https://github.com/CungCaiLin69/portfolio-prototype"
                />
                <ProjectBox
                    imgUrl={Youtube}
                    altText="youtube"
                    title="Youtube Clone"
                    desc="I use this project to practice my CSS display like flex and grid"
                    proLink="https://classy-dasik-a40544.netlify.app"
                    repoLink="https://github.com/CungCaiLin69/youtube-clone"
                />
                <ProjectBox
                    imgUrl={Todolist}
                    altText="todolist"
                    title="To-do list"
                    desc="A project every starter developer recommends, a to-do list built with Javascript DOM to add and cross list"
                    proLink=""
                    repoLink="https://github.com/CungCaiLin69/todolist-app"
                />
                <ProjectBox
                    imgUrl={Follio}
                    altText="follio"
                    title="Follio"
                    desc="A very big project i made for my final assignment for my software engineering class, this app built with MERN stack.
                    the purpose of this app is to upload a portfolio just like other app like 'Drible'. "
                    proLink=""
                    repoLink="https://github.com/CungCaiLin69/Follio"
                />
                <ProjectBox
                    imgUrl={Blog}
                    altText="blog"
                    title="Blog website (with database)"
                    desc="A first project i get my hands on Database, this project simply JavaScript CRUD but i add database to save the CRUD"
                    proLink=""
                    repoLink="https://github.com/CungCaiLin69/blog-with-database"
                />
                <ProjectBox
                    imgUrl={Toba}
                    altText="mobile"
                    title="TobaTour Design (Tourism Mobile App)"
                    desc="A mobile app design i use to practice wireframing and prototyping"
                    proLink="https://www.figma.com/proto/aS1K6hSMVqddUJzBByLdAD/Untitled?page-id=0%3A1&type=design&node-id=3-2&viewport=2%2C201%2C0.16&scaling=scale-down&starting-point-node-id=3%3A2&mode=design"
                    repoLink="https://www.figma.com/file/aS1K6hSMVqddUJzBByLdAD/Untitled?type=design&node-id=0%3A1&mode=design&t=FIEOxyeu5rhARC5C-1"
                />
                <ProjectBox
                    imgUrl={Resume}
                    altText="resume"
                    title="One page Resume"
                    desc="A single page resume website i use to promote myself when i dont't have a personal website"
                    proLink="https://scintillating-puffpuff-2cae2a.netlify.app"
                    repoLink="https://github.com/CungCaiLin69/resume"
                />
            </section>

            <Footer />
        </div>
    )
}