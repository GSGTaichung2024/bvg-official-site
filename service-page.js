window.fbq = window.fbq || function () {
  (window.fbq.queue = window.fbq.queue || []).push(arguments);
};
window.fbq.loaded = true;
window.fbq.version = "2.0";

const pixel = document.createElement("script");
pixel.async = true;
pixel.src = "https://connect.facebook.net/en_US/fbevents.js";
document.head.appendChild(pixel);

window.fbq("init", "4418236388490755");
window.fbq("track", "PageView");

document.querySelectorAll(".service-cta").forEach((link) => {
  link.addEventListener("click", () => {
    window.gtag?.("event", "appointment_click", {
      event_category: "engagement",
      location: window.location.pathname,
    });
    window.fbq("track", "Contact", { content_name: link.textContent.trim() });
  });
});
