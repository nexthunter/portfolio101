import Image from "next/image";

export function Contact() {
    return (
        <section
            className="contact relative py-32 px-10 overflow-hidden"
            id="contact"
        >
            <Image
                src="/hero-bg.jpg"
                alt="Background"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
            />
            <div className="relative z-10">
                <h2 className="heading text-6xl font-light text-center mb-10 text-white">
                    - Get In <span className="text-light">Touch -</span>
                </h2>
                <form className="glass p-6 md:p-12 rounded-[40px] border border-white/5 max-w-3xl mx-auto shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors col-span-1 md:col-span-2"
                        />
                    </div>
                    <textarea
                        rows={6}
                        placeholder="Your Message"
                        className="w-full bg-bg-deep/50 border border-white/10 rounded-2xl p-5 focus:border-accent-primary outline-none transition-colors mb-8 resize-none"
                    ></textarea>
                    <button className="w-full bg-white text-black py-5 rounded-2xl font-light text-lg hover:scale-[0.98] transition-transform shadow-lg shadow-accent-primary/20">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
