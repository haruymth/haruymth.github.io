function getAge(year, month, day){
  // 生年月日
  var birthday  = new Date(y, m-1, d);
  // 今日の日付を取得
  var today = new Date();
  // 今年の誕生日を計算
  var thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());  
  
  // 今年から生年月日の年を引く
  var age = today.getFullYear() - birthday.getFullYear();
  
  //今年の誕生日を迎えていなければ age-1 を返す
  return (today < thisYearBirthday) ? age-1 : age;
}

var myAge = function getAge(2009,3,1);

document.getElementById("age").value = "日本在住"+myAge+"才";
