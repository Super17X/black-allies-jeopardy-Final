# Custom game sound schedule

Source: user-filled Game-Sound-Schedule(1).xlsx. Blank assignments preserve existing cues. Filename spelling variations resolved to uploaded assets. Audio uses host volume and mute settings; phone cues also have a local mute button.

| ID | Event | Clip | Playback |
|---|---|---|---|
| S01 | Landing / lobby music | hard_work.mp3 | Host full 18.16-second clip loops from a decoded audio buffer with an automatically matched 120–400 ms overlap, compensated blend volume, and peak protection on landing, lobby and briefing; stops at game launch; mute pauses and unmute resumes |
| S04 | New player joins | awaiting_orders.mp3 | Host once; reconnect is silent |
| S05 | Player becomes ready | orders_received.mp3 | Host once; repeated ready messages are silent |
| S06 | All players become ready | platoon_attention.mp3 | Host once, replaces individual ready cue |
| S18 | Thinking music | helicopter_military.mp3 | Host loop; stops on answer, pass, timeout or pause |
| S21 | Valid answer acknowledged | hooah.mp3 | Player phone once per question |
| S22 | Correct answer | hooah.mp3 | Host once |
| S27 | Steal countdown | m1_garand_notification.mp3 | Host once each second while open; stops on accepted buzz, expiry or pause |
| S28 | Phone buzz button | metal_gear_solid.mp3 | Player phone once |
| S29 | Buzz accepted | military_radio.mp3 | Host once |
| S30 | Buzz denied | no_sir.mp3 | Player phone once |
| S31 | Successful steal | hooah.mp3 | Host once |
| S32 | Failed steal | no_sir.mp3 | Host once |
| S56 | Final entrance | isac_enter_dark_zone.mp3 | Host once; selected in follow-up |
| S70 | Winner announcement | trumpet.mp3 | Host once; selected in follow-up |

Existing heartbeat urgency, wrong-answer cue and Final hip-hop music remain. Additional uploaded clips include helicopter_military(1).mp3 and platoon_attention(1).mp3; canonical filenames above are used in game code.
