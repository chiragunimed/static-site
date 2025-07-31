<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Authorize LinkedIn Posting</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background: #f9f9f9;
    }
    img {
      max-width: 100%;
      border-radius: 12px;
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

  <img src="base_badge.png" alt="Your Event Badge" />
  
  <div class="disclaimer">
    By clicking the button below, you agree to let us use your LinkedIn profile photo to overlay it on your badge and post it to your profile.<br>
    <strong>Please do not proceed if you do not authorize this action.</strong>
  </div>

  <button class="button" id="authBtn">Post Badge to LinkedIn</button>

  <script>
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    document.getElementById("authBtn").addEventListener("click", () => {
      if (email) {
        window.location.href = `https://c22ba932a90c.ngrok-free.app/auth/linkedin?email=${encodeURIComponent(email)}`;
      } else {
        alert("Email not found in URL. Please access this link from your email.");
      }
    });
  </script>
</body>
</html>