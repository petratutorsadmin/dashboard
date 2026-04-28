export const db = {
  parents: [
    {
      id: "p1",
      username: "tadashi_parent",
      password: "tad9shi",
      name: "Jessica",
      studentId: "s1"
    },
    {
      id: "p2",
      username: "isobesama",
      password: "petraPassword",
      name: "Isobe様",
      studentId: "s2",
      lang: "ja"
    },
    {
      id: "p3",
      username: "sugiyama_parent",
      password: "petraPassword",
      name: "Sugiyama様",
      studentId: "s3",
      lang: "ja"
    }
  ],
  admins: [
    {
      id: "a1",
      username: "admin",
      password: "petraPassword",
      name: "Petra Admin"
    }
  ],
  tutors: [
    {
      id: "t1",
      username: "tina_tutor",
      password: "petraPassword",
      name: "Tina",
      role: "EIKEN / Academic English Tutor",
      assignedStudents: ["s1"],
      nextLesson: { studentId: "s1", time: "Today 6:00 PM" },
      todayAgenda: [
        "Review Tadashi's unfinished homework before the lesson",
        "Prepare one short EIKEN-style reading passage",
        "Submit Tadashi lesson report after class",
        "Flag any parent-facing concern to Petra admin"
      ]
    },
    {
      id: "t2",
      username: "hannah_tutor",
      password: "petraPassword",
      name: "Hannah Tuffy",
      role: "Advanced Speaking & Cultural Immersion",
      assignedStudents: ["s3"],
      nextLesson: { studentId: "s3", time: "Tomorrow 9:00 AM" },
      todayAgenda: [
        "Review Sarah's English Vocabulary in Use",
        "Prepare new 'would you rather' slides"
      ]
    },
    {
      id: "t3",
      username: "day_tutor",
      password: "petraPassword",
      name: "Day",
      role: "Study Abroad Preparation",
      assignedStudents: ["s2"],
      nextLesson: null,
      todayAgenda: [
        "Review Miyako's English diary",
        "Prepare Unit 2 location vocabulary"
      ]
    }
  ],
  students: {
    s1: {
      id: "s1",
      name: "Tadashi",
      course: "EIKEN Pre-1 Writing & Reading Support",
      target: "Pass EIKEN Pre-1. Improve reading comprehension and stabilize writing performance.",
      overallGrade: "B-",
      coreIssue: "Weak reading comprehension is limiting overall performance.",
      coreIssueDetail: "The main issue is not knowledge, but processing. Without full understanding of text and prompts, writing becomes unstable.",
      focusThisMonth: "Reading → Summary → Writing connection",
      skills: [
        { 
            name: "Vocabulary Understanding", grade: "B+", level: 82, note: "Strong word meaning",
            issue: "Knows meanings well but needs regular reinforcement rather than rote memorization.",
            improvement: "Regular vocabulary review focusing on context and familiarity."
        },
        { 
            name: "Spelling", grade: "C", level: 42, note: "Needs pattern training", warning: true,
            issue: "Struggles with spelling accuracy on common words ('should', 'because') and specific suffixes ('-ture', '-tion').",
            improvement: "Reinforce spelling patterns and continue 10-word spelling checks weekly."
        },
        { 
            name: "Grammar & Punctuation", grade: "C", level: 45, note: "Basic accuracy unstable",
            issue: "Inconsistent capitalization and comma usage in sentences.",
            improvement: "Practice sentence segmentation and review basic punctuation rules."
        },
        { 
            name: "Writing Structure", grade: "B-", level: 62, note: "Understands basics",
            issue: "Understands basic structure but needs to practice writing introductions with hooks and comprehensive conclusions.",
            improvement: "Practice incorporating a hook/background info in the intro, and restating both opinion and reasons in the conclusion."
        },
        { 
            name: "Reading Comprehension", grade: "C-", level: 35, note: "Main challenge identified", critical: true,
            issue: "Finds it difficult to fully understand the context of passages, which negatively impacts writing tasks.",
            improvement: "Introduce structured reading strategies to help with context understanding before attempting to write."
        },
        { 
            name: "Logical Thinking", grade: "A-", level: 88, note: "Adapts quickly",
            issue: "Strong potential, but needs more practice applying complex structures in independent writing.",
            improvement: "Continue to engage with complex topics and build background knowledge to support arguments."
        },
      ],
      phases: [
        {
            title: "Phase 1",
            label: "Foundation Stabilization",
            period: "Weeks 1–3",
            progress: 40,
            items: [
                "10-word spelling check every lesson",
                "Sentence accuracy training",
                "Capitalization and punctuation correction",
            ],
        },
        {
            title: "Phase 2",
            label: "Reading → Expression",
            period: "Weeks 3–5",
            progress: 20,
            items: [
                "Paragraph-by-paragraph summary",
                "Identify main idea and reasoning",
                "Read first, then write response",
            ],
        },
        {
            title: "Phase 3",
            label: "Exam Performance",
            period: "Weeks 5–8",
            progress: 0,
            items: [
                "Timed EIKEN writing",
                "Full mock test",
                "Score tracking and weak-point review",
            ],
        },
      ],
      lessons: [
        {
            id: "rDOogXN",
            date: "Apr 24, 2026",
            tutor: "Riku",
            type: "Make-up",
            topic: "EIKEN Pre-1 Overall Practice",
            rating: "Good",
            content: "We covered vocabulary (1000 Basic Words) and spelling (allot, deliberate, empathy). We then did EIKEN Pre-1 overall practice, including reading comprehension and two writing tasks.",
            feedback: "Tadashi demonstrated good vocabulary knowledge, but spelling accuracy needs practice. His main challenge is reading comprehension, which affected his ability to respond correctly in writing. We will place greater emphasis on improving reading comprehension strategies.",
            homework: "Review and practice spelling of key vocabulary. Focus on identifying spelling patterns. Complete writing practice."
        },
        {
            id: "Kp5kZq8",
            date: "Apr 23, 2026",
            tutor: "Tina",
            type: "Regular",
            topic: "English Composition Writing",
            rating: "Excellent",
            content: "Briefly revised paragraph structure with sample essays. Introduced more complex structures like hooks and restating reasons in conclusions. Taught flexible body paragraph structure (using results instead of just examples).",
            feedback: "Tadashi remembered key content well and showed good understanding of basic essay structure. He needs more practice applying complex structures like hooks. He forgot his homework from 4/17.",
            homework: "Highlight structural elements in the other two sample essays. Finish homework from last lesson."
        },
        {
            id: "gbeXqNP",
            date: "Apr 17, 2026",
            tutor: "Tina",
            type: "Regular",
            topic: "English Composition Writing",
            rating: "Excellent",
            content: "Reviewed homework, vocabulary, and grammar rules (capitalization, comma usage). Broke down EIKEN writing prompt. Wrote intro and first body paragraph together.",
            feedback: "Tadashi showed strong background knowledge. He was focused and engaged. We will work on improving consistency and accuracy, especially with punctuation and spelling.",
            homework: "Finish writing the second body paragraph. Optional: conclusion and vocabulary review."
        },
        {
            id: "J1qvbQR",
            date: "Apr 10, 2026",
            tutor: "Tina",
            type: "Trial",
            topic: "EIKEN Pre-1 Introduction",
            rating: "Excellent",
            content: "Assessed speaking ability and introduced EIKEN Pre-1 structure, time, and word count. Writing practice on 'Should students use AI to complete their homework?'. Introduced basic essay structure.",
            feedback: "Tadashi shows strong logical thinking and adapts quickly. He needs to improve spelling, punctuation, and capitalization. Vocabulary should be reviewed regularly for familiarity.",
            homework: "1. Go through vocab list. 2. Complete English Summarization section of EIKEN Pre-1."
        }
      ],
      nextPlan: [
        {
          title: "1. Reading Comprehension Focus",
          desc: "Introduce structured reading strategies to help with context understanding."
        },
        {
          title: "2. Spelling & Vocab Reinforcement",
          desc: "Review key EIKEN Pre-1 vocabulary and identify spelling patterns (-ture, -tion)."
        },
        {
          title: "3. Writing Application",
          desc: "Focus on understanding source material first before responding to prompts."
        }
      ]
    },
    s2: {
      id: "s2",
      name: "Miyako Isobe",
      course: "Study Abroad & IELTS Prep",
      target: "Discovering the student's English level and the contents she would like to learn for her final goal, which is to study abroad.",
      overallGrade: "B",
      coreIssue: "Transitioning to academic syntax",
      coreIssueDetail: "She has mastered basic grammar like 'there is/are', but needs to master complex structures, articles (a/an/the), and negative questions to reach academic level.",
      focusThisMonth: "Vocabulary building and sentence structure",
      skills: [
        { 
            name: "Vocabulary", grade: "C+", level: 60, note: "Needs academic vocabulary", warning: true,
            issue: "Only confident with about half of the '1000 Basic English Words'.",
            improvement: "Review academic and daily location vocabulary daily and practice using them in context."
        },
        { 
            name: "Grammar Foundations", grade: "B+", level: 85, note: "Basics are solid",
            issue: "Struggles with specific rules like using definite/indefinite articles (a/an/the) and direct translation of negative questions.",
            improvement: "Drills focused on article usage and translating negative questions from Japanese to English."
        },
        { 
            name: "Sentence Structure", grade: "B-", level: 65, note: "Eager to improve",
            issue: "Needs to learn how to construct correct sentence structures independently for higher-level academic writing.",
            improvement: "Practice writing an English diary using new grammar rules to build writing confidence."
        }
      ],
      phases: [
        {
            title: "Phase 1",
            label: "Grammar Foundations",
            period: "Weeks 1–3",
            progress: 30,
            items: [
                "Master a/an/the article rules",
                "Understand negative question structures",
                "English diary writing practice",
            ],
        },
        {
            title: "Phase 2",
            label: "Vocabulary Retention",
            period: "Weeks 3–6",
            progress: 10,
            items: [
                "Complete 1000 Basic English Words",
                "Use vocabulary in academic context",
                "Long reading comprehension drills",
            ],
        }
      ],
      lessons: [
        {
            id: "s2_l3",
            date: "Apr 21, 2026",
            tutor: "Riku",
            type: "Consultation",
            topic: "Speaking, Basic English",
            rating: "Excellent",
            content: "Initial lesson support and speaking assessment. We started with introductions with the tutor and parents, followed by light conversation about hobbies and background to create a relaxed atmosphere. After that, the lesson proceeded using the tutor's prepared materials. I attended mainly as support to observe the flow and the student's progress.",
            feedback: "As this was the first lesson, we focused on creating a comfortable environment and observing her English communication. Although Miyako mentioned she was nervous, she was actually very calm and expressed herself clearly in her own words. She actively participated in the conversation, making it a great start. Moving forward, we will leverage this strength to build her confidence while improving her speaking skills.",
            homework: "Homework details were provided directly by the tutor."
        },
        {
            id: "s2_l2",
            date: "Apr 12, 2026",
            tutor: "Riku",
            type: "Trial",
            topic: "Speaking, Basic English",
            rating: "Excellent",
            content: "The lesson focused on practical speaking without using a textbook. We practiced natural communication assuming a conversation with someone meeting for the first time, covering self-introductions, hobbies, and background. I provided real-time feedback on natural phrasing and sentence structure, and connected useful vocabulary to the student's actual speech.",
            feedback: "Today we had a practical English conversation lesson focusing on speaking. Although Miyako mentioned feeling nervous, she actually showed very high ability to express herself and the conversation flowed smoothly. She has a proactive attitude toward speaking, which is a great learning mindset. I was particularly impressed that she understands the core concept that 'English is learned by speaking' and is eager to focus on output. Her pronunciation is also very good. The current challenge is not her English ability itself, but rather building 'familiarity' and 'confidence', which we hope to develop at Petra.",
            homework: "None (Trial lesson)"
        },
        {
            id: "s2_l1",
            date: "Apr 21, 2026",
            tutor: "Day",
            type: "Trial",
            topic: "Speaking, Reading, Grammar Practice",
            rating: "Good",
            content: "Basic Self Introduction(Name, birthday, age, where from, etc.). Location vocabulary (Unit 1). Reading a dialogue and solving related questions.",
            feedback: "She felt basic structures ('there is/are') were very easy, but was only confident with half the words in Unit 1. She wants to learn sentence construction, article usage, negative questions, and IELTS prep.",
            homework: "Write an English diary entry to enjoy practicing and assess current writing level."
        }
      ],
      nextPlan: [
        {
          title: "1. Basic Grammar",
          desc: "Focus on rules for using 'a', 'an', and 'the' in sentences."
        },
        {
          title: "2. Structure Practice",
          desc: "Review diary homework together and correct sentence structures."
        },
        {
          title: "3. Vocabulary Review",
          desc: "Review incorrect words from '1000 Basic English Words'."
        }
      ],
      ja: {
          course: "海外留学 ＆ IELTS 準備コース",
          target: "海外留学に向けての準備と、IELTSの基礎的な学習を開始します。",
          coreIssue: "アカデミックな構文への移行",
          coreIssueDetail: "「there is/are」などの基本的な文法はしっかりと定着していますが、アカデミックレベルに到達するためには、複雑な文構造や冠詞（a/an/the）、否定疑問文をマスターする必要があります。",
          focusThisMonth: "語彙力の強化と文構造の理解",
          skills: [
            { 
                name: "語彙力 (Vocabulary)", note: "アカデミックな語彙の強化が必要",
                issue: "基礎的な「1000 Basic English Words」のうち、自信を持って答えられるのは約半分です。",
                improvement: "アカデミックおよび日常的な場所に関する語彙を毎日復習し、文脈の中で使う練習をします。"
            },
            { 
                name: "基礎文法 (Grammar Foundations)", note: "基礎は定着しています",
                issue: "定冠詞/不定冠詞（a/an/the）の使い分けや、否定疑問文の日本語からの直訳など、特定の細かいルールでつまずくことがあります。",
                improvement: "冠詞の使い方に特化したドリルや、日本語から英語への否定疑問文の変換練習を行います。"
            },
            { 
                name: "文構造 (Sentence Structure)", note: "さらに上達したいという意欲があります",
                issue: "より高いレベルのアカデミック・ライティングのために、自ら正しい文構造を組み立てる方法を学ぶ必要があります。",
                improvement: "新しい文法ルールを使って英語日記を書く練習をし、ライティングへの自信をつけさせます。"
            }
          ],
          phases: [
            {
                label: "文法の基礎固め",
                period: "第1〜3週",
                items: [
                    "a/an/theの冠詞ルールのマスター",
                    "否定疑問文の構造理解",
                    "英語日記のライティング練習",
                ],
            },
            {
                label: "語彙力の定着",
                period: "第3〜6週",
                items: [
                    "1000 Basic English Words の完了",
                    "アカデミックな文脈での語彙の使用",
                    "長文読解ドリル",
                ],
            }
          ],
          lessons: [
            {
                date: "2026年4月21日",
                type: "Consultation",
                topic: "Speaking, Basic English",
                content: "初回レッスンサポートおよびスピーキング力の初期診断（コミュニケーション力・自信の把握）。当日は、講師の紹介および保護者様・生徒様との簡単な自己紹介からスタートし、英語での軽い会話（趣味やバックグラウンド等）を通して、リラックスした雰囲気づくりを行いました。その後は、講師が事前に準備した教材（プリント・テキスト）を使用し、計画に沿ってレッスンが進行されました。私は主にサポートとして同席し、レッスンの進行や生徒様の様子を確認しておりました。",
                feedback: "本日は初回レッスンということもあり、安心してご参加いただける環境づくりと、英語でのコミュニケーションの様子を確認させていただきました。生徒様は緊張されているとお話しされていましたが、実際には非常に落ち着いており、自分の言葉でしっかりと英語を使って表現されていました。積極的に会話に参加する姿勢も見られ、とても良いスタートとなりました。今後は、この強みを活かしながら、自信をさらに高めつつスピーキング力の向上を図ってまいります。",
                homework: "本レッスンの宿題は講師より案内しております。"
            },
            {
                date: "2026年4月12日",
                type: "体験レッスン",
                topic: "Speaking, Basic English",
                content: "本レッスンではテキストは使用せず、実際の会話を想定したスピーキング中心の内容で進めました。初対面の相手と英語で会話をする場面を想定し、自己紹介や趣味、バックグラウンドなどについて自然な形でやり取りを行いながら、コミュニケーションの流れを重視した練習を行いました。また、会話の中で実際に使える表現やフレーズをその場で指摘・共有し、「どのような言い方を覚えておくと良いか」「どのような文の組み立てが自然か」といった点についても具体的にフィードバックを行いました。",
                feedback: "本日はスピーキングを中心とした実践的な英会話レッスンを行いました。生徒様は緊張されているとのことでしたが、実際には英語での自己表現力が非常に高く、会話もスムーズに進めることができていました。また、自ら積極的に発話する姿勢が見られ、とても良い学習姿勢であると感じております。特に印象的だったのは、「英語は話すことで身につく」という本質的な学習方法をすでに理解されており、アウトプットを重視した学びに取り組もうとされている点です。また、発音も非常に良く、日頃から英語の映画などに触れていることが良い形で反映されていました。現時点での課題は、英語力そのものというよりも、「慣れ」や「自信」といった心理的な部分にあると考えらるので、ペトラで自信を伸ばせていけたらと思います。",
                homework: "体験授業ですので、宿題は出しませんでした。"
            },
            {
                date: "2026年4月21日",
                type: "体験レッスン",
                topic: "スピーキング、リーディング、文法練習",
                content: "現在の英語レベルと留学に向けた目標の確認を行いました。基本的な自己紹介、場所に関する語彙（Unit 1）、および関連問題の解読（テキストの対話文）をカバーしました。",
                feedback: "基本的な構造（「there is/are」）は非常に簡単だと感じていましたが、Unit 1の単語の約半分しか自信がないようでした。本人は、文構造の作り方、冠詞（a/an/the）の使い方、否定疑問文、そしてIELTSの準備を希望しています。",
                homework: "楽しんで英語を練習し、現在のライティングレベルを確認するために、英語日記を書いてきてください。"
            }
          ],
          nextPlan: [
            {
              title: "1. 基礎文法",
              desc: "文章中の「a」「an」「the」の使い方のルールに焦点を当てます。"
            },
            {
              title: "2. 構造の練習",
              desc: "宿題の英語日記を一緒に確認し、文構造を添削します。"
            },
            {
              title: "3. 語彙の確認",
              desc: "「1000 Basic English Words」で間違えた単語の復習を行います。"
            }
          ]
      }
    },
    s3: {
      id: "s3",
      name: "Sarah Sugiyama",
      course: "Advanced Speaking & Cultural Immersion",
      target: "Maintain current high fluency, expand precise vocabulary, and practice practical dialogues.",
      overallGrade: "A-",
      coreIssue: "Refining native-level expression",
      coreIssueDetail: "She already possesses extremely high skills in speaking, reading, and listening. The next challenge is constructing more precise sentences, acquiring advanced vocabulary (e.g., health/science fields), and understanding cultural nuances (e.g., Irish English).",
      focusThisMonth: "Realistic school conversation scenarios and advanced vocabulary drills",
      skills: [
        { 
            name: "Speaking Confidence", grade: "A", level: 95, note: "Extremely high descriptive ability",
            issue: "No major issues. She can speak clearly about her interests (e.g., track and field, science club).",
            improvement: "Continue exercises involving longer descriptions and making inferences."
        },
        { 
            name: "Reading/Listening Comp.", grade: "A", level: 90, note: "Excellent",
            issue: "Can understand lessons conducted almost entirely in English without problems.",
            improvement: "Incorporate cultural nuances (Irish culture and English) to expand listening breadth."
        },
        { 
            name: "Advanced Vocabulary", grade: "B+", level: 85, note: "Learning technical terms",
            issue: "Encountering new technical terms in health and science fields (e.g., 'suffers from', 'Cancer').",
            improvement: "Use 'English Vocabulary in Use' textbook drills to solidify new words."
        },
        { 
            name: "Grammar Accuracy", grade: "B+", level: 82, note: "Phase of increasing accuracy", warning: true,
            issue: "Needs to perfect the distinction between specific articles ('a', 'the', and no article) in complex sentences.",
            improvement: "Practice constructing accurate sentences during scenario practice using slides."
        }
      ],
      phases: [
        {
            title: "Phase 1",
            label: "Practical Dialogues (Conversation)",
            period: "Weeks 1–4",
            progress: 80,
            items: [
                "Office hours scenario (asking a teacher questions)",
                "Discussion about science homework",
                "Immersion in Irish culture",
            ],
        },
        {
            title: "Phase 2",
            label: "Acquisition of Advanced Vocab",
            period: "Weeks 1–4",
            progress: 50,
            items: [
                "Health/medical-related vocabulary",
                "'English Vocabulary in Use' textbook",
                "Practice inferring and describing from paintings",
            ],
        }
      ],
      lessons: [
        {
            id: "s3_l1",
            date: "Apr 26, 2026",
            tutor: "Hannah Tuffy",
            type: "Trial",
            topic: "Assessment, Slides & Textbook",
            rating: "Excellent",
            content: "Introductions, 'Would you rather' game, 2 dialogue practice scenarios (science homework, office hours). Vocabulary and drills using textbook (English Vocabulary in Use, Unit 20: Health).",
            feedback: "She possesses very high skills in speaking, listening, and reading. She demonstrated advanced vocabulary and solid pronunciation. She seemed to enjoy the customized slideshow activities and the textbook also helped her learn new content.",
            homework: "No specific homework for this lesson."
        }
      ],
      nextPlan: [
        {
          title: "1. Interactive Slideshow",
          desc: "Continue using custom slides incorporating 'Would you rather' and painting inference activities."
        },
        {
          title: "2. Textbook Drills",
          desc: "Work on 'English Vocabulary in Use' for about 30 minutes to learn new content."
        },
        {
          title: "3. Cultural Immersion",
          desc: "Continue incorporating Irish culture and Irish English expressions into conversations and realistic school scenarios."
        }
      ],
      ja: {
          course: "高度なスピーキング＆異文化理解コース",
          target: "現在の高い流暢さを維持し、より正確な語彙を増やし、実践的な対話練習を行います。",
          coreIssue: "ネイティブレベルの表現力の研鑽",
          coreIssueDetail: "スピーキング、リーディング、リスニングにおいてはすでに非常に高いスキルを持っています。今後の課題は、より正確な文章の構築、高度な語彙（健康/科学分野など）の習得、そして文化的なニュアンス（アイルランド英語など）の理解です。",
          focusThisMonth: "学校でのリアルな会話シナリオと高度な語彙ドリル",
          skills: [
            { 
                name: "スピーキングへの自信", note: "描写力が非常に高いです",
                issue: "大きな課題はありません。自分の興味のあること（陸上競技や科学クラブなど）について明確に話すことができます。",
                improvement: "引き続き、長めの描写を伴うスピーキングや、推測を行うエクササイズを行います。"
            },
            { 
                name: "リーディング/リスニング理解度", note: "Excellent",
                issue: "ほぼすべて英語で行われるレッスンでも問題なく理解できています。",
                improvement: "リスニングの幅を広げるために、文化的なニュアンス（アイルランドの文化や英語）を取り入れます。"
            },
            { 
                name: "高度な語彙力", note: "専門用語を学習中",
                issue: "健康や科学分野の新しい専門用語（例: 'suffers from', 'Cancer'）に出会っています。",
                improvement: "「English Vocabulary in Use」のテキストドリルを使用し、新しい単語を確実におさえます。"
            },
            { 
                name: "文法の正確さ", note: "正確さを高める段階",
                issue: "複雑な文章において、特定の冠詞（'a' と 'the' と 無冠詞）の使い分けを完璧にする必要があります。",
                improvement: "スライドを用いたシナリオ練習中に、正確な文章を作る練習をします。"
            }
          ],
          phases: [
            {
                label: "実践的なダイアログ（会話）",
                period: "第1〜4週",
                items: [
                    "オフィスアワー（先生への質問）のシナリオ",
                    "理科の宿題についてのディスカッション",
                    "アイルランド文化への没入",
                ],
            },
            {
                label: "高度な語彙力の習得",
                period: "第1〜4週",
                items: [
                    "健康/医療関連の語彙",
                    "「English Vocabulary in Use」テキスト",
                    "絵画から推測して描写する練習",
                ],
            }
          ],
          lessons: [
            {
                date: "2026年4月26日",
                type: "体験レッスン",
                topic: "アセスメント、スライド＆テキスト",
                content: "自己紹介、「Would you rather（究極の選択）」ゲーム、2つの対話練習シナリオ（理科の宿題、オフィスアワー）。テキストを使用した語彙とドリル（English Vocabulary in Use, Unit 20: Health）。",
                feedback: "スピーキング、リスニング、リーディングにおいて非常に高いスキルを持っています。高度な語彙力としっかりとした発音を披露してくれました。カスタマイズしたスライドショーのアクティビティを楽しみ、テキストも新しい内容を学ぶのに役立ったようです。",
                homework: "今回のレッスンでは特定の宿題はありません。"
            }
          ],
          nextPlan: [
            {
              title: "1. インタラクティブなスライドショー",
              desc: "「Would you rather」や絵画の推測アクティビティを取り入れたカスタムスライドを引き続き使用します。"
            },
            {
              title: "2. テキストドリル",
              desc: "新しい内容を学習するために、「English Vocabulary in Use」に約30分間取り組みます。"
            },
            {
              title: "3. 異文化理解",
              desc: "会話やリアルな学校のシナリオに、アイルランド文化やアイルランド英語の表現を引き続き取り入れていきます。"
            }
          ]
      }
    }
  }
};
