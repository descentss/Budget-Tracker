const budgetData = {
  totalBudget: 5000,
  expenses: [
    { name: "Groceries", amount: 300 },
    { name: "Rent", amount: 1500 },
    { name: "Utilities", amount: 200 },
    // ... other expenses
  ],
  income: [
    { name: "Salary", amount: 4500 },
    { name: "Freelance", amount: 600 },
    // ... other income sources
  ],
};

function updateBudgetDisplay() {
  const budgetDisplay = document.getElementById("budget-display");
  budgetDisplay.textContent = `Total Budget: $${budgetData.totalBudget}`;
}

// Call this function whenever you need to update the budget display
updateBudgetDisplay();

document
  .getElementById("add-expense-button")
  .addEventListener("click", function () {
    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = document.getElementById("expense-amount").value;

    budgetData.expenses.push({
      name: expenseName,
      amount: parseFloat(expenseAmount),
    });
    updateBudgetDisplay();
    // You would also update the part of the UI that shows expenses
  });

function renderExpenses() {
  const expensesList = document.getElementById("expenses-list");
  expensesList.innerHTML = ""; // Clear current list

  budgetData.expenses.forEach((expense) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${expense.name}: $${expense.amount}`;
    expensesList.appendChild(listItem);
  });
}

function saveBudgetData() {
  localStorage.setItem("budgetData", JSON.stringify(budgetData));
}

function loadBudgetData() {
  const savedData = localStorage.getItem("budgetData");
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
}

// On page load
window.onload = function () {
  const loadedData = loadBudgetData();
  if (loadedData) {
    budgetData = loadedData;
    updateBudgetDisplay();
    renderExpenses();
    // render other parts of the budget
  }
};
