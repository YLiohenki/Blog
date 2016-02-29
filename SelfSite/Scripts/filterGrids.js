$(document).ready(function () {
    var createFilter = function (gridSelector, itemSelector, filterSelector) {
        var $container = $(gridSelector).isotope({
            itemSelector: itemSelector,
            layoutMode: "fitRows",
            getSortData: {
                name: ".name",
                date: ".date",
                category: "[data-category]"
            }
        });
        $(filterSelector).on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
    };
    createFilter(".expretise-grid", ".expertise-item", "#filters");
    createFilter(".portfolio-grid", ".portfolio-item", "#portfolio_filters");
});
//# sourceMappingURL=filterGrids.js.map