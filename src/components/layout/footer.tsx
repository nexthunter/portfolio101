import { SOCIAL_LINKS } from "@/constants/navigation";

export function Footer() {
    return (
        <footer className="footer py-12 px-10 bg-bg-elevated/50 text-center border-t border-white/5 flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
                {SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-all"
                        aria-label={social.name}
                    >
                        <social.icon size={20} />
                    </a>
                ))}
            </div>
            <p className="text-text-muted">
                &copy; 2026 MOHADDIS ANSARI | Built with ❤️ & Passion
            </p>
        </footer>
    );
}
