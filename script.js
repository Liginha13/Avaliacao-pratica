 <script>
        // Inicializar Ícones do Lucide
        lucide.createIcons();

        // Menu Mobile Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Simulação de Tempestade de Poeira
        let isStormActive = false;
        function toggleStormSim() {
            const overlay = document.getElementById('storm-overlay');
            const img = document.getElementById('storm-img');
            isStormActive = !isStormActive;

            if (isStormActive) {
                overlay.classList.remove('opacity-0');
                overlay.classList.add('opacity-100');
                img.classList.add('filter', 'sepia', 'brightness-50');
            } else {
                overlay.classList.remove('opacity-100');
                overlay.classList.add('opacity-0');
                img.classList.remove('filter', 'sepia', 'brightness-50');
            }
        }

        // Calculadora de Ração da Colônia
        function calculateRations() {
            const colonists = parseInt(document.getElementById('colony-size').value) || 0;
            
            const calories = (colonists * 2500).toLocaleString('pt-BR');
            const water = (colonists * 50).toLocaleString('pt-BR');
            const o2 = (colonists * 0.85).toFixed(1);

            document.getElementById('cal-val').innerText = calories;
            document.getElementById('water-val').innerText = water;
            document.getElementById('o2-val').innerText = o2;
        }

        // Alternador de Trajes (Interno vs Externo)
        function switchSuit(type) {
            const btnIndoor = document.getElementById('btn-indoor');
            const btnOutdoor = document.getElementById('btn-outdoor');
            
            const tag = document.getElementById('suit-tag');
            const weight = document.getElementById('suit-weight');
            const title = document.getElementById('suit-title');
            const desc = document.getElementById('suit-desc');
            const features = document.getElementById('suit-features');
            const rad = document.getElementById('suit-rad');
            const mob = document.getElementById('suit-mob');

            if (type === 'indoor') {
                btnIndoor.className = "w-full text-left p-6 rounded-2xl border transition duration-300 martian-glass border-martian-amber bg-martian-red/20";
                btnOutdoor.className = "w-full text-left p-6 rounded-2xl border transition duration-300 martian-glass border-martian-border opacity-70 hover:opacity-100";

                tag.innerText = "CATEGORIA: TRAJE INTERNO (IVA)";
                weight.innerText = "PESO: 2.5 KG";
                title.innerText = "Macacão Biométrico Biosuit Internal";
                desc.innerText = "Desenvolvido com tecidos inteligentes transpiráveis de fibra de prata. Monitora batimentos cardíacos, níveis de hidratação e temperatura corporal dos colonos enquanto se deslocam nos domos.";

                features.innerHTML = `
                    <div class="flex items-center gap-3">
                        <i data-lucide="check-circle" class="w-5 h-5 text-martian-amber shrink-0"></i>
                        <span class="text-sm text-martian-sand">Fibras com propriedades antibacterianas para uso prolongado.</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <i data-lucide="check-circle" class="w-5 h-5 text-martian-amber shrink-0"></i>
                        <span class="text-sm text-martian-sand">Entradas Magnéticas para acoplamento rápido a ferramentas operacionais.</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <i data-lucide="check-circle" class="w-5 h-5 text-martian-amber shrink-0"></i>
                        <span class="text-sm text-martian-sand">Redução do atrito para evitar atrofias neuromusculares em gravidade reduzida (0.38g).</span>
                    </div>
                `;

                rad.innerText = "MODERADA (INTERNA)";
                rad.className = "text-amber-400";
                mob.innerText = "100% EXCELENTE";
                mob.className = "text-emerald-400";
            } else {
                btnOutdoor.className = "w-full text-left p-6 rounded-2xl border transition duration-300 martian-glass border-martian-amber bg-martian-red/20";
                btnIndoor.className = "w-full text-left p-6 rounded-2xl border transition duration-300 martian-glass border-martian-border opacity-70 hover:opacity-100";

                tag.innerText = "CATEGORIA: TRAJE EXTERNO (EVA)";
                weight.innerText = "PESO: 48 KG (18 KG EM MARTE)";
                title.innerText = "Exotraje de Superfície Mark-V";
                desc.innerText = "Armadura pressurizada de alta resistência revestida com fibra de titânio, Mylar térmico e polietileno injetado. Projetada para resistir até -120°C e tempestades violentas de poeira.";

                features.innerHTML = `
                    <div class="flex items-center gap-3">
                        <i data-lucide="shield-check" class="w-5 h-5 text-martian-orange shrink-0"></i>
                        <span class="text-sm text-martian-sand">Capacete com visor banhado a ouro 24k e HUD com realidade aumentada.</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <i data-lucide="shield-check" class="w-5 h-5 text-martian-orange shrink-0"></i>
                        <span class="text-sm text-martian-sand">Mochila PLSS com até 8 horas de oxigênio de emergência e reciclagem de O₂.</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <i data-lucide="shield-check" class="w-5 h-5 text-martian-orange shrink-0"></i>
                        <span class="text-sm text-martian-sand">Camada externa autorregenerativa contra perfurações de micrometeoritos.</span>
                    </div>
                `;

                rad.innerText = "MÁXIMA (ESCUDO GCR/SPE)";
                rad.className = "text-emerald-400";
                mob.innerText = "75% RESTRITA";
                mob.className = "text-amber-400";
            }

            // Re-renderizar ícones inseridos dinamicamente
            lucide.createIcons();
        }
    </script>