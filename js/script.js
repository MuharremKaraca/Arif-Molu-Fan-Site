
document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end


    var yukari = document.getElementsByClassName("yukari_cik")[0];
// console.log(yukari);

// console.log(window);

window.addEventListener("scroll", function () {
  const mesafe = window.scrollY; //Yukarıdan olan uzaklığı verir.
  //   console.log(mesafe);
  if (mesafe > 300) {
    yukari.classList.add("goster");
  } else {
    yukari.classList.remove("goster");
  }
});

yukari.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

yukari.addEventListener("mousemove", function () {  
});
yukari.addEventListener("mouseout", function () {
});
