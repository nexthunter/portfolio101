import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
    return (
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-8">
            {/* Logo */}
            <div className="flex items-center">
                {/* Placeholder Logo Icon if needed, or just text */}
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded-md mr-2">
                    M
                </div>
                <span className="text-white font-bold tracking-tight">nextHUNTER</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-white/70 hover:text-white text-sm font-light transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}
