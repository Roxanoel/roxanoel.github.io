import { getLikedItemOne, getLikedItemTwo } from "../utils/LikedItems";

function HeroText() {
    return (
        <section className="hero-text-container">
            <div>
                Hello! I am Roxane, a frontend developer and UX designer based in Newmarket, UK. I love {getLikedItemOne()}  and {getLikedItemTwo()}.
            </div>
        </section>
    )
}

export default HeroText;