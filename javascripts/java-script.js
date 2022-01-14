
$(document).ready(function(){
	$("div").click(function(){
    	$(this).toggleClass("black");
  });
}); // если класс есть он его добавляет, если нет то убирает
//.ready(function(){ дожидается, что страница прогрузит, и после js будет приступать к своей работе
