import { useEffect } from 'react';
import Typed from 'typed.js';

function Intro() {
    useEffect(() => {
        var typed = new Typed('#element', {
            strings: ['Web Developer', 'Software Developer', 'Software Engineer', 'Computer Scientist'],
            typeSpeed: 50,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="py-12">
            <div className="container bg-gray-100 rounded-lg shadow-md mx-auto flex flex-col lg:flex-row items-center justify-center">
                <div className="text-center lg:text-left lg:w-1/2 p-10">
                    <div className="text-gray-800 text-3xl lg:text-5xl font-bold mb-4">Hi! My name is</div>
                    <div className="text-purple-900 text-5xl lg:text-7xl font-bold mb-6">Syed Faizan</div>
                    <div className="text-gray-800 text-3xl lg:text-5xl font-bold mb-8">And I'm a passionate</div>
                    <div className="text-purple-900 text-4xl lg:text-6xl font-bold">
                        <span id="element"></span>
                    </div>
                </div>
                {/* <div className="lg:w-1/2 mx-auto mt-8 lg:mt-0">
                    <img src="dev-pic" alt="Syed Faizan" className="rounded-full shadow-lg" />
                </div> */}
            </div>
        </section>
    );
}

export default Intro;
