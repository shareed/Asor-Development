import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


import { menuItems } from './menuItems';


import '../../sass/hamburgerMenu.scss';



function HamburgerMenu() {
   const [menuOpen, setMenuOpen] = useState(false)


   const handleClick = () => {
      setMenuOpen(!menuOpen)
      console.log("state:", menuOpen);
   }
     return (
        <>
            <FontAwesomeIcon className = 'hooks-menu-button' onClick = { handleClick } icon={faBars} />
               { menuItems.length && (
                  <nav className = {`hooks-menu-nav ${menuOpen ? 'show': ' '}`}>
                  <div className = 'hooks-menu-close-button' onClick = { handleClick }>
                           <FontAwesomeIcon icon={faTimes} />
                  </div>
                     <ul className = 'hooks-menu-items'>
                           {menuItems.map(item => (
                              <li className = 'hooks-menu-list-item' key = {item.label}>
                                 <a href = {item.url} className = 'hooks-menu-link' >
                                    {item.label}
                                 </a>
                              </li>
                              ))}
                     </ul>
                     </nav>

               
            ) }
            {/* </div> */}
        </>
     )
  }
export default HamburgerMenu;