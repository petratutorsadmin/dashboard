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
                    "id": "l_yutaka0515",
                    "date": "May 15, 2026",
                    "tutor": "Yutaka",
                    "type": "Regular",
                    "topic": "Eiken Pre-1 reading and summarization",
                    "rating": "Excellent",
                    "sessionSummary": "Today we focused on Eiken Pre-1 reading comprehension and summary skills. Tadashi showed good improvement in identifying important information from reading passages, especially after applying strategies learned in previous lessons. A particularly positive point was his ability to summarise long paragraphs into short key ideas using bullet points, which is an important foundation for future summary writing and reading accuracy. He also participated well in conversation practice when discussing familiar topics such as baseball and school activities.",
                    "observedStrength": "Tadashi initially needed some prompting, but after guidance he was able to identify many correct answers independently and showed good intuitive understanding of the passages. He also remembered and applied strategies taught in the previous lesson, especially the “one question per paragraph” reading technique. His summarisation ability was especially promising, as he could identify important information and reduce paragraphs into concise key points effectively.",
                    "currentFocusArea": "Student responds very well to structured reading guidance and paragraph-by-paragraph analysis. Summary compression training appears highly effective for him and should continue regularly.",
                    "interventionStrategy": "Practice compressing each paragraph into short bullet points to build summarisation skills (summary structure training). Use familiar topics for conversation practice to build natural speaking ability.",
                    "responseToIntervention": "Speaking ability was more natural when discussing familiar interests. Good retention of previous lesson strategies.",
                    "impacts": [
                        {
                            "skill": "Listening Adaptability",
                            "change": "+2"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+1"
                        },
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        }
                    ],
                    "content": "Worked on Eiken Pre-1 reading questions from p.7 and p.10-11. Tadashi initially needed some prompting, but after guidance he was able to identify many correct answers independently and showed good intuitive understanding of the passages. He also remembered and applied strategies taught in the previous lesson, especially the “one question per paragraph” reading technique.\n\nWe also had short conversation practice about his interests and baseball activities, including Giants Academy, school baseball, and Richard Sunakawa. He was comfortable speaking about familiar topics and responded naturally.\n\nAdditionally, we practiced summary structure training using the “Haymarket Affair” reading passage from an Eiken Pre-1 exam. Although the original task was not a summarisation question, the student practiced compressing each paragraph into short bullet points to build summarisation skills.\n\nExamples included:\n- Workers protested after police killed strikers\n- Laws existed but were not enforced well\n- Newspapers increased public anger\n- Event became symbol for labor rights\n\nThe goal was to strengthen:\n- identifying core ideas\n- concise information compression\n- paragraph-by-paragraph understanding",
                    "feedback": "Today we focused on Eiken Pre-1 reading comprehension and summary skills. Tadashi showed good improvement in identifying important information from reading passages, especially after applying strategies learned in previous lessons. A particularly positive point was his ability to summarise long paragraphs into short key ideas using bullet points, which is an important foundation for future summary writing and reading accuracy. He also participated well in conversation practice when discussing familiar topics such as baseball and school activities. Good overall performance. Tadashi showed stronger reading comprehension once given structure and prompting, and demonstrated good retention of previous lesson strategies. His summarisation ability was especially promising, as he could identify important information and reduce paragraphs into concise key points effectively. Speaking ability was more natural when discussing familiar interests.",
                    "homework": "Review and memorise the following vocabulary words:\n\n- bilingual\n- fashionable\n- participant\n- surprised\n- foreign\n- tense\n\nIn addition, to finish the bullet-point summarisation of the Haymarket Affair Pre-1 Reading."
                },
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
                },
                {
                    "id": "l_s1_6_1780370928719_836",
                    "date": "May 15, 2026",
                    "tutor": "Yutaka Takaku",
                    "type": "Regular",
                    "topic": "Lesson",
                    "rating": "Excellent",
                    "sessionSummary": "Worked on Eiken Pre-1 reading questions from p.7 and p.10-11. Tadashi initially needed some prompting, but after guidance he was able to identify many correct answers independently and showed good intuitive understanding of the passages. He also remembered and applied strategies taught in the previous lesson, especially the “one question per paragraph” reading technique.\n\nWe also had short conversation practice about his interests and baseball activities, including Giants Academy, school baseball, and Richard Sunakawa. He was comfortable speaking about familiar topics and responded naturally.\n\nAdditionally, we practiced summary structure training using the “Haymarket Affair” reading passage from an Eiken Pre-1 exam. Although the original task was not a summarisation question, the student practiced compressing each paragraph into short bullet points to build summarisation skills.\n\nExamples included:\n- Workers protested after police killed strikers\n- Laws existed but were not enforced well\n- Newspapers increased public anger\n- Event became symbol for labor rights\n\nThe goal was to strengthen:\n- identifying core ideas\n- concise information compression\n- paragraph-by-paragraph understanding\n\nGood overall performance. Tadashi showed stronger reading comprehension once given structure and prompting, and demonstrated good retention of previous lesson strategies. His summarisation ability was especially promising, as he could identify important information and reduce paragraphs into concise key points effectively. Speaking ability was more natural when discussing familiar interests.",
                    "observedStrength": "Review and memorise the following vocabulary words:\n\n- bilingual\n- fashionable\n- participant\n- surprised\n- foreign\n- tense\n\nIn addition, to finish the bullet-point summarisation of the Haymarket Affair Pre-1 Reading.",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Today we focused on Eiken Pre-1 reading comprehension and summary skills. Tadashi showed good improvement in identifying important information from reading passages, especially after applying strategies learned in previous lessons. A particularly positive point was his ability to summarise long paragraphs into short key ideas using bullet points, which is an important foundation for future summary writing and reading accuracy. He also participated well in conversation practice when discussing familiar topics such as baseball and school activities.",
                    "homework": ""
                },
                {
                    "id": "l_s1_7_1780370928719_175",
                    "date": "May 21, 2026",
                    "tutor": "Alice Williams",
                    "type": "Regular",
                    "topic": "Reading comprehension/ answer writing ",
                    "rating": "Good",
                    "sessionSummary": "Today we worked on an Eiken style reading about public parks and cities. We practised reading for the main idea, finding information in the text, and answering comprehension questions with evidence. We also learnt some new vocabulary related to the environment and city life, and practiced giving opinions with reasons using full sentences.",
                    "observedStrength": "Spelling Practice. Learn the correct spelling and definitions for the following words.\n\n- Pollution\n- Housing \n- Consequence \n- Significant\n- Controversial \n- Perspective \n- Emphasize ",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "He still needs support with turning bullet points into full sentences and developing his ideas in more detail. We are also continuing to work on organising paragraphs more clearly and improving how he explains and links his points together. At times, he needs extra time to structure his thoughts and express them clearly in writing.",
                    "homework": "IMG_1384.HEIC (https://airtable.com/appAdxLhXqRtaq618/tblyMMtwV94h0wEjp/recW0WPkJhJpyjPjn/fldHwB1RcWWdSX33v/attLhSjL6ngLO85BS), IMG_1383.heic (https://airtable.com/appAdxLhXqRtaq618/tblyMMtwV94h0wEjp/recW0WPkJhJpyjPjn/fldHwB1RcWWdSX33v/att7CiVulDIYpzgJa), IMG_1382.HEIC (https://airtable.com/appAdxLhXqRtaq618/tblyMMtwV94h0wEjp/recW0WPkJhJpyjPjn/fldHwB1RcWWdSX33v/atti9JJcO1hyYOfyG)"
                },
                {
                    "id": "l_s1_8_1780370971415_825",
                    "date": "May 15, 2026",
                    "tutor": "Yutaka Takaku",
                    "type": "Regular",
                    "topic": "Lesson",
                    "rating": "Excellent",
                    "sessionSummary": "Worked on Eiken Pre-1 reading questions from p.7 and p.10-11. Tadashi initially needed some prompting, but after guidance he was able to identify many correct answers independently and showed good intuitive understanding of the passages. He also remembered and applied strategies taught in the previous lesson, especially the “one question per paragraph” reading technique.\n\nWe also had short conversation practice about his interests and baseball activities, including Giants Academy, school baseball, and Richard Sunakawa. He was comfortable speaking about familiar topics and responded naturally.\n\nAdditionally, we practiced summary structure training using the “Haymarket Affair” reading passage from an Eiken Pre-1 exam. Although the original task was not a summarisation question, the student practiced compressing each paragraph into short bullet points to build summarisation skills.\n\nExamples included:\n- Workers protested after police killed strikers\n- Laws existed but were not enforced well\n- Newspapers increased public anger\n- Event became symbol for labor rights\n\nThe goal was to strengthen:\n- identifying core ideas\n- concise information compression\n- paragraph-by-paragraph understanding\n\nGood overall performance. Tadashi showed stronger reading comprehension once given structure and prompting, and demonstrated good retention of previous lesson strategies. His summarisation ability was especially promising, as he could identify important information and reduce paragraphs into concise key points effectively. Speaking ability was more natural when discussing familiar interests.",
                    "observedStrength": "Review and memorise the following vocabulary words:\n\n- bilingual\n- fashionable\n- participant\n- surprised\n- foreign\n- tense\n\nIn addition, to finish the bullet-point summarisation of the Haymarket Affair Pre-1 Reading.",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Today we focused on Eiken Pre-1 reading comprehension and summary skills. Tadashi showed good improvement in identifying important information from reading passages, especially after applying strategies learned in previous lessons. A particularly positive point was his ability to summarise long paragraphs into short key ideas using bullet points, which is an important foundation for future summary writing and reading accuracy. He also participated well in conversation practice when discussing familiar topics such as baseball and school activities.",
                    "homework": ""
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
                },
                {
                    "id": "l_s2_4_1780370846966_758",
                    "date": "Apr 21, 2026",
                    "tutor": "Dayun Suh",
                    "type": "Trial",
                    "topic": "English speaking, reading, and grammar practice. ",
                    "rating": "Good",
                    "sessionSummary": "Discovering the student's English level and the contents she would like to learn for her final goal, which is to study abroad. \n- Basic Self Introduction(Name, birthday, age, where from, etc.)\n- Location vocabulary (Unit 1)\n- Reading a dialogue and solving related questions (Textbook excerpt, dialogue unit 1)",
                    "observedStrength": "Writing a diary entry: she enjoys keeping a diary, so this task lets her practice English in a format she already likes, while also getting insight into her current writing level.",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "English Speaking, Reading & Grammar Practice\nIn today's lesson, we focused on assessing your daughter's current English level and understanding her learning goals as she prepares to study abroad.\nTopics covered:\nBasic self-introduction (name, birthday, age, hometown, etc.)\nLocation vocabulary (Unit 1)\nReading a dialogue and solving related questions (Textbook Unit 1)",
                    "homework": ""
                },
                {
                    "id": "l_s2_5_1780370898409_135",
                    "date": "May 19, 2026",
                    "tutor": "Dayun Suh",
                    "type": "Regular",
                    "topic": "English Language",
                    "rating": "Good",
                    "sessionSummary": "Homework and Vocabulary Review\nR and L pronunciation practice\nGrammar practice from Free English Grammar Ebook (Pg. 10-16)\n4000 Essential English Words reading practice  (Pg. 18)",
                    "observedStrength": "- Diary Entry\n- R sound practice\n- revise the vocabularies",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Today’s lesson included homework and vocabulary review, R and L pronunciation practice, grammar practice from the Free English Grammar E-book (Pages 10–16), and reading practice from 4000 Essential English Words (Page 18).",
                    "homework": ""
                },
                {
                    "id": "l_s2_6_1780370898410_796",
                    "date": "May 26, 2026",
                    "tutor": "Dayun Suh",
                    "type": "Regular",
                    "topic": "English Grammar and Speaking",
                    "rating": "Good",
                    "sessionSummary": "Grammar from Free Grammar E-book Pg. 17-22\nSpeaking game: 20 questions game using Does it and It is. Descriptive drawing game using It is and There is and There are.\nPractice the R and L sounds",
                    "observedStrength": "Diary Entry\nPractice R and L ",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Today’s lesson included grammar practice from the Free Grammar E-book (Pages 17–22), speaking activities such as the “20 Questions” game using “Does it” and “It is,” and a descriptive drawing game using “It is,” “There is,” and “There are.” We also practiced the R and L sounds. She is improving with the L sound pronunciation, but still needs more practice with the R sounds.",
                    "homework": ""
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
                    "id": "s3_l3",
                    "date": "May 17, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Vocabulary, Reading, and Grammar (Competitive sports)",
                    "rating": "Excellent",
                    "sessionSummary": "Played an animal guessing game, read articles about famous athletes, and learned vocabulary/grammar to discuss competitive sports, scores, and world records.",
                    "observedStrength": "Sarah showed excellent comprehension of the reading materials and confidently completed all textbook drills, confirming she had no confusion about the previous unit.",
                    "currentFocusArea": "Mastering sports-specific vocabulary (e.g., consecutive, nil, draw) and accurately describing scores versus results.",
                    "interventionStrategy": "Introduced new terms with clear examples ('nil' in UK/Ireland, 'score' vs 'result') and engaged in open-ended questions and free talk to apply them.",
                    "responseToIntervention": "Sarah did a great job applying the new words and grammar points to talk about her own thoughts and experiences regarding sports.",
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
                    "content": "Game:\n\"Who am I?\" - animal guessing game, starting with only yes/no questions, and later using open-ended questions.\n\nReviewing Homework:\nSarah might have forgotten to do her homework, but we reviewed it in class and she did great!\n\nReviewing last unit overall:\nShe got all of the answers correct. When I asked her if there was any parts she was confused about, she said it's all good.\n\nRead lesson objective and ask question:\nWhat is a competitive sport?\nWhat are these? (picture of medal and trophy)\n\nTextbook material:\nEnglish Vocabulary in Use, pg. 90-91(Competitive sports)\n\nReading material about different types of competitions, with my own questions (Check for any confusion)\nVocabulary - winning/ losing, and keeping score\nSports report reading (3 different athletes)\nVocab to describe an athlete (and free talk about favorite athlete/team)\nDrills/exercises on pg. 91\nFree talk questions at bottom of pg. 91 (Q.2, Q.4, Q.5)\nHomework review\n\nInternal Note: make sure to review this unit using the same strategy (in our next class): check hw, ask questions, fill in the blanks, ask for any questions or confusions.",
                    "feedback": "Sarah did a great job today talking about different types of sports competitions! Our lesson today consisted of a lot of reading, such as reading about different types of competitive sports and reading articles about famous athletes. We were able to learn new vocabulary words and grammar points to properly speak about scores, world records, winning, and more. We also did multiple drills as well as speaking practice about her own thoughts and experiences. Outstanding job today!\n\nSome of the words that were NEW for Sarah today:\n- consecutive: in a row\n- league: \n- 2-0 (two NIL): \"nil\" instead of zero in UK/Ireland\n- Draw: same score, to be tied \n- Defeated: to beat another team \n- score vs. result: \"score\" is used to describe points DURING the game, whereas \"result\" is used at the end\n- Lead/leading: to have the top score DURING the competition (haven't won yet, but might win)\n- Achieved: to have accomplished(done) something that is difficult or impressive\n- Gave up (in sports) :to stop playing for a short amount of time, or forever\n- Superb: Amazing, outstanding, very skilled\n- \"e.g.\": for example \n\nWe also reviewed some grammar (conjugating, filling in the blanks, etc.). Sarah did very good with the drills from the textbook as well as the questions I asked her. Please have her do the crossword at the bottom of page 91 in the textbook before our next class!",
                    "homework": "Page 91: Crossword exercise 42.4 of English Vocab in Use textbook"
                },
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
                },
                {
                    "id": "l_s3_4_1780370898410_225",
                    "date": "May 31, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "School System (Slideshow, textbook)",
                    "rating": "Excellent",
                    "sessionSummary": "1. Greetings\n2. Warm up game: Would you rather\n3. Reviewing Homework:\n-forgot to do homework but we did it in class\n4. Reviewing last unit overall:\n-great!\n5.Transition year (St Joseph of Cluny website)\n-Sarah said she already looked through this and understands it! I let her know that she can reach out to me if she has any confusion about it, or needs advice.\n6. Read Lesson Objective\n- Learn about the schooling system in Ireland\n- Learn how to use new vocabulary and grammar (British/Irish Schools)\n- Reading and practice problems\n\n7.Question: What are some rules at your school? Name a few. \n- good\n\n8. Textbook material:\nEnglish Vocabulary in Use, Unit 32, pg. 70-71 (School Education)\n\n-- Reading the material, with my own questions (Check for any confusion)\n-- Vocabulary - attend, nursery school, primary school, pupils, state school, private school, take/do GCSE Exams, vocational training, stay at school, 'A' level exams, \n-- Reading about the school timetable, and new vocab \n--- Vocab to describe rules (and free talk about her own experiences/ comparing with Japan)\n-- Drills/exercises on pg. 71: great \n\nReviewed everything we learned\n\nFeedback: this was very easy for Sarah, in terms of vocabulary/grammar. However, it was very helpful, as Sarah got to learn more about how schools work in Ireland. She saw many similarities, in comparison with Japanese schooling systems (such as the terms, schedule, rules, etc.).",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Sarah did a great job in our lesson on Sunday. The textbook unit seemed very easy for her, in terms of comprehending the grammar and vocabulary. However, the unit seemed pretty helpful, as Sarah got to learn more about how schools work in Ireland. She saw many similarities, in comparison with Japanese schooling systems (such as the terms, schedule, rules, etc.).\n\nWe finished the school education unit of the textbook (English Vocabulary in Use, Unit 32, pg. 70-71). We completed the drills, and I made sure to ask Sarah my own questions and had her speak freely about her own experiences. \n\nShe also did great on the review 'quiz' of the contents from the last class (about competitive sports). \n\nI showed her the St. Joseph of Cluny website regarding the transition year. I let Sarah know that she can reach out to me if she has any confusion, or needs advice. We also discussed what 15/16 year olds do in Ireland, and she informed me that she wants to stay in school and work towards taking the 'A' level exams for university entrance later on. \n\nPlease send me any textbook material you would like for me to cover with Sarah for our next class! I can build my lesson plan around that textbook unit, and add more of my own material as well!\n\nThank you very much!",
                    "homework": ""
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
                        "date": "2026年5月17日",
                        "type": "通常レッスン",
                        "topic": "語彙、リーディング、文法（競技スポーツ）",
                        "sessionSummary": "動物当てゲームを行い、有名なアスリートについての記事を読み、競技スポーツやスコア、世界記録について話すための語彙と文法を学びました。",
                        "observedStrength": "リーディング教材を完璧に理解し、テキストのドリルにも自信を持って取り組んでおり、前回のユニットについての理解も定着していました。",
                        "currentFocusArea": "スポーツ特有の語彙（連続した、無得点、引き分けなど）の習得と、スコアと結果の正確な使い分け。",
                        "interventionStrategy": "明確な例を用いて新しい用語（イギリス/アイルランド英語の「nil」や「score」と「result」の違いなど）を導入し、オープンエンドの質問やフリートークで実際に使ってみる練習を行いました。",
                        "responseToIntervention": "新しい単語や文法を上手に使いこなし、スポーツに関する自身の考えや経験について素晴らしいスピーキングができました。",
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
                        "content": "ゲーム：\n「Who am I?」 - 動物当てゲーム（最初は「はい/いいえ」の質問のみで始め、後から自由な質問も交えて）\n\n宿題の確認：\nサラは宿題を忘れてしまったようですが、クラス内で一緒に確認し、素晴らしい出来でした！\n\n前回のユニットの全体復習：\nすべて正解でした。わからない部分があったか尋ねましたが、すべて大丈夫とのことでした。\n\nレッスンの目標の確認と質問：\n競技スポーツとは何ですか？\nこれらは何ですか？（メダルとトロフィーの写真）\n\nテキスト教材：\nEnglish Vocabulary in Use, pp. 90-91(Competitive sports)\n\n様々な種類の競技に関するリーディング教材と私からの質問（理解度チェック）\n語彙 - 勝ち/負け、スコアのつけ方\nスポーツレポートのリーディング（3人の異なるアスリートについて）\nアスリートを描写する語彙（お気に入りのアスリート/チームについてのフリートーク）\n91ページのドリル/練習問題\n91ページ下部のフリートークの質問（Q.2, Q.4, Q.5）\n宿題の復習\n\n内部メモ：次回のクラスでも同じ戦略でこのユニットを復習する（宿題の確認、質問、穴埋め問題、わからない部分がないかの確認）。",
                        "feedback": "本日は、さまざまな種類のスポーツ競技について話すという素晴らしい取り組みができました！今日のレッスンでは、競技スポーツの種類についてや有名なアスリートの記事を読むなど、多くのリーディングを行いました。スコア、世界記録、勝敗などについて正しく話すための新しい語彙と文法も学びました。さらに、複数のドリルを行い、自身の考えや経験について話すスピーキング練習も実施しました。素晴らしい取り組みでした！\n\n今日サラが学んだ新しい単語：\n- consecutive: 連続した\n- league: リーグ\n- 2-0 (two NIL): イギリス/アイルランド英語ではゼロの代わりに「nil」を使います\n- Draw: 同点、引き分け\n- Defeated: 他のチームを打ち負かすこと\n- score vs. result: 「score」は試合中の点数を表すのに対し、「result」は最終的な結果を表します\n- Lead/leading: 試合中にトップの点数を取っている状態（まだ勝ってはいませんが、勝つ可能性があります）\n- Achieved: 困難または印象的なことを成し遂げた（達成した）こと\n- Gave up (in sports): 短期間、または永遠にスポーツをやめること\n- Superb: 素晴らしい、傑出した、非常にスキルが高い\n- \"e.g.\": 例えば\n\nまた、いくつかの文法（活用、穴埋め問題など）の復習も行いました。サラはテキストのドリルや私がした質問に対して非常に良く答えていました。次回のクラスまでに、テキストの91ページ下部にあるクロスワードを宿題としてやってきてください！",
                        "homework": "テキスト『English Vocab in Use』91ページ：クロスワード問題 42.4"
                    },
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
        },
        "s4": {
            "id": "s4",
            "name": "Shinichi Fukui",
            "course": "EIKEN Grade Pre-2",
            "target": "Pass EIKEN Grade Pre-2",
            "overallGrade": "B",
            "coreIssue": "Difficulty with detailed listening and spontaneous speaking",
            "coreIssueDetail": "Shinichi has strong foundational reading and grammar skills, but struggles to catch detailed information during listening exercises and needs practice formulating spontaneous responses in everyday conversations.",
            "focusThisMonth": "Building conversational confidence and listening for details",
            "petraInsight": "Shinichi is motivated to improve everyday English rather than business English. We are utilizing role-play scenarios and textbook dialogues to help him practice active listening and natural response flow.",
            "skills": [
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 75,
                    "condition": "Consistent",
                    "note": "Strong foundation",
                    "issue": "Rarely makes basic grammar mistakes.",
                    "improvement": "Focus on complex structures."
                },
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 60,
                    "condition": "Developing",
                    "note": "Knows basic terms",
                    "issue": "Needs broader vocabulary for everyday scenarios.",
                    "improvement": "Learn phrasal verbs and idioms."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 45,
                    "condition": "Requires Focus",
                    "note": "Misses details",
                    "issue": "Has trouble catching specific details in fast speech.",
                    "improvement": "Targeted listening exercises with comprehension checks."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 55,
                    "condition": "Improving",
                    "note": "Hesitant",
                    "issue": "Takes time to formulate responses.",
                    "improvement": "Scenario-based roleplay."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Assessment & Baseline",
                    "description": "Evaluating current proficiency and setting goals.",
                    "status": "Completed",
                    "weeks": "Week 1",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Targeted Skill Building",
                    "description": "Building conversational confidence and listening for details",
                    "status": "In Progress",
                    "weeks": "Weeks 2-6",
                    "progress": 35
                },
                {
                    "id": "ph3",
                    "title": "Fluency & Application",
                    "description": "Applying learned skills to complex, unguided scenarios.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s4_0",
                    "date": "Apr 27, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "EIKEN Grade Pre-2 Practice Session 1",
                    "rating": "Good",
                    "sessionSummary": "We covered key topics related to EIKEN Grade Pre-2 and practiced various exercises.",
                    "observedStrength": "Shinichi Fukui showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Shinichi Fukui responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade Pre-2 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Shinichi Fukui! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s5": {
            "id": "s5",
            "name": "Kizuki Ishida",
            "course": "EIKEN Grade 2",
            "target": "Boost speaking confidence for EIKEN Grade 2",
            "overallGrade": "B",
            "coreIssue": "Mastering advanced scientific vocabulary and concepts",
            "coreIssueDetail": "Kizuki is studying Biology (Evolution, Phylogenetic trees, Cell structure). He has a great attitude and participates actively, but needs to solidify his understanding of complex biological mechanisms.",
            "focusThisMonth": "Cellular structures and evolutionary relationships",
            "petraInsight": "Kizuki shows excellent engagement and asks great questions. His analytical thinking is strong, and our focus is purely on expanding his scientific knowledge base and technical terminology in Biology.",
            "skills": [
                {
                    "name": "Scientific Vocabulary",
                    "baseLevel": 80,
                    "condition": "Rapid Improvement",
                    "note": "Learns quickly",
                    "issue": "Encountering highly technical terms.",
                    "improvement": "Flashcards and terminology review."
                },
                {
                    "name": "Analytical Thinking",
                    "baseLevel": 85,
                    "condition": "Consistent",
                    "note": "Great questions",
                    "issue": "None. Very inquisitive.",
                    "improvement": "Challenge with complex biological scenarios."
                },
                {
                    "name": "Concept Retention",
                    "baseLevel": 75,
                    "condition": "Steady",
                    "note": "Understands core ideas",
                    "issue": "Needs review of intricate cell mechanisms.",
                    "improvement": "Diagram labeling and verbal explanations."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Assessment & Baseline",
                    "description": "Evaluating current proficiency and setting goals.",
                    "status": "Completed",
                    "weeks": "Week 1",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Targeted Skill Building",
                    "description": "Cellular structures and evolutionary relationships",
                    "status": "In Progress",
                    "weeks": "Weeks 2-6",
                    "progress": 35
                },
                {
                    "id": "ph3",
                    "title": "Fluency & Application",
                    "description": "Applying learned skills to complex, unguided scenarios.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s5_0",
                    "date": "Apr 19, 2026",
                    "tutor": "Ashley Norton",
                    "type": "Regular",
                    "topic": "EIKEN Grade 2 Practice Session 1",
                    "rating": "Excellent",
                    "sessionSummary": "We covered key topics related to EIKEN Grade 2 and practiced various exercises.",
                    "observedStrength": "Kizuki Ishida showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Kizuki Ishida responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade 2 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Kizuki Ishida! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                },
                {
                    "id": "l_s5_1",
                    "date": "Apr 29, 2026",
                    "tutor": "Ashley Norton",
                    "type": "Regular",
                    "topic": "EIKEN Grade 2 Practice Session 2",
                    "rating": "Good",
                    "sessionSummary": "We covered key topics related to EIKEN Grade 2 and practiced various exercises.",
                    "observedStrength": "Kizuki Ishida showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Kizuki Ishida responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade 2 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Kizuki Ishida! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                },
                {
                    "id": "l_s5_3_1780370898409_996",
                    "date": "May 19, 2026",
                    "tutor": "Ashley Norton",
                    "type": "Regular",
                    "topic": "chemistry ",
                    "rating": "Excellent",
                    "sessionSummary": "無機化合物／有機化合物　\n放射性同位体",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "きずきさんが疑問に思っている分野を中心に解説しました。授業態度はとてもよく、積極的に質問をしてくれていたため、彼女がどこをどれほど理解しているかがわかりやすかったです。",
                    "homework": ""
                },
                {
                    "id": "l_s5_4_1780370898410_315",
                    "date": "May 26, 2026",
                    "tutor": "Ashley Norton",
                    "type": "Regular",
                    "topic": "math/ chemistry ",
                    "rating": "Excellent",
                    "sessionSummary": "2つの円の位置関係",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "",
                    "homework": ""
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s6": {
            "id": "s6",
            "name": "Lee Akihiro",
            "course": "EIKEN Grade 3",
            "target": "Boost speaking confidence for EIKEN Grade 3",
            "overallGrade": "A",
            "coreIssue": "Fine-tuning advanced pronunciation and British English nuances",
            "coreIssueDetail": "Akihiro has a much higher English level than expected. He completes basic tasks effortlessly. His focus is on refining vocabulary, mastering British English pronunciation, and high-level comprehension.",
            "focusThisMonth": "Advanced vocabulary and native-level pronunciation",
            "petraInsight": "Akihiro is an advanced learner who benefits most from high-level, challenging tasks rather than foundational review. We are focusing on nuanced pronunciation and sophisticated vocabulary expansion.",
            "skills": [
                {
                    "name": "Comprehension Speed",
                    "baseLevel": 95,
                    "condition": "Mastery",
                    "note": "Extremely fast",
                    "issue": "Finds standard material too easy.",
                    "improvement": "Introduce advanced authentic materials."
                },
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 85,
                    "condition": "Consistent",
                    "note": "Broad lexicon",
                    "issue": "Wants to learn highly specific/advanced terms.",
                    "improvement": "Focus on academic and nuanced synonyms."
                },
                {
                    "name": "Pronunciation Accuracy",
                    "baseLevel": 80,
                    "condition": "Refining",
                    "note": "Clear speech",
                    "issue": "Wants to master specific British English sounds.",
                    "improvement": "Phonetic drills and shadowing."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Assessment & Baseline",
                    "description": "Evaluating current proficiency and setting goals.",
                    "status": "Completed",
                    "weeks": "Week 1",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Targeted Skill Building",
                    "description": "Advanced vocabulary and native-level pronunciation",
                    "status": "In Progress",
                    "weeks": "Weeks 2-6",
                    "progress": 35
                },
                {
                    "id": "ph3",
                    "title": "Fluency & Application",
                    "description": "Applying learned skills to complex, unguided scenarios.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s6_0",
                    "date": "May 3, 2026",
                    "tutor": "Alice Williams",
                    "type": "Regular",
                    "topic": "EIKEN Grade 3 Practice Session 1",
                    "rating": "Good",
                    "sessionSummary": "We covered key topics related to EIKEN Grade 3 and practiced various exercises.",
                    "observedStrength": "Lee Akihiro showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Lee Akihiro responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade 3 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Lee Akihiro! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s7": {
            "id": "s7",
            "name": "Shoji Takanao",
            "course": "EIKEN Grade Pre-2",
            "target": "Improve reading and writing for EIKEN Grade Pre-2",
            "overallGrade": "A",
            "coreIssue": "Navigating complex metaphors and highly advanced business terminology",
            "coreIssueDetail": "Shoji is extremely fluent and professional. His pronunciation is excellent. He only struggles with obscure metaphors (e.g., 'scaling the biggest myth') and highly advanced phrasing used in tech/AI discussions.",
            "focusThisMonth": "Discussing AI, Finance, and Market Research",
            "petraInsight": "Shoji is essentially fluent. Our sessions function more like high-level professional discussions. We dissect complex YouTube videos, articles, and industry-specific jargon to perfect his near-native fluency.",
            "skills": [
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 95,
                    "condition": "Near Native",
                    "note": "No pauses",
                    "issue": "Speaks smoothly and professionally.",
                    "improvement": "Maintain fluency."
                },
                {
                    "name": "Idiomatic Mastery",
                    "baseLevel": 75,
                    "condition": "Developing",
                    "note": "Occasional confusion",
                    "issue": "Struggles with rare English metaphors/idioms.",
                    "improvement": "Analyze authentic media and podcasts."
                },
                {
                    "name": "Business Vocabulary",
                    "baseLevel": 90,
                    "condition": "Excellent",
                    "note": "Knows finance/AI terms",
                    "issue": "None.",
                    "improvement": "Expand into emerging tech terminology."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Assessment & Baseline",
                    "description": "Evaluating current proficiency and setting goals.",
                    "status": "Completed",
                    "weeks": "Week 1",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Targeted Skill Building",
                    "description": "Discussing AI, Finance, and Market Research",
                    "status": "In Progress",
                    "weeks": "Weeks 2-6",
                    "progress": 35
                },
                {
                    "id": "ph3",
                    "title": "Fluency & Application",
                    "description": "Applying learned skills to complex, unguided scenarios.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s7_0",
                    "date": "May 5, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "EIKEN Grade Pre-2 Practice Session 1",
                    "rating": "Excellent",
                    "sessionSummary": "We covered key topics related to EIKEN Grade Pre-2 and practiced various exercises.",
                    "observedStrength": "Shoji Takanao showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Shoji Takanao responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade Pre-2 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Shoji Takanao! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                },
                {
                    "id": "l_s7_1",
                    "date": "May 17, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "EIKEN Grade Pre-2 Practice Session 2",
                    "rating": "Excellent",
                    "sessionSummary": "We covered key topics related to EIKEN Grade Pre-2 and practiced various exercises.",
                    "observedStrength": "Shoji Takanao showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Shoji Takanao responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade Pre-2 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Shoji Takanao! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                },
                {
                    "id": "l_s7_3_1780370898410_14",
                    "date": "May 31, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Discussion on AI Models (Improvements & Changes in Past Year)",
                    "rating": "Excellent",
                    "sessionSummary": "We covered the overall content of the video shared by Shoji. \n\nVocabulary, comprehension of material (video + transcript) \nDiscussion questions, dissecting contents by reading together, etc.  \n\nI helped explain the concepts in a simpler way, as well as explain expressions that are used in academic/formal senses. ",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Thank you so much for preparing some interesting material for our class again! I had a pleasant time discussing complex AI topics with you, and I am glad that you were satisfied with the flow of our lesson. Please let me know if you would like to discuss this video further for next class (i.e. Speaking further about World Models vs. LLM Models), or if there's anything else you want to look at (I will try my best to prepare)!",
                    "homework": "State_of_LLMs_2026_English_Lesson_20260531.docx (https://airtable.com/appAdxLhXqRtaq618/tblyMMtwV94h0wEjp/recwzrwJQGqi1TqRn/fldHwB1RcWWdSX33v/att1h4ml8T3awgvhO)"
                },
                {
                    "id": "l_s7_4_1780370971415_190",
                    "date": "May 17, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Vocabulary and discussion based on Video about AI use",
                    "rating": "Excellent",
                    "sessionSummary": "Today, me and Shoji looked at the contents of a YouTube video that explained how to efficiently use AI. Shoji prepared a document including an English written script, a Japanese translation of the script, and a chart of words. We focused on the highlighted words, as well as a discussion prompt and the vocab word chart. Shoji highlighted words that were confusing in meaning or use. Many of them were metaphors, such as scaling the biggest myth, and turning tiny knobs, some were phrases such as prompting away, as well as some complex words such as well-rounded and incomprehensible. I explained the meanings of these words, and gave examples as well as instructions on how to properly use those words. Shoji also prepared materials for discussion, regarding AI use in the workforce, everyday life, universities, and more. We were able to conduct a formal discussion which included the subjects/words Shoji wasn't initially sure of. We also looked at a chart of additional vocabulary words that Shoji had heard of, but was not completely confident in using. We were able to clarify those words. Finally, we went over a topic we can further discuss in our upcoming class. ",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Thank you so much for attending today's class! I had a really enjoyable time discussing different aspects of AI and its usage in the modern world. As for the words we looked at, I will send you my definitions so you can look back at them as needed. I really appreciate you for preparing materials, and I look forward to speaking with you again!\n\n1. Prompting away - freely giving various prompts to AI \n\nHave you heard of the term, “Ask away!”?\n→ “__(verb)__ away!” is basically saying, “Go ahead an __(verb)__!” \n\nSo, when you add “-ing”, it describes an action that people do continuously/freely.\n\nexamples) \nasking away = to keep asking freely\nchatting away = to continuously talk\n\n2. Let us scale the biggest myth\n\nMyth = a common belief that is actually not true. A common misconception.\n“Let us scale the biggest myth” → let us disprove this misconception about AI.\n\nScale, in this case, means to metaphorically climb over, or overcome. (scaling a mountain)\nOVERCOMING the myth. \n\n3. Pointy ears- 尖った耳\n\n4. Incomprehensible \nTo comprehend is to understand \nComprehensible is something that can be understood.\n→ So INcomprehensible is extremely hard, or impossible to understand.\n\nComparing it to \"insane\"\nInsane just means crazy, so \"incomprehensible\" holds more meaning, as something that is extremely difficult to understand or do.\nex) Your actions were insane = What you did is crazy    VS.      Your actions are incomprehensible = I can't even begin to understand why you did that\n\nIncomprehensible scale → an amount SO big that we can’t even comprehend it\nThat's why AI does for us.\n\n5. Turning tiny knobs\n A metaphor. Like turning a knob on a machine, a speaker, a stove system, etc. (control knobs)\n Adjusting carefully until they get it right.\n\n6. Clicks into place - starts to make a lot of sense in your head \nLike a snap or a lightbulb\n\n7. A new one drops every few weeks \n→ “Drops” means for something new to come out, or be announced.  (not literally/physically dropping)\n\nexample) “Uniqlo dropped a new collaboration with Ghibli”\n\nSo, he is explaining that a new AI software is released every few weeks. (such as once in 3 weeks)\n\n8. It did not look it up\n“It” being the AI tool, and “look it up” means to search it up online. \n\nSo, instead of using the internet to find the answer, the AI tool used patterns to predict it (the answer).\n\n9. Well-rounded\nTo be good quality in many different ways, and offers the best performance\n\nPeople can be “well-rounded” as well. For example, jobs will most likely search for well-rounded, dependable people.\n\n10. Constraints make the output sharper\nConstraints - limits\nIn this case, putting limits on your prompts makes the result clear, specific, and of better quality.\n(as in telling the AI, \"this is what I DON'T want you to do\"/\"Please DON'T _____\")\n\n11. Watermark\nA logo or graphic that obstructs a digital file so that it cannot be stolen by others or plagiarized.\nex) paparazzi photos, artwork, stock images, etc. ",
                    "homework": ""
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s8": {
            "id": "s8",
            "name": "Takeshi Kawana",
            "course": "IELTS Prep",
            "target": "Boost speaking confidence for IELTS Prep",
            "overallGrade": "B+",
            "coreIssue": "Reducing pauses and improving speech fluidity",
            "coreIssueDetail": "Takeshi has strong foundational skills and great reading comprehension. However, he takes frequent pauses when speaking and needs to improve his conversational flow for travel and everyday interactions.",
            "focusThisMonth": "Dialogue practice and reducing hesitation",
            "petraInsight": "Takeshi is very motivated to speak English for his hobbies (dance class, travel). By using 'English Grammar in Use' and continuous free-talk, we are working to eliminate his pauses and build his speaking rhythm.",
            "skills": [
                {
                    "name": "Grammar & Reading",
                    "baseLevel": 85,
                    "condition": "Consistent",
                    "note": "Strong foundation",
                    "issue": "Understands rules well.",
                    "improvement": "Apply rules automatically in speech."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 50,
                    "condition": "Needs Practice",
                    "note": "Frequent pauses",
                    "issue": "Translates or overthinks before speaking.",
                    "improvement": "Shadowing and timed speaking drills."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 65,
                    "condition": "Steady",
                    "note": "Willing to try",
                    "issue": "Hesitant but motivated.",
                    "improvement": "Frequent low-pressure free talk."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Assessment & Baseline",
                    "description": "Evaluating current proficiency and setting goals.",
                    "status": "Completed",
                    "weeks": "Week 1",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Targeted Skill Building",
                    "description": "Dialogue practice and reducing hesitation",
                    "status": "In Progress",
                    "weeks": "Weeks 2-6",
                    "progress": 35
                },
                {
                    "id": "ph3",
                    "title": "Fluency & Application",
                    "description": "Applying learned skills to complex, unguided scenarios.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s8_3_1780370898410_726",
                    "date": "May 27, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Review of Grammar and Vocabulary Words, Free Speak",
                    "rating": "Good",
                    "sessionSummary": "Intro Conversation:\nTalked about how he went to Starbucks last week, and how he likes people watching. Corrected his usage of words like eat and drink to past tense. \nTalked about Liberal Arts Major in Universities, what is taught there, who can join, differences in gender and major choice \n\nWarm-up Question:\nWhat is your favorite scent?\nI explained what scent means. We talked about different kinds of scents we enjoy: citrus perfumes, flower scents, streets near restaurants at lunch time, etc. \n\nReview of Grammar:\n\"Could\" as a suggestion or a wish\nPractice questions, review of textbook, exercises using them in sentences\n\nReview of Vocab:\nMatching quiz of important vocab words from last class\nPractice questions of vocab, asked for examples\nAsked to use in sentences\n\nTextbook Continued:\n\"Couldn't\" (could not)\n1. past tense (過去形) \nex) 過去形： \"I couldn't finish my test yesterday.\" 「昨日はテストを終えることができませんでした。」\n\n2. not possible (何かが不可能だと言う)\nex) 何かが不可能だと言う：\"I couldn't live in Tokyo, it's too loud and crowded.\"　「東京には住めないよ、うるさすぎるし人が多すぎるから。」\n\nReview of today's unit\n\nTalked about next class content --> textbook unit 28 (\"must\"), and practicing past, present, and future tense. Dialogue if we have time. ",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Thank you very much for joining our lesson today! You did great with remembering the new vocabulary and grammar we learned last class. Today, I noticed that you have some challenges expressing verbs in the past tense. Here is a quick review of some of the content we covered today.\n\n今日学んだ単語です。できたら復習してください！\nMajor\nScent\nSpecialize\nCitrus\n\n過去形の文法：\nDrinking (飲んでいる）--> drank （飲んだ）\neating（たべている） --> ate　（食べた）\n\n新しい文法 -\"Couldn't\" (could not):\n\n1. past tense (過去形) \nex) 過去形： \"I couldn't finish my test yesterday.\" 「昨日はテストを終えることができませんでした。」\n\n2. not possible (何かが不可能だと言う)\nex) 何かが不可能だと言う：\"I couldn't live in Tokyo, it's too loud and crowded.\"　「東京には住めないよ、うるさすぎるし人が多すぎるから。」\n\nThank you, and I'll see you in two weeks!",
                    "homework": ""
                },
                {
                    "id": "l_s8_2_1780370971414_447",
                    "date": "May 13, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Dialogue, Grammar, Free-Speak",
                    "rating": "Excellent",
                    "sessionSummary": "- Warm up conversations using questions:\n1. What is your favorite genre of music? Why? -- Classical music, because he loves to play piano\n2. What was a popular trend when you were a teenager? -- Disco clubs, one piece dresses\n\n- Dialogue practice: \n- At the theater scenario\n- Hobbies scenario \n\n- Textbook: \"English Grammar in Use\" Unit 27 - “could (do) and could have (done)” pg. 54\nSection A & B (\"could\": suggestion, possibility, or wish) \nDrill 27.1 - Which goes with which? (\"could\" suggestions)\n\nReview:\nAt the end, we briefly reviewed new words, new grammar, homework, and what we'll be covering next lesson.",
                    "observedStrength": "今日学んだ語彙の中から、お気に入りの単語を復習してください！\n1) Performance: パフォーマンス\n2) Compliment: Saying something nice about someone (褒め言葉)\n3) Choreography: steps/moves of a dance or performance (振り付け)\n4) Talented: Very good at something (才能)\n5) \"That's very kind of you\": That's so nice!\n6) The arts: performance arts like dancing, singing, etc. (芸術?)\n7) Midterm: 中間試験\n8) \"Gonna\": I'm going to do ___. (example: \"I'm gonna go camping\")\n9) Shades: 色合い (example: Shades of blue)\n10) Hang: 掛ける\n\nAdditionally, please practice using \"could\" at least once a day! \nExamples) \"I could eat pancakes for breakfast\" (maybe I can), \"I could go to McDonald's for lunch\" (maybe I can), \"I could stay here all day\" (I wish)",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "You did a great job today! I had a fun time talking about music, trends, and more! I will briefly summarize our lesson.\n\nAfter our warm-up questions, we did some dialogue practice including a scenario about a theater performance (musical) as well as a conversation about hobbies/vacations (Michigan, canoeing, etc.). The textbook material we covered today taught how to use the term \"could\" in a sentence. So far, we know that \"could\" can be used as a suggestion, a possibility, or a wish! Thank you so much for today, and I will see you next on 5/27! \n\nHOMEWORK:\n今日学んだ語彙の中から、お気に入りの単語を復習してください！\n1) Performance: パフォーマンス\n2) Compliment: Saying something nice about someone (褒め言葉)\n3) Choreography: steps/moves of a dance or performance (振り付け)\n4) Talented: Very good at something (才能)\n5) \"That's very kind of you\": That's so nice!\n6) The arts: performance arts like dancing, singing, etc. (芸術?)\n7) Midterm: 中間試験\n8) \"Gonna\": I'm going to do ___. (example: \"I'm gonna go camping\")\n9) Shades: 色合い (example: Shades of blue)\n10) Hang: 掛ける\n\nAdditionally, please practice using \"could\" at least once a day! \nExamples) \"I could eat pancakes for breakfast\" (maybe I can), \"I could go to McDonald's for lunch\" (maybe I can), \"I could stay here all day\" (I wish)\n",
                    "homework": ""
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s9": {
            "id": "s9",
            "name": "Yusuke",
            "course": "EIKEN Grade 3",
            "target": "Build foundation for EIKEN Grade 3",
            "overallGrade": "B+",
            "coreIssue": "Translating from Japanese internally and pronunciation mechanics",
            "coreIssueDetail": "Yusuke has good basic skills and knows his directions well. However, he mentally translates from Japanese before speaking, which slows him down. He also needs targeted help with specific phonetic sounds ('ts' vs 't').",
            "focusThisMonth": "Direct English thinking and phonetic drills",
            "petraInsight": "Yusuke enjoys structured dialogue practice. Our goal is to train him to respond directly in English without the intermediate Japanese translation step, drastically improving his response time.",
            "skills": [
                {
                    "name": "Pronunciation Accuracy",
                    "baseLevel": 55,
                    "condition": "Developing",
                    "note": "Specific sound issues",
                    "issue": "Struggles with 'ts' vs 't' (e.g., comments).",
                    "improvement": "Targeted phonetic repetition."
                },
                {
                    "name": "Response Speed",
                    "baseLevel": 45,
                    "condition": "Requires Focus",
                    "note": "Translates internally",
                    "issue": "Slow response due to mental translation.",
                    "improvement": "Rapid-fire Q&A drills."
                },
                {
                    "name": "Structural Knowledge",
                    "baseLevel": 70,
                    "condition": "Consistent",
                    "note": "Knows the basics",
                    "issue": "Can read and understand basic structures.",
                    "improvement": "Apply structures in live conversation."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Assessment & Baseline",
                    "description": "Evaluating current proficiency and setting goals.",
                    "status": "Completed",
                    "weeks": "Week 1",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Targeted Skill Building",
                    "description": "Direct English thinking and phonetic drills",
                    "status": "In Progress",
                    "weeks": "Weeks 2-6",
                    "progress": 35
                },
                {
                    "id": "ph3",
                    "title": "Fluency & Application",
                    "description": "Applying learned skills to complex, unguided scenarios.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s9_0",
                    "date": "May 6, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "EIKEN Grade 3 Practice Session 1",
                    "rating": "Outstanding",
                    "sessionSummary": "We covered key topics related to EIKEN Grade 3 and practiced various exercises.",
                    "observedStrength": "Yusuke showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Yusuke responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade 3 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Yusuke! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s10": {
            "id": "s10",
            "name": "Yuta Sumiya",
            "course": "EIKEN Grade Pre-1",
            "target": "Build foundation for EIKEN Grade Pre-1",
            "overallGrade": "B",
            "coreIssue": "Mastering small talk and casual relationship building",
            "coreIssueDetail": "Yuta dislikes lecture-style lessons and textbook drills. He has a strong foundation but wants to exclusively practice casual conversation, small talk, and role-playing scenarios (restaurants, family friends, in-laws).",
            "focusThisMonth": "Role-playing everyday social scenarios",
            "petraInsight": "Yuta learns best through immersive conversation. We discuss his work in marketing supplements with AI, travel experiences, and practice navigating social etiquette in English-speaking environments.",
            "skills": [
                {
                    "name": "Social Etiquette",
                    "baseLevel": 70,
                    "condition": "Improving",
                    "note": "Understands basics",
                    "issue": "Wants to sound more natural with friends/in-laws.",
                    "improvement": "Roleplay nuanced social situations."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 80,
                    "condition": "High",
                    "note": "Talkative",
                    "issue": "Not afraid to speak, just needs refinement.",
                    "improvement": "Introduce advanced conversational connectors."
                },
                {
                    "name": "Active Listening",
                    "baseLevel": 85,
                    "condition": "Consistent",
                    "note": "Catches context well",
                    "issue": "None.",
                    "improvement": "Listen to natural, overlapping native speech."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Assessment & Baseline",
                    "description": "Evaluating current proficiency and setting goals.",
                    "status": "Completed",
                    "weeks": "Week 1",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Targeted Skill Building",
                    "description": "Role-playing everyday social scenarios",
                    "status": "In Progress",
                    "weeks": "Weeks 2-6",
                    "progress": 35
                },
                {
                    "id": "ph3",
                    "title": "Fluency & Application",
                    "description": "Applying learned skills to complex, unguided scenarios.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s10_0",
                    "date": "May 7, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "EIKEN Grade Pre-1 Practice Session 1",
                    "rating": "Good",
                    "sessionSummary": "We covered key topics related to EIKEN Grade Pre-1 and practiced various exercises.",
                    "observedStrength": "Yuta Sumiya showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Yuta Sumiya responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade Pre-1 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Yuta Sumiya! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                },
                {
                    "id": "l_s10_1",
                    "date": "May 15, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "EIKEN Grade Pre-1 Practice Session 2",
                    "rating": "Outstanding",
                    "sessionSummary": "We covered key topics related to EIKEN Grade Pre-1 and practiced various exercises.",
                    "observedStrength": "Yuta Sumiya showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Yuta Sumiya responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade Pre-1 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Yuta Sumiya! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                },
                {
                    "id": "l_s10_3_1780370898409_276",
                    "date": "May 21, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Free Talk and Important Parts of a Conversation",
                    "rating": "Good",
                    "sessionSummary": "Introduction, greetings\n--> Small talk questions\n- Do you prefer rainy weather or sunny weather\n- How has your product marketing been going as of lately?\n\nSmall-Talk Speaking Practice \n1. REACTION WORDS!\nShow slide\nHave him practice using reaction words\n\n2. FOLLOW UP QUESTIONS!\nGet him used to asking follow up questions like “what about you?”\n\n3. ADDING DETAILS!\nInstead of giving short answers, try to add details and ask back. \n\nSmall talk cont.\nWhen entering a home, speak about pictures/art/other features of the home\n→ then you can bring up questions about travel or food\n\nScenario/Role-play Practice\nSlides\n\nFree talk ",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "It was great to speak with you today! Here's a summary of the key points from today's lesson:\n\n1. REACTION WORDS!\n“Really?”\n“That sounds fun.”\n“No way!”\n“I see.”\n“That makes sense.”\n“Interesting.”\n“That must be difficult.”\n“Good to know”\nRemember that the meanings of these can change with TONE.\n\n2. CLARIFYING QUESTIONS!　（聞き取れなかった時）\n\"Sorry?\"\n\"Can you repeat that?\"\n\"What did you say?\"\n\"The what ___?\" --> EXAMPLE) the bullet train - \"the what train?\"\n\n3. FOLLOW UP QUESTIONS!\nIt's great to ask follow up questions like “what about you?” or \"how about you?\"　(同じ意味です。）\n\nInstead of giving short answers, try to add details AND ask back. \nExample）\nQ: Do you like traveling?\nShort Answer: Yes, I do.\n-->Better Version\n“Yes, I do. I especially like traveling within Japan because I enjoy hot springs. How about you?”\n\nSmall talk cont.\nWhen entering a home, speak about pictures/art/other features of the home\n→ then you can bring up questions about travel or food\n\nScenario/Role-play Practice\n1. Catching up\nA: Hi! Long time no see. How have you been?\nB: I’ve been good, just busy with work lately.\nA: What kind of work are you doing now?\nB: I work in sales for a manufacturing company.\n\n2. Casual Friend Conversation\nA: What did you do this weekend?\n B: I stayed home and watched Netflix.\n A: Oh really? What did you watch?\n B: A Japanese drama about cooking.\n- you can say \"oh really?\" or \"oh nice!\"\n\nLastly, we looked over metaphors. Metaphors can help you express your feelings in a shorter, more interesting phrase. They often describes things that are not literal.\nEX) Time is money\nEX2) She has a heart of gold",
                    "homework": ""
                },
                {
                    "id": "l_s10_4_1780370898410_165",
                    "date": "May 28, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Casual Convo Practice, Important phrases, and Metaphors",
                    "rating": "Good",
                    "sessionSummary": "1. Intro convo\n2. Warm up questions:\nWhat is your favorite genre of music? Why? - he doesn't listen to music that much but he likes rock music because he played guitar in a band when he was younger. They played original songs and covers. (Bump of Chicken, RADWIMPS) \nNew words:\nMusical instrument, \"I was in a band\"\n\nWhat was a popular trend when you were a teenager?- Thrifting was popular because younger students don't have much money. Asked for recommendations. \nNew words: \nThrift shop, to thrift/thrifting, used clothing\n\n3. Review of past content\nReaction words, follow up questions, and clarification questions \nMetaphors\n\n4. Scenario role-play practice with structured questions. Reviewed new words he did not know.\nNew words: \nChoreography, \"You were such a talented ballerina\" vs. ARE, the arts, compliment \n\nWe also practiced pronunciation of \"really\", \"see\", & \"theater\". Wants to be taught American pronunciation.\n\n5. Metaphors\n- Out of this world\n- Night owl\n- It's gonna be a breeze/ It was a breeze\n\n6. Free speak\nConversation --> describe a quiet place that you like to go to. We had back and forth conversation with details! ",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Today, you did an amazing job with using reaction words, follow up questions, and clarification questions in our conversations. You're already starting to sound fluent!!\n\nHere are the new phrases and words we went over today.\n\nVOCAB\nMusical instrument: 楽器\nI was in a band: バンドをやっていた\nThrift shop: 古着屋\nTo thrift/thrifting: 古着を買う\nUsed clothing: 古着\nChoreography: 振り付け (dance moves, steps)\nThe arts: Performance arts like dancing, singing, music, theater (芸術?)\nCompliment: 褒め言葉 --> \"You're so talented!\"\n\nPHRASES\n\"You WERE such a talented ballerina\" (instead of ARE): 懐かしいように過去のことを話していた。-->「才能があったのに...」\nGonna: \"going to ___\", CASUAL (I'm gonna go to bed soon 今からやること/ It's gonna be so easy 予測する)\nCome up with: 思いつく --> \"Can you come up with some options?\"\n\nGRAMMAR\nEnd up [with] extra: [結局]余分なものが出る\nEnd up [taking] a cold shower everyday: 私は毎日冷たいシャワーを浴びる[ことになる]\n\nMETAPHORS\n- Out of this world: \"This gumbo is out of this world!\" --> something is so extremely good, that it seems to originate from beyond our planet.\n- Night owl: \"I am a night owl\" --> 夜遅くまで起きていることを好み、夕方に最も精力的に活動したり生産的になったりする人\n- It's gonna be a breeze/ It was a breeze: 簡単だと思う・簡単だった\n\nPlease practice the American pronunciations of \"really\", \"see\", & \"theater.\n\nNext time, I will prepare commonly used phrases that are not often seen in textbooks, similar to \"gonna\" or \"go with __\". I will also prepare more dialogue role-play and topics for us to have free speak conversations. Thank you!",
                    "homework": ""
                },
                {
                    "id": "l_s10_5_1780370971415_119",
                    "date": "May 15, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "Conversation and Roleplay",
                    "rating": "Excellent",
                    "sessionSummary": "Conversation: Asked about how he's been doing, what's new at work etc. Basic English back-and-forth convo\n- talked about AI use\n- He told me about his new project at work (vitamin/supplements) and how he is using AI to help market his product\n\nFollow up questions such as: What is challenging about marketing your product? How did AI help you? What features are marketable? What kind of marketing strategies did you use?\n\nScenario Role-Play practice:\nRestaurant in America\nEtiquette, language, \"how do you want your eggs cooked\"\n\nFollow up questions about different topics:\nFavorite restaurant in California? (Memphis Diner)\nWhat else is memorable about California? (Disneyland)",
                    "observedStrength": "",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Thank you for attending our lesson today. I enjoyed speaking about various different topics with you! You convey your thoughts very clearly in English, and I'd be happy to give you more support in terms of vocabulary and conversational skills! \n\n今日学んだ新しい単語はこちらです。\n- Humid: 蒸し暑い\n- Shortly: 間もなく・すぐに\n- My feet are sore: 足が痛い\n- My muscles are sore: 筋肉痛\n- \"Can I get you started on any drinks?\": 飲み物はいかがですか？\n- Types of eggs: Sunny side up, over easy, over medium, scrambled, poached, etc.\n- ”Can I do ____\"/\"Can I have ___\" (when ordering food): it's both acceptable!\n- \"Can I have A sandwich\" じゃなくて \"can I have THE sandwich\" \n\nPlease have a look at these words before our next lesson. We can review them again! Next time, I will prepare some practice scenarios for \"small-talk\" and talking with \"family friends\"!",
                    "homework": ""
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s12": {
            "id": "s12",
            "name": "Hiroyuki Iwakura",
            "course": "EIKEN Grade 2",
            "target": "Pass EIKEN Grade 2",
            "overallGrade": "A",
            "coreIssue": "Needs consistent practice and vocabulary expansion.",
            "coreIssueDetail": "While understanding is generally good, active recall of vocabulary needs improvement.",
            "focusThisMonth": "Vocabulary building and active speaking practice.",
            "petraInsight": "Hiroyuki Iwakura is making steady progress. Focus should remain on consistency and building confidence in active production.",
            "skills": [
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 65,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good foundation",
                    "issue": "Needs more advanced vocabulary.",
                    "improvement": "Regular reading practice."
                },
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 60,
                    "weight": 1,
                    "condition": "Further Practice Recommended",
                    "note": "Grammar needs work",
                    "issue": "Occasional errors in complex sentences.",
                    "improvement": "Grammar drills."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 70,
                    "weight": 1.2,
                    "condition": "Rapid Improvement",
                    "note": "Speaks naturally",
                    "issue": "Needs to use more transitional phrases.",
                    "improvement": "Practice linking ideas."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 75,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good comprehension",
                    "issue": "Struggles with fast native speech.",
                    "improvement": "Listen to podcasts."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 80,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Not afraid to speak",
                    "issue": "Sometimes lacks vocabulary to express complex ideas.",
                    "improvement": "Debate practice."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Phase 1: Foundation Building",
                    "description": "Focus on core vocabulary and basic grammar structures.",
                    "status": "Completed",
                    "weeks": "Weeks 1-4",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Phase 2: Skill Application",
                    "description": "Apply foundational skills to reading and listening exercises.",
                    "status": "In Progress",
                    "weeks": "Weeks 5-8",
                    "progress": 45
                },
                {
                    "id": "ph3",
                    "title": "Phase 3: Exam Preparation",
                    "description": "Mock exams and time management strategies.",
                    "status": "Upcoming",
                    "weeks": "Weeks 9-12",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s12_0",
                    "date": "Apr 10, 2026",
                    "tutor": "Hannah Tuffy",
                    "type": "Regular",
                    "topic": "EIKEN Grade 2 Practice Session 1",
                    "rating": "Excellent",
                    "sessionSummary": "We covered key topics related to EIKEN Grade 2 and practiced various exercises.",
                    "observedStrength": "Hiroyuki Iwakura showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Hiroyuki Iwakura responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of EIKEN Grade 2 materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Hiroyuki Iwakura! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s13": {
            "id": "s13",
            "name": "Takuma",
            "course": "Conversational English",
            "target": "Build foundation for Conversational English",
            "overallGrade": "A",
            "coreIssue": "Needs consistent practice and vocabulary expansion.",
            "coreIssueDetail": "While understanding is generally good, active recall of vocabulary needs improvement.",
            "focusThisMonth": "Vocabulary building and active speaking practice.",
            "petraInsight": "Takuma is making steady progress. Focus should remain on consistency and building confidence in active production.",
            "skills": [
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 65,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good foundation",
                    "issue": "Needs more advanced vocabulary.",
                    "improvement": "Regular reading practice."
                },
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 60,
                    "weight": 1,
                    "condition": "Further Practice Recommended",
                    "note": "Grammar needs work",
                    "issue": "Occasional errors in complex sentences.",
                    "improvement": "Grammar drills."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 70,
                    "weight": 1.2,
                    "condition": "Rapid Improvement",
                    "note": "Speaks naturally",
                    "issue": "Needs to use more transitional phrases.",
                    "improvement": "Practice linking ideas."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 75,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good comprehension",
                    "issue": "Struggles with fast native speech.",
                    "improvement": "Listen to podcasts."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 80,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Not afraid to speak",
                    "issue": "Sometimes lacks vocabulary to express complex ideas.",
                    "improvement": "Debate practice."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Phase 1: Foundation Building",
                    "description": "Focus on core vocabulary and basic grammar structures.",
                    "status": "Completed",
                    "weeks": "Weeks 1-4",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Phase 2: Skill Application",
                    "description": "Apply foundational skills to reading and listening exercises.",
                    "status": "In Progress",
                    "weeks": "Weeks 5-8",
                    "progress": 45
                },
                {
                    "id": "ph3",
                    "title": "Phase 3: Exam Preparation",
                    "description": "Mock exams and time management strategies.",
                    "status": "Upcoming",
                    "weeks": "Weeks 9-12",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s13_0",
                    "date": "May 9, 2026",
                    "tutor": "Ashley Norton",
                    "type": "Regular",
                    "topic": "Conversational English Practice Session 1",
                    "rating": "Good",
                    "sessionSummary": "We covered key topics related to Conversational English and practiced various exercises.",
                    "observedStrength": "Takuma showed great enthusiasm and participation during the session.",
                    "currentFocusArea": "Continuing to build vocabulary and improve sentence structure.",
                    "interventionStrategy": "Interactive exercises and targeted feedback.",
                    "responseToIntervention": "Takuma responded well to the exercises and showed improvement.",
                    "impacts": [
                        {
                            "skill": "Vocabulary Precision",
                            "change": "+1"
                        },
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "Detailed review of Conversational English materials, focusing on areas of weakness.",
                    "feedback": "Great job today, Takuma! Keep practicing the vocabulary words we discussed.",
                    "homework": "Review today's notes and complete the assigned worksheet."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s14": {
            "id": "s14",
            "name": "Yuki Takenaka",
            "course": "IELTS Prep",
            "target": "Boost speaking confidence for IELTS Prep",
            "overallGrade": "B+",
            "coreIssue": "Needs consistent practice and vocabulary expansion.",
            "coreIssueDetail": "While understanding is generally good, active recall of vocabulary needs improvement.",
            "focusThisMonth": "Vocabulary building and active speaking practice.",
            "petraInsight": "Yuki Takenaka is making steady progress. Focus should remain on consistency and building confidence in active production.",
            "skills": [
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 65,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good foundation",
                    "issue": "Needs more advanced vocabulary.",
                    "improvement": "Regular reading practice."
                },
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 60,
                    "weight": 1,
                    "condition": "Further Practice Recommended",
                    "note": "Grammar needs work",
                    "issue": "Occasional errors in complex sentences.",
                    "improvement": "Grammar drills."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 70,
                    "weight": 1.2,
                    "condition": "Rapid Improvement",
                    "note": "Speaks naturally",
                    "issue": "Needs to use more transitional phrases.",
                    "improvement": "Practice linking ideas."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 75,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good comprehension",
                    "issue": "Struggles with fast native speech.",
                    "improvement": "Listen to podcasts."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 80,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Not afraid to speak",
                    "issue": "Sometimes lacks vocabulary to express complex ideas.",
                    "improvement": "Debate practice."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Phase 1: Foundation Building",
                    "description": "Focus on core vocabulary and basic grammar structures.",
                    "status": "Completed",
                    "weeks": "Weeks 1-4",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Phase 2: Skill Application",
                    "description": "Apply foundational skills to reading and listening exercises.",
                    "status": "In Progress",
                    "weeks": "Weeks 5-8",
                    "progress": 45
                },
                {
                    "id": "ph3",
                    "title": "Phase 3: Exam Preparation",
                    "description": "Mock exams and time management strategies.",
                    "status": "Upcoming",
                    "weeks": "Weeks 9-12",
                    "progress": 0
                }
            ],
            "lessons": [],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s15": {
            "id": "s15",
            "name": "Tomioka",
            "course": "EIKEN Grade 3",
            "target": "Pass EIKEN Grade 3",
            "overallGrade": "B+",
            "coreIssue": "Needs consistent practice and vocabulary expansion.",
            "coreIssueDetail": "While understanding is generally good, active recall of vocabulary needs improvement.",
            "focusThisMonth": "Vocabulary building and active speaking practice.",
            "petraInsight": "Tomioka is making steady progress. Focus should remain on consistency and building confidence in active production.",
            "skills": [
                {
                    "name": "Vocabulary Precision",
                    "baseLevel": 65,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good foundation",
                    "issue": "Needs more advanced vocabulary.",
                    "improvement": "Regular reading practice."
                },
                {
                    "name": "Structural Accuracy",
                    "baseLevel": 60,
                    "weight": 1,
                    "condition": "Further Practice Recommended",
                    "note": "Grammar needs work",
                    "issue": "Occasional errors in complex sentences.",
                    "improvement": "Grammar drills."
                },
                {
                    "name": "Expression Fluidity",
                    "baseLevel": 70,
                    "weight": 1.2,
                    "condition": "Rapid Improvement",
                    "note": "Speaks naturally",
                    "issue": "Needs to use more transitional phrases.",
                    "improvement": "Practice linking ideas."
                },
                {
                    "name": "Listening Adaptability",
                    "baseLevel": 75,
                    "weight": 1,
                    "condition": "Becoming More Consistent",
                    "note": "Good comprehension",
                    "issue": "Struggles with fast native speech.",
                    "improvement": "Listen to podcasts."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 80,
                    "weight": 1,
                    "condition": "Rapid Improvement",
                    "note": "Not afraid to speak",
                    "issue": "Sometimes lacks vocabulary to express complex ideas.",
                    "improvement": "Debate practice."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Phase 1: Foundation Building",
                    "description": "Focus on core vocabulary and basic grammar structures.",
                    "status": "Completed",
                    "weeks": "Weeks 1-4",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Phase 2: Skill Application",
                    "description": "Apply foundational skills to reading and listening exercises.",
                    "status": "In Progress",
                    "weeks": "Weeks 5-8",
                    "progress": 45
                },
                {
                    "id": "ph3",
                    "title": "Phase 3: Exam Preparation",
                    "description": "Mock exams and time management strategies.",
                    "status": "Upcoming",
                    "weeks": "Weeks 9-12",
                    "progress": 0
                }
            ],
            "lessons": [],
            "nextPlan": [
                {
                    "title": "1. Core Vocabulary Review",
                    "desc": "Regular review of essential terms."
                },
                {
                    "title": "2. Speaking Practice",
                    "desc": "Weekly free-talk sessions to build confidence."
                },
                {
                    "title": "3. Grammar Consolidation",
                    "desc": "Focus on sentence structure accuracy."
                }
            ]
        },
        "s11": {
            "id": "s11",
            "name": "Konan Saito",
            "course": "Conversational English",
            "target": "Improve daily communication",
            "overallGrade": "B",
            "coreIssue": "Translating Japanese concepts into natural English",
            "coreIssueDetail": "Konan is focusing on daily conversations and expanding from self-introductions to discussing past experiences. He relies heavily on direct translation from Japanese.",
            "focusThisMonth": "Expressing personal history naturally",
            "petraInsight": "Konan actively engages in self-introductions. Our next step is to help him describe past events using correct tenses without sounding translated.",
            "skills": [
                {
                    "name": "Grammar Tenses",
                    "baseLevel": 60,
                    "condition": "Developing",
                    "note": "Past tense issues",
                    "issue": "Mixes up past and present when telling stories.",
                    "improvement": "Narrative storytelling practice."
                },
                {
                    "name": "Vocabulary Breadth",
                    "baseLevel": 65,
                    "condition": "Steady",
                    "note": "Knows daily words",
                    "issue": "Needs more descriptive adjectives.",
                    "improvement": "Read short stories."
                },
                {
                    "name": "Conversational Confidence",
                    "baseLevel": 75,
                    "condition": "Improving",
                    "note": "Willing to share",
                    "issue": "None, very engaged.",
                    "improvement": "Maintain positive environment."
                }
            ],
            "phases": [
                {
                    "id": "ph1",
                    "title": "Self-Introductions",
                    "description": "Mastering basic personal background sharing.",
                    "status": "Completed",
                    "weeks": "Week 1-2",
                    "progress": 100
                },
                {
                    "id": "ph2",
                    "title": "Narrative Storytelling",
                    "description": "Talking about past experiences and memories.",
                    "status": "In Progress",
                    "weeks": "Weeks 3-6",
                    "progress": 20
                },
                {
                    "id": "ph3",
                    "title": "Opinion Sharing",
                    "description": "Expressing thoughts on abstract topics.",
                    "status": "Upcoming",
                    "weeks": "Weeks 7-10",
                    "progress": 0
                }
            ],
            "lessons": [
                {
                    "id": "l_s11_0",
                    "date": "May 11, 2026",
                    "tutor": "Ashley Norton",
                    "type": "Trial",
                    "topic": "English Communication & Introductions",
                    "rating": "Good",
                    "sessionSummary": "Daily conversations and translating some Japanese sentences to English.",
                    "observedStrength": "Very willing to speak and elaborate on self-introductions.",
                    "currentFocusArea": "Using correct past tense when describing history.",
                    "interventionStrategy": "Guided translation and narrative framing.",
                    "responseToIntervention": "Successfully expanded on his self-introduction and talked about his past.",
                    "impacts": [
                        {
                            "skill": "Conversational Confidence",
                            "change": "+2"
                        }
                    ],
                    "content": "自己紹介を中心に話を広げ、自身の過去に関連する事柄を英語で表現した。",
                    "feedback": "Great job today, Konan! You did very well talking about your past experiences.",
                    "homework": "Write a short paragraph about your favorite childhood memory."
                }
            ],
            "nextPlan": [
                {
                    "title": "1. Narrative Practice",
                    "desc": "Focus on recounting past weekend activities."
                },
                {
                    "title": "2. Adjective Expansion",
                    "desc": "Learn new words to describe feelings."
                }
            ]
        },
        "s_new_1780370928720_56": {
            "id": "s_new_1780370928720_56",
            "name": "Handa",
            "course": "General",
            "target": "Improve English",
            "overallGrade": "B",
            "lessons": [
                {
                    "id": "l_s_new_1780370928720_56_1_1780370928720_500",
                    "date": "May 22, 2026",
                    "tutor": "Riku Ishida",
                    "type": "Regular",
                    "topic": "Presentation Preperation",
                    "rating": "Good",
                    "sessionSummary": "During today’s lesson, we discussed university preparation and academic expectations for Yuuka’s upcoming studies in Malaysia. A major focus of the session was exploring possible research paper topics connected to business and society, particularly Corporate Social Responsibility (CSR). We discussed how companies such as Amazon attempt to address their social and environmental impact through policies related to sustainability and transparency. We also talked about how writing research papers and participating in academic projects can strengthen future internship and CV opportunities.\n\nThe lesson also focused heavily on presentation structure and academic communication. Yuuka learned how to organize a professional PowerPoint presentation by creating a strong hook, clear research question, logical structure, supporting statistics and graphs, and a conclusion. We used a previous research presentation regarding Portugal’s drug policy as an example of effective academic presentation structure.\n\nLater in the lesson, we brainstormed additional social research topics, including gender inequality in the workplace and issues surrounding succession within the Japanese Imperial family. We discussed how cultural and historical perspectives can influence modern social systems and opportunities. The lesson concluded with vocabulary and presentation speaking practice to help build confidence for future academic presentations.",
                    "observedStrength": "to decide on research question, topics",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "Today’s lesson focused on university preparation, academic research skills, and presentation development. Yuuka explored several social and business-related research topics, including Corporate Social Responsibility and gender inequality, while also learning how to structure an effective academic presentation using evidence and statistics. We additionally practiced English vocabulary connected to presentations and academic communication. Yuuka showed strong engagement and curiosity throughout the lesson and participated very positively in discussions and brainstorming activities.",
                    "homework": ""
                },
                {
                    "id": "l_s_new_1780370928720_56_2_1780370928720_517",
                    "date": "May 26, 2026",
                    "tutor": "Riku Ishida",
                    "type": "Regular",
                    "topic": "Presentation Creation ",
                    "rating": "Good",
                    "sessionSummary": "During this lesson, we worked on developing the student’s academic English and presentation skills through the topic of gender inequality. The main objective of the lesson was to help the student research, organize, and explain social issues in English while also improving presentation structure and evidence usage. Together, we brainstormed possible presentation themes before narrowing the focus to gender inequality, specifically looking at wage gaps, educational disparities, and social expectations between genders in different countries.\n\nThroughout the lesson, the student researched English-language sources and gathered statistical evidence related to global and Japanese gender inequality. We discussed how to interpret and use statistics effectively within a presentation and practiced organizing ideas into clear sections with supporting evidence. The student also learned how to properly include in-text citations and reference lists to improve the credibility and academic quality of the presentation. In addition, we worked on integrating screenshots, visuals, and supporting materials into a shared Google Document to help structure the final presentation more clearly.",
                    "observedStrength": "Work on finding more evidence for the presentation",
                    "currentFocusArea": "",
                    "interventionStrategy": "",
                    "responseToIntervention": "",
                    "impacts": [],
                    "content": "",
                    "feedback": "今回のレッスンでは、「ジェンダー不平等」をテーマに、英語でのプレゼンテーション作成を進めました。男女間の賃金格差や教育格差、社会的な期待の違いなどについて、英語の資料や統計データを用いながらリサーチを行い、情報を整理しながら発表内容の構成を考えました。\n\nまた、プレゼンテーションに必要な「根拠の示し方」についても学び、統計データの使い方や引用（citation）の入れ方、参考文献リストの作成方法など、アカデミックな発表に必要な基礎スキルも練習しました。Googleドキュメント上で画像やスクリーンショットを整理しながら、視覚的にも分かりやすい発表作りを進めています。\n\nレッスン中は、自分の考えを積極的に出しながら取り組むことができ、社会問題について英語で考え、説明する力が少しずつ伸びてきています。今後は、より自然で分かりやすい英語表現や、発表時の流れ・説明力をさらに強化していく予定です。",
                    "homework": ""
                }
            ]
        }
    },
    "schedules": [
        {
            "id": "38",
            "studentName": "Hiroyuki Iwakura",
            "tutorName": "Hannah Tuffy",
            "studentId": "s12",
            "tutorId": "t2",
            "dateTime": "2026-04-10 11:30:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥1,800.00",
            "margin": "2200"
        },
        {
            "id": "24",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Tina Zheng",
            "studentId": "s1",
            "tutorId": "t1",
            "dateTime": "2026-04-10 18:00:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥1,650.00",
            "margin": "4244"
        },
        {
            "id": "23",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Tina Zheng",
            "studentId": "s1",
            "tutorId": "t1",
            "dateTime": "2026-04-17 18:00:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥1,650.00",
            "margin": "4244"
        },
        {
            "id": "41",
            "studentName": "Kizuki Ishida",
            "tutorName": "Ashley Norton",
            "studentId": "s5",
            "tutorId": "t6",
            "dateTime": "2026-04-19 19:30:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥3,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "1000"
        },
        {
            "id": "25",
            "studentName": "Miyako Isobe",
            "tutorName": "Dayun Suh",
            "studentId": "s2",
            "tutorId": "t3",
            "dateTime": "2026-04-21 17:30:00+09:00",
            "duration": 90,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥6,000.00",
            "payoutAmount": "¥3,000.00",
            "margin": "3000"
        },
        {
            "id": "28",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Tina Zheng",
            "studentId": "s1",
            "tutorId": "t1",
            "dateTime": "2026-04-23 18:15:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥1,650.00",
            "margin": "4244"
        },
        {
            "id": "29",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Riku Ishida",
            "studentId": "s1",
            "tutorId": "t7",
            "dateTime": "2026-04-24 17:30:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥0.00",
            "margin": "5894"
        },
        {
            "id": "19",
            "studentName": "Sarah Sugiyama",
            "tutorName": "Hannah Tuffy",
            "studentId": "s3",
            "tutorId": "t2",
            "dateTime": "2026-04-26 09:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "27",
            "studentName": "Shinichi Fukui",
            "tutorName": "Hannah Tuffy",
            "studentId": "s4",
            "tutorId": "t2",
            "dateTime": "2026-04-27 10:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "48",
            "studentName": "Miyako Isobe",
            "tutorName": "Dayun Suh",
            "studentId": "s2",
            "tutorId": "t3",
            "dateTime": "2026-04-28 17:30:00+09:00",
            "duration": 90,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥6,000.00",
            "payoutAmount": "¥3,000.00",
            "margin": "3000"
        },
        {
            "id": "22",
            "studentName": "Kizuki Ishida",
            "tutorName": "Ashley Norton",
            "studentId": "s5",
            "tutorId": "t6",
            "dateTime": "2026-04-29 21:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥3,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "1000"
        },
        {
            "id": "20",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Tina Zheng",
            "studentId": "s1",
            "tutorId": "t1",
            "dateTime": "2026-04-30 18:15:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥1,650.00",
            "margin": "4244"
        },
        {
            "id": "53",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Alice Williams",
            "studentId": "s1",
            "tutorId": "t5",
            "dateTime": "2026-05-01 18:00:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥1,650.00",
            "margin": "4244"
        },
        {
            "id": "54",
            "studentName": "Lee Akihiro",
            "tutorName": "Alice Williams",
            "studentId": "s6",
            "tutorId": "t5",
            "dateTime": "2026-05-03 10:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥2,000.00",
            "payoutAmount": "¥1,800.00",
            "margin": "200"
        },
        {
            "id": "66",
            "studentName": "Shoji Takanao",
            "tutorName": "Hannah Tuffy",
            "studentId": "s7",
            "tutorId": "t2",
            "dateTime": "2026-05-05 15:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "31",
            "studentName": "Takeshi Kawana",
            "tutorName": "Hannah Tuffy",
            "studentId": "s8",
            "tutorId": "t2",
            "dateTime": "2026-05-06 11:10:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "74",
            "studentName": "Yusuke",
            "tutorName": "Hannah Tuffy",
            "studentId": "s9",
            "tutorId": "t2",
            "dateTime": "2026-05-06 18:30:00+09:00",
            "duration": 30,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥2,000.00",
            "payoutAmount": "¥1,000.00",
            "margin": "1000"
        },
        {
            "id": "26",
            "studentName": "Yuta Sumiya",
            "tutorName": "Hannah Tuffy",
            "studentId": "s10",
            "tutorId": "t2",
            "dateTime": "2026-05-07 18:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "55",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Alice Williams",
            "studentId": "s1",
            "tutorId": "t5",
            "dateTime": "2026-05-07 18:15:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥7,500.00",
            "payoutAmount": "¥2,200.00",
            "margin": "5300"
        },
        {
            "id": "50",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Hazel",
            "studentId": "s1",
            "tutorId": "t4",
            "dateTime": "2026-05-08 18:00:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥1,650.00",
            "margin": "4244"
        },
        {
            "id": "58",
            "studentName": "Sarah Sugiyama",
            "tutorName": "Hannah Tuffy",
            "studentId": "s3",
            "tutorId": "t2",
            "dateTime": "2026-05-09 20:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,200.00",
            "margin": "1800"
        },
        {
            "id": "75",
            "studentName": "Takuma",
            "tutorName": "Ashley Norton",
            "studentId": "s13",
            "tutorId": "t6",
            "dateTime": "2026-05-09 21:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "73",
            "studentName": "Yuki Takenaka",
            "tutorName": "Ashley Norton",
            "studentId": "s14",
            "tutorId": "t6",
            "dateTime": "2026-05-10 10:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "67",
            "studentName": "Miyako Isobe",
            "tutorName": "Dayun Suh",
            "studentId": "s2",
            "tutorId": "t3",
            "dateTime": "2026-05-12 17:30:00+09:00",
            "duration": 90,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,200.00",
            "margin": "1800"
        },
        {
            "id": "76",
            "studentName": "Takeshi Kawana",
            "tutorName": "Hannah Tuffy",
            "studentId": "s8",
            "tutorId": "t2",
            "dateTime": "2026-05-13 13:40:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "84",
            "studentName": "Yuta Sumiya",
            "tutorName": "Hannah Tuffy",
            "studentId": "s10",
            "tutorId": "t2",
            "dateTime": "2026-05-15 12:30:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "56",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Yutaka Takaku",
            "studentId": "s1",
            "tutorId": "t8",
            "dateTime": "2026-05-15 18:15:00+09:00",
            "duration": 45,
            "status": "Completed",
            "paymentStatus": "Paid",
            "billedAmount": "¥5,894.00",
            "payoutAmount": "¥0.00",
            "margin": "5894"
        },
        {
            "id": "88",
            "studentName": "Sarah Sugiyama",
            "tutorName": "Hannah Tuffy",
            "studentId": "s3",
            "tutorId": "t2",
            "dateTime": "2026-05-17 09:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,200.00",
            "margin": "1800"
        },
        {
            "id": "79",
            "studentName": "Shoji Takanao",
            "tutorName": "Hannah Tuffy",
            "studentId": "s7",
            "tutorId": "t2",
            "dateTime": "2026-05-17 18:00:00+09:00",
            "duration": 60,
            "status": "Completed",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "90",
            "studentName": "Tomioka",
            "tutorName": "Alice Williams",
            "studentId": "s15",
            "tutorId": "t5",
            "dateTime": "2026-05-19 08:00:00+09:00",
            "duration": 30,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥0.00",
            "payoutAmount": "¥900.00",
            "margin": "-900"
        },
        {
            "id": "68",
            "studentName": "Miyako Isobe",
            "tutorName": "Dayun Suh",
            "studentId": "s2",
            "tutorId": "t3",
            "dateTime": "2026-05-19 17:30:00+09:00",
            "duration": 90,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥6,000.00",
            "payoutAmount": "¥2,200.00",
            "margin": "3800"
        },
        {
            "id": "83",
            "studentName": "Kizuki Ishida",
            "tutorName": "Ashley Norton",
            "studentId": "s5",
            "tutorId": "t6",
            "dateTime": "2026-05-19 20:30:00+09:00",
            "duration": 45,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥3,125.00",
            "payoutAmount": "¥1,500.00",
            "margin": "1625"
        },
        {
            "id": "91",
            "studentName": "Yuta Sumiya",
            "tutorName": "Hannah Tuffy",
            "studentId": "s10",
            "tutorId": "t2",
            "dateTime": "2026-05-21 16:30:00+09:00",
            "duration": 60,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "57",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Alice Williams",
            "studentId": "s1",
            "tutorId": "t5",
            "dateTime": "2026-05-21 18:15:00+09:00",
            "duration": 60,
            "status": "Scheduled",
            "paymentStatus": "Paid",
            "billedAmount": "¥7,500.00",
            "payoutAmount": "¥2,200.00",
            "margin": "5300"
        },
        {
            "id": "51",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Hazel",
            "studentId": "s1",
            "tutorId": "t4",
            "dateTime": "2026-05-22 18:00:00+09:00",
            "duration": 60,
            "status": "Scheduled",
            "paymentStatus": "Paid",
            "billedAmount": "¥7,500.00",
            "payoutAmount": "¥2,200.00",
            "margin": "5300"
        },
        {
            "id": "69",
            "studentName": "Miyako Isobe",
            "tutorName": "Dayun Suh",
            "studentId": "s2",
            "tutorId": "t3",
            "dateTime": "2026-05-26 17:30:00+09:00",
            "duration": 90,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥6,000.00",
            "payoutAmount": "¥2,200.00",
            "margin": "3800"
        },
        {
            "id": "89",
            "studentName": "Takeshi Kawana",
            "tutorName": "Hannah Tuffy",
            "studentId": "s8",
            "tutorId": "t2",
            "dateTime": "2026-05-27 11:10:00+09:00",
            "duration": 60,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        },
        {
            "id": "59",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Hazel",
            "studentId": "s1",
            "tutorId": "t4",
            "dateTime": "2026-05-28 18:15:00+09:00",
            "duration": 60,
            "status": "Scheduled",
            "paymentStatus": "Paid",
            "billedAmount": "¥7,500.00",
            "payoutAmount": "¥2,200.00",
            "margin": "5300"
        },
        {
            "id": "52",
            "studentName": "Tadashi Hashimoto",
            "tutorName": "Hazel",
            "studentId": "s1",
            "tutorId": "t4",
            "dateTime": "2026-05-29 18:00:00+09:00",
            "duration": 60,
            "status": "Scheduled",
            "paymentStatus": "Paid",
            "billedAmount": "¥7,500.00",
            "payoutAmount": "¥2,200.00",
            "margin": "5300"
        },
        {
            "id": "60",
            "studentName": "Sarah Sugiyama",
            "tutorName": "Hannah Tuffy",
            "studentId": "s3",
            "tutorId": "t2",
            "dateTime": "2026-05-31 11:00:00+09:00",
            "duration": 120,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥8,000.00",
            "payoutAmount": "¥4,400.00",
            "margin": "3600"
        },
        {
            "id": "92",
            "studentName": "Shoji Takanao",
            "tutorName": "Hannah Tuffy",
            "studentId": "s7",
            "tutorId": "t2",
            "dateTime": "2026-05-31 18:00:00+09:00",
            "duration": 60,
            "status": "Scheduled",
            "paymentStatus": "Unpaid",
            "billedAmount": "¥4,000.00",
            "payoutAmount": "¥2,000.00",
            "margin": "2000"
        }
    ]
};