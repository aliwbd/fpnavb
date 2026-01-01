/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}

/* Main Navbar */
.navbar {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
}

/* Logo */
.nav-logo a {
    display: flex;
    align-items: center;
}

.nav-logo img {
    height: 32px;
    width: auto;
}

/* Location Selector */
.location-selector {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 8px 12px;
    margin-left: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    min-width: 180px;
}

.location-selector:hover {
    background-color: #eaeaea;
}

.location-icon {
    color: #ff2e63;
    margin-right: 10px;
    font-size: 18px;
}

.location-text {
    display: flex;
    flex-direction: column;
}

.deliver-to {
    font-size: 12px;
    color: #666;
}

.current-location {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #333;
}

.location-name {
    margin-right: 5px;
}

.current-location i {
    font-size: 12px;
    color: #777;
}

/* Search Container */
.search-container {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 8px;
    margin-left: 20px;
    flex: 1;
    max-width: 500px;
}

.search-icon {
    color: #777;
    margin: 0 10px;
}

.search-input {
    border: none;
    background: transparent;
    padding: 8px;
    font-size: 14px;
    width: 100%;
    outline: none;
}

.search-btn {
    background-color: #ff2e63;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-btn:hover {
    background-color: #e61e53;
}

/* User Actions */
.user-actions {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.action-link {
    display: flex;
    align-items: center;
    margin-left: 20px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 6px;
    transition: background-color 0.3s;
    position: relative;
}

.action-link:hover {
    background-color: #f5f5f5;
}

.action-link i {
    margin-right: 8px;
    font-size: 18px;
}

.cart-count {
    background-color: #ff2e63;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    position: absolute;
    top: -5px;
    right: -5px;
}

.lang-selector i:last-child {
    margin-left: 5px;
    margin-right: 0;
    font-size: 12px;
}

/* Mobile Toggle */
.mobile-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    margin-left: 20px;
}

/* Secondary Navbar */
.secondary-nav {
    background-color: #fff;
    border-top: 1px solid #eee;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.secondary-nav-container {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    overflow-x: auto;
}

.nav-link {
    padding: 15px 20px;
    text-decoration: none;
    color: #666;
    font-weight: 500;
    white-space: nowrap;
    transition: color 0.3s;
    border-bottom: 3px solid transparent;
}

.nav-link:hover {
    color: #ff2e63;
}

.nav-link.active {
    color: #ff2e63;
    border-bottom-color: #ff2e63;
}

/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 280px;
    height: 100%;
    background-color: #fff;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 2000;
    transition: right 0.3s ease;
    padding-top: 20px;
}

.mobile-menu.active {
    right: 0;
}

.mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 20px;
    border-bottom: 1px solid #eee;
}

.mobile-menu-header h3 {
    color: #333;
}

.close-menu {
    font-size: 24px;
    cursor: pointer;
    color: #777;
}

.mobile-menu-items {
    padding: 20px 0;
}

.mobile-menu-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: background-color 0.3s;
}

.mobile-menu-item:hover {
    background-color: #f9f9f9;
}

.mobile-menu-item i {
    margin-right: 15px;
    font-size: 20px;
    width: 24px;
    text-align: center;
    color: #ff2e63;
}

/* Main Content */
.main-content {
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
}

.container h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 2.5rem;
}

.container p {
    color: #666;
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 40px 0;
}

.feature-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-card i {
    font-size: 2.5rem;
    color: #ff2e63;
    margin-bottom: 15px;
}

.feature-card h3 {
    color: #333;
    margin-bottom: 10px;
}

.feature-card p {
    color: #666;
    margin-bottom: 0;
}

.how-it-works {
    margin: 30px 0 40px 20px;
    color: #666;
}

.how-it-works li {
    margin-bottom: 10px;
    padding-left: 5px;
}

/* Footer */
.footer {
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-top: 1px solid #eee;
    margin-top: 40px;
    color: #666;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .search-container {
        max-width: 400px;
    }
    
    .action-link span {
        display: none;
    }
    
    .action-link i {
        margin-right: 0;
    }
    
    .action-link {
        padding: 8px;
    }
    
    .lang-selector span {
        display: none;
    }
}

@media (max-width: 768px) {
    .nav-container {
        flex-wrap: wrap;
    }
    
    .search-container {
        order: 3;
        margin: 15px 0 0 0;
        max-width: 100%;
    }
    
    .mobile-toggle {
        display: block;
    }
    
    .user-actions {
        margin-left: auto;
    }
    
    .location-selector {
        flex: 1;
        margin-left: 15px;
    }
    
    .secondary-nav-container {
        justify-content: flex-start;
    }
    
    .features {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .nav-container {
        padding: 10px 15px;
    }
    
    .nav-logo img {
        height: 28px;
    }
    
    .location-selector {
        min-width: auto;
    }
    
    .deliver-to {
        display: none;
    }
    
    .search-btn {
        padding: 8px 15px;
        font-size: 14px;
    }
}