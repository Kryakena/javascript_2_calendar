var theDate = new Date(); //создали дату
var month = new Array();
var days = new Array();

month[1] = "images/Январь.png";
month[2] = "images/Февраль.png";
month[3] = "images/Март.png";
month[4] = "images/Апрель.png";
month[5] = "images/Май.png";
month[6] = "images/Июнь.png";
month[7] = "images/Июль.png";
month[8] = "images/Август.png";
month[9] = "images/Сентябрь.png";
month[10] = "images/Октябрь.png";
month[11] = "images/Ноябрь.png";
month[12] = "images/Декабрь.png";

days[1]="images/1.png";
days[2]="images/2.png";
days[3]="images/3.png";
days[4]="images/4.png";
days[5]="images/5.png";
days[6]="images/6.png";
days[7]="images/7.png";
days[8]="images/8.png";
days[9]="images/9.png";
days[10]="images/10.png";
days[11]="images/11.png";
days[12]="images/12.png";
days[13]="images/13.png";
days[14]="images/14.png";
days[15]="images/15.png";
days[16]="images/16.png";
days[17]="images/17.png";
days[18]="images/18.png";
days[19]="images/19.png";
days[20]="images/20.png";
days[21]="images/21.png";
days[22]="images/22.png";
days[23]="images/23.png";
days[24]="images/24.png";
days[25]="images/25.png";
days[26]="images/26.png";
days[27]="images/27.png";
days[28]="images/28.png";
days[29]="images/29.png";
days[30]="images/30.png";
days[31]="images/31.png";

function printDate() {
    document.write('<img src="' + month[theDate.getMonth()+1]+'">');
    document.write('<br>');
    document.write('<img src="' + days[theDate.getDate()]+'">');
}
printDate();