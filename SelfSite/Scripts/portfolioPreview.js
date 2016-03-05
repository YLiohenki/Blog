$(document).ready(function () {
    $(".expertise-mongodb").click(function () {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = [
            {
                src: 'Content/Images/Expertise/mongodb.png',
                w: 600,
                h: 400
            }
        ];
        var options = {
            index: 0
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});
//# sourceMappingURL=portfolioPreview.js.map