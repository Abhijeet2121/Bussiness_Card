import MainContent from './MainContent';
import Footer from './Footer';


function BussinessCard(props){
    console.log(props)

    return(
        <section className="Card--container">
            <img src={`/Images/${props.item.coverImg}`} className="Author-img" alt="author-img" /> 
            <h1 className=' Author--titel'>{props.item.titel}</h1>
            <h3 className=' Author--job'>{props.item.job}</h3>
            <MainContent/>
            <Footer/>
        </section>
    )
}

export default BussinessCard;