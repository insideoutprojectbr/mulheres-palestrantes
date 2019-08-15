const qualitys = []

const removeQuality = position => {
    qualitys.splice(position, 1);
    updateQualitysList()
}

const updateQualitysList = () => {
    let html = ''

    for (i in qualitys) {
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
    if (quality == undefined || quality == null || quality == '') {
        swal('Ops', 'Q qualidade não pode ser nula', 'error')
    } else {
        $('.half').val('')
        qualitys.push(quality)
        updateQualitysList()
    }
}

$(document).ready(function () {

    $('#register-form').submit(function (e) {
        e.preventDefault()

        let inputs = $('.search')

        $.ajax({
            url: `http://localhost/woman`,
            method: 'POST',
            data: {
                name: inputs[0].value,
                location: inputs[1].value,
                imageUrl: inputs[2].value,
                email: inputs[3].value,
                linkeDin: inputs[4].value,
                gitHub: inputs[5].value,
                twitter: inputs[6].value,
                faceBook: inputs[7].value,
                site: inputs[8].value,
                qualitys: qualitys
            },
            dataType: 'json',
            success: function (serverResopnse) {
                if (serverResopnse.status) swal('Boa!', 'Seus dados foram cadastrados e agora todos podem te achar!', 'success').then(() => {
                    location.reload()
                })
                else
                    swal('Ops',serverResopnse.message,'error')
            }
        })
    })

    $('#register-new-quality').click(function (e) {
        e.preventDefault()

        let newQuality = $(".half").val()

        if (qualitys.includes(newQuality)) {
            swal('Ops', 'Você já inseriu essa qualidade na lista', 'error')
        } else {
            addNewQuality(newQuality)
        }

    })

})
