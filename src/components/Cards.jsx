import React from 'react';
import thumb from '../../assets/thumb1.svg';

// Summit cards grid
const summitItems = [
  { title: '典禮流程', text: '預計於上午十點準時開始，敬請期待。' },
  { title: '貴賓介紹', text: '國內外嘉賓雲集，共襄盛舉。' },
  { title: '精彩表演', text: '樂舞展演，呈現多元文化之美。' }
];

export function SummitSection() {
  return (
    <section id="summit" className="summit">
      <div className="container">
        <h2><span className="accent">｜</span>國慶大會</h2>
        <div className="grid">
          {summitItems.map((item, i) => (
            <article className="card" data-reveal key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Latest news wide card
export function NewsSection() {
  const item = {
    chip: '9/4 15:00 開放',
    title: '國慶活動報名即將開始',
    text: '敬請期待，更多活動資訊將陸續公布。',
    img: thumb,
    link: '#'
  };

  return (
    <section id="news" className="news">
      <div className="container">
        <h2><span className="accent">｜</span>最新消息</h2>
        <article className="news-card" data-reveal>
          <div className="news-info">
            <div className="chip">{item.chip}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.link} className="btn primary">前往報名</a>
          </div>
          <img src={item.img} alt="活動預告縮圖" width="400" height="300" loading="lazy" />
        </article>
      </div>
    </section>
  );
}
