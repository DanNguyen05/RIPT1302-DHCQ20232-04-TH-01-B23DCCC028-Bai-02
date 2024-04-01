let students = [];
let loggedIn = false;

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        loggedIn = true;
        document.querySelector(".login-container").classList.add("hidden");
        document.querySelector(".admin-container").classList.remove("hidden");
        displayStudents();
    } else {
        document.getElementById("error-message").textContent = "Tài khoản hoặc mật khẩu không chính xác";
    }
}

function displayStudents() {
    let tbody = document.querySelector("#student-table tbody");
    tbody.innerHTML = "";

    students.forEach((student, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.address}</td>
                <td>${student.phone}</td>
                <td>${student.email}</td>
                <td>${student.class}</td>
                <td>
                    <button onclick="editStudent(${index})">Sửa</button>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}



function showAddStudentForm() {
    clearFields();
    document.getElementById("name").disabled = false;
    document.getElementById("age").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("class").disabled = false;

    document.getElementById("name").focus();
}


function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let studentClass = document.getElementById("class").value;

    if (name && age && address && phone && email && studentClass) {
        let student = {
            name,
            age,
            address,
            phone,
            email,
            class: studentClass
        };

        students.push(student);
        clearFields();
        displayStudents();
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}


let selectedStudentIndex = null; 

function showAddStudentForm() {
    clearFields();
    document.querySelector(".add-student-form").classList.remove("hidden");
    document.getElementById("name").disabled = false;
    document.getElementById("age").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("class").disabled = false;

    document.getElementById("name").focus();
}

function hideAddStudentForm() {
    document.querySelector(".add-student-form").classList.add("hidden");
    clearFields();
}

function addStudent() {
    hideAddStudentForm();  
}


function addOrUpdateStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let studentClass = document.getElementById("class").value;

    if (name && age && address && phone && email && studentClass) {
        let student = {
            name,
            age,
            address,
            phone,
            email,
            class: studentClass
        };

        if (selectedStudentIndex !== null) {  
            students[selectedStudentIndex] = student;
            selectedStudentIndex = null;  
        } else { 
            students.push(student);
        }

        clearFields();
        displayStudents();
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}

function editStudent(index) {
    let student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("address").value = student.address;
    document.getElementById("phone").value = student.phone;
    document.getElementById("email").value = student.email;
    document.getElementById("class").value = student.class;

    selectedStudentIndex = index;  
}


function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("class").value = "";
}

// ... (phần code cũ)

function isValidName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}

function isValidAge(age) {
    return !isNaN(age) && age > 0 && age < 150;  
}

function isValidPhone(phone) {
    const regex = /^[0-9]{10,11}$/;
    return regex.test(phone);
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function addOrUpdateStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let studentClass = document.getElementById("class").value;

    if (
        isValidName(name) &&
        isValidAge(age) &&
        address.trim() !== "" &&
        isValidPhone(phone) &&
        isValidEmail(email) &&
        studentClass.trim() !== ""
    ) {
        let student = {
            name,
            age,
            address,
            phone,
            email,
            class: studentClass
        };

        if (selectedStudentIndex !== null) {
            students[selectedStudentIndex] = student;
            selectedStudentIndex = null;
        } else {
            students.push(student);
        }

        clearFields();
        displayStudents();
    } else {
        alert("Vui lòng nhập đúng định dạng thông tin.");
    }
}

