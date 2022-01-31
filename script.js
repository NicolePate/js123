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

function submitButton() {
    alert("thank you for submitting");
}

let valueCount

document.querySelector(".plus-btn").addEventListener("click", function() {
  valueCount = document.getElementById("quantity").value;
  
  valueCount++;
  
  document.getElementById("quantity").value = valueCount;

//   if(valueCount == 1)
//   {
//       document.querySelector(".minus-btn")
//   }
})
document.querySelector(".minus-btn").addEventListener("click", function() {
    valueCount = document.getElementById("quantity").value;
    
    valueCount--;
    
    document.getElementById("quantity").value = valueCount;

      if(valueCount == 1)
  {
    const para = document.createElement("p");
    const node = document.createTextNode("Inventory is low!");
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
  }
})





////////////////////////////
