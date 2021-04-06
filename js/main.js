let weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    weekEng = [' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday', ' Sunday'],
    lang = prompt('Введите язык ru или en:');


/*Вариант с */
const langArr = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en':[' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday', ' Sunday']
}; 

alert(langArr[lang]);

/* конец варианта - с */

  /*  Вариант решения - b
switch (lang) {
    case 'ru':
        alert(weekRu);
        break;
    case 'en':
        alert(weekEng);
        break;
        default:
            alert('Ошибка');
}
*/

/* Вариант решения - a 
if (lang === 'ru') {
    alert(weekRu);
}else if (lang === 'en') {
    alert(weekEng);
}else {
    alert('Ошибка');
}; 
*/



let namePerson = prompt('Введите имя:'),
    result = namePerson === 'Артем' ? alert('Директор') :
    (namePerson === 'Максим') ? alert('Преподаватель') :
    alert('Студент');