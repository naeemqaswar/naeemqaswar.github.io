/**
 * Template Name: MyPortfolio - v4.1.0
 * Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * burgerMenu
   */
  const burgerMenu = select(".burger");
  on("click", ".burger", function (e) {
    burgerMenu.classList.toggle("active");
  });

  /**
   * Porfolio isotope and filter
   */
  var portfolioIsotope;
  var portfolioFilters;
  var projectsObserver = new MutationObserver(function (mutationList, obsrvr) {
    var targetElem = document.querySelector("#portfolio-grid .item"); //get div by class
    let portfolioItemsInDOM = document.getElementsByClassName(
      "#portfolio-grid .item"
    ).length;
    if (targetElem) {
      setupPortfolioFilters();

      obsrvr.disconnect(); // stop observing
      return;
    }
  });
  var parentElement = document; // if not sure about parent div then just use whole 'document'

  // projectsObserver.observe(parentElement, {
  //   childList: true,
  //   subtree: true,
  // });

  function setupPortfolioFilters() {
    let _directFilterRequest = getParameterByName("tech");
    let portfolioContainer = select("#portfolio-grid");

    if (portfolioContainer) {
      portfolioFilters = select("#filters a", true);
      portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".item",
      });

      if (_directFilterRequest) {
        filterPortfolioItems(`.${_directFilterRequest}`);
      }

      on(
        "click",
        "#filters a",
        function (e) {
          e.preventDefault();

          filterPortfolioItems(this.getAttribute("data-filter"));
        },
        true
      );
    }
  }

  function filterPortfolioItems(filter) {
    portfolioFilters.forEach(function (el) {
      el.classList.remove("active");
    });

    select(`#filters a[data-filter="${filter}"]`).classList.add("active");

    portfolioIsotope.arrange({ filter });
    portfolioIsotope.on("arrangeComplete", function () {
      AOS.refresh();
    });
  }

  function getParameterByName(name, url = window.location.href) {
    if (!name) return;

    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
