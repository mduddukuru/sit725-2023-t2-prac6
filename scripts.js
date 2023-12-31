
    
    const addCards = (items) => {
    items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subtitle+'</a></p></div>'+
    '<div class="card-reveal">'+
    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
    '<p class="card-text black-text">'+item.description+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
    });
    }
    const submitForm = () =>
{
    let formData = {}
    formData.title = $('#title').val()
    formData.subtitle = $('#subtitle').val()
    formData.path = $('#path').val()
    formData.description = $('#description').val()

    console.log("Form Submitted: ", formData);
    postCat(formData);
}

function postCat(cat){
    $.ajax({
        url: '/api/cat',
        type: 'POST',
        data: cat,
        success: (result) => {
            if (result.statusCode === 201){
                alert('cat post successful');
            }
        }
    })
}

function getAllCats(){
    $.get('/api/cat', (response) => {
        if (response.statusCode === 200) {
            addCards(response.data);
        }
        
    })
}

    $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#submitForm').click(()=>{
        submitForm();
    });
    $('.modal').modal();
    getAllCats();
    });


