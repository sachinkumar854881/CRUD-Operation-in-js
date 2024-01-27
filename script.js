let data =[
    {id:1, name:"sachin", email:"sachinkumar@gmail.com"},
    {id:2, name:"Rahul", email:"rahulchaudhary@gmail.com"},
];

function readAll(){
    var tableData = document.querySelector(".table_data")
    var elements= '';

    data.map(obj => (
        elements += `<tr>
            <td>${obj.name}</td>
            <td>${obj.email}</td>
            <td>
                <button onclick={edit(${obj.id})}>Update</button>
                <button onclick={delet(${obj.id})}>Delete</button>
            </td>
        </tr>`
    ))
    tableData.innerHTML = elements;  

}
// logic for delete
function delet(id){
    data=data.filter(d => d.id !== id);
    readAll();
}
// logic for update
function update() {
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;
    var id = parseInt(document.querySelector(".id").value);
    var index = data.findIndex(d =>d.id === id);
    data[index] = {id, name, email};
    document.querySelector('.create_form').style.display = "block";
    document.querySelector('.update_form').style.display = "none";
    readAll();
}
// logic for edit
function edit(id){
    document.querySelector('.create_form').style.display = "none";
    document.querySelector('.update_form').style.display = "block";
    var object = data.find(obj => obj.id === id);

    document.querySelector(".uname").value = object.name;
    document.querySelector(".uemail").value = object.email;  
    document.querySelector(".id").value = object.id;  
}
// logic for create 
function create(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var obj = {id:3, name:name, email:email}
    data.push(obj);
    readAll();
    document.querySelector(".name").value='';
    var email = document.querySelector(".email").value='';
}