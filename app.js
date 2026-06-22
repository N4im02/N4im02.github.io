const GAME_CONFIG = {
  phaseOneCode: [2, 7, 3],
  letterHint: "HMMMMM 27-03 esa fecha me suena familiar :). (Puedes darle un beso al interlocutor)",
};

const DECODER_VISUAL_CONFIG = {
  rings: [
    "assets/decoder/disco-exterior.avif",
    "assets/decoder/disco-medio.jpg",
    "assets/decoder/disco-interior.webp",
  ],
  centerImage: "assets/decoder/centro.png",
  centerFallback: "MER <3",
};

const PHASE_ONE_SUCCESS_CONFIG = {
  message: "HMMMMM 27-03 esa fecha me suena familiar :). (Puedes darle un beso al interlocutor)",
  buttonLabel: "Continuar",
};

const PHASE_TWO_CONFIG = {
  backgroundImage: "assets/phase-2/fase2.webp",
  intro: {
    message: "Él felino fue visto por última vez en esta localización.",
    image: "assets/phase-2/catcard.jpg",
    buttonLabel: "Ok",
  },
  hitbox: {
    x: 22,
    y: 32,
    width: 5,
    height: 3,
  },
  found: {
    image: "assets/phase-2/catflower.jpg",
    message: "Has encontrado al ladrón que robó la carta! Ya puedes abrirla.",
    buttonLabel: "Abrir la carta",
  },
};

const PHASE_THREE_CONFIG = {
  backgroundImage: "assets/phase-3/fondo.webp",
  envelopeImage: "assets/phase-3/sobre.png",
  letterCatImage: "assets/phase-3/cat1.webp",
  questionCatImage: "assets/phase-3/black-cat.gif",
  noAttemptCatImage: "assets/phase-3/gatopistola.jpg",
  finalCatImage: "assets/phase-3/cats.webp",
  envelopeMessage: "Pulsa en el sobre para abrir tu carta.",
  continueButtonLabel: "Ir a la pregunta",
  letterParagraphs: [
    "Hola mi guapa :)",
    "Como ya te dije en lo que te escribí hace unas semanas, he pasado mucho tiempo buscando algo, o mejor dicho, a alguien. Alguien que quiera como yo quiero, alguien que me trate como yo trato a las personas que quiero. Y creo que contigo lo he encontrado: he encontrado a la persona que llevaba tanto tiempo buscando. :)",
    "Me acuerdo de nuestra primera cita, cuando te vi por primera vez y me puse nervioso de lo guapa que eras. Pensé: «Uy, qué guapa es». Y aún sigo pensando exactamente lo mismo cada vez que te veo aparecer (menos mal que ya no me pongo nervioso).",
    "También me acuerdo de nuestro primer beso, ese mismo día. Me lo pasé tan bien contigo y me sentí tan cómodo siendo yo mismo que no pude evitar las ganas que tenía de darte un beso. Un beso que, además, nos dimos justo en este mismo sitio donde estás leyendo esta carta. :)",
    "Desde entonces me has tratado mejor de lo que nadie me ha tratado nunca. Te quiero, me haces feliz y me encanta estar contigo. De hecho, me gusta más estar contigo que estar solo (creo que eso se nota; desde que volví de Tailandia hemos estado separados cuatro días contados, jejeje).",
    "Contigo puedo ser yo mismo (que seamos igual de tontos ayuda jeje). Te quiero de verdad. Te quiero en mi vida. :)",
    "Y precisamente por eso estoy escribiendo esta carta. Ya sabes de sobra lo que te voy a preguntar. Perdón por haber tardado un poco en hacerlo, pero, ¡oye!, quería que fuese especial. Quería currármelo.",
    "Ya no vas a poder decir que estás soltera... o sí (gato pistola).",
    "Pero bueno, aquí va la pregunta más importante que he hecho en mi vida hasta ahora:",
  ],
  questionMessage: "¿Quieres ser mi novia?",
  finalMessage: "SIIII! Tampoco podias decir que no ejjejejeje.",
};

