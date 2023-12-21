const loginForm = document.querySelector(".login-form");

const userPass = [
    ['yu123', 'fg123'],
    ['muay123','pi123']
]

const changeColor = (selector) => {
    const el = document.querySelector(selector);
    console.log(el)
    if (el) {
        el.style.border = '1px solid red';
        el.style.bordercolor = 'red';
    }
}

const validateInput = (inputObj) => {
    console.log(inputObj);
    const username = inputObj.username;
    const password = inputObj.password;
    const role = inputObj.role;


    if (username.includes(' ') || password.includes(' ') || role.includes(' ')) {
        alert('กรุณากรอกข้อมูล');
        return false;
    }

    const Use_name = username.trim();
    if (Use_name <=0 || Use_name.includes(' ')) {
        alert('กรุณากรอกข้อมูลของคุณ');
        changeColor('#username');
        return false;
    }
    if ((password.length) <4 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        alert('กรอกPasswordให้มีความยาวมากกว่า 4 ตัว และต้องมีตัวอักษร');
        changeColor('#password');
        return false;
    }

    if (role === '') {
        alert('บอกลักษณะของคุณ');
        changeColor('#role');
        return false;
    }

    puraCheckUseLog(username, password);
    return true
};

const puraCheckUseLog = (username, password) => {
    console.log(username);
    console.log(password);

    let foundItem = userPass.find(([user, pass]) => user === username && pass === password);

    if (foundItem) {
        alert('login Succes');

                 // window.location.assign('https://ww.example.com');
        
    } else {
        alert('Username not found');
    }
}

const hdlLogin = (e) => {
    e.preventDefault();
    let inputObj = {};
    for (let el of loginForm.elements) {
        inputObj[el.id] = el.value;
    }
    validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);