import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <div className="logo-icon">☕</div>
            <span>Coffee Sensations</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#media">Media</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="search-icon">🔍</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-wave-top"></div>
          <div className="coffee-beans-pattern"></div>
          <div className="hero-wave"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">FRESHLY ROASTED</div>
            <h1 className="hero-title">COFFEE</h1>
            <button className="shop-btn">Shop now</button>
          </div>
          <div className="hero-image">
            <div className="coffee-cup-wrapper">
              <div className="smoke-container">
                <div className="smoke smoke-1"></div>
                <div className="smoke smoke-2"></div>
                <div className="smoke smoke-3"></div>
                <div className="smoke smoke-4"></div>
                <div className="smoke smoke-5"></div>
              </div>
              <div className="coffee-cup">
                <div className="coffee-surface"></div>
              </div>
              <div className="decorative-leaves">
                <div className="leaf leaf-1"></div>
                <div className="leaf leaf-2"></div>
                <div className="leaf leaf-3"></div>
              </div>
              <div className="coffee-aroma-circles"></div>
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="section" id="menu">
        <h2 className="section-title">TOP CATEGORIES</h2>
        <p className="section-subtitle">Explore The Recent Most Bought Drinks This Week</p>
        <div className="categories-grid">
          <div className="category-card">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center" 
              alt="Coffee Mocha" 
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-title">Coffee Mocha</h3>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
          <div className="category-card">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=250&fit=crop&crop=center" 
              alt="Espresso Americano" 
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-title">Espresso Americano</h3>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
          <div className="category-card">
            <img 
              src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=250&fit=crop&crop=center" 
              alt="Cappuccino" 
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-title">Cappuccino</h3>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Milk Shakes */}
      <section className="section">
        <h2 className="section-title">TOP MILK SHAKES</h2>
        <p className="section-subtitle">Explore The Recent Most Bought Shakes This Week</p>
        <div className="milkshakes-grid">
          <div className="milkshake-card">
            <div className="likes">
              <span>👍</span>
              <span>30 likes</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&h=300&fit=crop&crop=center" 
              alt="Mocha Shake" 
              className="milkshake-image"
            />
            <h3 className="milkshake-name">Mocha Shake</h3>
            <div className="price-section">
              <span className="price">$20.00</span>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
          <div className="milkshake-card">
            <div className="likes">
              <span>👍</span>
              <span>30 likes</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=200&h=300&fit=crop&crop=center" 
              alt="Lavender Shake" 
              className="milkshake-image"
            />
            <h3 className="milkshake-name">Lavender Shake</h3>
            <div className="price-section">
              <span className="price">$20.00</span>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
          <div className="milkshake-card">
            <div className="likes">
              <span>👍</span>
              <span>30 likes</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=300&fit=crop&crop=center" 
              alt="Caramel Shake" 
              className="milkshake-image"
            />
            <h3 className="milkshake-name">Caramel Shake</h3>
            <div className="price-section">
              <span className="price">$20.00</span>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="section" id="blog">
        <h2 className="section-title">LATEST BLOGS</h2>
        <p className="section-subtitle">Explore The Recent Most Bought Shakes This Week</p>
        <div className="blog-grid">
          <div className="blog-card">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop&crop=center" 
              alt="Coffee brewing techniques" 
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-title">Coffee Connoisseur</h3>
              <p className="blog-excerpt">
                Discover the art of coffee making. From bean selection to brewing techniques, 
                learn what makes the perfect cup every morning.
              </p>
              <div className="blog-date">2 hours ago</div>
            </div>
          </div>
          <div className="blog-card">
            <img 
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=200&fit=crop&crop=center" 
              alt="Friends enjoying coffee" 
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-title">Coffee Connoisseur</h3>
              <p className="blog-excerpt">
                The history of espresso and how it became the foundation of modern 
                coffee culture around the world.
              </p>
              <div className="blog-date">3 hours ago</div>
            </div>
          </div>
          <div className="blog-card">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=200&fit=crop&crop=center" 
              alt="Coffee shop interior" 
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-title">Coffee Connoisseur</h3>
              <p className="blog-excerpt">
                Seasonal coffee trends and what flavors are dominating this year's 
                coffee scene across different regions.
              </p>
              <div className="blog-date">5 hours ago</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><a href="#">Espresso</a></li>
              <li><a href="#">New in</a></li>
              <li><a href="#">Weekly deals</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Category</h3>
            <ul>
              <li><a href="#">Mila</a></li>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Vouchers</a></li>
              <li><a href="#">Size Charts</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company Info</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow us</h3>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Data settings | Cookie settings | Privacy Policy | Terms And Conditions | Imprint</p>
        </div>
      </footer>
    </div>
  )
}

export default App
