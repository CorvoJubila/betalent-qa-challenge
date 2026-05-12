# Casos de Teste Manuais

## UI Testing - Sauce Demo

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|
| CT-UI-01 | Login com usuário válido | Usuário na tela de login | Informar usuário `standard_user` e senha válida e clicar em Login | Usuário acessa a página de produtos | Pass |
| CT-UI-02 | Login com senha inválida | Usuário na tela de login | Informar senha inválida e clicar em Login | Sistema exibe mensagem de erro | Pass |
| CT-UI-03 | Login com usuário bloqueado | Usuário na tela de login | Informar usuário `locked_out_user` e clicar em Login | Sistema exibe mensagem de usuário bloqueado | Pass |
| CT-UI-04 | Logout do sistema | Usuário autenticado | Abrir menu lateral e clicar em Logout | Usuário retorna para tela de login | Pass |
| CT-UI-05 | Adicionar produto ao carrinho | Usuário autenticado | Clicar em Add to Cart | Produto é adicionado ao carrinho e badge atualizado | Pass |
| CT-UI-06 | Remover produto do carrinho | Produto adicionado ao carrinho | Clicar em Remove | Produto removido do carrinho | Pass |
| CT-UI-07 | Finalizar checkout com sucesso | Produto adicionado ao carrinho | Preencher dados do checkout e finalizar compra | Compra finalizada com mensagem de sucesso | Pass |
| CT-UI-08 | Ordenação A-Z | Usuário autenticado | Selecionar ordenação A-Z | Produtos exibidos em ordem alfabética crescente | Pass |
| CT-UI-09 | Ordenação Z-A | Usuário autenticado | Selecionar ordenação Z-A | Produtos exibidos em ordem alfabética decrescente | Pass |
| CT-UI-10 | Ordenação Low to High | Usuário autenticado | Selecionar ordenação de menor para maior preço | Produtos exibidos em ordem crescente de preço | Pass |
| CT-UI-11 | Ordenação High to Low | Usuário autenticado | Selecionar ordenação de maior para menor preço | Produtos exibidos em ordem decrescente de preço | Pass |
| CT-UI-12 | Navegação entre páginas | Usuário autenticado | Navegar entre inventory, carrinho e checkout | Navegação realizada corretamente | Pass |
| CT-UI-13 | Validação responsiva mobile | Usuário acessa aplicação em viewport mobile | Validar exibição dos elementos principais | Layout responsivo exibido corretamente | Pass |
| CT-UI-14 | Validação básica de acessibilidade | Usuário acessa aplicação | Validar navegação e elementos principais | Elementos principais acessíveis ao usuário | Pass |

---

## API Testing - Restful Booker

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|
| CT-API-01 | Gerar token de autenticação | API disponível | Enviar credenciais válidas para endpoint auth | Token gerado com sucesso | Pass |
| CT-API-02 | Autenticação inválida | API disponível | Enviar credenciais inválidas | API retorna erro de autenticação | Pass |
| CT-API-03 | Criar reserva | API disponível | Enviar POST para criação de booking | Reserva criada com bookingid válido | Pass |
| CT-API-04 | Buscar reserva | Reserva criada previamente | Enviar GET com bookingid válido | API retorna dados da reserva | Pass |
| CT-API-05 | Atualizar reserva | Token válido e reserva existente | Enviar PUT para booking | Dados da reserva atualizados | Pass |
| CT-API-06 | Excluir reserva | Token válido e reserva existente | Enviar DELETE para booking | Reserva removida com sucesso | Pass |
| CT-API-07 | Excluir reserva sem autenticação | Reserva existente | Enviar DELETE sem token | API retorna erro de autorização | Pass |
| CT-API-08 | Validar campos obrigatórios | API disponível | Enviar request incompleto | API retorna erro de validação | Pass |
| CT-API-09 | Validar tempo de resposta | API disponível | Executar requisição para endpoints principais | API responde dentro do tempo esperado | Pass |
| CT-API-10 | Validar endpoint protegido | Reserva existente | Executar atualização sem token válido | API bloqueia acesso não autorizado | Pass |
| CT-API-11 | Validar múltiplas tentativas de autenticação | API disponível | Executar múltiplas tentativas consecutivas de login | API mantém estabilidade durante autenticações consecutivas | Pass |