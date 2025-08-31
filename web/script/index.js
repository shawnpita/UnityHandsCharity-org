const slides = [
  {
    headline: "Spreeding Hope",
    subheading: "We raise stories that the world too often ignores.",
    image: "../../images/UNI5528160.JPG.webp"
  },
  {
    headline: "Reaching BrokenHearts",
    subheading: "A mobile classroom reaches its 100th child.",
    image: "../../images/Screenshot (6).png"
  },
  {
    headline: "Unity in Action",
    subheading: "Together we create hope through compassion.",
    image: "../../images/charity hands.jpg"
  },
  {
    headline: "Ophans with a  Dream",
    subheading: "Youth activists in Kenya inspire global change.",
    image: "../../images/UNI5528160.JPG.webp"
  },
  {
    headline: "Give a Hand",
    subheading: "Every donation makes a difference in someone’s life.",
    image: "../../images/Give a hand!.jpg"
  }
];

let index = 0;
const h1 = document.getElementById("hero-slide");

// Add a container for headline + subheading
const textBox = document.createElement("div");
textBox.classList.add("hero-text-box");
h1.appendChild(textBox);

let blobImage = document.createElement("img");
blobImage.classList.add("irregular-image");
h1.appendChild(blobImage);

// Preload images
const preloadImages = slides.map(slide => {
  return new Promise(resolve => {
    const img = new Image();
    img.src = slide.image;
    img.onload = resolve;
  });
});

function updateSlide() {
  const current = slides[index];

  // IMAGE LOGIC
  if (blobImage) {
    const oldImage = blobImage;
    oldImage.classList.remove("show");
    oldImage.classList.add("hide");
    oldImage.addEventListener("animationend", () => {
      oldImage.remove();
    }, { once: true });
  }

  blobImage = document.createElement("img");
  blobImage.classList.add("irregular-image", "show");
  blobImage.src = current.image;
  h1.appendChild(blobImage);

  // TEXT LOGIC
  textBox.innerHTML = `
    <h2 class="hero-headline">${current.headline}</h2>
    <p class="hero-subheading">${current.subheading}</p>
  `;
  textBox.classList.remove("show");
  void textBox.offsetWidth; // restart animation
  textBox.classList.add("show");

  index = (index + 1) % slides.length;
}

Promise.all(preloadImages).then(() => {
  updateSlide();
  setInterval(updateSlide, 10000);
});

// Counter Animation Code
document.addEventListener('DOMContentLoaded', function() {
  // Set the target values for the counters
  const targetValues = [12500, 3500, 480, 42];
  const duration = 2000;
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameDuration);
  
  const counters = [
    document.getElementById('stat1'),
    document.getElementById('stat2'),
    document.getElementById('stat3'),
    document.getElementById('stat4')
  ];
  
  // Check if all counter elements exist
  if (counters.some(counter => !counter)) {
    console.error("One or more counter elements not found");
    return;
  }
  
  let hasAnimated = false;
  
  function animateCounters() {
    if (hasAnimated) return;
    
    hasAnimated = true;
    
    counters.forEach((counter, index) => {
      let frame = 0;
      const target = targetValues[index];
      
      const counterInterval = setInterval(() => {
        frame++;
        
        // Ease out function for smooth deceleration
        const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
        const currentValue = Math.round(target * progress);
        
        counter.textContent = currentValue.toLocaleString();
        
        if (frame === totalFrames) {
          clearInterval(counterInterval);
          counter.textContent = target.toLocaleString(); // Ensure final value is exact
        }
      }, frameDuration);
    });
  }
  
  // Improved viewport detection with threshold
  function isInViewport(element, threshold = 0.5) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calculate visible height of element
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    
    // Check if at least 'threshold' percent of element is visible
    return visibleHeight >= rect.height * threshold;
  }
  
  // Check on scroll and on load
  function checkIfInView() {
    const statsSection = document.querySelector('.stats-container-HPK');
    if (statsSection && isInViewport(statsSection, 0.3)) {
      animateCounters();
      window.removeEventListener('scroll', checkIfInView);
    }
  }
  
  // Add event listeners
  window.addEventListener('scroll', checkIfInView);
  window.addEventListener('load', checkIfInView);
  
  // Initial check
  setTimeout(checkIfInView, 100);
});

 // Review data
        const reviews = [
            {
                name: "James",
                username: "@james",
                body: "I'm at a loss for words. This is amazing. I love it.",
                img: "../../images/Screenshot (6).png"
            },
            {
                name: "Sarah",
                username: "@sarah",
                body: "This product changed my life. Highly recommend!",
                img: "../../images/Life picture.jpg"
            },
            {
                name: "Michael",
                username: "@michael",
                body: "Excellent quality and fast shipping. Will buy again.",
                img: "../../images/Give a hand!.jpg"
            },
            {
                name: "Emily",
                username: "@emily",
                body: "Beautiful design and very functional. Perfect!",
                img: "../../images/UNI5528160.JPG.webp"
            },
            {
                name: "David",
                username: "@david",
                body: "Exceeded my expectations in every way possible.",
                img: "../../images/The Worst Mistake You Don’t Know You’re Making.jpg"
            },
            {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "../../images/Screenshot (6).png"
    },
    {
        name: "Sarah",
        username: "@sarah",
        body: "This product changed my life. Highly recommend!",
        img: "../../images/Life picture.jpg"
    },
    {
        name: "Michael",
        username: "@michael",
        body: "Excellent quality and fast shipping. Will buy again.",
        img: "../../images/Give a hand!.jpg"
    },
    {
        name: "Emily",
        username: "@emily",
        body: "Beautiful design and very functional. Perfect!",
        img: "../../images/UNI5528160.JPG.webp"
    },
    {
        name: "David",
        username: "@david",
        body: "Exceeded my expectations in every way possible.",
        img: "../../images/The Worst Mistake You Don't Know You're Making.jpg"
    }
        ];

        // Create two rows of reviews
        const firstRow = reviews.slice(0, 3);
        const secondRow = reviews.slice(2, 5);

        // Function to create a review card
        function createReviewCard(review) {
            return `
                <div class="review-card-slbm" style="background-image: url('${review.img}');">
                    <div class="review-header-slbm">
                        <img class="avatar-slbm" src="${review.img}" alt="${review.name}" width="32" height="32">
                        <div class="user-info-slbm">
                            <div class="user-name-slbm">${review.name}</div>
                            <div class="user-handle-slbm">${review.username}</div>
                        </div>
                    </div>
                    <blockquote class="review-content-slbm">${review.body}</blockquote>
                </div>
            `;
        }

        // Render the marquees
        function renderMarquees() {
            const firstRowContainer = document.querySelector('.marquee-wrapper-slbm:not(.reverse-slbm)');
            const secondRowContainer = document.querySelector('.marquee-wrapper-slbm.reverse-slbm');
            
            firstRowContainer.innerHTML = firstRow.map(review => createReviewCard(review)).join('');
            secondRowContainer.innerHTML = secondRow.map(review => createReviewCard(review)).join('');
            
            // Duplicate content for seamless looping
            firstRowContainer.innerHTML += firstRow.map(review => createReviewCard(review)).join('');
            secondRowContainer.innerHTML += secondRow.map(review => createReviewCard(review)).join('');
        }

       
      
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            renderMarquees();
            setupThemeToggle();
            
           
            
            // Watch for theme changes
            const observer = new MutationObserver(updateGradientColors);
            observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
            
            // Initial update
            updateGradientColors();
        });