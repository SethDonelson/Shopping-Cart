import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import classes from  './header.module.scss'  //import styling



export const Header: FunctionComponent = () => {
    



     return (
    <header className={classes.header}>
      <div>

        <span>this is a test for the header</span>

        <Link to="/">
          <img src={logo} className={classes.logo} alt="Shopping Cart Application" />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
    )
}