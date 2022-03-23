function viewGallery() {
  const allgallery = document.getElementById("images");

  const viewer = new Viewer(allgallery, {
    toolbar: {
      oneToOne: true,

      prev: function () {
        viewer.prev(true);
      },

      play: true,

      next: function () {
        
        viewer.next(true);
      },
    },
  });
}