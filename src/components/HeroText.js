import { getItemOne, getItemThree, getItemTwo } from "../utils/FunFacts";

function HeroText() {
    return (
        <div className="hero-text-container">
            <div>
                <p> Hello! </p>
                <p>
                    I am Roxane, a <strong>frontend developer</strong> and <strong>UX designer</strong> currently working at Opteo, where I help ideate, design and implement new features for a PPC marketing optimization tool. I am based in Newmarket, UK.  
                </p>
                <p>
                    I draw inspiration from nature, cuisine, and all things vintage and DIY.
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
        </div>
    )
}

export default HeroText;