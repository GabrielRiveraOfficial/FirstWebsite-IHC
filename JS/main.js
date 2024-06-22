//Validacion de Formulario de Inscripcion

const form = document.querySelector('form[name="frm"]');
    form.addEventListener('submit',(event)=>{
        const fname = form.elements['fname'].value;
        const flastname = form.elements['flastname'].value;
        const fphone = form.elements['fphone'].value;
        const femail = form.elements['femail'].value;
        const fsex = form.elements['fsex'].value;

            if(!fname || !flastname || !femail || !fphone || !fsex){
                event.preventDefault();
                alert('Por favor, complete los campos del formulario')
            } 
            else if (!ValidateEmail(femail)){
                event.preventDefault();
                alert('Por favor, ingrese un email valido')
            }

    })
//Funcion para validar Email

function ValidateEmail(femail){
    const re = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
    return re.test(String (femail).toLowerCase());
}