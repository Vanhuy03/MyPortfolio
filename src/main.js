import Navigo from 'navigo'; // When using ES modules.
import Homepage from "./page/homepage";
import Aboutpage from './page/aboutpage';
const app = document.querySelector('#app');
const router = new Navigo("/",{linksSelector:"a", hash: true})
// app.innerHTML = Homepage();
const render = (content, target) => {
    target.innerHTML = content();
};
// render(Homepage,app);
// render(Aboutpage,app);
router.on("/" , () => render(Homepage, app));
router.on("/About" , () => render(Aboutpage, app));

router.resolve();