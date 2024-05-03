import './Navbar.css'

export default function Navbar(){
  return(
    <div className="Nav">
      <a href="/">
      <img src="https://nscg-llc.com/wp-content/uploads/2020/12/North-South-Consulting-Group-232x134.jpg" alt="" />
      </a>
      <ul>
        <li>
          <a href="/About">About Us</a>
        </li>
        <li>
        <a href="/Careers">Careers</a>
        </li>
        <li>
        <a href="/Expertise">Expertise</a>
        </li>
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_15_152)">
          <rect width="24" height="24" fill="white"/>
          <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"/>
          <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"/>
          </g>
          <defs>
          <clipPath id="clip0_15_152">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </ul>
    </div>
  )
}