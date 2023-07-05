async function addChats(e){
    e.preventDefault();
    let obj = {
      msg:  document.getElementById("msg").value
    }
    
    let token = localStorage.getItem("token");

 const response = await axios.post("13.51.85.74:3000/chats/addchats",obj,{headers:{"authorization":token}})
console.log(response);
// localStorage.setItem(`${response.data.newMsg.name}`,response.data.newMsg.message);
   showChatsOnScreen(response.data.newMsg)
}

function showChatsOnScreen(data){
    const parentNode = document.getElementById('listOfChats')
    // parentNode.innerHTML = ''
   
   parentNode.innerHTML += `<li>${data.name}: ${data.message}</li>`
                    

}
0\-p+
[*

// function realTime(){

        window.addEventListener("DOMContentLoaded",async()=>{
            try{
        const token = localStorage.getItem("token")
       const response = await axios.get("13.51.85.74:3000/chats/getchats",{headers:{"authorization":token}})
       console.log(response)
       
        // for(let i=0;i<response.data.allMsgs.length;i++){
        // const name = response.data.allMsgs[i].name
        // const message = response.data.allMsgs[i].message
        // const id = response.data.allMsgs[i].id
        
        // const parentNode = document.getElementById('listOfChats')
        // const createNewMessage = `<div id="${id}"> ${name}: ${message}</div>`
        // parentNode.innerHTML += createNewMessage

        response.data.allMsgs.forEach(msg => {
          showChatsOnScreen(msg)
        });

        // showChatsOnScreen(response.data.allMsgs[i])
       }
    // }
    catch(err){
        console.log(err);
    }
      })
    // }

    // setInterval(realTime(),);
    
      function createGroup(e){
        window.location.href = "../Group/group.html"
      }
    
   

   
   