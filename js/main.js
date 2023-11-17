window.addEventListener('load', () => {
  find('head title').innerHTML = "白耶";
  let header_el = find('header');
  if(header_el) {
    get('/baiyeh/header.html').then(res => {
      header_el.innerHTML = res;
      let item_el = find(header_el, `[href="${location.pathname}"]`);
      if(item_el) {
        item_el.classList.add('active');
        item_el.removeAttribute('href');
      }
    });
  }
});
