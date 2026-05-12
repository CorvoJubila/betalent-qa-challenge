# Bugs e Observações Identificadas

## UI - Sauce Demo

### Mensagens de erro genéricas
As mensagens de erro apresentadas em cenários de login inválido poderiam ser mais específicas para melhorar a experiência do usuário.

### Ausência de validações avançadas no checkout
O fluxo de checkout possui validações básicas, porém não foram identificadas validações mais robustas para formatos de dados inválidos.

### Ausência de testes nativos de acessibilidade
A aplicação não demonstra mecanismos claros de acessibilidade automatizada.

---

## API - Restful Booker

### Ambiente compartilhado
Por se tratar de um ambiente público, os dados podem variar entre execuções e impactar a previsibilidade dos testes.

### Ausência de controle de rate limit
Não foi identificado bloqueio para múltiplas tentativas consecutivas de autenticação.

### Ausência de validação de schema
A API retorna respostas válidas, porém sem validação formal de schema durante os testes realizados.