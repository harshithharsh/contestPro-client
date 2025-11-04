import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [competition, setCompetition] = useState({ name: "", start: "", end: "" });
  const [activeCompetitions, setActiveCompetitions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompetition((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveCompetitions((prev) => [...prev, competition]);
    setCompetition({ name: "", start: "", end: "" });
    setActiveTab('home');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="text-center">
            <div className="card mx-auto mt-4" style={{ maxWidth: "600px" }}>
              <button 
                className="btn btn-primary btn-lg futuristic-button"
                style={{ padding: "12px 26px", fontSize: "1.05rem" }}
                onClick={() => setActiveTab('startCompetition')}
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                Start Competition
              </button>
            </div>
            <div className="mt-4">
              {activeCompetitions.length > 0 ? (
                <ul className="list-group">
                  {activeCompetitions.map((comp, index) => (
                    <li key={index} className="list-group-item">
                      {comp.name} — {comp.start} → {comp.end}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No active competitions.</p>
              )}
            </div>
          </div>
        );
      case 'startCompetition':
        return (
          <div className="text-center">
            <h2 className="futuristic-title">Start a New Competition</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Competition Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control futuristic-input"
                  value={competition.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="start" className="form-label">Start Date</label>
                <input
                  id="start"
                  name="start"
                  type="date"
                  className="form-control futuristic-input"
                  value={competition.start}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="end" className="form-label">End Date</label>
                <input
                  id="end"
                  name="end"
                  type="date"
                  className="form-control futuristic-input"
                  value={competition.end}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success futuristic-button">Create Competition</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  const handleProfile = () => alert("Profile");
  const handleLogout = () => alert("Logged out");

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }

        /* Page background -> white */
        body, html, #root {
          height: 100%;
          margin: 0;
          font-family: Arial, sans-serif;
          background: #ffffff;          /* changed to white */
          color: #0f1720;               /* darker text for white background */
        }

        .app { display: flex; flex-direction: column; min-height: 100vh; }

        header {
          background: #0C3B2E;
          color: white;
          padding: 8px 14px;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .app-title {
          font-size: 1.15rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e6eef0;
        }

        .logo {
          font-size: 1.25rem;
          color: #ffffff;
          background: #6D9773;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }

        .layout { display: flex; flex: 1; min-height: 0; }

        .sidebar {
          background: #6D9773;
          transition: width 0.25s ease, transform 0.25s ease;
          overflow: hidden;
          border-right: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
        }
        .sidebar.open { width: 64px; }
        .sidebar.closed { width: 0; }

        .nav-link {
          color: white !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          padding: 10px;
          text-decoration: none;
          transition: transform 0.18s ease, background-color 0.18s ease;
          margin: 6px 0;
          border-radius: 8px;
          width: 48px;
          height: 48px;
        }
        .nav-link:hover {
          background-color: rgba(12,59,46,0.95);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 6px 14px rgba(0,0,0,0.18);
        }
        .nav-link.active {
          background-color: rgba(12,59,46,0.95);
          transform: scale(1.05);
          box-shadow: 0 6px 14px rgba(0,0,0,0.18);
        }

        .nav-icon {
          font-size: 1.6rem;
          transition: transform 0.18s ease;
        }

        main { flex: 1; padding: 20px 22px; overflow: auto; min-height: 0; }

        /* Cards should contrast well on white background */
        .card {
          background: #ffffff; /* keep white card on white page with subtle border/shadow */
          padding: 18px;
          border-radius: 10px;
          border: 1px solid rgba(15,23,36,0.06);
          box-shadow: 0 8px 20px rgba(12,59,46,0.04);
          max-width: 640px;
          margin: 0 auto;
          color: #0f1720;
        }

        .futuristic-title {
          font-size: 1.3rem;
          color: #0f1720; /* darker title on white */
          margin-bottom: 12px;
        }

        .futuristic-button {
          background: linear-gradient(90deg, #6D9773, #0C3B2E);
          border: none;
          border-radius: 8px;
          color: white;
          box-shadow: 0 8px 24px rgba(13,40,32,0.12); /* lighter shadow on white */
        }

        /* Inputs -> standard white inputs with dark text for readability */
        .futuristic-input {
          background: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          color: #0f1720;
        }

        /* Footer remains dark to separate visually from white body */
        footer {
          background: rgba(12,59,46,0.98);
          color: #e6eef0;
          padding: 8px 14px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        footer .left { opacity: 0.95; }
        footer .right a { color: #dfeee0; text-decoration: none; margin-left: 12px; opacity: 0.9; }
        footer .right a:hover { text-decoration: underline; }

        @media (max-width: 576px) {
          .sidebar.open { width: 56px; }
          .logo { width: 32px; height: 32px; }
          header { padding: 8px 10px; }
        }
      `}</style>

      <Header toggleSidebar={toggleSidebar} onProfile={handleProfile} onLogout={handleLogout} />

      <div className="layout">
        <Sidebar isSidebarOpen={isSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />

        <main>
          {renderContent()}
        </main>
      </div>

      <Footer />
    </div>
  );
}
