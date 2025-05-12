// // Write your JS code here
// import './index.css'
// import {Link} from 'react-router-dom'

// const Header = () => (
//   <div className="bg-container">
//     <nav className="nav-header">
//       <div className="logo-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
//           alt="wave"
//           className="logo"
//         />
//         <h1 className="header">Wave</h1>
//       </div>
//     </nav>

//     <ul className="nav-menu">
//       <li>
//         <Link className="nav-link" to="/">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link className="nav-link" to="/about">
//           About
//         </Link>
//       </li>
//       <li>
//         <Link className="nav-link" to="/contact">
//           Contact
//         </Link>
//       </li>
//     </ul>
//   </div>
// )

// export default Header

// Header/index.js
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logo-title">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
