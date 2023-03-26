    Aplicação de loja online da Marvel Comics para a NeoApp. 

    Primeiramente a ideia que tive foi fazer um layout limpo mas ao mesmo tempo com as cores caracteristicas da Marvel Comics, trazendo um pouco da infancia utilizando cores mais fortes mas sem poluição visual.

    Utiizei styled components para a customização do site, utilizei Axios para o consumo de API, a primeira vista pensei em utilizar um biblioteca visual para a tela de carregamento, mas acabei optando por criar um spinner proprio para não influenciar no desempenho do site ou possivel erro futuro que poderia acontecer utilizando bibliotecas de terceiros.

    Coloquei algumas animações bem sutis nos Cards de cada Comic respeitando o limite do uso desse tipo de animação que alem de afetar o desempenho se usado de forma exagerada pode deixar o site um pouco "poluido", na parte de detalhes da comic quis colocar algo mais original que mantivesse e desse um "ar" de uma loja de quadrinhos colocando a imagem do proprio quadrinho como plano de fundo.

    Além disso tudo quis fazer uma adaptação propria minha onde eu percebi que algumas Comics vinham com o valor(prices) com valor 0 então não vi sentido em colocar essas comics para serem vendidas e adapatei para "Unavailable" quando o valor for 0 e o botão de comprar desabilitado sinalizando para o usuario que tal produto está em falta.

    Apliquei os cards Normais e Raros, pelo tempo que foi dado não consegui fazer isso com 100% de eficiencia mas espero que tenha sido do agrado da empresa dado o tempo, apliquei um desconto de 10% no Cart quando utilizado o cupom "NeoApp".

    Quanto aos teste utilizando Cypress, ainda precisaria de tempo para aprender a utilizar já que seria a primeira vez minha utilizando esse metodo de testes, mas gostei do pouco que vi da ferramenta e irei estudala.


    CUPOM: "NeoApp" respeitando as letras maiusculas.