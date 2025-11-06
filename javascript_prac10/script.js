let products = [];

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    renderTable(data, 'fetchTable');
    populateCategories(data);
  });

$.getJSON('products.json', function(data) {
  renderTable(data, 'jqueryTable');
});

function renderTable(data, tableId) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = '';

  data.forEach(p => {
    const row = document.createElement('tr');
    if (p.stock < 5) row.classList.add('low-stock');
    row.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.price}</td>
      <td>${p.stock}</td>
    `;
    tbody.appendChild(row);
  });

  console.log(`Displayed ${data.length} products in ${tableId}`);
}

function populateCategories(data) {
  const categories = [...new Set(data.map(p => p.category))];
  const select = document.getElementById('categoryFilter');
  categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
}

document.getElementById('categoryFilter').addEventListener('change', () => {
  const val = document.getElementById('categoryFilter').value;
  let filtered = val === 'all' ? products : products.filter(p => p.category === val);
  renderTable(filtered, 'fetchTable');
});

document.getElementById('searchBox').addEventListener('input', () => {
  const text = document.getElementById('searchBox').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(text));
  renderTable(filtered, 'fetchTable');
});
