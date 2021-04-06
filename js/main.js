let weekRu = ['Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота' , 'Воскресенье'] , 
    weekEng = [' Tuesday' , ' Wednesday' , ' Thursday' , ' Friday' , ' Saturday' , ' Sunday'], 
    lang = prompt ('Введите язык ru или en:');
    
if (lang === 'ru') {
    alert(weekRu);
}else if (lang === 'en') {
    alert(weekEng);
}else {
    alert('Ошибка');
}; 

let namePerson = prompt('Введите имя:'),
    result = namePerson === 'Артем' ? alert('Директор') : 
        (namePerson === 'Максим') ? alert('Преподаватель') : 
        alert ('Студент') ;
