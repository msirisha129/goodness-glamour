import React, { useState } from "react";

export default function VirtualAssistantCard() {
  const callNumber = "+19384003984";

  const [showCallPopup, setShowCallPopup] = useState(false);

  return (
    <>
      <div
        style={{
          background: "#1e1e1e",
          color: "white",
          padding: "24px",
          borderRadius: "20px",
          marginTop: "40px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)"
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "12px"
          }}
        >
          ✨ AI Salon Assistant
        </h2>

        <p
          style={{
            opacity: 0.8,
            marginBottom: "20px"
          }}
        >
          Talk with our AI assistant for salon services,
          pricing, appointments, beauty consultations
          and bookings.
        </p>

        <button
          onClick={() => setShowCallPopup(true)}
          style={{
            background: "#c89b63",
            color: "white",
            padding: "14px 28px",
            borderRadius: "12px",
            border: "none",
            fontWeight: "bold",
            display: "inline-block",
            marginRight: "12px",
            cursor: "pointer"
          }}
        >
          📞 Call AI Assistant
        </button>

        <button
          onClick={() => {
            const event = new CustomEvent("open-ai-chat");
            window.dispatchEvent(event);
          }}
          style={{
            border: "1px solid #c89b63",
            color: "#c89b63",
            padding: "14px 28px",
            borderRadius: "12px",
            background: "transparent",
            fontWeight: "bold",
            display: "inline-block",
            cursor: "pointer"
          }}
        >
          💬 Message AI
        </button>

        {showCallPopup && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99999
            }}
          >
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                width: "320px",
                textAlign: "center",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
              }}
            >
              <h2
                style={{
                  marginBottom: "12px",
                  color: "#222"
                }}
              >
                ✨ AI Voice Assistant
              </h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.6",
                  marginBottom: "20px"
                }}
              >
                Real-time AI salon calling feature is coming soon 💛
              </p>

              <button
                onClick={() => {
                  window.location.href = `tel:${callNumber}`;
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#c89b63",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginBottom: "10px"
                }}
              >
                📞 Call Salon Now
              </button>
<button
  onClick={() => setShowCallPopup(false)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    background: "white",
    cursor: "pointer",
    color: "#222",
    fontWeight: "bold"
  }}
>
  Close
</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}