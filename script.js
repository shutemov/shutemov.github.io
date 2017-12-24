 document.addEventListener("DOMContentLoaded", function(event) {
    var board = []
    var X = document.getElementById('button');
   
    X.addEventListener('click' ,()=>{

    var N = document.getElementById("input").value;
    var leftFiledOnPage = document.getElementById("mainElem1");
	var board_on_page = leftFiledOnPage.querySelector(".empty_board");
	board_on_page.innerHTML= "";


	// Реализация алгоритма 
	var index_mass = [];
	var remainder = N%6;
	console.log(remainder);
	for(var i = 2 ; i<=N ;i++)
	{
		if(i%2==0)
			index_mass[index_mass.length] = i
	}

	if(remainder==3)
	{

		index_mass[index_mass.length] = index_mass[0];
		index_mass.splice(0,1);
	}

	for(var i = 1 ; i<=N ;i++)
	{
		if(i%2==1)
			index_mass[index_mass.length] = i
	}


	if(remainder==2)
	{
		one = index_mass.indexOf(1);
		three = index_mass.indexOf(3);
		five = index_mass.indexOf(5);
		index_mass[one] = 3;
		index_mass[three] = 1;

		index_mass[index_mass.length] = index_mass[five];
		index_mass.splice(five,1);

	}
	else if(remainder==3)
	{
		index_mass[index_mass.length] = index_mass[index_mass.indexOf(1)]
		index_mass[index_mass.length] = index_mass[index_mass.indexOf(3)]
		index_mass.splice(index_mass.indexOf(1),1);
		index_mass.splice(index_mass.indexOf(3),1);
	}
	
	for(var i = 0 ; i<N ;i++)
	{
		index_mass[i] -=1;
	}
// конец алгоритма.
	
	

var leftFiledOnPage = document.getElementById("mainElem1");
var board_on_page = leftFiledOnPage.querySelector(".empty_board");
board_on_page.classList.add("Board_with_odd");
board_on_page.innerHTML = "";
for(var i = 0 ; i<N ; i++ )
{
	board[i] = []
}
// тут мы заполняем массив div и расставляем королев. 
 for(var i = 0 ; i<N ; i++ )
 {
	for(var j = 0 ; j<N ; j++ )
	 {
		board[i][j] = document.createElement("div");
	 }
}

	for(var i=0; i< index_mass.length ; i++)
	{
		board[index_mass[i]][i].classList.add("queen");
	}
	

console.log(board);






 //VVVVVVVVVVVVVVVVVVV Отрисовка доски. VVVVVVVVVVVVVVVVVVVV
    if(N%2==1)
    {
		if(N ==0 || N == 1|| N ==2 || N == 3)
		{
		alert("Введите значение больше 3");
	   	return 0;
	    }

	    var leftFiledOnPage = document.getElementById("mainElem1");
	    var board_on_page = leftFiledOnPage.querySelector(".empty_board");
			    
	    board_on_page.classList.add("Board_with_odd");
	    board_on_page.innerHTML = "";

		var width = 40*N + "px";
		var height =40*N + "px";
		board_on_page.style.width = width;
		board_on_page.style.height = height;

		for(var i = 0 ; i<N ; i++ )
		{
		for(var j = 0 ; j<N ; j++)
		   	board_on_page.appendChild(board[i][j]).classList.add("field");
		}

	}
	else
	{
		if(N ==0 || N == 1|| N ==2 || N == 3)
		 {
			alert("Введите значение больше 3");
			return 0;
		 }

		for(var i = 0 ; i<N ; i++ )
	    {
		    for(var j = 0 ; j<N ; j++ )
			{
			board[i][j] = document.createElement("div");
	    	if((i%2==0 && j%2==1) || (i%2==1 && j%2==0))
	   			board[i][j].classList.add("even_field");
	    	else 
		   		board[i][j].classList.add("odd_field");
		    }
	    }

	    var leftFiledOnPage = document.getElementById("mainElem1");
	    var board_on_page = leftFiledOnPage.querySelector(".empty_board");
	    if(board_on_page.classList.contains("Board_with_odd"))
	    {
	    	board_on_page.classList.remove("Board_with_odd");
	    }
	    board_on_page.classList.add("Board_with_even");
	    var width = 40*N + "px";
		var height =40*N + "px";
		board_on_page.style.width = width;
		board_on_page.style.height = height;
		for(var i=0; i< index_mass.length ; i++)
		{
			board[index_mass[i]][i].classList.add("queen");
		}
		for(var i = 0 ; i<N ; i++ )
		{
			for(var j = 0 ; j<N ; j++)
		   		board_on_page.appendChild(board[i][j]).classList.add("field");
		}
	}


//^^^^^^^^^^^^^^^^^^ конец отрисовки доски ^^^^^^^^^^^^^^^^^^^





// ###################   явно индексируем королев через id  #####################
	for(var i =0 ; i <N ; i++)
	{
		if(board[index_mass[i]][i].classList.contains("queen"))
		{
			board[index_mass[i]][i].setAttribute("id",index_mass[i]+"_"+String(i));
		}
	}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




	window.onclick = function(e)
	{
		var elem = e ? e.target : window.event.srcElement;

		if(elem.classList.contains("queen"))
		{
			//по клику мышки по элементу получаем координаты div 
			var codeId = elem.getAttribute("id");
			var coordDiv = codeId.split("_");
			var i = +coordDiv[0], j= +coordDiv[1] ;
	


			//по еще одному клику по королеве помечаем все диагонали подсветкой.
			elem.addEventListener("click",()=>{

			//отрисовка вертикали	
			for(var k = 0 ; k<N;k++)
			{
				board[k][j].classList.toggle("backlight");
			}
			// отрисовка горизонтали
			for(var k = 0 ; k<N;k++)
			{
				board[i][k].classList.toggle("backlight");
			}
			//отрисовка отрицательной диагонали вверх
			for(var k = 1 ; i-k>=0 && j-k>=0 ;k++)
			{
				
				board[i-k][j-k].classList.toggle("backlight");
			}
			//отрисовка отрицательной диагонали вниз
			
			for(var k = 1 ; i+k<N && j+k<N ; k++)
			{
				board[i+k][j+k].classList.toggle("backlight");
			}
			//отрисовка положительной диагонали вверх
			for(var k = 1 ; k<=i && j+k<N ;k++)
			{
				board[i-k][j+k].classList.toggle("backlight");
			}
			//отрисовка положительной диагонали вниз
			for(var k = 1 ; i+k<N && k<=j ;k++)
			{
				board[i+k][j-k].classList.toggle("backlight");
			}
			});
		}
	}

    });

 });