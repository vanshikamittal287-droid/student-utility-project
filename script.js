// Function 1: Add a new subject input row dynamically
function addSubjectRow() {
    const subjectList = document.getElementById("subject-list");

    const newRow = document.createElement("div");
    newRow.className = "subject-row";

    newRow.innerHTML = `
        <input type="text" placeholder="Subject Name" class="sub-name">
        <input type="number" placeholder="Credits" class="credits" min="1" max="10">
        <select class="grade">
            <option value="10">O (10)</option>
            <option value="9">A+ (9)</option>
            <option value="8">A (8)</option>
            <option value="7">B+ (7)</option>
            <option value="6">B (6)</option>
            <option value="5">C (5)</option>
            <option value="0">F (0)</option>
        </select>
    `;

    subjectList.appendChild(newRow);
}

// Function 2: Calculate SGPA using basic loops and arithmetic
function calculateSGPA() {
    const creditsList = document.getElementsByClassName("credits");
    const gradesList = document.getElementsByClassName("grade");

    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < creditsList.length; i++) {
        let credit = parseFloat(creditsList[i].value);
        let grade = parseFloat(gradesList[i].value);

        // Only calculate rows where credits have been entered
        if (!isNaN(credit) && credit > 0) {
            totalCredits += credit;
            totalPoints += (credit * grade);
        }
    }

    if (totalCredits === 0) {
        alert("Please enter valid credits for at least one subject!");
        return;
    }

    let sgpa = totalPoints / totalCredits;

    // Display result rounded to 2 decimal places
    const resultBox = document.getElementById("gpa-result");
    resultBox.innerHTML = `Your SGPA: <span>${sgpa.toFixed(2)}</span> (Total Credits: ${totalCredits})`;
}

// Function 3: Add a new task to the To-Do list
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please write a task first!");
        return;
    }

    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Done</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear the input box
}

// Function 4: Remove a completed task
function removeTask(buttonElement) {
    const listItem = buttonElement.parentElement;
    listItem.remove();
}
