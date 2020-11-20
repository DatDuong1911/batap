var arr = [{
            name: "nodemy",
            age: '2020'
        },
        {
            name: "Thái Hà",
            age: "2016"
        }, {
            name: "Thái",
            age: "2040"
        }
    ]
    //in ra mảng chỉ chứa thuộc tính name
var name = arr.map(function(item) {

    return { name: item = item.name }
})
console.log(name);
console.log("==================================================");

//in ra mảng chỉ chứa thuộc tính name
var nameUp = arr.map(function(item1) {
    item1 = item1.name.toUpperCase()
    return { name: item1 }
})
console.log(nameUp);
console.log("==================================================");

//in ra name và thuộc tính mới là day: ngày hôm nay
var nameDay = arr.map(function(item1, item2) {
    item1 = item1.name
    item2 = new Date()
    return { name: item1, day: item2 }
})
console.log(nameDay);
console.log("==================================================");

//

//kiểm tra xem ngày hôm nay có lớn hơn 9999999999


function kiemTra() {
    var day = new Date()
    day.setMilliseconds(999)
    if (day > 9999999999) {
        console.log("Ngày hôm nay lớn hơn 9999999999");
    } else {
        console.log("Ngày hôm nay nhỏ hơn 9999999999");
    }
}
console.log(kiemTra());
console.log("==================================================");
// nhập số tháng in ra ngày tương ứng
var x = 12
switch (x) {
    case 1, 3, 5, 7, 8, 10, 12:
        console.log("Tháng có 31 ngày");
        break;
    case 4, 6, 9, 11:
        console.log("Tháng có 30 ngày");
        break;
    case 2:

        console.log("Tháng có 28 ngày");
        break;
    default:
        console.log("Nhập tháng từ 1 đến 12");
        break
}