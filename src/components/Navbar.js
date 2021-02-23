import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="firstThird">
                <div className="logo">
                    <a href="/home">Shopee</a>
                </div>
            </div>
            <div className="secondThird">
                <div className="search">
                    <input placeholder="Buscar...">     
                    </input>
                    <span class="material-icons">
                        search
                    </span>
                </div>
            </div>
            <div className="thirdThird">
                <div className="cart">
                    <button type="Button">
                        <span class="material-icons">
                            shopping_cart
                        </span>
                        <span class="notification">
                            9
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar