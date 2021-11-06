import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MedStudio</title>
  <link rel="shortcut icon" href="icons/logo.png" />
  <link rel="stylesheet" href="css/loader.css" />
  <link rel="stylesheet" href="css/main.css" />
  <link rel="stylesheet" href="css/fonts.css" />
  <link rel="stylesheet" href="css/header.css" />
  <link rel="stylesheet" href="css/cards.css" />
  <link rel="stylesheet" href="css/side-nav.css" />
  <link rel="stylesheet" href="css/footer.css" />
  <link rel="stylesheet" href="css/layers.css" />
  <link rel="stylesheet" href="css/exam.css" />
  <link rel="stylesheet" href="css/videoPlaylist.css" />
  <link rel="stylesheet" href="css/form.css" />
  <div className="loader-container" id="loader">
    <div className="indicator">
      <svg width="16px" height="12px">
        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
      </svg>
      <p>Loading</p>
    </div>
  </div>
  <header>
    <img
      className="icon btn-closeLayer"
      id="btn-closeLayer"
      src="icons/left-arrow.svg"
      alt="back"
    />
    <img
      src="icons/menu.svg"
      id="open-sideMenu"
      className="icon trigger-layer"
      data-layername="side-nav"
      alt="menu"
    />
    <img
      className="icon btn-closeQuiz"
      id="btn-closeQuiz"
      src="icons/exit.svg"
      alt="back"
    />
    <h1 className="appName" id="title">
      Medstudio
    </h1>
    <div id="timer" />
    
  </header>
  <main>
    <section
      className="layer"
      id="layer-login"
      data-layername="login"
      data-layertitle="Inicio de Sesion"
    ></section>
    <section className="cards-mode-container">
      <div
        className="card-mode mode-study trigger-layer"
        role="button"
        data-layername="study"
        data-layertitle="Estudia"
      >
        <h3>Estudia</h3>
        <p>Bibliografias: Guias Clinicas Minsal...</p>
      </div>
      <div
        className="card-mode mode-play trigger-layer"
        role="button"
        data-layername="play"
        data-layertitle="Juega"
      >
        <h3>Juega</h3>
        <p>Juega, aprende y mide</p>
      </div>
      <div
        className="card-mode mode-test trigger-layer"
        role="button"
        data-layername="test-mode"
        data-layertitle="Examen"
      >
        <h3>Examen</h3>
        <p>Creado para medir conocimiento y destreza</p>
      </div>
      <div
        className="card-mode mode-history trigger-layer"
        role="button"
        data-layername="history"
        data-layertitle="Historial"
      >
        <h3>Historial</h3>
        <p>Aqui encontraras los resultados de lo que has hecho en esta app</p>
      </div>
    </section>
    {/*LAYERS*/}
    <div className="overlay" id="layer-side-nav">
      <div className="side-nav">
        <div className="logo">
          <img src="icons/logo.png" alt="logo" />
        </div>
        <nav>
          <ul>
            <li
              role="button"
              className="nav-btn trigger-layer"
              data-layername="preferences"
            >
              <img src="icons/engranaje.svg" alt="config" />
              <b>Preferencias</b>
            </li>
            <li
              role="button"
              className="nav-btn openInNewTab"
              data-href="./policy.html"
            >
              <img src="icons/privacidad.svg" alt="privacidad" />
              <b>Politica de Privacidad</b>
            </li>
            <li
              role="button"
              className="nav-btn trigger-layer"
              data-layername="about"
            >
              <img src="icons/acercade.svg" alt="acercade" />
              <b>Acerca de</b>
            </li>
            <li
              role="button"
              className="nav-btn trigger-layer"
              data-layername="support"
            >
              <img src="icons/question.svg" alt="question" />
              <b>Ayuda y soporte</b>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <section className="layer" id="layer-study">
      <nav className="layer-nav max-width-500">
        <ul>
          <li
            className="mode-mir trigger-layer"
            role="button"
            data-layername="uCatolica-topics"
            data-layertitle="Areas de estudio"
          >
            <img className="icon" src="icons/F de medicina.png" />
            <h3>Resumenes Facultad de medicina Universidad de Chile</h3>
          </li>
          <li
            className="mode-mir trigger-layer"
            role="button"
            data-layername="mir-topics"
            data-layertitle="Areas de estudio"
          >
            <img
              className="icon"
              src="icons/amir.png"
              style={{ height: "inherit" }}
            />
            <h3>Manual Mir 12da edición</h3>
          </li>
          <li
            className="openInNewTab"
            data-href="https://drive.google.com/file/d/1sy5cjPPXvS34O5vm1x-MiTe3vi8c2f8K/view?usp=sharing"
          >
            <img className="icon" src="icons/audio.svg" />
            <h3>Audios</h3>
          </li>
          <li
            role="button"
            className="openInNewTab"
            data-href="https://drive.google.com/file/d/0B654wj2Ede6dWWtTRWI5bU9oWEE/view?usp=sharing"
          >
            <img className="icon" src="icons/guias_minsal.jpg" />
            <h3>Guias clinicas Minsal</h3>
          </li>
          <li
            className="openInNewTab"
            data-href="https://drive.google.com/file/d/1KmmALfHPWqpshAQ2HKFiFIhb5I81xCt2/view?usp=drivesdk"
          >
            <img className="icon" src="icons/drguevara.png" />
            <h3>Resumenes Dr Guevara</h3>
          </li>
          <li className="trigger-layer" data-layername="video-playlist">
            <img className="icon" src="icons/youtube.svg" />
            <h3>Videos Dr Guevara</h3>
          </li>
        </ul>
      </nav>
      <div
        className="openInNewTab txt-center"
        data-href="https://www.drguevara.cl"
      >
        <h3>*Autoria Dr Guevara</h3>
        <p>Más información </p>
      </div>
    </section>
    <section className="layer" id="layer-mir-topics">
      <nav className="layer-nav">
        <ul id="mir-list" className="max-width-500"></ul>
        <br />
        <br />
      </nav>
    </section>
    <section className="layer" id="layer-uCatolica-topics">
      <nav className="layer-nav">
        <ul id="uCatolica-list" className="max-width-500"></ul>
        <br />
        <br />
      </nav>
    </section>
    <section className="layer" id="layer-test-mode">
      <h4>Duracion del examen</h4>
      <div className="txt-center">
        <input
          id="exam-duration-input"
          style={{ minWidth: "20em" }}
          type="range"
          min={20}
          max={90}
          step={10}
        />
        <div>
          <span id="exam-duration">60</span>min
        </div>
      </div>
      <div className="actions">
        <div
          className="btn trigger-layer"
          id="start-exam"
          data-layername="exam"
          data-layertitle="Examen"
        >
          Iniciar
        </div>
      </div>
    </section>
    <section className="layer" id="layer-exam">
      <div id="exam-questions" />
      <div className="actions">
        <div className="btn" id="next-exam">
          Siguiente
        </div>
      </div>
    </section>
    <section className="layer" id="layer-play">
      <div className=" txt-center" id="pre-start-game">
        <p>
          Se te presentarán preguntas para ver cuantas respondes bien en 90 min,{" "}
        </p>
        <br />
        <br />
        La idea es que aprendas si te equivocas, por lo tanto se te dira la
        solución.
        <br />
        <br />
        <br />
        <button className="btn" id="start-game">
          Empezar
        </button>
      </div>
      <div className="QA">
        <div id="question" />
        <br />
        <div id="options" />
        <br />
        <br />
        <div className="txt-center">
          <button className="btn" id="game-rate">
            Siguiente
          </button>
        </div>
      </div>
      <div className="QA-feedback"></div>
    </section>
    <section className="layer" id="layer-rate">
      <div className="QA active" style={{ fontSize: "inherit" }}>
        <p id="rate-state">Correcto</p>
        <ul id="question-feedback-options" className="quiz-optionContainer" />
        <p id="question-feedback" style={{ padding: "0.9em" }} />
        <div className="txt-center">
          <div className="btn" id="next-question">
            Siguien
          </div>
        </div>
      </div>
    </section>
    <section className="layer" id="layer-quiz-result">
      <h4>Resultado</h4>
      <div id="result" />
      <div>
        <table>
          <tbody>
            <tr>
              <td>Correctas</td>
              <td>Incorrectas</td>
              <td>Total</td>
            </tr>
            <tr>
              <td id="corrects">0</td>
              <td id="wrongs">0</td>
              <td id="total">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="quiz-efficiency" />
      <div className="questions-index" id="result-stall" />
      <div className="actions">
        <div className="btn" id="restartQuiz">
          Reiniciar
        </div>
        <div className="btn" id="goHome">
          Ir al inicio
        </div>
      </div>
    </section>
    <section className="layer" id="layer-result-question-postView">
      <div className="max-width-500">
        <p
          id="question-postView"
          style={{ padding: "0.9em", fontSize: "1.2em", lineHeight: "1.3" }}
        />
        <ol id="options-postView" className="optionsContainer-postView"></ol>
        <div className="actions">
          <div className="btn " id="close-questionPostView">
            Atras
          </div>
        </div>
      </div>
    </section>
    <section className="overlay" id="layer-confirm">
      <div className="confirm-box">
        <p>Se abrira el enlace en una nueva pestaña</p>
        <div className="confirm-actions">
          <div role="button" onclick="Layer.closeCurrent()">
            Cancelar
          </div>
          <a
            id="openInNewTab"
            target="_blank"
            href="#"
            onclick="Layer.closeCurrent()"
          >
            Ok
          </a>
        </div>
      </div>
    </section>
    <section className="layer" id="layer-privacy-policy">
      <h4>la pondremos en un dominio aparte</h4>
    </section>
    <section className="layer" id="layer-about">
      <div className="max-width-500 pretty-txt">
        <article>
          <p>
            Somos un equipo de profesionales encargados de ayudar, compartir e
            informar de una manera más interactiva.
          </p>
          <p>
            Si quiere dejar sus recomendaciones u otras opiniones, por favor
            escribanos a{" "}
            <a href="mailto:medstudioparato2@gmail.com">Medstudio &amp; Co </a>
          </p>
        </article>
        <article>
          <p>Nuestras redes sociales:</p>
          <div className="social" id="network">
            <a
              target="_blank"
              href="https://medstudioco.blogspot.com/2020/06/examen-diagnostico.html"
            >
              <img src="icons/blogger.png" width="50px" height="50px" />
            </a>
            <a
              target="_blank"
              href="https://m.facebook.com/groups/2796266497272573/?ref=group_browse"
            >
              <img src="icons/facebook.png" width="55px" height="55px" />
            </a>
          </div>
        </article>
        <article>
          <p>Encuentra nuestra app en diferentes plataformas:</p>
          <br />
        </article>
      </div>
    </section>
    <section className="layer" id="layer-support">
      <h4>Recomendaciones</h4>
      <article>
        <p>
          Para tener una mejor experiencia, recomendamos actualizar su navegador
          a la última versión.{" "}
        </p>
        <br />
        <p>
          Algún problema con la app no dude en ponerse en contacto cte ton
          nuestro soporécnico.
        </p>
      </article>
      <br />
      <h4>Examen</h4>
      <article>
        <p>
          Tiene un selector de tiempo donde usted decide cúanto tiempo durará la
          evaluación
        </p>
        <p>
          Las preguntas son aleatorias, cada vez que reinicie el examen cambia
          el orden
        </p>
        <p>
          Le saldrá una pregunta a la vez con opciones de respuesta múltiple,
          debe se leccionar una o dejar en blanco si lo desea
        </p>
        <p>
          Cuando el tiempo acabe o si presiona el boton de salir se calificara
          el examen, este le dirá su eficiencia.
        </p>
        <br />
      </article>
      <h4>Juego</h4>
      <article>
        <p>
          Las preguntas son aleatorias, cada vez que reinicie el examen cambia
          el orden
        </p>
        <p>
          Al presionar siguiente se le dira si su respuesta es correcta o no,
          además se le mostrará la respuesta correcta, si ha fallado y se le
          dirá por qué.
        </p>
      </article>
      <br />
      <h4>Estudia</h4>
      <article>
        <p>
          En esta seccion es donde esta la bibliografia complementaria
          compartida por ustedes y para ustedes !disfrutenla¡
        </p>
      </article>
    </section>
    <section className="layer" id="layer-preferences">
      <h4>Preferencias</h4>
      <div className="max-width-500">
        <div className="preference">
          <label htmlFor="night-mode">Modo nocturno</label>
          <div className="switch-btn">
            <input type="checkbox" role="switch" id="night-mode" />
            <span />
          </div>
        </div>
        <div className="preference">
          <label htmlFor="theme">Color</label>
          <div className="switch-btn">
            <input type="color" id="theme" />
          </div>
        </div>
        <div className="preference">
          <label htmlFor="anim">Animaciones</label>
          <div className="switch-btn">
            <input type="checkbox" role="switch" id="anim" />
            <span />
          </div>
        </div>
      </div>
    </section>
    <section className="layer" id="layer-video-playlist">
      <nav className="layer-nav">
        <ul className="max-width-500" id="playlist" />
      </nav>
    </section>
    <section className="layer" id="layer-video-player">
      <h3 id="video-title" className="txt-center" />
      <div className="txt-center" id="video"></div>
    </section>
    <section className="layer" id="layer-history">
      <h3 id="video-title" className="txt-center">
        Historial examen
      </h3>
      <div className="history-content">
        <table id="history-exam"></table>
      </div>
      <br />
      <br />
      <h3 id="video-title" className="txt-center">
        Historial juego
      </h3>
      <div className="history-content">
        <table id="history-game"></table>
      </div>
    </section>
   


  </main>
  <script src="js/util.js"></script>
  <script src="js/polyfills.js"></script>
  <script src="js/layers.js"></script>
  <script src="js/preferences.js"></script>
  <script src="js/loaders.js"></script>
  <script src="js/sideMenu.js"></script>
  <script src="js/Quiz.js"></script>
  <script src="js/exam.js"></script>
  <script src="js/mir-topics.json.js"></script>
  <script src="js/u_catolica-topics.json.js"></script>
  <script src="js/quiz-questions.json.js"></script>
  <script src="js/videos.json.js"></script>
  <script src="js/main.js"></script>

  <script src="js/localStorageAPI/LocalDB.js"></script>
  <script src="js/localStorageAPI/LocalDBSchema.js"></script>
  <script src="js/localStorageAPI/History.schema.js"></script>
  <script src="js/localStorageAPI/Image.schema.js"></script>

</>

  )
}
