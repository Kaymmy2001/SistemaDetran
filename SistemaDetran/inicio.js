function calcular() {
    var txt = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txt.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`
    if (vel>60) {
        res.innerHTML = 'Você foi multado por excesso de velocidade !' + '<br>'
        
        res.innerHTML += 'Dirija sempre com cinto de segurança.'
        
    }else{
        res.innerHTML = 'Dirija sempre com cinto de segurança.'

    }
   
    }
