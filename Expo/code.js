function showForm(type){

    document.getElementById('patientForm')
    .classList.add('hidden');

    document.getElementById('doctorForm')
    .classList.add('hidden');

    if(type === 'patient'){
        document.getElementById('patientForm')
        .classList.remove('hidden');
    }

    else{
        document.getElementById('doctorForm')
        .classList.remove('hidden');
    }
}

/* PACIENTES */

const diseaseSelect =
document.getElementById('diseaseSelect');

const dynamicQuestions =
document.getElementById('dynamicQuestions');

diseaseSelect.addEventListener('change', function(){

    const value = this.value;

    dynamicQuestions.innerHTML = '';

    if(value === 'diabetes'){

        dynamicQuestions.innerHTML = `
        <input type="number"
        placeholder="Nivel de glucosa">

        <select>
            <option>Tipo de Diabetes</option>
            <option>Tipo 1</option>
            <option>Tipo 2</option>
        </select>`;
    }

    if(value === 'hipertension'){

        dynamicQuestions.innerHTML = `
        <input type="number"
        placeholder="Presión arterial promedio">`;
    }

    if(value === 'asma'){

        dynamicQuestions.innerHTML = `
        <select>
            <option>Frecuencia de ataques</option>
            <option>Baja</option>
            <option>Media</option>
            <option>Alta</option>
        </select>`;
    }

    if(value === 'cardiaca'){

        dynamicQuestions.innerHTML = `
        <input type="number"
        placeholder="Frecuencia cardiaca">

        <select>
            <option>¿Usa marcapasos?</option>
            <option>Sí</option>
            <option>No</option>
        </select>`;
    }

    if(value === 'cancer'){

        dynamicQuestions.innerHTML = `
        <input type="text"
        placeholder="Tipo de cáncer">

        <input type="text"
        placeholder="Tratamiento actual">`;
    }

    if(value === 'epilepsia'){

        dynamicQuestions.innerHTML = `
        <input type="number"
        placeholder="Convulsiones por mes">`;
    }

    if(value === 'renal'){

        dynamicQuestions.innerHTML = `
        <select>
            <option>¿Recibe diálisis?</option>
            <option>Sí</option>
            <option>No</option>
        </select>`;
    }

    if(value === 'obesidad'){

        dynamicQuestions.innerHTML = `
        <input type="number"
        placeholder="Peso (kg)">

        <input type="number"
        placeholder="Altura (cm)">`;
    }

    if(value === 'covid'){

        dynamicQuestions.innerHTML = `
        <select>
            <option>Síntoma principal</option>
            <option>Fatiga</option>
            <option>Dificultad respiratoria</option>
            <option>Pérdida de memoria</option>
        </select>`;
    }

    if(value === 'otra'){

        dynamicQuestions.innerHTML = `
        <input type="text"
        placeholder="Describa su enfermedad">`;
    }

});

/* ACCESIBILIDAD */

const disabilitySelect =
document.getElementById('disabilitySelect');

const notice =
document.getElementById('accessibilityNotice');

disabilitySelect.addEventListener('change', function(){

    document.body.classList.remove(
        'large-text',
        'high-contrast',
        'simple-mode'
    );

    if(this.value === 'visual'){

        document.body.classList.add(
            'large-text',
            'high-contrast'
        );

        notice.innerHTML =
        "Modo visual activado: texto ampliado y alto contraste.";
    }

    if(this.value === 'auditiva'){

        notice.innerHTML =
        "Se priorizarán mensajes visuales y notificaciones escritas.";
    }

    if(this.value === 'movilidad'){

        document.body.classList.add('simple-mode');

        notice.innerHTML =
        "Modo movilidad reducida activado.";
    }

    if(this.value === 'cognitiva'){

        document.body.classList.add('simple-mode');

        notice.innerHTML =
        "Modo cognitivo activado: interfaz simplificada.";
    }

    if(this.value === 'ninguna'){

        notice.innerHTML =
        "Configuración estándar activada.";
    }

});

/* DOCTORES */

const specialtySelect =
document.getElementById('specialtySelect');

const doctorDynamic =
document.getElementById('doctorDynamic');

specialtySelect.addEventListener('change', function(){

    doctorDynamic.innerHTML = '';

    if(this.value === 'cardiologia'){

        doctorDynamic.innerHTML = `
        <input type="number"
        placeholder="Años de experiencia cardiovascular">`;
    }

    if(this.value === 'neurologia'){

        doctorDynamic.innerHTML = `
        <input type="text"
        placeholder="Subespecialidad neurológica">`;
    }

    if(this.value === 'oncologia'){

        doctorDynamic.innerHTML = `
        <input type="text"
        placeholder="Área oncológica principal">`;
    }

    if(this.value === 'pediatria'){

        doctorDynamic.innerHTML = `
        <input type="number"
        placeholder="Pacientes pediátricos atendidos por mes">`;
    }

});