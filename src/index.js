module.exports = function toReadable (number) {
  let numbers_arr = [[0, 'zero'], [1, 'one'], [2, 'two'], [3,'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7,'seven'],[8,'eight'],[9,'nine'], [10, 'ten'], [11, 'eleven'], [12, 'twelve'], [13,'thirteen'], [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen'], [20, 'twenty'], [30,'thirty'], [40, 'forty'], [50, 'fifty'],[60, 'sixty'], [70, 'seventy'], [80, 'eighty'], [90, 'ninety']];
    let ost = number % 10;
    let osn = (Math.floor(number / 10)) * 10;
    let ost100 = number % 100;
    let osn100 = Math.floor(number / 100);
    let osn100_10 = 0;
    let ost100_10 = 0;
    for (let i = 0; i < numbers_arr.length; i++){
        if (numbers_arr[i][0] == number) {
            return numbers_arr[i][1];
        } else if (osn == numbers_arr[i][0] && number > 20 && number < 100 && ost != 0) {
            for (let i = 0; i < numbers_arr.length; i++) {
                if (ost == numbers_arr[i][0]) {
                    ost = numbers_arr[i][1]
                }
                if (osn == numbers_arr[i][0]) {
                    osn = numbers_arr[i][1]
                }
            }
            return osn + " " + ost;
        } else if (number >= 100 && ost100 == 0) {
            for (let i = 0; i < numbers_arr.length; i++) {
                if (osn100 == numbers_arr[i][0]) {
                    return numbers_arr[i][1] + ' ' + 'hundred';
                }
            }
            
        } else if (number > 100 && ost100 > 0 && numbers_arr[i][0] == ost100 && ost100 % 10 == 0 ) {
            for (let i = 0; i < numbers_arr.length; i++) {
                if (osn100 == numbers_arr[i][0]) {
                    osn100 = numbers_arr[i][1];
                }
                if (ost100 == numbers_arr[i][0]) {
                    ost100 = numbers_arr[i][1];
                }
            } 
            return (osn100 + ' ' + 'hundred' + ' ' + ost100);
        } else if (number > 100 && ost100 > 0 && numbers_arr[i][0] == ost100) {
            for (let i = 0; i < numbers_arr.length; i++) {
                if (osn100 == numbers_arr[i][0]) {
                    osn100 = numbers_arr[i][1];
                }
                if (ost100 == numbers_arr[i][0]) {
                    ost100 = numbers_arr[i][1];
                }
            } 
            return (osn100 + ' ' + 'hundred' + ' ' + ost100);
        }  else if (number > 100 && numbers_arr[i][0] != ost100 && ost100 > 20 && (ost100 % 10 != 0)){
            for (let i = 0; i < numbers_arr.length; i++) {
                if (osn100 == numbers_arr[i][0]) {
                    osn100 = numbers_arr[i][1];
                }
                if (((Math.floor(ost100 / 10)) * 10) == numbers_arr[i][0]) {
                    osn100_10 = numbers_arr[i][1];
                }
                if ((ost100 % 10) == numbers_arr[i][0]) {
                    ost100_10 = numbers_arr[i][1];
                }
            }
            return (osn100 + ' ' + 'hundred' + ' ' + osn100_10 + ' ' + ost100_10);

        }
    }
}