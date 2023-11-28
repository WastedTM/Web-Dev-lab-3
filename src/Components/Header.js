import React from "react";

export default function Header(){
    return(
        <header>
            <div>
                <span className='logo'>Kimberli</span>
                <ul className='navigation'>
                    <li>Abut us</li>
                    <li>Contacts</li>
                    <li>Office</li>
                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}