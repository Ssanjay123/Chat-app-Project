// class Node{
//     constructor(data,next=null){
//     this.data = data;
//       this.next = next;
//   }
//   }
  
//   class linkedList{
//     constructor(head,size){
//       this.head = null;
//       this.size = 0;
//     }
//     insertFirst(data){
//         this.head=new Node(data,this.head);
  
//       }
//       insertLast(data){
//         let node = new Node(data)
//         if(!this.head){
//           this.head = node;
//         }
//         else{
//           let current = this.head;
//           while(current.next){
//             current=current.next;
//           }
//           current.next = node;
//         }
//       }
//       insertAt(data,index){
//       let node  = new Node(data);
//       let previous,current;
  
//       current = this.head;
//       let count = 0;
//       while(count<index){
//         previous = current;
//         count++;
//         current = current.next;
//       }
//       node.next = current;
//       previous.next = node
//       }
//       printData(){
//         let current = this.head;
//         while(current){
//           console.log(current.data);
//           current = current.next;
//         }
//       }
     
//       removeAt(index){
//         let current = this.head;
//         let previous;
//         let count = 0;
//         while(count<index){
//             previous = current;
//             current = current.next;
//             count++;
//         }
//       previous.next = current.next;
//       }

//     }
//         let ll = new linkedList();
//         ll.insertFirst(100);
//         ll.insertFirst(200)
//         ll.insertFirst(300)
//         ll.insertLast(400)
//         ll.insertLast(500)
//         ll.insertLast(600)
//         ll.insertAt(700,3)
//         ll.removeAt(1)
//         ll.printData();



// const arr = [1,2,3,1,4,93,5,3];

// const max = Math.max(null,arr)

// console.log(max);

// const arr3 = new Set(arr);

// console.log(arr3.has(3))

// const arr2 = arr.filter((a,b)=>{
//   return  arr.indexOf(a)!==b;
// })

// console.log(arr2);

const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach( (x) => counts[x] = (counts[x] || 0) + 1 );
console.log(counts)

// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     userName: "johndoe12",
//     email: "johndoe@stackabuse.com",
//     age: 37,
//     hobby: "Singing"
// };

// let a = Object.assign(user,{
//     c:"Sharpener",
// })
// console.log(a);

