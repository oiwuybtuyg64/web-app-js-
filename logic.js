function renderList(itemsToRender) {
  listEl.textContent = "";

  for (const item of itemsToRender) {
    const card = document.createElement("div");
    card.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = `${item.title}`;

    const info = document.createElement("p");
    info.textContent = `id=${item.id} | value=${item.value} | status=${item.status} | createdAt=${item.createdAt}`;

    const btnRemove = document.createElement("button");
    btnRemove.textContent = "Удалить";
    btnRemove.dataset.action = "remove";
    btnRemove.dataset.id = String(item.id);

    card.appendChild(h3);
    card.appendChild(info);
    card.appendChild(btnRemove);

    listEl.appendChild(card);
  }
}
                                      
function filterByStatus(items, status) {
  return items.filter(item => item.status === status);
}

function findById(items, id) {
  return items.find(item => item.id === id) || null;
}

function sortByValueDesc(items) {
  const copy = items.slice();
  copy.sort((a, b) => b.value - a.value);
  return copy;
}

function buildStats(items) {
  return items.reduce((acc, item) => {
    acc.totalCount += 1;
    acc.sumValue += item.value;
    if (item.value > acc.maxValue) acc.maxValue = item.value;
    if (item.status === "New") acc.newCount += 1;
    return acc;
  }, { totalCount: 0, sumValue: 0, maxValue: 0, newCount: 0 });
}