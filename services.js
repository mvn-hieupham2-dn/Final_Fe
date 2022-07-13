// data sample
let defaultData = [
    {
        idUser:Math.floor(Math.random() * (100002 - 1 + 1)) + 1,
        name:'Phạm Văn Giao',email:'giao@gmail.com',
        phone: 092323232,age:22,address:'Đà Nẵng'},
    {
        idUser:Math.floor(Math.random() * (100002 - 1 + 1)) + 1,
        name:'Phạm Văn Minh',email:'minh@gmail.com',
        phone: 092323232,age:22,address:'Ninh Bình'},
    {
        idUser:Math.floor(Math.random() * (100002 - 1 + 1)) + 1,
        name:'Nguyễn Văn Anh',email:'anh@gmail.com',
        phone: 092323232,age:22,address:'Quảng Ngãi'},
    {
        idUser:Math.floor(Math.random() * (100002 - 1 + 1)) + 1,
        name:'Đỗ Văn Hòa',email:'hoa@gmail.com',
        phone: 092323232,age:22,address:'Quảng Nam'},
    {
        idUser:Math.floor(Math.random() * (100002 - 1 + 1)) + 1,
        name:'Lê Thị Vân',email:'van@gmail.com',
        phone: 092323232,age:22,address:'Hà Tĩnh'},
    {
        idUser:Math.floor(Math.random() * (100002 - 1 + 1)) + 1,
        name:'Võ Văn Ân',email:'an@gmail.com',
        phone: 092323232,age:22,address:'Huế'},

]

// crud 
selectData()
function validAndCreat(){
	document.getElementById('msg').innerHTML="";
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let age = document.getElementById('age').value
    let address = document.getElementById('address').value
    let idUser =  Math.floor(Math.random() * (100002 - 1 + 1)) + 1;
    let users = {name,email,phone,age,address,idUser}
    if(users.name ==''){
	document.getElementById('msg').innerHTML='Pls enter your name'
       
    }
    else if(users.email ==''){
        document.getElementById('msg').innerHTML='Pls enter your email'
    }
    else if(users.email.indexOf(users)>=0){
        document.getElementById('msg').innerHTML='Pls enter your other email'
    }
    else if(users.phone ==''){
        document.getElementById('msg').innerHTML='Pls enter your phone'
    }
    else if(users.age ==''){
        document.getElementById('msg').innerHTML='Pls enter your age'
    }
    else if(users.address ==''){
        document.getElementById('msg').innerHTML='Pls enter your address'
    }
    else{
			let arr=getCrudData();
			if(arr==null){
				let data=[users];
				setCrudData(data);
			}else{
				arr.push(users);
				setCrudData(arr);
			}
            document.getElementById('msg').innerHTML='Data add succeed'
        // for (const user in users) {
        //   document.getElementById(`${user}`).value = ''
        // }
		selectData();
    }
}
function selectData(user){
	let arr=getCrudData();
    // load data after create user
	if(arr!=null){
         arr = arr
	}
    // load data default  before create user 
    else if(arr==null || arr==[]) {
         arr=defaultData;
        setCrudData(arr);
    }
    // display content by search 
    if(user){
        arr = user
    }
    // render data
    let tbody = document.querySelector('.table_list-user > tbody')
    tbody.innerHTML = arr
    .map((item) => {
        return `
        <tr id='show_result'>
            <td class='list_item'><h5>${item.name}</h5></td>
            <td class='list_item'><h5>${item.email}</h5></td>
            <td class='list_item'><h5>${item.age}</h5></td>
            <td class='list_item'><h5>${item.phone}</h5></td>
            <td class='list_item'><h5>${item.address}</h5></td>
            <td class='list_item'><a class="btn btn_edit" onclick="editData(${item.idUser})">Edit</a>
            <button class="btn btn-delete" onclick="deleteData(${item.idUser})">Delete</button></td>
        </tr>`;
    })
    .join("")
    
  
}

// send data by id to edit page 
function editData(idUser){
    let arr=getCrudData();
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].idUser == idUser){
        localStorage.setItem('editUser',JSON.stringify(arr[i]));
       }
        
    }
    location.href = './edit.html'
}
function deleteData(id){
    let arr = getCrudData()
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].idUser == id) {
        arr.splice(i, 1);
    }
      }
	setCrudData(arr);
	selectData();
}
function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}
function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}
function search(){
	let arr=getCrudData();
    let value = document.getElementById('search').value
    let userSearch = arr.filter(user => {return user.name.toUpperCase().includes(value.toUpperCase())})
    selectData(userSearch)
}

