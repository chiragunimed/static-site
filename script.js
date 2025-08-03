<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Authorize LinkedIn Posting</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background: #f9f9f9;
    }
    .email {
      font-weight: bold;
      color: #333;
      margin-top: 10px;
    }
     .scale-container {
      transform: scale(0.5); /* Scale down to 50% of original */
      transform-origin: top center;
      width: 200%; /* Compensates for scaling */
      padding: 80px 0;
      box-sizing: border-box;
      text-align: center;
     }
    .disclaimer {
      margin-top: 20px;
      font-size: 14px;
      color: #666;
    }
    .button {
      margin-top: 30px;
      padding: 12px 24px;
      font-size: 16px;
      background: #0073b1;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h2>Welcome!</h2>
  <div class="email">Your email: <span id="emailPlaceholder">Loading...</span></div>

  <img src="base_badge.png" alt="Your Event Badge" style="max-width: 100%; border-radius: 12px; margin-top: 20px;" />

  <div class="disclaimer">
    By clicking the button below, you agree to let us use your LinkedIn 1 photo to overlay it on your badge and post it to your profile.<br>
    <strong>Please do not proceed if you do not authorize this action.</strong>
  </div>

  <button class="button" id="authBtn">Post Badge to LinkedIn</button>

  <script>
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");

  console.log("Extracted email:", email); // Debug in browser console

  const placeholder = document.getElementById("emailPlaceholder");
  placeholder.textContent = email || "Missing";

  document.getElementById("authBtn").addEventListener("click", () => {
    if (email) {
      window.location.href = `https://c22ba932a90c.ngrok-free.app/auth/linkedin?email=${encodeURIComponent(email)}`;
    } else {
      alert("Email not found in URL. Please open this page from your email.");
    }
  });
});
</script>

</body>
</html>
