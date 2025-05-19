
document.addEventListener("DOMContentLoaded", function() {

  let jsonDatabase = [{
      "image": "cardtest1.png",
      "backgroundcolor": "#F6EF6E"
    },
    {
      "image": "cardtest2.png",
      "backgroundcolor": "#F9C5C4"
    },
    {
      "image": "cardtest3.png",
      "backgroundcolor": "#91CD97"
    },
    {
      "image": "cardtest4.png",
      "backgroundcolor": "#D85228"
    },
    {
      "image": "cardtest5.png",

      "backgroundcolor": "#9FDAF7"
    },
    {
      "image": "cardtest6.png",

      "backgroundcolor": "#D85228"
  },
    {
      "image": "cardtest7.png",

      "backgroundcolor": "#F9C5C4"
    }

  ];


  for (let i = 0; i < jsonDatabase.length; i++) {
    createElement(jsonDatabase[i]);
  }

  function createElement(incomingJSON) {
    // let newListElement = document.createElement('li');
    // newListElement.classList.add("glide__slide");

    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON['backgroundcolor'];
    newContentElement.classList.add('contentDiv');
    newContentElement.classList.add('swiper-slide');


    let newProjectImage = document.createElement("IMG");
    newProjectImage.classList.add("projectImage");
    newProjectImage.src = incomingJSON['image'];
    newContentElement.appendChild(newProjectImage);


    // newListElement.appendChild(newContentElement);
    document.getElementById('myslides').appendChild(newContentElement);

  }


  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: true,
    },
    coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});
