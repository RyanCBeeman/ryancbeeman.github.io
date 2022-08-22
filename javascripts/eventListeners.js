
///Listeners for Settings
getElement("cheatButton").addEventListener('click', cheat);
getElement("saveButton").addEventListener('click', localSave);
getElement("loadButton").addEventListener('click', localLoad);
getElement("resetSaveButton").addEventListener('click', resetSave);
getElement("hardResetSaveButton").addEventListener('click', hardResetSave);

//Listeners for tabs
getElement("plantsTab").addEventListener('click', changeTab.bind(null, 'plantsTab'));
getElement("skillsTab").addEventListener('click', changeTab.bind(null, 'skillsTab'));


//Listeners for Skill Tree
getElement("growTreeButton").addEventListener('click', growTree);
//maybe use this: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
getElement("res1Btn").addEventListener('click', buySkill.bind(null, 1));
getElement("res2Btn").addEventListener('click', buySkill.bind(null, 2));