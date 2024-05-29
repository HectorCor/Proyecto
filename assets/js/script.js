document.getElementById('search-bar').addEventListener('mouseover', function() {
    document.getElementById('dropdown-menu').classList.add('show');
});

document.getElementById('search-bar').addEventListener('mouseout', function() {
    setTimeout(function() {
        if (!document.querySelector('.dropdown-content:hover')) {
            document.getElementById('dropdown-menu').classList.remove('show');
        }
    }, 200);
});

document.getElementById('dropdown-menu').addEventListener('mouseleave', function() {
    document.getElementById('dropdown-menu').classList.remove('show');
});
