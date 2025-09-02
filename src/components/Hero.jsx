import React, { useState, useEffect } from 'react';

// Hero section with countdown and calls to action
function getTimeLeft() {
  const target = new Date('2025-10-10T10:00:00+08:00').getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return null;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return { d, h, m };
}

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-inner" data-reveal>
        <h1><span>中華民國</span><br /><span>生日快樂</span></h1>
        <p className="sub">114年國慶大會｜台北</p>
        {time && (
          <div className="countdown" aria-label="Countdown">
            <span><strong>{time.d}</strong><small>Days</small></span>
            <span><strong>{time.h}</strong><small>Hours</small></span>
            <span><strong>{time.m}</strong><small>Minutes</small></span>
          </div>
        )}
        <div className="actions">
          <a href="#news" className="btn primary">查看最新消息</a>
          <a href="#summit" className="btn ghost">國慶大會資訊</a>
        </div>
      </div>
    </section>
  );
}
