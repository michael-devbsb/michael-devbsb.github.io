# Portfólio — Michael Monteiro

Portfólio pessoal de **Michael Monteiro**, Desenvolvedor e QA, graduando em Ciência da Computação. Projetos em Flutter, web e IA.

---

## Detalhes técnicos

### Estrutura do projeto

| Item | Descrição |
|------|-----------|
| **Tipo** | Single Page Application (SPA) |
| **Arquivos principais** | `index.html` (HTML + CSS + JavaScript embutidos) |
| **Hosting** | GitHub Pages |
| **URL** | `https://michael-devbsb.github.io` |

### Tecnologias utilizadas

| Tecnologia | Versão/Detalhes |
|------------|-----------------|
| **HTML** | HTML5 semântico |
| **CSS** | CSS3 com variáveis custom properties |
| **JavaScript** | Vanilla JS (sem frameworks) |
| **Font Awesome** | 6.4.0 (CDN) |
| **Google Fonts** | Poppins (pesos: 300, 400, 600, 700) |

### Recursos e funcionalidades

- **Design responsivo** — breakpoint principal em `768px`
- **Tema escuro** — paleta de cores dark
- **Navegação fixa** — navbar com blur e backdrop-filter
- **Scroll suave** — âncoras com `scroll-behavior: smooth`
- **Animação de entrada** — seções com `IntersectionObserver` (reveal ao rolar)
- **Botão voltar ao topo** — exibido após 400px de scroll
- **Formulário de contato** — integrado via `mailto:` para envio rápido
- **Acessibilidade** — link "Pular para o conteúdo", `aria-label`, `.sr-only`
- **Scrollbar personalizada** — estilo customizado com WebKit

### Paleta de cores (CSS Variables)

| Variável | Hex | Uso |
|----------|-----|-----|
| `--primary` | `#00d1b2` | Cor principal (turquesa) |
| `--primary-dark` | `#00b89c` | Hover e estados ativos |
| `--secondary` | `#6e44ff` | Destaques (roxo) |
| `--dark` | `#111` | Fundo principal |
| `--dark-light` | `#222` | Fundos alternativos |
| `--light` | `#eee` | Texto claro |
| `--gray` | `#888` | Texto secundário |
| `--success` | `#48c774` | Feedback positivo |

### Layout e seções

1. **Header/Hero** — Apresentação, CTAs
2. **Sobre** — Biografia e objetivos
3. **Habilidades** — Tags de tecnologias (HTML/CSS, JS, Python, Flutter, Firebase, Git, QA, ML, Mobile, Web)
4. **Projetos** — Grid responsivo com cards:
   - App de Diário (Flutter, Firebase, Mobile)
   - Site Código de Cria (HTML/CSS, Landing Page)
   - IA de Reconhecimento de Plantas (Python, Machine Learning)
5. **Formação** — Timeline de educação
6. **Contato** — Email, telefone, GitHub, LinkedIn + formulário mailto
7. **Footer** — Links sociais e copyright

### JavaScript

- **Ano dinâmico** no footer
- **IntersectionObserver** para animação de seções (threshold 0.1)
- **Event listeners** para links âncora, botão voltar ao topo e formulário
- **Formulário** — `preventDefault` e redirecionamento para `mailto:` com assunto e corpo preenchidos

### Acessibilidade

- Link "Pular para o conteúdo principal"
- `aria-label` em botões e links de navegação
- Classe `.sr-only` para leitores de tela
- `.sr-only-focusable` para foco em teclado

---

## Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/michael-devbsb/michael-devbsb.github.io.git
cd michael-devbsb.github.io

# Abrir no navegador (ou usar um servidor local)
# Exemplo com Python:
python -m http.server 8000
# Acesse http://localhost:8000
```

---

## Licença

Portfólio pessoal. Todos os direitos reservados © Michael Monteiro.
