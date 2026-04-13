const listEl = document.getElementById('list');
const messageEl = document.getElementById('message');

const btnAll = document.getElementById('btnAll');
const btnNew = document.getElementById('btnNew');
const btnSort = document.getElementById('btnSort');
const btnStats = document.getElementById('btnStats');

btnAll.addEventListener('click', function() {
    messageEl.textContent = "";
    renderList(emps);
});

btnNew.addEventListener('click', function() {
    messageEl.textContent = "";
    renderList(filterByStatus(emps, "new"));
});

btnSort.addEventListener('click', function() {
    messageEl.textContent = "";
    renderList(sortByValueDesc(emps));
});

btnStats.addEventListener('click', function() {
    listEl.textContent = "";
    const stats = buildStats(emps);
    messageEl.textContent =
        `Всего записей: ${stats.totalCount}\n` +
        `Сумма value: ${stats.sumValue}\n` +
        `Максимум value: ${stats.maxValue}\n` +
        `Количество status="new": ${stats.newCount}`;
});
