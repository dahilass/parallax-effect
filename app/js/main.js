gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (!ScrollTrigger.isTouch) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true,
  });

  gsap.fromTo(
    '.header',
    { opacity: 1 },
    {
      opacity: 0.3,
      scrollTrigger: {
        trigger: '.header',
        start: 'end',
        scrub: true,
      },
    }
  );

  const itemsL = gsap.utils.toArray(
    '.portfolio__gallery_left .portfolio__item'
  );

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -50, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-800',
          end: '-200',
          scrub: true,
        },
      }
    );
  });

  const itemsR = gsap.utils.toArray(
    '.portfolio__gallery_right .portfolio__item'
  );

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-800',
          end: '-200',
          scrub: true,
        },
      }
    );
  });
}
