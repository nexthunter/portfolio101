import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BENTO_ITEMS } from "@/constants/content";

function AboutSection() {
    return (
        <BentoGrid className="max-w-8xl mx-auto">
            {BENTO_ITEMS.map((feature, idx) => (
                <BentoCard
                    key={feature.name}
                    {...feature}
                    background={
                        <Image
                            src={feature.imgSrc}
                            width={500}
                            height={500}
                            sizes="(max-width: 768px) 100vw, 500px"
                            className={`absolute w-full h-full ${feature.imgClass} ${feature.extraClasses || ''}`}
                            alt={feature.name}
                        />
                    }
                />
            ))}
        </BentoGrid>
    );
}

export { AboutSection };
