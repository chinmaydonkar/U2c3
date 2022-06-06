// fill in javascript code here
document.querySelector('form').addEventListener('submit', myfunction)
function myfunction(){
    event.preventDefault()
    let name=document.querySelector("#name").value
    let employeeId=document.querySelector("#employeeID").value
    let department=document.querySelector("#department").value
    let experience=document.querySelector("#exp").value
    let email=document.querySelector("#email").value
    let mobile=document.querySelector("#mbl").value
    // console.log(name,employeeId,department,experience,email,mobile)
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=name
    let td2=document.createElement("td");
    td2.innerText=employeeId
    let td3=document.createElement("td");
    td3.innerText=department
    let td4=document.createElement("td");
    td4.innerText=experience
    let td5=document.createElement("td");
    td5.innerText=email
    let td6=document.createElement("td");
    td6.innerText=mobile
    let td7=document.createElement("td");
    if (experience>5){
        td7.innerText="Senior"
    }
    else if (experience>=2 && experience<=5){
        td7.innerText="Junior"
    }
    else {
        td7.innerText="Fresher"
    }
    let td8=document.createElement("td");
    td8.innerText= "Delete"
    td8.addEventListener("click",deleteFunction)
    td8.style.background="red"
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr);
}
function deleteFunction(event){
    event.target.parentNode.remove()
}

