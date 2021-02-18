import React from 'react'
import FooterIcons from './FooterIcons.js'
import FooterLinks from './FooterLinks.js'
import styles from '../CSS/footer.module.css'

function Footer() {
    var n1=1000, remainder, sum =0;
    
    while(n1!=0) {
        remainder = n1%10;
        sum = remainder + sum;
        n1 = n1/10;      
    }
    console.log(sum)
    return (
        <section className={styles.footer}>
            <FooterIcons />
                <hr></hr> {/* for a grey horizontal line */}
            <FooterLinks />
        </section>
    )
}

export default Footer

