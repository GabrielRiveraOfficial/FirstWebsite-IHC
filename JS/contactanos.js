//Validacion de Formulario de Inscripcion

const form = document.querySelector('form[name="frm"]');
    form.addEventListener('submit',(event)=>{
        const flname = form.elements['flname'].value;
        const fphone = form.elements['fphone'].value;
        const femail = form.elements['femail'].value;
        const fcontent = form.elements['fcontent'].value;

            if(!flname || !femail || !fphone || !fcontent){
                event.preventDefault();
                alert('Por favor, complete los campos del formulario')
            } 
            else if (!ValidateEmail(femail)){
                event.preventDefault();
                alert('Por favor, ingrese un email valido')
            }else{
                event.preventDefault();
                alert('Datos recibidos :)')
            }

    })
//Funcion para validar Email

function ValidateEmail(femail){
    const re = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
    return re.test(String (femail).toLowerCase());
}