import formation4123 from './4123';

function getFormationFromName(formationName) {
    let formationsList = {}
    formationsList[formation4123.formationName] = formation4123;

    return formationsList[formationName];
}

export { getFormationFromName };