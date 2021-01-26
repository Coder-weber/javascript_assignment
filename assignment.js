// https://github.com/Coder-weber/javascript_assignment
function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
      return "please kilometer is greater than 0";
    }
    return kilometer * 1000;
  }
  
  // budget value watch=50,phone=100,laptop=500
  function budgetCalculator(watch, phone, laptop) {
    if (watch <= 0 || phone <= 0 || laptop <= 0) {
      return "please three parameter is greater than 0";
    } else {
      return watch * 50 + phone * 100 + laptop * 500;
    }
  }
  
  // hotel value day=1-10=100,11-20=80,21-=50
  function hotelCost(day) {
    if (day <= 0) {
      return "please day is not negative value";
    }
    if (day <= 10) {
      return day * 100;
    } else if (day > 10 && day <= 20) {
      var firstCondition = 10 * 100;
      var remain = day - 10;
      var seceondCondition = remain * 80;
      var total = firstCondition + seceondCondition;
      return total;
    } else {
      var firstCondition = 10 * 100;
      var seceondCondition = 10 * 80;
      var remain = day - 20;
      var thirdCondition = remain * 50;
      var total = firstCondition + seceondCondition + thirdCondition;
      return total;
    }
  }
  
  var result=hotelCost(21);
  console.log(result);
  function megaFriend(friend_name) {
    var fix_name = friend_name[0];
    for (var i = 0; i < friend_name.length; i++) {
      var element = friend_name[i];
      if (fix_name.length < element.length) {
        fix_name = element;
      }
    }
    return fix_name;
  }