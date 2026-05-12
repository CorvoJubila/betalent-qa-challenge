# Plano de testes para API

## Objetivo

Validar os principais fluxos da API Restful-Booker, garantindo o correto funcionamento das funcionalidades de autenticação, gerenciamento de reservas e validações de segurança.

---

## Escopo

### Funcionalidades testadas

- Autenticação
- Criação de reservas
- Consulta de reservas
- Atualização de reservas
- Exclusão de reservas
- Validação de autenticação
- Validação de endpoints protegidos

---

## Tipos de Teste

- Testes funcionais
- Testes automatizados de API
- Testes de segurança
- Validação de respostas HTTP

---

## Cenários Cobertos

### Autenticação
- Geração de token válido
- Validação de credenciais

### CRUD de Reservas
- Criar reserva
- Buscar reserva criada
- Atualizar dados da reserva
- Excluir reserva

### Segurança
- Validação de acesso autenticado
- Validação de endpoints protegidos

---

## Critérios de Sucesso

- API retorna status codes esperados
- Token é gerado corretamente
- Reservas são criadas e atualizadas com sucesso
- Endpoints protegidos exigem autenticação
- Dados retornados correspondem aos dados enviados

---

## Ferramentas Utilizadas

- Playwright Request API
- TypeScript
- Node.js

---

## Evidências

As evidências de execução dos testes estão disponíveis na pasta `/evidences`.

---

## Riscos Identificados

- Ambiente público compartilhado pode gerar inconsistência de dados
- Instabilidade externa da API pode impactar a execução
- Dependência de disponibilidade do ambiente externo

---

## Melhorias Futuras

- Implementação de testes de carga
- Validação avançada de schema
- Integração com pipeline CI/CD
- Geração automatizada de relatórios