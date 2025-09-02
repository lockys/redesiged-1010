import React, { useState } from 'react';

// Lazy-loaded YouTube videos with skeleton placeholders
function Video({ id, title }) {
  const [loaded, setLoaded] = useState(false);

  const load = () => setLoaded(true);

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      load();
    }
  };

  return (
    <div
      className="video"
      data-video={id}
      tabIndex="0"
      role="button"
      aria-label={`播放${title}`}
      onClick={load}
      onKeyDown={handleKey}
    >
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      ) : (
        <div className="skeleton"></div>
      )}
    </div>
  );
}

export default function Videos() {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: '影片一' },
    { id: 'kXYiU_JCYtU', title: '影片二' }
  ];

  return (
    <section id="videos" className="videos">
      <div className="container">
        <h2><span className="accent">｜</span>活動影音</h2>
        <div className="video-grid">
          {videos.map((v) => (
            <Video key={v.id} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
