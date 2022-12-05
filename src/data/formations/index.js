import formation4123 from './4123';
// import formation523 from './523';

function getFormationsList() {
    let formationsList = [];
    formationsList.push(formation4123);
    // formationsList.push(formation523);

    return formationsList;
}

function getFormationFromName(formationName) {
    const formationsList = getFormationsList();
    const formation = formationsList.find(form => form.formationName === formationName);

    return formation;
}

function getFormationsNameList() {
    const formationsList = getFormationsList();

    let formationsNameList = [];
    formationsList.forEach(formation => formationsNameList.push(formation.formationName))

    return formationsNameList;
}

export {
    getFormationFromName,
    getFormationsNameList
};