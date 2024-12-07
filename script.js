// Function to toggle the visibility of a unit's video list
function toggleUnit(element) {
    const videoList = element.nextElementSibling; // الفيديوهات المرتبطة بالوحدة
    const arrow = element.querySelector('.arrow');

    if (videoList.style.display === 'block') {
        videoList.style.display = 'none'; // إخفاء الفيديوهات
        arrow.style.transform = 'rotate(0deg)'; // عكس السهم
    } else {
        videoList.style.display = 'block'; // إظهار الفيديوهات
        arrow.style.transform = 'rotate(180deg)'; // عكس السهم
    }
}

// Function to load a video
function loadVideo(title, url) {
    // Update video title
    const videoTitle = document.getElementById('video-title');
    videoTitle.textContent = title;

    // Update video source
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.querySelector('source').src = url;
    videoPlayer.load(); // Reload video to apply changes
}
