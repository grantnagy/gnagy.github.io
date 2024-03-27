/* Identifying the different buttons*/
let registerButtons = new Array;
for (let i=1; i <= 5; i++) {
    let buttonid = "b"+ i;
    //console.log(buttonid);
    registerButtons[i-1] = document.getElementById(buttonid);
}

function saveClass(course, time, room) {

    let registeredClasses = new Array;
    let storageLength = localStorage.length;
    if (storageLength.length > 1 ) {
        for (let k = 1; k <= storageLength; k++) {
            const currItem = JSON.parse(localStorage.getItem(k.toString));
            registeredClasses.push(currItem[0]);
        }
    }

    //console.log(registeredClasses);
    
    alreadyInCourse = false;
    for (let i=0; i<storageLength; i++) {
        //console.log(registeredClasses[i]);
        if (registeredClasses[i] == course) { 
            alreadyInCourse = true; 
        }
    }
    if (storageLength > 5) { alreadyInCourse = true; }
    
    if (alreadyInCourse == false) {
        localStorage.setItem((storageLength + 1).toString(), JSON.stringify([course, time, room]));
        registeredClasses.push(course);
        alert("Registered for " + course);
    }

    console.log("Classes");
    console.log(registeredClasses);

}
