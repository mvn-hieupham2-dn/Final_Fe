fetchDataUSer()
function fetchDataUSer(){
    let name_edit = document.getElementById('name_edit')
    let email_edit = document.getElementById('email_edit')
    let phone_edit = document.getElementById('phone_edit')
    let age_edit = document.getElementById('age_edit')
    let address_edit = document.getElementById('address_edit')
    let dataDetailUser= JSON.parse(localStorage.getItem('editUser'));
    name_edit.value = dataDetailUser.name
    email_edit.value = dataDetailUser.email
    phone_edit.value = dataDetailUser.phone
    age_edit.value = dataDetailUser.age
    address_edit.value = dataDetailUser.address
}
function handleEdit(){
    let dataDetailUser= JSON.parse(localStorage.getItem('editUser'));
    let arr=JSON.parse(localStorage.getItem('crud'));
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].idUser == dataDetailUser.idUser){
        arr[i].name = name_edit.value
        arr[i].email = email_edit.value
        arr[i].phone = phone_edit.value
        arr[i].age = age_edit.value
        arr[i].address = address_edit.value
       }
    }
    arr= setCrudData(arr)
    alert('edit user success')
    
}
function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}