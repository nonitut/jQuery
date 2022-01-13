$(document).ready(function() { //пишем прогрузку, чтоб точно все прогрузилось в оперативную память, поочередно читает, чтоб смог найти и прочитать
console.log( 'готов!' );
}); // Мы говорим: прогрузи документ с функцией, в консоль и отобрази готово
$(document).ready(function() {
  $("#demo").html("Hello, World!");
});
  // в документе html мы находим функцию, с айди #demo и передаем через html  слово Hello, World!, то есть текст написан в js
  //сначала нашли айди которое заранее написали, потом функцию написали, html("Hello, World!") - можем написать переменную в  js
  //внимательно следите за скобками
  //.ready(function(){ дожидается, что страница прогрузит, и после js будет приступать к своей работе

    $(document).ready(function(){
      $("div").click(function(){
        $(this).addClass("black");
      });
    }); // при клике на див наша функция начинает работать - меняет цвет на черный

    $(document).ready(function(){
	     $(".blue").click(function(){
		       $(this).css("background-color","orange");
	});
});
// ".blue" - не забудьте точку поставить , указать что это класс
$(document).ready(function(){
   $(".mel").click(function(){
       $(".ril").css("background-color","pink");
});
});

$(document).ready(function(){
	$("div").click(function(){
		$(this).css({
			width: function(index, value) {
				return parseFloat (value) +100; // можно *1.1; можно писать если опр значение
			}
		});
	});
});
//добавление объема к заданному значению width

$(document).ready(function(){
	$("div").click(function(){
    	$(this).toggleClass("black");
  });
}); // если класс есть он его добавляет, если нет то убирает
