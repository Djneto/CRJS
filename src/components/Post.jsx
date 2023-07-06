import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/46111526?v=4" />
          <div className={styles.authorInfo}>
            <strong>Djalma Bastos</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 11:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Albion Online é um MMORPG SandBox em que você escreve sua própria
          história, Invés de seguir um caminho pré-determinado.
        </p>
        <p>
          Explore um vasto mundo aberto que consiste de 5 ecosistemas únicos.
        </p>
        <p>
          Tudo que você faz gera um impacto no mundo, já que em Albion a
          economia é produzida pelo jogador.
        </p>
        <p>
          Cada peça de equipamento é construída por jogadores a partir de
          recursos obtidos por eles.
        </p>
        <p>
          <a href="#">Link aleatório</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
