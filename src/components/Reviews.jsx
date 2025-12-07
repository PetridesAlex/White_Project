import { useEffect, useState } from 'react';

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API endpoint - adjust if your server runs on a different port
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/reviews';

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();
        
        if (data.success && data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        } else {
          // Fallback to real reviews from Google if API fails or returns no reviews
          setReviews([
            {
              name: 'Alex Petrides',
              rating: 5,
              text: 'Fast, reliable internet, comfy atmosphere, friendly staff, clean space, and tasty snacks. Perfect for gaming or work!',
              date: '3 days ago'
            },
            {
              name: 'Lynnz-_- YouTuBe',
              rating: 5,
              text: 'Very well-maintained and welcoming internet café. Clean, organized, and comfortably arranged space, suitable for work and relaxation.',
              date: '3 days ago'
            },
            {
              name: 'Steve Cts',
              rating: 5,
              text: 'Super clean place, friendly staff, and great atmosphere for gaming or relaxing.',
              date: '3 days ago'
            },
            {
              name: 'Kypros Antoniou',
              rating: 5,
              text: 'Premium quality gaming cafe. Excellent atmosphere and service.',
              date: '3 days ago'
            },
            {
              name: 'Stefanos 02',
              rating: 5,
              text: 'Loved the vibe! Excellent coffee, clean space and very helpful staff.',
              date: '5 days ago'
            },
            {
              name: 'Γιωργος Παπαδόπουλος',
              rating: 5,
              text: 'Nice place!! Great atmosphere',
              date: 'Recently'
            },
            {
              name: 'Lefkios Andreadis',
              rating: 5,
              text: 'Amazing place with great service and atmosphere. Highly recommended!',
              date: '1 week ago'
            },
            {
              name: 'Dimitris Theofanous',
              rating: 5,
              text: 'Best gaming cafe experience! Everything is top quality.',
              date: '1 week ago'
            },
            {
              name: 'Maria K',
              rating: 5,
              text: 'Perfect spot for work and gaming. Fast internet and comfortable seating.',
              date: '2 weeks ago'
            },
            {
              name: 'Andreas C',
              rating: 5,
              text: 'Great place to hang out with friends. The staff is amazing and the facilities are excellent.',
              date: '2 weeks ago'
            },
            {
              name: 'Christos M',
              rating: 5,
              text: 'Clean, modern, and well-equipped. Best internet cafe in Limassol!',
              date: '3 weeks ago'
            },
            {
              name: 'Elena P',
              rating: 5,
              text: 'Love coming here! The atmosphere is perfect and the service is outstanding.',
              date: '1 month ago'
            }
          ]);
        }
      } catch (err) {
        setError(err.message);
        // Fallback to real reviews from Google on error
        setReviews([
          {
            name: 'Alex Petrides',
            rating: 5,
            text: 'Fast, reliable internet, comfy atmosphere, friendly staff, clean space, and tasty snacks. Perfect for gaming or work!',
            date: '3 days ago'
          },
          {
            name: 'Lynnz-_- YouTuBe',
            rating: 5,
            text: 'Very well-maintained and welcoming internet café. Clean, organized, and comfortably arranged space, suitable for work and relaxation.',
            date: '3 days ago'
          },
          {
            name: 'Steve Cts',
            rating: 5,
            text: 'Super clean place, friendly staff, and great atmosphere for gaming or relaxing.',
            date: '3 days ago'
          },
          {
            name: 'Kypros Antoniou',
            rating: 5,
            text: 'Premium quality gaming cafe. Excellent atmosphere and service.',
            date: '3 days ago'
          },
          {
            name: 'Stefanos 02',
            rating: 5,
            text: 'Loved the vibe! Excellent coffee, clean space and very helpful staff.',
            date: '5 days ago'
          },
          {
            name: 'Γιωργος Παπαδόπουλος',
            rating: 5,
            text: 'Nice place!! Great atmosphere',
            date: 'Recently'
          },
          {
            name: 'Lefkios Andreadis',
            rating: 5,
            text: 'Amazing place with great service and atmosphere. Highly recommended!',
            date: '1 week ago'
          },
          {
            name: 'Dimitris Theofanous',
            rating: 5,
            text: 'Best gaming cafe experience! Everything is top quality.',
            date: '1 week ago'
          },
          {
            name: 'Maria K',
            rating: 5,
            text: 'Perfect spot for work and gaming. Fast internet and comfortable seating.',
            date: '2 weeks ago'
          },
          {
            name: 'Andreas C',
            rating: 5,
            text: 'Great place to hang out with friends. The staff is amazing and the facilities are excellent.',
            date: '2 weeks ago'
          },
          {
            name: 'Christos M',
            rating: 5,
            text: 'Clean, modern, and well-equipped. Best internet cafe in Limassol!',
            date: '3 weeks ago'
          },
          {
            name: 'Elena P',
            rating: 5,
            text: 'Love coming here! The atmosphere is perfect and the service is outstanding.',
            date: '1 month ago'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [API_URL]);

  useEffect(() => {
    if (reviews.length === 0) return;

    // Auto-cycle through reviews with smooth slide animation
    const interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Render stars based on rating
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return (
      <section id="reviews" className="reviews-section" style={{
        background: '#FFFFFF',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="reviews-wrapper">
          <h2 className="section-title-large">HEAR FROM OUR COMMUNITY</h2>
          <div className="reviews-container">
            <div className="review-card loading">Loading reviews...</div>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  const currentReview = reviews[currentReviewIndex];

  const reviewsStyle = {
    background: '#FFFFFF',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section id="reviews" className="reviews-section" style={reviewsStyle}>
      <div className="reviews-wrapper">
        <h2 className="section-title-large">HEAR FROM OUR COMMUNITY</h2>
        <div className="reviews-container">
          <div className="reviews-slider">
            {reviews.map((review, index) => {
              const isActive = index === currentReviewIndex;
              const isPrev = index === (currentReviewIndex - 1 + reviews.length) % reviews.length;
              const isNext = index === (currentReviewIndex + 1) % reviews.length;
              
              return (
                <div
                  key={index}
                  className={`review-card ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
          >
            <div className="review-header">
              <div className="review-author">
                <div className="review-avatar">
                        {review.name.charAt(0)}
                </div>
                <div className="review-author-info">
                        <h3 className="review-name">{review.name}</h3>
                  <div className="review-rating">
                          <span className="review-stars">{renderStars(review.rating)}</span>
                          <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
                  <p className="review-text">"{review.text}"</p>
          </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

