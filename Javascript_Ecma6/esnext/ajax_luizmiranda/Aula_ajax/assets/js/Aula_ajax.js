const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true)
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    })

};

document.addEventListener('click', e => {
    //pegando valor  e evento 
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    //conferindo se é a
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

//pegalink e carrega via ajax
function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    };

    request(objConfig).then(response => {
        carregaResultado(response)
    }).catch(error => console.log(error))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}