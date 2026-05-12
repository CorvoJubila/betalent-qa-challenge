# Betalent desafio QA

## Sobre o projeto

Este projeto foi desenvolvido como parte de um desafio técnicopara a vaga de  Software Quality Assurance Tester, com foco na validação de cenários UI e API.

O projeto conta com:
- Testes automatizados de interface usando Playwright
- Testes automatizados de API utilizando Playwright Request API
- Documentação manual dos cenários testados
- Análise de riscos
- Sugestão de melhorias
- Evidências de execução

---

## Tecnologias usadas

- Playwright
- TypeScript
- Node.js
- VSCode

---

## Estrutura do projeto

```bash
tests/
├── ui/
├── api/

docs/
├── ui-test-plan.md
├── api-test-plan.md
├── bugs-found.md
├── risks-and-improvements.md

evidences/
```

---

## Cenários Implementados - UI

### Autenticação
- Login válido
- Login inválido
- Logout

### Carrinho
- Adicionar produtos
- Remover produtos

### Checkout
- Fluxo completo de compra

### Gerenciamento de Produtos
- Ordenação A-Z
- Ordenação Z-A
- Ordenação menor para maior preço
- Ordenação maior para menor preço

---

## Cenários Implementados - API

### Autenticação
- Geração de token de autenticação

### CRUD de Reservas
- Criar reserva
- Buscar reserva
- Atualizar reserva
- Deletar reserva

### Segurança
- Validação de autenticação inválida
- Validação de endpoints protegidos

---

## Como Executar

Instalar dependências:

```bash
npm install
```

Executar todos os testes:

```bash
npx playwright test
```

Executar apenas testes UI:

```bash
npx playwright test tests/ui
```

Executar apenas testes API:

```bash
npx playwright test tests/api
```

Abrir relatório do Playwright:

```bash
npx playwright show-report
```

---

## Premissas Assumidas

- Os ambientes públicos utilizados estavam disponíveis durante a execução
- Os dados utilizados nos testes de API foram criados dinamicamente
- Os testes foram executados utilizando navegador Chromium

---

## Melhorias Futuras

- Implementação de pipeline CI/CD
- Automação de acessibilidade
- Testes de regressão visual
- Melhor isolamento de dados de teste

---

## Riscos Identificados

- O ambiente público da API pode gerar inconsistência de dados
- Instabilidades externas podem impactar a execução
- Não foi identificado controle de rate limit na autenticação da API