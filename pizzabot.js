const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

let orderQuantity;
let orderName;
let orderTotal;
let inputElement = document.getElementById("svarInput");

function checkOrderName() {
    orderName = inputElement.value;
    inputElement.value = "";

    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni)
     {
        document.getElementById("btn1").style.display = "none"; 
        document.getElementById("btn2").style.display = "inline"; 
        document.getElementById("heading").innerHTML = "How many of " + orderName + " do you want?";
    } else {
        document.getElementById("heading").innerHTML = "The pizza you chose is not rightly spelled, please retry again. You can choose between Vegetarian Pizza, Hawaiian Pizza, and Pepperoni Pizza";
    }
}

function fulFillOrder()
 { 
    orderQuantity = inputElement.value;
    orderQuantity = parseInt(orderQuantity);
    orderTotal = orderQuantity * pizzaPrice;

    document.getElementById("heading").innerHTML = "Great, I'll get started on your " + orderName + " right away. It will cost " + orderTotal + "kr. " + calculateCookTime(orderQuantity);
}

function calculateCookTime(orderQuantity) {
    if (orderQuantity >= 1 && orderQuantity <= 2)
     {
        return "The order will take 10 minutes.";
    } else if (orderQuantity >= 3 && orderQuantity <= 5) 
    {
        return "The order will take 15 minutes.";
    } else { 
        return "The order will take 20 minutes.";
    }
}