//формуємо список користувачівб також кнопки
function infoList() {
    let container = document.createElement(`div`);
    container.className = `container`;
    for (let n = 0; n < data.length; n++) {

        let el = document.createElement(`div`);
        el.innerText = data[n];
        el.className = `user`;
        container.appendChild(el);
        let un = document.createElement(`button`);
        un.innerText = `view`;
        un.className = `btn1`;
        container.appendChild(un);
        let em = document.createElement(`button`);
        em.innerHTML = `edit`;
        em.className = `btn2`;
        container.appendChild(em);
        let um = document.createElement(`button`);
        um.innerHTML = `remove`;
        um.className = `btn3`;
        container.appendChild(um);
    }

    document.body.append(container);
}
//форма для додавання нових користувачів
function allOrders() {
    let el = document.getElementById(`myForm`);
    el.style.display = `block`;

    let btn = document.getElementById(`button`);
    btn.addEventListener(`click`, validaForm);
}
//валідація нових користувачів
function validaForm() {
    let name = document.getElementById(`name`).value;
    let num = "[a-zA-Z]+";
    let e = name.match(num);
    if (e == null || e == ` `) {
        alert(`ввели невірне ім'я`);
        return;
    }
    let login = document.getElementById(`login`).value;
    if (login == `` || login == null) {
        alert(`ввели невірний логін`);
        return;
    }
    let passw = document.getElementById(`passw`).value;
    let passw1 = document.getElementById(`passw1`).value;
    let epas = /^[a-zA-Z0-9]+/;
    let ep = passw.match(epas);
    if (passw != passw1 || passw == "") {
        alert(`Паролі не совпадають`)
        return
    };
    if (ep == null) {
        alert('пароль невірний');
        return;
    }

    let post = document.getElementById(`email`).value;
    let epost = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let es = post.match(epost);
    if (post == `` || es == null) {
        alert(`ввели невірну електронну адресу`);
        return;
    };
    let age = document.getElementById(`age`).value;
    if (age == `` || age <= 0) {
        alert(`введіть ваш вік`);
        return;
    };
    let phonNum = document.getElementById(`phonnumber`).value;
    let fN = /^\d+$/;

    let el = phonNum.match(fN);
    if (phonNum == "" || el == null) {
        alert(`ввели невірний формат телефону`);
        return;
    }
    let cardNum = document.getElementById(`cardnumber`).value;
    let cN = /[0-9]{13,16}/;
    let dN = cardNum.match(cN);
    if (dN == null || cardNum == "") {
        alert(`ввели невірний формат картки`);
        return;
    }
    dataUser()
};
//виводимо інформацію по користувачю
function dataUser() {
    let arrAll = [];
    let arrUser = [];
    document.getElementById(`myForm`).style.display = `none`;


    let inn = document.createElement(`div`);
    inn.className = `records`;
    inn.style.display = `block`;


    let name = document.getElementById(`name`).value;
    console.log(name);
    let login = document.getElementById(`login`).value;
    console.log(login);
    // let passw = document.getElementById(`password`).value;
    // console.log(passw);
    let post = document.getElementById(`email`).value;
    console.log(post);
    let age = document.getElementById(`age`).value;
    let phonNum = document.getElementById(`phonnumber`).value;
    console.log(phonNum);
    let cardNum = document.getElementById(`cardnumber`).value;
    console.log(cardNum);

    let record = `ім'я` + ' ' + name + `</br>` +
        `Логин ` + ' ' + login + `</br>` +
        `Електронна адреса` + ` ` + post + `</br>` +
        `Вік` + ` ` + age + `</br>` +
        `Номер телефона` + ` ` + phonNum + `</br>` +
        `Номер банків.картки` + ` ` + cardNum + `</br>`;
    inn.innerHTML = record;
    console.log(record);
    document.body.append(inn);
    let iNN = document.createElement(`div`);
    iNN.className = `name`;
    iNN = `Ім'я користувача` + ' ' + name;
    document.body.append(iNN);
    // S.appendChild(inn);
    arrAll.push(record);
    console.log(arrAll);
    arrUser.push(iNN);
    document.getElementById(`but1`).addEventListener(`click`, function () {
        for (let i = 1; i < arrAll.length + 1;) {
            localStorage.setItem(`id` + i, arrAll[i])
            console.log(`id` + i, arrAll[i]);
            i++;
        }
    }),
        arrAllUser = [];
    arrAllUser.length = arrAll.length;
    for (let i = 0; i < arrAllUser.length; i++) {
        let allUs = localStorage.getItem(`id` + i);
        arrAllUser.push(allUs);
    }
    infoList(arrAllUser);
}
infoList();