
$("#addButton").click(addItems)
$("#itemsList").on("click", "button.checar", checkItem)
$("#itemsList").on("click", "button.del", deleteItem)

function addItems(e){
    e.preventDefault()
    let newItem = $("#newText").val()
    //alert(newItem)
    $("#itemsList").append(`<div class = "shopItem"> <li class = "lis"> <p class = "itemShop"> ${newItem} </p> </li> <br> <button class = "checar" id = "checar"> Check </button> <button class = "del" id = "del"> Delete </button> <br></div>`)
}

function checkItem(e){
    e.preventDefault()
    //alert("hola")
    $("p").toggleClass('chec')
}

function deleteItem(e){
   e.preventDefault()
   //alert("adios")
    $(this).parent().remove()
}
