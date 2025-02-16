      const menuBtn = document.getElementById("menuBtn");
      const sidebar = document.getElementById("sidebar");
      const closeBtn = document.getElementById("closeBtn");
      document
        .getElementById("shopToggle")
        .addEventListener("click", function () {
          const dropdown = document.getElementById("shopDropdown");
          const arrowIcon = document.getElementById("arrowIcon");

          dropdown.classList.toggle("show");
          arrowIcon.classList.toggle("rotate-180");
        });

      window.addEventListener("scroll", function () {
        let scrolled = window.scrollY;
        let movement = -scrolled * 0.03;

        document.querySelector(
          ".stickycontainer1"
        ).style.backgroundPosition = `center ${movement}px`;
        document.querySelector(
          ".stickcontainer"
        ).style.backgroundPosition = `center ${movement}px`;
        document.querySelector(
          ".stickycontainer"
        ).style.backgroundPosition = `center ${movement}px`;
      });

      menuBtn.addEventListener("click", () => {
        sidebar.classList.add("show-sidebar");
      });

      closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("show-sidebar");
      });
      let index = 0;
      const wrapper = document.getElementById("reviewsWrapper");
      const reviews = document.querySelectorAll(".review-card");
      const totalSlides = Math.ceil(reviews.length / 2);

      function showSlide(n) {
        if (n < 0) {
          index = totalSlides - 1;
        } else if (n >= totalSlides) {
          index = 0;
        } else {
          index = n;
        }

        wrapper.style.transform = `translateX(-${index * 100}%)`;
      }

      function prevSlide() {
        showSlide(index - 1);
      }

      function nextSlide() {
        showSlide(index + 1);
      }
      setInterval(() => {
        nextSlide();
      }, 4000);

      showSlide(index);
      gsap.to(".selection2 h1", {
        transform: "translate(-150% )",
        scrollTrigger: {
          trigger: ".selection2",
          scroller: "body",
          start: "top 0%",
          end: "top -100%",
          scrub: 2,
          pin: true,
        },
      });
      let cursor = document.querySelector(".cursor");

      document.addEventListener("mousemove", (event) => {
        gsap.to(cursor, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.2,
          ease: "power1.out",
        });
      });
