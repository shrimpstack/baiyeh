window.addEventListener('load', () => {
  find('head title').innerHTML = "白耶設定整理";
  new_el_to_el('head', 'link', {
    rel: 'icon',
    href: '/baiyeh/favicon.png',
    type: 'image/png',
  });
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
  create_pop_img();
});

function create_pop_img() {
  window.El_pop_img_view = new_el_to_el('body', 'div#pop_img.pop_mask.hidden');
  El_pop_img_view.innerHTML = `
    <div>
      <img onclick="this.classList.toggle('big')"/>
    </div>
  `;
  window.El_pop_img = find(El_pop_img_view, 'img');
  El_pop_img_view.addEventListener('click', event => {
    if(event.target.matches('#pop_img, #pop_img > div')) {
      El_pop_img_view.classList.add('hidden');
    }
  });
  window.addEventListener('click', event => {
    if(!event.target.matches('img.click_img')) return;
    El_pop_img_view.classList.remove('hidden');
    El_pop_img.src = event.target.src;
    El_pop_img.classList.remove('big');
  });
}