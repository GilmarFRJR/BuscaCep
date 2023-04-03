$('#cep').on('blur', function(){

    var CEP = $(this).val()
    var CEPdigitos = $(this).val().length
    
    if (CEPdigitos == 0){
        return
    } else
    if (CEPdigitos < 8 || CEPdigitos > 8){

        alert("CEP inválido")
        CEP = $(this).val('')
        return

    } else{
        $.getJSON(`https://viacep.com.br/ws/${CEP}/json/`, function(infos) {

    if (infos.erro){
        
        alert("Esse CEP não existe...")
        $('#cep').val('')

    } else {
    $('#endereco').val(infos.logradouro)
    $('#bairro').val(infos.bairro)
    $('#cidade').val(infos.localidade)
    $('#estado').val(infos.uf)

   }})

}})









  $('button').on('click', function(){
    location.reload()
  })