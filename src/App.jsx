import './App.css';

const featureItems = [
  {
    title: '분리된 스타일',
    description: 'JSX와 CSS를 분리해 구조를 간단하게 유지합니다.',
  },
  {
    title: '명확한 구성',
    description: '컴포넌트와 스타일의 역할을 분명히 나눴습니다.',
  },
  {
    title: '확장 가능',
    description: '카드 항목을 추가해 화면을 확장할 수 있습니다.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="hero__eyebrow">리메이크 컴포넌트</p>
        <h1 className="hero__title">JSX와 CSS를 분리한 새 화면</h1>
        <p className="hero__subtitle">
          요청하신 대로 스타일을 별도 파일로 분리하고, 다시 구성했습니다.
        </p>
        <div className="hero__actions">
          <button type="button" className="button button--primary">
            시작하기
          </button>
          <button type="button" className="button button--ghost">
            구성 보기
          </button>
        </div>
      </header>

      <section className="features">
        {featureItems.map((item) => (
          <article key={item.title} className="card">
            <h2 className="card__title">{item.title}</h2>
            <p className="card__description">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
