# Mission engine upgrade

The host owns game phases, player control, scoring and timer deadlines. Controllers render snapshots and send commands; they never apply scores themselves.

## Game flow

Lobby → briefing → board selection → controller answer → eligible-player steal window → claimed steal answer → training debrief → board. Daily Doubles have a separate wager phase and never allow steals. Final wagering runs without an answer timer. Once every wager is locked (or the host defaults missing wagers to $0), the two-minute final answer timer starts. The host reveals results after answers are locked. Repeated reveal requests cannot apply wagers twice.

## Multiplayer

Every controller has a per-tab ID retained across refresh. The host binds it to a player ID; names are display labels. Commands include room, game, question and message IDs. The host rejects stale game/question commands, deduplicates retries and limits traffic per client. Receipts trigger clock-offset sampling. Controllers retry unacknowledged commands up to five times, request resynchronization and disable input when host snapshots stop arriving. Full snapshots include scores, standard competition ranks, phase, deadlines, paused state, board availability and submitted-status flags. Final answers and wager amounts are excluded from public snapshots.

The existing Supabase configuration is unchanged. Browser tests use a broadcast stand-in, not the live Supabase service. The public relay is intended for trusted training sessions: client-side IDs and checks do not constitute server-enforced authentication. Host ownership and anti-cheat guarantees against a malicious participant require authenticated channels and server-side authorization; this upgrade does not claim those guarantees.

## Recovery and host controls

Checkpoints are saved by room after important changes and every two seconds. Recovery restores the exact selected clues, roster, scores, used clues, current phase and final submissions. Recovered active clocks are paused. Resume the mission clock and the question/final clock when participants are ready. Export/import JSON provides a manual recovery route. Checkpoints and exports contain private final submissions and should remain with the host.

Host command tools provide pause, equivalent-answer acceptance, score corrections, undo of the most recent regular-question ruling, a $0 default for missing final wagers, mute, reduced motion and recovery. Audited corrections are included in the recovery export. Undo history is intentionally limited to the current host session and is cleared on recovery.

## Presentation and training

The lobby keeps essential player and QR actions visible while advanced settings are collapsed. The mission HUD shows phase, controller, time and relay status. Host and phone use the same olive/camouflage theme. Guile greets players, announces steals, warns at ten seconds, reacts to results and celebrates completion; shaking occurs only for wrong answers. The vertical scoreboard updates from the host's player state and correctly displays ties. Debriefs show accepted answers and review topics; answer references come from the existing MDE bank, not newly invented policy. Follow current official training guidance for operational use.

QR generation is bundled locally using qrcode-generator (MIT; see assets/QR-LICENSE.txt). The generated SVG has a white quiet zone, a copyable join link and a room-code fallback. The rendered production URL was decoded in browser testing. Physical Android/iOS camera scanning remains a separate device check.

Audio uses one active music bed at a time, exclusive file effects, music ducking during alerts, an accessible mute control and reduced-motion support.

## Validation

- `npm install`
- `npm test`
- `npx playwright install chromium`
- `npm run test:browser`

The browser suite runs 15 controller tabs through actual host/controller scripts with a mock relay. It checks direct controller answers, remote ready checks, simultaneous steals, duplicate packets, host adjudication/undo, shared pause, controller refresh, host recovery, Daily Double answer timing, final wager limits, final timer sequencing, final-scoring idempotency, QR image decoding, mobile overflow and JavaScript errors. Tests do not prove live relay resilience or physical-device camera behavior.

Optional environment overrides: PLAYWRIGHT_MODULE, CHROMIUM_EXECUTABLE, JSQR_MODULE, PNGJS_MODULE. The suite exposes test hooks only through its HTTP test server; production scripts expose no test state.
