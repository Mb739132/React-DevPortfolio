import React, { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
  useEffect(() => {
    // Example of using jQuery to manipulate the DOM
    $(document).ready(function() {
      // Example: Apply a CSS style to an element with ID 'myElement'
      $("#myElement").css("color", "blue");
    });

    // Example of using Bootstrap components
    $('[data-toggle="tooltip"]').tooltip();

    // Cleanup: Remove event listeners if needed
    return () => {
      // Cleanup code here
    };
  }, []);

  return (
    <div className="container my-5">
      <h1>Proficiencies</h1>
      {/* Your resume content */}
    </div>
  );
}

export default Resume;