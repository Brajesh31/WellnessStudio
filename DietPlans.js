const openPopupBtn = document.getElementById('my-account-btn');
const closePopupButton = document.getElementById('closePopupButton');
const signIn = document.getElementById('signIn');

openPopupBtn.addEventListener('click', () => {
    signIn.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    signIn.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === signIn) {
        signIn.style.display = 'none';
    }
});

const mealSelect = document.getElementById('meal-select');
const mealItems = document.getElementById('meal-items');
const quantityContainer = document.querySelector('.quantity-container');
const addItemButton = document.getElementById('add-item');
const totalCaloriesElement = document.getElementById('total-calories');

const mealData = {
    breakfast: [
        { name: 'Idli (2 pieces)', calories: 150 },
        { name: 'Dosa-Mid size', calories: 170},
        { name: 'Upma(1 bowl)', calories:250},
        { name: 'Alo-Paratha', calories:210},
        { name: 'Poha(1 bowl)', calories:180},
        { name: 'Tea(1-cup)', calories:100},
        { name: 'Coffee', calories:90},
        { name: 'Upma(1 bowl)', calories:250},
        { name: 'Thepla', calories:120},
        { name: 'Upma(1 bowl)', calories:250},
        { name: 'Omlette(2-eggs)', calories:140},
        { name: 'Upma(1 bowl)', calories:250},
        { name: 'Bread Slice', calories:70},
        { name: 'Oat-Upma(1 bowl)', calories:200}
    ],
    lunch: [
        { name: 'Chapati/Roti', calories:70},
        { name: 'Rice Bowl', calories:200},
        { name: 'Dal', calories:150},
        { name: 'Pulao/Biryani', calories:300},
        { name: 'Palak Paneer', calories:300},
        { name:  'Aloo Gobi', calories:300},
        { name: 'Bhindi masala', calories:300},
        { name: 'Baingan Bharta', calories:300},
        { name:  'Panner Masala', calories:350},
        { name:  'Rajma', calories:230},
        { name:  'Mixed veg curry', calories:200},
        { name:  'Koshimbir/Salad', calories:120},
        { name:  'Chicken-Curry', calories:300}
    ],
    snacks: [
        { name: 'Yogurt', calories: 150 },
        { name: 'Nuts',calories:100},
        { name: 'Samosa',calories: 200 },
        { name: 'Papdi-chat',calories:150},
        { name: 'Frankie',calories: 300 },
        { name: 'Vadapav',calories: 250},
        { name: 'Wafers(1oz)',calories:170},
        { name: 'Tea',calories:100},
        { name: 'Coffee',calories:90},
    ],
    dinner: [
        { name: 'Chapati/Roti', calories:70},
        { name: 'Rice Bowl', calories:200},
        { name: 'Dal', calories:150},
        { name: 'Pulao/Biryani', calories:300},
        { name: 'Palak Paneer', calories:300},
        { name:  'Aloo Gobi', calories:300},
        { name: 'Bhindi masala', calories:300},
        { name: 'Baingan Bharta', calories:300},
        { name:  'Panner Masala', calories:350},
        { name:  'Rajma', calories:230},
        { name:  'Mixed veg curry', calories:200},
        { name:  'Koshimbir/Salad', calories:120},
        { name:  'Chicken-Curry', calories:300},
        { name:  'Dal-Khichadi', calories:250}
    ]
    };

let selectedMeal = '';
let selectedItem = '';
let selectedCalories = 0;
let selectedQuantity = 1;

mealSelect.addEventListener('change', function() {
    selectedMeal = this.value;
    if (selectedMeal) {
        populateMealItems(mealData[selectedMeal]);
        mealItems.style.display = 'block';
    } else {
        mealItems.style.display = 'none';
        quantityContainer.style.display = 'none';
        addItemButton.style.display = 'none';
    }
});

mealItems.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    selectedItem = selectedOption.text;
    selectedCalories = parseInt(selectedOption.getAttribute('data-calories'), 10);
    if (selectedItem) {
        quantityContainer.style.display = 'flex';
        addItemButton.style.display = 'block';
    } else {
        quantityContainer.style.display = 'none';
        addItemButton.style.display = 'none';
    }
});

document.getElementById('quantity-minus').addEventListener('click', function() {
    if (selectedQuantity > 1) {
        selectedQuantity--;
        document.getElementById('quantity').value = selectedQuantity;
    }
});

document.getElementById('quantity-plus').addEventListener('click', function() {
    selectedQuantity++;
    document.getElementById('quantity').value = selectedQuantity;
});

addItemButton.addEventListener('click', function() {
    if (selectedMeal && selectedItem) {
        addItemToMeal(selectedMeal, selectedItem, selectedCalories, selectedQuantity);
        updateTotalCalories(selectedCalories * selectedQuantity);
    }
});

function populateMealItems(items) {
    mealItems.innerHTML = '<option value="">Select an item</option>';
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.text = item.name;
        option.setAttribute('data-calories', item.calories);
        mealItems.appendChild(option);
    });
}

function addItemToMeal(meal, item, calories, quantity) {
    const mealList = document.getElementById(`${meal}-list`);
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${item} - ${calories * quantity} calories 
        <button class="remove-button" onclick="removeItem(this, ${calories * quantity})">x</button>
    `;
    listItem.setAttribute('data-calories', calories * quantity);
    mealList.appendChild(listItem);
}

function removeItem(button, calories) {
    const listItem = button.parentElement;
    listItem.parentElement.removeChild(listItem);
    updateTotalCalories(-calories);
}

function updateTotalCalories(caloriesChange) {
    let totalCalories = parseInt(totalCaloriesElement.textContent, 10);
    totalCalories += caloriesChange;
    totalCaloriesElement.textContent = totalCalories;
}