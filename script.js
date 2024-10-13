document.getElementById('toggle-btn').onclick = function () {
    const sidebar = document.getElementById('sidebar');
    
    if (sidebar.classList.contains('expanded')) {
        sidebar.classList.remove('expanded');
    } else {
        sidebar.classList.add('expanded');
    }
};

