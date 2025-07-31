// Get the email param from URL query string
function getEmailFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("email") || "No email provided";
}

function init() {
  // Show email on page
  const emailSpan = document.getElementById("email");
  const email = getEmailFromUrl();
  emailSpan.textContent = email;

  // Setup LinkedIn OAuth URL
  const linkedInClientId = "86mmdy74b0jgs5"; // Replace this
  const redirectUri = encodeURIComponent("https://static-site-frontend.onrender.com/auth/linkedin/callback"); // Replace this
  const scope = encodeURIComponent("r_liteprofile w_member_social");
  const state = "123456"; // You can generate a random string here for security

  const linkedInOAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedInClientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

  // Button click redirects to LinkedIn OAuth page
  const button = document.getElementById("linkedin-button");
  button.addEventListener("click", () => {
    window.location.href = linkedInOAuthUrl;
  });
}

// Run init on page load
window.onload = init;
