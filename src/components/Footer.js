import React from 'react';
import '../css/footer.css';

function Footer() {
    return(
        <footer>
            <form action="" method="post">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="personal">
                    <div className="names">
                        <input type="text" name="" id="" placeholder="First Name"/>
                        <input type="text" name="" id="" placeholder="Last Name"/>
                    </div>
                    <input type="text" placeholder="E-mail"/>
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </footer>
    );
}

export default Footer;  