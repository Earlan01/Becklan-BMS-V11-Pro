
(() => {
  const cfg=window.BECKLAN_CONFIG||{};
  const launch=document.getElementById("launchCard"), shell=document.getElementById("appShell"),
        frame=document.getElementById("bmsFrame"), status=document.getElementById("connectionStatus"),
        install=document.getElementById("installApp");
  document.getElementById("versionText").textContent=`Version ${cfg.VERSION||"12.0"}`;
  document.getElementById("openFull").href=cfg.BMS_URL||"#";
  const valid=()=>typeof cfg.BMS_URL==="string"&&/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec/.test(cfg.BMS_URL);
  const open=()=>{if(!valid()){alert("Invalid Apps Script URL in config.js");return;}frame.src=cfg.BMS_URL+"?source=github-v12";launch.style.display="none";shell.style.display="block";status.textContent="Connecting...";};
  document.getElementById("openBms").addEventListener("click",open);
  document.getElementById("reloadBms").addEventListener("click",()=>{if(valid())frame.src=cfg.BMS_URL+"?source=github-v12&t="+Date.now();});
  document.getElementById("backLauncher").addEventListener("click",()=>{frame.src="about:blank";shell.style.display="none";launch.style.display="block";});
  frame.addEventListener("load",()=>status.textContent=navigator.onLine?"BMS connected":"Offline");
  addEventListener("online",()=>status.textContent="Online");addEventListener("offline",()=>status.textContent="Offline");
  let promptEvent=null;addEventListener("beforeinstallprompt",e=>{e.preventDefault();promptEvent=e;install.hidden=false;});
  install.addEventListener("click",async()=>{if(!promptEvent)return;promptEvent.prompt();await promptEvent.userChoice;promptEvent=null;install.hidden=true;});
  if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(console.error));
  if(cfg.AUTO_OPEN&&valid())open();
})();
