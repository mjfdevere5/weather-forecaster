var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

function getDate (dateNumber) {
	var date = new Date(dateNumber * 1000);
	var day = daysMap[date.getDay()];
	var dateAndMonth = date.getDate() + ' ' + monthsMap[date.getMonth()]
	return day + ', ' + dateAndMonth;
}

export { getDate };