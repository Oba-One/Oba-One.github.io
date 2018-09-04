const headerAnimation = anime.timeline();

headerAnimation
  .add({
    targets: '.header__title',
    translateX: [ { value: -780 }, { value: 0 } ],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 1500
  })
  .add({
    targets: '.header__subtitle',
    translateX: [ { value: 780 }, { value: 0 }],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 1500,
    offset: 1250
  })
  .add({
    targets: '.header__subtitle--alt',
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeInQuart',
    duration: 3000,
    offset: 2000

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
    offset: 3200
  })
  .add({
    targets: '.header__subtitle--alt',
    color: [
      {value: '#2c3e50'}, // Or #FFFFFF
      {value: '#ccae62'},
      {value: '#2d98da'},
      {value: '#95afc0'}
    ],
    easing: 'linear',
    direction: 'alternate',
    duration: 3000,
    offset: 4000

  })
  
developerTitleAnimation 


 



 