/* Homepage shows only a preview: the first FEATURED_COUNT
   fragrances. The full catalogue lives in collections.html. */

const FEATURED_COUNT = 4;

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  products.slice(0, FEATURED_COUNT).forEach(p => grid.appendChild(productCard(p)));
});
