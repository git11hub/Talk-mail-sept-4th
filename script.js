function showHide (classId) {
    const hide = document.getElementsByClassName(classId.hide)[0];
    const show = document.getElementsByClassName(classId.show)[0];    
    hide.style.display = 'none';
    show.style.display = 'block';
}

function popupShowHide (classId) {
    const hide = document.getElementsByClassName(classId.hide)[0];
    const show = document.getElementsByClassName(classId.show)[0];    
    hide.style.display = 'none';
    show.style.display = 'block';
}

// function popupShowHide (id) {
//     const hide = document.getElementsById(id.hide);
//     const show = document.getElementsById(id.show);    
//     hide.style.display = 'none';
//     show.style.display = 'block';

//     console.log('clicked hehe...');
// }


// Toggle
const toggle = (inactive,active,attach) =>{
    const makeActive = document.getElementById(inactive);
    const makeInactive = document.getElementById(active);
    const attachButton = document.getElementById(attach)
    makeActive.style.display = 'none';
    makeInactive.style.display = 'block';
    attachButton.style.background = '#e20c9a';
}
const toggleBack = (active,inactive,attach) =>{
    const makeInactive = document.getElementById(active);
    const makeActive = document.getElementById(inactive);
    const attachButton = document.getElementById(attach)
    makeActive.style.display = 'block';
    makeInactive.style.display = 'none';
    attachButton.style.background = 'gray';
}
