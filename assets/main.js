const hero = document.querySelector(`.hero`);

hero.style.backgroundImage = `url('./assets/interstellar.jpg')`;

const name = document.querySelector('.hero h1 span');
name.innerHTML = `Richard Terrell`;

const greeting = document.querySelector(`.hero h3`);
greeting.innerHTML = `Wowaweewah`

const profilePic = document.querySelector(`.profile.img`);
profilePic.src = `https://img1.looper.com/img/gallery/shows-to-watch-if-you-love-ted-lasso/intro-1613074540.jpg`;

const favorites = [{
  img: `./assets/Basketball.jpg`,
  title:`Sports`,
  desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
},
{
  img: `./assets/Interstellar poster.jpg`,
  title:`Movies`,
  desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
},
{
  img: `./assets/Food.jpg`,
  title:`Eating`,
  desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
}
]

const gallery = document.querySelector(`info.gallery`);

favorites.map((favorite)=> {
let newE1 = document.createElement(`div`);
newE1.classList.add(`info.item`);
newE1.innerHTML = `
<img src = "${favorite.img}" alt= "${favorite.title}" class="item-img" />
<h4>${favorite.title}</h4
<p>${favorite.desc}</p>
`
})
