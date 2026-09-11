import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Experience() {
    return (
        // Master Div
        <div className="flex flex-col sm:max-w-3xl mx-auto">
            {/* Semi-Master div */}
            <div className="mx-4">
                <Link href="/" className="group flex mt-10 text-muted text-sm items-center gap-1 hover:text-hover-muted">
                    <ChevronLeft size={18} className="group-hover:-translate-x-1 transition transform duration-200" />
                    <span>Voltar</span>
                </Link>
                <div className="font-thin mt-9 text-3xl flex flex-col">
                    <span>Experiência</span>
                    <span className="mt-1 text-muted text-[18px]">Onde trabalhei e o que fiz lá.</span>
                </div>

                <div className="flex gap-4 mt-8">
                    <div className="flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-foreground mt-1.5 shrink-0" />
                    </div>

                    <div className="pb-8">
                        <span className="text-xs text-muted">Abr 2024 – Jul 2025</span>
                        <h3 className="text-lg font-medium">Estagiário Técnico em CAD</h3>
                        <span className="text-icons font-medium text-sm">Oshiro Arquitetura</span>
                        <span className="block text-sm text-icons/90">Dourados, Mato Grosso do Sul, Brasil</span>
                        <ul className="mt-3 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>Desenvolvi sketches e modelagens 3D/2D para projetos residenciais utilizando AutoCAD, SketchUp e Revit.</li>
                            <li>Produzi renderizações fotorrealistas com Enscape para apresentação visual de projetos a clientes.</li>
                            <li>Auxiliei na organização e revisão de arquivos de projeto (AutoCAD/Revit), garantindo consistência entre versões e entregas.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
