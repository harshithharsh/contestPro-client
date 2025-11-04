import React from "react";

export default function Sidebar({ isSidebarOpen, activeTab, setActiveTab, isLoggedIn, userRole }) {
  const handleClick = (tab) => setActiveTab(tab);

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <nav className="nav flex-column align-items-center" style={{ width: "100%" }}>
        <button
          type="button"
          aria-label="Home"
          className={`nav-link ${activeTab === "home" ? "active" : ""}`}
          onClick={() => handleClick("home")}
        >
          <i className="bi bi-house-door nav-icon" aria-hidden="true"></i>
        </button>

        <button
          type="button"
          aria-label="Contests"
          className={`nav-link ${activeTab === "contests" ? "active" : ""}`}
          onClick={() => handleClick("contests")}
        >
          <i className="bi bi-trophy nav-icon" aria-hidden="true"></i>
        </button>

        {isLoggedIn && (
          <>
            <button
              type="button"
              aria-label="Dashboard"
              className={`nav-link ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => handleClick("dashboard")}
            >
              <i className="bi bi-speedometer2 nav-icon" aria-hidden="true"></i>
            </button>

            {userRole === 'organizer' && (
              <button
                type="button"
                aria-label="My Contests"
                className={`nav-link ${activeTab === "mycontests" ? "active" : ""}`}
                onClick={() => handleClick("mycontests")}
              >
                <i className="bi bi-list-check nav-icon" aria-hidden="true"></i>
              </button>
            )}
          </>
        )}

        <button
          type="button"
          aria-label="About"
          className={`nav-link ${activeTab === "about" ? "active" : ""}`}
          onClick={() => handleClick("about")}
        >
          <i className="bi bi-info-circle nav-icon" aria-hidden="true"></i>
        </button>

        <button
          type="button"
          aria-label="Contact"
          className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => handleClick("contact")}
        >
          <i className="bi bi-envelope nav-icon" aria-hidden="true"></i>
        </button>
      </nav>
    </aside>
  );
}