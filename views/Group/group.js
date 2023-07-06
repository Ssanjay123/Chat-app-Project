

// function createdGroup(e)
// {
//     e.preventDefault();
//     const createGroup = {
//         groupName :e.target.group.value
//     }
//     console.log(createGroup);
//     const token = localStorage.getItem('token');
//     axios.post("http://13.51.85.74:3000/group/createGroup", createGroup , {headers:{"Authorization":token}})
//     .then(result=>{
//         console.log(result)      
//     })
//     .catch(err=>console.log(err))

//    e.target.group.value="";
// }    


// window.addEventListener('DOMContentLoaded',() =>{
//     const token = localStorage.getItem('token')
//     axios.get("http://13.51.85.74:3000/group/getgroupChat",{headers:{"Authorization":token}})
//     .then(result =>{
//         console.log(result)
//         console.log(result.data.data[0].group.GroupName)
//         for(let i =0;i<result.data.data.length;i++)
//         {
//             const groupName = result.data.data[i].group.GroupName;
//             const groupid = result.data.data[i].groupId;
//             const parentNode = document.getElementById('group-message')
//             const createNewUser = `<li id='${groupid}'> -- ${groupName}--   
//                 <button  onclick=Messagebtn('${groupid}')>Message</button>
//                 <button  onclick=AddUserbtn('${groupid}')>AddUser</button>
//                 </li>`
//             parentNode.innerHTML += createNewUser;
//         }

//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })


// function Messagebtn(groupid)
// {
//     const data = document.getElementById('data');
//     data.innerHTML = `<div><form  >
//     <input type="text" name="chats" id="inputId"  required/>
//     <button  id="text" onclick="showMessageinbutton(${groupid})">send</button>
//    </form>  </div>`
//    showMessages(groupid)
// }

// function showMessageinbutton(groupid)
// {
//     // e.preventDefault();
//     const token = localStorage.getItem('token')
//     const message = document.getElementById('inputId').value
//     axios.post(`http://13.51.85.74:3000/group/postmessage/${groupid}`,{message:message},{headers:{"Authorization":token}})
//     .then(result =>{
//         const parentNode = document.getElementById('message')
//         let createdGroup=""
//         for(let i=0;i<result.data.data.length;i++)
//         {
//             const name = result.data.data[i].user.name;
//             const message = result.data.data[i].message;
//             createdGroup += `<div>-${name}-${message}---</div>`

//         }
//         parentNode.innerHTML= createdGroup;
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

// function showMessages(groupid)
// {
//     axios.get(`http://13.51.85.74:3000/group/getmessage/${groupid}`)
//     .then(result =>{
//         console.log(result)
//         const parentNode = document.getElementById('message')
//         let createdGroup=""
//         for(let i=0;i<result.data.data.length;i++)
//         {
//             const name = result.data.data[i].user.name;
//             const message = result.data.data[i].message;
//             createdGroup += `<div>-${name}-${message}---</div>`

//         }
//         parentNode.innerHTML= createdGroup;
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

// function AddUserbtn(groupid)
// {
//     const data = document.getElementById('addUser');
//     data.innerHTML = `<div><form>
//     <input type="text" name="chats" id="userId"  required/>
//     <button  id="text" onclick="AddUser(${groupid},event)">ADD USER</button>
//    </form>  </div>`
//    showAddUser(groupid)
    
// }


// async function AddUser(groupid,e)
// {
//     try{
//     e.preventDefault();
//     let users = document.getElementById('showAddUser')
//     const user1 = document.getElementById('userId').value
//    const result = await axios.post(`http://13.51.85.74:3000/group/AddUser/${groupid}`,{user:user1})
   
//         console.log(result)
//         let userarr = result.data.data;
  
//         userarr.forEach(user=>{
//          users.innerHTML += `<li id=${user.userId}>${user1}  <button id="${user.userId}" onclick="removeUserFromGroup(${user.userId},${user.groupId})">Remove User</button></li>`
//         })
//      }
//      catch(err){
//         console.log(err);
//      }
// }


// async function showAddUser(groupid){
//     try{
//     let users = document.getElementById('showAddUser')
//    let result = await axios.get(`http://13.51.85.74:3000/group/getUser/${groupid}`)
    
//    let userarr = result.data.data;
   
//    userarr.forEach(user=>{
//     users.innerHTML += `<li id=${user.user.id}>${user.user.name}  <button id="${user.user.id}" onclick="removeUserFromGroup(${user.user.id},${user.groupId})">Remove User</button></li>`
//    })
       
//         console.log(result)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }

// async function removeUserFromGroup(userId,groupId){
//     try{
        
//    const result = await axios.delete(`http://13.51.85.74:3000/group/deleteUser?groupId=${groupId}&userId=${userId}`)
//    console.log(result);
//    const parentNode = document.getElementById("showAddUser");
//    const childToBeRemoved = document.getElementById(`${userId}`);

//    parentNode.removeChild(childToBeRemoved);
// }
// catch(err){
//     console.log(err);
// }
// }

let str = "Balaji";
let str2 = str.split("")
console.log(str2);
let obj = {};


str2.forEach((x)=>obj[x]=(obj[x]||0)+1);

console.log(obj);


// obj.name = "Balaji"


// for(let i=0;i<str2.length;i++){
//     let count = 1;
//     for(let j=i+1;j<str2.length;j++){
//         if(str2.indexOf[str2[i]] !== i){
//             continue;
//         }
//         if(str[i]==str[j]){

//             count++
//     }
    

// console.log(obj);



