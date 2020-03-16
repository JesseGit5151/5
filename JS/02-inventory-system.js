//Global Variables
let arrList; //stsring version of the array that will be displayed to the user
let inventoryArr = [
    [2233, "hats", 12, 14.99],
    [3223, "socks", 36, 9.99],
    [4824, "shirt", 10, 15.99],
    [1343, "jeans", 22, 39.99],
    [9382, "jacket", 5, 49.99]
];
let storage;

//Display a title in console along with a command menu that features commands to view all products, update stock, and exit the program. 
function displayMenu() {
    //First display menu
    window.console.log("Welcome to the Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("View All - View all products");
    window.console.log("Update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");


    storage = localStorage;
    
    console.log(storage)
//     localStorage.setItem("arr", inventoryArr);
// var retrievedData = localStorage.getItem("arr");
// console.log(retrievedData.split(','))

// if(inventoryArr.length > 0) {
//     //alphebetizes the array tasks for you as you enter values
//     inventoryArr.sort();
//     //The parameter in .join() is what will break each item in the list
//     //returns the array as a string(to be displayed with a break)
//     var list = inventoryArr.join('\n');
//     console.log(list)
// }
}

//View all stock
function viewStock() {
    // arr[1][2] = '(' + arr[1][2] + ')';
    
    //the array is sorted then turned into a string by join(), then each item is seperated by a new line
    // arrList = arr.sort().join('\n');
    //split turns the string back into an array to delete all the commas, then join() turns it back into a string and adds a space where the commas were 
    // console.log(arrList.split(',').join(' '));
    // console.log(x.replace(","))



    
    for(let i = 0; i < inventoryArr.length; i++) {
                console.log(
                    inventoryArr[i][0] + '\t' + 
                    inventoryArr[i][1] + '\t' + '(' + 
                    inventoryArr[i][2] + ')' + '\t' + ' $' + 
                    inventoryArr[i][3]
                );
            }
        }
    

//Update stock
function updateStock() {
    let sku;
    let quantity;
    sku = parseInt(prompt('Enter a sku number'));
    // console.log(sku)
    quantity = parseInt(prompt('Enter new stock quantity'));
//loop through the array to get the sku numbers from your array
    for(i in inventoryArr) {
        console.log(inventoryArr[i][0])
        if(sku === inventoryArr[i][0]) {
            //arr[i][2] = inventoryArr 
            //See if you can use splice instead
            inventoryArr[i][2] = quantity;
            
        }
    }
    storage.inventoryArr = inventoryArr;
    // localStorage.inventoryArr = inventoryArr.join('|');
    //Will display how the array looks after replacing the quantity
    viewStock();
    
}

window.addEventListener('load', () => {

    displayMenu();
    let command;


while(true) {
    command = prompt('Please enter a command.');
    if (command !== null) {
        if (command === "view") {
            viewStock();
        } else if (command === "update") {
            updateStock();
        } else if (command === "exit") {
            break;
        } else {
            alert("That is not a valid command.");
        }
    } else {
        break;
    }
}

console.log("Program terminated.");

});



// function displayMenu() {

// }


// function view(inventory) {

    
//     for(let i = 0; i < inventory.length; i++) {
//         console.log(
//             inventory[i].sku + '\t' + 
//             inventory[i].product + '\t' + '(' + 
//             inventory[i].quantity + ')' + '\t' + '$' + 
//             inventory[i].cost
//         );
//     }
// }


// function getInventory() {
//     const tshirt = [], jeans = [], jacket = [], hat = [], socks = [];
//     let inventory;

//     tshirt.sku = 101;
//     tshirt.product = 'TShirt';
//     tshirt.quantity = 17;
//     tshirt.cost = 27.99;

//     jeans.sku = 102;
//     jeans.product = 'Jeans';
//     jeans.quantity = 12;
//     jeans.cost = 24.99;
    
//     jacket.sku = 103;
//     jacket.product = 'Jacket';
//     jacket.quantity = 34;
//     jacket.cost = 29.99;

//     hat.sku = 104;
//     hat.product = 'Hats';
//     hat.quantity = 21;
//     hat.cost = 22.39;

//     socks.sku = 105;
//     socks.product = 'Socks';
//     socks.quantity = 60;
//     socks.cost = 10.99;

//     inventory = [tshirt, jeans, jacket, hat, socks];
//     return inventory;
// }

// window.addEventListener('load', () => {
//     let inventory, command;
//     displayMenu();
//     inventory = getInventory();


//     while(true) {
//         command = prompt('Please enter a command.');
//         if (command !== null) {
//             if (command === "show") {
//                 view(inventory);
//             } else if (command === "update") {
//                 updateStock(inventory);
//             } else if (command === "exit") {
//                 break;
//             } else {
//                 window.alert("That is not a valid command.");
//             }
//         } else {
//             break;
//         }
//     }
// })
// left off adding localStorage