const RIDDLE_ONE_CONFIG = {
  target: "#riddle-one-equations",
  symbols: {
    fox: {
      label: "Zorro",
      image: "assets/riddle-1/Z.png",
      fallback: "Z",
    },
    frog: {
      label: "Rana",
      image: "assets/riddle-1/R.png",
      fallback: "R",
    },
    key: {
      label: "Llave",
      image: "assets/riddle-1/L.png",
      fallback: "L",
    },
    moon: {
      label: "Luna",
      image: "assets/riddle-1/luna.png",
      fallback: "M",
    },
    wild: {
      label: "Variable W",
      image: "assets/riddle-1/W.png",
      fallback: "W",
    },
  },
  rows: [
    {
      terms: ["fox", "+", "fox", "-", "wild"],
      result: "4",
    },
    {
      terms: ["fox", "x", "frog"],
      result: "12",
    },
    {
      terms: ["key", "/", "frog"],
      result: "3",
    },
    {
      terms: ["key", "-", "fox", "-", "frog"],
      result: "?",
      highlight: true,
    },
  ],
};

const RIDDLE_TWO_CONFIG = {
  target: "#riddle-two-puzzle",
  columns: 3,
  pieces: [
    { id: "piece-1", label: "Fragmento 1", image: "assets/riddle-2/fragmento-1.png", fallback: "1" },
    { id: "piece-2", label: "Fragmento 2", image: "assets/riddle-2/fragmento-2.png", fallback: "2" },
    { id: "piece-3", label: "Fragmento 3", image: "assets/riddle-2/fragmento-3.png", fallback: "3" },
    { id: "piece-4", label: "Fragmento 4", image: "assets/riddle-2/fragmento-4.png", fallback: "4" },
    { id: "piece-5", label: "Fragmento 5", image: "assets/riddle-2/fragmento-5.png", fallback: "5" },
    { id: "piece-6", label: "Fragmento 6", image: "assets/riddle-2/fragmento-6.png", fallback: "6" },
    { id: "piece-7", label: "Fragmento 7", image: "assets/riddle-2/fragmento-7.png", fallback: "7" },
    { id: "piece-8", label: "Fragmento 8", image: "assets/riddle-2/fragmento-8.png", fallback: "8" },
    { id: "piece-9", label: "Fragmento 9", image: "assets/riddle-2/fragmento-9.png", fallback: "9" },
  ],
  initialOrder: ["piece-8", "piece-3", "piece-6", "piece-1", "piece-5", "piece-9", "piece-4", "piece-7", "piece-2"],
};

const RIDDLE_THREE_CONFIG = {
  target: "#riddle-three-image",
  image: "assets/riddle-3/escena.png",
  label: "Escena de la brujula",
  fallback: "Imagen de pistas",
};

const DIGITS = Array.from({ length: 10 }, (_, index) => index);
const STEP_DEGREES = 360 / DIGITS.length;

