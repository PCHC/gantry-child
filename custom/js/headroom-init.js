// grab an element
var navElement = document.querySelector("#g-navigation");
// construct an instance of Headroom, passing the element
var headroomNav  = new Headroom(navElement, {
  offset: 50,
  tolerance: 5,
  classes: {
    "initial": "animated",
    "pinned": "fadeInDown",
    "unpinned": "fadeOutUp"
  }
});
// initialise
headroomNav.init();

// grab an element
var offcanvasElement = document.querySelector(".g-offcanvas-toggle");
// construct an instance of Headroom, passing the element
var headroomOffcanvas  = new Headroom(offcanvasElement, {
  offset: 50,
  tolerance: 5,
  classes: {
    "initial": "animated",
    "pinned": "fadeInDown",
    "unpinned": "fadeOutUp"
  }
});
// initialise
headroomOffcanvas.init();

// grab an element
var sidebarElement = document.querySelector("#sidebar");
// construct an instance of Headroom, passing the element
var headroomSidebar  = new Headroom(sidebarElement, {
  offset: 60
});
// initialise
// headroomSidebar.init();
