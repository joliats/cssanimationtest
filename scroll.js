gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });

gsap.to(".scaleDown", {
  scale: 0.3, // Zoom out the image
  scrollTrigger: {
    trigger: ".container", // Trigger on the container
    pin: ".container", // Pin the container while scrolling
    scrub: true, // Smooth animation tied to scroll
  },
});
