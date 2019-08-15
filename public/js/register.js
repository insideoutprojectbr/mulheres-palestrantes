const qualitys = []

const removeQuality = position => {
    qualitys.splice(position, 1); 
    updateQualitysList()
}

const updateQualitysList = () => {
    let html = ''

    for(i in qualitys){
        html += `
        <div class="quality-item">
            <h3>${qualitys[i]}</h3>
            <span onclick="removeQuality(${i})">X</span>
        </div>
        `
    }

    $('#qualitys-list').html(html)
}

const addNewQuality = quality => {
    $('.half').val('')
    qualitys.push(quality)
    updateQualitysList()
}

$(document).ready(function(){

    $('.half').keyup(function(e){
        if(e.keyCode == 13) {
            addNewQuality(this.value)
        }
    })

    $('#register-new-quality').click(function(e){
        e.preventDefault()

        let newQuality = $(".half").val()
        
        if(qualitys.includes(newQuality)){
            swal('Ops','Você já inseriu essa qualidade na lista','error')
        }else{
            addNewQuality(newQuality)
        }
        
    })

})
