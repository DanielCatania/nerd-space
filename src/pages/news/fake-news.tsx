import React from "react";
import { GetServerSideProps } from "next";
import News from "@/components/News";
import Data from "@/components/News/type";

export default function FakeNews(props: Data) {
  return (
    <main>
      <News {...props} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      title: "Fato ou fake? E como as fake news afetam o cenário político?",
      introduction: [
        "As Fake News, notícias falsas, são um problema grave na sociedade atual, pois afetam diversos aspectos, como o cenário social, esportivo, econômico e político. Uma única notícia falsa pode destruir a carreira de um atleta ou a reputação de uma atriz, por exemplo, além de influenciar a decisão de investidores e eleitores.",
        "Segundo o estudo 'IceBerg Digital’ da Kaspersky, 62% dos brasileiros não sabem identificar notícias falsas, e um estudo do Instituto Poynter afirma que 4 em cada 10 pessoas afirmam receber notícias falsas diariamente.",
        "Você costuma receber notícias falsas? Sabe como identificá-las? Aqui vão algumas dicas para reconhecê-las e evitar disseminar desinformação. Que tal compartilhar este artigo com o grupo em que você recebe essas notícias falsas?",
      ],
      coverImage: {
        src: "/img/news/fake-news/cover.jpg",
        alt: "Fake News",
      },
      date: "07/05/2023",
      authors: [
        { name: "Daniel Catania", image: "/img/authors/daniel.jpg" },
        { name: "Tiago Franca", image: "/img/authors/tiago.jpg" },
        { name: "Leonardo Nantes", image: "/img/authors/leo.jpg" },
        { name: "Noah Oliveira", image: "/img/authors/noah.jpg" },
      ],
      topics: [
        {
          title:
            "Aqui estão sete dicas para evitar a disseminação de notícias falsas:",
          text: [
            "- Verifique a fonte da informação.",
            "- Confira a notícia em mais de uma fonte confiável.",
            "- Leia a notícia inteira antes de compartilhar.",
            "- Desconfie de notícias sensacionalistas e que vão contra o senso comum.",
            "- Verifique a data da notícia.",
            "- Observe se há erros gramaticais ou ortográficos.",
            "- Não compartilhe notícias sem ter certeza da sua veracidade.",
          ],
        },
        {
          title: "Veja este exemplo de fake news:",
          text: [
            "A imagem abaixo apresenta sensacionalismo, ausência de fontes, erros ortográficos, falta de informações e é uma fake news.",
          ],
          image: "/img/news/fake-news/example.jpg",
        },
        {
          title: "Fake News na política:",
          text: [
            "As notícias falsas têm um impacto significativo na política, já que muitas informações inverídicas circulam pelas redes sociais e podem influenciar a decisão dos eleitores. Um exemplo disso é a notícia falsa sobre a inclusão do 'kit gay' nas escolas, que muitas pessoas acreditam ter surgido em 2022 ou em 2018, durante a disputa entre esquerda e direita. Na verdade, o 'kit gay' foi criado em 2010 como uma iniciativa de combate à homofobia e estava em análise pelo Ministério da Educação (MEC), que rejeitou o projeto. Na época, o tema foi comentado pelo então deputado do Partido Liberal (PL), Jair Bolsonaro, o que o levou a ser rotulado como homofóbico. Em 2018 o TSE proibiu que se espalhasse qualquer coisa sobre o assunto e qualquer outra Fake news que atacasse o então candidato à presidência Jair Bolsonaro.",
            "Porém a direita também utilizou desse recurso para atacar o outro lado disseminando notícias falsas, isso se espalhou tanto que cerca de 83,4% dos eleitores do Bolsonaro acreditavam que Haddad havia distribuído o 'Kit gay' com mamadeiras de 'piroca' nas escolas.",
          ],
          image: "/img/news/fake-news/post.jpg",
        },
      ],
    },
  };
};
