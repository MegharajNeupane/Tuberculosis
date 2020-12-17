import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav>
          <div class="menu-icon">
            <i class="fa fa-bars fa-2x"></i>
          </div>
          <div class="logo">National Tuberculosis Dashboard</div>
          <div class="menu">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li class="adminDashboard">Admin Dashboard</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
