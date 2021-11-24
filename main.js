
const btnTop = document.getElementById('btnTop');

window.onscroll = () => displayBtn();

const displayBtn = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
}

const toTheTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}