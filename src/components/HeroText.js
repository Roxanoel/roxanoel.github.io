import { getLikedItemOne, getLikedItemTwo } from "../utils/LikedItems";

function HeroText() {
    return (
        <section className="hero-text-container">
            <p> Hello! </p>
            <p>
                I am Roxane, a frontend developer and UX designer based in Newmarket, UK. 
            </p>
            <p>
            I love {getLikedItemOne()}  and {getLikedItemTwo()}.
            </p>
        </section>
    )
}

export default HeroText;