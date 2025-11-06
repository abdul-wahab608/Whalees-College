import React, { useState } from "react";

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        transition: "opacity 0.3s",
    },
    modal: {
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "row",
        maxWidth: "700px",
        width: "90vw",
        minHeight: "350px",
        overflow: "hidden",
        animation: "modalFadeIn 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
    },
    left: {
        flex: 1,
        padding: "2.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    right: {
        flex: 1,
        background: "#e0e7ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "220px",
    },
    closeBtn: {
        position: "absolute",
        top: 18,
        right: 24,
        background: "none",
        border: "none",
        fontSize: "1.7rem",
        cursor: "pointer",
        color: "#333",
        zIndex: 2,
    },
    img: {
        width: "90%",
        maxWidth: "260px",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        objectFit: "cover",
    },
};

const Announcements = () => {
    const [open, setOpen] = useState(false);

    const sectionStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1rem',
        borderRadius: '12px',
        // blended overlay + background image
        backgroundImage: `linear-gradient(rgba(15,23,42,0.45), rgba(15,23,42,0.45)), url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        minHeight: '220px',
    };

    const centeredBtn = {
        padding: '0.8rem 1.6rem',
        borderRadius: '10px',
        background: 'linear-gradient(90deg,#6366f1,#4f46e5)',
        color: '#fff',
        border: 'none',
        fontWeight: 700,
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(79,70,229,0.18)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
    };

    return (
        <>
            <div style={sectionStyle} role="region" aria-labelledby="announcements-heading">
                <button
                    id="announcements-button"
                    style={centeredBtn}
                    onClick={() => setOpen(true)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}
                    aria-haspopup="dialog"
                    aria-controls="announcement-modal"
                >
                    Show Announcement
                </button>
            </div>

            {open && (
                <div style={modalStyles.overlay} onClick={() => setOpen(false)}>
                    <style>
                        {`
                            @keyframes modalFadeIn {
                                0% { transform: translateY(60px) scale(0.95); opacity: 0; }
                                100% { transform: translateY(0) scale(1); opacity: 1; }
                            }
                        `}
                    </style>
                    <div
                        id="announcement-modal"
                        style={modalStyles.modal}
                        onClick={e => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="announcement-title"
                    >
                        <button
                            style={modalStyles.closeBtn}
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <div style={modalStyles.left}>
                            <h2 id="announcement-title" style={{ marginBottom: "1rem", color: "#3730a3" }}>
                                Important Announcement!
                            </h2>
                            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem" }}>
                                Welcome to Whales College! Our new semester starts soon. Please check your email for orientation details and join our community for updates.
                            </p>
                            <a
                                href="#"
                                style={{
                                    color: "#6366f1",
                                    textDecoration: "underline",
                                    fontWeight: 500,
                                    fontSize: "1rem",
                                    marginTop: "auto",
                                }}
                            >
                                Learn More
                            </a>
                        </div>
                        <div style={modalStyles.right}>
                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                                alt="Announcement"
                                style={modalStyles.img}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Announcements;