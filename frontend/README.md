# Frontend

## Como rodar?
- Primeiramente instale todas as dependências usando: ```npm install```.
- Agora é só usar o comando ```npm run dev```.
- Com isso o projeto deve estar rodando em [http://localhost:5173/](http://localhost:5173/).

## Exercícios, ou o que deve ser feito
Depois de seguir todo o passo a passo dos outros READMEs, pare e analise os arquivos e o código do frontend, para garantir que você entendeu o que o código está fazendo e onde está cada coisa, depois disso, você pode iniciar as tarefas abaixo:
- [ ] Implementar as funções de cadastro de usuário e admin (as funções são praticamente a mesma, só que na de usuário o campo admin deve ser FALSO e o contrário no caso do admin), no arquivo config/types.ts você encontrará a tipagem do usuário;
- [ ] Implementar as funções de login de usuário e admin (na função de login do usuário o campo de admin deve ser enviado como FALSO para a API, e o contrário na do admin);
- [ ] Impedir que a tela HOME seja acessada caso o usuário não esteja logado, uma dica é manter o usuário logado atualmente no context de usuários, e caso esse context não tenha nenhum usuário, no useEffect da tela você pode fazer o redirecionamento;
- [ ] A tela de HOME deve mostrar as informações do usuário atualmente logado:
  - [ ] Quando o usuário clicar em log out ele deve ser deslogado e retornado a tela de log in.
  - [ ] As informações do usuário mostradas nos inputs deve poder ser editadas, e quando o mesmo clicar em "atualizar" uma requisição deve ser enviada para a API para atualiza-las de acordo com o valor atual dos inputs.
  - [ ] Caso o usuário clique em "Deletar" uma requisição para a API deve ser chamada excluindo o cadastro do mesmo (para excluir basta mandar o id do mesmo), ele deve ser deslogado e retornado a tela de log in em seguida.
- [ ] Apenas um usuário com permissão de admin deve poder ter acesso a tela de DASHBOARD, caso o usuário não seja admin ou não esteja logado ele deve ser redirecionado a tela de login de admin;
- [ ] Na tela de dashboad deve ser listado TODOS os usuário NÃO ADMINISTRADORES cadastrados no banco de dados:
  - [ ] o Admin poderá deslogar e ser redirecionado a tela de login de admin;
  - [ ] o Admin poderá excluir usuário listados no dashboard, ao clicar no botão de excluir usuário, o sistema deve mostrar um alerta de confirm perguntando se o Admin realmente quer excluir o usuário, caso confirmado deve ser realizado uma requisição a API pedindo para excluir o usuário.
- [ ] O usuário não pode acessar o DASHBOARD e o admin não pode acessar o HOME.