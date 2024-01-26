import { getItemOne, getItemThree, getItemTwo } from "../utils/FunFacts";

function HeroText() {
    return (
        <div className="hero-text-container">
            <div>
                <p>Hi! I'm Roxane, a <strong>frontend developer</strong> and <strong>UX designer</strong> based in San Francisco 🌉</p>
                <p>
                I like to build cool stuff with <strong>Vue</strong>, <strong>React</strong>, <strong>Unity</strong>, and sometimes my sewing machine. In a past life, I studied medieval philosophy at the University of Cambridge. 
                </p>
                {/*
                <p>
                I'm a <strong>driven</strong> and <strong>passionate</strong> creator who is not afraid of trying new things. Whatever the project, I'll bring on my good mood and a little extra pizzazz. 
                </p>
                <p>
                Got a project you need help with? Want to know more about twelfth century philosophy? Wish you had someone to share raccoon memes with? Don't be a stranger, drop me a message! 💌
                </p>
                */}
                <p>
                This site is currently undergoing a makeover. Until the new and improved version is ready to release, do feel free to check out my LinkedIn, GitHub, and itch profiles to see some of what I've been up to!
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