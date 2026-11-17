(() => {
  const auth = document.querySelector(".login-card");
  const mail = document.getElementById("email");
  const pw = document.getElementById("password");
  const eye = document.getElementById("eyeToggle");
  const form = document.getElementById("loginForm");
  const feedback = document.getElementById("feedback");
  const caption = document.getElementById("captionText");
  const shown = () => pw.type === "text";

  // One derived word is the state of all four characters.
  function mood() {
    // The secret is on screen — the caret doesn't matter.
    if (shown() && pw.value) return "exposed";
    if (document.activeElement === pw) return "shy";
    if (document.activeElement === mail) return "nosy";
    return "idle";
  }
  function paintMood() {
    auth.dataset.mood = mood();
    const m = auth.dataset.mood;
    caption.textContent = m === "exposed"
      ? "They saw it. Every last character."
      : m === "shy"
      ? "A little privacy, please."
      : m === "nosy"
      ? "Someone's looking at your email."
      : "Type your password. Watch them look away.";
  }
  mail.addEventListener("focus", paintMood);
  pw.addEventListener("focus", paintMood);
  [mail, pw].forEach(input => {
    input.addEventListener("input", () => {
      feedback.textContent = "";
      paintMood();
    });
    input.addEventListener("blur", () => setTimeout(paintMood, 0));
  });

  eye.addEventListener("click", () => {
    const reveal = pw.type === "password";
    pw.type = reveal ? "text" : "password";
    eye.textContent = reveal ? "◉" : "⌁";
    eye.setAttribute("aria-label", reveal ? "Hide password" : "Show password");
    paintMood();
    pw.focus();
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const email = mail.value.trim();
    const password = pw.value;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      mail.focus();
      return;
    }
    if (!password) {
      feedback.textContent = "Please enter your password.";
      pw.focus();
      return;
    }
    if (email.toLowerCase() === "hasib@gmail.com" && password === "hasib123") {
      feedback.textContent = "Welcome back! Demo sign-in successful.";
      caption.textContent = "You're in. Welcome back to Huddle.";
      form.querySelector(".login-btn").textContent = "Logged in ✓";
    } else {
      feedback.textContent = "That email and password don't match the demo account.";
    }
  });

  document.getElementById("forgot").addEventListener("click", () => {
    feedback.textContent = "Password reset link requested (demo only).";
    caption.textContent = "A reset link would be sent to your email.";
  });
  document.getElementById("google").addEventListener("click", () => {
    feedback.textContent = "Google sign-in is a visual demo; OAuth is not connected.";
  });
  document.getElementById("signup").addEventListener("click", () => {
    feedback.textContent = "Sign-up flow is not connected in this demo.";
  });

  auth.dataset.mood = "idle";
  // Start with the demo email visible, as in the screen recording.
  mail.value = "hasib@gmail.com";
})();