/* Helpers shared by the home page and the collections page.
   Keeping this in one place means a product card looks and
   behaves the same everywhere it appears. */

function formatPrice(n){
  return `$${n.toLocaleString('en-US')}`;
}

function productImageUrl(key){
  return (typeof PRODUCT_IMAGES !== 'undefined' && PRODUCT_IMAGES[key]) || '';
}

/* Fills an .image-slot with either the remote photo (once it has
   loaded) or a monogram placeholder — never a broken image icon. */
function mountArt(slot, product){
  const url = productImageUrl(product.image);
  const fallback = document.createElement('div');
  fallback.className = 'art-fallback';
  fallback.textContent = product.name.charAt(0);
  slot.appendChild(fallback);

  if (!url) return;

  const img = new Image();
  img.alt = product.name;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.className = 'art-photo';
  img.addEventListener('load', () => {
    img.classList.add('loaded');
    fallback.remove();
  });
  img.addEventListener('error', () => { img.remove(); });
  img.src = url;
  slot.appendChild(img);
}

function productCard(product){
  const card = document.createElement('article');
  card.className = 'product-card';

  const visual = document.createElement('div');
  visual.className = 'card-visual image-slot';
  mountArt(visual, product);
  card.appendChild(visual);

  const title = document.createElement('h3');
  title.textContent = product.name;
  card.appendChild(title);

  const descWrap = document.createElement('button');
  descWrap.type = 'button';
  descWrap.className = 'desc-toggle';
  descWrap.setAttribute('aria-expanded', 'false');
  descWrap.setAttribute('aria-label', `Show full description of ${product.name}`);

  const desc = document.createElement('span');
  desc.className = 'desc';
  desc.textContent = product.desc;

  const descIcon = document.createElement('span');
  descIcon.className = 'desc-icon';
  descIcon.textContent = '+';
  descIcon.setAttribute('aria-hidden', 'true');

  descWrap.appendChild(desc);
  descWrap.appendChild(descIcon);

  descWrap.addEventListener('click', () => {
    const expanded = descWrap.classList.toggle('expanded');
    descWrap.setAttribute('aria-expanded', String(expanded));
    descWrap.setAttribute(
      'aria-label',
      expanded
        ? `Hide full description of ${product.name}`
        : `Show full description of ${product.name}`
    );
    descIcon.textContent = expanded ? '−' : '+';
  });

  card.appendChild(descWrap);

  const foot = document.createElement('div');
  foot.className = 'card-foot';

  const price = document.createElement('span');
  price.className = 'price-tag';
  price.textContent = formatPrice(product.price);
  foot.appendChild(price);

  card.appendChild(foot);
  return card;
}
