import React from 'react'
import Logo from "../../assets/logo.png"

function Header() {
    return (
        <header>
            <h2>Vori</h2>
            <img src={Logo} alt="Logo da minha empresa, representada por um carrinho de  compras azul e a palavra Vori" />
        </header>
    )
}

export default Header