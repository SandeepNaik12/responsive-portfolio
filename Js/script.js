let infoMoreButton=document.getElementById("info-more-button");
let sideBarMoreInfo=document.getElementById("sidebar-more-info");

function showSideBarMoreInfo(){
    console.log(sideBarMoreInfo);
    sideBarMoreInfo.classList.toggle("active");
}

// tab toggle function
function toggleSection(id) {
  const toggle = document.getElementsByClassName('tab');
  for (let i = 0; i < toggle.length; i++) {
    toggle[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";

 

  // ── When Projects tab opens, animate project cards ──
  if (id === "project") {

    // reset first so animation replays every time
    document.querySelectorAll('.project-item').forEach(function(item) {
      item.classList.remove('animate-in');
    });

    // animate each card one by one with a stagger
    document.querySelectorAll('.project-item').forEach(function(item, index) {
      setTimeout(function() {
        item.classList.add('animate-in');
      }, 100 + (index * 150));
    });
  }
}

// project section toggle function

function toggleProjectSection(id){
    const toggle=document.getElementsByClassName('pr-toggle');
    for(let i=0;i<toggle.length;i++)
    {
       toggle[i].style.display="none";
    }
    document.getElementById(id).style.display="flex";
}

// close project info function
function closeProjectInfo(id){
    document.getElementById(id).style.display="none";
    const toggle=document.getElementsByClassName('pr-toggle');
    for(let i=0;i<toggle.length;i++)
    {
       toggle[i].style.display="block";
    }
}

// contact form toggle function

function sendMail() {
  emailjs.send("service_sby7s7m", "template_pi7cwnn", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(function(response) {

    showPopup("Message sent successfully!", "success");
    document.getElementById("contactForm").reset();

  }, function(error) {

    showPopup("Failed to send message. Try again!", "error");

  });
}

// Contact message popup

function showPopup(message, type){
  const popup = document.getElementById("popup");
  const text = document.getElementById("popuptext");

  text.innerText = message;

  popup.classList.remove("popup-success", "popup-error");

  if(type === "success"){
    popup.classList.add("popup-success");
  } else {
    popup.classList.add("popup-error");
  }

  popup.style.display = "block"; // ✅ show

  setTimeout(() => {
    popup.style.display = "none"; // ✅ hide
  }, 5000);
}
