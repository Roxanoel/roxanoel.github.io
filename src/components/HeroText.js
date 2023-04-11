import { getItemOne, getItemThree, getItemTwo } from "../utils/FunFacts";

function HeroText() {
    return (
        <section className="hero-text-container">
            <div>
                <p> Hello! </p>
                <p>
                    I am Roxane, a <strong>frontend developer</strong> and <strong>UX designer</strong> based in Newmarket, UK. 
                </p>
                <p>
                    I draw inspiration from nature, cuisine, and all things vintage and DYI.
                </p>
            </div>
            {/*<div>
                More about me: 
                <ul>
                    <li>{getItemOne()}</li>
                    <li>{getItemTwo()}</li>
                    <li>{getItemThree()}</li>
                </ul>
    </div> */}
        </section>
    )
}

export default HeroText;