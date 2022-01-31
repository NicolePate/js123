function showNotification() {
    const notification = new Notification ("new message", {
        body: "client frustrated"
    });
}


console.log(Notification.permission);

if (Notification.permission === "granted") {
    showNotification();
 } else if (Notification.permission !== "denied") {
     Notification.requestPermission().then(permission => {
        if (permission === "granted"){
            showNofication();
        }  
     });
 }

