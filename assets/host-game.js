(() => {
    // -----------------------------
    // Ticker
    // -----------------------------
    const historicWinners = ['Controller answers first. Buzz only when the steal window opens.','Read the contention, DBQ and opinion together.','Pause the timer for a host review.','Final wagers are secret and cannot exceed your positive score.'];
    const tickerContent = document.querySelector("#ticker .ticker-content");
    function initTicker(){
      tickerContent.textContent = historicWinners
        .map(g => g)
        .join("   |   ");
    }
    window.addEventListener("load", initTicker);


    // -----------------------------
    // Question banks — MDE triage only
    // -----------------------------
    // MDE training questions sourced exclusively from the supplied MDE document.
    // Content is for training only; verify procedures against current VA guidance.
    const seededBankRound1 = {"Triage Fundamentals": [["These five items should be reviewed before building a case.", ["What are the demo, ESR narrative, special instructions, CDD, and code sheet?"]], ["This area should be checked first on every case.", ["What are demographics?"]], ["For a PO Box, select this dropdown in Veteran Accommodations and paste the generated language into case comments.", ["What is the PO Box option?"]], ["This is identified as the most common clarification issue.", ["What is the wrong DBQ?"]], ["When a DBQ is missing, search for this form and check medical records for an IMO or prior DBQ.", ["What is the EZ form?"]]], "Contentions & DBQs": [["Hearing loss and tinnitus are generally evaluated on this DBQ.", ["What is DBQ Audio Hearing Loss and Tinnitus?"]], ["Migraines map to this DBQ.", ["What is DBQ Neuro Headaches and Migraines?"]], ["Sleep apnea maps to this DBQ.", ["What is DBQ Respiratory Sleep Apnea?"]], ["GERD maps to this DBQ.", ["What is DBQ GI Esophageal Disorders?"]], ["Erectile dysfunction related to diabetes can be evaluated on this DBQ.", ["What is DBQ Endo Diabetes Mellitus?"]]], "ACE Eligibility": [["This exam category is considered for ACE eligibility, subject to DBQ-specific rules.", ["What are GenMed exams?"]], ["For GenMed contentions, ACE eligibility generally follows this rule.", ["What is an all-or-nothing rule?"]], ["Sleep apnea may be ACE eligible when this evidence is already of record.", ["What is a sleep study?"]], ["A Cardio Heart ACE exam requires a call to complete this measurement and recent vitals or an explanation.", ["What are METs and vitals?"]], ["These exams are identified as ACE excluded in the workbook.", ["What are TBI exams?"]]], "Clarifications & CRs": [["More than two clarifications on the same ESR require this approval step.", ["What is sending the case to the TM for approval?"]], ["CRs should not contain these.", ["What are special characters?"]], ["Words such as “denied” or “not approved” in a contention name require this action.", ["What is sending a CR to correct the contention name?"]], ["If the DBQ does not match the contention, the CR may request removal or this alternative.", ["What is swapping the DBQ?"]], ["If a TERA-excluded condition contains TERA MO language, stop processing and send this.", ["What is a clarification request or CR?"]]], "Medical Opinions": [["A direct service connection opinion asks whether a condition was at least as likely as not incurred in or caused by this.", ["What is military service?"]], ["A secondary service connection opinion asks whether the condition was proximately due to or the result of this.", ["What is a service-connected condition?"]], ["An aggravation opinion evaluates whether a pre-existing condition worsened beyond this.", ["What is its natural progression?"]], ["A 38 U.S.C. §1151 opinion addresses issues such as negligence, lack of skill, or an unforeseeable event related to this.", ["What is VA treatment?"]], ["A hazardous-noise Audio direct opinion is listed as not requiring this separate DBQ.", ["What is an MO DBQ?"]]], "Embedded or Separate?": [["When an MO is embedded, set Separate Form to this.", ["What is No?"]], ["If multiple MOs are embedded, Separate Form remains this.", ["What is No?"]], ["If one MO is embedded and another is separate, set Separate Form to this.", ["What is Yes?"]], ["For an audio-only embedded MO, use Separate Form = No and select this DBQ.", ["What is DBQ Audio?"]], ["When multiple GenMed DBQs share one MO, group the MO to this DBQ.", ["What is the most appropriate GenMed DBQ?"]]], "Special Case Handling": [["MST cases require a valid statement describing this.", ["What is the stressor?"]], ["For MST, update both Veteran Accommodations and this system.", ["What is Veteran Connect?"]], ["If PTSD is already service connected, other mental disorders should be handled as this.", ["What is PTSD Review?"]], ["For cancer triage, the sequence is biopsy, TERA exclusion, and then this.", ["What is service connection?"]], ["Terminal illness appearing only in the priority section is not enough by itself to add this.", ["What is a terminal-illness accommodation?"]]], "Gulf War & TERA": [["Supplemental DBQs triggered by a Gulf War DBQ should be grouped with this—not the Gulf War DBQ itself.", ["What is the examination DBQ?"]], ["Gulf War cases are handled this way even when ACE eligible.", ["What is in person?"]], ["Gulf War language without the correct DBQ or memo requires verification and this action.", ["What is a clarification or CR?"]], ["For a TERA MO, pull this document from medical records and add it to case comments.", ["What is the TERA memo?"]], ["For a TERA IMO, confirm the completed DBQ was done by this vendor.", ["What is LSGS?"]]], "CLCW Rules": [["CLCW appearing only in Priority Case Processing with no MO means process normally and set CLCW to this.", ["What is No?"]], ["CLCW MO language explicitly requiring an SME indicates this case type.", ["What is SME CLCW?"]], ["CLCW MO language without SME wording generally indicates this case type.", ["What is Non-SME CLCW?"]], ["One SME exception is a BVA remand requiring this type of opinion.", ["What is a CLCW SME opinion?"]], ["For both SME and Non-SME CLCW, Separate Form, CLCW Examination, and Group with DBQ should be set to this.", ["What are Yes, Yes, and Yes?"]]], "Scheduling & Case Comments": [["Multiple DBQs that must be completed by the same examiner require this type of note.", ["What is a scheduling note?"]], ["Back-to-back scheduling should generally be requested when cases share this.", ["What is the same specialty type?"]], ["When one contention has multiple DBQs but only one MO form is allowed, remaining MO details go here.", ["What are Remarks or Extra Remarks?"]], ["CLCW exam DBQs should have Veteran Presence Required set to this.", ["What is Yes?"]], ["If the CLCW section is blank, the case may fail at this step.", ["What is acceptance?"]]], "Canned & Historical Language": [["Musculoskeletal ROM language addresses pain, weakness, fatigability, incoordination, and this situation.", ["What are flare-ups or repeated use over time?"]], ["Occupational questions should describe functional limitations without opining on this binary employment conclusion.", ["What are employable or unemployable?"]], ["A new PTSD claim requires this statement attached to the Initial DBQ.", ["What is a stressor statement?"]], ["For certain older GERD claims, missing historical language requires this action.", ["What is sending a CR?"]], ["Historical neurological language may trigger Rectum and Anus, Intestinal, and this DBQ when related symptoms are present.", ["What is Esophageal Conditions?"]]], "DBQ Triggers & Rework": [["If the actual condition differs from the claimed condition but is clinically related, evaluate this condition and justify the change.", ["What is the actual condition?"]], ["Ankle findings may trigger Scars, Peripheral Nerves, Muscle Injuries, Foot, and these lower-extremity DBQs.", ["What are Knee and Lower Leg DBQs?"]], ["Back findings may trigger Scars, Muscle Injuries, Neck, Hip and Thigh, and additional this type of evaluation.", ["What is a neurological evaluation?"]], ["If an MO DBQ was sent without an MO question in the ESR, request that the MO question be added to this.", ["What is the Standard Language Narrative?"]], ["New work not included in the original ESR requires a new ESR and this additional package.", ["What is a cancellation package?"]]], "Case Review & Initial Checks": [["This should be confirmed before triaging a case involving a deceased Veteran.", ["What is the Veteran’s deceased status?"]], ["When death is confirmed, document the date of death and this identifying information.", ["What are the document ID and page or record reference?"]], ["These case materials should be reviewed to understand the requested examinations and opinions.", ["What are the ESR, narratives, special instructions, DBQs, CDD, and code sheet?"]], ["A Veteran accommodation involving a PO Box should be reflected in both this field and the case comments.", ["What is Veteran Accommodations?"]], ["When a condition is unclear or clinically broad, the triager should identify the specific this before selecting the examination.", ["What is the etiology or diagnosis?"]], ["This document should be checked when verifying whether the requested DBQ matches the contention.", ["What is the CDD?"]], ["If a death certificate is used to verify death, record the document ID and this additional reference.", ["What is the page number or record reference?"]]], "Medical Opinion Language": [["“Provide medical opinion” is an example of this type of request language.", ["What is nonstandard medical opinion language?"]], ["“Is at least as likely as not” generally signals that this is required.", ["What is a medical opinion?"]], ["“Please provide rationale” tells the examiner that this must accompany the opinion.", ["What is supporting rationale?"]], ["“Please opine whether…” is another phrase that may indicate this type of request.", ["What is a medical opinion request?"]], ["When nonstandard opinion wording is clear, process it with this form.", ["What is the DBQ Medical Opinion form?"]], ["When an MO is not requested, the case should continue through this ordinary workflow.", ["What is normal triage?"]], ["Before building an MO, first identify whether it is a TERA, IMO, or this type of opinion.", ["What is another applicable MO type?"]]], "Gulf War Processing": [["A Gulf War DBQ should generally be verified for completion within this period.", ["What is the applicable recency period, such as six months or the period specified by current guidance?"]], ["When adding a supplemental DBQ to a Gulf War case, identify this as the parent DBQ.", ["What is the Gulf War DBQ?"]], ["This reason should be used when supplemental DBQs are triggered by contentions on the Gulf War DBQ.", ["What is “Supplemental DBQs triggered for contentions present on DBQ Gulf War, at time of triage”?"]], ["Medical opinions for Gulf War supplemental examinations should be grouped with this DBQ.", ["What is the examination DBQ—not the Gulf War DBQ?"]], ["Gulf War language without the appropriate DBQ or medical opinion requires verification of the DBQs, opinions, and this supporting item.", ["What is the Gulf War memo or completed Gulf War DBQ?"]], ["This specific DBQ is required when Gulf War processing is appropriate.", ["What is DBQ General Medical Gulf War?"]], ["If a Gulf War DBQ is present but the narrative lacks Gulf War language, request that the language be added or do this.", ["What is remove the Gulf War DBQ if it is not required?"]]], "Gulf War vs. TERA": [["A case may mention Gulf War without actually requesting this specific opinion.", ["What is a Gulf War medical opinion?"]], ["If Gulf War language appears but no Gulf War DBQ is present, the triager should verify whether the DBQ is this.", ["What is required and current?"]], ["A TERA-excluded condition should not automatically receive this unrelated processing element.", ["What is a Gulf War medical opinion or DBQ?"]], ["If Gulf War language is included in a TERA narrative, confirm whether the condition is actually this.", ["What is TERA-related?"]], ["If a TERA-excluded condition incorrectly includes a TERA opinion, request this correction.", ["What is removal of the TERA Medical Opinion?"]], ["A TERA narrative may mention Gulf War, but this must still be verified before adding a Gulf War DBQ.", ["What is whether Gulf War language or a Gulf War MO is actually required?"]], ["If a TERA-excluded condition incorrectly includes Gulf War processing, first send this before continuing.", ["What is a CR to remove the TERA language or correct the request?"]]], "CLCW Advanced Play": [["CLCW listed only under Priority Case Processing, without an MO, should be treated as this.", ["What is a normal case?"]], ["A CLCW MO that does not mention SME is generally treated as this, absent an exception.", ["What is Non-SME CLCW?"]], ["A deceased Veteran before this date may trigger a CLCW SME clarification exception.", ["What is August 10, 2022?"]], ["A claim received before this date may also trigger a CLCW SME clarification exception.", ["What is August 10, 2022?"]], ["A BVA remand requiring this type of opinion is a CLCW SME exception trigger.", ["What is a CLCW SME opinion?"]], ["A CLCW case with an MO but no SME language is classified this way unless an exception applies.", ["What is Non-SME CLCW?"]], ["One exception requires clarification when a BVA remand specifically requests this.", ["What is a CLCW SME opinion?"]]], "CLCW Configuration": [["For a true CLCW MO, Separate Form should be set to this.", ["What is Yes?"]], ["The CLCW Examination field should be set to this for both SME and Non-SME cases.", ["What is Yes?"]], ["Group with DBQ should be set to this for a CLCW medical opinion.", ["What is Yes?"]], ["The main configuration difference between SME and Non-SME CLCW is this field.", ["What is CLCW SME Required?"]], ["If Veteran Presence Required is accidentally set to No for an exam DBQ, the case may be incorrectly converted to this.", ["What is ACE?"]], ["For an in-person CLCW examination, Veteran Presence Required should be set to this.", ["What is Yes?"]], ["Before accepting a CLCW case, this section must be completed for each DBQ.", ["What is the CLCW section?"]]], "Scheduling Coordination": [["Multiple GenMed DBQs that must be completed by one examiner require this scheduling instruction.", ["What is a same-examiner scheduling note?"]], ["When several exams share a specialty, the scheduling team may be asked to schedule them this way.", ["What is back-to-back?"]], ["The same-examiner rule applies only when all requested DBQs are within this category.", ["What are GenMed DBQs?"]], ["The scheduling note should identify the specific DBQs that must be completed by this person.", ["What is the same examiner?"]], ["The scheduling instruction should be added in both case comments and this Veteran-facing notation.", ["What is Veteran Connect?"]], ["A same-examiner instruction should be placed in case comments and, when required, this system.", ["What is Veteran Connect?"]], ["This scheduling phrase identifies that two or more exams must be performed by one examiner.", ["What is “must be scheduled with the same examiner”?"]]], "Embedded Medical Opinions": [["Only one MO form is allowed for each this.", ["What is contention?"]], ["If several GenMed DBQs share one MO, attach the MO tab to this DBQ.", ["What is the most appropriate GenMed DBQ?"]], ["The remaining DBQs should contain the MO request in this section.", ["What are Remarks or Extra Remarks?"]], ["MOs placed in Remarks or Extra Remarks are reviewed by this group.", ["What is QA?"]], ["When all requested DBQs are GenMed and share one MO, the MO should be grouped with this type of DBQ.", ["What is the most appropriate GenMed examination DBQ?"]], ["When multiple MOs are embedded, Separate Form remains set to this.", ["What is No?"]], ["For an audio-only embedded MO, select this DBQ while keeping Separate Form set to No.", ["What is DBQ Audio?"]]], "DBQ Selection Problems": [["A respiratory DBQ sent for chest pain may require clarification of this.", ["What is the specific etiology of the chest pain?"]], ["If the selected DBQ does not fit the contention, the triager should request removal of this.", ["What is the incorrect DBQ?"]], ["A clarification should also request any additional DBQs needed for this purpose.", ["What is full evaluation of the contention?"]], ["The correct examination is selected based on the condition’s symptoms, diagnosis, and this.", ["What is etiology?"]], ["A DBQ that does not correspond to the claimed condition may be labeled this in a clarification request.", ["What is incorrectly sent?"]], ["The most common clarification request involves this mismatch.", ["What is the wrong DBQ for the contention?"]], ["If a soft-tissue sarcoma is sent on an incorrect DBQ, add this DBQ for full evaluation when appropriate.", ["What is DBQ Muscle Injuries?"]]], "Special Scheduling Dependencies": [["When TBI and Psych exams are on the same ESR, this exam must occur first.", ["What is the TBI exam?"]], ["The Psych appointment should occur after this appointment.", ["What is the TBI Initial or Review appointment?"]], ["The required sequence should be added as a Veteran accommodation using this wording.", ["What is “TBI must occur prior to Psych exam”?"]], ["The scheduling case comment should instruct the CM to schedule this exam earlier.", ["What is the TBI exam?"]], ["This type of dependency should be reflected in both accommodations and case comments.", ["What is an examination sequencing requirement?"]], ["When TBI and Psych are on the same ESR, this must be scheduled first.", ["What is the TBI examination?"]], ["The required sequence should be added as both an accommodation and this type of scheduling comment.", ["What is a case comment?"]]], "Sensitive Claims": [["Sensitive claims require the examiner to have access to these records.", ["What are sensitive documents in VBMS?"]], ["A sensitive-claim reminder may be added as this type of comment.", ["What is a note to the examiner?"]], ["The purpose of the sensitive-claim note is to ensure the examiner can access this information.", ["What are sensitive records?"]], ["Sensitive claims should be flagged so that the examiner does not miss this type of evidence.", ["What is restricted or sensitive documentation?"]], ["When adding supplemental DBQs in a sensitive case, include both the DBQ instruction and this reminder.", ["What is the sensitive-claim access note?"]], ["For an MST examination, the Veteran should be notified that they may choose this.", ["What is the gender of the examiner?"]], ["Sensitive-claim instructions should help ensure the examiner can review these records.", ["What are sensitive documents in VBMS?"]]], "Rework Team CRs": [["A CR should not contain these typographical elements.", ["What are special characters?"]], ["If a DBQ is clearly wrong, the CR should request its removal and this correction.", ["What is the appropriate DBQ?"]], ["If the contention name contains “denied,” “not approved,” or similar wording, request correction of this.", ["What is the contention name?"]], ["When VA responds to a CR, the response should be pasted into this location.", ["What are case comments?"]], ["A CR should be numbered when multiple clarification requests are needed on one ESR.", ["What are clarification requests?"]], ["A CR for prior-decision wording should ask VA to remove terms such as “denied” or this phrase.", ["What is “not approved”?"]], ["When VA responds to a CR, the response should be pasted into this location.", ["What are case comments?"]]], "Cancer and Biopsy Review": [["Before processing a soft-tissue cancer claim, look for this diagnostic evidence.", ["What are biopsy results?"]], ["If biopsy results are missing but may exist, request confirmation and addition of this evidence.", ["What are the biopsy results?"]], ["A soft-tissue sarcoma may require this type of DBQ based on the involved tissue or location.", ["What is a Muscle Injuries DBQ?"]], ["If the wrong cancer DBQ was sent, the CR should request removal of the incorrect exam and addition of this.", ["What is the appropriate examination DBQ?"]], ["Cancer triage should verify the diagnosis, records, DBQ, and this exposure-related consideration.", ["What is TERA exclusion?"]], ["For a cancer increase, this evidence is not required before processing.", ["What are biopsy results?"]], ["For an already service-connected cancer, this evidence is also not required.", ["What are biopsy results?"]]], "Triggered DBQs": [["If the examiner identifies a condition different from the claimed condition, the examiner should evaluate this.", ["What is the actual condition?"]], ["When substituting a DBQ for the actual condition, the examiner should explain the change in this section.", ["What is the remarks section?"]], ["Additional DBQs may be triggered by information found during this activity.", ["What is the examination?"]], ["A supplemental DBQ may be added when records or MO language show that the original DBQ is insufficient for this.", ["What is full evaluation?"]], ["A case comment may tell the examiner to add any additional DBQs needed if the triage-added exam is this.", ["What is incorrect?"]], ["If the claimed condition differs from the actual condition found, the examiner should evaluate the condition that is this.", ["What is actually present?"]], ["Additional DBQs should be added when needed for this purpose.", ["What is a full evaluation of the condition?"]]], "Accuracy & Acceptance": [["Before accepting a CLCW case, verify that this section is complete for every DBQ.", ["What is the CLCW section?"]], ["An incomplete CLCW section may prevent this action.", ["What is accepting the case?"]], ["A case should not be accepted until the DBQ, MO, specialty, and this are consistent.", ["What is the contention?"]], ["If additional work is not included in the original ESR, a new ESR and this package may be required.", ["What is a cancellation package?"]], ["The final quality check should confirm the request, DBQ, opinion, scheduling, and this are aligned.", ["What are case comments and special instructions?"]], ["Before accepting, confirm that the DBQ, contention, specialty, and medical opinion request are this.", ["What is consistent and aligned?"]], ["If the required CLCW section is blank, the case may be unable to reach this processing step.", ["What is acceptance?"]]], "Final Mixed Review": [["The correct parent DBQ for Gulf War-triggered supplemental exams is this.", ["What is the Gulf War DBQ?"]], ["The correct parent DBQ for grouping a Gulf War-related MO is this.", ["What is the specific examination DBQ?"]], ["The absence of SME language in a CLCW MO usually means this classification.", ["What is Non-SME CLCW?"]], ["A TBI and Psych case requires this appointment order.", ["What is TBI before Psych?"]], ["The overall goal of triage is to ensure that every contention receives the correct DBQ, opinion, specialty, and this.", ["What is complete and accurate evaluation?"]], ["An MO for a Gulf War-triggered examination should be grouped with this DBQ.", ["What is the specific examination DBQ?"]], ["A case with only a CLCW priority note and no MO should be processed as this.", ["What is a normal case with CLCW set to No?"]]]};
    const seededBankRound2 = {"CLCW Exception Traps": [["CLCW appears only in Priority Case Processing. No medical opinion is requested. What classification and field setting apply?", ["What are normal processing and CLCW = No?"]], ["A CLCW MO is requested, but the narrative does not mention SME. The claim was received before August 10, 2022. What action is required?", ["What are treat it as a potential SME exception and send clarification?"]], ["A CLCW MO says SME is required. Which three configuration fields must be set to Yes?", ["What are Separate Form, CLCW Examination, and Group with DBQ?"]], ["A CLCW exam is accidentally configured with Veteran Presence Required = No. What processing risk does this create?", ["What is incorrectly converting an in-person examination to ACE?"]], ["A BVA remand requires a CLCW SME opinion, but the narrative does not use SME language. What overrides the normal Non-SME classification?", ["What is the BVA remand exception?"]]], "Gulf War and TERA Collision": [["A case contains Gulf War language and a General Medical Gulf War DBQ, but no Gulf War MO language. What must be verified before processing?", ["What are whether the Gulf War DBQ and related language are actually required?"]], ["A Gulf War DBQ triggers supplemental physical-condition DBQs. What parent DBQ should be selected, and what reason should be used?", ["What are the Gulf War DBQ and “Supplemental DBQs triggered for contentions present on DBQ Gulf War, at time of triage”?"]], ["A Gulf War supplemental DBQ has an MO. Which DBQ should receive the MO grouping?", ["What is the specific examination DBQ—not the Gulf War DBQ?"]], ["A case is ACE eligible but includes Gulf War processing. Should it remain ACE?", ["What is no; Gulf War cases are processed in person?"]], ["A TERA-excluded condition contains TERA MO language and Gulf War wording. What is the first action?", ["What is send a CR to remove the inappropriate TERA language and verify whether Gulf War processing is required?"]]], "Embedded MOs and Conjoined Exams": [["An MO is embedded in the DBQ language. What should Separate Form equal?", ["What is No?"]], ["Two MOs are embedded, and neither is separate. What should Separate Form equal?", ["What is No?"]], ["One MO is embedded and another is separate. What should Separate Form equal?", ["What is Yes?"]], ["Knee, Back, and Ankle are all GenMed DBQs with one MO. The MO is embedded in one DBQ, and the other two DBQs have no MO tab. Where should the MO be grouped, and how should scheduling be handled?", ["What are group it with the most appropriate DBQ and schedule all exams with the same examiner?"]], ["Only one MO tab can be added for the conjoined contention. Where should the remaining MO instructions be placed, and who reviews them?", ["What are Remarks or Extra Remarks, reviewed by QA?"]]], "Cancer, Diagnostics, and DBQ Corrections": [["A new cancer claim has no biopsy results in the narrative or records. What should be requested?", ["What is confirmation of whether biopsy results are available and addition of them to the records?"]], ["What is the correct review sequence for a cancer contention?", ["What are biopsy, TERA exclusion, and service connection?"]], ["A cancer increase is requested, but no biopsy is included. Is a biopsy automatically required before processing?", ["What is no?"]], ["A soft-tissue sarcoma of muscle, fat, or fibrous connective tissue is on an incorrect DBQ. What corrective action is appropriate?", ["What are remove the incorrect DBQ and add DBQ Muscle Injuries, while retaining other appropriate DBQs?"]], ["A cancer is already service connected and is also TERA excluded. What two issues must still be separated during review?", ["What are whether biopsy evidence is needed and whether inappropriate TERA MO language must be removed?"]]], "MST, PTSD, and Sensitive Claims": [["An MST claim has no valid stressor statement. What action is required?", ["What is send a CR requesting the stressor statement?"]], ["Which two locations must be updated for an MST case?", ["What are Veteran Accommodations and Veteran Connect?"]], ["A Veteran already has service-connected PTSD but claims another mental disorder. How should the case be handled?", ["What is PTSD Review?"]], ["An ESR contains both DBQ PTSD and DBQ Mental Health. What issue should be identified?", ["What are duplicate or conflicting mental-health DBQs that should not both remain on the same ESR?"]], ["An MST exam is ready for scheduling. What additional Veteran preference must be communicated?", ["What is that the Veteran may choose the examiner’s gender before scheduling?"]]], "Scheduling, Rework, and Final Acceptance": [["TBI and Psych exams appear on the same ESR. Which must occur first?", ["What is the TBI examination?"]], ["What accommodation and scheduling instruction should be added for the TBI/Psych scenario?", ["What are “TBI must occur prior to Psych exam” and a case comment directing the TBI appointment to be earlier?"]], ["A contention includes “denied” or “not approved.” What must be corrected before normal processing?", ["What is the prior-decision language in the contention name?"]], ["VA responds to a CR. Where must the response be documented?", ["What are the case comments?"]], ["A case has been fully built, all required corrections are complete, and the exams are ready. What final workflow action may be required?", ["What is escalation according to the established workflow?"]]]};
    const ROUND1_CATEGORIES = Object.keys(seededBankRound1);
    const ROUND2_CATEGORIES = Object.keys(seededBankRound2);
    const finalJeopardyBank = [{"category": "The Conflicting Gulf War Case", "text": "A case includes a General Medical Gulf War DBQ, several physical-condition contentions, and a narrative with no Gulf War language or Gulf War medical opinion. The case also contains a TERA-excluded condition. What must the triager verify and correct before processing?", "answers": ["What are verify whether the Gulf War DBQ is required and current; confirm the contentions and DBQs are correct; confirm whether Gulf War medical opinions are required; send a CR to add the Gulf War medical opinion or remove the Gulf War DBQ if not required; and review the TERA memorandum and send a CR to remove inappropriate TERA language when required?"]}, {"category": "The Conjoined Examination", "text": "A case has Knee, Back, and Ankle GenMed DBQs with one medical opinion. The MO is embedded in one DBQ, and the other two DBQs have no MO tab. What configuration, grouping, scheduling, and case comments are required?", "answers": ["What are Separate Form = No; group the MO with the most appropriate GenMed DBQ; schedule all three examinations with the same examiner; add the scheduling instruction to case comments and Veteran Connect; and place remaining MO instructions in Remarks or Extra Remarks for QA review?"]}, {"category": "The CLCW Date Trap", "text": "A case requests a CLCW medical opinion but does not mention an SME examiner. The Veteran died before August 10, 2022. What classification and action are required?", "answers": ["What are send clarification for the CLCW SME exception, ask VA to add CLCW SME language, and do not finalize the case as ordinary Non-SME CLCW until clarification is resolved?"]}, {"category": "The Cancer Sequence", "text": "A new soft-tissue sarcoma claim has no biopsy results in the narrative or medical records. The condition is also potentially TERA excluded, and the DBQ selected does not address the affected muscle or connective tissue. What is the correct sequence?", "answers": ["What are confirm whether biopsy results are available and add them if available; review the TERA memorandum; send a CR if inappropriate TERA MO language is present; correct the DBQ selection; and add DBQ Muscle Injuries when appropriate?"]}, {"category": "The DIC/CP Misclassification", "text": "An ESR is labeled DIC/CP Death, but the records contain no date of death. The case also includes a PO Box and a missing DBQ. What actions must occur before the case is accepted?", "answers": ["What are confirm deceased status; document the date of death and supporting reference; update the PO Box accommodation and case comments; search the EZ form, medical records, IMO, and prior DBQs; and use the missing-DBQ CR path if needed?"]}, {"category": "The Diabetes and Nerve Scenario", "text": "An ESR includes diabetes and a peripheral nerve or sciatica contention, but no Diabetic Peripheral Neuropathy DBQ. What should the triager do?", "answers": ["What is send a CR requesting the DBQ Diabetic Peripheral Neuropathy DBQ and verify that the remaining DBQs and medical opinions align with the diabetes-related nerve condition?"]}, {"category": "The Sensitive MST Case", "text": "An MST case lacks a valid stressor statement. The Veteran has requested a particular examiner gender, and the supporting records are sensitive documents in VBMS. What corrections and notifications are required?", "answers": ["What are request a valid stressor statement; update the required accommodation fields; notify the Veteran about examiner-gender choice; add the documentation to Veteran Connect; and add a sensitive-claim note for examiner access to VBMS records?"]}, {"category": "The Parkinson’s Mental-Health Trigger", "text": "The special instructions state, “Mental examination needed to evaluate depression and insomnia.” The code sheet identifies Parkinson’s disease as service connected. What should the triager investigate before selecting the mental-health DBQ?", "answers": ["What are whether the wording is related to Parkinson’s disease; the existing service-connected conditions; whether PTSD Review or another applicable mental-health instruction applies; and whether the selected DBQ and MO language match the requested evaluation?"]}, {"category": "The ACE Eligibility Conflict", "text": "A case appears ACE eligible, but it also contains Gulf War processing and an in-person CLCW examination. What should happen to the Veteran Presence Required settings?", "answers": ["What are do not automatically process the Gulf War case as ACE; set Veteran Presence Required = Yes for the in-person CLCW examination; use No only when genuinely ACE eligible or IMO-only; and verify the CLCW section before acceptance?"]}, {"category": "The “Ready to Accept” Audit", "text": "A case has been corrected and appears ready for examination. What final checklist should the triager complete before acceptance or escalation?", "answers": ["What are confirm contentions and DBQs; verify MOs and embedded/separate status; confirm TERA, Gulf War, CLCW, MST, cancer, PTSD, and scheduling requirements; verify case comments and Veteran Connect notes; confirm accommodations and sequencing; complete the CLCW section; document CR responses; and accept or escalate only when fully ready?"]}, {"category": "The “Ready to Accept” Audit", "text": "A case contains a CLCW MO without SME language; a claim received before August 10, 2022; a General Medical Gulf War DBQ with supplemental physical DBQs; one embedded audio MO; diabetes with a peripheral nerve contention; an MST contention without a stressor statement; TBI and Psych exams on the same ESR; and a DIC/CP Death label with no confirmed death date. Identify the complete triage plan.", "answers": ["What are send clarification for the CLCW SME exception; keep the Gulf War DBQ as parent only if Gulf War processing is confirmed and group supplemental MOs with applicable examination DBQs; process the embedded audio MO with Separate Form = No and DBQ Audio; send a CR to add the Diabetic Peripheral Neuropathy DBQ; request the missing MST stressor statement and update accommodations and Veteran Connect; schedule TBI before Psych; confirm deceased status for the DIC/CP label; and complete all CLCW, scheduling, case-comment, and Veteran Connect fields before acceptance or escalation?"]}];
    let finalJeopardy = finalJeopardyBank[0];

    // -----------------------------
    // DOM
    // -----------------------------
    const $ = id => document.getElementById(id);


    const lobbyPane = $("lobbyPane");
    const waitingRoomPane = $("waitingRoomPane");
    const scoreBoard = $("scoreBoard");
    const boardPane = $("boardPane");
    const qaPane = $("qaPane");
    const finalPane = $("finalPane");
    const summaryPane = $("summaryPane");


    const nameInput = $("nameInput");
    const qSecondsInput = $("qSeconds");
    const stealSecondsInput = $("stealSeconds");
    const finalSecondsInput = $("finalSeconds");
    const categoryCountInput = $("categoryCount");
    const qPerCatInput = $("qPerCat");
    const startValueInput = $("startValue");
    const valueStepInput = $("valueStep");
    const randomizeBoardSel = $("randomizeBoard");
    const roundSelect = $("roundSelect");
    const autoStartSel = $("autoStart");
    const requireReadySel = $("requireReady");
    const dailyDoublesSel = $("dailyDoubles");
    const dailyDoubleCountInput = $("dailyDoubleCount");
    const soundModeSel = $("soundMode");
    const volumeInput = $("volume");


    const addPlayerBtn = $("addPlayerBtn");
    const clearPlayersBtn = $("clearPlayersBtn");
    const enterWaitingRoomBtn = $("enterWaitingRoomBtn");
    const beginGameBtn = $("beginGameBtn");
    const backToLobbyBtn = $("backToLobbyBtn");
    const submitBtn = $("submitBtn");
    const passBtn = $("passBtn");
    const buzzerBtn = $("buzzerBtn");
    const pauseQuestionTimerBtn = $("pauseQuestionTimerBtn");


    const resetBtn = $("resetBtn");
    const resetBtnTop = $("resetBtnTop");
    const resetBtnWaiting = $("resetBtnWaiting");
    const resetBtnFinal = $("resetBtnFinal");


    const privacyRevealBtn = $("privacyRevealBtn");
    const privacyScreen = $("privacyScreen");
    const flashOverlay = $("flashOverlay");
    const privacyStatus = $("privacyStatus");


    const roomGrid = $("roomGrid");
    const waitingCount = $("waitingCount");
    const readyCount = $("readyCount");
    const readyTotal = $("readyTotal");
    const readyRuleLabel = $("readyRuleLabel");
    const autoStartIn = $("autoStartIn");


    const scoreList = $("scoreList");
    const controlName = $("controlName");
    const roundLabel = $("roundLabel");
    const remainingCount = $("remainingCount");
    const gameClockEl = $("gameClock");


    const boardGrid = $("boardGrid");
    const ddLeft = $("ddLeft");


    const qaHeader = $("qaHeader");
    const timerEl = $("timer");
    const clueValueEl = $("clueValue");
    const clueCatEl = $("clueCat");
    const questionText = $("questionText");
    const answerInput = $("answerInput");
    const feedback = $("feedback");
    const ddBadge = $("ddBadge");
    const ddWagerRow = $("ddWagerRow");
    const ddWagerInput = $("ddWagerInput");
    const ddWagerSubmitBtn = $("ddWagerSubmitBtn");
    const ddPrivacyBtn = $("ddPrivacyBtn");


    const finalStepEl = $("finalStep");
    const finalPlayerEl = $("finalPlayer");
    const finalCategoryEl = $("finalCategory");
    const finalClueTextEl = $("finalClueText");
    const finalPromptEl = $("finalPrompt");
    const finalInput = $("finalInput");
    const finalSubmitBtn = $("finalSubmitBtn");
    const finalRevealBtn = $("finalRevealBtn");
    const finalTimerEl = $("finalTimer");
    const finalStartTimerBtn = $("finalStartTimerBtn");
    const finalStopTimerBtn = $("finalStopTimerBtn");
    const finalPrivacyBtn = $("finalPrivacyBtn");


    // -----------------------------
    // State
    // -----------------------------
    const state = {
      players: [],
      ready: new Map(),
      round: 1,
      controlIdx: 0,


      used: new Set(),
      board: null,
      activeKey: null,
      timer: { id:null, remaining:0, mode:"main", paused:false },
      gameClock: { id:null, remaining:900 },
      clueAttempts: 0,
      clueStartIdx: 0,


      ddLockedWager: null,
      final: { step:"off", idx:0, wagers:new Map(), answers:new Map(), timerId:null, timerRemaining:0 },


      privacyOn: false,
    };


    // -----------------------------
    // Flash + privacy
    // -----------------------------
    function flash(color, ms=220, opacity=0.7){
      flashOverlay.style.background = color;
      flashOverlay.style.opacity = opacity;
      setTimeout(()=> flashOverlay.style.opacity = 0, ms);
    }


    function setPrivacy(on){
      state.privacyOn = on;
      privacyScreen.style.display = on ? "flex" : "none";
      privacyStatus.textContent = on ? "On" : "Off";
    }
    function togglePrivacy(){ setPrivacy(!state.privacyOn); }
    privacyRevealBtn.addEventListener("click", ()=>setPrivacy(false));
    ddPrivacyBtn.addEventListener("click", ()=>setPrivacy(true));
    finalPrivacyBtn.addEventListener("click", ()=>setPrivacy(true));
    document.addEventListener("keydown", (e)=>{
      if (e.key.toLowerCase() === "p") togglePrivacy();
    });


    // -----------------------------
    // Utils
    // -----------------------------
    function clamp(n, lo, hi){ return Math.max(lo, Math.min(hi, n)); }
    function escapeHtml(s){
      return String(s).replace(/[&<>"']/g, ch => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
      }[ch]));
    }
    function normalize(s) {
      return String(s || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .toLocaleLowerCase("en-US")
        .trim()
        .replace(/[^a-z0-9]/g,"");
    }
    function isCorrectAnswer(given, accepted) {
      const g = MissionCore.answerKey(given);
      if (!g) return false;
      return accepted.some(a => MissionCore.answerKey(a) === g);
    }
    function shuffle(a){
      for (let i=a.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [a[i],a[j]]=[a[j],a[i]];
      }
      return a;
    }
    function parseWholeNumber(raw){
      if(!String(raw??"").trim())return null;
      const n = Number(String(raw).trim());
      if (!Number.isFinite(n) || !Number.isInteger(n)) return null;
      return n;
    }
    function keyFor(cat,row,round){ return `${cat}::${row}::${round}`; }


    // In-UI error helpers (replaces disruptive alert/confirm)
    function showLobbyError(msg){ $("lobbyError").textContent = msg; }
    function clearLobbyError(){ $("lobbyError").textContent = ""; }
    function showWaitingError(msg){ $("waitingError").textContent = msg; }
    function clearWaitingError(){ $("waitingError").textContent = ""; }
    function showDdWagerError(msg){ $("ddWagerError").textContent = msg; }
    function clearDdWagerError(){ $("ddWagerError").textContent = ""; }
    function showFinalError(msg){ $("finalError").textContent = msg; }
    function clearFinalError(){ const el=$("finalError"); el.textContent=""; delete el.dataset.pendingBlank; }


    // -----------------------------
    // Self-contained Web Audio music and sound effects.
    // -----------------------------
    const audio = { ctx:null, master:null, mode:"on", volume:0.25, musicTimer:null, musicStep:0, musicKind:null };
    // Uploaded hip-hop clue timer beat. Starts from the beginning for each regular clue.
    const questionBeat = new Audio("assets/helicopter_military.mp3");
    questionBeat.preload = "auto";
    questionBeat.loop = true;
    // Uploaded result sound effects
    const moneySound = new Audio("assets/hooah.mp3");
    const stealSound = new Audio("assets/no_sir.mp3");
    const rizzSound = new Audio("assets/no_sir.mp3");
    const boomSound = new Audio("assets/hooah.mp3");
    const buzzSound = new Audio("assets/military_radio.mp3");
    const joinSound = new Audio("assets/awaiting_orders.mp3");
    [moneySound, stealSound, rizzSound, boomSound, buzzSound, joinSound].forEach(s => { s.preload = "auto"; });

    const stageSounds = Object.fromEntries(Object.entries({'final-wager':'isac_enter_dark_zone.mp3',results:'trumpet.mp3'}).map(([phase,file])=>{const sound=new Audio('assets/'+file);sound.preload='none';return [phase,sound];}));
    // Decode once and loop the complete buffer without network reloads or timer gaps.
    function createLoopingBed(url){
      let bufferPromise=null,buffer=null,source=null,gain=null,offset=0,startedAt=0,token=0,volume=.25,paused=true;
      return {get paused(){return paused;},get currentTime(){return source?(offset+audio.ctx.currentTime-startedAt)%buffer.duration:offset;},set currentTime(value){offset=Math.max(0,Number(value)||0);},get volume(){return volume;},set volume(value){volume=value;if(gain)gain.gain.setTargetAtTime(volume,audio.ctx.currentTime,.025);},
        async play(){if(!paused)return;audioInit();if(!audio.ctx)throw Error('Audio unavailable');paused=false;const request=++token;
          try{await audio.ctx.resume();if(!bufferPromise)bufferPromise=fetch(url).then(r=>{if(!r.ok)throw Error('Audio load failed');return r.arrayBuffer();}).then(b=>audio.ctx.decodeAudioData(b)).catch(e=>{bufferPromise=null;throw e;});
            buffer=await bufferPromise;if(request!==token||paused)return;
            if(!gain){gain=audio.ctx.createGain();gain.connect(audio.ctx.destination);}gain.gain.value=volume;
            source=audio.ctx.createBufferSource();source.buffer=buffer;source.loop=true;source.connect(gain);startedAt=audio.ctx.currentTime;source.start(0,offset%buffer.duration);
          }catch(e){if(request===token)paused=true;throw e;}
        },pause(){++token;if(source){offset=(offset+audio.ctx.currentTime-startedAt)%buffer.duration;source.stop();source.disconnect();source=null;}paused=true;}
      };
    }
    const landingBed=createLoopingBed('assets/hard_work.mp3');
    const readyCue=new Audio('assets/orders_received.mp3'),allReadyCue=new Audio('assets/platoon_attention.mp3'),stealTick=new Audio('assets/m1_garand_notification.mp3');
    function syncLandingBed(){landingBed.volume=audio.volume;if(soundModeSel.value==='off'){landingBed.pause();return;}if(!['landing','lobby','briefing'].includes(document.body.dataset.screen)){landingBed.pause();landingBed.currentTime=0;return;}landingBed.play().catch(()=>{});}
    function readySound(wasReady,wasAllReady,index){if(!wasReady&&state.ready.get(index)){playResultSound(readyCue);if(!wasAllReady&&allReady())playResultSound(allReadyCue);}}
    const pressureSound=new Audio('assets/beating_hearts.mp3');pressureSound.preload='none';pressureSound.loop=true;
    function stopPressure(){pressureSound.pause();pressureSound.currentTime=0;syncQuestionBeatVolume();}
    function startPressure(){if(soundModeSel.value==='off')return;pressureSound.volume=audio.volume;questionBeat.volume=audio.volume*.25;pressureSound.play().catch(()=>{});}
    function stopStageSounds(){Object.values(stageSounds).forEach(s=>{s.pause();s.currentTime=0;});}
    function playStageSound(screen){stopStageSounds();const sound=stageSounds[screen];if(sound&&soundModeSel.value!=='off'){sound.volume=audio.volume;sound.play().catch(()=>{});}}
    let resultSoundEndTimer;
    function playResultSound(sound){
      questionBeat.volume=0.06;finalBeat.volume=0.06;clearTimeout(resultSoundEndTimer);
      resultSoundEndTimer=setTimeout(()=>{syncQuestionBeatVolume();finalBeat.volume=audio.volume;},1500);
      if (soundModeSel.value === "off") return;
      [moneySound, stealSound, rizzSound, boomSound, buzzSound, joinSound,readyCue,allReadyCue].forEach(s => {
        if (s !== sound) { s.pause(); s.currentTime = 0; }
      });
      sound.volume = Math.max(0, Math.min(1, Number(volumeInput.value || 0.25)));
      sound.pause();
      sound.currentTime = 0;
      sound.play().catch(()=>{});
    }
    function playMoneySound(){ playResultSound(moneySound); }
    function playStealSound(){ playResultSound(stealSound); }
    function playRizzSound(){ playResultSound(rizzSound); }
    function playBoomSound(){ playResultSound(boomSound); }
    function playBuzzSound(){ playResultSound(buzzSound); }
    function playJoinSound(){ playResultSound(joinSound); }

    function syncQuestionBeatVolume(){ questionBeat.volume = Math.max(0, Math.min(1, Number(volumeInput.value || 0.25))); }
    function startQuestionBeat(){
      if (soundModeSel.value === "off") return;
      stopMusic();stopFinalBeat();
      syncQuestionBeatVolume();
      questionBeat.pause();
      questionBeat.currentTime = 0;
      questionBeat.play().catch(()=>{});
    }
    function stopQuestionBeat(){ questionBeat.pause(); questionBeat.currentTime = 0; }
    function pauseQuestionBeat(){ if (!questionBeat.paused) questionBeat.pause(); }
    function resumeQuestionBeat(){
      if (soundModeSel.value === "off") return;
      syncQuestionBeatVolume();
      questionBeat.play().catch(()=>{});
    }
    // Final Jeopardy uses the same local hip-hop track and loops it for the 120-second round.
    const finalBeat = new Audio("assets/jeopardy-hip-hop-beat.mp3");
    finalBeat.preload = "auto";
    finalBeat.loop = true;
    function startFinalBeat(){
      if (soundModeSel.value === "off") return;
      stopQuestionBeat();stopMusic();
      finalBeat.volume = Math.max(0, Math.min(1, Number(volumeInput.value || 0.25)));
      finalBeat.pause();
      finalBeat.currentTime = 0;
      finalBeat.play().catch(()=>{});
    }
    function stopFinalBeat(){ finalBeat.pause(); finalBeat.currentTime = 0; }
    function audioInit(){
      if (audio.ctx) return;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      audio.ctx = new Ctx();
      audio.master = audio.ctx.createGain();
      audio.master.connect(audio.ctx.destination);
      setAudioFromUI();
    }
    document.addEventListener("click", ()=>{audioInit();audio.ctx?.resume().catch(()=>{});syncLandingBed();}, { once:true });


    function setAudioFromUI(){
      audio.mode = soundModeSel.value;
      audio.volume = Math.max(0, Math.min(1, Number(volumeInput.value || 0.25)));
      if (audio.master) audio.master.gain.value = audio.volume;
      pressureSound.volume=audio.volume;landingBed.volume=audio.volume;Object.values(stageSounds).forEach(s=>s.volume=audio.volume);
    }
    soundModeSel.addEventListener("change", ()=>{setAudioFromUI();syncLandingBed();});
    volumeInput.addEventListener("change", ()=>{ setAudioFromUI(); syncQuestionBeatVolume(); finalBeat.volume = Math.max(0, Math.min(1, Number(volumeInput.value || 0.25))); });
    soundModeSel.addEventListener("change", ()=>{ if (soundModeSel.value === "off") { pauseQuestionBeat(); stopPressure();stopStageSounds();stopFinalBeat();stopMusic();[moneySound,stealSound,rizzSound,boomSound,buzzSound,joinSound,readyCue,allReadyCue,stealTick,landingBed].forEach(s=>s.pause()); } });


    function now(){ return audio.ctx?.currentTime ?? 0; }
    function tone({freq=440, t=0, dur=0.12, type="sine", gain=0.2}){
      if (audio.mode === "off") return;
      audioInit();
      if (!audio.ctx) return;
      const osc = audio.ctx.createOscillator();
      const g = audio.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(g); g.connect(audio.master);
      osc.start(t); osc.stop(t + dur + 0.02);
    }
    function sfxCorrect(){ flash("rgba(124,252,152,0.38)", 240, 0.8); const t=now(); [659.25,783.99,987.77,1318.51].forEach((freq,i)=>tone({freq,t:t+i*.085,dur:.16,type:"triangle",gain:.17})); }
    function sfxWrong(){ flash("rgba(255,107,107,0.38)", 280, 0.8); const t=now(); [311.13,277.18,233.08,196].forEach((freq,i)=>tone({freq,t:t+i*.11,dur:.2,type:"sawtooth",gain:.13})); }
    function sfxTimesUp(){ flash("rgba(247,201,72,0.22)", 360, 0.95); const t=now(); tone({freq:200,t,dur:0.25,type:"square",gain:0.12}); }
    function sfxPriceIsRightBuzzer(){ const t=now(); tone({freq:392,t,dur:0.14,type:"square",gain:0.14}); tone({freq:262,t:t+0.14,dur:0.18,type:"square",gain:0.14}); }
    function sfxQuestionOpen(){ const t=now(); tone({freq:523.25,t,dur:.08,type:"triangle",gain:.1}); tone({freq:783.99,t:t+.09,dur:.12,type:"triangle",gain:.12}); }
    function stopMusic(){
      if (audio.musicTimer) clearInterval(audio.musicTimer);
      audio.musicTimer=null; audio.musicStep=0; audio.musicKind=null; updateMusicButtons();
    }
    function updateMusicButtons(){
      const playing=!!audio.musicTimer;
      const lobby=$("musicToggleBtn"), top=$("musicToggleTopBtn");
      if(lobby){ lobby.textContent=playing ? "■ Stop Game Music" : "♫ Start Game Music"; lobby.classList.toggle("music-active",playing); }
      if(top){ top.textContent=playing ? "■ Stop Music" : "♫ Music"; top.classList.toggle("music-active",playing); }
    }
    function startGameMusic(){
      stopQuestionBeat();stopFinalBeat();
      stopMusic(); audioInit(); audio.musicKind="game";
      const melody=[261.63,329.63,392,523.25,392,329.63,293.66,349.23,440,587.33,440,349.23];
      const playBeat=()=>{ const freq=melody[audio.musicStep++%melody.length],t=now(); tone({freq,t,dur:.18,type:"triangle",gain:.045}); tone({freq:freq/2,t,dur:.24,type:"sine",gain:.022}); };
      playBeat(); audio.musicTimer=setInterval(playBeat,420); updateMusicButtons();
    }
    function toggleGameMusic(){ audio.musicTimer ? stopMusic() : startGameMusic(); }
    function startFinalMusic(){
      stopMusic(); audioInit();
      audio.musicKind="final";
      // Original quiz-show-style thinking cue; synthesized locally in the browser.
      const melody=[523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,523.25,659.25,783.99,987.77,880,783.99,659.25,587.33];
      const playBeat=()=>{
        const freq=melody[audio.musicStep++ % melody.length];
        const t=now();
        tone({freq,t,dur:.22,type:"triangle",gain:.075});
        tone({freq:freq/2,t,dur:.28,type:"sine",gain:.035});
      };
      playBeat(); audio.musicTimer=setInterval(playBeat,300); updateMusicButtons();
    }
    $("musicToggleBtn").addEventListener("click",toggleGameMusic);
    $("musicToggleTopBtn").addEventListener("click",toggleGameMusic);
    buzzerBtn.addEventListener("click", sfxPriceIsRightBuzzer);


    // -----------------------------
    // Lobby render/add players
    // -----------------------------
    function renderLobbyList(){
      $("lobbyList").innerHTML =
        state.players.length === 0
          ? "<em>No players yet.</em>"
          : state.players.map((p,i)=>`${i+1}. <strong>${escapeHtml(p.name)}</strong> — $${p.score}`).join("<br/>");
    }
    function addPlayer(){
      const name = (nameInput.value || "").trim();
      if (!name) { showLobbyError("Player name cannot be empty."); return; }
      if (state.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
        showLobbyError("That player name already exists.");
        return;
      }
      clearLobbyError();
      const idx = state.players.length;
      state.players.push({ id:MissionCore.id(), name, score: 0 });
      state.ready.set(idx, false);playJoinSound();
      nameInput.value = "";
      renderLobbyList();
      if(engineReady){checkpoint();sendSnapshot();}
    }

    function playerIndexByName(name){
      const key = String(name || "").trim().toLocaleLowerCase();
      return key ? state.players.findIndex(p => p.name.trim().toLocaleLowerCase() === key) : -1;
    }

    function registerBuzzerPlayer(rawName){
      const requestedName = String(rawName || "").trim().slice(0, 40);
      if (!requestedName) return { ok:false, player:"", added:false, index:-1 };

      let index = playerIndexByName(requestedName);
      let added = false;
      if (index === -1) {
        index = state.players.length;
        state.players.push({ id:MissionCore.id(), name:requestedName, score:0 });
        state.ready.set(index, false);
        added = true;

        renderLobbyList();
        if (waitingRoomPane.style.display !== "none") {
          renderWaitingRoom();
          updateBeginEnabled();
        }
        if (scoreBoard.style.display !== "none") renderScoreboard();
      }

      return { ok:true, player:state.players[index].name, added, index };
    }
    addPlayerBtn.addEventListener("click", addPlayer);
    nameInput.addEventListener("keydown", (e)=>{ if (e.key === "Enter") addPlayer(); });
    nameInput.addEventListener("input", clearLobbyError);
    clearPlayersBtn.addEventListener("click", ()=>{ state.players=[]; state.ready=new Map(); clearLobbyError(); renderLobbyList(); });


    // -----------------------------
    // Waiting room (key-ready support)
    // Press 1-8 to toggle ready for player index
    // -----------------------------
    let waitingCountdownId = null;


    function allReady(){ for (let i=0;i<state.players.length;i++) if (!state.ready.get(i)) return false; return true; }


    function updateBeginEnabled(){
      const requireReady = requireReadySel.value === "on";
      beginGameBtn.disabled = requireReady ? !allReady() : false;
    }


    function toggleReadyByIndex(idx){
      if (idx < 0 || idx >= state.players.length) return;
      const wasReady=!!state.ready.get(idx),wasAllReady=allReady();state.ready.set(idx, !wasReady);readySound(wasReady,wasAllReady,idx);
      renderWaitingRoom();
      updateBeginEnabled();
    }


    function renderWaitingRoom(){
      waitingCount.textContent = String(state.players.length);
      readyTotal.textContent = String(state.players.length);
      readyRuleLabel.textContent = requireReadySel.value === "on" ? "All must be ready" : "Optional";
      readyCount.textContent = String(state.players.reduce((acc,_,i)=>acc + (state.ready.get(i)?1:0), 0));


      roomGrid.innerHTML = "";
      state.players.forEach((p,i)=>{
        const box = document.createElement("div");
        box.className = "roomBox";


        const title = document.createElement("div");
        title.className = "roomTitle";
        title.innerHTML =
          `${escapeHtml(p.name)} ` +
          `<span class="${state.ready.get(i) ? "readyYes":"readyNo"}">${state.ready.get(i) ? "READY" : "NOT READY"}</span>` +
          ` <span class="tag">Key <span class="kbd">${i+1}</span></span>`;
        box.appendChild(title);


        const row = document.createElement("div");
        row.className="row";


        const toggleBtn = document.createElement("button");
        toggleBtn.className = "btn " + (state.ready.get(i) ? "warn":"ok");
        toggleBtn.textContent = state.ready.get(i) ? "Set Not Ready" : "Set Ready";
        toggleBtn.addEventListener("click", ()=>toggleReadyByIndex(i));


        const privacyBtn = document.createElement("button");
        privacyBtn.className="btn alt";
        privacyBtn.textContent="Privacy Screen";
        privacyBtn.addEventListener("click", ()=>setPrivacy(true));


        row.appendChild(toggleBtn);
        row.appendChild(privacyBtn);
        box.appendChild(row);
        roomGrid.appendChild(box);
      });
    }


    function enterWaitingRoom(){
      if (state.players.length < 2) {
        showLobbyError("Add at least 2 players before entering the waiting room.");
        return;
      }
      clearLobbyError();
      setPhase(P.BRIEFING);
      guileBrief("Squad assembled. Mark everyone ready, then launch the mission.");
      lobbyPane.style.display="none";
      waitingRoomPane.style.display="block";


      for (let i=0;i<state.players.length;i++) state.ready.set(i,false);
      renderWaitingRoom();
      updateBeginEnabled();


      if (autoStartSel.value !== "on"){
        autoStartIn.textContent = "Auto-start: Off";
        if (waitingCountdownId) clearInterval(waitingCountdownId);
        waitingCountdownId = null;
        return;
      }


      let remaining = 10;
      autoStartIn.textContent = `Auto-start: ${remaining}s`;
      if (waitingCountdownId) clearInterval(waitingCountdownId);
      waitingCountdownId = setInterval(()=>{
        remaining -= 1;
        autoStartIn.textContent = `Auto-start: ${remaining}s`;
        if (remaining <= 0){
          clearInterval(waitingCountdownId);
          waitingCountdownId = null;


          const requireReady = requireReadySel.value === "on";
          if (requireReady && !allReady()){
            autoStartIn.textContent = "Auto-start blocked (not all ready)";
            return;
          }
          beginGame();
        }
      }, 1000);
    }


    function backToLobby(){
      setPhase(P.LOBBY);
      if (waitingCountdownId) clearInterval(waitingCountdownId);
      waitingCountdownId=null;
      waitingRoomPane.style.display="none";
      lobbyPane.style.display="block";
    }


    // Key handler for waiting room readiness
    document.addEventListener("keydown", (e) => {
      if (waitingRoomPane.style.display === "none") return;
      if (e.key >= "1" && e.key <= "8") {
        const idx = Number(e.key) - 1;
        toggleReadyByIndex(idx);
      }
    });


    enterWaitingRoomBtn.addEventListener("click", enterWaitingRoom);
    backToLobbyBtn.addEventListener("click", backToLobby);
    beginGameBtn.addEventListener("click", ()=>beginGame());
    requireReadySel.addEventListener("change", ()=>{ if (waitingRoomPane.style.display!=="none"){ renderWaitingRoom(); updateBeginEnabled(); } });


    // -----------------------------
    // Board
    // -----------------------------
    function getConfig(){
      const categoryCount = clamp(Number(categoryCountInput.value || 9), 3, 10);
      const qPerCat = clamp(Number(qPerCatInput.value || 10), 5, 12);
      const startValue = clamp(Number(startValueInput.value || 200), 100, 5000);
      const step = clamp(Number(valueStepInput.value || 200), 50, 5000);
      const round = Number(roundSelect.value) === 2 ? 2 : 1;
      return { categoryCount, qPerCat, startValue, step, round };
    }


    function valueForRow(row,cfg){
      const v = cfg.startValue + (row-1)*cfg.step;
      return cfg.round === 2 ? v*2 : v;
    }


    function rotatingQuestions(category,pool,count){
      let history={};try{history=JSON.parse(localStorage.getItem('mde-question-rotation-v1'))||{};}catch{}
      if(typeof history!=='object'||Array.isArray(history))history={};
      const draw=MissionCore.rotatePool(pool,Array.isArray(history[category])?history[category]:[],count);
      history[category]=draw.history;try{localStorage.setItem('mde-question-rotation-v1',JSON.stringify(history));}catch{}
      return draw.items;
    }
    function buildBoard(cfg){
      const isRound2 = cfg.round === 2;
      const bankOrder=isRound2?[seededBankRound2,seededBankRound1]:[seededBankRound1,seededBankRound2];
      const baseBank=Object.fromEntries([...new Set(bankOrder.flatMap(b=>Object.keys(b)))].map(cat=>[cat,[...new Map(bankOrder.flatMap(b=>b[cat]||[]).map(q=>[q[0],q])).values()]]));
      const eligible = Object.keys(baseBank).filter(cat => Array.isArray(baseBank[cat]) && baseBank[cat].length >= cfg.qPerCat);
      if (eligible.length < cfg.categoryCount) throw new Error(`Only ${eligible.length} MDE categories have ${cfg.qPerCat} questions; reduce categories or questions per category.`);
      const cats = randomizeBoardSel.value === "on" ? shuffle([...eligible]).slice(0,cfg.categoryCount) : eligible.slice(0,cfg.categoryCount);

      const rows = Array.from({length: cfg.qPerCat}, (_,i)=>i+1);
      const clueMap = new Map();


      for (const cat of cats){
        const pool = baseBank[cat];
        const picks = rotatingQuestions(cat,pool,cfg.qPerCat);
        for (let i=0;i<cfg.qPerCat;i++){
          const row = rows[i];
          const [text, answers] = picks[i];
          clueMap.set(keyFor(cat,row,cfg.round), {cat,row,text,answers});
        }
      }


      const ddSet = new Set();
      if (dailyDoublesSel.value === "on"){
        const ddCount = clamp(Number(dailyDoubleCountInput.value || 2), 0, cfg.categoryCount);
        const allKeys = [];
        for (const cat of cats) for (const row of rows) allKeys.push(keyFor(cat,row,cfg.round));
        const candidates = allKeys.filter(k => Number(k.split("::")[1]) >= Math.ceil(cfg.qPerCat/2));
        shuffle(candidates);
        for (let i=0;i<ddCount && i<candidates.length;i++) ddSet.add(candidates[i]);
      }


      return {
        cfg,
        categories: cats,
        rows,
        keyFor: (cat,row)=>keyFor(cat,row,cfg.round),
        clueFor: (cat,row)=>clueMap.get(keyFor(cat,row,cfg.round)),
        valueForRow: (row)=>valueForRow(row,cfg),
        dailyDoubles: ddSet,
        isDailyDouble: (key)=>ddSet.has(key),
      };
    }


    function renderBoard(){
      boardGrid.innerHTML="";
      boardGrid.style.gridTemplateColumns = `repeat(${state.board.categories.length}, minmax(150px, 1fr))`;


      state.board.categories.forEach(cat=>{
        const el=document.createElement("div");
        el.className="cat";
        el.textContent=cat;
        boardGrid.appendChild(el);
      });


      state.board.rows.forEach(row=>{
        state.board.categories.forEach(cat=>{
          const k = state.board.keyFor(cat,row);
          const used = state.used.has(k);
          const cell=document.createElement("button");
          cell.className="cell"+(used?" used":"");
          cell.textContent = `$${state.board.valueForRow(row)}`;
          cell.disabled = used;
          cell.setAttribute("aria-label",
            `${cat}, $${state.board.valueForRow(row)}${used ? " (used)" : ""}`);
          if (!used) cell.addEventListener("click", ()=>openClue(cat,row));
          boardGrid.appendChild(cell);
        });
      });


      const total = state.board.categories.length * state.board.rows.length;
      remainingCount.textContent = `${total - state.used.size}/${total}`;
      const progress=$("missionProgress"); if(progress){progress.max=total;progress.value=state.used.size;}
      const ddRemaining = [...state.board.dailyDoubles].filter(k=>!state.used.has(k)).length;
      ddLeft.textContent = String(ddRemaining);
    }


    function rankPlayers(players){
      const sorted=players.map((player,index)=>({player,index})).sort((a,b)=>b.player.score-a.player.score);
      let rank=0; return sorted.map((item,i)=>{if(i===0||item.player.score!==sorted[i-1].player.score) rank=i+1; return {...item,rank};});
    }
    let guileReactionTimer;
    function guileBrief(message,reaction="idle"){
      const host=$("guileHost"); if(!host)return;
      clearTimeout(guileReactionTimer); host.dataset.reaction="idle";
      void host.offsetWidth; host.dataset.reaction=reaction;
      $("guileMessage").textContent=message;
      if(reaction==="wrong"){const portrait=host.querySelector("img");portrait.classList.remove("guile-wrong");void portrait.offsetWidth;portrait.classList.add("guile-wrong");setTimeout(()=>portrait.classList.remove("guile-wrong"),600);}
      guileReactionTimer=setTimeout(()=>{host.dataset.reaction="idle";},1800);
    }
    function renderScoreboard(){
      scoreList.innerHTML = rankPlayers(state.players).map(({player:p,index,rank}) => `<div class="rank-row ${index===state.controlIdx?'active':''}"><span class="rank-number">${rank}</span><span class="rank-name">${escapeHtml(p.name)}${index===state.controlIdx?'<small>IN COMMAND</small>':''}</span><span class="rank-score">$${p.score.toLocaleString()}</span></div>`).join("");
      controlName.textContent = state.players[state.controlIdx]?.name ?? "—";
      roundLabel.textContent = String(state.round);
      if(engineReady){$("scorePlayer").innerHTML=state.players.map((p,i)=>`<option value="${i}">${escapeHtml(p.name)}</option>`).join("");checkpoint();sendSnapshot();}
    }


    // -----------------------------
    // Game start
    // -----------------------------
    function beginGame(){
      gameId=MissionCore.id();questionId=null;reviewHistory.length=0;attempted.clear();
      setPhase(P.BOARD);
      if (waitingCountdownId) clearInterval(waitingCountdownId);
      waitingCountdownId = null;


      audioInit(); setAudioFromUI();


      const cfg = getConfig();
      state.round = cfg.round;
      state.controlIdx = 0;
      state.used = new Set();
      state.activeKey = null;
      state.ddLockedWager = null;
      state.final = { step:"off", idx:0, wagers:new Map(), answers:new Map(), timerId:null, timerRemaining:0 };
      finalJeopardy = rotatingQuestions('__final__',finalJeopardyBank,1)[0];


      state.players.forEach(p=>p.score=0);


      try { state.board = buildBoard(cfg); }
      catch (e){
        showWaitingError(e.message);
        waitingRoomPane.style.display="block";
        scoreBoard.style.display="none";
        boardPane.style.display="none";
        return;
      }
      clearWaitingError();


      waitingRoomPane.style.display="none";
      scoreBoard.style.display="block";
      boardPane.style.display="block";
      qaPane.style.display="none";
      finalPane.style.display="none";
      summaryPane.style.display="none";


      renderScoreboard();
      renderBoard();
      startGameClock();
      setTimeout(broadcastBoardState,150);
    }

    function formatClock(seconds){
      const m=Math.floor(Math.max(0,seconds)/60);
      const s=Math.max(0,seconds)%60;
      return `${m}:${String(s).padStart(2,"0")}`;
    }
    function stopGameClock(){
      if(state.gameClock.id) clearInterval(state.gameClock.id);
      state.gameClock.id=null;
    }
    function startGameClock(seconds=900){
      stopGameClock();state.gameClock.remaining=seconds;state.gameClock.paused=false;gameDeadline=Date.now()+seconds*1000;
      state.gameClock.id=setInterval(()=>{if(state.gameClock.paused)return;state.gameClock.remaining=MissionCore.remaining(gameDeadline);gameClockEl.textContent=formatClock(state.gameClock.remaining);if(state.gameClock.remaining<=0){stopGameClock();startFinalJeopardy();}},250);
    }


    // -----------------------------
    // Q/A logic
    // -----------------------------
    function openClue(cat,row){
      if(phase!==P.BOARD || !state.board || state.used.has(state.board.keyFor(cat,row)))return;
      questionId=MissionCore.id();attempted.clear();
      guileBrief("Read the objective carefully. The player in command answers first.");
      const key = state.board.keyFor(cat,row);
      const clue = state.board.clueFor(cat,row);
      if (!clue) {
        feedback.textContent = "Missing clue for this board configuration.";
        return;
      }


      state.activeKey = key;
      state.clueAttempts = 0;
      state.clueStartIdx = state.controlIdx;
      sfxQuestionOpen();
      state.ddLockedWager = null;


      const isDD = state.board.isDailyDouble(key) && !state.used.has(key);
      ddBadge.style.display = isDD ? "inline-block" : "none";
      ddWagerRow.style.display = isDD ? "block" : "none";


      feedback.textContent="";
      answerInput.value="";


      boardPane.style.display="none";
      qaPane.style.display="block";
      qaHeader.textContent = `${state.players[state.controlIdx].name}'s Question`;


      clueValueEl.textContent = `$${state.board.valueForRow(row)}`;
      clueCatEl.textContent = cat;
      questionText.textContent = clue.text;


      if (isDD){
        answerInput.disabled = true;
        submitBtn.disabled = true;
        passBtn.disabled = true;
        ddWagerInput.type="password";
        ddWagerInput.value="";
        ddWagerInput.focus();
        startTimer(Number(qSecondsInput.value || 30), "dd-wager");
      } else {
        answerInput.disabled = false;
        submitBtn.disabled = false;
        passBtn.disabled = false;
        answerInput.focus();
        startTimer(Number(qSecondsInput.value || 30), "main");
        startQuestionBeat();
      }
    }


    function markUsed(){ if (state.activeKey) state.used.add(state.activeKey); }


    function closeClue(){
      questionId=null;setPhase(P.BOARD);
      stopQuestionBeat();
      stopTimer();
      qaPane.style.display="none";
      boardPane.style.display="block";
      state.activeKey=null;
      state.ddLockedWager=null;
      state.clueAttempts=0;
      renderScoreboard();
      renderBoard();
      broadcastBoardState();


      const total = state.board.categories.length * state.board.rows.length;
      if (state.used.size >= total) startFinalJeopardy();
    }


    ddWagerSubmitBtn.addEventListener("click", ()=>{
      if (!state.activeKey) return;
      if (!state.board.isDailyDouble(state.activeKey)) return;


      const wager = parseWholeNumber(ddWagerInput.value);
      if (wager === null) { showDdWagerError("Wager must be a whole number."); return; }


      const current = state.players[state.controlIdx].score;
      const minFloor = state.board.valueForRow(state.board.rows[0]);
      const max = Math.max(minFloor, current);
      if (wager < 0) { showDdWagerError("Wager cannot be negative."); return; }
      if (wager > max) { showDdWagerError(`Wager cannot exceed $${max}.`); return; }


      clearDdWagerError();
      state.ddLockedWager = wager;


      flash("rgba(247,201,72,0.18)", 180, 0.95);
      answerInput.disabled=false;
      submitBtn.disabled=false;
      passBtn.disabled=false;
      ddWagerRow.style.display="none";
      ddBadge.style.display="inline-block";
      answerInput.focus();
      startTimer(Number(qSecondsInput.value || 30), "main");
      startQuestionBeat();
    });


    function startTimer(seconds,mode,onExpire){
      stopTimer();state.timer.remaining=Math.max(1,Number(seconds)||30);state.timer.mode=mode;state.timer.paused=false;deadline=Date.now()+state.timer.remaining*1000;
      buzzerActive=['main','steal','steal-answer'].includes(mode);firstBuzzer=null;
      setPhase(mode==='dd-wager'?P.WAGER:mode==='steal'?P.STEAL:mode==='steal-answer'?P.STEAL_ANSWER:P.ANSWER);
      const canInput=phase!==P.STEAL&&phase!==P.WAGER;answerInput.disabled=!canInput;submitBtn.disabled=!canInput;passBtn.disabled=!canInput;
      timerEl.textContent=state.timer.remaining+'s';let lastStealTick=-1;if(mode==='steal-answer')startQuestionBeat();
      state.timer.id=setInterval(()=>{if(state.timer.paused)return;state.timer.remaining=MissionCore.remaining(deadline);timerEl.textContent=state.timer.remaining+'s';timerEl.classList.toggle('timer-critical',state.timer.remaining<=10);if(mode==='steal'&&state.timer.remaining>0&&lastStealTick!==state.timer.remaining){lastStealTick=state.timer.remaining;if(soundModeSel.value!=='off'){stealTick.volume=audio.volume;stealTick.currentTime=0;stealTick.play().catch(()=>{});}}if(mode!=='steal'&&state.timer.remaining<=10&&!state.timer.warned){state.timer.warned=true;startPressure();guileBrief('Ten seconds. Stay focused.');}if(state.timer.remaining>0)return;const expiredMode=state.timer.mode;stopTimer();if(typeof onExpire==='function')return onExpire();if(expiredMode==='dd-wager'){markUsed();closeClue();return;}const [cat,row]=state.activeKey.split('::');const clue=state.board.clueFor(cat,Number(row));sfxTimesUp();if(expiredMode==='steal'){showDebrief(clue,false);return;}continueAfterMiss(clue,'Time expired.');},250);
      state.timer.warned=false;updateQuestionPauseButton();sendSnapshot();
    }
    function stopTimer(){
      stopPressure();stealTick.pause();stealTick.currentTime=0;
      deadline=0;buzzerActive=false;firstBuzzer=null;
      if (state.timer.id) clearInterval(state.timer.id);
      state.timer.id=null;
      state.timer.paused=false;
      timerEl.textContent="—";
      timerEl.classList.remove("timer-critical");
      updateQuestionPauseButton();
    }

    function updateQuestionPauseButton(){
      const active = Boolean(state.timer.id);
      pauseQuestionTimerBtn.disabled = !active;
      pauseQuestionTimerBtn.textContent = state.timer.paused ? "▶ Resume Timer" : "⏸ Pause Timer";
      pauseQuestionTimerBtn.setAttribute("aria-pressed", String(active && state.timer.paused));
    }

    function toggleQuestionTimerPause(){
      if (!state.timer.id) return;
      state.timer.paused = !state.timer.paused;
      if(!state.timer.paused)deadline=Date.now()+state.timer.remaining*1000;
      checkpoint();sendSnapshot();
      if (state.timer.paused) {pauseQuestionBeat();stopPressure();stealTick.pause();} else {if (state.timer.mode === "main") resumeQuestionBeat();if(state.timer.warned)startPressure();}
      timerEl.textContent = state.timer.paused
        ? `${state.timer.remaining}s (paused)`
        : `${state.timer.remaining}s`;
      updateQuestionPauseButton();
      if (state.timer.paused) answerInput.focus();
    }

    pauseQuestionTimerBtn.addEventListener("click", toggleQuestionTimerPause);


    function revealAnswerAndClose(clue){showDebrief(clue,false);}
    function continueAfterMiss(clue,message){
      stopTimer();attempted.add(playerId(state.controlIdx));state.clueAttempts=attempted.size;
      if(state.board.isDailyDouble(state.activeKey)||attempted.size>=state.players.length){showDebrief(clue,false);return;}
      guileBrief('Steal window open. Eligible squad members: buzz now.','steal');qaHeader.textContent='Steal window — first eligible buzz wins';feedback.textContent=message+' Buzz to claim the next attempt.';answerInput.value='';startTimer(Number(stealSecondsInput.value)||10,'steal');renderScoreboard();sendSnapshot();
    }
    function handleSubmit(){
      if (!state.activeKey || ![P.ANSWER,P.STEAL_ANSWER].includes(phase)) return;
      if(state.timer.paused){feedback.textContent="Resume the timer before submitting.";return;}
      if(!answerInput.value.trim()){feedback.textContent="Type a short answer, then press Enter or Submit.";answerInput.focus();return;}
      rememberRuling();
      stopQuestionBeat();
      const [cat,rowStr] = state.activeKey.split("::");
      const row = Number(rowStr);
      const clue = state.board.clueFor(cat,row);


      const isDD = state.board.isDailyDouble(state.activeKey);
      const value = isDD ? (state.ddLockedWager ?? 0) : state.board.valueForRow(row);
      if (isDD && state.ddLockedWager === null) {
        showDdWagerError("Daily Double: lock your wager first.");
        return;
      }


      const correct = isCorrectAnswer(answerInput.value, clue.answers);
      logAction("answer-ruling",{player:state.players[state.controlIdx].name,correct,category:cat,answer:answerInput.value});


      if (correct){
        guileBrief(state.clueAttempts>0?"Sonic boom! Successful steal. You have command.":"Mission accomplished. Solid work, soldier.","correct");
        sfxCorrect();
        if (state.clueAttempts > 0) {
          playBoomSound();
          feedback.textContent="STEAL! Correct!";
        } else {
          playMoneySound();
          feedback.textContent="Correct!";
        }
        markUsed();
        state.players[state.controlIdx].score += value;
        renderScoreboard();showDebrief(clue,true);
        return;
      }


      guileBrief("Negative. Regroup and try the next objective.","wrong");
      sfxWrong();
      if (state.clueAttempts > 0) {
        playStealSound();
      } else {
        playRizzSound();
      }
      continueAfterMiss(clue,"Wrong.");
    }


    function handlePass(){
      if (!state.activeKey || ![P.ANSWER,P.STEAL_ANSWER].includes(phase)) return;
      rememberRuling();
      stopQuestionBeat();
      const [cat,rowStr] = state.activeKey.split("::");
      const row = Number(rowStr);
      const clue = state.board.clueFor(cat,row);


      sfxTimesUp();
      continueAfterMiss(clue,"Passed.");
    }


    submitBtn.addEventListener("click", handleSubmit);
    passBtn.addEventListener("click", handlePass);
    answerInput.addEventListener("keydown", (e)=>{ if (e.key === "Enter") handleSubmit(); });


    // -----------------------------
    // Final Jeopardy
    // -----------------------------
    function stopFinalTimer(){
      if (state.final.timerId) clearInterval(state.final.timerId);
      stopFinalBeat();
      stopMusic();
      state.final.timerId=null;
      state.final.timerRemaining=0;
      finalTimerEl.textContent="—";
      finalDeadline=0;
    }


    function startFinalTimer(seconds=120){
      if(state.final.step!=='answers')return;stopFinalTimer();state.final.paused=false;state.final.timerRemaining=seconds;finalDeadline=Date.now()+seconds*1000;startFinalBeat();
      state.final.timerId=setInterval(()=>{if(state.final.paused)return;state.final.timerRemaining=MissionCore.remaining(finalDeadline);finalTimerEl.textContent=state.final.timerRemaining+'s';if(!state.final.timerRemaining){stopFinalTimer();state.players.forEach((_,i)=>{if(!state.final.answers.has(i))state.final.answers.set(i,'');});state.final.step='reveal';setPhase(P.FINAL_REVEAL);renderFinalUI();}},250);sendSnapshot();
    }
    finalStartTimerBtn.addEventListener('click',()=>{if(state.final.step!=='answers')return;state.final.paused=!state.final.paused;if(!state.final.paused)finalDeadline=Date.now()+state.final.timerRemaining*1000;finalStartTimerBtn.textContent=state.final.paused?'Resume final timer':'Pause final timer';sendSnapshot();});
    finalStopTimerBtn.addEventListener("click", ()=>{if(state.final.step!=="answers")return;state.final.paused=true;finalStartTimerBtn.textContent="Resume final timer";sendSnapshot();});


    function startFinalJeopardy(){
      if(state.final.step!=="off") return;
      clearTimeout(debriefTimeout);$("correctAnswerOverlay").classList.remove("show");stopQuestionBeat();
      stopGameClock();
      stopTimer();
      stopFinalTimer();


      guileBrief("Final objective. Lock your secret wager, then prepare for the two-minute challenge.");
      state.final.step="wagers";setPhase(P.FINAL_WAGER);
      state.final.idx=0;
      state.final.wagers=new Map();
      state.final.answers=new Map();


      scoreBoard.style.display="block";
      boardPane.style.display="none";
      qaPane.style.display="none";
      summaryPane.style.display="none";
      finalPane.style.display="block";


      finalCategoryEl.textContent = finalJeopardy.category;
      finalClueTextEl.textContent = "Lock wagers to reveal the final objective.";
      finalRevealBtn.disabled = true;


      renderScoreboard();
      renderFinalUI();
      broadcastToBuzzers({type:"final-wager",category:finalJeopardy.category,scores:Object.fromEntries(state.players.map(p=>[p.name,p.score]))});
      sendSnapshot();
    }


    function renderFinalUI(){
      finalStepEl.textContent = state.final.step;
      const pending=state.players.findIndex((_,i)=>state.final.step==='wagers'?!state.final.wagers.has(i):!state.final.answers.has(i));
      if(pending>=0)state.final.idx=pending;
      const player = state.players[state.final.idx];
      finalClueTextEl.textContent=state.final.step==='wagers'?'Wagers remain secret. The final clue appears after all wagers are locked.':finalJeopardy.text;
      finalStartTimerBtn.disabled=state.final.step!=='answers';finalStopTimerBtn.disabled=state.final.step!=='answers';

      finalPlayerEl.textContent = player ? player.name : "—";


      if (state.final.step === "wagers"){
        const minFloor = state.board.valueForRow(state.board.rows[0]);
        const max = MissionCore.finalLimit(player.score);
        finalPromptEl.textContent = `Enter wager for ${player.name}. Max: $${max} (min $0).`;
        finalInput.type="password";
        finalInput.value="";
        finalInput.placeholder="Secret wager (whole number)";
        finalSubmitBtn.disabled=false;
        return;
      }
      if (state.final.step === "answers"){
        finalPromptEl.textContent = `Enter final answer for ${player.name}. (Secret)`;
        finalInput.type="password";
        finalInput.value="";
        finalInput.placeholder="Secret final answer";
        finalSubmitBtn.disabled=false;
        return;
      }
      if (state.final.step === "reveal"){
        finalPromptEl.textContent = "All wagers and answers collected. Ready to reveal.";
        finalInput.value="";
        finalSubmitBtn.disabled=true;
        finalRevealBtn.disabled=false;
      }
    }


    function finalSubmit(){
      const idx = state.final.idx;
      const player = state.players[idx];
      if (!player) return;


      if (state.final.step === "wagers"){
        const wager = parseWholeNumber(finalInput.value);
        if (wager === null) { showFinalError("Wager must be a whole number."); return; }
        if (wager < 0) { showFinalError("Wager cannot be negative."); return; }
        const minFloor = state.board.valueForRow(state.board.rows[0]);
        const max = MissionCore.finalLimit(player.score);
        if (wager > max) { showFinalError(`Wager cannot exceed $${max}.`); return; }
        clearFinalError();
        if(state.final.wagers.has(idx))return;
        state.final.wagers.set(idx, wager);


        advanceFinal();
        flash("rgba(247,201,72,0.15)", 160, 0.95);
        renderFinalUI();
        return;
      }


      if (state.final.step === "answers"){
        const ans = String(finalInput.value || "").trim();
        if (!ans){
          // Show inline prompt instead of confirm() dialog
          const confirmEl = $("finalError");
          if (!confirmEl.dataset.pendingBlank){
            confirmEl.dataset.pendingBlank = "1";
            showFinalError("Answer is blank — it will count as incorrect. Submit again to confirm.");
            return;
          }
          delete confirmEl.dataset.pendingBlank;
        }
        clearFinalError();
        if(state.final.answers.has(idx))return;
        state.final.answers.set(idx, ans);
        advanceFinal();
        flash("rgba(247,201,72,0.15)", 160, 0.95);
        renderFinalUI();
      }
    }


    function revealFinalResults(){
      if(state.final.step==="complete" || !state.players.length) return;
      state.final.step="complete";setPhase(P.RESULTS);
      stopFinalTimer();
      broadcastToBuzzers({type:"final-results",accepted:finalJeopardy.answers[0]});


      const lines = [];
      lines.push(`<strong>Final Jeopardy Category:</strong> ${escapeHtml(finalJeopardy.category)}`);
      lines.push(`<strong>Final Jeopardy Clue:</strong> ${escapeHtml(finalJeopardy.text)}`);
      lines.push(`<hr/>`);
      lines.push(`<strong>Accepted answer example:</strong> ${escapeHtml(finalJeopardy.answers[0])}`);


      for (let i=0;i<state.players.length;i++){
        const p = state.players[i];
        const wager = state.final.wagers.get(i) ?? 0;
        const ans = state.final.answers.get(i) ?? "";
        const correct = isCorrectAnswer(ans, finalJeopardy.answers);


        if (correct){ p.score += wager; }
        else { p.score -= wager; }


        lines.push(
          `${escapeHtml(p.name)} wagered <strong>$${wager}</strong> and answered ` +
          `<strong>${escapeHtml(ans || "(blank)")}</strong> — ` +
          `${correct ? "<strong>Correct</strong>" : "<strong>Wrong</strong>"}`
        );
      }


      finalPane.style.display="none";
      scoreBoard.style.display="none";
      summaryPane.style.display="block";


      sfxCorrect();playMoneySound();renderTrainingReview();checkpoint();sendSnapshot();
      const ranked=rankPlayers(state.players);
      const winners=ranked.filter(p=>p.rank===1);
      guileBrief("Mission complete. Outstanding work, "+(winners.length>3?"the "+winners.length+" joint champions":winners.map(p=>p.player.name).join(" and "))+".","correct");
      $("summaryText").innerHTML =
        `<div class="mission-kicker">MISSION DEBRIEF / FINAL RESULTS</div><div class="mission-winners">${winners.length>1?'Joint champions':'Mission champion'}: ${winners.length>3?winners.length+' squad members':winners.map(p=>escapeHtml(p.player.name)).join(' &amp; ')}</div>`+
        `<div class="final-ranks">${ranked.map(({player:p,rank})=>`<div class="rank-row"><span class="rank-number">${rank}</span><span class="rank-name">${escapeHtml(p.name)}</span><span class="rank-score">$${p.score.toLocaleString()}</span></div>`).join('')}</div>`+
        `<details><summary>Review answers and wagers</summary><div class="mono tiny">${lines.join('<br/>')}</div></details>`;

    }


    finalSubmitBtn.addEventListener("click", finalSubmit);
    finalInput.addEventListener("keydown", (e)=>{ if (e.key === "Enter") finalSubmit(); });
    finalRevealBtn.addEventListener("click", revealFinalResults);


    // -----------------------------
    // Reset (functional, works from any pane)
    // -----------------------------
    function resetGame(){
      clearTimeout(debriefTimeout);$("correctAnswerOverlay").classList.remove("show");
      gameId=MissionCore.id();questionId=null;attempted.clear();reviewHistory.length=0;undoHistory.length=0;phase=P.LOBBY;
      // stop timers
      stopTimer();
      stopGameClock();
      stopFinalTimer();
      setPrivacy(false);


      // reset core game state but keep players list (common expectation)
      state.used = new Set();
      state.activeKey = null;
      state.clueAttempts = 0;
      state.clueStartIdx = 0;
      state.gameClock = { id:null, remaining:900 };
      gameClockEl.textContent="15:00";
      state.ddLockedWager = null;
      state.controlIdx = 0;


      state.final = { step:"off", idx:0, wagers:new Map(), answers:new Map(), timerId:null, timerRemaining:0 };


      // reset scores
      state.players.forEach(p => p.score = 0);
      document.body.classList.remove("mission-playing");


      // show lobby
      summaryPane.style.display="none";
      scoreBoard.style.display="none";
      boardPane.style.display="none";
      qaPane.style.display="none";
      finalPane.style.display="none";
      waitingRoomPane.style.display="none";
      lobbyPane.style.display="block";
      setPhase(P.LOBBY);
      $("buzzerPanel").style.display="none";


      renderLobbyList();checkpoint();sendSnapshot();
    }


    resetBtn.addEventListener("click", resetGame);
    resetBtnTop.addEventListener("click", resetGame);
    resetBtnWaiting.addEventListener("click", resetGame);
    resetBtnFinal.addEventListener("click", resetGame);


    // -----------------------------------------------
    // Virtual Buzzer — BroadcastChannel + localStorage
    // -----------------------------------------------
    const BUZZER_CHANNEL   = "trivia-buzzer-channel";
    const BUZZER_KEY_OUT   = "trivia-buzzer-state-to-buzzer";
    const BUZZER_KEY_IN    = "trivia-buzzer-state-to-host";

    const buzzerPanelEl    = $("buzzerPanel");
    const buzzerLinkEl     = $("buzzerLink");
    const buzzerRoomEl     = $("buzzerRoom");
    const buzzStatusEl     = $("buzzStatus");
    const buzzerLogEl      = $("buzzerLog");
    const buzzFlashOverlay = $("buzzFlashOverlay");
    const buzzFlashLabel   = $("buzzFlashLabel");
    const closeBuzzerBtn   = $("closeBuzzerPanelBtn");
    const showBuzzerPanelBtn = $("showBuzzerPanelBtn");
    const buzzerLinkBtn    = $("buzzerLinkBtn");

    let bc = null;
    const realtimeConfig = window.JEOPARDY_CONFIG || {};
    const realtimeEnabled = !!(realtimeConfig.supabaseUrl && realtimeConfig.supabaseAnonKey && window.supabase);
    const roomParam = new URLSearchParams(location.search).get("room");
    const roomCode = (roomParam || sessionStorage.getItem("jeopardy-room") || MissionCore.id().replace(/-/g,"").slice(0,8)).toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8) || "GAME01";
    sessionStorage.setItem("jeopardy-room", roomCode);
    bc=typeof BroadcastChannel!=="undefined"?new BroadcastChannel(BUZZER_CHANNEL+"-"+roomCode):null;
    let realtimeChannel = null;
    let realtimeReady = false;
    let outboundQueue = [];

    function flushRealtimeQueue(){
      if(!realtimeReady || !realtimeChannel) return;
      const pending = outboundQueue.splice(0);
      pending.forEach(msg => realtimeChannel.send({type:"broadcast",event:"message",payload:msg}));
    }

    function sendRealtime(msg){
      if(!realtimeEnabled || !realtimeChannel) return false;
      if(!realtimeReady){ outboundQueue.push(msg);if(outboundQueue.length>100)outboundQueue.shift(); return true; }
      realtimeChannel.send({type:"broadcast",event:"message",payload:msg});
      return true;
    }

    if(realtimeEnabled){
      const client = window.supabase.createClient(realtimeConfig.supabaseUrl, realtimeConfig.supabaseAnonKey);
      realtimeChannel = client.channel(`jeopardy-${roomCode}`, {config:{broadcast:{self:false}}});
      realtimeChannel.on("broadcast", {event:"message"}, ({payload}) => receivePlayer(payload));
      realtimeChannel.subscribe(status => {
        realtimeReady=status==="SUBSCRIBED";
        updateMissionHUD();
        if(status === "SUBSCRIBED"){
          realtimeReady = true;
          flushRealtimeQueue();
          buzzStatusEl.textContent = `🌐 Online room ${roomCode} ready`;
        }
      });
    }


    // Track buzz-in state
    let buzzerActive   = false;   // true while a question is open
    let firstBuzzer    = null;    // name of the first buzzer this question
    let connectedBuzzers = new Set();


    // ---------- buzz flash popup ----------
    function triggerBuzzFlash(playerName) {
      buzzFlashLabel.textContent = `🔔 ${playerName} BUZZED!`;
      buzzFlashOverlay.style.background = "rgba(247,201,72,0.55)";
      buzzFlashOverlay.style.opacity    = "1";
      buzzFlashLabel.style.opacity      = "1";
      buzzFlashLabel.style.transform    = "scale(1.05)";
      setTimeout(() => {
        buzzFlashOverlay.style.opacity  = "0";
        buzzFlashLabel.style.opacity    = "0";
        buzzFlashLabel.style.transform  = "scale(.4)";
        setTimeout(() => { buzzFlashOverlay.style.background = "rgba(247,201,72,0)"; }, 200);
      }, 1800);
    }


    // ---------- send to buzzer pages ----------
    function broadcastToBuzzers(msg) {
      msg={...msg,room:roomCode,host:true,serverNow:Date.now()};
      if (sendRealtime(msg)) return;
      if (bc) bc.postMessage(msg);
      try { localStorage.setItem(BUZZER_KEY_OUT+"-"+roomCode, JSON.stringify({ ...msg, _ts: Date.now() })); } catch(_) {}
    }


    // ---------- log entry ----------
    function addBuzzerLog(text) {
      const first = buzzerLogEl.querySelector("em");
      if (first) first.remove();
      const entry = document.createElement("div");
      entry.className = "bz-entry";
      entry.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
      buzzerLogEl.prepend(entry);
      // keep log bounded
      while (buzzerLogEl.children.length > 30) buzzerLogEl.removeChild(buzzerLogEl.lastChild);
    }


    // ---------- mobile board / control sync ----------
    function mobileBoardState(){
      if(!state.board) return null;
      return {
        type:"board-state",
        controller: state.players[state.controlIdx]?.name || "—",
        categories: state.board.categories,
        rows: state.board.rows.map(row => ({row, value: state.board.valueForRow(row)})),
        used: [...state.used],
        boardVisible: phase===P.BOARD
      };
    }
    function broadcastBoardState(){
      const msg=mobileBoardState();
      if(msg) broadcastToBuzzers(msg);
      if(engineReady){checkpoint();sendSnapshot();}
    }
    function sameName(a,b){ return String(a||"").trim().toLowerCase()===String(b||"").trim().toLowerCase(); }

    // ---------- handle message from buzzer pages ----------
    function handleBuzzerMessage(data) {
      if (!data || !data.type) return;


      if (data.type === "join") {
        const registration = registerBuzzerPlayer(data.player);
        if (!registration.ok) {
          broadcastToBuzzers({ type:"join-ack", player:data.player, registered:false });
          return;
        }
        connectedBuzzers.add(registration.player);
        broadcastToBuzzers({
          type:"join-ack",
          player:data.player,
          registered:true,
          canonicalPlayer:registration.player,
          added:registration.added,
          targetId:data.clientId,playerId:data.playerId,gameId
        });
        addBuzzerLog(`${registration.player} ${registration.added ? "was added to the game and connected" : "connected"}`);
        if (registration.added) playJoinSound();
        buzzStatusEl.textContent = `📱 ${registration.player} connected and ready`;
        broadcastBoardState();
        if(state.final.step === "wagers") broadcastToBuzzers({type:"final-wager", category:finalJeopardy.category, scores:Object.fromEntries(state.players.map(p=>[p.name,p.score]))});
        if(state.final.step === "answers") broadcastToBuzzers({type:"final-answer", category:finalJeopardy.category, clue:finalJeopardy.text});
      }


      if (data.type === "leave") {
        connectedBuzzers.delete(data.player);playerSessions.delete(data.clientId);presence.delete(data.playerId);
        addBuzzerLog(`${data.player} left`);
      }

      if (data.type === "select-clue") {
        const controller=state.players[state.controlIdx]?.name;
        if(!controller || !sameName(data.player,controller) || boardPane.style.display === "none" || state.activeKey){
          broadcastToBuzzers({type:"selection-denied",player:data.player,reason:"It is not your turn to select."});
          return;
        }
        const cat=String(data.category||"");
        const row=Number(data.row);
        if(!state.board.categories.includes(cat) || !state.board.rows.includes(row) || state.used.has(state.board.keyFor(cat,row))){
          broadcastToBuzzers({type:"selection-denied",player:data.player,reason:"That clue is no longer available."});
          broadcastBoardState();
          return;
        }
        addBuzzerLog(`${data.player} selected ${cat} for $${state.board.valueForRow(row)}`);
        openClue(cat,row);
        return;
      }

      if (data.type === "final-wager-submit") {
        const idx=state.players.findIndex(p=>sameName(p.name,data.player));
        if(state.final.step!=="wagers" || idx<0) return;
        const wager=parseWholeNumber(data.wager);
        const max=MissionCore.finalLimit(state.players[idx].score);
        if(state.final.wagers.has(idx))return;
        if(wager===null || wager<0 || wager>max){
          broadcastToBuzzers({type:"final-error",player:data.player,message:`Wager must be $0 to $${max}.`}); return;
        }
        state.final.wagers.set(idx,wager);
        broadcastToBuzzers({type:"final-wager-ack",player:data.player});
        advanceFinal();
        return;
      }

      if (data.type === "final-answer-submit") {
        const idx=state.players.findIndex(p=>sameName(p.name,data.player));
        if(state.final.step!=="answers" || idx<0 || state.final.answers.has(idx)) return;
        state.final.answers.set(idx,String(data.answer||"").trim());
        broadcastToBuzzers({type:"final-answer-ack",player:data.player});
        advanceFinal();
        return;
      }

      if (data.type === "answer") {
        const samePlayer=MissionCore.canAnswer(phase,playerId(state.controlIdx),data.playerId,state.timer.paused);
        const submitted = String(data.answer||"").trim();
        if (!buzzerActive || !samePlayer || !submitted) {
          broadcastToBuzzers({type:"answer-denied",player:data.player});
          return;
        }
        answerInput.value=submitted;
        addBuzzerLog(`${data.player} submitted an answer`);
        broadcastToBuzzers({type:"answer-received",player:data.player});
        handleSubmit();
        return;
      }


      if (data.type === 'buzz') {
        if(!MissionCore.canBuzz(phase,[...attempted],data.playerId,state.timer.paused)){broadcastToBuzzers({type:'buzz-denied',player:data.player});return;}
        const index=state.players.findIndex(p=>p.id===data.playerId);if(index<0)return;state.controlIdx=index;firstBuzzer=data.player;buzzerActive=true;qaHeader.textContent=data.player+' — steal attempt';startTimer(Number(stealSecondsInput.value)||10,'steal-answer');firstBuzzer=data.player;
        broadcastToBuzzers({type:'buzz-ack',player:data.player});logAction('buzz-accepted',{player:data.player,at:Date.now()});addBuzzerLog(data.player+' won the steal window');renderScoreboard();guileBrief('Steal claimed. Make it count.','steal');triggerBuzzFlash(data.player);playBuzzSound();sendSnapshot();
      }

    }


    if (!realtimeEnabled && bc) {
      bc.addEventListener("message", (e) => receivePlayer(e.data));
    }
    window.addEventListener("storage", (e) => {
      if(realtimeEnabled) return;
      if (e.key === BUZZER_KEY_IN+"-"+roomCode) {
        try { receivePlayer(JSON.parse(e.newValue)); } catch(_) {}
      }
    });


    // ---------- QR code generator ----------
    function renderQrCode(url){const target=$('buzzerQr');try{const qr=qrcode(0,'M');qr.addData(url,'Byte');qr.make();const div=document.createElement('div');div.id='buzzerQr';div.innerHTML=qr.createSvgTag(8,4);div.setAttribute('aria-label','Scan to join '+roomCode);div.style.cssText='background:white;padding:12px;width:260px;max-width:100%;margin:16px auto';target.replaceWith(div);const svg=div.querySelector('svg');svg.style.cssText='display:block;width:100%;height:auto';return true;}catch(e){buzzStatusEl.textContent='QR unavailable. Use the join link or room code below.';return false;}}



    // ---------- open buzzer panel ----------
    function openBuzzerPanel() {
      const buzzerUrl = new URL("buzzer.html", window.location.href);
      buzzerUrl.searchParams.set("room", roomCode);
      buzzerPanelEl.style.display = "block";
      buzzerRoomEl.textContent = `Room: ${roomCode}`;
      buzzerLinkEl.innerHTML = `<a href="${escapeHtml(buzzerUrl.href)}" target="_blank" rel="noopener">${escapeHtml(buzzerUrl.href)}</a>`;
      renderQrCode(buzzerUrl.href);
      if(!realtimeEnabled){
        buzzStatusEl.textContent = "⚠️ Online relay not configured. Add your Supabase URL and publishable/anon key to config.js.";
      } else if(!realtimeReady){
        buzzStatusEl.textContent = `Connecting online room ${roomCode}…`;
      }
    }


    if (showBuzzerPanelBtn) showBuzzerPanelBtn.addEventListener("click", openBuzzerPanel);
    if (buzzerLinkBtn)      buzzerLinkBtn.addEventListener("click", openBuzzerPanel);
    const lobbyBuzzerLinkBtn = $("lobbyBuzzerLinkBtn");
    if (lobbyBuzzerLinkBtn) lobbyBuzzerLinkBtn.addEventListener("click", openBuzzerPanel);
    if (closeBuzzerBtn)     closeBuzzerBtn.addEventListener("click", () => { buzzerPanelEl.style.display = "none"; });


    // Host-authoritative mission phases, snapshots and recovery.
    const P=MissionCore.PHASES;
    let engineReady=false,revision=0,gameId=MissionCore.id(),questionId=null;
    let phase=P.LOBBY,attempted=new Set(),deadline=0,gameDeadline=0,finalDeadline=0;
    const messageLedger=new MissionCore.Ledger(),playerSessions=new Map(),presence=new Map(),messageRates=new Map();
    const audit=[],reviewHistory=[],undoHistory=[];
    let debriefTimeout=null;
    function playerId(index){const p=state.players[index];if(p&&!p.id)p.id=MissionCore.id();return p?.id;}
    function setPhase(next){if(!Object.values(P).includes(next))throw Error('Unknown mission phase');phase=next;document.body.classList.toggle('mission-playing',![P.LOBBY,P.BRIEFING].includes(next));renderPhasePage(next);revision++;if(engineReady){updateMissionHUD();checkpoint();sendSnapshot();}}
    const phasePages={
      'landing':['Landing','Enter the lobby to assemble your squad.'],
      'lobby':['Mission lobby','Add players or share the QR link, then enter the readiness briefing.'],
      'briefing':['Readiness briefing','Confirm the squad is ready before launching the mission.'],
      'selection':['Game board','The player in command selects the next objective.'],
      'daily-double-wager':['Daily Double wager','Lock a wager before the answer clock begins.'],
      'answering':['Answer the objective','The player in command answers first.'],
      'steal-open':['Steal window','Eligible squad members may buzz. The first accepted buzz wins.'],
      'steal-answering':['Steal attempt','The player who claimed the steal now answers.'],
      'debrief':['Answer review','Review the accepted answer before returning to the board.'],
      'final-wager':['Final: secret wagers','Lock all wagers before revealing the final objective.'],
      'final-answer':['Final: answer','Submit the final answer before the two-minute clock expires.'],
      'final-reveal':['Final: reveal','All submissions are locked. Reveal the final standings.'],
      'results':['Mission results','Final scores, champions and training review.']
    };
    function renderPhasePage(screen){
      const changed=document.body.dataset.screen!==screen;document.body.dataset.screen=screen;if(changed){document.body.classList.remove('show-rankings');$('toggleRankings').textContent='Show rankings';}
      const [title,description]=phasePages[screen]||phasePages.lobby;
      $('phasePageTitle').textContent=title;$('phasePageDescription').textContent=description;
      document.title=title+' | VA MDE Triage Jeopardy';
      history.replaceState(null,'','#'+screen);
      if(changed){syncLandingBed();playStageSound(screen);document.body.classList.remove('phase-enter');void document.body.offsetWidth;document.body.classList.add('phase-enter');window.scrollTo({top:0,behavior:'instant'});if(!['landing','lobby'].includes(screen))$('phasePageTitle').focus({preventScroll:true});}
    }
    function logAction(action,detail){audit.push({at:new Date().toISOString(),action,detail});if(audit.length>200)audit.shift();}
    function captureBoard(){if(!state.board)return null;return {cfg:state.board.cfg,categories:state.board.categories,rows:state.board.rows,dd:[...state.board.dailyDoubles],clues:state.board.categories.flatMap(c=>state.board.rows.map(r=>[state.board.keyFor(c,r),state.board.clueFor(c,r)]))};}
    function serializeMission(){return {version:2,savedAt:Date.now(),gameId,phase,questionId,revision,attempted:[...attempted],players:state.players,ready:[...state.ready],round:state.round,controlIdx:state.controlIdx,used:[...state.used],activeKey:state.activeKey,clueAttempts:state.clueAttempts,clueStartIdx:state.clueStartIdx,ddLockedWager:state.ddLockedWager,board:captureBoard(),questionSeconds:state.timer.paused?state.timer.remaining:MissionCore.remaining(deadline),timerMode:state.timer.mode,gameSeconds:state.gameClock.paused?state.gameClock.remaining:gameDeadline?MissionCore.remaining(gameDeadline):state.gameClock.remaining,finalSeconds:state.final.paused?state.final.timerRemaining:MissionCore.remaining(finalDeadline),final:{step:state.final.step,idx:state.final.idx,wagers:[...state.final.wagers],answers:[...state.final.answers]},finalJeopardy,sessions:[...playerSessions],reviewHistory,audit,settings:Object.fromEntries(['qSeconds','stealSeconds','categoryCount','qPerCat','startValue','valueStep','randomizeBoard','roundSelect','dailyDoubles','dailyDoubleCount','soundMode','volume','autoStart','requireReady'].map(id=>[id,$(id).value]))};}
    function checkpoint(){if(!engineReady)return;try{localStorage.setItem('mission-save-'+roomCode,JSON.stringify(serializeMission()));$('recoveryStatus').textContent='Checkpoint saved '+new Date().toLocaleTimeString();}catch(e){$('recoveryStatus').textContent='Checkpoint unavailable; export a recovery file.';}}
    function scorePayload(){return MissionCore.ranks(state.players).map(({player:p,index,rank})=>({id:playerId(index),name:p.name,score:p.score,rank,connected:Date.now()-(presence.get(p.id)||0)<15000,ready:!!state.ready.get(index)}));}
    function publicSnapshot(targetId=null){const p=state.players[state.controlIdx];return {type:'snapshot',targetId,gameId,revision:++revision,phase,questionId,serverNow:Date.now(),audio:{muted:soundModeSel.value==='off',volume:audio.volume},controller:p?.name||'',controllerId:p?playerId(state.controlIdx):null,attempted:[...attempted],deadline,paused:state.final.step==='answers'?!!state.final.paused:!!state.timer.paused,remaining:state.final.step==='answers'?state.final.timerRemaining:state.timer.remaining,gameDeadline,finalDeadline,scores:scorePayload(),board:mobileBoardState(),question:state.activeKey?{category:clueCatEl.textContent,value:clueValueEl.textContent,text:questionText.textContent}:null,final:{category:finalJeopardy?.category,clue:['answers','reveal','complete'].includes(state.final.step)?finalJeopardy?.text:'',wagered:[...state.final.wagers.keys()].map(i=>playerId(i)),answered:[...state.final.answers.keys()].map(i=>playerId(i))},debrief:phase===P.DEBRIEF?reviewHistory.at(-1):null,guile:$('guileMessage').textContent};}
    function sendSnapshot(targetId=null){if(!engineReady)return;broadcastToBuzzers(publicSnapshot(targetId));}
    function updateMissionHUD(){if(!$('missionPhase'))return;$('missionPhase').textContent=phase.replace(/-/g,' ').toUpperCase();$('missionController').textContent=state.players[state.controlIdx]?.name||'—';$('missionConnection').textContent=realtimeEnabled?(realtimeReady?'ONLINE RELAY READY':'RECONNECTING'):'LOCAL DEVICES ONLY';$('missionClock').textContent=state.final.step==='answers'?`${state.final.timerRemaining}s`:state.timer.id?`${state.timer.remaining}s${state.timer.paused?' PAUSED':''}`:formatClock(state.gameClock.remaining);$('lockMissingWagers').disabled=phase!==P.FINAL_WAGER;$('undoRuling').disabled=undoHistory.length===0;$('answerTimeProgress').max=state.timer.mode.startsWith('steal')?Number(stealSecondsInput.value):Number(qSecondsInput.value);$('answerTimeProgress').value=state.timer.remaining;}
    function bindClient(data){const client=String(data.clientId||'');if(!client||client.length>100)return null;const existing=playerSessions.get(client);if(existing)return state.players.find(p=>p.id===existing)||null;if(data.type!=='join')return null;let p=state.players.find(p=>sameName(p.name,data.player));if(p&&[...playerSessions.values()].includes(p.id)){broadcastToBuzzers({type:'join-ack',targetId:client,player:data.player,registered:false,reason:'That name is already connected. Choose another name.'});return null;}if(!p){if(![P.LOBBY,P.BRIEFING].includes(phase))return null;const registration=registerBuzzerPlayer(String(data.player||'').slice(0,40));if(!registration.ok)return null;p=state.players[registration.index];}if(!p.id)p.id=MissionCore.id();playerSessions.set(client,p.id);checkpoint();return p;}
    function receivePlayer(data){if(!data||data.room!==roomCode||typeof data.type!=='string'||JSON.stringify(data).length>10000)return;
      const now=Date.now(),rate=messageRates.get(data.clientId)||{at:now,count:0};if(now-rate.at>1000){rate.at=now;rate.count=0;}if(++rate.count>30)return;messageRates.set(data.clientId,rate);
      const p=bindClient(data);if(!p){if(data.type==='join')broadcastToBuzzers({type:'join-ack',targetId:data.clientId,player:data.player,registered:false,reason:'Join the lobby with an available name.'});return;}
      presence.set(p.id,Date.now());if(data.id){broadcastToBuzzers({type:'receipt',targetId:data.clientId,ackId:data.id,serverNow:Date.now()});if(messageLedger.has(data.id)){sendSnapshot(data.clientId);return;}messageLedger.add(data.id);}
      data={...data,player:p.name,playerId:p.id};
      if(['answer','buzz','pass'].includes(data.type)&&deadline&&!state.timer.paused&&Date.now()>deadline){sendSnapshot(data.clientId);return;}
      if(data.type==='final-answer-submit'&&finalDeadline&&!state.final.paused&&Date.now()>finalDeadline){sendSnapshot(data.clientId);return;}
      if(['heartbeat','sync-request'].includes(data.type)){sendSnapshot(data.clientId);return;}
      if(data.type!=='join'&&data.type!=='leave'&&data.gameId!==gameId){sendSnapshot(data.clientId);return;}
      if(['answer','buzz','pass','select-clue'].includes(data.type)&&data.questionId!==questionId){sendSnapshot(data.clientId);return;}
      if(data.type==='ready'){if([P.LOBBY,P.BRIEFING].includes(phase)){const i=state.players.indexOf(p);const wasReady=!!state.ready.get(i),wasAllReady=allReady();state.ready.set(i,!!data.ready);readySound(wasReady,wasAllReady,i);if(phase===P.BRIEFING){renderWaitingRoom();updateBeginEnabled();}sendSnapshot();checkpoint();}return;}
      if(data.type==='pass'){if(MissionCore.canAnswer(phase,playerId(state.controlIdx),p.id,state.timer.paused))handlePass();else sendSnapshot(data.clientId);return;}
      handleBuzzerMessage(data);sendSnapshot(data.clientId);checkpoint();
    }
    function reviewClue(clue,correct,playerName){const [category]=state.activeKey.split('::');const record={category,question:clue.text,answer:clue.answers[0],correct,player:playerName,explanation:clue.explanation||`Training review: ${clue.answers[0]}. Revisit ${category} in the MDE training material and check current official procedures before applying this guidance.`};reviewHistory.push(record);if(reviewHistory.length>100)reviewHistory.shift();return record;}
    function showDebrief(clue,correct){if(!correct)state.controlIdx=(state.clueStartIdx+1)%state.players.length;stopTimer();stopQuestionBeat();markUsed();const record=reviewClue(clue,correct,state.players[state.controlIdx]?.name);setPhase(P.DEBRIEF);$('correctAnswerText').textContent=record.answer;$('correctAnswerCountdown').textContent=record.explanation;$('correctAnswerOverlay').classList.add('show');submitBtn.disabled=true;passBtn.disabled=true;const key=state.activeKey;clearTimeout(debriefTimeout);debriefTimeout=setTimeout(()=>{if(state.activeKey===key&&phase===P.DEBRIEF){$('correctAnswerOverlay').classList.remove('show');closeClue();}},5000);}
    function rememberRuling(){undoHistory.push({players:state.players.map(p=>({...p})),used:[...state.used],controlIdx:state.controlIdx,activeKey:state.activeKey,attempted:[...attempted],clueAttempts:state.clueAttempts,ddLockedWager:state.ddLockedWager,reviewCount:reviewHistory.length});if(undoHistory.length>20)undoHistory.shift();}
    function undoRuling(){const prev=undoHistory.pop();if(!prev||state.final.step!=='off')return;clearTimeout(debriefTimeout);$('correctAnswerOverlay').classList.remove('show');stopTimer();Object.assign(state,{players:prev.players,used:new Set(prev.used),controlIdx:prev.controlIdx,activeKey:prev.activeKey,clueAttempts:prev.clueAttempts,ddLockedWager:prev.ddLockedWager});attempted=new Set(prev.attempted);reviewHistory.length=prev.reviewCount;logAction('undo','Last ruling restored');if(state.activeKey){qaPane.style.display='block';boardPane.style.display='none';answerInput.disabled=false;submitBtn.disabled=false;passBtn.disabled=false;startTimer(Number(qSecondsInput.value),state.clueAttempts?'steal-answer':'main');}else closeClue();renderScoreboard();checkpoint();sendSnapshot();}
    function advanceFinal(){if(state.final.step==='wagers'&&state.final.wagers.size===state.players.length){state.final.step='answers';state.final.idx=0;setPhase(P.FINAL_ANSWER);renderFinalUI();startFinalTimer();broadcastToBuzzers({type:'final-answer',category:finalJeopardy.category,clue:finalJeopardy.text});}else if(state.final.step==='answers'&&state.final.answers.size===state.players.length){stopFinalTimer();state.final.step='reveal';state.final.idx=0;setPhase(P.FINAL_REVEAL);renderFinalUI();}}
    function restoreMission(saved){if(!saved||saved.version!==2||!Array.isArray(saved.players))throw Error('Unsupported recovery file');engineReady=false;undoHistory.length=0;clearTimeout(debriefTimeout);$('correctAnswerOverlay').classList.remove('show');stopTimer();stopGameClock();stopFinalTimer();if(waitingCountdownId)clearInterval(waitingCountdownId);
      gameId=saved.gameId;questionId=saved.questionId;phase=saved.phase;revision=saved.revision||0;attempted=new Set(saved.attempted);playerSessions.clear();for(const [k,v]of saved.sessions||[])playerSessions.set(k,v);reviewHistory.splice(0,reviewHistory.length,...saved.reviewHistory);audit.splice(0,audit.length,...saved.audit);finalJeopardy=saved.finalJeopardy;
      for(const [id,value]of Object.entries(saved.settings||{}))if($(id))$(id).value=value;
      Object.assign(state,{players:saved.players,ready:new Map(saved.ready),round:saved.round,controlIdx:saved.controlIdx,used:new Set(saved.used),activeKey:saved.activeKey,clueAttempts:saved.clueAttempts,clueStartIdx:saved.clueStartIdx,ddLockedWager:saved.ddLockedWager});
      state.final={...saved.final,wagers:new Map(saved.final.wagers),answers:new Map(saved.final.answers),timerId:null,timerRemaining:saved.finalSeconds||120,paused:saved.final.step==='answers'};state.gameClock.remaining=saved.gameSeconds;
      if(saved.board){const b=saved.board,clues=new Map(b.clues),dd=new Set(b.dd);state.board={cfg:b.cfg,categories:b.categories,rows:b.rows,dailyDoubles:dd,keyFor:(c,r)=>`${c}::${r}::${b.cfg.round}`,clueFor:(c,r)=>clues.get(`${c}::${r}::${b.cfg.round}`),valueForRow:r=>valueForRow(r,b.cfg),isDailyDouble:k=>dd.has(k)};}
      for(const el of [lobbyPane,waitingRoomPane,boardPane,qaPane,finalPane,summaryPane,scoreBoard])el.style.display='none';engineReady=true;
      if([P.LOBBY,P.BRIEFING].includes(phase)){lobbyPane.style.display='block';setPhase(P.LOBBY);renderLobbyList();}
      else if(phase===P.RESULTS){state.final.step='complete';summaryPane.style.display='block';$('summaryText').innerHTML='<h2>Recovered final standings</h2>'+scorePayload().map(p=>`<p>${p.rank}. ${escapeHtml(p.name)} — $${p.score}</p>`).join('');setPhase(P.RESULTS);}
      else{scoreBoard.style.display='block';renderScoreboard();renderBoard();if(state.final.step!=='off'){finalPane.style.display='block';renderFinalUI();if(phase===P.FINAL_ANSWER){startFinalTimer(saved.finalSeconds||120);state.final.paused=true;}}
        else if(state.activeKey){qaPane.style.display='block';const [cat,row]=state.activeKey.split('::');const clue=state.board.clueFor(cat,Number(row));questionText.textContent=clue.text;clueCatEl.textContent=cat;clueValueEl.textContent='$'+state.board.valueForRow(Number(row));qaHeader.textContent=(state.players[state.controlIdx]?.name||'')+"'s recovered question";ddWagerRow.style.display=phase===P.WAGER?'block':'none';if(phase===P.DEBRIEF)closeClue();else{startTimer(Math.max(1,saved.questionSeconds),saved.timerMode);state.timer.paused=true;updateQuestionPauseButton();}}else{boardPane.style.display='block';setPhase(P.BOARD);}
      }
      gameDeadline=0;state.gameClock.paused=true;$('pauseMission').textContent='Resume mission';$('recoveryPanel').hidden=true;document.body.classList.toggle('mission-playing',![P.LOBBY,P.BRIEFING].includes(phase));guileBrief('Mission recovered. Resume the mission and active question when everyone is ready.');renderPhasePage(phase);checkpoint();sendSnapshot();}
    function renderTrainingReview(){const counts=new Map();for(const r of reviewHistory)if(!r.correct)counts.set(r.category,(counts.get(r.category)||0)+1);const html=`<h3>Training debrief</h3><p>${reviewHistory.filter(r=>r.correct).length}/${reviewHistory.length} objectives answered correctly.</p><p>Review topics: ${[...counts].map(([c,n])=>`${escapeHtml(c)} (${n})`).join(', ')||'No missed topics recorded.'}</p><details><summary>Review every completed objective</summary>${reviewHistory.map(r=>`<article class="review-item"><strong>${escapeHtml(r.category)}</strong><p>${escapeHtml(r.question)}</p><p>${escapeHtml(r.explanation)}</p></article>`).join('')}</details>`;$('trainingReview').innerHTML=html;}
    function initializeMission(){engineReady=true;renderPhasePage(location.hash==='#lobby'?'lobby':'landing');$('enterLobby').onclick=()=>setPhase(P.LOBBY);$('toggleRankings').onclick=()=>{const shown=document.body.classList.toggle('show-rankings');$('toggleRankings').textContent=shown?'Hide rankings':'Show rankings';};let saved=null;try{saved=JSON.parse(localStorage.getItem('mission-save-'+roomCode));}catch{}if(saved&&saved.players?.length){$('recoveryPanel').hidden=false;$('restoreCheckpoint').onclick=()=>restoreMission(saved);}
      $('pauseMission').onclick=()=>{state.gameClock.paused=!state.gameClock.paused;if(!state.gameClock.paused){if(!state.gameClock.id&&state.final.step==='off')startGameClock(state.gameClock.remaining);else gameDeadline=Date.now()+state.gameClock.remaining*1000;}$('pauseMission').textContent=state.gameClock.paused?'Resume mission':'Pause mission';checkpoint();sendSnapshot();};
      $('acceptAnswer').onclick=()=>{if(!state.activeKey||![P.ANSWER,P.STEAL_ANSWER].includes(phase))return;const [c,r]=state.activeKey.split('::');answerInput.value=state.board.clueFor(c,Number(r)).answers[0];logAction('accept-equivalent',state.players[state.controlIdx].name);handleSubmit();};
      $('undoRuling').onclick=undoRuling;$('applyScore').onclick=()=>{const i=Number($('scorePlayer').value),score=Number($('scoreCorrection').value);if(!state.players[i]||!Number.isSafeInteger(score))return;rememberRuling();logAction('score-correction',{player:state.players[i].name,from:state.players[i].score,to:score});state.players[i].score=score;renderScoreboard();checkpoint();sendSnapshot();};
      $('exportRecovery').onclick=()=>{const blob=new Blob([JSON.stringify(serializeMission())],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='mission-recovery-'+roomCode+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
      $('importRecovery').onchange=async e=>{try{const f=e.target.files[0];if(f.size>2000000)throw Error('Recovery file too large');restoreMission(JSON.parse(await f.text()));}catch(err){$('recoveryStatus').textContent=err.message;}};
      $('lockMissingWagers').onclick=()=>{if(phase!==P.FINAL_WAGER)return;state.players.forEach((_,i)=>{if(!state.final.wagers.has(i))state.final.wagers.set(i,0);});logAction('default-wagers','Unsubmitted wagers locked at $0');advanceFinal();};
      $('copyJoin').onclick=async()=>{try{await navigator.clipboard.writeText(new URL('buzzer.html?room='+roomCode,location.href).href);$('copyJoin').textContent='Copied';}catch{$('copyJoin').textContent='Select the link to copy';}};
      $('muteMission').onclick=()=>{soundModeSel.value=soundModeSel.value==='off'?'on':'off';soundModeSel.dispatchEvent(new Event('change'));$('muteMission').textContent=soundModeSel.value==='off'?'Unmute':'Mute';};
      $('finishDebrief').onclick=()=>{if(phase===P.DEBRIEF){clearTimeout(debriefTimeout);$('correctAnswerOverlay').classList.remove('show');closeClue();}};
      $('reducedMotion').onchange=e=>document.documentElement.classList.toggle('reduce-motion',e.target.checked);
      setInterval(()=>{if(!engineReady)return;updateMissionHUD();checkpoint();sendSnapshot();},2000);updateMissionHUD();
    }

    // -----------------------------
    // Initial
    // -----------------------------
    renderLobbyList();
    setPrivacy(false);
    setAudioFromUI();
    initializeMission();
  })();
  