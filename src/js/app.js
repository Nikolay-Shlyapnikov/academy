let data = [
    {
        ID: 25, 
        NAME: 'Организация'
    },
    {
        ID: 31, 
        NAME: 'Ограничение возвращаемого результата'
    },
    {
        ID: 32, 
        NAME: 'Блокировки в течении дней'
    }
]
let object = {};
console.log(data)
//Внутри цикла строка
for (let i = 0; i < data.length; i++) {
    object[data[i].ID] = data[i].NAME;    
}
console.log(object[25])
