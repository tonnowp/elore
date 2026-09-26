document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const priceMinInput = document.getElementById('priceMin');
  const priceMaxInput = document.getElementById('priceMax');
  const priceForm = document.getElementById('priceForm');
  const priceReset = document.getElementById('priceReset');
  const priceCount = document.getElementById('priceCount');

  const allPrices = products.map(p => p.price);
  const GLOBAL_MIN = Math.min(...allPrices);
  const GLOBAL_MAX = Math.max(...allPrices);

  let currentFam = 'all';
  let currentMin = GLOBAL_MIN;
  let currentMax = GLOBAL_MAX;

  priceMinInput.placeholder = `$${GLOBAL_MIN}`;
  priceMaxInput.placeholder = `$${GLOBAL_MAX}`;

  function renderGrid(){
    grid.innerHTML = '';
    const filtered = products.filter(p =>
      (currentFam === 'all' || p.fam === currentFam) &&
      p.price >= currentMin && p.price <= currentMax
    );

    filtered.forEach(p => grid.appendChild(productCard(p)));

    priceCount.textContent = filtered.length === products.length
      ? `${filtered.length} fragrances`
      : `${filtered.length} of ${products.length} fragrances`;
  }
  renderGrid();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFam = btn.dataset.fam;
      renderGrid();
    });
  });

  priceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const minVal = parseFloat(priceMinInput.value);
    const maxVal = parseFloat(priceMaxInput.value);
    currentMin = isNaN(minVal) ? GLOBAL_MIN : minVal;
    currentMax = isNaN(maxVal) ? GLOBAL_MAX : maxVal;
    if (currentMin > currentMax) [currentMin, currentMax] = [currentMax, currentMin];
    renderGrid();
  });

  priceReset.addEventListener('click', () => {
    priceMinInput.value = '';
    priceMaxInput.value = '';
    currentMin = GLOBAL_MIN;
    currentMax = GLOBAL_MAX;
    renderGrid();
  });
});
