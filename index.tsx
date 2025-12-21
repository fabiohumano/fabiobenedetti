
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Sistema: index.tsx carregado com sucesso.");

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Sistema: React renderizado no DOM.");
  } catch (error) {
    console.error("Erro na renderização do React:", error);
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 20px; color: #ff4444; font-family: sans-serif; text-align: center;">
        <h1 style="font-size: 1.5rem; margin-bottom: 10px;">Ops! Algo deu errado.</h1>
        <p style="color: #888;">${error instanceof Error ? error.message : 'Erro desconhecido'}</p>
        <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: white; color: black; border: none; border-radius: 5px; cursor: pointer;">Tentar Novamente</button>
      </div>
    `;
  }
} else {
  console.error("Erro Fatal: Elemento #root não encontrado.");
}
