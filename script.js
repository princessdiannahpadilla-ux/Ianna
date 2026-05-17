(function(){
  const links = document.querySelectorAll("nav a[href^=\"#\"]");

  function setActive(hash){
    links.forEach(a => {
      if(a.getAttribute("href") === hash){
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  }

 
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      setActive(link.getAttribute("href"));
      


    });
  });


  window.addEventListener("load", () => {
    const hash = window.location.hash;
    if(hash) setActive(hash);
  });

 
  const sections = Array.from(document.querySelectorAll("section[id]"));
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const r = sec.getBoundingClientRect();
      if(r.top <= 120 && r.bottom >= 120){
        current = `#${sec.id}`;
      }
    });
    if(current) setActive(current);
  }, { passive: true });
})();
