
$(document).ready(function(){
    if($(window).width()<575){

    $(".chat").on("click", function(){
        $(".leftsidecontent").hide()

        $(" .rightsidecontent").toggle();
    })
    
     $(".backbutton").on("click",function(){
        $(".leftsidecontent").show()
        $(" .rightsidecontent").toggle();
     })

     for(let user of users){
        if(user.status.present == true){
           $('.allcontactstatus').append(
               `<div class="extradiv">
               <img class="statusimg" src="images/abd.jpg" alt="">
               <div class="statusinfo">
               <h3 class="statusname">${user.name}</h3>
               <p class="minutes">${user.status.created}</p>
               </div> 
               </div> `
           )
        }
    }


    $(".status").on("click",()=>{
        $(".chatboxcontent").hide()
        $(".logs").css("display","none")
        $(".statuspage").css("display","block")
    })
    

    $(".backarrow").on("click",()=>{
        $(".statuspage").hide();
        $(".chatboxcontent").css("display","block")
    })

    $(".statusimg").on("click",()=>{
        $(this).find(".statusimg").removeClass(".statusimg").addClass("statusimg2")
    })


    
    $(".calls").on("click",()=>{
        $(".chatboxcontent").hide()
        $(".statuspage").css("display","none")
        $(".logs").css("display","block")
    })

    $(".allmessages").on("click",()=>{
        $(".logs").css("display","none") 
        $(".statuspage").css("display","none")
        $(".chatboxcontent").css("display","block")
    })
      
   }else{

   }


})




$(".myimg").on("click",function(){
    $(".myimg2").toggle();
})
$(".myimg2").on("click",function(){
    $(".myimg2").toggle();
})
$(".threedots").on("click",()=>{
    $(".threedotoptions").toggle()
})






for(let user of users){
    $('#chats').append(`
    <div class="chat">
    <div class="chat1">
    <img class="chatimg1" src="${user.pictureUrl}" alt="">
    <img class="chatimg2" src="${user.pictureUrl}" alt="">
   </div>
    <p class="name">${user.name}</p>
    <em class="typing">Typing...</em>
    <p class="time">${user.lastMessageDate}</p>
   </div>
    `)
}

$(".chatimg1").on("click",function(){
    $(".chatimg2").hide();
    $(this).parent().find(".chatimg2").toggle()
 })
 $(".chatimg2").on("click",function(){
    $(this).parent().find(".chatimg2").toggle()
 })
 

$(".gotosecondpage").on("click",()=>{
    $(".section1").css("display","none");
    $(".secondPage").css("display","block")
})








// chat page js

//time for messages
let currentTime = ()=>{
    let today = new Date();
    let time = today.toLocaleString('en-US', { hour: 'numeric',  minute: 'numeric',hour12: true  }) ;
    return time;
}




$(".toptabimg").on("click",()=>{
    $(".toptabimg2").toggle();
})
$(".toptabimg2").on("click",function(){
    $(".toptabimg2").toggle();
})
$(".messageinput").on('keyup',function(e){
    if(e.keyCode === 13){
        $(".unorderlistmessage").append(`<li class="sender"><span>${$(".messageinput").val()}<span class="messagetime">${currentTime()}</span></span></li>`)
        $(".messageinput").val("")
        $(".messagebody").animate({scrollTop:$(".messagebody")[0].scrollHeight}, 1000);
    }
})


$("#chats").on("click", ()=>{
    $(".messagecontent").css("display","none");
})
$("#chats").on("click", ()=>{
    $(".chatpage").css("display","block");
})





//toptab


// $(".chat").on("click",function(){    
//     $('.toptab img').attr('src',this.dataset.img);
//     $('.toptabname').text(this.dataset.name);
// })

$(".chat").on("click",function(){
    
    var address = $(this).find(".chatimg1").attr("src");
    $('.toptab img').attr('src',  address);
    var name = $(this).find(".name").text();
    $(".toptabname").text(name)
})


// status page



