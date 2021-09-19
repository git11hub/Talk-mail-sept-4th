function showHide (classId) {
    const hide = document.getElementsByClassName(classId.hide)[0];
    const show = document.getElementsByClassName(classId.show)[0];
    
    hide.style.display = 'none';
    show.style.display = 'block';
    
    // console.log(classId)
}


