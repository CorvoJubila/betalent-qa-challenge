# Riscos e Melhorias

## Riscos Identificados

### UI
- Dependência de ambiente público externo
- Possíveis instabilidades de rede podem impactar a execução dos testes
- Ausência de testes automatizados de acessibilidade

### API
- Ambiente compartilhado pode gerar inconsistência de dados entre execuções
- Ausência de controle de rate limit
- Dependência de autenticação via token

---

## Sugestões de Melhoria

### UI
- Implementar testes automatizados de acessibilidade
- Adicionar testes de responsividade
- Melhorar feedback visual em cenários de erro
- Disponibilizar ambiente dedicado para testes

### API
- Implementar validação de schema das respostas
- Adicionar testes de carga e performance
- Melhorar cobertura de cenários negativos
- Disponibilizar ambiente controlado de homologação