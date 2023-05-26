import Header from "../components/header"
import body from "../components/body";
import footer from "../components/footer";
const Homepage = () =>{
  return `
  ${Header()};
  ${body()};
  ${footer()};
  `
};
export default Homepage;