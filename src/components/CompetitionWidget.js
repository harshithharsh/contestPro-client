import React, { useState } from "react";

export default function CompetitionWidget({ competitions = [], onRemove }) {
  const [expanded, setExpanded] = useState(null);

  const getStatus = (start, end) => {
    const now = new Date();
    const s = new Date(start);
    const e = new Date(end);
    if (now < s) return "Upcoming";
    if (now >= s && now <= e) return "Active";
    return "Ended";
  };

  if (!competitions.length) {
    return (
      <div className="mt-4">
        <div className="card p-3 text-center" style={{ maxWidth: 640, margin: "0 auto" }}>
          <small className="text-muted">No competitions yet</small>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4" style={{ maxWidth: 720, margin: "0 auto" }}>
      {competitions.map((comp, idx) => {
        const status = getStatus(comp.start, comp.end);
        const isOpen = expanded === idx;
        return (
          <div key={idx} className="card mb-3 p-3" style={{ borderRadius: 10 }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2">
                  <strong style={{ fontSize: 16 }}>{comp.name}</strong>
                  <span className={`badge ${status === "Active" ? "bg-success" : status === "Upcoming" ? "bg-info" : "bg-secondary"}`}>
                    {status}
                  </span>
                </div>
                <div className="text-muted" style={{ fontSize: 13 }}>
                  {comp.start} → {comp.end}
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => setExpanded(isOpen ? null : idx)}
                >
                  {isOpen ? "Hide" : "View"}
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onRemove && onRemove(idx)}
                >
                  Remove
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="mt-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 12 }}>
                <div><strong>Details</strong></div>
                <div className="text-muted" style={{ fontSize: 14 }}>
                  Competition "{comp.name}" starts on <strong>{comp.start}</strong> and ends on <strong>{comp.end}</strong>.
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}