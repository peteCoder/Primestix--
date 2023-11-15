import React from 'react'
import './accordion.css'

const FooterAccordion = () => {
  return (
<div>
    <ul className='accordion'>
        <li>
            <input type="radio" name='accordion' id="first" defaultChecked />
            <label htmlFor="first"> Products </label>
            <div className='content'>
                <p>
                  lroerfsfvainrfivbdnfjsbvdfjbvdfjkbvdfjbvdkfvbdfhvbdfjbvdfkvdbfvdbfvjdfbvkfbvkfvbervjkerfjkerfkerfwkefhefwberfbwhefkwefbefwehfbwhefkwefwebkf
                </p>
            </div>
        </li>
    </ul>
</div>

  )
}

export default FooterAccordion