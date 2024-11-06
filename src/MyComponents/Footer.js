import React from 'react';

export const Footer = () => {
  let footerStyle = {
    // position: "relative",
    // top: "60vh",
    width: "100%",
    backgroundColor: "grey",
    border: "3px solid black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px", // Adjust if needed
    padding: "20px 0", // Add padding to adjust vertical centering
    boxSizing: "border-box" // Ensure padding doesn’t affect width
  }

  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0 }}>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
