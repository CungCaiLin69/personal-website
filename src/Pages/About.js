import React from "react";
import './styles/About.css'
import Footer from '../Components/Footer'
import SMA from '../Images/Lpolahraga-1024x500.jpg'
import Binus from '../Images/binus.jpeg'

export default function About(){
    return(
        <div>
            <section id="about-header">
                <h1>About Me</h1>
            </section>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d3d3d3" fill-opacity="1" d="M0,288L24,250.7C48,213,96,139,144,128C192,117,240,171,288,186.7C336,203,384,181,432,170.7C480,160,528,160,576,160C624,160,672,160,720,186.7C768,213,816,267,864,288C912,309,960,299,1008,282.7C1056,267,1104,245,1152,234.7C1200,224,1248,224,1296,202.7C1344,181,1392,139,1416,117.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>

            <section id='timeline'>
              <div class="timeline-wrapper">
                <div class="center-line">
                  <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
                </div>
                <div class="row row-1">
                  <section className='row-card'>
                    <i class="icon fas fa-play"></i>
                    <div class="row-details">
                      <span class="row-title">Baby's first step</span>
                      <span>2020</span>
                    </div>
                    <p>
                      I was in my final year of highschool and during the heavy pandemic days of Covid-19,
                      i have to start figure what major i should take in college. And thus, i made a decision
                      to take Computer Science and start learning the basic / fundamentals of it. Also its career path
                    </p>
                  </section>
                </div>
                <div class="row row-2">
                  <section className='row-card'>
                    <i class="icon fas fa-code"></i>
                    <div class="row-details">
                      <span class="row-title">First line of code</span>
                      <span>2020</span>
                    </div>
                    <p>
                      My first language of choice were Python, C, and HTML. why? Python is pretty famous even
                      my days before computer science i've already heard of it, C because lot of people of internet
                      says it's the best language to start as a programmer. and HTML a fundamental language to build website
                    </p>
                  </section>
                </div>
                <div class="row row-1">
                  <section className='row-card'>
                    <i class="icon fas fa-gears"></i>
                    <div class="row-details">
                      <span class="row-title">My first programming logic</span>
                      <span>2020</span>
                    </div>
                    <p>
                      I have tasted my very first programming logic and i can tell i'm pretty confused and cannot think,
                      same thing goes for my first HTML Tag. The only thing i can make is just an h1 and its kind.
                    </p>
                  </section>
                </div>
                <div class="row row-2">
                  <section className='row-card'>
                    <i class="icon fas fa-graduation-cap"></i>
                    <div class="row-details">
                      <span class="row-title">Graduation</span>
                      <span>2021</span>
                    </div>
                    <p>
                     The year 2021 and i graduated from my High School with a pretty satisfying result. And it's the day
                     i partaking in university entrance exam
                    </p>
                    <div class="bottom">
                      <img src={SMA} alt="sekolah" />
                    </div>
                  </section>
                </div>
                <div class="row row-1">
                  <section className='row-card'>
                    <i class="icon fas fa-laptop-code"></i>
                    <div class="row-details">
                      <span class="row-title">First day as college student</span>
                      <span>2021</span>
                    </div>
                    <p>
                      I join Bina Nusantara (BINUS) University as my college, as i heard and news about its school of computer
                      science are top notch
                    </p>
                    <div class="bottom">
                    <img src={Binus} alt="kampus" />
                    </div>
                  </section>
                </div>
                <div class="row row-2">
                  <section className='row-card'>
                    <i class="icon fas fa-person"></i>
                    <div class="row-details">
                      <span class="row-title">Life goes on</span>
                      <span>2022 - 2023</span>
                    </div>
                    <p>
                      As i progress as a programmer and computer science student, i learn a lot stuffs i don't know and
                      improve things i know. something like Data Structure and Algorithm, Object Oriented Programming, 
                      Database Technology, Code Reengineering, Agile Software Development, etc.
                      From only knowing to make an h1, until making a full software of React
                    </p>
                  </section>
                </div>
            </div>
            </section>

          <Footer />
      </div>
    )
}