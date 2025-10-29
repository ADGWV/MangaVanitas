const mangaList = document.getElementById('manga-list');

const mangas = [
  {
    id: 1,
    title: "Attack on Titan",
    cover: "assets/img/covers/aot.jpg",
    desc: "البشر ضد العمالقة في عالم مليء بالرعب والبطولة."
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    cover: "assets/img/covers/jjk.jpg",
    desc: "قوى خارقة وصراع بين الخير والشر."
  },
  {
    id: 3,
    title: "One Piece",
    cover: "assets/img/covers/op.jpg",
    desc: "رحلة القراصنة نحو كنز الأسطورة."
  }
];

mangas.forEach(m => {
  const card = document.createElement('div');
  card.classList.add('card', 'fade-in');
  card.innerHTML = `
    <img src="${m.cover}" alt="${m.title}">
    <h3>${m.title}</h3>
  `;
  card.addEventListener('click', () => {
    window.location.href = `manga.html?id=${m.id}`;
  });
  mangaList.appendChild(card);
});
