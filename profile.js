function scrollUp(e) {
    const target = document.querySelector("#scroll-btn");
    
    function scroll() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };
    target.addEventListener("click", scroll);
  }
  
  scrollUp("scroll-btn");