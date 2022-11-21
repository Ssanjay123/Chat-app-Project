
    window.addEventListener("DOMContentLoaded",async()=>{
        const token = localStorage.getItem("token")
       const response = await axios.get("http://localhost:3000/chats/getchats",{headers:{"authorization":token}})
       console.log(response)
       for(let i=0;i<response.data.allMsgs.length;i++){
        showChatsOnScreen(response.data.allMsgs[i])
       }
      
    })

async function addChats(e){
    let obj = {
      msg:  document.getElementById("msg").value
    }
    let token = localStorage.getItem("token");

 const response = await axios.post("http://localhost:3000/chats/addchats",obj,{headers:{"authorization":token}})
   showChatsOnScreen(response.data.newMsg)
}

function showChatsOnScreen(data){
    const parentNode = document.getElementById('listOfChats')
    // parentNode.innerHTML = ''
   
   parentNode.innerHTML += `<li>${data.name}: ${data.message}</li>`
                    

}