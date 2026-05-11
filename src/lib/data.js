export const db = {
    "parents": [
        {
            "id": "p1",
            "username": "tadashi_parent",
            "password": "tad9shi",
            "name": "Jessica",
            "studentId": "s1"
        },
        {
            "id": "p2",
            "username": "isobesama",
            "password": "petraPassword",
            "name": "Isobe様",
            "studentId": "s2",
            "lang": "ja"
        },
        {
            "id": "p3",
            "username": "sugiyama_parent",
            "password": "petraPassword",
            "name": "Sugiyama様",
            "studentId": "s3",
            "lang": "ja"
        }
    ],
    "admins": [
        {
            "id": "a1",
            "username": "admin",
            "password": "petraPassword",
            "name": "Petra Admin"
        }
    ],
    "tutors": [
        {
            "id": "t1",
            "username": "tina_tutor",
            "password": "petraPassword",
            "name": "Tina",
            "role": "EIKEN / Academic English Tutor",
            "assignedStudents": [
                "s1"
            ],
            "nextLesson": {
                "studentId": "s1",
                "time": "Today 6:00 PM"
            },
            "todayAgenda": [
                "Review Tadashi's unfinished homework before the lesson",
                "Prepare one short EIKEN-style reading passage",
                "Submit Tadashi lesson report after class",
                "Flag any parent-facing concern to Petra admin"
            ]
        },
        {
            "id": "t2",
            "username": "hannah_tutor",
            "password": "petraPassword",
            "name": "Hannah Tuffy",
            "role": "Advanced Speaking & Cultural Immersion",
            "assignedStudents": [
                "s3"
            ],
            "nextLesson": {
                "studentId": "s3",
                "time": "Tomorrow 9:00 AM"
            },
            "todayAgenda": [
                "Review Sarah's English Vocabulary in Use",
                "Prepare new 'would you rather' slides"
            ]
        },
        {
            "id": "t3",
            "username": "day_tutor",
            "password": "petraPassword",
            "name": "Day",
            "role": "Study Abroad Preparation",
            "assignedStudents": [
                "s2"
            ],
            "nextLesson": null,
            "todayAgenda": [
                "Review Miyako's English diary",
                "Prepare Unit 2 location vocabulary"
            ]
        },
        {
            "id": "t4",
            "username": "hazel_tutor",
            "password": "petraPassword",
            "name": "Hazel",
            "role": "English Tutor",
            "assignedStudents": [
                "s1"
            ],
            "nextLesson": null,
            "todayAgenda": [
                "Review Tadashi's recent lesson reports",
                "Prepare customized reading materials"
            ]
        },
        {
            "id": "t5",
            "username": "alice_tutor",
            "password": "petraPassword",
            "name": "Alice Williams",
            "role": "English Tutor",
            "assignedStudents": [
                "s1"
            ],
            "nextLesson": null,
            "todayAgenda": [
                "Review Tadashi's recent lesson reports",
                "Prepare for the next reading comprehension lesson"
            ]
        }
    ],
    "students": {
        "s1": {
            "id": "s1",
            "name": "Tadashi",
            "course": "EIKEN Pre-1 Writing & Reading Support",
            "target": "Pass EIKEN Pre-1. Improve reading comprehension and stabilize writing performance.",
            "overallGrade": "B-",
            "coreIssue": "Weak reading comprehension is limiting overall performance.",
            "coreIssueDetail": "The main issue is not knowledge, but processing. Without full understanding of text and prompts, writing becomes unstable.",
            "focusThisMonth": "Reading → Summary → Writing connection",
            "petraInsight": "Tadashi currently performs strongest when he has time to process context. When placed into timed grammar-heavy exercises, his response speed decreases slightly, suggesting that fluency and structural precision are developing at different rates.",
            "skills": [
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 79,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Strong word meaning",
                    "issue": "Knows meanings well but needs regular reinforcement rather than rote memorization.",
                    "improvement": "Regular vocabulary review focusing on context and familiarity."
                },
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 40,
                    "weight": 1,
                    "condition": "Progress Slowing",
                    "note": "Needs pattern training",
                    "warning": true,
                    "issue": "Struggles with spelling accuracy on common words ('should', 'because') and specific suffixes ('-ture', '-tion').",
                    "improvement": "Reinforce spelling patterns and continue 10-word spelling checks weekly."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 57,
                    "weight": 1.2,
                    "condition": "Becoming More Consistent",
                    "note": "Understands basics",
                    "issue": "Understands basic structure but needs to practice writing introductions with hooks and comprehensive conclusions.",
                    "improvement": "Practice incorporating a hook/background info in the intro, and restating both opinion and reasons in the conclusion."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 30,
                    "weight": 1.5,
                    "condition": "Further Practice Recommended",
                    "note": "Main challenge identified",
                    "critical": true,
                    "issue": "Finds it difficult to fully understand the context of passages, which negatively impacts writing tasks.",
                    "improvement": "Introduce structured reading strategies to help with context understanding before attempting to write."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 82,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Adapts quickly",
                    "issue": "Strong potential, but needs more practice applying complex structures in independent writing.",
                    "improvement": "Continue to engage with complex topics and build background knowledge to support arguments."
                }
            ],
            "phases": [
                {
                    "title": "Phase 1",
                    "label": "Foundation Stabilization",
                    "period": "Weeks 1–3",
                    "items": [
                        {
                            "title": "10-word spelling check every lesson",
                            "completed": true
                        },
                        {
                            "title": "Sentence accuracy training",
                            "completed": true
                        },
                        {
                            "title": "Capitalization and punctuation correction",
                            "completed": false
                        }
                    ]
                },
                {
                    "title": "Phase 2",
                    "label": "Reading → Expression",
                    "period": "Weeks 3–5",
                    "items": [
                        {
                            "title": "Paragraph-by-paragraph summary",
                            "completed": false
                        },
                        {
                            "title": "Identify main idea and reasoning",
                            "completed": false
                        },
                        {
                            "title": "Read first, then write response",
                            "completed": false
                        }
                    ]
                },
                {
                    "title": "Phase 3",
                    "label": "Exam Performance",
                    "period": "Weeks 5–8",
                    "items": [
                        {
                            "title": "Timed EIKEN writing",
                            "completed": false
                        },
                        {
                            "title": "Full mock test",
                            "completed": false
                        },
                        {
                            "title": "Score tracking and weak-point review",
                            "completed": false
                        }
                    ]
                }
            ],
            "lessons": [
                {
                    "id": "l_hazel0508",
                    "date": "May 8, 2026",
                    "tutor": "Hazel",
                    "type": "Regular",
                    "topic": "Spelling and reading comprehension",
                    "rating": "Okay",
                    "sessionSummary": "Focused on EIKEN Pre-1 Reading Comprehension and spelling retention techniques.",
                    "observedStrength": "Tadashi demonstrated excellent resilience. After struggling with the initial spelling quiz, he quickly applied the memorization technique and achieved full marks on his second attempt.",
                    "currentFocusArea": "Time management and lexical precision during reading tasks.",
                    "interventionStrategy": "Introduced keyword-matching strategy: identifying similar phrases in both the question and the reading passage before fully reading the text.",
                    "responseToIntervention": "More consistent identification of correct answers observed during the guided reading portion.",
                    "impacts": [
                        {
                            "skill": "Structural Accuracy",
                            "change": "+1"
                        },
                        {
                            "skill": "Listening Adaptability",
                            "change": "+2"
                        }
                    ],
                    "content": "1. Started the lesson with a 5 to 10 minute short introductory and ice breaker activity.\n2. Tested the student on the previous spelling homework.\n3. Since Tadashi only got 2 words correct, I taught him how to write the words at least 5 times and read the words aloud after each time. I then gave him 5 minutes to memorise all the words again and tested him on the spelling.\n4. We went through one reading comprehension from Eiken official paper pre-1 (3) together. I taught him how to read the questions before reading the passage and identify important key words from the questions as well.\n5. I then asked Tadashi to do the questions himself. After marking the paper, I went through the passage with him again as I guide him on how to identify the answers by recognising the similar keywords and phrases in the questions and the passage.",
                    "feedback": "1. Had a quiz on the spelling homework.\n2. Taught Tadashi to how to memorise again and quizzed him again (he received full marks on the second try).\n3. Asked him to answer the questions for the reading comprehension.\n4. Solved the answers after marking the paper and taught him how to identify key words in the passages and the questions.\n5. Gave him 8 spelling words to memorise for homework.\n\nNote: Due to the short amount of time for the lesson, I was unable to focus on other areas. Therefore, I only gave him a little bit of homework for my first lesson with him. However, I plan on giving him more assignments to do from the next few lessons onwards.",
                    "homework": "I assigned him the following words for spelling from Unit 6 of the 4000 Essential English Words textbook (definitions included):\n- Devise\n- Fracture\n- Indigenous\n- Insight\n- Limb\n- Migraine\n- Optimism\n- Quest"
                },
                {
                    "id": "l_alceW0507",
                    "date": "May 7, 2026",
                    "tutor": "Alice",
                    "type": "Regular",
                    "topic": "Reading comprehension practice",
                    "rating": "Excellent",
                    "sessionSummary": "Continued EIKEN style reading practice focusing on the topic of homework reduction.",
                    "observedStrength": "Tadashi remembered the structure and ideas from the previous lesson exceptionally well and applied them confidently. His focus was outstanding.",
                    "currentFocusArea": "Reading fluency and pronunciation of multi-syllabic unfamiliar words.",
                    "interventionStrategy": "Collaborative paragraph writing using elevated language and immediate definition checks.",
                    "responseToIntervention": "Rapid improvement in understanding and applying new elevated vocabulary in context.",
                    "impacts": [
                        {
                            "skill": "Listening Adaptability",
                            "change": "+1"
                        },
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+2"
                        },
                        {
                            "skill": "Structural Accuracy",
                            "change": "+1"
                        }
                    ],
                    "content": "Tadashi and I explored both sides of the argument, focusing on the advantages and disadvantages of reducing homework. Tadashi developed ideas about how excessive homework may increase stress, negatively affect academic performance, reduce time for hobbies and family, and potentially lead to behavioural issues in school etc. Tadashi also practiced explaining how good wellbeing outside of school can positively impact students classroom performance.\n\nTogether we wrote an exam style paragraph for the supporting argument using elevated language. Tadashi learned new words and their definitions through our use of elevated language.",
                    "feedback": "Tadashi remembered the structure and ideas from the previous lesson well and applied them confidently and correctly to today’s lesson. Despite the lesson being online, he stayed focused and contributed very well throughout! We are continuing to work on reading fluency and pronunciation of longer or unfamiliar words, but he showed great effort and engagement during the lesson!",
                    "homework": "Learn the correct spelling and definitions for the following words:\n\n- Behavioral\n- Contribute\n- Beneficial\n- Scenario\n- Delay\n- Revise"
                },
                {
                    "id": "l_alceW0501",
                    "date": "May 1, 2026",
                    "tutor": "Alice",
                    "type": "Regular",
                    "topic": "Reading comprehension",
                    "rating": "Excellent",
                    "sessionSummary": "Brief spelling review followed by EIKEN style passages on school homework reduction.",
                    "observedStrength": "Tadashi is a highly dedicated student. Given a moment to think, he can deduce the correct spelling of many complex words.",
                    "currentFocusArea": "Finding the appropriate English words to describe definitions or abstract explanations without relying on basic vocabulary.",
                    "interventionStrategy": "Practiced paraphrasing sentences to improve lexical choice and structural formatting.",
                    "responseToIntervention": "Slight hesitation initially, but steady improvement in sentence structure over the session.",
                    "impacts": [
                        {
                            "skill": "Listening Adaptability",
                            "change": "+2"
                        },
                        {
                            "skill": "Structural Accuracy",
                            "change": "+1"
                        },
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        }
                    ],
                    "content": "At the start of the lesson we briefly went through the previous lessons spelling words and their definitions. Focused on further developing reading comprehension with EIKEN style passages on the topic of homework reduction in schools. We covered identifying key information, predicting content from titles and skimming for the main idea. We practiced paraphrasing certain sentences to improve understanding/ language choice and proper structures for answers.",
                    "feedback": "Tadashi is definitely a hard worker and does try his best.\n\nGiven time and a moment to think, he is able to work out the correct spelling of many words. However, his main weakness is finding the appropriate words to describe definitions or explanations. Time management also appears to be a slight issue, as it takes Tadashi time to express what he wants to write or say. Expanding his vocabulary will help improve both his time management and his word choices, as his answers currently tend to use quite basic vocabulary.",
                    "homework": "To write and finish both the ‘for’ and ‘against’ arguments for the topic question “Should schools reduce homework?”\n\n- using the bullet point notes we made during the lesson to structure the paragraphs."
                },
                {
                    "id": "l_tnZh0430",
                    "date": "Apr 30, 2026",
                    "tutor": "Tina",
                    "type": "Regular",
                    "topic": "EIKEN Pre-1 Reading Comprehension",
                    "rating": "Excellent",
                    "sessionSummary": "Vocabulary check, differences between word classes, and two EIKEN reading passages focusing on summarization.",
                    "observedStrength": "Tadashi showed excellent overall reading comprehension and stayed deeply focused throughout the complex summarization tasks.",
                    "currentFocusArea": "Summarizing texts using academic language and filtering out less important details.",
                    "interventionStrategy": "Taught 'skipping unknown words' technique and identifying structural indicators ('first', 'for example').",
                    "responseToIntervention": "Increased processing speed when identifying the main topic and supporters' opinions.",
                    "impacts": [
                        {
                            "skill": "Listening Adaptability",
                            "change": "+3"
                        },
                        {
                            "skill": "Expression Fluidity",
                            "change": "+1"
                        }
                    ],
                    "content": "Vocabulary check - quizzed student on vocabulary spelling and definition from last lesson; taught student differences between noun, adjective, verb\nReading comprehension practice - used 2 EIKEN style reading passages to test student's comprehension, asked student to identify topic, supporters' opinions, critics' opinions, and summarizing the passage in 3 sentences or under; gave student tips such as skipping unknown words, identifying connecting indicators like \"first\" \"for example\" \"to conclude\"\nReading summarization practice - had student shorten long sentences into shorter ones, learning skills like removing irrelevant information, identifying key words\nNote taking - helped student take notes about important content from today",
                    "feedback": "Today, we started with a vocabulary check to review spelling and definitions from the previous lesson, and also introduced the differences between nouns, adjectives, and verbs. We then focused on reading comprehension using EIKEN-style passages, where Tadashi practiced identifying the main topic, supporters’ and critics’ opinions, and summarizing the text in a few sentences. I also introduced strategies such as skipping unknown words and using keywords like “first” and “for example” to follow the structure more easily. We then practiced summarization by shortening longer sentences and focusing on key information.\n\nTadashi showed good overall reading comprehension and stayed focused throughout the lesson. He is able to understand the main ideas well, but needs more practice summarizing using academic language and filtering out less important details. We will also continue building his grammar foundation to better understand word types and sentence structure.\n\nFor homework, he should memorize the spelling and definitions of today’s vocabulary.",
                    "homework": "Memorize spelling and definition of today's vocabulary perfectly."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Reading Comprehension Focus",
                    "desc": "Introduce structured reading strategies to help with context understanding."
                },
                {
                    "title": "2. Spelling & Vocab Reinforcement",
                    "desc": "Review key EIKEN Pre-1 vocabulary and identify spelling patterns (-ture, -tion)."
                },
                {
                    "title": "3. Writing Application",
                    "desc": "Focus on understanding source material first before responding to prompts."
                }
            ]
        },
        "s2": {
            "id": "s2",
            "name": "Miyako Isobe",
            "course": "Study Abroad & IELTS Prep",
            "target": "Discovering the student's English level and the contents she would like to learn for her final goal, which is to study abroad.",
            "overallGrade": "B",
            "coreIssue": "Transitioning to academic syntax",
            "coreIssueDetail": "She has mastered basic grammar like 'there is/are', but needs to master complex structures, articles (a/an/the), and negative questions to reach academic level.",
            "focusThisMonth": "Vocabulary building and sentence structure",
            "petraInsight": "Miyako demonstrates strong conversational adaptability during spontaneous discussion tasks. However, her reliance on basic sentence structures currently limits her academic expression. As she builds vocabulary precision, her structural accuracy is expected to follow.",
            "skills": [
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 57,
                    "weight": 1,
                    "condition": "Further Practice Recommended",
                    "note": "Needs academic vocabulary",
                    "warning": true,
                    "issue": "Only confident with about half of the '1000 Basic English Words'.",
                    "improvement": "Review academic and daily location vocabulary daily and practice using them in context."
                },
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 81,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Basics are solid",
                    "issue": "Struggles with specific rules like using definite/indefinite articles (a/an/the) and direct translation of negative questions.",
                    "improvement": "Drills focused on article usage and translating negative questions from Japanese to English."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 62,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Eager to improve",
                    "issue": "Needs to learn how to construct correct sentence structures independently for higher-level academic writing.",
                    "improvement": "Practice writing an English diary using new grammar rules to build writing confidence."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 75,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Very proactive",
                    "issue": "Needs more exposure to native pacing, but attitude is excellent.",
                    "improvement": "Continue prioritizing output during sessions."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 68,
                    "weight": 1,
                    "condition": "Progress Slowing",
                    "note": "Good foundation",
                    "issue": "Sometimes misses subtle nuances in longer academic discussions.",
                    "improvement": "Introduce longer listening passages with varied accents."
                }
            ],
            "phases": [
                {
                    "title": "Phase 1",
                    "label": "Grammar Foundations",
                    "period": "Weeks 1–3",
                    "items": [
                        {
                            "title": "Master a/an/the article rules",
                            "completed": false
                        },
                        {
                            "title": "Understand negative question structures",
                            "completed": false
                        },
                        {
                            "title": "English diary writing practice",
                            "completed": true
                        }
                    ]
                },
                {
                    "title": "Phase 2",
                    "label": "Vocabulary Retention",
                    "period": "Weeks 3–6",
                    "items": [
                        {
                            "title": "Complete 1000 Basic English Words",
                            "completed": false
                        },
                        {
                            "title": "Use vocabulary in academic context",
                            "completed": false
                        },
                        {
                            "title": "Long reading comprehension drills",
                            "completed": false
                        }
                    ]
                }
            ],
            "lessons": [
                {
                    "id": "s2_l4",
                    "date": "Apr 28, 2026",
                    "tutor": "Dayun Suh",
                    "type": "Regular",
                    "topic": "English Grammar and Time",
                    "rating": "Excellent",
                    "sessionSummary": "Completed diary entry assignment review and covered foundational grammar: present simple, possessives, and articles.",
                    "observedStrength": "Miyako shows great enthusiasm when learning about time-telling and applied the new rules immediately in conversation.",
                    "currentFocusArea": "Accurate usage of demonstratives (this, that, these, those) and question construction.",
                    "interventionStrategy": "Provided a free grammar e-book and practiced direct translation of negative questions.",
                    "responseToIntervention": "More consistent usage of 'some' vs 'any' during the second half of the lesson.",
                    "impacts": [
                        {
                            "skill": "Structural Accuracy",
                            "change": "+2"
                        },
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        }
                    ],
                    "content": "Homework Check for Diary Entry and Grammar Error Check\nEnglish Grammar:\nFree Grammar E-book \n- Present Simple: Be\n- Possessives\n- Articles\n- This, That, These, Those\n- some, any\nHow to construct a question sentence\nLearned how to read the time in English",
                    "feedback": "In our class today, we completed a diary entry assignment along with a grammar review covering the present simple (verb “to be”), possessives, articles, demonstratives (this, that, these, those), the use of “some” and “any,” and how to construct question sentences. In addition, they learned how to read and tell the time in English, and a free grammar e-book was provided for further practice.",
                    "homework": "- Diary entry\n- Clock/Time reading practice"
                },
                {
                    "id": "s2_l3",
                    "date": "Apr 21, 2026",
                    "tutor": "Riku",
                    "type": "Consultation",
                    "topic": "Speaking, Basic English",
                    "rating": "Excellent",
                    "sessionSummary": "Initial lesson support and speaking assessment. Focused on creating a comfortable environment.",
                    "observedStrength": "Although she mentioned she was nervous, Miyako was remarkably calm and expressed herself clearly in her own words. She actively participated.",
                    "currentFocusArea": "Building confidence and leveraging her proactive attitude toward speaking.",
                    "interventionStrategy": "Relaxed introductory conversation followed by light hobby discussion.",
                    "responseToIntervention": "Visible increase in Conversational Confidence; she began asking questions unprompted.",
                    "impacts": [
                        {
                            "skill": "Expression Fluidity",
                            "change": "+2"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Initial lesson support and speaking assessment. We started with introductions with the tutor and parents, followed by light conversation about hobbies and background to create a relaxed atmosphere. After that, the lesson proceeded using the tutor's prepared materials. I attended mainly as support to observe the flow and the student's progress.",
                    "feedback": "As this was the first lesson, we focused on creating a comfortable environment and observing her English communication. Although Miyako mentioned she was nervous, she was actually very calm and expressed herself clearly in her own words. She actively participated in the conversation, making it a great start. Moving forward, we will leverage this strength to build her confidence while improving her speaking skills.",
                    "homework": "Homework details were provided directly by the tutor."
                },
                {
                    "id": "s2_l2",
                    "date": "Apr 12, 2026",
                    "tutor": "Riku",
                    "type": "Trial",
                    "topic": "Speaking, Basic English",
                    "rating": "Excellent",
                    "sessionSummary": "Practical speaking lesson without a textbook, focusing on natural communication for first-time meetings.",
                    "observedStrength": "She understands the core concept that 'English is learned by speaking' and is eager to focus on output. Her pronunciation is exceptionally good.",
                    "currentFocusArea": "Building 'familiarity' and psychological safety in English environments.",
                    "interventionStrategy": "Real-time feedback on natural phrasing and sentence structure, connecting useful vocabulary to her actual speech.",
                    "responseToIntervention": "Rapid adoption of provided natural phrasing instead of direct Japanese translation.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+3"
                        },
                        {
                            "skill": "Expression Fluidity",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+1"
                        }
                    ],
                    "content": "The lesson focused on practical speaking without using a textbook. We practiced natural communication assuming a conversation with someone meeting for the first time, covering self-introductions, hobbies, and background. I provided real-time feedback on natural phrasing and sentence structure, and connected useful vocabulary to the student's actual speech.",
                    "feedback": "Today we had a practical English conversation lesson focusing on speaking. Although Miyako mentioned feeling nervous, she actually showed very high ability to express herself and the conversation flowed smoothly. She has a proactive attitude toward speaking, which is a great learning mindset. I was particularly impressed that she understands the core concept that 'English is learned by speaking' and is eager to focus on output. Her pronunciation is also very good. The current challenge is not her English ability itself, but rather building 'familiarity' and 'confidence', which we hope to develop at Petra.",
                    "homework": "None (Trial lesson)"
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Basic Grammar",
                    "desc": "Focus on rules for using 'a', 'an', and 'the' in sentences."
                },
                {
                    "title": "2. Structure Practice",
                    "desc": "Review diary homework together and correct sentence structures."
                },
                {
                    "title": "3. Vocabulary Review",
                    "desc": "Review incorrect words from '1000 Basic English Words'."
                }
            ],
            "ja": {
                "course": "海外留学 ＆ IELTS 準備コース",
                "target": "海外留学に向けての準備と、IELTSの基礎的な学習を開始します。",
                "coreIssue": "アカデミックな構文への移行",
                "coreIssueDetail": "「there is/are」などの基本的な文法はしっかりと定着していますが、アカデミックレベルに到達するためには、複雑な文構造や冠詞（a/an/the）、否定疑問文をマスターする必要があります。",
                "focusThisMonth": "語彙力の強化と文構造の理解",
                "petraInsight": "Miyakoさんは自由なディスカッション課題において、非常に高い適応力を示しています。しかし、基礎的な文構造に頼りがちなため、アカデミックな表現力が制限されています。語彙の正確さを構築することで、文法の正確さも伴ってくることが期待されます。",
                "skills": [
                    {
                        "name": "Vocabulary Precision",
                        "note": "アカデミックな語彙の強化が必要",
                        "issue": "基礎的な「1000 Basic English Words」のうち、自信を持って答えられるのは約半分です。",
                        "improvement": "アカデミックおよび日常的な場所に関する語彙を毎日復習し、文脈の中で使う練習をします。"
                    },
                    {
                        "name": "Structural Accuracy",
                        "note": "基礎は定着しています",
                        "issue": "定冠詞/不定冠詞（a/an/the）の使い分けや、否定疑問文の日本語からの直訳など、特定の細かいルールでつまずくことがあります。",
                        "improvement": "冠詞の使い方に特化したドリルや、日本語から英語への否定疑問文の変換練習を行います。"
                    },
                    {
                        "name": "Expression Fluidity",
                        "note": "さらに上達したいという意欲があります",
                        "issue": "より高いレベルのアカデミック・ライティングのために、自ら正しい文構造を組み立てる方法を学ぶ必要があります。",
                        "improvement": "新しい文法ルールを使って英語日記を書く練習をし、ライティングへの自信をつけさせます。"
                    },
                    {
                        "name": "Conversational Confidence",
                        "note": "非常に積極的",
                        "issue": "よりネイティブに近いペースへの適応が必要ですが、態度は素晴らしいです。",
                        "improvement": "セッション中でのアウトプットを最優先に続けます。"
                    },
                    {
                        "name": "Listening Adaptability",
                        "note": "良い基礎",
                        "issue": "長いアカデミックなディスカッションでの微妙なニュアンスを見逃すことがあります。",
                        "improvement": "様々なアクセントの長めのリスニング問題を取り入れます。"
                    }
                ],
                "phases": [
                    {
                        "label": "文法の基礎固め",
                        "period": "第1〜3週",
                        "items": [
                            {
                                "title": "a/an/theの冠詞ルールのマスター",
                                "completed": false
                            },
                            {
                                "title": "否定疑問文の構造理解",
                                "completed": false
                            },
                            {
                                "title": "英語日記のライティング練習",
                                "completed": true
                            }
                        ]
                    },
                    {
                        "label": "語彙力の定着",
                        "period": "第3〜6週",
                        "items": [
                            {
                                "title": "1000 Basic English Words の完了",
                                "completed": false
                            },
                            {
                                "title": "アカデミックな文脈での語彙の使用",
                                "completed": false
                            },
                            {
                                "title": "長文読解ドリル",
                                "completed": false
                            }
                        ]
                    }
                ],
                "lessons": [
                    {
                        "date": "2026年4月28日",
                        "type": "通常レッスン",
                        "topic": "English Grammar and Time",
                        "sessionSummary": "英語日記の課題確認と、基礎文法（be動詞の現在形、所有格、冠詞）の学習を完了しました。",
                        "observedStrength": "Miyakoさんは時間の表現を学ぶ際に素晴らしい熱意を見せ、会話ですぐに新しいルールを応用できました。",
                        "currentFocusArea": "指示代名詞（this, that, these, those）と疑問文の正確な使用。",
                        "interventionStrategy": "無料の文法eブックを提供し、日本語からの否定疑問文の直接翻訳を練習しました。",
                        "responseToIntervention": "レッスン後半で「some」と「any」の一貫した使用が見られるようになりました。",
                        "impacts": [
                            {
                                "skill": "Structural Accuracy",
                                "change": "+2"
                            },
                            {
                                "skill": "Vocabulary Precision",
                                "change": "+1"
                            }
                        ],
                        "content": "英語日記の宿題確認と文法チェックを行いました。\n英文法：\n無料の文法Eブックを使用\n- 現在形（be動詞）\n- 所有格\n- 冠詞\n- 指示代名詞（this, that, these, those）\n- some, any\n疑問文の作り方\n英語での時間の読み方について学習しました。",
                        "feedback": "本日のレッスンでは、英語日記の課題を完了させ、be動詞の現在形、所有格、冠詞、指示代名詞（this, that, these, those）、some/anyの使い方、疑問文の作り方を含む文法の復習を行いました。さらに、英語での時間の読み方と伝え方を学び、今後の練習用に無料の文法eブックをお渡ししました。",
                        "homework": "- 英語日記\n- 時計/時間の読み方の練習"
                    },
                    {
                        "date": "2026年4月21日",
                        "type": "Consultation",
                        "topic": "Speaking, Basic English",
                        "sessionSummary": "初回レッスンのサポートとスピーキング力の初期評価。快適な環境作りに注力しました。",
                        "observedStrength": "緊張していると話していましたが、非常に落ち着いており、自分の言葉で明確に表現できていました。積極的に参加しました。",
                        "currentFocusArea": "自信を築き、スピーキングに対する積極的な姿勢を活かすこと。",
                        "interventionStrategy": "リラックスした自己紹介から始まり、趣味についての軽いディスカッションを行いました。",
                        "responseToIntervention": "スピーキングへの自信（Conversational Confidence）が目に見えて向上し、自ら質問をするようになりました。",
                        "impacts": [
                            {
                                "skill": "Expression Fluidity",
                                "change": "+2"
                            },
                            {
                                "skill": "Conversational Confidence",
                                "change": "+2"
                            }
                        ],
                        "content": "初回レッスンサポートおよびスピーキング力の初期診断（コミュニケーション力・自信の把握）。当日は、講師の紹介および保護者様・生徒様との簡単な自己紹介からスタートし、英語での軽い会話（趣味やバックグラウンド等）を通して、リラックスした雰囲気づくりを行いました。その後は、講師が事前に準備した教材（プリント・テキスト）を使用し、計画に沿ってレッスンが進行されました。私は主にサポートとして同席し、レッスンの進行や生徒様の様子を確認しておりました。",
                        "feedback": "本日は初回レッスンということもあり、安心してご参加いただける環境づくりと、英語でのコミュニケーションの様子を確認させていただきました。生徒様は緊張されているとお話しされていましたが、実際には非常に落ち着いており、自分の言葉でしっかりと英語を使って表現されていました。積極的に会話に参加する姿勢も見られ、とても良いスタートとなりました。今後は、この強みを活かしながら、自信をさらに高めつつスピーキング力の向上を図ってまいります。",
                        "homework": "本レッスンの宿題は講師より案内しております。"
                    },
                    {
                        "date": "2026年4月12日",
                        "type": "体験レッスン",
                        "topic": "Speaking, Basic English",
                        "sessionSummary": "テキストを使用せず、初対面のコミュニケーションを想定した実践的なスピーキングレッスン。",
                        "observedStrength": "「英語は話すことで身につく」という本質を理解しており、アウトプットに注力する意欲があります。発音が非常に優れています。",
                        "currentFocusArea": "英語環境での「慣れ」と心理的安全性の構築。",
                        "interventionStrategy": "自然な言い回しや文構造についてリアルタイムでフィードバックし、実際の会話に使える語彙を関連付けました。",
                        "responseToIntervention": "日本語の直訳ではなく、提供された自然な言い回しを素早く吸収し適用しました。",
                        "impacts": [
                            {
                                "skill": "Vocabulary Precision",
                                "change": "+3"
                            },
                            {
                                "skill": "Expression Fluidity",
                                "change": "+1"
                            },
                            {
                                "skill": "Conversational Confidence",
                                "change": "+1"
                            }
                        ],
                        "content": "本レッスンではテキストは使用せず、実際の会話を想定したスピーキング中心の内容で進めました。初対面の相手と英語で会話をする場面を想定し、自己紹介や趣味、バックグラウンドなどについて自然な形でやり取りを行いながら、コミュニケーションの流れを重視した練習を行いました。また、会話の中で実際に使える表現やフレーズをその場で指摘・共有し、「どのような言い方を覚えておくと良いか」「どのような文の組み立てが自然か」といった点についても具体的にフィードバックを行いました。",
                        "feedback": "本日はスピーキングを中心とした実践的な英会話レッスンを行いました。生徒様は緊張されているとのことでしたが、実際には英語での自己表現力が非常に高く、会話もスムーズに進めることができていました。また、自ら積極的に発話する姿勢が見られ、とても良い学習姿勢であると感じております。特に印象的だったのは、「英語は話すことで身につく」という本質的な学習方法をすでに理解されており、アウトプットを重視した学びに取り組もうとされている点です。また、発音も非常に良く、日頃から英語の映画などに触れていることが良い形で反映されていました。現時点での課題は、英語力そのものというよりも、「慣れ」や「自信」といった心理的な部分にあると考えらるので、ペトラで自信を伸ばせていけたらと思います。",
                        "homework": "体験授業ですので、宿題は出しませんでした。"
                    }
                ],
                "nextPlan": [
                    {
                        "title": "1. 基礎文法",
                        "desc": "文章中の「a」「an」「the」の使い方のルールに焦点を当てます。"
                    },
                    {
                        "title": "2. 構造の練習",
                        "desc": "宿題の英語日記を一緒に確認し、文構造を添削します。"
                    },
                    {
                        "title": "3. 語彙の確認",
                        "desc": "「1000 Basic English Words」で間違えた単語の復習を行います。"
                    }
                ]
            }
        },
        "s3": {
            "id": "s3",
            "name": "Sarah Sugiyama",
            "course": "Advanced Speaking & Cultural Immersion",
            "target": "Maintain current high fluency, expand precise vocabulary, and practice practical dialogues.",
            "overallGrade": "A-",
            "coreIssue": "Refining native-level expression",
            "coreIssueDetail": "She already possesses extremely high skills in speaking, reading, and listening. The next challenge is constructing more precise sentences, acquiring advanced vocabulary (e.g., health/science fields), and understanding cultural nuances (e.g., Irish English).",
            "focusThisMonth": "Realistic school conversation scenarios and advanced vocabulary drills",
            "petraInsight": "Sarah currently performs strongest in spontaneous discussion environments. She has high expression fluidity, but we are working on stabilizing her advanced vocabulary precision. When placed into structured grammar-heavy exercises, her response speed decreases slightly.",
            "skills": [
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 94,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Extremely high descriptive ability",
                    "issue": "No major issues. She can speak clearly about her interests (e.g., track and field, science club).",
                    "improvement": "Continue exercises involving longer descriptions and making inferences."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 90,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Excellent",
                    "issue": "Can understand lessons conducted almost entirely in English without problems.",
                    "improvement": "Incorporate cultural nuances (Irish culture and English) to expand listening breadth."
                },
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 82,
                    "weight": 1,
                    "condition": "Further Practice Recommended",
                    "note": "Learning technical terms",
                    "issue": "Encountering new technical terms in health and science fields (e.g., 'suffers from', 'Cancer').",
                    "improvement": "Use 'English Vocabulary in Use' textbook drills to solidify new words."
                },
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 82,
                    "weight": 1,
                    "condition": "Progress Slowing",
                    "note": "Phase of increasing accuracy",
                    "warning": true,
                    "issue": "Needs to perfect the distinction between specific articles ('a', 'the', and no article) in complex sentences.",
                    "improvement": "Practice constructing accurate sentences during scenario practice using slides."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 90,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Very smooth output",
                    "issue": "Can produce paragraphs of speech easily, but occasionally loops the same sentence structures.",
                    "improvement": "Introduce complex subordinating conjunctions to vary paragraph structure."
                }
            ],
            "phases": [
                {
                    "title": "Phase 1",
                    "label": "Practical Dialogues (Conversation)",
                    "period": "Weeks 1–4",
                    "items": [
                        {
                            "title": "Office hours scenario (asking a teacher questions)",
                            "completed": true
                        },
                        {
                            "title": "Discussion about science homework",
                            "completed": true
                        },
                        {
                            "title": "Immersion in Irish culture",
                            "completed": false
                        }
                    ]
                },
                {
                    "title": "Phase 2",
                    "label": "Acquisition of Advanced Vocab",
                    "period": "Weeks 1–4",
                    "items": [
                        {
                            "title": "Health/medical-related vocabulary",
                            "completed": true
                        },
                        {
                            "title": "'English Vocabulary in Use' textbook",
                            "completed": false
                        },
                        {
                            "title": "Practice inferring and describing from paintings",
                            "completed": false
                        }
                    ]
                }
            ],
            "lessons": [
                {
                    "id": "s3_l2",
                    "date": "May 9, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Sports and Leisure - Vocabulary & Sentence Structure",
                    "rating": "Excellent",
                    "sessionSummary": "Learned new terms related to sports/leisure and played 'two truths and a lie'. Conducted dialogue practice around a football match scenario.",
                    "observedStrength": "Sarah demonstrates extremely strong conversational adaptability during spontaneous discussion tasks. She quickly understood and played the icebreaker game.",
                    "currentFocusArea": "Expanding vocabulary for specific cultural contexts (e.g., Irish English differences like 'match' vs 'game').",
                    "interventionStrategy": "Introduced advanced descriptive adjectives like 'nerve-wracking' and practiced sentence restructuring using varied verbs.",
                    "responseToIntervention": "Successfully applied the new verbs to describe her own recent track meet with varied sentence structures.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+2"
                        },
                        {
                            "skill": "Structural Accuracy",
                            "change": "+1"
                        }
                    ],
                    "content": "Greetings:\nAnything fun for Golden Week?\nAny weekend plans? (track meet tomorrow?)\n\nRead Lesson Objective\n\nGame:\n2 truths and a lie (have her read the instructions)\n\nMaking Observations:\nDescribe a picture of a sports match in detail\n\nDialogue Practice:\nSports match scenario (introduced another Irish name)\nHobbies scenario\n\nTextbook material:\nEnglish Vocabulary in Use (Unit 41- Sports and Leisure)\n\nChallenge:\nSpeaking about her own experiences using the vocab we learned (3 prompts)\n\nFor next class:\nBriefly looked over English Vocabulary in Use (Unit 42- Competitive Sport)",
                    "feedback": "Sarah did a great job with our lesson on Saturday night! Our main objective was to learn and practice new terms related to sports and leisure.\n\nWe began the lesson with a warm-up game, called \"two truths and a lie\". This is a very popular icebreaker game among English speaking students in America and Europe. I had her read the instructions so that she would be able to explain them if she ever wants to play this game with someone who is unfamiliar with it. Sarah understood the directions, and played the game well! It was a fun way to start our lesson.\n\nThen, I had Sarah free-speak about her observations about an image. She described it as \"a soccer game\" (+more details). While that is completely correct, I let her know that in Ireland, soccer is called \"football\", and games are called \"matches\".\n\nNext, we used 2 scenarios for dialogue practice. The first one was a conversation between two young girls regarding their football match that they won. I introduced another Irish name that is a little bit hard to pronounce (Saoirse - \"ceer-shuh\"). There were some new words that I want Sarah to review and practice using:\n- \"Nerve-wracking\" (adjective): to describe something that causes anxiety or nervousness, something that is high-pressure\n- \"Same here\": me too (「私も！」）\n- \"Pulling a muscle\": an injury of your muscles when you pull or tear them / 「肉離れ」\n\nNext, we reviewed sports vocabulary words that Sarah mostly knew, then learned verbs that match those words, and practiced structuring sentences using them. (English Vocabulary in Use, Unit 41- Sports and Leisure, pp. 88-89). We did all of the drills for that unit, and Sarah improved her sentence structure/grammar for describing sports and leisure activities. (Example: I did a bit of swimming in the summer VS. I swam in the summer VS. I go swimming in the summer)\n- new verbs: \"To play\", \"To do\", \"To race\", \"To run\" (\"To PLAY\" is usually for a sport with a ball!)\n\nAfter that, as a review, I had Sarah speak about her own experiences using the vocabulary that we used (3 prompts). Finally, we reviewed the textbook material for our next class.",
                    "homework": "Exercise 41.4 from English Vocabulary in Use (Unit 41- Sports and Leisure)\n\nSome new words that I want Sarah to review, and practice using:\n1. \"Nerve-wracking\" (adjective): to describe something that causes anxiety or nervousness, something that is high-pressure\n2. \"Same here\": me too (「私も！」）\n3. \"Pulling a muscle\": an injury of your muscles when you pull or tear them / 「肉離れ」"
                },
                {
                    "id": "s3_l1",
                    "date": "Apr 26, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Trial",
                    "topic": "Assessment and Vocabulary Introduction",
                    "rating": "Excellent",
                    "sessionSummary": "Assessment of speaking, reading, and listening through interactive slides, 'would you rather', and painting observation.",
                    "observedStrength": "Sarah spoke fluently and at length about her club activities. Her descriptive ability is exceptionally high.",
                    "currentFocusArea": "Learning specific technical nouns (e.g., medical conditions) and perfecting article usage.",
                    "interventionStrategy": "Utilized visual inference exercises (paintings) to elicit advanced descriptive vocabulary in real-time.",
                    "responseToIntervention": "She successfully inferred complex situations and absorbed the new technical vocabulary enthusiastically.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+3"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+1"
                        }
                    ],
                    "content": "Introductions - name, where you are from, and hobbies\nWarm up game - \"would you rather\"\nDialogue practice: 1. Science homework scenario and 2. office hours scenario (I made slides)\nObservations - speaking about thoughts and observations based on a painting. I had Sarah describe what she saw, and also making inferences.\nTextbook vocabulary and drills - English Vocabulary in Use, Unit 20 (Health): pg. 46-47\nSpeaking confidence: I had Sarah speak about an event or topic. She spoke about her club activities at school, including track and field and Earth Sciences Club.\nRecap of new terms learned: \"she/he suffers from ___\", proper nouns like \"Band-aid\" and \"Cancer\", using \"a\", \"the\", or none in sentences, different types of doctors.",
                    "feedback": "I had a very pleasant time meeting Sarah! I noticed that she is very skilled in speaking, listening, and reading. We did not work on any writing today. She demonstrated advanced vocabulary and overall comprehension, and her pronunciation was pretty solid. Today, I wanted to get to know Sarah and assess her comfort level with English. The lesson was conducted almost completely English, and Sarah showed excellent performance.\n\nSLIDES: We started with introductions, including our name, where we are from, and our hobbies. Next, we played a warm up game with fun questions, called \"would you rather\". We also worked on 2 dialogue practice scenarios to get Sarah comfortable with speaking. I also had Sarah look at a painting, and make comments about her observations, opinions, and inferences.\n\nTEXTBOOK: Next, we worked on 2 textbook pages that consisted of vocabulary and drills. The drills allowed Sarah to form precise sentences as well as descriptively speaking about personal experiences.\n\nSPEAKING: Finally, I prompted Sarah to speak about an event or something fun. I wanted to encourage her to speak descriptively for as long as she could. Sarah did amazing on this exercise, and spoke clearly about her after school activities, such as track and field and Earth sciences club.\n\nAt the end, we reviewed new terms that Sarah learned, and I got some input about our lesson structure. Sarah said that she enjoyed the slideshow activities that we did, as well as the textbook material. The textbook used today seemed easy for her, but she told me that it was helpful, as there was some new material she didn't know. I would like to keep using this textbook to use for ~30 mins(or more) of the lesson. She seemed to really enjoy the slideshow I made. Besides the game and picture activities, I created realistic school scenarios for dialogue practice, while sprinkling a bit of Irish culture and Irish English (since it's a bit different than U.S.).\n\nI'm looking forward to continue working with Sarah! Thank you!",
                    "homework": "No specific homework for this lesson."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Interactive Slideshow",
                    "desc": "Continue using custom slides incorporating 'Would you rather' and painting inference activities."
                },
                {
                    "title": "2. Textbook Drills",
                    "desc": "Work on 'English Vocabulary in Use' for about 30 minutes to learn new content."
                },
                {
                    "title": "3. Cultural Immersion",
                    "desc": "Continue incorporating Irish culture and Irish English expressions into conversations and realistic school scenarios."
                }
            ],
            "ja": {
                "course": "高度なスピーキング＆異文化理解コース",
                "target": "現在の高い流暢さを維持し、より正確な語彙を増やし、実践的な対話練習を行います。",
                "coreIssue": "ネイティブレベルの表現力の研鑽",
                "coreIssueDetail": "スピーキング、リーディング、リスニングにおいてはすでに非常に高いスキルを持っています。今後の課題は、より正確な文章の構築、高度な語彙（健康/科学分野など）の習得、そして文化的なニュアンス（アイルランド英語など）の理解です。",
                "focusThisMonth": "学校でのリアルな会話シナリオと高度な語彙ドリル",
                "petraInsight": "Sarahさんは現在、自発的なディスカッションにおいて最も高いパフォーマンスを発揮しています。表現の流暢さは非常に高いですが、高度な語彙の正確さを安定させることに注力しています。文法に重点を置いた課題では、反応速度がわずかに低下することが見られます。",
                "skills": [
                    {
                        "name": "Conversational Confidence",
                        "note": "描写力が非常に高いです",
                        "issue": "大きな課題はありません。自分の興味のあること（陸上競技や科学クラブなど）について明確に話すことができます。",
                        "improvement": "引き続き、長めの描写を伴うスピーキングや、推測を行うエクササイズを行います。"
                    },
                    {
                        "name": "Listening Adaptability",
                        "note": "Excellent",
                        "issue": "ほぼすべて英語で行われるレッスンでも問題なく理解できています。",
                        "improvement": "リスニングの幅を広げるために、文化的なニュアンス（アイルランドの文化や英語）を取り入れます。"
                    },
                    {
                        "name": "Vocabulary Precision",
                        "note": "専門用語を学習中",
                        "issue": "健康や科学分野の新しい専門用語（例: 'suffers from', 'Cancer'）に出会っています。",
                        "improvement": "「English Vocabulary in Use」のテキストドリルを使用し、新しい単語を確実におさえます。"
                    },
                    {
                        "name": "Structural Accuracy",
                        "note": "正確さを高める段階",
                        "issue": "複雑な文章において、特定の冠詞（'a' と 'the' と 無冠詞）の使い分けを完璧にする必要があります。",
                        "improvement": "スライドを用いたシナリオ練習中に、正確な文章を作る練習をします。"
                    },
                    {
                        "name": "Expression Fluidity",
                        "note": "非常にスムーズなアウトプット",
                        "issue": "パラグラフ単位での発話は得意ですが、時に同じ文構造を繰り返す傾向があります。",
                        "improvement": "パラグラフ構造に変化を持たせるため、複雑な従属接続詞を導入します。"
                    }
                ],
                "phases": [
                    {
                        "label": "実践的なダイアログ（会話）",
                        "period": "第1〜4週",
                        "items": [
                            {
                                "title": "オフィスアワー（先生への質問）のシナリオ",
                                "completed": true
                            },
                            {
                                "title": "理科の宿題についてのディスカッション",
                                "completed": true
                            },
                            {
                                "title": "アイルランド文化への没入",
                                "completed": false
                            }
                        ]
                    },
                    {
                        "label": "高度な語彙力の習得",
                        "period": "第1〜4週",
                        "items": [
                            {
                                "title": "健康/医療関連の語彙",
                                "completed": true
                            },
                            {
                                "title": "「English Vocabulary in Use」テキスト",
                                "completed": false
                            },
                            {
                                "title": "絵画から推測して描写する練習",
                                "completed": false
                            }
                        ]
                    }
                ],
                "lessons": [
                    {
                        "date": "2026年5月9日",
                        "type": "通常レッスン",
                        "topic": "スポーツとレジャー - 語彙と文構造",
                        "sessionSummary": "スポーツやレジャーに関する新しい単語を学び、「2つの真実と1つの嘘」ゲームを行いました。フットボールの試合を想定したダイアログ練習も実施しました。",
                        "observedStrength": "Sarahさんは自発的なディスカッション課題において、非常に高い適応力を示しています。アイスブレイクのゲームもすぐに理解し、楽しんで参加していました。",
                        "currentFocusArea": "特定の文化的背景に合わせた語彙の拡張（例：アイルランド英語における「match」と「game」の違いなど）。",
                        "interventionStrategy": "「nerve-wracking」などの高度な描写用形容詞を導入し、様々な動詞を使った文章の再構築を練習しました。",
                        "responseToIntervention": "新しく学んだ動詞を、自分の最近の陸上大会の描写にうまく応用し、文構造にも変化が見られました。",
                        "impacts": [
                            {
                                "skill": "Vocabulary Precision",
                                "change": "+2"
                            },
                            {
                                "skill": "Structural Accuracy",
                                "change": "+1"
                            }
                        ],
                        "content": "挨拶：\nゴールデンウィークは何か楽しいことありましたか？\n週末の予定は？（明日は陸上の大会？）\n\nレッスンの目標を確認\n\nゲーム：\n2つの真実と1つの嘘（ルールを読んでもらいました）\n\n観察：\nスポーツの試合の写真を詳しく描写する\n\nダイアログ練習：\nスポーツの試合のシナリオ（別のアイルランドの名前を紹介）\n趣味のシナリオ\n\nテキスト教材：\nEnglish Vocabulary in Use (Unit 41- Sports and Leisure)\n\nチャレンジ：\n今回学んだ語彙を使って自分の経験を話す（3つのお題）\n\n次回に向けて：\nEnglish Vocabulary in Use (Unit 42- Competitive Sport) を少しだけ確認",
                        "feedback": "土曜日の夜のレッスン、サラはとてもよく頑張りました！今回の主な目標は、スポーツやレジャーに関する新しい単語を学び、練習することでした。\n\nまず、「2つの真実と1つの嘘」というウォーミングアップゲームから始めました。これは、アメリカやヨーロッパの英語を話す学生の間でとても人気のあるアイスブレイクです。このゲームを知らない人といつか遊ぶ時にルールを説明できるように、サラに指示文を読んでもらいました。彼女はルールを理解し、上手にプレイできました！レッスンの楽しいスタートになりました。\n\n次に、写真についての気づきを自由に話してもらいました。彼女は「サッカーの試合」（＋詳細）と描写しました。全くその通りなのですが、アイルランドではサッカーを「フットボール（football）」、試合を「マッチ（match）」と呼ぶことを伝えました。\n\n続いて、ダイアログ練習のために2つのシナリオを使いました。最初のシナリオは、試合に勝った2人の女の子のフットボールの試合に関する会話です。少し発音が難しいアイルランドの名前（Saoirse - シアーシャ）をもう一つ紹介しました。また、サラに復習して使ってみてほしい新しい単語がいくつかありました。\n- \"Nerve-wracking\"（形容詞）：不安や緊張を引き起こすようなこと、プレッシャーの高いこと\n- \"Same here\"：私も（me too）\n- \"Pulling a muscle\"：筋肉を引っ張ったり裂いたりした時のケガ / 肉離れ\n\n次に、サラがほとんど知っていたスポーツの語彙を復習し、それらの単語に合う動詞を学び、それらを使って文章を組み立てる練習をしました。（English Vocabulary in Use, Unit 41- Sports and Leisure, pp. 88-89）。そのユニットのドリルをすべて行い、スポーツやレジャー活動を描写するための文構造や文法が向上しました。（例：I did a bit of swimming in the summer VS. I swam in the summer VS. I go swimming in the summer）\n- 新しい動詞: \"To play\", \"To do\", \"To race\", \"To run\"（「To PLAY」は通常、ボールを使うスポーツに使います！）\n\nその後、復習として、使った語彙を用いて自分の経験について話してもらいました（3つのお題）。最後に、次回のクラスに向けたテキスト教材の確認を行いました。",
                        "homework": "English Vocabulary in Use（Unit 41 - Sports and Leisure）のExercise 41.4\n\n復習して実際に使う練習をしてほしい新しい単語：\n1. \"Nerve-wracking\"（形容詞）：プレッシャーの高い、緊張するような\n2. \"Same here\"：私も！\n3. \"Pulling a muscle\"：肉離れ"
                    },
                    {
                        "date": "2026年4月26日",
                        "type": "体験レッスン",
                        "topic": "アセスメントと語彙の導入",
                        "sessionSummary": "インタラクティブなスライド、「究極の選択」、絵画の観察を通じて、スピーキング、リーディング、リスニングの評価を行いました。",
                        "observedStrength": "Sarahさんはクラブ活動について流暢かつ詳細に話してくれました。彼女の描写力は非常に優れています。",
                        "currentFocusArea": "特定の専門用語（病名など）の学習と、冠詞の使い分けの完璧化。",
                        "interventionStrategy": "絵画を使った視覚的な推測エクササイズを用いて、リアルタイムで高度な描写語彙を引き出すようにしました。",
                        "responseToIntervention": "複雑な状況を見事に推測し、新しい専門用語も熱心に吸収していました。",
                        "impacts": [
                            {
                                "skill": "Vocabulary Precision",
                                "change": "+3"
                            },
                            {
                                "skill": "Conversational Confidence",
                                "change": "+1"
                            }
                        ],
                        "content": "自己紹介 - 名前、出身地、趣味\nウォーミングアップゲーム - 「Would you rather（究極の選択）」\nダイアログ練習：1. 理科の宿題のシナリオ、2. オフィスアワーのシナリオ（作成したスライドを使用）\n観察 - 絵画に基づいた考えや気づきについて話す。サラに見たものを説明してもらい、また推測も行ってもらいました。\nテキストの語彙とドリル - English Vocabulary in Use, Unit 20 (Health): pp. 46-47\nスピーキングの自信：サラにある出来事やトピックについて話してもらいました。学校でのクラブ活動（陸上競技や地学クラブなど）について話してくれました。\n学んだ新しい用語の復習：\"she/he suffers from ___\"、\"Band-aid\"や\"Cancer\"などの固有名詞、文章における \"a\" や \"the\" の使用または無冠詞、様々な種類の医師。",
                        "feedback": "サラとお会いできて、とても楽しい時間を過ごせました！スピーキング、リスニング、リーディングにおいて非常に高いスキルを持っていると感じました。今回はライティングには取り組みませんでした。彼女は高度な語彙力と全体的な理解力を示し、発音もとてもしっかりしていました。本日はサラのことを知り、彼女がどれくらい英語に慣れているかを評価したいと考えていました。レッスンはほぼすべて英語で行われましたが、サラは素晴らしいパフォーマンスを見せてくれました。\n\nスライド：まず、名前、出身地、趣味などの自己紹介から始めました。次に、「Would you rather」という楽しい質問を使ったウォーミングアップゲームを行いました。また、サラがスピーキングに慣れるよう、2つのダイアログ練習のシナリオにも取り組みました。さらに、絵画を見てもらい、そこからの気づきや意見、推測についてコメントしてもらいました。\n\nテキスト：次に、語彙とドリルからなるテキストの2ページに取り組みました。ドリルを通じて、サラは正確な文章を作り、個人的な経験について描写的に話すことができました。\n\nスピーキング：最後に、出来事や楽しかったことについてサラに話してもらいました。できるだけ長く、描写的に話すことを促しました。サラはこのエクササイズを見事にこなし、陸上競技や地学クラブなど、放課後の活動について明確に話してくれました。\n\n最後に、サラが学んだ新しい用語を復習し、レッスンの構成について少し意見をもらいました。サラは、私たちが行ったスライドショーのアクティビティとテキスト教材を楽しんでくれたようです。今日使用したテキストは彼女にとって簡単に感じられたようですが、知らない内容もあったため役に立ったと言ってくれました。今後もこのテキストをレッスンの約30分（またはそれ以上）で使用し続けたいと思います。彼女は私が作成したスライドショーを本当に楽しんでくれたようです。ゲームや写真を使ったアクティビティの他にも、実践的な学校のシナリオを作成してダイアログ練習を行い、同時にアイルランドの文化やアイルランド英語（アメリカとは少し異なるため）を少し取り入れました。\n\n今後もサラと一緒に学んでいくのを楽しみにしています！ありがとうございました！",
                        "homework": "今回のレッスンでは特定の宿題はありません。"
                    }
                ],
                "nextPlan": [
                    {
                        "title": "1. インタラクティブなスライドショー",
                        "desc": "「Would you rather」や絵画の推測アクティビティを取り入れたカスタムスライドを引き続き使用します。"
                    },
                    {
                        "title": "2. テキストドリル",
                        "desc": "新しい内容を学習するために、「English Vocabulary in Use」に約30分間取り組みます。"
                    },
                    {
                        "title": "3. 異文化理解",
                        "desc": "会話やリアルな学校のシナリオに、アイルランド文化やアイルランド英語の表現を引き続き取り入れていきます。"
                    }
                ]
            }
        }
    },
    "resources": [
        {
            "id": "r7",
            "name": "4000_Essential_English_Words_5_LV4.CORE.ACTIVE.COLOR.HW.WORD.TEST.READ.WRITE.LISTEN",
            "display": "4000 Essential English Words 5",
            "category": "Vocabulary",
            "assignedTo": [
                "s1"
            ],
            "link": "https://drive.google.com/file/d/1WQAkQGmus8ALK63Akz_B8RYdahRy8Lrv/view?usp=drivesdk"
        },
        {
            "id": "r8",
            "name": "English_Collocations_in_Use_Advanced_LV4.CORE.ACTIVE.HW.WORD.COLOR.READ.WRITE.LISTEN",
            "display": "English Collocations In Use Advanced",
            "category": "Business",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1HJ5w-ogaIp0bfBwZjSqO9QykZywocmo5/view?usp=drivesdk"
        },
        {
            "id": "r9",
            "name": "English_for_Everyone_Business_English_LV2.CORE.ACTIVE.COLOR.HW.WORD.TEST.COLOR.SPEAK.WRITE.LISTEN",
            "display": "English For Everyone Business English",
            "category": "Business",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1xTfrXOYcOAfhpNLQfdsyqVNLv7P2Hho4/view?usp=drivesdk"
        },
        {
            "id": "r10",
            "name": "Business_English_Lesson_Template_Guide_LV1.CORE",
            "display": "Business English Lesson Template Guide",
            "category": "Business",
            "assignedTo": [],
            "link": "https://docs.google.com/document/d/1EcLKARs5UYUU0yI66nfzr7gB-v9O78KTiLzeeEPbbU4/edit?usp=drivesdk"
        },
        {
            "id": "r11",
            "name": "Speakout_Advanced_Students_Book_LV5.CORE.READ.WRITE.LISTEN",
            "display": "Speakout Advanced Students Book",
            "category": "Business",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1RBhkegJa1EdfB65oiPfIZ08tsTQ9ynRi/view?usp=drivesdk"
        },
        {
            "id": "r12",
            "name": "Business_Partner_Coursebook_B2_LV4.CORE",
            "display": "Business Partner Coursebook B2",
            "category": "Business",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1O-AIV7C2M2oWjIH92vZYeRwNerMvPfJB/view?usp=drivesdk"
        },
        {
            "id": "r13",
            "name": "Free_English_Grammar_eBook_Beginner_LV1.CORE.COLOR",
            "display": "Free English Grammar eBook Beginner",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1JIUSg0IgKt4FKu61JVEgcm8s_31NYnsP/view?usp=drivesdk"
        },
        {
            "id": "r14",
            "name": "Everyday_Conversations_LV2.CORE.ACTIVE.COLOR.SPEAK.LISTEN",
            "display": "Everyday Conversations",
            "category": "Basic English",
            "assignedTo": [
                "s3"
            ],
            "link": "https://drive.google.com/file/d/1NAnHwWoqyzQevUPzmzwwoJVeDI-UD_mb/view?usp=drivesdk"
        },
        {
            "id": "r15",
            "name": "Basic_English_Grammar_LV1.CORE.ACTIVE.COLOR.HW.WORD.TEST.SPEAK.WRITE.LISTEN",
            "display": "Basic English Grammar",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1Bnty3KNlzekfbzgYOSN-PHVKjTM1u-l8/view?usp=drivesdk"
        },
        {
            "id": "r16",
            "name": "Practice_Makes_Perfect_Complete_English_All_in_One_for_ESL_Learners_LV3.CORE.ACTIVE.COLOR.HW.READ.SPEAK.WRITE.LISTEN",
            "display": "Practice Makes Perfect Complete English",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/12GFYx8pIkYUAZo2cp-lGgL-qIXZUV4nG/view?usp=drivesdk"
        },
        {
            "id": "r17",
            "name": "English_for_Everyone_Level1_Beginner_Course_Book_LV1.CORE.ACTIVE.COLOR.HW.WORD.SPEAK.WRITE.LISTEN",
            "display": "English For Everyone Level 1 Beginner",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1S2Jn0Rb7QY9QaHwuO0oT7xbA64wfFm9g/view?usp=drivesdk"
        },
        {
            "id": "r18",
            "name": "English_Grammar_in_Use_LV3.CORE.ACTIVE.COLOR.HW.WORD.TEST.READ.WRITE.LISTEN",
            "display": "English Grammar In Use",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/171NP-XWsv_nS6oLqM3Hp04y-RXb98kaN/view?usp=drivesdk"
        },
        {
            "id": "r19",
            "name": "Rosetta_Stone_English_American_Student_Workbook_LV1.ACTIVE.HW.WORD.TEST.READ.WRITE",
            "display": "Rosetta Stone English American Workbook",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1mWQzpsP0vcmWBiJpZoxtLLHEUgLwnfwZ/view?usp=drivesdk"
        },
        {
            "id": "r20",
            "name": "New_Headway_Beginner_Student_Book_LV1.CORE.ACTIVE.COLOR.SPEAK.WRITE.LISTEN",
            "display": "New Headway Beginner Student Book",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1cZ9cGwM7D4dWspwslEVyigc3-DHmIFFH/view?usp=drivesdk"
        },
        {
            "id": "r21",
            "name": "Speakout_Advanced_Students_Book_LV5.CORE.ACTIVE.COLOR.WORD.SPEAK.WRITE.LISTEN",
            "display": "Speakout Advanced Students Book",
            "category": "Basic English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1TT8no82mHttMizKo5RelMAsTFCrYCRYj/view?usp=drivesdk"
        },
        {
            "id": "r22",
            "name": "Basic_English_Grammar_A1_LV1.CORE.ACTIVE.COLOR.HW.WORD.TEST.SPEAK.WRITE.LISTEN",
            "display": "Basic English Grammar A1",
            "category": "A1 English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1nk33oFAU23CWh0vL_TNqQg4aFytmop1j/view?usp=drivesdk"
        },
        {
            "id": "r23",
            "name": "Cambridge_Assessment_English_LV1.CORE.ACTIVE.WORD.COLOR",
            "display": "Cambridge Assessment English",
            "category": "Kids English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1Me06Z9s0tCX1L_OiYMgQnCyRz5-qu8PU/view?usp=drivesdk"
        },
        {
            "id": "r24",
            "name": "My_First_English_Book_LV1.CORE.ACTIVE",
            "display": "My First English Book",
            "category": "Kids English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/17KZ8lKnKDeT_O2caHmFreZ7r9or2Zbo1/view?usp=drivesdk"
        },
        {
            "id": "r25",
            "name": "Smart_Phonics_3_LV1.CORE.ACTIVE",
            "display": "Smart Phonics 3",
            "category": "Kids English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/10pIkdznDGk0sDIEVpxzbN10NtATHG1Oo/view?usp=drivesdk"
        },
        {
            "id": "r26",
            "name": "RosettaStone_English_LV4.HW.TEST",
            "display": "RosettaStone English",
            "category": "Kids English",
            "assignedTo": [],
            "link": "https://drive.google.com/file/d/1vyCWm0pLi2CiVhvHnP-UJ0BQ6netDPc5/view?usp=drivesdk"
        },
        {
            "id": "r27",
            "name": "English_Vocabulary_in_Use_Unit_41",
            "display": "English Vocabulary in Use (Unit 41)",
            "category": "Vocabulary",
            "assignedTo": [
                "s3"
            ],
            "link": "#"
        },
        {
            "id": "r28",
            "name": "English_Vocabulary_in_Use_Unit_42",
            "display": "English Vocabulary in Use (Unit 42)",
            "category": "Vocabulary",
            "assignedTo": [
                "s3"
            ],
            "link": "#"
        },
        {
            "id": "r29",
            "name": "Eiken_official_paper_pre-1_3",
            "display": "Eiken official paper pre-1 (3)",
            "category": "Exam Prep",
            "assignedTo": [
                "s1"
            ],
            "link": "#"
        }
    ]
};