const lockBody = document.querySelector("#lock-body");
const lockStatus = document.querySelector("#lock-status");
const tryCodeButton = document.querySelector("#try-code");
const wheelCore = document.querySelector("#wheel-core");
const ringElements = Array.from(document.querySelectorAll(".wheel-ring"));
const readoutElements = Array.from(document.querySelectorAll("[data-readout]"));
const riddleOneBoard = document.querySelector(RIDDLE_ONE_CONFIG.target);
const riddleTwoPuzzle = document.querySelector(RIDDLE_TWO_CONFIG.target);
const riddleThreeImage = document.querySelector(RIDDLE_THREE_CONFIG.target);
const phases = Array.from(document.querySelectorAll(".phase"));
const phaseOneSuccessModal = document.querySelector("#phase-one-success-modal");
const phaseOneSuccessMessage = document.querySelector("#phase-one-success-message");
const goPhaseTwoButton = document.querySelector("#go-phase-two");
const phaseTwoStage = document.querySelector("#phase-two-stage");
const phaseTwoBg = document.querySelector("#phase-two-bg");
const phaseTwoHitbox = document.querySelector("#phase-two-hitbox");
const phaseTwoIntroModal = document.querySelector("#phase-two-intro-modal");
const phaseTwoIntroImage = document.querySelector("#phase-two-intro-image");
const phaseTwoIntroMessage = document.querySelector("#phase-two-intro-message");
const closePhaseTwoIntroButton = document.querySelector("#close-phase-two-intro");
const phaseTwoFoundModal = document.querySelector("#phase-two-found-modal");
const phaseTwoFoundImage = document.querySelector("#phase-two-found-image");
const phaseTwoFoundMessage = document.querySelector("#phase-two-found-message");
const goPhaseThreeButton = document.querySelector("#go-phase-three");
const letterEnvelopeStep = document.querySelector("#letter-envelope-step");
const letterWindowStep = document.querySelector("#letter-window-step");
const loveQuestionStep = document.querySelector("#love-question-step");
const loveFinalStep = document.querySelector("#love-final-step");
const openEnvelopeButton = document.querySelector("#open-envelope");
const letterOpenMessage = document.querySelector("#letter-open-message");
const loveLetterText = document.querySelector("#love-letter-text");
const continueToQuestionButton = document.querySelector("#continue-to-question");
const loveQuestionTitle = document.querySelector("#love-question-title");
const questionStage = document.querySelector("#question-stage");
const phaseLetter = document.querySelector("#phase-letter");
const envelopeImage = document.querySelector("#envelope-image");
const letterCatImage = document.querySelector("#letter-cat-image");
const questionCatImage = document.querySelector("#question-cat-image");
const finalCatImage = document.querySelector("#final-cat-image");
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const loveFinalMessage = document.querySelector("#love-final-message");

const dialValues = [0, 0, 0];
const ringRotations = [0, 0, 0];
const dragState = {
  ringIndex: null,
  startAngle: 0,
  startRotation: 0,
};
const fragmentPuzzleState = {
  selectedId: null,
  draggedId: null,
  order: [...RIDDLE_TWO_CONFIG.initialOrder],
};
const loveState = {
  noAttempts: 0,
};

function wrapDigit(value) {
  return (value + 10) % 10;
}

function normalizeDegrees(degrees) {
  return ((degrees % 360) + 360) % 360;
}

function getAngleFromCenter(event, element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);

  return normalizeDegrees(angle + 90);
}

function getAngleDelta(currentAngle, startAngle) {
  return ((currentAngle - startAngle + 540) % 360) - 180;
}

function getSelectedDigit(rotation) {
  return wrapDigit(Math.round(-rotation / STEP_DEGREES));
}

function setStatus(message, type = "idle") {
  lockStatus.textContent = message;
  lockStatus.classList.toggle("is-error", type === "error");
  lockStatus.classList.toggle("is-success", type === "success");
}

