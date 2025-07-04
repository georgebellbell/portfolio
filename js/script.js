if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

document.querySelectorAll('.project-card-link[data-image]').forEach(link => {
  const img = link.getAttribute('data-image');
  if (img) {
    link.querySelector('.project-card').style.backgroundImage =
      `linear-gradient(to bottom, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.25) 100%), url('${img}')`;
  }
});