

function openDashboard(url) {
    var modal = document.getElementById('dashboardModal');
    var iframe = document.getElementById('dashboardFrame');
    iframe.src = url;
    modal.style.display = 'block';
}


function closeDashboard() {
    var modal = document.getElementById('dashboardModal');
    var iframe = document.getElementById('dashboardFrame');
    iframe.src = '';
    
    modal.style.display = 'none';
}
