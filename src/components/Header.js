import React from "react";

export default function Header({ toggleSidebar, onProfile, onLogout }) {
  return (
    <header>
      <button
        className="btn text-white me-2"
        onClick={toggleSidebar}
        style={{ padding: "6px 8px", background: "transparent", border: "none" }}
      >
        <i className="bi bi-list fs-5"></i>
      </button>

      <div className="app-title">
        <div className="logo">
          <i className="bi bi-trophy-fill"></i>
        </div>
        <span>ContestPro</span>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button className="btn btn-sm btn-outline-light" onClick={onProfile}>
          <i className="bi bi-person-circle"></i>
        </button>
        <button className="btn btn-sm btn-danger" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

