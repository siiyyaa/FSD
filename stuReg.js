function getStuReg() {
    return document.getElementById('registrationForm');
}

const registrationForm = getStuReg();
const message = document.createElement('p');
message.setAttribute('role', 'status');
registrationForm.appendChild(message);
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordHint = document.createElement('small');
passwordHint.className = 'passwordHint';
passwordHint.textContent = 'Use at least 8 characters.';
password.parentElement.appendChild(passwordHint);

registrationForm.querySelectorAll('input, textarea, select').forEach(function (field) {
    field.addEventListener('input', function () {
        updateFieldState(field);
        if (field === password || field === confirmPassword) {
            updatePasswordState();
        }
    });
});

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    registrationForm.querySelectorAll('input, textarea, select').forEach(updateFieldState);
    updatePasswordState();

    if (!registrationForm.checkValidity() || password.value.length < 8 || password.value !== confirmPassword.value) {
        showMessage('Please correct the highlighted fields.', 'error');
        return;
    }

    const formData = new FormData(registrationForm);
    const student = {
        name: formData.get('name').trim(),
        age: Number(formData.get('age')),
        rollno: formData.get('rollno').trim(),
        email: formData.get('email').trim()
    };

    if (student.age < 3 || student.age > 100) {
        showMessage('Please enter an age between 3 and 100.', 'error');
        return;
    }

    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const rollNumberExists = students.some(function (savedStudent) {
        return savedStudent.rollno.toLowerCase() === student.rollno.toLowerCase();
    });

    if (rollNumberExists) {
        showMessage('That roll number is already registered.', 'error');
        return;
    }

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    showMessage('Student registered successfully.', 'success');
    registrationForm.reset();
    registrationForm.querySelectorAll('.is-valid, .is-invalid').forEach(function (field) {
        field.classList.remove('is-valid', 'is-invalid');
    });
    passwordHint.textContent = 'Use at least 8 characters.';
    passwordHint.style.color = '#63778a';
});

function updateFieldState(field) {
    field.classList.toggle('is-valid', field.checkValidity() && field.value.trim() !== '');
    field.classList.toggle('is-invalid', !field.checkValidity());
}

function updatePasswordState() {
    const strongEnough = password.value.length >= 8;
    const matches = confirmPassword.value !== '' && password.value === confirmPassword.value;
    passwordHint.textContent = strongEnough ? 'Strong password.' : 'Use at least 8 characters.';
    passwordHint.style.color = strongEnough ? '#087443' : '#63778a';
    password.classList.toggle('is-valid', strongEnough);
    password.classList.toggle('is-invalid', password.value !== '' && !strongEnough);
    confirmPassword.classList.toggle('is-valid', matches);
    confirmPassword.classList.toggle('is-invalid', confirmPassword.value !== '' && !matches);
}

function showMessage(text, type) {
    message.textContent = text;
    message.style.color = type === 'error' ? '#b42318' : '#087443';
}