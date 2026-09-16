import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Lightbox } from "../../components/Lightbox";

function TechPill({ label }: { label: string }) {
    return (
        <div className="border border-foreground/25 bg-foreground/5 rounded-full text-[11px] font-medium text-foreground px-2.5 py-1">{label}</div>
    );
}

export default function Projects() {
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
                    <span>Projetos</span>
                    <span className="mt-1 text-muted text-[18px]">O que já construí, com detalhes técnicos.</span>
                </div>

                {/* Pagefy */}
                <div className="flex gap-4 mt-8">
                    <div className="flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-foreground mt-1.5 shrink-0" />
                        <span className="w-0.5 flex-1 bg-muted mt-1" />
                    </div>
                    <div className="pb-10">
                        <span className="text-xs text-muted">Em produção</span>
                        <h3 className="text-lg font-medium">Pagefy: sites prontos pra vender a comércios locais.</h3>
                        <Lightbox className="mt-3 rounded border border-project transition transform duration-200 hover:scale-110 w-19 h-auto"
                            src="/pagefy-screenshot.png"
                            alt="Pagefy"
                            width={2557}
                            height={1194}
                        />
                        <p className="mt-2 text-sm text-icons/90">
                            Um SaaS pra quem vende sites a comércios locais: busca numa cidade os negócios que não têm site no perfil do Google, gera com IA um site pra cada um a partir dos dados reais (nome, endereço, telefone, horários e fotos) e publica num link público que o vendedor manda pro dono pelo WhatsApp. Tudo funciona por créditos, e o custo de cada ação aparece antes de ela rodar. Frontend na Vercel, API e banco no Railway, pagamento real via Pix e cartão.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            <TechPill label="Next.js 16" />
                            <TechPill label="React 19" />
                            <TechPill label="TypeScript" />
                            <TechPill label="Tailwind CSS v4" />
                            <TechPill label="Node.js / Express" />
                            <TechPill label="Prisma" />
                            <TechPill label="PostgreSQL" />
                            <TechPill label="Claude API (Anthropic)" />
                            <TechPill label="Google Places API" />
                            <TechPill label="Google OAuth" />
                            <TechPill label="Asaas (Pix e cartão)" />
                            <TechPill label="Leaflet" />
                            <TechPill label="Vercel + Railway" />
                        </div>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">FLUXO TÉCNICO</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>Login só com Google: o backend valida o token no Google (conferindo o <code className="text-[13px]">aud</code> contra o próprio client id) e devolve um <strong>cookie HttpOnly assinado com HMAC</strong>, válido em <code className="text-[13px]">pagefy.app</code> e <code className="text-[13px]">api.pagefy.app</code>, sem tabela de sessão.</li>
                            <li>A busca consulta a <strong>Google Places API</strong> por cidade e ramo, filtra quem não tem site, está fechado ou fica a mais de 35 km, e guarda o resultado em cache por 6 h compartilhado entre usuários — cidade repetida não custa nada. O app já abre com a cidade do visitante buscada (localizada pelo IP).</li>
                            <li>O gerador reserva os créditos ao confirmar o prompt, faz uma checagem rápida na web se o negócio já tem site próprio e, se não tiver, gera o HTML numa <strong>chamada única à Claude</strong>. Se falhar ou for interrompido, os créditos voltam na hora.</li>
                            <li>O site é publicado em <code className="text-[13px]">/p/[slug]</code>, e o botão “Enviar pro dono” gera uma mensagem de WhatsApp com o link, pronta pra editar ou abrir já preenchida.</li>
                            <li>O checkout acontece dentro do app: <strong>Pix com QR Code</strong> (com polling do status e webhook do Asaas) ou <strong>cartão</strong>, com planos virando assinatura recorrente. Estornos totais ou parciais tiram os créditos proporcionais de forma idempotente, travando a linha do pagamento (<code className="text-[13px]">FOR UPDATE</code>).</li>
                        </ul>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">DESTAQUES</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>Segurança em camadas pro HTML escrito por IA: o código é limpo de scripts externos, trackers, formulários e redirecionamentos na prévia, no download e na publicação, e a página pública é servida com uma <strong>CSP estrita</strong> que bloqueia qualquer chamada de rede.</li>
                            <li>Preços decididos por custo medido: cada chamada paga registra a ação que a causou, e trocar o gerador de um agente com ferramentas por uma chamada única derrubou o custo por site de ~US$ 1,30 pra ~US$ 0,50 mantendo a qualidade.</li>
                            <li>Proteção contra abuso do plano grátis: o bônus de boas-vindas é concedido uma vez por rede a cada 24 h, guardando só um HMAC do IP, nunca o IP em si.</li>
                            <li>Infraestrutura de produção completa: domínio próprio com DNS, e-mail no domínio (DKIM/SPF), migrations aplicadas a cada deploy e health check.</li>
                        </ul>
                        <div className="mt-5 flex max-w-full gap-3 text-xs">
                            <a href="https://github.com/dzn0/pagefy-showcase" target="_blank" rel="noopener noreferrer" className="group transition transform duration-200 hover:scale-110 px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3">Código
                                <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 transition transform duration-200" />
                            </a>
                            <a href="https://pagefy.app/" target="_blank" rel="noopener noreferrer" className="group px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3 transition transform duration-200 hover:scale-110">Produto
                                <ArrowUpRightIcon className="h-4 w-4 transition transform duration-200 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Portfólio Pessoal */}
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-foreground mt-1.5 shrink-0" />
                        <span className="w-0.5 flex-1 bg-muted mt-1" />
                    </div>
                    <div className="pb-10">
                        <span className="text-xs text-muted">Em produção</span>
                        <h3 className="text-lg font-medium">Portfólio Pessoal</h3>
                        <Lightbox className="mt-3 rounded border border-project transition transform duration-200 hover:scale-110 w-19 h-auto"
                            src="/portfolio.png"
                            alt="Portfólio Pessoal"
                            width={1920}
                            height={1080}
                        />
                        <p className="mt-2 text-sm text-icons/90">
                            Este site: frontend em Next.js/TypeScript com React Compiler ativado, hospedado na Vercel. O contador de visitantes do rodapé consulta uma API própria em Node.js/Express, com persistência via Prisma/PostgreSQL — mantida como um serviço à parte do frontend.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            <TechPill label="Next.js 16" />
                            <TechPill label="React 19" />
                            <TechPill label="TypeScript" />
                            <TechPill label="Tailwind CSS v4" />
                            <TechPill label="Node.js / Express" />
                            <TechPill label="Prisma" />
                            <TechPill label="PostgreSQL" />
                        </div>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">FLUXO TÉCNICO</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>No carregamento, o componente do contador faz um <code className="text-[13px]">fetch</code> pra API externa de visitas.</li>
                            <li>A API valida/registra o IP do visitante numa tabela via Prisma (com restrição de unicidade), e devolve a contagem total.</li>
                            <li>O calendário de atividade do GitHub observa o atributo <code className="text-[13px]">data-theme</code> do <code className="text-[13px]">&lt;html&gt;</code> via <code className="text-[13px]">MutationObserver</code>, trocando de paleta de cores junto com o toggle de tema, sem recarregar a página.</li>
                        </ul>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">DESTAQUES</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>React Compiler habilitado, otimizando re-renders automaticamente sem memoization manual.</li>
                            <li>Ambientes separados por variável de ambiente: desenvolvimento aponta pra API local, produção pra API hospedada.</li>
                            <li>Bug de rede documentado e resolvido: o Next.js 16 bloqueia por padrão o WebSocket de hot-reload de origens fora de localhost, o que quebra silenciosamente todos os cliques ao testar pelo celular na mesma rede — corrigido via configuração de origens permitidas.</li>
                        </ul>
                        <div className="mt-5 flex max-w-full gap-3 text-xs">
                            <a href="https://github.com/dzn0/portfolio" target="_blank" rel="noopener noreferrer" className="group transition transform duration-200 hover:scale-110 px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3">Código
                                <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 transition transform duration-200" />
                            </a>
                            <a href="https://www.andrepieri.com.br/" target="_blank" rel="noopener noreferrer" className="group px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3 transition transform duration-200 hover:scale-110">Produto
                                <ArrowUpRightIcon className="h-4 w-4 transition transform duration-200 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* DevTracker */}
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-foreground mt-1.5 shrink-0" />
                        <span className="w-0.5 flex-1 bg-muted mt-1" />
                    </div>
                    <div className="pb-10">
                        <span className="text-xs text-muted">Em desenvolvimento</span>
                        <h3 className="text-lg font-medium">DevTracker</h3>
                        <Lightbox className="mt-3 rounded border border-project transition transform duration-200 hover:scale-110 w-19 h-auto"
                            src="/devtracker.png"
                            alt="DevTracker"
                            width={1920}
                            height={1080}
                        />
                        <p className="mt-2 text-sm text-icons/90">
                            Um tracker pessoal de sessões de estudo/código, construído como projeto de aprendizado prático da stack TypeScript → Next.js → Tailwind → Node → Prisma/PostgreSQL — documentando convenções próprias num arquivo dedicado enquanto aprendo cada camada na prática.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            <TechPill label="Next.js 16" />
                            <TechPill label="React 19" />
                            <TechPill label="TypeScript" />
                            <TechPill label="Tailwind CSS v4" />
                        </div>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">O QUE JÁ EXISTE</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>Navegação completa (Dashboard, Sessões, Estatísticas, Calendário, Configurações) com o layout final da interface.</li>
                            <li>Página de Sessões com o design pronto: cards de estatísticas, filtros e busca — hoje com dados de exemplo, sem persistência real ainda.</li>
                        </ul>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">PRÓXIMOS PASSOS</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>Persistência de sessões (tecnologia, tempo, data, nota) via Prisma/PostgreSQL.</li>
                            <li>Cálculo real de estatísticas agregadas: horas totais, streak e tecnologia mais estudada.</li>
                            <li>Heatmap de atividade diária, no estilo do calendário de contribuições do GitHub.</li>
                        </ul>
                        <div className="mt-5 flex max-w-full gap-3 text-xs">
                            <a href="https://github.com/dzn0/devtracker" target="_blank" rel="noopener noreferrer" className="group transition transform duration-200 hover:scale-110 px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3">Código
                                <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 transition transform duration-200" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* AnalisaCV */}
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-foreground mt-1.5 shrink-0" />
                    </div>
                    <div className="pb-8">
                        <span className="text-xs text-muted">No ar há 6 meses</span>
                        <h3 className="text-lg font-medium">AnalisaCV: um SaaS de análise de currículo.</h3>
                        <Lightbox className="mt-3 rounded border border-project transition transform duration-200 hover:scale-110 w-19 h-auto"
                            src="/analisa-cv-screenshot.png"
                            alt="AnalisaCV"
                            width={1920}
                            height={1080}
                        />
                        <p className="mt-2 text-sm text-icons/90">
                            Uma aplicação web sem framework nem bundler que extrai o texto de um currículo em PDF direto no navegador, gera uma crítica gratuita via IA e libera a reescrita completa do documento mediante pagamento via Pix.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            <TechPill label="JavaScript" />
                            <TechPill label="PDF.js" />
                            <TechPill label="html2pdf.js" />
                            <TechPill label="Claude API (Anthropic)" />
                            <TechPill label="Mercado Pago (Pix)" />
                            <TechPill label="Vercel Serverless Functions" />
                        </div>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">FLUXO TÉCNICO</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>Upload do PDF: o <strong>PDF.js</strong> extrai o texto inteiramente no navegador — o arquivo não chega a sair do client nessa etapa.</li>
                            <li>O texto vai pra uma função serverless que monta um prompt e chama a <strong>Claude Haiku via fetch direto na API da Anthropic</strong> (sem SDK), pedindo um JSON estruturado com pontos fortes, fracos e sugestões; a função repara manualmente o JSON retornado (remove blocos de markdown, extrai via regex), já que a chamada não usa modo JSON nativo.</li>
                            <li>Ao pagar, outra função valida o CPF e cria a cobrança Pix no Mercado Pago com uma <strong>idempotency key</strong> (CPF + timestamp), retornando o QR Code.</li>
                            <li>O frontend faz <strong>polling</strong> num endpoint de status até o pagamento ser aprovado — sem uso de webhook.</li>
                            <li>Aprovado o pagamento, uma segunda chamada à IA reescreve o currículo completo, com um prompt com regras explícitas contra alucinação ("nunca invente experiências, mantenha 100% dos fatos reais"), e o resultado é exportado em PDF via <strong>html2pdf.js</strong>.</li>
                        </ul>
                        <span className="block mt-4 text-xs font-semibold text-foreground tracking-[1px]">DESTAQUES</span>
                        <ul className="mt-2 list-disc pl-4 text-sm text-icons/90 space-y-1.5">
                            <li>Arquitetura deliberadamente sem framework no frontend e sem SDK da Anthropic no backend, evidenciando domínio dos fundamentos por trás das abstrações.</li>
                            <li>Prompt engineering com guard-rails explícitos contra alucinação, num caso de uso sensível (reescrever fatos profissionais reais de alguém).</li>
                            <li>100% serverless: sem servidor dedicado, escala a zero, funções isoladas por responsabilidade (análise, criação de pagamento, verificação de pagamento, reescrita).</li>
                        </ul>
                        <div className="mt-5 flex max-w-full gap-3 text-xs">
                            <a href="https://github.com/dzn0/analisa-cv" target="_blank" rel="noopener noreferrer" className="group transition transform duration-200 hover:scale-110 px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3">Código
                                <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 transition transform duration-200" />
                            </a>
                            <a href="https://www.analisacv.com.br/" target="_blank" rel="noopener noreferrer" className="group px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3 transition transform duration-200 hover:scale-110">Produto
                                <ArrowUpRightIcon className="h-4 w-4 transition transform duration-200 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
