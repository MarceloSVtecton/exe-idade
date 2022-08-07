
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('div#res')
    var fano = document.getElementById('txtano')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique seus dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src' , 'menino.png')
            } else if (idade >=11 && idade <18) {
               img.setAttribute('src' , 'homemjovem.png') 
            } else if (idade >=19 && idade <60) {
                img.setAttribute ('src' , 'adulto.png')
            } else {
                img.setAttribute ('src' , 'idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src' , 'menina.png')
            } else if (idade >=11 && idade <18) {
               img.setAttribute('src' , 'mulherjovem.png') 
            } else if (idade >=19 && idade <60) {
                img.setAttribute ('src' , 'adulta.png')
            } else {
                img.setAttribute ('src' , 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} de ${idade} anos de idade`
        res.appendChild(img)
    }
    
}
 