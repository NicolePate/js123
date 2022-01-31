function showAlert() {
    const alter = new Notification ("new message", {
        body: "inventory low"
    });
}


console.log(Notification.permission);

// if (Notification.permission === "granted") {
//     showAlert();
//  } else if (Notification.permission !== "denied") {
//      Notification.requestPermission().then(permission => {
//         if (permission === "granted"){
//             showAlert();
//         }  
//      });
//  }















function submitButton() {
    alert("thank you for submitting");
}


let valueCount

document.querySelector(".plus-btn").addEventListener("click", function() {
  valueCount = document.getElementById("quantity").value;
  
  valueCount++;
  
  document.getElementById("quantity").value = valueCount;

})

document.querySelector(".minus-btn").addEventListener("click", function() {
    valueCount = document.getElementById("quantity").value;
    
    valueCount--;
    
    document.getElementById("quantity").value = valueCount;

      if(valueCount == 1){
        showAlert();{
        }
      }else if (valueCount == 0)
  {
    const para = document.createElement("p");
    const node = document.createTextNode("Out of stock");
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
    document.querySelector(".minus-btn").setAttribute("disabled", "diabled")
  }
})





////////////////////////////
