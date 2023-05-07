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
        "Segundo o estudo ‘IceBerg Digital’ da Kaspersky, 62% dos brasileiros não sabem identificar notícias falsas, e um estudo do Instituto Poynter afirma que 4 em cada 10 pessoas afirmam receber notícias falsas diariamente.",
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
            "- Verifique a fonte da informação",
            "- Confira a notícia em mais de uma fonte confiável.",
            "- Leia a notícia inteira antes de compartilhar.",
            "- Desconfie de notícias sensacionalistas e que vão contra o senso comum",
            "- Verifique a data da notícia.",
            "- Observe se há erros gramaticais ou ortográficos.",
            "- Não compartilhe notícias sem ter certeza da sua veracidade",
          ],
        },
        {
          title: "Veja este exemplo de fake news:",
          text: [
            "A imagem abaixo apresenta sensacionalismo, ausência de fontes, erros ortográficos, falta de informações e é uma fake news.",
          ],
          image: "/img/news/fake-news/example.jpg",
        },
      ],
    },
  };
};
