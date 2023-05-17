var product_list = [];

const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => {
  const valueEl = card.querySelector(".input-field");
  const plusBtn = card.querySelector(".inc");
  const minusBtn = card.querySelector(".dec");

  let value = 0;

  function add_prodct_count(product_list) {
    count = 0;
    for (var i = 0; i < product_list.length; i++) {
      count += product_list[i][Object.keys(product_list[i])[0]];
    }
    return count;
  }
  function check(prod_list, temp_dict, action) {
    var doesnot_exist = true;
    for (var i = 0; i < prod_list.length; i++) {
      if (Object.keys(prod_list[i])[0] == Object.keys(temp_dict)[0]) {
        if (action == "add") {
          prod_list[i][Object.entries(prod_list[i])[0][0]] =
            parseInt(Object.entries(prod_list[i])[0][1]) + 1;
          console.log(product_list);
          doesnot_exist = false;
        }
        if (action == "sub") {
          prod_list[i][Object.entries(prod_list[i])[0][0]] =
            parseInt(Object.entries(prod_list[i])[0][1]) - 1;
          console.log(product_list);
          doesnot_exist = false;
        }
      }
    }
    if (doesnot_exist && action == "add") {
      product_list.push(temp_dict);
    }
  }
  plusBtn.addEventListener("click", () => {
    value++;
    temp_dict = {};
    temp_dict[card.getElementsByTagName("h5")[0].innerHTML] = value;
    temp_dict["price"] = card
      .getElementsByClassName("list-group-item")[0]
      .innerHTML.replace("Price - ", "");

    check(product_list, temp_dict, "add");

    console.log(product_list);
    document.getElementById("lblCartCount").innerHTML =
      add_prodct_count(product_list);
    valueEl.value = value;
  });

  minusBtn.addEventListener("click", () => {
    if (value > 0) {
      value--;
      temp_dict = {};
      temp_dict[card.getElementsByTagName("h5")[0].innerHTML] = value;
      temp_dict["price"] = card
        .getElementsByClassName("list-group-item")[0]
        .innerHTML.replace("Price - ", "");
      check(product_list, temp_dict, "sub");
      console.log(product_list);
      document.getElementById("lblCartCount").innerHTML =
        add_prodct_count(product_list);
      valueEl.value = value;
    }
  });
});

function dropDownContent() {
  domDropDown = "";
  product_list.forEach((item) => {
    console.log(item);
    var p_type = Object.keys(item)[0];
    var quantity = item[p_type];
    var prod_price = item["price"];
    domDropDown +=
      "<a href=''>" +
      p_type +
      "(" +
      prod_price +
      ")" +
      "*" +
      quantity +
      " = " +
      parseInt(prod_price.replace("₹", "")) * quantity +
      "</a><hr>";
  });
  document.getElementById("myDropdown").innerHTML = domDropDown;
}

function myFunction() {
  document.getElementById("myDropdown").classList;
  dropDownContent();
}
