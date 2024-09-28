function toggleGradeCurricular() {
    var grade = document.getElementById('grade-Curricular');
    if (grade.style.display === 'none') {
        grade.style.display = 'block';
        fetch('index.html')
            .then(response => response.text())
            .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var content = doc.getElementById('grade-Curricular-content').innerHTML;
            grade.innerHTML = content;
            })
            .catch(error => console.error('Error fetching content:', error));
    } else {
        grade.style.display = 'none';
    }
}

function openLink(url) {
    window.open(url, '_blank');
}
