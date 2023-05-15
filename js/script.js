$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger,.header__list').toggleClass('active');
        // $('body').toggleClass('fixed-page');
    });
});    
$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.header__nav').toggleClass('active');
        // $('body').toggleClass('fixed-page');
    });
});


// Таблист

$(function() {
  var tab = $('#tabs .tabs-items > div'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('#tabs .tabs-nav a').click(function(){
      tab.hide(); 
      tab.filter(this.hash).show(); 
      $('#tabs .tabs-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
  }).filter(':first').click();

  // Клики по якорным ссылкам.
  $('.tabs-target').click(function(){
      $('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
  });
  
  // Отрытие вкладки из хеша URL
  if(window.location.hash){
      $('#tabs-nav a[href=' + window.location.hash + ']').click();
      window.scrollTo(0, $("#" . window.location.hash).offset().top);
  }
});

// Таблист



// Поиск

var input,search,pr,result,result_arr, locale_HTML, result_store;
function func() {
 	locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Первоначальный)
}
setTimeout(func, 1000);  //ждем подгрузки Jsona и выполняем
function FindOnPage(name, status) {
	input = document.getElementById(name).value; //получаем значение из поля в html
	if(input.length<3&&status==true){
		alert('Для поиска вы должны ввести три или более символов');
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	}
	if(input.length>=3){
		function FindOnPageGo() {
			search = '/'+input+'/g';  //делаем из строки регуярное выражение
			pr = document.body.innerHTML;   // сохраняем в переменную весь body
			result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
			result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)
			var warning = true;
			for(var i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}
			if(warning == true) {
				alert('Не найдено ни одного совпадения');
			}
			for(var i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:#137cf0;">'+input+'</span>');
			}
			for(var i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
			document.body.innerHTML = pr;  //заменяем html код
		}
	}
	function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	if(status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
	if(!status) { FindOnPageBack(); } //Снимаем выделение
};

// Поиск
  