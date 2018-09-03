const headerAnimation = anime.timeline();

headerAnimation
  .add({
    targets: '.header__title',
    translateX: [ { value: -780 }, { value: 0 } ],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 2000
  })
  .add({
    targets: '.header__subtitle',
    translateX: [ { value: 780 }, { value: 0 }],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 2000,
    offset: 1500
  })
  .add({
    targets: '.header__hr',
    translateY: [ { value: 800 }, { value: 0 } ],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 2000,
    offset: 2000
  })
  .add({
    targets: '.header__social',
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeInOutSine',
    duration: 3000,
    offset: 2700
  })
  



 



 