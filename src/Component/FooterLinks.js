import React from 'react'
import styles from '../CSS/footer.module.css';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function FooterLinks() {
    return (
        <div className={styles.links}>
            <Button component={Link}  to='/aboutus' > 
                About Us
            </Button>
            <Button component={Link}  to='/contactus' > 
                Contact Us
            </Button>
            <Button component={Link}  to='/aboutus' > 
                Privacy Policy
            </Button>
        </div>
    )
}

export default FooterLinks
