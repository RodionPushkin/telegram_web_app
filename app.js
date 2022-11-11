let tg = window.Telegram.WebApp; //получаем объект webapp телеграма
console.log(tg);
tg.expand(); //расширяем на все окно

// tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
// tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
// tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
// tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
// tg.MainButton.setParams({ "color": "#143F6B" }); //так изменяются все параметры
// btn.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
//   if (tg.MainButton.isVisible) { //если кнопка показана
//     tg.MainButton.hide() //скрываем кнопку
//   }
//   else { //иначе
//     tg.MainButton.show() //показываем
//   }
// });
// let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
// btnED.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
//   if (tg.MainButton.isActive) { //если кнопка показана
//     tg.MainButton.setParams({ "color": "#E0FFFF" }); //меняем цвет
//     tg.MainButton.disable() //скрываем кнопку
//   }
//   else { //иначе
//     tg.MainButton.setParams({ "color": "#143F6B" }); //меняем цвет
//     tg.MainButton.enable() //показываем
//   }
// });
// Telegram.WebApp.onEvent('mainButtonClicked', function () {
//   tg.sendData("some string that we need to send");
//   tg.close()
//   //при клике на основную кнопку отправляем данные в строковом виде
// });
// let usercard = document.getElementById("usercard"); //получаем блок usercard
//
// let profName = document.createElement('p'); //создаем параграф
// profName.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}
// ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
// //выдем имя, "фамилию", через тире username и код языка
// usercard.appendChild(profName); //добавляем
//
// let userid = document.createElement('p'); //создаем еще параграф
// userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
// usercard.appendChild(userid); //добавляем
// tg.MainButton.enable()
let timer = undefined
document.getElementById('search').addEventListener('input',({target})=>{
    let text = String(target.value).slice(0,200)
    document.getElementById('search').value = text
    if(!timer) clearTimeout(timer);
    timer = setTimeout(() => {
        fetch(`https://api.hh.ru/vacancies?no_magic=true&L_save_area=true&text=${text}&excluded_text=vue&professional_role=156&professional_role=160&professional_role=10&professional_role=12&professional_role=150&professional_role=25&professional_role=165&professional_role=34&professional_role=36&professional_role=73&professional_role=155&professional_role=96&professional_role=164&professional_role=104&professional_role=157&professional_role=107&professional_role=112&professional_role=113&professional_role=148&professional_role=114&professional_role=116&professional_role=121&professional_role=124&professional_role=125&professional_role=126&area=1&currency_code=RUR&experience=noExperience&employment=full&employment=part&employment=project&employment=probation&order_by=relevance&search_period=1&items_on_page=100`)
            .then(response => response.json()).then((data) => {
                document.getElementById('container').innerHTML += `<p>${data}</p>`
            });
    }, 700);
})
