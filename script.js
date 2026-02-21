const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Simple contact form behavior (no backend).
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const program = String(data.get("program") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message) {
    note.textContent = "Please fill out name, email, and a message.";
    return;
  }

  const subject = encodeURIComponent(`Lessons NYC Inquiry — ${program}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProgram: ${program}\n\nMessage:\n${message}`
  );

  const to = "lessonsnyc57@gmail.com";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  note.textContent = "Opening your email app… If it doesn’t open, email us directly.";
});