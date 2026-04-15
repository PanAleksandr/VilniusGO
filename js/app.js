document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // take
    const name  = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const tel   = form.elements["tel"].value.trim();
    const age   = form.elements["age"].value.trim();
    const start = form.elements["start"].value;
    const about = form.elements["about"].value.trim();

    const termsChecked = form.elements["terms"].checked;

    // 2) Validacija (client-side)

    // Name: 2 words, only letters, min 2 letters each
    const namePattern = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
    if (!namePattern.test(name)) {
      alert("❌ Full name must contain 2 words (only letters, min 2 letters each)");
      return;
    }

    // Email: required
    if (email === "") {
      alert("❌ Email is required");
      return;
    }

    // Phone: optional, but if entered -> 8–15 digits, optional +
    if (tel !== "") {
      const phonePattern = /^\+?\d{8,15}$/;
      if (!phonePattern.test(tel)) {
        alert("❌ Phone must contain 8–15 digits and optional + at the beginning");
        return;
      }
    }

    // Age: optional, but if entered -> 6–90
    if (age !== "") {
      const ageNumber = Number(age);
      if (ageNumber < 6 || ageNumber > 90) {
        alert("❌ Age must be between 6 and 90");
        return;
      }
    }

    // Terms: required
    if (!termsChecked) {
      alert("❌ You must agree to the Terms");
      return;
    }

    // 3) File name (optional)
    const fileInput = form.elements["avatar"];
    const fileName =
      fileInput.files && fileInput.files[0] ? fileInput.files[0].name : "-";

    // 4) Success message
    alert(
      "✅ Duomenys įvesti sėkmingai!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + (tel || "-") + "\n" +
        "Age: " + (age || "-") + "\n" +
        "Start date: " + (start || "-") + "\n" +
        "About: " + (about || "-") + "\n" +
        "Photo: " + fileName + "\n" +
        "Terms: " + (termsChecked ? "Yes" : "No")
    );
  });
});
