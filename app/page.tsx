import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function HomePage() {
    return (
        <>
            <Header />

            <main className="text-[#EEEEEE]">
                <section
                    id="home"
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                >
                    <div
                        className="absolute inset-0 -z-20"
                        style={{
                            backgroundImage: "url('/mesh_553.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    <div className="absolute inset-0 -z-10 bg-[#222831]/20" />

                    <div className="relative z-10 px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                            Welcome to Jihye Lee&apos;s Portfolio
                        </h1>
                        <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
                            AI, machine learning, and web development projects from my
                            undergraduate journey at Boston University and Temple University.
                        </p>

                        <a
                            href="#about"
                            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#76ABAE] px-6 py-3 text-sm md:text-base font-medium text-[#222831] hover:opacity-90 transition"
                        >
                            Learn more about me
                        </a>
                    </div>
                </section>

                <section id="about" className="bg-[#222831]">
                    <About />
                </section>

                <section id="resume">
                    <Resume />
                </section>

                <section id="activities" className="bg-[#323A44]">
                    <Activities />
                </section>

                <section id="projects" className="bg-[#3A424D]">
                    <Projects />
                </section>

                <section id="contact" className="bg-[#3F4753]">
                    <Contact />
                </section>

            </main>
        </>
    );
}
