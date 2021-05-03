import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);

const body = document.querySelector('body');

barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', background)
})

barba.init({
  transitions: [
    {
      name: 'home',
      to: { namespace: ['home'] },
      sync: true,
      once(){},
      leave(data) {},
      enter(data) {},
    }, {
      name: 'clip',
      sync: true,
      to: { namespace: ['tp'] },
      leave(data) {},
      enter(data) { },
    }, {
      name: 'slide',
      sync: true,
      to: { namespace: [''] },
      leave(data) {},
      enter(data) { },
    }
  ]
});

