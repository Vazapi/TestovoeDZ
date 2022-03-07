"use strict";

function getDayInfo(data) {
  if (data != null && data != "" && data.length === 10 ) {
    const newDataArr = data.split("."); // разбиваем вход строку на массив

    const day = +newDataArr[0] ; // получаем день из масс

    const numWeek = Math.ceil(day/7);  // получаем неделю

    const month = +newDataArr[1]-1; // получаем месяц

    const year = +newDataArr[2]; // получаем год

    const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
    const veryficateDate = new Date(year, month, day); // получаем дату на основании получ переменных
    const dateRu = veryficateDate.toLocaleDateString("ru-RU", options); // преобразуем в дату RU 
    const newRuArr = dateRu.split(' '); // разбиваем эту строку на массив
    
    const yearData = veryficateDate.getFullYear(); // год из даты

    const itogStr = (`${newRuArr[0]} ${numWeek} неделя ${newRuArr[2]} ${yearData}года`); // итоговый вывод
    
    return itogStr;
  }
  else {return 'Введите правильное значение(дд.мм.гггг)';}
}

let str = getDayInfo('01.02.2022');
console.log(str);








