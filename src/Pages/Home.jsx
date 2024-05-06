import './Home.css'
import { Link } from 'react-router-dom'

export default function Home(){
  return(
    <div className="home">

      <div className="top-content-container">
        <div className="potential-jobs-container">
          <p>Potential Job Seekers</p>
          <h2>Explore Current Opportunites</h2>
          <a href="https://www.indeed.com/cmp/North-South-Consulting-Group-1/jobs?clearPrefilter=1#cmp-skip-header-desktop" target='blank'>
            <button>View Open Positions</button>
          </a>
        </div>
        <div className="potential-partners-container">
          <p>Potential Partners</p>
          <h2>Lets's Work Together</h2>
          <Link to='/Contact'>
            <button>Contact Us</button>
          </Link>
          
        </div>
      </div>

      <div className="expectations-container">
        <h2>North South Consulting Group, LLC is ready to meet your needs and 
          exceed your expectations.</h2>
        <p>NSCG is a full-service Government contracting firm, with experience 
          and ongoing past performance in human resources, recruiting, marketing/advertising, social media, 
          contact center operations, interpreter services, sign-language interpreter services and information 
          technology (IT) support.</p>
          <p>We provide high quality solutions and personnel support to every project we manage.</p>
          <p>NSCG's corporate leadership is comprised of Combat Military Veterans with a passion for serving others. This is exemplified by our innovative staffing and management model, paired with our corporate policy of 'people first.'</p>
      </div>

      <div className="column-container">
        <div className="row-1">
          <h2>Miltary Human Resources</h2>
          <p>Experience and ongoing past performance supporting Department of Defense Human Resources provides customers with a deep understanding of the skills, knowledge and abilities required to support HR initiatives across all services.  Additionally, our knowledge of complex programs such as Military Casualty, Combat Related Special Compensation, Traumatic Service Group Life Insurance, Physical Disability Agency, Records Management, Awards and Decorations and Army Continuing Education ensure that staffing and management solutions are aligned with organizational needs.</p>
        </div>
        <div className="row-2">
          <h2>Contact Center, Social Media, Recruiting and Marketing</h2>
          <p>As a collective team, the NSCG corporate staff has led the way in integrated contact center solution development, implementation and management for DoD customers over the last 15 years.  Additionally, our social media outreach and engagement, recruiting and marketing efforts provide holistic, customizable plans and ongoing project support for a variety of customers. Our solutions are flexible, dynamic and monitored in real-time.  NSCG's experience and ongoing past performance in both Government and civilian sectors includes but is not limited to a variety of Department of Defense customers, the Institute for Veterans and Military Families, Salesforce, HireVue, Facebook/Instagram and SnapChat.  We understand the importance of messaging and blending organic and paid approaches, content curation/development, graphic design and multi-faceted engagement into a winning strategy that produces tangible results.</p>
        </div>
        <div className="row-3">
          <h2>IT Support and Consulting</h2>
          <p>With extensive senior leadership experience in the Department of Defense, the NSCG team has an in-depth knowledge and understanding of current DoD systems.  This knowledge is applied to provide strategic and operational support to a variety of clients (both Government and civilian) as business process re engineering efforts, cloud migration and resource evolution become a necessity.  Our expertise ranges from relationship building, solution development, use case development, and use case demonstration to project build, integration, launch and management.  We have a passion for bringing people together to provide relevant solutions that make an impact.</p>
        </div>
      </div>

      <div className="SBA">
        <p>SBA Certified, Economically Disadvantaged, Woman-Owned, Service-Disabled Veteran-Owned Small Business</p>
      </div>

      <div className="bottom-container">
        <div className="careers">
          <h2>Work With NSCG</h2>
          <Link to='/Careers'>
            <button>Careers</button>
          </Link>
          
        </div>
        <div className="contact">
          <h2>Doing Business With NSCG</h2>
          <Link to='/Contact'>
            <button>Contact Us</button>
          </Link>
          
        </div>
      </div>

 
    </div>
  )
}