<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>LinkedIn Badge</title>
</head>
<body style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; text-align:center;">

  <h2>Welcome!</h2>
  <p>Your email: <span id="email"></span></p>
  <button id="linkedin-button" style="padding:10px 20px; font-size:16px; cursor:pointer;">
    Post Badge on LinkedIn
  </button>

  <script>
    // 1. Get email from URL query string
    function getEmailFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get("email") || "";
    }

    // 2. On load, show email and add click handler to button
    window.onload = () => {
      const email = getEmailFromUrl();
      document.getElementById("email").textContent = email;

      document.getElementById("linkedin-button").addEventListener("click", () => {
        if (!email) {
          alert("Email not found!");
          return;
        }
        // Redirect to backend OAuth start endpoint with email
        const backendOAuthUrl = `https://c22ba932a90c.ngrok-free.app/auth/linkedin?email=${encodeURIComponent(email)}`;
        window.location.href = backendOAuthUrl;
      });
    };
  </script>

</body>
</html>
