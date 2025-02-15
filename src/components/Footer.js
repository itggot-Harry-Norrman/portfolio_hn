import React from 'react';
import '../css/footer.css';

function Footer() {
    return(
        <footer>
            <form action="" method="post">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="personal">
                    <h2>Contact</h2>
                    <div className="names">
                        <input type="text" className="name" name="" id="" placeholder="First Name"/>
                        <input type="text" className="name" name="" id="" placeholder="Last Name"/>
                    </div>
                    <input type="text" className="mail" placeholder="E-mail"/>
                    <input type="submit" className="submit" value="Send"/>
                </div>
            </form>
        </footer>
    );
}

export default Footer;  