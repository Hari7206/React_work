import nav from './nav.js'
import hero from "./hero.js";

const parent = () => {
    return React.createElement('div' , {id: 'parent'} , [nav() , hero()])
}
export default parent;