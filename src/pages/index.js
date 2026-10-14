export default function Home() {
  return (
    <main className="container-geral">
      <section className="landing-page">
        <p>A EMOÇÃO COMEÇA AQUI</p>
        <h1 className="text-3xl font-bold">O Mundo da <span>Formula 1</span></h1>
        <p>Acompanhe os maiores pilotos do mundo, conheça as equipes e descubra tudo sobre a categoria mais veloz do automobilismo.</p>
        <div className="button-container">
          <a href="/pilotos"><button className="btn btn-info">Conhecer Pilotos</button></a>
          <a href="/equipes"><button className="btn btn-info">Conhecer Equipes</button></a>
        </div>

        <div className="stats-container">
          <p>24 GPs na Temporada</p>
          <p>11 Equipes - 22 Pilotos</p>
          <p>20+ Anos de História</p>
        </div>
      </section>

      <div className="hero-images">
        <img id="fotoPage" src="/formula.png" alt="Piloto" />
      </div>
    </main>
  );
}