function showPhase(phaseId) {
  phases.forEach((phase) => {
    phase.hidden = phase.id !== phaseId;
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openModal(modal) {
  if (!modal) return;
  modal.hidden = false;
}

function closeModal(modal) {
  if (!modal) return;
  modal.hidden = true;
}

function setImageWithFallback(image, src, alt, fallbackClassTarget) {
  if (!image) return;

  image.hidden = false;
  image.src = src;
  image.alt = alt;
  fallbackClassTarget?.classList.remove("is-missing-image");
  image.addEventListener(
    "error",
    () => {
      image.hidden = true;
      fallbackClassTarget?.classList.add("is-missing-image");
    },
    { once: true },
  );
}

function renderDecoderVisuals() {
  ringElements.forEach((ring, index) => {
    const image = DECODER_VISUAL_CONFIG.rings[index];

    if (image) {
      ring.style.setProperty("--ring-image", `url("${image}")`);
      ring.classList.add("has-custom-image");
    }
  });

  if (!wheelCore) return;

  wheelCore.replaceChildren();

  const image = document.createElement("img");
  image.src = DECODER_VISUAL_CONFIG.centerImage;
  image.alt = "Centro del disco";
  image.draggable = false;
  image.addEventListener("error", () => {
    image.hidden = true;
    wheelCore.classList.add("is-missing-image");
  });

  const fallback = document.createElement("span");
  fallback.textContent = DECODER_VISUAL_CONFIG.centerFallback;

  wheelCore.append(image, fallback);
}

function createEquationSymbol(symbolKey) {
  const symbol = RIDDLE_ONE_CONFIG.symbols[symbolKey];
  const token = document.createElement("span");

  token.className = "equation-symbol";
  token.setAttribute("aria-label", symbol.label);

  const image = document.createElement("img");
  image.src = symbol.image;
  image.alt = symbol.label;
  image.draggable = false;
  image.addEventListener("error", () => {
    token.classList.add("is-missing-image");
    image.hidden = true;
  });

  const fallback = document.createElement("span");
  fallback.className = "equation-fallback";
  fallback.textContent = symbol.fallback;
  fallback.setAttribute("aria-hidden", "true");

  token.append(image, fallback);
  return token;
}

function createEquationOperator(operator) {
  const token = document.createElement("span");
  token.className = "equation-operator";
  token.textContent = operator;
  return token;
}

function renderRiddleOne() {
  if (!riddleOneBoard) return;

  riddleOneBoard.replaceChildren();

  RIDDLE_ONE_CONFIG.rows.forEach((row) => {
    const equation = document.createElement("div");
    equation.className = "equation-row";
    equation.classList.toggle("equation-row--question", Boolean(row.highlight));

    const leftSide = document.createElement("div");
    leftSide.className = "equation-left";

    row.terms.forEach((term) => {
      const token = RIDDLE_ONE_CONFIG.symbols[term] ? createEquationSymbol(term) : createEquationOperator(term);
      leftSide.append(token);
    });

    const equals = createEquationOperator("=");
    equals.classList.add("equation-equals");

    const result = document.createElement("span");
    result.className = "equation-result";
    result.textContent = row.result;

    equation.append(leftSide, equals, result);
    riddleOneBoard.append(equation);
  });
}

function getRiddleTwoPiece(pieceId) {
  return RIDDLE_TWO_CONFIG.pieces.find((piece) => piece.id === pieceId);
}

function swapFragmentPieces(firstId, secondId) {
  if (!firstId || !secondId || firstId === secondId) return;

  const firstIndex = fragmentPuzzleState.order.indexOf(firstId);
  const secondIndex = fragmentPuzzleState.order.indexOf(secondId);

  if (firstIndex === -1 || secondIndex === -1) return;

  [fragmentPuzzleState.order[firstIndex], fragmentPuzzleState.order[secondIndex]] = [
    fragmentPuzzleState.order[secondIndex],
    fragmentPuzzleState.order[firstIndex],
  ];

  fragmentPuzzleState.selectedId = null;
  renderRiddleTwo();
}

function createFragmentPiece(pieceId) {
  const piece = getRiddleTwoPiece(pieceId);
  const tile = document.createElement("button");

  tile.className = "fragment-tile";
  tile.type = "button";
  tile.draggable = true;
  tile.dataset.pieceId = piece.id;
  tile.setAttribute("aria-label", piece.label);
  tile.classList.toggle("is-selected", fragmentPuzzleState.selectedId === piece.id);

  const image = document.createElement("img");
  image.src = piece.image;
  image.alt = piece.label;
  image.draggable = false;
  image.addEventListener("error", () => {
    tile.classList.add("is-missing-image");
    image.hidden = true;
  });

  const fallback = document.createElement("span");
  fallback.className = "fragment-fallback";
  fallback.textContent = piece.fallback;
  fallback.setAttribute("aria-hidden", "true");

  tile.append(image, fallback);

  tile.addEventListener("click", () => {
    if (!fragmentPuzzleState.selectedId) {
      fragmentPuzzleState.selectedId = piece.id;
      renderRiddleTwo();
      return;
    }

    if (fragmentPuzzleState.selectedId === piece.id) {
      fragmentPuzzleState.selectedId = null;
      renderRiddleTwo();
      return;
    }

    swapFragmentPieces(fragmentPuzzleState.selectedId, piece.id);
  });

  tile.addEventListener("dragstart", (event) => {
    fragmentPuzzleState.draggedId = piece.id;
    tile.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", piece.id);
  });

  tile.addEventListener("dragend", () => {
    fragmentPuzzleState.draggedId = null;
    tile.classList.remove("is-dragging");
  });

  tile.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  tile.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text/plain") || fragmentPuzzleState.draggedId;
    swapFragmentPieces(draggedId, piece.id);
  });

  return tile;
}

function renderRiddleTwo() {
  if (!riddleTwoPuzzle) return;

  riddleTwoPuzzle.style.setProperty("--puzzle-columns", RIDDLE_TWO_CONFIG.columns);
  riddleTwoPuzzle.replaceChildren();

  fragmentPuzzleState.order.forEach((pieceId) => {
    riddleTwoPuzzle.append(createFragmentPiece(pieceId));
  });
}

function renderRiddleThreeImage() {
  if (!riddleThreeImage) return;

  const image = document.createElement("img");
  image.src = RIDDLE_THREE_CONFIG.image;
  image.alt = RIDDLE_THREE_CONFIG.label;
  image.draggable = false;
  image.addEventListener("error", () => {
    riddleThreeImage.classList.add("is-missing-image");
    image.hidden = true;
  });

  const fallback = document.createElement("span");
  fallback.className = "clue-image-fallback";
  fallback.textContent = RIDDLE_THREE_CONFIG.fallback;
  fallback.setAttribute("aria-hidden", "true");

  riddleThreeImage.replaceChildren(image, fallback);
}

function renderPhaseTwo() {
  if (phaseTwoStage) {
    phaseTwoStage.classList.remove("is-missing-image");
  }

  setImageWithFallback(phaseTwoBg, PHASE_TWO_CONFIG.backgroundImage, "Escena de busqueda", phaseTwoStage);

  if (phaseTwoHitbox) {
    const { x, y, width, height } = PHASE_TWO_CONFIG.hitbox;
    phaseTwoHitbox.style.left = `${x}%`;
    phaseTwoHitbox.style.top = `${y}%`;
    phaseTwoHitbox.style.width = `${width}%`;
    phaseTwoHitbox.style.height = `${height}%`;
  }

  setImageWithFallback(
    phaseTwoIntroImage,
    PHASE_TWO_CONFIG.intro.image,
    "Imagen de introduccion de fase 2",
    phaseTwoIntroImage?.parentElement,
  );

  setImageWithFallback(
    phaseTwoFoundImage,
    PHASE_TWO_CONFIG.found.image,
    "Imagen del personaje encontrado",
    phaseTwoFoundImage?.parentElement,
  );

  if (phaseTwoIntroMessage) phaseTwoIntroMessage.textContent = PHASE_TWO_CONFIG.intro.message;
  if (phaseTwoFoundMessage) phaseTwoFoundMessage.textContent = PHASE_TWO_CONFIG.found.message;
  if (closePhaseTwoIntroButton) closePhaseTwoIntroButton.textContent = PHASE_TWO_CONFIG.intro.buttonLabel;
  if (goPhaseThreeButton) goPhaseThreeButton.textContent = PHASE_TWO_CONFIG.found.buttonLabel;
}

function showLetterStep(stepToShow) {
  [letterEnvelopeStep, letterWindowStep, loveQuestionStep, loveFinalStep].forEach((step) => {
    if (!step) return;
    step.hidden = step !== stepToShow;
    step.classList.toggle("letter-step--active", step === stepToShow);
  });
}

function renderPhaseThree() {
  if (phaseLetter) {
    phaseLetter.style.setProperty("--love-bg-image", `url("${PHASE_THREE_CONFIG.backgroundImage}")`);
  }

  setImageWithFallback(envelopeImage, PHASE_THREE_CONFIG.envelopeImage, "Sobre con corazon", openEnvelopeButton);
  setImageWithFallback(letterCatImage, PHASE_THREE_CONFIG.letterCatImage, "", letterCatImage);
  setImageWithFallback(questionCatImage, PHASE_THREE_CONFIG.questionCatImage, "", questionCatImage);
  setImageWithFallback(finalCatImage, PHASE_THREE_CONFIG.finalCatImage, "", finalCatImage);

  if (letterOpenMessage) letterOpenMessage.textContent = PHASE_THREE_CONFIG.envelopeMessage;
  if (continueToQuestionButton) continueToQuestionButton.textContent = PHASE_THREE_CONFIG.continueButtonLabel;
  if (loveQuestionTitle) loveQuestionTitle.textContent = PHASE_THREE_CONFIG.questionMessage;
  if (loveFinalMessage) loveFinalMessage.textContent = PHASE_THREE_CONFIG.finalMessage;

  if (loveLetterText) {
    loveLetterText.replaceChildren();
    PHASE_THREE_CONFIG.letterParagraphs.forEach((paragraph) => {
      const text = document.createElement("p");
      text.textContent = paragraph;
      loveLetterText.append(text);
    });
  }
}

function moveNoButton() {
  if (!noButton || !questionStage || !yesButton) return;

  loveState.noAttempts += 1;
  setImageWithFallback(questionCatImage, PHASE_THREE_CONFIG.noAttemptCatImage, "", questionCatImage);

  const positions = [
    { left: "7%", top: "86%" },
    { left: "87%", top: "72%" },
    { left: "12%", top: "18%" },
    { left: "82%", top: "28%" },
    { left: "48%", top: "90%" },
    { left: "5%", top: "52%" },
    { left: "90%", top: "50%" },
    { left: "50%", top: "12%" },
  ];
  const position = positions[loveState.noAttempts % positions.length];

  questionStage.classList.add("is-playing");
  noButton.classList.add("is-running");
  noButton.style.left = position.left;
  noButton.style.top = position.top;
  yesButton.style.transform = `scale(${Math.min(1.45, 1 + loveState.noAttempts * 0.08)})`;
}

function renderRing(index, shouldAnimate = false) {
  const ring = ringElements[index];

  ring.classList.toggle("is-snapping", shouldAnimate);
  ring.style.setProperty("--rotation", `${ringRotations[index]}deg`);
  ring.setAttribute("aria-valuenow", String(dialValues[index]));
  ring.setAttribute("aria-valuetext", `Digito ${dialValues[index]}`);
  readoutElements[index].textContent = dialValues[index];
}

function setRingDigit(index, digit, shouldAnimate = true) {
  dialValues[index] = wrapDigit(digit);
  ringRotations[index] = -dialValues[index] * STEP_DEGREES;
  renderRing(index, shouldAnimate);
  setStatus("Codigo pendiente");
  lockBody.classList.remove("is-wrong");
}

function setRingRotation(index, rotation) {
  ringRotations[index] = rotation;
  dialValues[index] = getSelectedDigit(rotation);
  renderRing(index);
  setStatus("Codigo pendiente");
  lockBody.classList.remove("is-wrong");
}

function snapRing(index) {
  ringRotations[index] = -dialValues[index] * STEP_DEGREES;
  renderRing(index, true);
}

function createRingDigits(ring) {
  DIGITS.forEach((digit) => {
    const digitNode = document.createElement("span");
    digitNode.className = "wheel-digit";
    digitNode.style.setProperty("--digit-angle", `${digit * STEP_DEGREES}deg`);
    digitNode.textContent = digit;
    ring.append(digitNode);
  });
}

function startRingDrag(event) {
  if (lockBody.classList.contains("is-open")) return;

  const ring = event.currentTarget;
  const ringIndex = Number(ring.dataset.ring);

  ring.classList.remove("is-snapping");
  ring.setPointerCapture(event.pointerId);
  dragState.ringIndex = ringIndex;
  dragState.startAngle = getAngleFromCenter(event, ring);
  dragState.startRotation = ringRotations[ringIndex];
}

function moveRingDrag(event) {
  if (dragState.ringIndex === null) return;

  const ring = ringElements[dragState.ringIndex];
  const angle = getAngleFromCenter(event, ring);
  const delta = getAngleDelta(angle, dragState.startAngle);

  setRingRotation(dragState.ringIndex, dragState.startRotation + delta);
}

function endRingDrag() {
  if (dragState.ringIndex === null) return;

  snapRing(dragState.ringIndex);
  dragState.ringIndex = null;
}

function handleRingKeyboard(event) {
  if (lockBody.classList.contains("is-open")) return;

  const ringIndex = Number(event.currentTarget.dataset.ring);
  const forwardKeys = ["ArrowRight", "ArrowUp", "PageUp"];
  const backwardKeys = ["ArrowLeft", "ArrowDown", "PageDown"];

  if (forwardKeys.includes(event.key)) {
    event.preventDefault();
    setRingDigit(ringIndex, dialValues[ringIndex] + 1);
  }

  if (backwardKeys.includes(event.key)) {
    event.preventDefault();
    setRingDigit(ringIndex, dialValues[ringIndex] - 1);
  }
}

function showWrongCode() {
  lockBody.classList.remove("is-wrong");
  void lockBody.offsetWidth;
  lockBody.classList.add("is-wrong");
  setStatus("Código incorrecto", "error");
}

function showSuccess() {
  lockBody.classList.remove("is-wrong");
  lockBody.classList.add("is-open");
  setStatus("Código Correcto!", "success");
  tryCodeButton.disabled = true;

  if (phaseOneSuccessMessage) {
    phaseOneSuccessMessage.textContent = PHASE_ONE_SUCCESS_CONFIG.message;
  }

  if (goPhaseTwoButton) {
    goPhaseTwoButton.textContent = PHASE_ONE_SUCCESS_CONFIG.buttonLabel;
  }

  openModal(phaseOneSuccessModal);
}

function tryCode() {
  const isCorrect = GAME_CONFIG.phaseOneCode.every((digit, index) => digit === dialValues[index]);

  if (isCorrect) {
    showSuccess();
    return;
  }

  showWrongCode();
}

ringElements.forEach((ring, index) => {
  createRingDigits(ring);
  renderRing(index);
  ring.addEventListener("pointerdown", startRingDrag);
  ring.addEventListener("pointermove", moveRingDrag);
  ring.addEventListener("pointerup", endRingDrag);
  ring.addEventListener("pointercancel", endRingDrag);
  ring.addEventListener("lostpointercapture", endRingDrag);
  ring.addEventListener("keydown", handleRingKeyboard);
});

goPhaseTwoButton?.addEventListener("click", () => {
  closeModal(phaseOneSuccessModal);
  showPhase("phase-search");
  openModal(phaseTwoIntroModal);
});

closePhaseTwoIntroButton?.addEventListener("click", () => {
  closeModal(phaseTwoIntroModal);
});

phaseTwoHitbox?.addEventListener("click", () => {
  openModal(phaseTwoFoundModal);
});

goPhaseThreeButton?.addEventListener("click", () => {
  closeModal(phaseTwoFoundModal);
  showPhase("phase-letter");
  showLetterStep(letterEnvelopeStep);
});

openEnvelopeButton?.addEventListener("click", () => {
  showLetterStep(letterWindowStep);
});

continueToQuestionButton?.addEventListener("click", () => {
  showLetterStep(loveQuestionStep);
});

noButton?.addEventListener("pointerenter", moveNoButton);
noButton?.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesButton?.addEventListener("click", () => {
  showLetterStep(loveFinalStep);
});

renderDecoderVisuals();
renderRiddleOne();
renderRiddleTwo();
renderRiddleThreeImage();
renderPhaseTwo();
renderPhaseThree();
tryCodeButton.addEventListener("click", tryCode);
