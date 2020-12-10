import React from 'react';
import './Header.css';
function Header(props) {
    return (
        <div>
             <div class="navigation">
          <div class="container">
            <nav class="nav">
              <div class="nav__hamburger">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
    
              <div class="nav__logo">
                <a href="/" class="scroll-link">
                  PHONE
                </a>
              </div>
    
              <div class="nav__menu">
                <div class="menu__top">
                  <span class="nav__category">PHONE</span>
                  <a href="#" class="close__toggle">
                    <svg>
                      {/* <use xlink:href="./images/sprite.svg#icon-cross"></use> */}
                    </svg>
                  </a>
                </div>
                <ul class="nav__list">
                  <li class="nav__item">
                    <a href="#header" class="nav__link scroll-link">Home</a>
                  </li>
                  <li class="nav__item">
                    <a href="#category" class="nav__link scroll-link">Category</a>
                  </li>
                  <li class="nav__item">
                    <a href="#news" class="nav__link scroll-link">Blog</a>
                  </li>
                  <li class="nav__item">
                    <a href="#contact" class="nav__link scroll-link">Contact</a>
                  </li>
                </ul>
              </div>
    
              <div class="nav__icons">
                <a href="#" class="icon__item">
                <i class="fa fa-user" aria-hidden="true"></i>
                </a>
    
                <a href="#" class="icon__item">
                <i class="fa fa-search" aria-hidden="true"></i>
                </a>
    
                <a href="#" class="icon__item">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>

                  <span id="cart__total">0</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
        </div>
    );
}

export default Header;