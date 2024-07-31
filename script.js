const inpAdd = document.getElementById("inp_add")
const sectionList = document.querySelector("#sectionList")
const btnAdd = document.querySelector("#btnAdd")
const imgTrash = document.querySelectorAll(".imgTrash")
const footer = document.querySelector("footer")
const btnFooter = document.querySelector(".btnFooter")


inpAdd.addEventListener("input",()=>{
    const regex = /\d+/g
    inpAdd.value = inpAdd.value.replace(regex,"")
    
})


sectionList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("imgTrash")){
        const element = e.target.parentNode
        element.remove()
        footer.style.display = "flex"
    }
    
    if(e.target.classList.contains("inp_checkbox")){
        const element = e.target
        verifyCheckbox(element)
    }
})

btnFooter.addEventListener("click",()=>{
    footer.style.display = "none"
})



btnAdd.addEventListener("click",()=>{
    addToList(inpAdd.value)
})


function verifyCheckbox(input){
    if(!input.checked){
        console.log("a")
        if(input.classList.contains("checked")){
            input.classList.remove("checked")
        }
        input.nextElementSibling.classList.add("notChecked")
    }else{
        input.nextElementSibling.classList.remove("notChecked")
        input.nextElementSibling.classList.add("checked")
    }
}
function addToList(value){

    if(inpAdd.value==""){
        return
    }
    const newArticle = document.createElement("article")
    const div = document.createElement("div")

    const inpCheckbox = document.createElement("input")
    inpCheckbox.type="checkbox"
    inpCheckbox.classList.add("inp_checkbox")

    const paragraph = document.createElement("p")

    const image = document.createElement("img")
    image.src = "./assets/trash.png"
    image.classList.add("imgTrash")
    
    newArticle.classList.add("py-px-li")

    div.append(inpCheckbox)
    paragraph.textContent =value
    div.append(paragraph)
    newArticle.append(div)
    newArticle.append(image)
    sectionList.append(newArticle)

    inpAdd.value = ""
}

