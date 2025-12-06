import { useEffect, useRef } from 'react';
import menuBackground from '../assets/images/download (1).jpeg';

const Menu = () => {
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    menuItemsRef.current.forEach(item => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
      }
    });

    return () => {
      menuItemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const foodItems = [
    {
      category: 'Food',
      items: [
        { name: 'Burger', price: '$12.99', description: 'Juicy beef patty with fresh vegetables' },
        { name: 'Pizza', price: '$15.99', description: 'Classic Italian pizza with your choice of toppings' },
        { name: 'Pasta', price: '$13.99', description: 'Fresh pasta with rich tomato sauce' },
        { name: 'Salad', price: '$10.99', description: 'Fresh mixed greens with dressing' }
      ]
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Coffee', price: '$4.99', description: 'Freshly brewed coffee' },
        { name: 'Tea', price: '$3.99', description: 'Selection of premium teas' },
        { name: 'Smoothie', price: '$6.99', description: 'Fresh fruit smoothies' },
        { name: 'Soft Drinks', price: '$2.99', description: 'Various soft drinks' }
      ]
    }
  ];

  // Set background image style with dark overlay for text readability
  const menuStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${menuBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="menu" className="menu-section" style={menuStyle}>
      <div className="menu-wrapper">
        <h2 className="section-title-large">FOOD & BEVERAGES</h2>
        <div className="menu-content">
          {foodItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="menu-category">
              <h3 className="menu-category-title">{category.category}</h3>
              <div className="menu-items-grid">
                {category.items.map((item, itemIndex) => {
                  const index = categoryIndex * category.items.length + itemIndex;
                  return (
                    <div
                      key={itemIndex}
                      className="menu-item"
                      ref={el => menuItemsRef.current[index] = el}
                    >
                      <div className="menu-item-header">
                        <h4 className="menu-item-name">{item.name}</h4>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p className="menu-item-description">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

