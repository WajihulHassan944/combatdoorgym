'use client';

import { useEffect } from 'react';

function generateUUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function getDeviceId() {
  let id = localStorage.getItem('deviceId');
  if (!id) {
    id = generateUUID();
    localStorage.setItem('deviceId', id);
  }
  return id;
}

export default function ClickTracker() {
  useEffect(() => {
    const deviceId = getDeviceId();
    const domain = 'https://www.combatdoorgym.com/';

    fetch('https://fantasymmadness-game-server-three.vercel.app/track-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId, domain })
    })
      .then(res => res.json())
      .then(data => console.log('Click Tracked:', data.message))
      .catch(err => console.error('Tracking failed:', err));
  }, []);

  return null; // No UI needed
}
