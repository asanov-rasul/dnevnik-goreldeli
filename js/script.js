const btn = document.querySelector('.login'),
      inputLogin = document.querySelector('.input_login'),
      inputPassword = document.querySelector('.input_password'),
      errorPassword = document.querySelector('.error_password'),
      passwordOpenIcon = document.querySelector('.password_open'),
      passwordCloseIcon = document.querySelector('.password_close');


const objParents = {
    main: {
        login: 'camp',
        password: 'goreldeli'
    },
    SadykovSelim: {
        login: 'SadykovSelim',
        password: 'goreldeli'
    },
    SadykovEmin: {
        login: 'SadykovEmin',
        password: 'goreldeli'
    },
    GurbanovArslan: {
        login: 'GurbanovArslan',
        password: 'goreldeli'
    },
    GayerAlan: {
        login: 'GayerAlan',
        password: 'goreldeli'
    },
    MuhametkulievSalyh: {
        login: 'MuhametkulievSalyh',
        password: 'goreldeli'
    },
    MuhametkulievDavud: {
        login: 'MuhametkulievDavud',
        password: 'goreldeli'
    },
    KuliyevBatyr: {
        login: 'KuliyevBatyr',
        password: 'goreldeli'
    },
    MuhammetnurowAymyrat: {
        login: 'MuhammetnurowAymyrat',
        password: 'goreldeli'
    },
    HudaybergenovaMila: {
        login: 'HudaybergenovaMila',
        password: 'goreldeli'
    },
    AdamovSergey: {
        login: 'AdamovSergey',
        password: 'goreldeli'
    },
    AdamovAlan: {
        login: 'AdamovAlan',
        password: 'goreldeli'
    },
    IsmailovaAmina: {
        login: 'IsmailovaAmina',
        password: 'goreldeli'
    },
    BarabashovDavid: {
        login: 'BarabashovDavid',
        password: 'goreldeli'
    },
    BarabashovAlan: {
        login: 'BarabashovAlan',
        password: 'goreldeli'
    },
}

btn.addEventListener('click', (e)=> {
    e.preventDefault();
    for (var key in objParents) {
        if (objParents.hasOwnProperty(key)) {
            if(objParents[key].login == inputLogin.value && objParents[key].password == inputPassword.value) {
                localStorage.setItem('login', objParents[key].login);
                window.location.href = "main.html";
                errorPassword.classList.remove('show');
                errorPassword.classList.add('hide');
                break;
            } else {
                errorPassword.classList.add('show')
                errorPassword.classList.remove('hide')
            }
        }
    }
})

console.log(inputPassword.type)

passwordCloseIcon.addEventListener('click', () => {
    inputPassword.type = 'password';
    passwordCloseIcon.style.display = 'none'
    passwordOpenIcon.style.display = 'block'
})

passwordOpenIcon.addEventListener('click', () => {
    inputPassword.type = 'text';
    passwordCloseIcon.style.display = 'block'
    passwordOpenIcon.style.display = 'none'
})