'use strict';

const init = () => {

  const body = document.querySelector('body');

  // header mobile menu
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    navbar.classList.toggle('_visible');
    return;
  });

  //modal window
  const modal = document?.querySelector('.modal');
  const closeButton = document?.querySelector('.modal__close-btn');
  
  setTimeout(() => modal?.classList.remove('hidden'), '100');

  function toggleModal() {
    modal.classList.toggle('_show');
    body.classList.toggle('o-hidden');
  }

  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
      }
  }

  document?.querySelectorAll(".btn-modal").forEach(btn =>
      btn.addEventListener('click', (e) => { 
      toggleModal();
      e.preventDefault();
    })
  )

  closeButton?.addEventListener('click', toggleModal);
  window.addEventListener('click', windowOnClick);


  // toTop button
  const toTopBtn = document.querySelector('.totop');

  window.onscroll = () => {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      toTopBtn.classList.add('_visible');
    } else {
      toTopBtn.classList.remove('_visible');
    }
  }
  
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  });

  // link scroll to 
  document?.querySelectorAll('.scroll-link').forEach(link =>
    link.addEventListener('click', (e) => {
      let hashval = link.getAttribute('href');
      let target = document.querySelector(hashval);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // history.pushState(null, null, hashval);
      e.preventDefault();
    })
  );


  // tabs
  const tabs = document?.querySelectorAll('[data-tab-target]');
  const tabContents = document?.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('_active');
      })
      tabs.forEach(tab => {
        tab.classList.remove('_active');
      })
      tab.classList.add('_active');
      target.classList.add('_active');
    })
  });


  // answer toggle
  document.querySelectorAll(".answer__item").forEach(box =>
    box.addEventListener('click', () => box.classList.toggle('_open'))
  );


  // tags active
  document.querySelectorAll(".tags__item").forEach(tag =>
    tag.addEventListener('click', () => tag.classList.toggle('_active'))
  );

}

if (document.readyState !== 'loading') init()
else document.addEventListener('DOMContentLoaded', init);
