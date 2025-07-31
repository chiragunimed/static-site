function getEmailFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("email") || "No email provided";
}

function init() {
  const emailSpan = document.getElementById("email");
  const email = getEmailFromUrl();
  emailSpan.textContent = email;

  // 👇 Redirect to your backend instead of LinkedIn directly
  const backendUrl = "https://cfa1b06cea10.ngrok.io/auth/linkedin/callback"; // ⬅️ Replace this with your real ngrok URL

  const button = document.getElementById("linkedin-button");
  button.addEventListener("click", () => {
    window.location.href = `${backendUrl}/auth/linkedin?email=${encodeURIComponent(email)}`;
  });
}

window.onload = init;
