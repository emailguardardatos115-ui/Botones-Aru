import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'assets');

function b64(name) {
  return readFileSync(path.join(assetsDir, name)).toString('base64');
}

const PP_B64 = b64('himno-pp-clip.mp4');
const DRUM_B64 = b64('drum-clip.mp4');
const SKULL_B64 = b64('muerto-clip.mp4');
const PILL_B64 = b64('apuesta-clip.mp4');
const MONEY_B64 = b64('lucro-clip.mp4');

const html = `<title>Botones Sonoros para ARu</title>
<meta name="apple-mobile-web-app-title" content="Botones ARu" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />

<style>
  :root {
    --stage: #131017;
    --stage-2: #1a1620;
    --panel: #201b29;
    --panel-edge: rgba(255, 255, 255, 0.08);
    --ink: #f4eef8;
    --muted: #a99cbd;

    --fail: #c1502f;    --fail-glow: #e2724d;
    --pp: #2757a8;      --pp-glow: #4f7bcf;
    --drum: #d9a021;    --drum-glow: #f0c25a;
    --skull: #6b3fa0;   --skull-glow: #9c6cd6;
    --pill: #1f9bb5;    --pill-glow: #4fc3dd;
    --money: #2f9e63;   --money-glow: #56c98a;
    --custom: #4a5a72;  --custom-glow: #7c91ae;
  }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: var(--stage);
    color: var(--ink);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: radial-gradient(120% 70% at 50% -10%, var(--stage-2) 0%, var(--stage) 60%);
    overflow: hidden;
  }

  .stage {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    height: 100vh;
    padding: max(14px, env(safe-area-inset-top)) max(14px, env(safe-area-inset-right)) max(14px, env(safe-area-inset-bottom)) max(14px, env(safe-area-inset-left));
  }

  .pad {
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(110px, 1fr);
    gap: 14px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .btn {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    appearance: none;
    border: 1px solid var(--panel-edge);
    border-radius: 26px;
    background: var(--panel);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 10px 24px rgba(0, 0, 0, 0.35);
  }

  .btn:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 3px;
  }

  .btn:active { transform: scale(0.94); }

  .btn--fail   { background: linear-gradient(160deg, color-mix(in srgb, var(--fail) 28%, var(--panel)) 0%, var(--panel) 70%); }
  .btn--pp     { background: linear-gradient(160deg, color-mix(in srgb, var(--pp) 28%, var(--panel)) 0%, var(--panel) 70%); }
  .btn--drum   { background: linear-gradient(160deg, color-mix(in srgb, var(--drum) 28%, var(--panel)) 0%, var(--panel) 70%); }
  .btn--skull  { background: linear-gradient(160deg, color-mix(in srgb, var(--skull) 28%, var(--panel)) 0%, var(--panel) 70%); }
  .btn--pill   { background: linear-gradient(160deg, color-mix(in srgb, var(--pill) 28%, var(--panel)) 0%, var(--panel) 70%); }
  .btn--money  { background: linear-gradient(160deg, color-mix(in srgb, var(--money) 28%, var(--panel)) 0%, var(--panel) 70%); }
  .btn--custom { background: linear-gradient(160deg, color-mix(in srgb, var(--custom) 28%, var(--panel)) 0%, var(--panel) 70%); }

  .btn--fail:active   { box-shadow: 0 0 0 2px var(--fail-glow) inset, 0 0 30px color-mix(in srgb, var(--fail) 60%, transparent); }
  .btn--pp:active     { box-shadow: 0 0 0 2px var(--pp-glow) inset, 0 0 30px color-mix(in srgb, var(--pp) 60%, transparent); }
  .btn--drum:active   { box-shadow: 0 0 0 2px var(--drum-glow) inset, 0 0 30px color-mix(in srgb, var(--drum) 60%, transparent); }
  .btn--skull:active  { box-shadow: 0 0 0 2px var(--skull-glow) inset, 0 0 30px color-mix(in srgb, var(--skull) 60%, transparent); }
  .btn--pill:active   { box-shadow: 0 0 0 2px var(--pill-glow) inset, 0 0 30px color-mix(in srgb, var(--pill) 60%, transparent); }
  .btn--money:active  { box-shadow: 0 0 0 2px var(--money-glow) inset, 0 0 30px color-mix(in srgb, var(--money) 60%, transparent); }
  .btn--custom:active { box-shadow: 0 0 0 2px var(--custom-glow) inset, 0 0 30px color-mix(in srgb, var(--custom) 60%, transparent); }

  .btn__emoji {
    font-size: clamp(40px, 14vw, 64px);
    line-height: 1;
  }

  .btn__flag {
    width: clamp(58px, 20vw, 92px);
    height: auto;
    display: block;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  }

  .fab {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    appearance: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: none;
    background: var(--ink);
    color: var(--stage);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 40;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 0 4px var(--stage-2);
    transition: transform 0.12s ease;
  }
  .fab:active { transform: translate(-50%, -50%) scale(0.92); }
  .fab:focus-visible { outline: 2px solid var(--ink); outline-offset: 4px; }

  .add-dialog {
    border: none;
    border-radius: 24px;
    padding: 0;
    background: var(--panel);
    color: var(--ink);
    width: min(92vw, 380px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
  .add-dialog::backdrop {
    background: rgba(6, 5, 9, 0.72);
  }
  .add-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 22px;
  }
  .add-form h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
  }
  .field input {
    font-size: 16px;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid var(--panel-edge);
    background: var(--stage);
    color: var(--ink);
  }
  .field input[type="text"] {
    font-size: 26px;
    text-align: center;
  }
  .duration-hint {
    margin: 0;
    font-size: 12px;
    color: var(--muted);
  }
  .range-fields {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .trimmer {
    position: relative;
    height: 72px;
    border-radius: 14px;
    background: var(--stage);
    border: 1px solid var(--panel-edge);
    overflow: hidden;
    touch-action: none;
  }
  .trimmer__wave {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .trimmer__window {
    position: absolute;
    top: 0;
    bottom: 0;
    background: rgba(244, 238, 248, 0.14);
    border-top: 2px solid var(--ink);
    border-bottom: 2px solid var(--ink);
    box-shadow: 0 0 0 9999px rgba(6, 5, 9, 0.62);
  }
  .trimmer__handle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    background: var(--ink);
    touch-action: none;
    cursor: ew-resize;
  }
  .trimmer__handle--left {
    left: -10px;
    border-radius: 8px 0 0 8px;
  }
  .trimmer__handle--right {
    right: -10px;
    border-radius: 0 8px 8px 0;
  }
  .trimmer__handle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 20px;
    background: var(--stage);
    transform: translate(-50%, -50%);
    border-radius: 2px;
  }
  .trimmer__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .trimmer__time {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }
  .ghost-btn, .primary-btn {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    border-radius: 999px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid var(--panel-edge);
    cursor: pointer;
  }
  .ghost-btn { background: transparent; color: var(--ink); }
  .primary-btn { background: var(--ink); color: var(--stage); border: none; }
  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 4px;
  }
  .form-error {
    margin: 0;
    font-size: 12px;
    color: var(--fail-glow);
    min-height: 14px;
  }

  .btn-wrap {
    position: relative;
  }
  .btn-wrap .btn {
    width: 100%;
    height: 100%;
  }

  .btn-controls {
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: flex;
    gap: 6px;
    z-index: 45;
  }

  .ctrl-btn {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(6, 5, 9, 0.55);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: var(--ink);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s ease;
  }
  .ctrl-btn:active { transform: scale(0.88); }
  .ctrl-btn--delete { color: var(--fail-glow); }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .flash {
    position: fixed;
    inset: 0;
    background: var(--flash-color, transparent);
    opacity: 0;
    pointer-events: none;
    z-index: 50;
  }
  .flash.is-active { animation: flashPulse 0.22s ease-out; }
  @keyframes flashPulse {
    0% { opacity: 0; }
    35% { opacity: 0.35; }
    100% { opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .btn { transition: none; }
    .btn:active { transform: none; }
    .flash.is-active { animation: none; }
    .fab { transition: none; }
    .fab:active { transform: translate(-50%, -50%); }
  }
</style>

<div class="stage">
  <h1 class="visually-hidden">Botones Sonoros para ARu</h1>

  <div class="pad" role="group" aria-label="Botones de sonido">
    <button class="btn btn--fail" type="button" data-sound="fail" aria-label="Fracaso">
      <span class="btn__emoji" aria-hidden="true">\u{1F622}</span>
    </button>
    <button class="btn btn--pp" type="button" data-sound="pp" aria-label="Himno del PP">
      <svg class="btn__flag" viewBox="0 0 750 500" role="img" aria-hidden="true">
        <rect width="750" height="500" fill="#AA151B"/>
        <rect y="125" width="750" height="250" fill="#F1BF00"/>
      </svg>
    </button>
    <button class="btn btn--drum" type="button" data-sound="drum" aria-label="Redoble de tambor">
      <span class="btn__emoji" aria-hidden="true">\u{1F941}</span>
    </button>
    <button class="btn btn--skull" type="button" data-sound="skull" aria-label="Muerto vivo">
      <span class="btn__emoji" aria-hidden="true">\u{1F480}</span>
    </button>
    <button class="btn btn--pill" type="button" data-sound="pill" aria-label="Con toda la apuesta">
      <span class="btn__emoji" aria-hidden="true">\u{1F48A}</span>
    </button>
    <button class="btn btn--money" type="button" data-sound="money" aria-label="Sin ánimo de lucro">
      <span class="btn__emoji" aria-hidden="true">\u{1F4B0}</span>
    </button>
  </div>

  <p class="visually-hidden" id="footerTip">
    Añade esta página a tu pantalla de inicio desde el botón Compartir de Safari para abrirla como una app.
  </p>
</div>

<button id="addBtn" type="button" class="fab" aria-label="Añadir botón nuevo">
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  </svg>
</button>

<dialog id="addDialog" class="add-dialog">
  <form id="addForm" class="add-form">
    <h2 id="dialogTitle">Nuevo botón</h2>

    <label class="field">
      <span id="iconFieldLabel">Icono</span>
      <input type="text" id="newIcon" maxlength="8" placeholder="🎉" required autocomplete="off" />
    </label>

    <label class="field">
      <span id="audioFieldLabel">Audio</span>
      <input type="file" id="newAudioFile" accept="audio/*" required />
    </label>

    <div id="rangeFields" class="range-fields" hidden>
      <p class="duration-hint" id="durationHint"></p>

      <div class="trimmer" id="trimmer">
        <canvas id="waveCanvas" class="trimmer__wave"></canvas>
        <div class="trimmer__window" id="trimWindow">
          <div class="trimmer__handle trimmer__handle--left" id="handleLeft"></div>
          <div class="trimmer__handle trimmer__handle--right" id="handleRight"></div>
        </div>
      </div>

      <div class="trimmer__controls">
        <button type="button" id="previewToggle" class="ghost-btn" aria-pressed="false">▶ Escuchar</button>
        <p class="trimmer__time" id="trimTime"></p>
      </div>
    </div>

    <p class="form-error" id="formError" role="alert"></p>

    <div class="dialog-actions">
      <button type="button" id="cancelBtn" class="ghost-btn">Cancelar</button>
      <button type="submit" class="primary-btn" id="submitBtn">Añadir</button>
    </div>
  </form>
</dialog>

<p class="visually-hidden" id="status" aria-live="polite"></p>
<div class="flash" id="flash" aria-hidden="true"></div>

<audio data-key="pp" preload="auto" src="data:audio/mp4;base64,${PP_B64}"></audio>
<audio data-key="drum" preload="auto" src="data:audio/mp4;base64,${DRUM_B64}"></audio>
<audio data-key="skull" preload="auto" src="data:audio/mp4;base64,${SKULL_B64}"></audio>
<audio data-key="pill" preload="auto" src="data:audio/mp4;base64,${PILL_B64}"></audio>
<audio data-key="money" preload="auto" src="data:audio/mp4;base64,${MONEY_B64}"></audio>

<script>
  (function () {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var audioCtx = null;

    function getCtx() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    var activeNodes = [];
    function trackNode(node) {
      activeNodes.push(node);
      return node;
    }

    var audioEls = {};
    document.querySelectorAll('audio[data-key]').forEach(function (el) {
      audioEls[el.getAttribute('data-key')] = el;
    });

    function stopAllSounds() {
      var now = audioCtx ? audioCtx.currentTime : 0;
      activeNodes.forEach(function (node) {
        try { node.stop(now); } catch (e) {}
        try { node.disconnect(); } catch (e) {}
      });
      activeNodes = [];
      Object.keys(audioEls).forEach(function (key) {
        var el = audioEls[key];
        if (!el.paused) {
          el.pause();
          try { el.currentTime = 0; } catch (e) {}
        }
      });
    }

    function playFail() {
      var ctx = getCtx();
      var notes = [392.0, 369.99, 349.23, 329.63];
      var noteDur = 0.28;
      var filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1200;
      filter.connect(ctx.destination);

      notes.forEach(function (freq, i) {
        var t0 = ctx.currentTime + i * noteDur;
        var isLast = i === notes.length - 1;
        var dur = isLast ? noteDur * 1.8 : noteDur;

        var osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, t0);
        if (isLast) {
          osc.frequency.exponentialRampToValueAtTime(freq * 0.75, t0 + dur);
        }

        var lfo = ctx.createOscillator();
        lfo.frequency.value = 6;
        var lfoGain = ctx.createGain();
        lfoGain.gain.value = 8;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        var gain = ctx.createGain();
        gain.gain.setValueAtTime(0, t0);
        gain.gain.linearRampToValueAtTime(0.28, t0 + 0.03);
        gain.gain.linearRampToValueAtTime(0.0001, t0 + dur);

        osc.connect(gain);
        gain.connect(filter);

        osc.start(t0);
        osc.stop(t0 + dur + 0.05);
        lfo.start(t0);
        lfo.stop(t0 + dur + 0.05);
        trackNode(osc);
        trackNode(lfo);
      });
    }

    var flashColors = {
      fail: '#c1502f',
      pp: '#2757a8',
      drum: '#d9a021',
      skull: '#6b3fa0',
      pill: '#1f9bb5',
      money: '#2f9e63'
    };

    var labels = {
      fail: 'Fracaso',
      pp: 'Himno del PP',
      drum: 'Redoble de tambor',
      skull: 'Muerto vivo',
      pill: 'Con toda la apuesta',
      money: 'Sin ánimo de lucro'
    };

    var flashEl = document.getElementById('flash');
    var statusEl = document.getElementById('status');

    function flash(key) {
      if (reducedMotion) return;
      flashEl.style.setProperty('--flash-color', flashColors[key] || '#ffffff');
      flashEl.classList.remove('is-active');
      void flashEl.offsetWidth;
      flashEl.classList.add('is-active');
    }

    function playSound(key) {
      stopAllSounds();
      if (key === 'fail') {
        playFail();
      } else {
        var el = audioEls[key];
        if (el) {
          try { el.currentTime = 0; } catch (e) {}
          el.play();
        }
      }
      flash(key);
      statusEl.textContent = 'Sonando: ' + (labels[key] || key);
    }

    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playSound(btn.getAttribute('data-sound'));
      });
    });

    var padEl = document.querySelector('.pad');
    var addBtn = document.getElementById('addBtn');
    var addDialog = document.getElementById('addDialog');
    var addForm = document.getElementById('addForm');
    var newIconInput = document.getElementById('newIcon');
    var newAudioFileInput = document.getElementById('newAudioFile');
    var rangeFields = document.getElementById('rangeFields');
    var durationHint = document.getElementById('durationHint');
    var cancelBtn = document.getElementById('cancelBtn');
    var formError = document.getElementById('formError');
    var dialogTitleEl = document.getElementById('dialogTitle');
    var iconFieldLabelEl = document.getElementById('iconFieldLabel');
    var audioFieldLabelEl = document.getElementById('audioFieldLabel');
    var submitBtnEl = document.getElementById('submitBtn');
    var pendingBuffer = null;
    var dialogMode = 'create';
    var editingKey = null;

    var EDIT_ICON_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/></svg>';
    var DELETE_ICON_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    var trimmerEl = document.getElementById('trimmer');
    var waveCanvas = document.getElementById('waveCanvas');
    var trimWindowEl = document.getElementById('trimWindow');
    var handleLeftEl = document.getElementById('handleLeft');
    var handleRightEl = document.getElementById('handleRight');
    var previewToggleBtn = document.getElementById('previewToggle');
    var trimTimeEl = document.getElementById('trimTime');

    var MIN_SEL = 0.2;
    var selStart = 0;
    var selEnd = 0;
    var trackWidth = 0;
    var dragMode = null;
    var dragStartX = 0;
    var dragStartSelStart = 0;
    var dragStartSelEnd = 0;
    var rafScheduled = false;
    var previewSource = null;
    var isPreviewPlaying = false;

    var CUSTOM_STORAGE_KEY = 'elVeredictoCustomButtons';
    var OVERRIDES_STORAGE_KEY = 'elVeredictoOverrides';
    var DELETED_STORAGE_KEY = 'elVeredictoDeletedBuiltins';

    function loadCustomButtons() {
      try {
        var raw = localStorage.getItem(CUSTOM_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    function loadOverrides() {
      try {
        var raw = localStorage.getItem(OVERRIDES_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        return {};
      }
    }

    function saveOverrides(overrides) {
      localStorage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
    }

    function loadDeletedBuiltins() {
      try {
        var raw = localStorage.getItem(DELETED_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    function saveDeletedBuiltins(list) {
      localStorage.setItem(DELETED_STORAGE_KEY, JSON.stringify(list));
    }

    function saveCustomButtons(list) {
      localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(list));
    }

    function sliceBuffer(ctx, buffer, start, end) {
      var sampleRate = buffer.sampleRate;
      var startSample = Math.max(0, Math.floor(start * sampleRate));
      var endSample = Math.min(buffer.length, Math.floor(end * sampleRate));
      var frameCount = Math.max(1, endSample - startSample);
      var sliced = ctx.createBuffer(buffer.numberOfChannels, frameCount, sampleRate);
      for (var ch = 0; ch < buffer.numberOfChannels; ch++) {
        var channelData = buffer.getChannelData(ch).subarray(startSample, startSample + frameCount);
        sliced.copyToChannel(channelData, ch);
      }
      return sliced;
    }

    function computePeaks(buffer, bucketCount) {
      var data = buffer.getChannelData(0);
      var samplesPerBucket = Math.max(1, Math.floor(data.length / bucketCount));
      var peaks = new Float32Array(bucketCount);
      for (var i = 0; i < bucketCount; i++) {
        var start = i * samplesPerBucket;
        var end = Math.min(data.length, start + samplesPerBucket);
        var max = 0;
        for (var j = start; j < end; j++) {
          var v = data[j];
          if (v < 0) v = -v;
          if (v > max) max = v;
        }
        peaks[i] = max;
      }
      return peaks;
    }

    function secondsToPx(s) {
      return (s / pendingBuffer.duration) * trackWidth;
    }

    function pxToSeconds(px) {
      return (px / trackWidth) * pendingBuffer.duration;
    }

    function updateWindowVisual() {
      var leftPx = secondsToPx(selStart);
      var widthPx = secondsToPx(selEnd - selStart);
      trimWindowEl.style.left = leftPx + 'px';
      trimWindowEl.style.width = widthPx + 'px';
      trimTimeEl.textContent =
        selStart.toFixed(1) + 's – ' + selEnd.toFixed(1) + 's (' + (selEnd - selStart).toFixed(1) + 's)';
    }

    function setupTrimmer(buffer) {
      var dur = buffer.duration;
      var rect = trimmerEl.getBoundingClientRect();
      trackWidth = rect.width;

      var dpr = window.devicePixelRatio || 1;
      waveCanvas.width = trackWidth * dpr;
      waveCanvas.height = rect.height * dpr;
      waveCanvas.style.width = trackWidth + 'px';
      waveCanvas.style.height = rect.height + 'px';
      var c2d = waveCanvas.getContext('2d');
      c2d.scale(dpr, dpr);

      var bucketCount = Math.max(40, Math.floor(trackWidth / 3));
      var peaks = computePeaks(buffer, bucketCount);
      c2d.clearRect(0, 0, trackWidth, rect.height);
      c2d.fillStyle = 'rgba(244, 238, 248, 0.55)';
      var barWidth = trackWidth / bucketCount;
      var midY = rect.height / 2;
      for (var i = 0; i < bucketCount; i++) {
        var h = Math.max(2, peaks[i] * rect.height);
        var x = i * barWidth;
        c2d.fillRect(x, midY - h / 2, Math.max(1, barWidth - 1), h);
      }

      selStart = 0;
      selEnd = Math.min(dur, Math.max(MIN_SEL, Math.min(5, dur)));
      updateWindowVisual();
    }

    function stopPreview() {
      if (previewSource) {
        try { previewSource.stop(); } catch (e) {}
        try { previewSource.disconnect(); } catch (e) {}
        previewSource = null;
      }
      isPreviewPlaying = false;
      previewToggleBtn.setAttribute('aria-pressed', 'false');
      previewToggleBtn.textContent = '▶ Escuchar';
    }

    function restartPreview() {
      if (!pendingBuffer) return;
      var ctx = getCtx();
      if (previewSource) {
        try { previewSource.stop(); } catch (e) {}
        try { previewSource.disconnect(); } catch (e) {}
      }
      var src = ctx.createBufferSource();
      src.buffer = pendingBuffer;
      src.loop = true;
      src.loopStart = selStart;
      src.loopEnd = selEnd;
      src.connect(ctx.destination);
      src.start(0, selStart);
      previewSource = src;
      isPreviewPlaying = true;
      previewToggleBtn.setAttribute('aria-pressed', 'true');
      previewToggleBtn.textContent = '⏸ Pausar';
    }

    function schedulePreviewUpdate() {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(function () {
        rafScheduled = false;
        if (isPreviewPlaying) restartPreview();
      });
    }

    previewToggleBtn.addEventListener('click', function () {
      if (isPreviewPlaying) {
        stopPreview();
      } else {
        stopAllSounds();
        restartPreview();
      }
    });

    function onTrimPointerDown(mode) {
      return function (evt) {
        evt.preventDefault();
        dragMode = mode;
        dragStartX = evt.clientX;
        dragStartSelStart = selStart;
        dragStartSelEnd = selEnd;
        try { evt.target.setPointerCapture(evt.pointerId); } catch (e) {}
      };
    }

    handleLeftEl.addEventListener('pointerdown', onTrimPointerDown('left'));
    handleRightEl.addEventListener('pointerdown', onTrimPointerDown('right'));
    trimWindowEl.addEventListener('pointerdown', function (evt) {
      if (evt.target === handleLeftEl || evt.target === handleRightEl) return;
      onTrimPointerDown('move')(evt);
    });

    document.addEventListener('pointermove', function (evt) {
      if (!dragMode || !pendingBuffer) return;
      var deltaSec = pxToSeconds(evt.clientX - dragStartX);
      var dur = pendingBuffer.duration;

      if (dragMode === 'left') {
        selStart = Math.max(0, Math.min(dragStartSelStart + deltaSec, selEnd - MIN_SEL));
      } else if (dragMode === 'right') {
        selEnd = Math.max(selStart + MIN_SEL, Math.min(dragStartSelEnd + deltaSec, dur));
      } else if (dragMode === 'move') {
        var length = dragStartSelEnd - dragStartSelStart;
        var newStart = Math.max(0, Math.min(dragStartSelStart + deltaSec, dur - length));
        selStart = newStart;
        selEnd = newStart + length;
      }

      updateWindowVisual();
      schedulePreviewUpdate();
    });

    document.addEventListener('pointerup', function () {
      dragMode = null;
    });
    document.addEventListener('pointercancel', function () {
      dragMode = null;
    });

    function resampleMono(buffer, targetRate) {
      var frames = Math.max(1, Math.ceil(buffer.duration * targetRate));
      var offlineCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, frames, targetRate);
      var source = offlineCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(offlineCtx.destination);
      source.start(0);
      return offlineCtx.startRendering();
    }

    function bufferToWavBase64(buffer) {
      var numChannels = buffer.numberOfChannels;
      var sampleRate = buffer.sampleRate;
      var numFrames = buffer.length;
      var blockAlign = numChannels * 2;
      var dataSize = numFrames * blockAlign;
      var arrayBuffer = new ArrayBuffer(44 + dataSize);
      var view = new DataView(arrayBuffer);

      function writeString(offset, str) {
        for (var i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
      }

      writeString(0, 'RIFF');
      view.setUint32(4, 36 + dataSize, true);
      writeString(8, 'WAVE');
      writeString(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, numChannels, true);
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * blockAlign, true);
      view.setUint16(32, blockAlign, true);
      view.setUint16(34, 16, true);
      writeString(36, 'data');
      view.setUint32(40, dataSize, true);

      var channels = [];
      for (var ch = 0; ch < numChannels; ch++) channels.push(buffer.getChannelData(ch));
      var offset = 44;
      for (var i2 = 0; i2 < numFrames; i2++) {
        for (var ch2 = 0; ch2 < numChannels; ch2++) {
          var sample = Math.max(-1, Math.min(1, channels[ch2][i2]));
          sample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
          view.setInt16(offset, sample, true);
          offset += 2;
        }
      }

      var bytes = new Uint8Array(arrayBuffer);
      var binary = '';
      var chunkSize = 0x8000;
      for (var i3 = 0; i3 < bytes.length; i3 += chunkSize) {
        binary += String.fromCharCode.apply(null, bytes.subarray(i3, i3 + chunkSize));
      }
      return btoa(binary);
    }

    function makeCtrlBtn(kind, key, label) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ctrl-btn ctrl-btn--' + kind;
      b.setAttribute('aria-label', label);
      b.setAttribute(kind === 'edit' ? 'data-edit' : 'data-delete', key);
      b.innerHTML = kind === 'edit' ? EDIT_ICON_SVG : DELETE_ICON_SVG;
      return b;
    }

    function applyIconToButton(btnEl, icon) {
      var existing = btnEl.querySelector('.btn__emoji, .btn__flag');
      if (existing) existing.remove();
      var span = document.createElement('span');
      span.className = 'btn__emoji';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = icon;
      btnEl.appendChild(span);
    }

    function ensureAudioEl(key) {
      var el = audioEls[key];
      if (!el) {
        el = document.createElement('audio');
        el.setAttribute('data-key', key);
        el.preload = 'auto';
        document.body.appendChild(el);
        audioEls[key] = el;
      }
      return el;
    }

    function removeCustomButton(id, wrapEl, audioEl) {
      var list = loadCustomButtons().filter(function (e) { return e.id !== id; });
      saveCustomButtons(list);
      delete audioEls[id];
      delete flashColors[id];
      delete labels[id];
      if (wrapEl) wrapEl.remove();
      if (audioEl) audioEl.remove();
    }

    function deleteBuiltin(key) {
      var list = loadDeletedBuiltins();
      if (list.indexOf(key) === -1) list.push(key);
      saveDeletedBuiltins(list);

      var btnEl = padEl.querySelector('.btn[data-sound="' + key + '"]');
      var wrap = btnEl ? btnEl.closest('.btn-wrap') : null;
      if (wrap) wrap.remove();

      var audioEl = audioEls[key];
      if (audioEl) audioEl.remove();
      delete audioEls[key];
      delete flashColors[key];
      delete labels[key];
    }

    function applyEdit(key, icon, wav) {
      if (key.indexOf('custom-') === 0) {
        var list = loadCustomButtons();
        var entry = null;
        for (var i = 0; i < list.length; i++) {
          if (list[i].id === key) { entry = list[i]; break; }
        }
        if (!entry) return;
        if (icon) entry.icon = icon;
        if (wav) entry.wav = wav;
        saveCustomButtons(list);
      } else {
        var overrides = loadOverrides();
        var ov = overrides[key] || {};
        if (icon) ov.icon = icon;
        if (wav) ov.wav = wav;
        overrides[key] = ov;
        saveOverrides(overrides);
      }

      var btnEl = padEl.querySelector('.btn[data-sound="' + key + '"]');
      if (btnEl && icon) applyIconToButton(btnEl, icon);
      if (wav) {
        var audioEl = ensureAudioEl(key);
        audioEl.src = 'data:audio/wav;base64,' + wav;
      }
    }

    function openEditDialog(key) {
      dialogMode = 'edit';
      editingKey = key;
      addForm.reset();
      newIconInput.required = false;
      newAudioFileInput.required = false;
      dialogTitleEl.textContent = 'Editar botón';
      iconFieldLabelEl.textContent = 'Icono (déjalo vacío para no cambiarlo)';
      audioFieldLabelEl.textContent = 'Audio (déjalo vacío para no cambiarlo)';
      submitBtnEl.textContent = 'Guardar';
      rangeFields.hidden = true;
      formError.textContent = '';
      pendingBuffer = null;
      stopPreview();
      addDialog.showModal();
    }

    function createCustomButtonEl(entry) {
      var wrap = document.createElement('div');
      wrap.className = 'btn-wrap';

      var btn = document.createElement('button');
      btn.className = 'btn btn--custom';
      btn.type = 'button';
      btn.setAttribute('data-sound', entry.id);
      btn.setAttribute('aria-label', 'Sonido personalizado');

      var span = document.createElement('span');
      span.className = 'btn__emoji';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = entry.icon;
      btn.appendChild(span);
      btn.addEventListener('click', function () {
        playSound(entry.id);
      });

      var controls = document.createElement('div');
      controls.className = 'btn-controls';
      controls.appendChild(makeCtrlBtn('edit', entry.id, 'Editar sonido personalizado'));
      controls.appendChild(makeCtrlBtn('delete', entry.id, 'Eliminar sonido personalizado'));

      wrap.appendChild(btn);
      wrap.appendChild(controls);

      var audioEl = document.createElement('audio');
      audioEl.setAttribute('data-key', entry.id);
      audioEl.preload = 'auto';
      audioEl.src = 'data:audio/wav;base64,' + entry.wav;
      document.body.appendChild(audioEl);
      audioEls[entry.id] = audioEl;

      flashColors[entry.id] = '#4a5a72';
      labels[entry.id] = 'Sonido personalizado';

      padEl.appendChild(wrap);
    }

    function wireBuiltinControls() {
      var btns = Array.prototype.slice.call(padEl.querySelectorAll(':scope > .btn'));
      btns.forEach(function (btn) {
        var key = btn.getAttribute('data-sound');
        var wrap = document.createElement('div');
        wrap.className = 'btn-wrap';
        btn.parentNode.insertBefore(wrap, btn);
        wrap.appendChild(btn);

        var controls = document.createElement('div');
        controls.className = 'btn-controls';
        controls.appendChild(makeCtrlBtn('edit', key, 'Editar sonido'));
        controls.appendChild(makeCtrlBtn('delete', key, 'Eliminar sonido'));
        wrap.appendChild(controls);
      });
    }

    padEl.addEventListener('click', function (evt) {
      var editTarget = evt.target.closest('[data-edit]');
      if (editTarget) {
        openEditDialog(editTarget.getAttribute('data-edit'));
        return;
      }
      var deleteTarget = evt.target.closest('[data-delete]');
      if (deleteTarget) {
        var key = deleteTarget.getAttribute('data-delete');
        if (!window.confirm('¿Eliminar este botón?')) return;
        if (key.indexOf('custom-') === 0) {
          var wrap = deleteTarget.closest('.btn-wrap');
          removeCustomButton(key, wrap, audioEls[key]);
        } else {
          deleteBuiltin(key);
        }
      }
    });

    addBtn.addEventListener('click', function () {
      dialogMode = 'create';
      editingKey = null;
      addForm.reset();
      newIconInput.required = true;
      newAudioFileInput.required = true;
      dialogTitleEl.textContent = 'Nuevo botón';
      iconFieldLabelEl.textContent = 'Icono';
      audioFieldLabelEl.textContent = 'Audio';
      submitBtnEl.textContent = 'Añadir';
      rangeFields.hidden = true;
      formError.textContent = '';
      pendingBuffer = null;
      stopPreview();
      addDialog.showModal();
    });

    cancelBtn.addEventListener('click', function () {
      stopPreview();
      addDialog.close();
    });

    newAudioFileInput.addEventListener('change', function () {
      formError.textContent = '';
      rangeFields.hidden = true;
      pendingBuffer = null;
      stopPreview();
      var file = newAudioFileInput.files[0];
      if (!file) return;
      file.arrayBuffer().then(function (arrayBuffer) {
        var ctx = getCtx();
        return ctx.decodeAudioData(arrayBuffer);
      }).then(function (buffer) {
        pendingBuffer = buffer;
        durationHint.textContent = 'Duración total: ' + buffer.duration.toFixed(1) + ' s · arrastra la ventana o sus bordes';
        rangeFields.hidden = false;
        setupTrimmer(buffer);
        stopAllSounds();
        restartPreview();
      }).catch(function () {
        formError.textContent = 'No se pudo leer ese archivo de audio.';
      });
    });

    addForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      formError.textContent = '';

      var icon = newIconInput.value.trim();

      if (dialogMode === 'create') {
        if (!icon) {
          formError.textContent = 'Falta el icono.';
          return;
        }
        if (!pendingBuffer) {
          formError.textContent = 'Selecciona un archivo de audio.';
          return;
        }
      } else if (!icon && !pendingBuffer) {
        formError.textContent = 'Cambia el icono o el audio para guardar algo.';
        return;
      }

      var hasNewAudio = !!pendingBuffer;
      if (hasNewAudio && (isNaN(selStart) || isNaN(selEnd) || selEnd <= selStart)) {
        formError.textContent = 'El rango de tiempo no es válido.';
        return;
      }

      function finish(wavBase64) {
        if (dialogMode === 'create') {
          var entry = {
            id: 'custom-' + Date.now(),
            icon: icon,
            wav: wavBase64
          };
          var list = loadCustomButtons();
          list.push(entry);
          saveCustomButtons(list);
          createCustomButtonEl(entry);
        } else {
          applyEdit(editingKey, icon || null, wavBase64 || null);
        }
        stopPreview();
        addDialog.close();
      }

      if (hasNewAudio) {
        var ctx = getCtx();
        var sliced = sliceBuffer(ctx, pendingBuffer, selStart, selEnd);
        resampleMono(sliced, 22050).then(function (mono) {
          finish(bufferToWavBase64(mono));
        }).catch(function () {
          formError.textContent = 'No se pudo guardar el sonido (puede que no quede espacio).';
        });
      } else {
        finish(null);
      }
    });

    wireBuiltinControls();

    loadDeletedBuiltins().forEach(function (key) {
      var btnEl = padEl.querySelector('.btn[data-sound="' + key + '"]');
      var wrap = btnEl ? btnEl.closest('.btn-wrap') : null;
      if (wrap) wrap.remove();
      var audioEl = audioEls[key];
      if (audioEl) audioEl.remove();
      delete audioEls[key];
      delete flashColors[key];
      delete labels[key];
    });

    (function applyStoredOverrides() {
      var overrides = loadOverrides();
      Object.keys(overrides).forEach(function (key) {
        var ov = overrides[key];
        var btnEl = padEl.querySelector('.btn[data-sound="' + key + '"]');
        if (btnEl && ov.icon) applyIconToButton(btnEl, ov.icon);
        if (ov.wav) {
          var audioEl = ensureAudioEl(key);
          audioEl.src = 'data:audio/wav;base64,' + ov.wav;
        }
      });
    })();

    loadCustomButtons().forEach(createCustomButtonEl);

    try {
      if (window.navigator.standalone) {
        document.getElementById('footerTip').remove();
      }
    } catch (e) {}
  })();
</script>
`;

writeFileSync(path.join(__dirname, 'el-veredicto.html'), html, 'utf8');
console.log('written, length', html.length);
