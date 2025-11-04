import React from 'react';

export default function HomePage({ onCreateContest, onRegister }) {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Simplify Your Competition Management</h1>
        <p className="hero-subtitle">
          Create, manage, and track contests effortlessly — all in one place.
        </p>
        <div className="cta-buttons">
          <button 
            className="btn btn-primary btn-lg me-3" 
            onClick={onCreateContest}
          >
            <i className="bi bi-trophy-fill me-2"></i>
            Create Contest
          </button>
          <button 
            className="btn btn-outline-primary btn-lg"
            onClick={onRegister}
          >
            <i className="bi bi-person-plus-fill me-2"></i>
            Register Now
          </button>
        </div>
      </div>

      <style>{`
        .home-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-section {
          text-align: center;
          padding: 4rem 1rem;
          background: linear-gradient(to right, rgba(109, 151, 115, 0.1), rgba(12, 59, 46, 0.1));
          border-radius: 1rem;
          margin-top: 2rem;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          color: #0C3B2E;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn-primary {
          background-color: #6D9773;
          border-color: #6D9773;
        }

        .btn-primary:hover {
          background-color: #0C3B2E;
          border-color: #0C3B2E;
        }

        .btn-outline-primary {
          color: #6D9773;
          border-color: #6D9773;
        }

        .btn-outline-primary:hover {
          background-color: #6D9773;
          border-color: #6D9773;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}