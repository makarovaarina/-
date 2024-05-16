/*-------считывание текущей даты--------*/
currentDate = new Date()
/*переменная цикла*/
let i
/*цикл дат, если переменная меньше 6 цикл будет выполняться и переменная увел на 1*/
for (i = 0; i < 6; i++){
  /*считывание текущей даты*/ 
  date = currentDate.getDate()+i
  /*считывание текущего дня недели*/
  weekday = currentDate.getDay()+i
  /*если день недели больше 6, то он отнимает 7 дней , 0 воскр, возвращение недели*/
  if (weekday>6){
    weekday -=7
  } 
  /* проверка день неделей*/
  if (weekday == 1){   /*если 1 - это понедельник*/
    weekday = "Понедельник"
  }
  else if (weekday == 2){ /*иначе - это вторник и т.д.*/
    weekday = "Вторник"
  }
  else if (weekday == 3){
    weekday = "Среда"
  }
  else if (weekday == 4){
    weekday = "Четверг"
  }
  else if (weekday == 5){
    weekday = "Пятница"
  }
  else if(weekday == 6){
    weekday = "Суббота"
  }
  else if(weekday == 0){
      weekday = "Воскресенье"
  }
  /*переменная p_nav_dayweek принимает значение дня недели */
  document.getElementById("p_nav_dayweek"+[i+1]).textContent = weekday
  /*принимает заннчение даты*/
  document.getElementById("p_nav_daynumber"+[i+1]).textContent = date
}
