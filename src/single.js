import Hidrogel from './data/hidrogel.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const hidrogel = Hidrogel.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{hidrogel.name}</h1>
        <hr></hr>
        <img src={hidrogel.picture}></img>
        <p>{hidrogel.description}</p>
    </>);
}

export default Single;