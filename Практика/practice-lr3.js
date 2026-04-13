function calcTotal(a, b){
    return a+b;
}
console.log(calcTotal(10, 5));

function formatRecord(id, title, status){
    return `"#${id} ${title} [${status}]"`;
}
console.log(formatRecord(3, "Testing record", 'new'));

const value = [1200, 500, 800, 1500];
let sum = 0;
for (let i = 0; i < value.length; i++){
    sum += value[i];
}
console.log(sum);

const filtered = value.filter(value => value >= 800);
console.log(filtered);

const record = [
    {id: 1, title: "first", value: 1200, status: "new", createdAt: "2026-04-01"},
    {id: 2, title: "second", value: 1000, status: "new", createdAt: "2026-04-02"},
];

console.log(record[0]);

record[0].status = "done";
console.log(record[0]);

function isNew(status){
    if (status === "new"){
        return true;
    } else {
        return false;
    }
}
console.log(isNew(record[0].status));
console.log(isNew(record[1].status));

const testItems = [
    {id: 1, title: "first", value: 1200},
    {id: 2, title: "second", value: 1000},
    {id: 3, title: "third", value: 800},
    {id: 4, title: "forth", value: 600},
];

console.log(testItems.find(testItems => testItems.id === 3) || null);

console.log(testItems.reduce((acc, item) => {
    acc.totalCount += 1;
    acc.sumValue += item.value;
    return acc;
}, {totalCount: 0, sumValue: 0}));