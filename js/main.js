const btns = document.querySelectorAll('.btn_item'),
      tables = document.querySelectorAll('table'),
      avatars = document.querySelectorAll('.avatar'),
      rows = document.querySelectorAll('.row'),
      btnMath = document.querySelector('#math'),
      btnEn = document.querySelector('#en'),
      btnRead = document.querySelector('#read'),
      btnAwia = document.querySelector('#awia'),
      btnRobbo = document.querySelector('#robbo'),
      tables_block = document.querySelector('.tables'),
      tableMath = document.querySelector('.table_math'),
      tableEn = document.querySelector('.table_en'),
      tableRead = document.querySelector('.table_read'),
      tableAwia = document.querySelector('.table_awia'),
      tableRobbo = document.querySelector('.table_awia'),
      td = document.querySelectorAll('td');



if (localStorage.getItem('login') == 'camp'){
    avatars.forEach(avatar => {
        avatar.classList.add('hide')
    })
}


rows.forEach(item => {
    if (item.classList.contains(localStorage.getItem('login'))) {
        avatars.forEach(avatar => {
            if (avatar.classList.contains(localStorage.getItem('login'))) {

            } else {
                avatar.classList.add('hide')
            }
        })
        rows.forEach(i => {
            if (i.classList.contains(localStorage.getItem('login'))) {

            } else {
                i.classList.add('hide')
            }
        })
    }
})

btns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        btns.forEach(item => {
            item.classList.remove('active_lesson')
        })
        e.target.classList.add('active_lesson');
    })
})



btnMath.addEventListener('click', () => {
    tables.forEach(table => {
        table.classList.add('hide')
        table.classList.remove('show')
        if (table.classList.contains('math')) {
            table.classList.add('show')
            table.classList.remove('hide')
        }
    })
})

btnEn.addEventListener('click', () => {
    tables.forEach(table => {
        table.classList.add('hide')
        table.classList.remove('show')
        if (table.classList.contains('en')) {
            table.classList.add('show')
            table.classList.remove('hide')
        }
    })
})

btnRead.addEventListener('click', () => {
    tables.forEach(table => {
        table.classList.add('hide')
        table.classList.remove('show')
        if (table.classList.contains('read')) {
            table.classList.add('show')
            table.classList.remove('hide')
        }
    })
})

btnAwia.addEventListener('click', () => {
    tables.forEach(table => {
        table.classList.add('hide')
        table.classList.remove('show')
        if (table.classList.contains('awia')) {
            table.classList.add('show')
            table.classList.remove('hide')
        }
    })
})

btnRobbo.addEventListener('click', () => {
    tables.forEach(table => {
        table.classList.add('hide')
        table.classList.remove('show')
        if (table.classList.contains('robbo')) {
            table.classList.add('show')
            table.classList.remove('hide')
        }
    })
})