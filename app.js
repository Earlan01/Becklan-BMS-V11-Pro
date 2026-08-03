(() => {
  const openApp = () => {
    const url = String(window.BECKLAN_CONFIG?.APP_URL || "").trim();

    if (!url) {
      document.getElementById("status").textContent =
        "The Becklan BMS web-app URL has not been configured.";
      return;
    }

    window.location.href = url;
  };

  document.getElementById("appIcon").addEventListener("click", openApp);
  document.getElementById("openApp").addEventListener("click", openApp);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
})();
