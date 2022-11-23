let obj = {
  name:"Balaji"
}
Object.defineProperty(obj,"name",{
  writable:false
})

obj.name = "Sanjay"

console.log(obj)