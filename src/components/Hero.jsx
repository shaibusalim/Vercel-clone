import React from 'react'
import "../styles/Hero.css"
import Header from './Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faCircleArrowUp, faSortUp, faRotateLeft, faGlobe, faComment } from "@fortawesome/free-solid-svg-icons";
import VercelLogo from './VercelLogo';
import Footer from './Footer';



function Hero() {
  return (
    <div className='main'>
      <Header/>

<div className='hero-container'>
        <div className='hero-content'>
            <section className='first-section'>
            {Array.from({ length: 12 * 8 }).map((_, index) => (
             <div key={index} className="grid-item">
              </div>
               ))}
               <div className='first-section-content'>
                <h1>Your complete platform for the web.</h1>
                <p>Vercel provides the developer tools and cloud infrastructure<br/> to build, scale, and secure a faster, more personalized web.</p>
                <div className='first-section-buttons'>
                  <button className='button1'><FontAwesomeIcon icon={faSortUp} size='2x' style={{marginTop:'15px'}}/>Start Deploying</button>
                  <button className='button2'>Get a Demo</button>
                </div>
               </div>
               <div className='logo'>
                    <VercelLogo/>
               </div>
              
            </section>
            <section className='second-section'>
                  <div>
                        <p>Develop with your favorite tools &nbsp;{'>_'}<br/>
                        Launch globally, instantly&nbsp; <FontAwesomeIcon icon={faGlobe} style={{fontSize: '2rem'}} /> &nbsp;Keeping pushing</p>
                  </div>
            </section>
            <section className='third-section'>
                <div className='third-section-content'>
                  <h2>{'>_'} Git-conntect Deploys</h2>
                  <div className='stack'>
                  <strong>From localhost to https, in seconds.</strong><p>Deploy from Git or your CLI</p>
                  </div>
                 

                  <div className='box1'>
                    <div>...</div>
                    <p>
                    git push▲ ~ vercel-site/
                    </p>
                    <p>Enumerating objects: 1, done.</p>
                    <p>
                      Counting objects: 100% (1/1), done.
                    </p>
                    <p>
                      Writing objects:100% (1/1), 72 bytes, done.
                    </p>
                    <p>
                      Total 1 (delta 0), reused 0 (delta 0).
                    </p>
                    <p>
                      To github.com:vercel/vercel-site.git
                    </p>
                    <p>21326a9...8</p>
                  </div>
                  <div className='box2'>
                      <div className='box2-header'>
                          <div>...</div>
                          <div>Vercel.com</div>
                      </div>
                      <div className='box2-content' style={{ fontFamily: "'Poppins', sans-serif", fontSize: "24px" }}>
                          What will you ship?
                      </div>
                  </div>
                </div>
                <div className='third-section-content' >
                <h2><FontAwesomeIcon icon={faComment}  /> &nbsp;Collaborative pre-production</h2>
                  <div className='stack'>
                  <strong>Every deploy is remarkable.</strong><p>Chat with your team on real, porduction-grade UI, not just designs.</p>
                  </div>

                  <div className='box3'>
                     <div className='chat1'>
                        Swappped out the button for some variants we needed.
                     </div>
                     <div className='chat2'>
                        <div className='icon'>
                            <p>Pranathi</p>
                            <FontAwesomeIcon icon={faLocationArrow}  color="#007bff" className='arrow' />
                        </div>
                        <div className='txt'>
                            How about this instead?
                        </div>
                     </div>
                     <div className='chat3'>
                      <div className='txt'>
                          I like it. Does this work with the brand tweaks@mamuso?
                      </div>
                      <div className='icon'>
                      <FontAwesomeIcon icon={faLocationArrow}  color="#ee2929" className='arrow'
                      
                      />
                        <p>Rauno</p>

                      </div>

                     </div>
                     <div className='chat4'>
                          <div>
                            This looks great!
                            <FontAwesomeIcon icon={faCircleArrowUp} 
                              style={{fontSize:'1.7rem'}}
                            />
                          </div>
                          <FontAwesomeIcon icon={faLocationArrow}  color="#ee2929" className='arrow'/>
                     </div>
                  </div>
                </div>
            </section>
            <section className='forth-section'>
                <h2>Frontend Observability</h2>
                <strong style={{fontSize: '1.6rem'}}>
                  Privacy-friendly, lightweightAnalytics.
                </strong>
                <p>Upgrade your post-lauch workflow with actionable, real-time insights.</p>
                <div className='chart'>
                    
                </div>
            </section>
            <section className='fifth-section'>
                <div className='box1 f-card'>
                    <h2><FontAwesomeIcon icon={faRotateLeft} /> Instant Rollbacks</h2>

                    <strong>Go ahead, deploy on Friday.</strong><p> Instantly rollback to a working deployment.</p>

                    <div className='card'>
                        <span>vercel-site/jvjb4ynna</span>
                        <span>ba5f55f Update bento box design</span>
                    </div>
                </div>
                <div className='box2 f-card'>
                  <h2>Conformance</h2>
                  <strong style={{fontSize: '24px'}}>Move fast, dont break things.</strong><p> Keep quality high while maintaining velocity with Enterprise Monorepos.</p>

                  <div className='card'>
                    <div className='sp'>
                      <h3>Conformance</h3>
                        <div><span>Excellent</span><label>9.5</label></div>
                        <div><span>Total Issues</span><label>34</label></div>
                        <div><span>Major Issues</span><label>12</label></div>
                    </div>
                    <div className='sp'>
                        <h3>Code Owners</h3>
                        <div><span>@vercel/design</span></div>
                        <div><span>@vercel/eng</span></div>
                        <div><span>@vercel/marketing</span></div>
                    </div>

                  </div>
                </div>
            </section>
            <section className='sixth-section'>
                <div className='sixth-section-content'>
                  Scale your &nbsp;<div>Enterprise</div> &nbsp;  without compromising &nbsp; <div>Security</div>
                </div>
            </section>
            <section className='last-section'>
                <div className='last-section-content'>
                  <div className='box1'>
                   <strong>Ready to deploy?</strong> Start building with a free account.
                   <p>Speak to an expert from your <span>Pro</span> or <span>Enterperise </span>needs</p>

                   <div className='buttons'>
                        <button className='button1'>Start Deploying</button>
                        <button className='button2'>Talk to an Expert</button>
                   </div>
                  </div>
                </div>
            </section>
       
        </div>
       

    </div>
          
        <div className='footer'>
        <Footer/>
        </div>
  
    </div>
   
  )
}

export default Hero