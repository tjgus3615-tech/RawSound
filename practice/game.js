/**
 * RawSound proposal quest
 * Stages follow the order of sections in 앱 기획안.pdf
 */
document.addEventListener('DOMContentLoaded', () => {
    const STAGES = [
        {
            kicker: '01 · 기획의도',
            title: '제작 배경',
            icon: 'fa-lightbulb',
            paragraphs: [
                '영어를 어느 정도 할 줄 앎에도 불구하고 해외여행이나 교환학생 생활 중 문화권마다 가진 다른 영어 발음으로 인해 상대방의 말을 알아듣기 어려운 경우가 꽤 있었다. 또한 영어 발음이나 사용하는 단어가 달라서 외국인들과 소통의 오류가 발생하는 경우를 꽤 겪었으며 주변의 사례도 많이 듣게 되었다. 자연스럽게 정제된 영어가 아닌 ‘날 것’의 영어를 배우고 싶다고 느끼게 되었다.',
                '드라마나 영화를 통해 영어를 배우는 앱은 많지만, 다양한 영어 악센트에 집중한 앱은 본 적이 없다. 다양한 악센트 학습을 통해 더 많은 사람들의 이야기를 듣고, 그것을 자신의 것으로 만들어 자신감을 얻을 수 있는 앱을 만들고 싶다.'
            ]
        },
        {
            kicker: '02 · 기획의도',
            title: '제작 목표',
            icon: 'fa-bullseye',
            groups: [
                {
                    title: '목표',
                    items: [
                        '영어의 악센트, 인토네이션을 이해하고 비슷하게 말함',
                        '리스닝, 스피킹 향상',
                        '영어에 대한 자신감 향상'
                    ]
                }
            ]
        },
        {
            kicker: '03 · 기획의도',
            title: '대상 사용자',
            icon: 'fa-users',
            groups: [
                {
                    title: '누구를 위한 앱인가',
                    items: [
                        '전세계 이용자',
                        '해외살이 준비하는 사람',
                        '영어 발음을 개선하거나 바꾸고 싶은 사람',
                        '다른 국적의 캐릭터를 연기해야 하는 배우'
                    ]
                }
            ]
        },
        {
            kicker: '04 · 핵심 기능',
            title: '기본기능',
            icon: 'fa-volume-high',
            groups: [
                {
                    title: '기본기능',
                    items: [
                        '원하는 나라의 악센트를 선택하고 단어 혹은 문장을 입력하면 그 악센트로 읽어주는 기능',
                        '음성 AI를 통해 여러 단어와 문장을 다양한 나라의 억양으로 듣고 따라하는 기능. 사용자의 목소리를 녹음하면 AI가 정확도를 판별하고 솔루션을 제공',
                        '각기 다른 억양의 문장이나 단어를 듣고 유추하는 게임형 학습 기능'
                    ]
                }
            ]
        },
        {
            kicker: '05 · 핵심 기능',
            title: '부가기능',
            icon: 'fa-book-bookmark',
            groups: [
                {
                    title: '부가기능',
                    items: [
                        '한 국가 혹은 일부 문화권에서만 사용하는 언어, 슬랭 등을 학습할 수 있는 단어사전',
                        '리스닝 연습을 위한 배속 기능'
                    ]
                }
            ]
        },
        {
            kicker: '06',
            title: '차별성',
            icon: 'fa-star',
            groups: [
                {
                    title: '다른 앱과 다른 점',
                    items: [
                        '이미 많이 알려진 미국, 영국, 호주 등의 일부 국가뿐만 아니라 유럽, 동아시아, 중동, 아프리카 등등 다양한 지역의 악센트를 배울 수 있음',
                        '나라별 뿐만 아니라 나라 안에서의 지역별 악센트 차이를 배울 수 있음'
                    ]
                }
            ]
        },
        {
            kicker: '07',
            title: '기대효과 및 활용방안',
            icon: 'fa-seedling',
            groups: [
                {
                    title: '사용자가 얻는 이점',
                    items: ['리스닝 능력 향상, 스피킹 유창성 향상']
                },
                {
                    title: '교육적 / 실생활적 활용 방안',
                    items: ['해외살이 이전 리스닝 연습']
                }
            ]
        },
        {
            kicker: '08',
            title: '향후 발전 가능성',
            icon: 'fa-rocket',
            groups: [
                {
                    title: '추가 개발 아이디어',
                    items: [
                        '언어 속 숨어 있는 문화적 배경, 역사 등을 학습하면 학습 효율이 더욱 향상될 것이라 기대됨',
                        '언어교환 커뮤니티 기능. AI나 인터넷만으로 해결할 수 없는 언어적 궁금증을 앱 안 커뮤니티를 통해 해소'
                    ]
                },
                {
                    title: '지속 가능성',
                    items: [
                        '문화는 지속적으로 바뀌기 때문에 변화하는 악센트와 새로운 단어와 문장을 빠르게 AI에게 학습시킬 필요가 있음'
                    ]
                }
            ]
        },
        {
            kicker: '09',
            title: '창업가능성',
            icon: 'fa-briefcase',
            paragraphs: ['창업을 현실화할 수 있는 가장 좋은 방법은?'],
            groups: [
                {
                    title: '방법',
                    items: [
                        '개발자로 일하고 있는 가족에게 상담하고 조언을 구한다. 가능하면 가족이 일하는 회사에 소개하는 기회를 만든다.'
                    ]
                }
            ]
        },
        {
            kicker: '10',
            title: '방문하고 싶은 회사',
            icon: 'fa-building',
            groups: [
                {
                    title: '스픽 (Speak)',
                    items: [
                        '• 미국 실리콘밸리에 본사를 둔 스픽이지랩스에서 출시한 AI 영어 스피킹 애플리케이션\n• 2024년 1월 기준 국내 500만 다운로드를 돌파\n\n현재 국내에서 영어학습 앱으로 가장 유명하고\n실제로 ai를 활용한 영어회화 기능을 가장 효과적으로\n구현한 회사라고 생각한다.'
                    ]
                }
            ]
        }
    ];

    const titleScreen = document.getElementById('titleScreen');
    const stageScreen = document.getElementById('stageScreen');
    const clearScreen = document.getElementById('clearScreen');
    if (!titleScreen || !stageScreen) return;

    const stageMap = document.getElementById('stageMap');
    const questCard = document.getElementById('questCard');
    const questStageTag = document.getElementById('questStageTag');
    const questIcon = document.getElementById('questIcon');
    const questKicker = document.getElementById('questKicker');
    const questTitle = document.getElementById('questTitle');
    const questBody = document.getElementById('questBody');
    const questBar = document.getElementById('questBar');
    const navStageLabel = document.getElementById('navStageLabel');
    const nextLabel = document.getElementById('nextLabel');
    const nextIcon = document.getElementById('nextIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const clearList = document.getElementById('clearList');

    let index = 0;
    let started = false;

    STAGES.forEach((stage, i) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'stage-map-btn';
        btn.dataset.index = String(i);
        const no = document.createElement('span');
        no.className = 'map-no';
        no.textContent = String(i + 1).padStart(2, '0');
        const label = document.createElement('span');
        label.className = 'map-label';
        label.textContent = stage.title;
        btn.append(no, label);
        btn.addEventListener('click', () => showStage(i));
        li.appendChild(btn);
        stageMap.appendChild(li);

        if (clearList) {
            const item = document.createElement('li');
            const mark = document.createElement('span');
            mark.className = 'clear-no';
            mark.textContent = String(i + 1).padStart(2, '0');
            item.append(mark, document.createTextNode(stage.title));
            clearList.appendChild(item);
        }
    });

    const questNavMeta = document.getElementById('questNavMeta');

    function setScreen(name) {
        titleScreen.hidden = name !== 'title';
        stageScreen.hidden = name !== 'stage';
        clearScreen.hidden = name !== 'clear';
        if (questNavMeta) questNavMeta.hidden = name === 'title';
    }

    function renderBody(stage) {
        questBody.replaceChildren();
        (stage.paragraphs || []).forEach((text) => {
            const p = document.createElement('p');
            p.textContent = text;
            questBody.appendChild(p);
        });
        (stage.groups || []).forEach((group) => {
            const wrap = document.createElement('div');
            wrap.className = 'quest-group';
            const heading = document.createElement('span');
            heading.className = 'quest-group-title';
            heading.textContent = group.title;
            const list = document.createElement('ul');
            list.className = 'quest-list';
            group.items.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
            });
            wrap.append(heading, list);
            questBody.appendChild(wrap);
        });
    }

    function showStage(nextIndex) {
        index = nextIndex;
        started = true;
        const stage = STAGES[index];
        const no = String(index + 1).padStart(2, '0');

        setScreen('stage');
        stageScreen.classList.toggle('is-intent', index === 0);
        stageScreen.classList.toggle('is-goal', index === 1);
        stageScreen.classList.toggle('is-user', index === 2);
        stageScreen.classList.toggle('is-feature', index === 3 || index === 4);
        stageScreen.classList.toggle('is-story', index >= 5);
        stageScreen.classList.toggle('is-level', index === 6);
        if (index === 0) playIntent();
        else stopIntent();
        if (index === 1) playGoal();
        else stopGoal();
        if (index === 2) playUsers();
        else stopUsers();
        if (index === 3 || index === 4) playFeature();
        else stopFeature();
        if (index >= 5) playStory();
        else stopStory();
        questStageTag.textContent = `STAGE ${no}`;
        questKicker.textContent = stage.kicker;
        questTitle.textContent = stage.title;
        questIcon.innerHTML = `<i class="fa-solid ${stage.icon}"></i>`;
        renderBody(stage);

        const last = index === STAGES.length - 1;
        nextLabel.textContent = last ? '완료' : '다음 스테이지';
        nextIcon.className = last ? 'fa-solid fa-flag-checkered' : 'fa-solid fa-arrow-right';
        prevBtn.disabled = index === 0;
        prevBtn.style.opacity = index === 0 ? '0.45' : '1';

        questBar.style.width = `${((index + 1) / STAGES.length) * 100}%`;
        if (navStageLabel) navStageLabel.textContent = `${no} / ${String(STAGES.length).padStart(2, '0')}`;

        stageMap.querySelectorAll('.stage-map-btn').forEach((btn, i) => {
            btn.classList.toggle('is-current', i === index);
            btn.classList.toggle('is-cleared', i < index);
        });

        questCard.classList.remove('is-entering');
        void questCard.offsetWidth;
        questCard.classList.add('is-entering');
    }

    function showClear() {
        setScreen('clear');
        if (navStageLabel) navStageLabel.textContent = 'CLEAR';
        const line = document.getElementById('clearLine');
        const burst = document.getElementById('clearBurst');
        const message = '모든 stage를 클리어하셨습니다.';
        line.textContent = '';
        burst.replaceChildren();
        const colors = ['#6bedde', '#ffd84d', '#ff7a6b', '#1b1f3b', '#ffffff'];
        for (let i = 0; i < 48; i += 1) {
            const bit = document.createElement('span');
            bit.className = 'confetti-bit';
            bit.style.left = `${Math.random() * 100}%`;
            bit.style.background = colors[i % colors.length];
            bit.style.animationDelay = `${Math.random() * 0.6}s`;
            bit.style.animationDuration = `${1.8 + Math.random() * 1.4}s`;
            burst.appendChild(bit);
        }
        let cursor = 0;
        const type = () => {
            cursor += 1;
            line.textContent = message.slice(0, cursor);
            if (cursor < message.length) setTimeout(type, 55);
        };
        setTimeout(type, 350);
    }

    const intentScene = document.getElementById('intentScene');
    const intentField = document.getElementById('accentField');
    const rpgLine = document.getElementById('rpgLine');
    const NOISES = [
        { text: '!@*()&^!@#', x: 'max(0px, calc(50% - 316px))', y: '0px', fx: '-36px', fy: '-28px', tail: 'down-left' },
        { text: '#^&@!)(*', x: 'min(calc(100% - 280px), calc(50% + 86px))', y: '-40px', fx: '36px', fy: '-28px', tail: 'down-right' },
        { text: '*&!@#^()&', x: 'max(0px, calc(50% - 406px))', y: '184px', fx: '-42px', fy: '8px', tail: 'down-left' },
        { text: '@#)(!&^*!', x: 'min(calc(100% - 280px), calc(50% + 156px))', y: '154px', fx: '42px', fy: '12px', tail: 'down-right' }
    ];
    const SUMMER_LINES = [
        '영어에는 나름 자신이 있었는데... 역시 현실의 영어 악센트는\n차원이 다르게 어렵구나.',
        '영화나 드라마를 통해 영어를 배우는 앱은 많이 봤지만,\n악센트에만 집중한 앱은 한 번도 본 적이 없어.',
        "이제는 정제된 영어가 아닌... '날 것'의 영어를 배우고 싶어!"
    ];
    let intentTimers = [];
    let lineIndex = 0;

    function typeLine(text) {
        intentScene.classList.remove('is-ready');
        rpgLine.textContent = '';
        let cursor = 0;
        const type = () => {
            cursor += 1;
            rpgLine.textContent = text.slice(0, cursor);
            if (cursor < text.length) later(type, 46);
            else intentScene.classList.add('is-ready');
        };
        type();
    }

    function advanceDialogue() {
        if (!intentScene.classList.contains('is-ready')) return;
        if (lineIndex < SUMMER_LINES.length - 1) {
            lineIndex += 1;
            typeLine(SUMMER_LINES[lineIndex]);
        } else if (!intentScene.classList.contains('is-quote')) {
            intentScene.classList.remove('is-ready');
            intentScene.classList.add('is-quote');
            typeQuote();
        }
    }

    function typeQuote() {
        const box = document.getElementById('quoteText');
        if (!box) return;
        box.replaceChildren();
        const lines = [
            ['모든 사람들이 아나운서처럼 또박또박 말해준다면 얼마나 좋을까요?'],
            ['하지만 현실은 그렇지 않습니다.'],
            ["그렇기 때문에 우리에게 필요한 것은 '날 것'의 영어..."],
            ['바로 ', { brand: 'RawSound' }, ' 입니다.']
        ];
        let line = 0;
        let part = 0;
        let cursor = 0;
        let node = null;
        let lineEl = null;

        const typeMs = 52;
        const step = () => {
            if (!intentScene.classList.contains('is-quote')) return;
            if (line >= lines.length) {
                later(() => {
                    if (!intentScene.classList.contains('is-quote')) return;
                    const brand = box.querySelector('.quote-brand');
                    if (brand) brand.classList.add('is-in');
                }, 500);
                return;
            }
            if (part === 0 && cursor === 0) {
                lineEl = document.createElement('span');
                lineEl.className = 'quote-line';
                box.appendChild(lineEl);
            }
            const piece = lines[line][part];
            if (piece.brand) {
                const brand = document.createElement('span');
                brand.className = 'quote-brand';
                brand.textContent = piece.brand;
                lineEl.appendChild(brand);
                part += 1;
                if (part >= lines[line].length) {
                    part = 0;
                    line += 1;
                }
                later(step, typeMs);
                return;
            }
            const value = piece;
            if (!node) {
                node = document.createElement('span');
                lineEl.appendChild(node);
            }
            cursor += 1;
            node.textContent = value.slice(0, cursor);
            if (cursor < value.length) {
                later(step, typeMs);
                return;
            }
            node = null;
            cursor = 0;
            part += 1;
            if (part >= lines[line].length) {
                part = 0;
                line += 1;
            }
            later(step, typeMs);
        };
        step();
    }

    function stopIntent() {
        intentTimers.forEach((id) => clearTimeout(id));
        intentTimers = [];
        if (intentScene) intentScene.hidden = true;
    }

    function later(fn, ms) {
        const id = setTimeout(fn, ms);
        intentTimers.push(id);
    }

    function snapTitle(scene) {
        scene.classList.add('title-snap');
        scene.classList.remove('is-docked');
        scene.hidden = false;
        void scene.offsetWidth;
        scene.classList.remove('title-snap');
    }

    function playIntent() {
        stopIntent();
        lineIndex = 0;
        intentScene.classList.remove('is-dialog', 'is-ready', 'is-quote', 'is-angel');
        snapTitle(intentScene);
        rpgLine.textContent = '';
        const quoteText = document.getElementById('quoteText');
        if (quoteText) quoteText.replaceChildren();
        intentField.replaceChildren();
        NOISES.forEach((noise) => {
            const bubble = document.createElement('span');
            bubble.className = `noise-bubble tail-${noise.tail}`;
            bubble.style.left = noise.x;
            bubble.style.top = noise.y;
            bubble.style.setProperty('--from-x', noise.fx);
            bubble.style.setProperty('--from-y', noise.fy);
            const body = document.createElement('span');
            body.className = 'noise-body';
            const glyphs = document.createElement('span');
            glyphs.textContent = noise.text;
            const shape = document.createElement('i');
            shape.className = 'noise-shape';
            shape.setAttribute('aria-hidden', 'true');
            body.append(shape, glyphs);
            bubble.appendChild(body);
            intentField.appendChild(bubble);
        });
        void intentScene.offsetWidth;
        later(() => intentScene.classList.add('is-docked'), 900);
        later(() => {
            const bubbles = intentField.querySelectorAll('.noise-bubble');
            bubbles.forEach((bubble, i) => {
                later(() => bubble.classList.add('is-in'), i * 220);
            });
            later(() => intentScene.classList.add('is-angel'), (bubbles.length - 1) * 220 + 450);
            later(() => {
                intentScene.classList.add('is-dialog');
                typeLine(SUMMER_LINES[0]);
            }, bubbles.length * 220 + 700);
        }, 1650);
    }

    document.getElementById('rpgPlay').addEventListener('click', () => {
        if (index === 0) advanceDialogue();
    });

    const goalScene = document.getElementById('goalScene');
    let goalTimers = [];

    function stopGoal() {
        goalTimers.forEach((id) => clearTimeout(id));
        goalTimers = [];
        if (goalScene) goalScene.hidden = true;
    }

    function goalLater(fn, ms) {
        const id = setTimeout(fn, ms);
        goalTimers.push(id);
    }

    function playGoal() {
        stopGoal();
        goalScene.classList.remove('is-book', 'is-open', 'is-ready', 'is-summary');
        snapTitle(goalScene);
        const summary = document.getElementById('goalSummary');
        if (summary) summary.textContent = '';
        const quests = goalScene.querySelectorAll('.diary-quest');
        quests.forEach((quest) => {
            quest.classList.remove('is-in');
            quest.textContent = '';
        });
        void goalScene.offsetWidth;
        goalLater(() => goalScene.classList.add('is-docked'), 900);
        goalLater(() => goalScene.classList.add('is-book'), 1650);
        goalLater(() => goalScene.classList.add('is-open'), 2300);
        goalLater(() => {
            const typeQuest = (i) => {
                if (i >= quests.length) {
                    const summaryText = summary.dataset.text || '';
                    goalScene.classList.add('is-summary');
                    let cursor = 0;
                    const typeSummary = () => {
                        cursor += 1;
                        summary.textContent = summaryText.slice(0, cursor);
                        if (cursor < summaryText.length) goalLater(typeSummary, 32);
                        else goalScene.classList.add('is-ready');
                    };
                    typeSummary();
                    return;
                }
                const quest = quests[i];
                const text = quest.dataset.text || '';
                const headLen = (text.match(/^QUEST \d+/) || [''])[0].length;
                const labelNode = document.createElement('span');
                labelNode.className = 'quest-label';
                const restNode = document.createElement('span');
                restNode.className = 'quest-rest';
                quest.replaceChildren(labelNode, restNode);
                quest.classList.add('is-in');
                let cursor = 0;
                const tick = () => {
                    cursor += 1;
                    labelNode.textContent = text.slice(0, Math.min(cursor, headLen));
                    restNode.textContent = cursor > headLen ? text.slice(headLen, cursor) : '';
                    if (cursor < text.length) goalLater(tick, 36);
                    else goalLater(() => typeQuest(i + 1), 260);
                };
                tick();
            };
            typeQuest(0);
        }, 3200);
    }

    const userScene = document.getElementById('userScene');
    const userWelcome = document.getElementById('userWelcome');
    const WELCOME_LINE = "전세계의 이용자를 대상으로, welcome y'all!";
    let userTimers = [];

    function stopUsers() {
        userTimers.forEach((id) => clearTimeout(id));
        userTimers = [];
        if (userScene) userScene.hidden = true;
    }

    function userLater(fn, ms) {
        const id = setTimeout(fn, ms);
        userTimers.push(id);
    }

    function playUsers() {
        stopUsers();
        userScene.classList.remove('is-note', 'is-ready');
        snapTitle(userScene);
        userWelcome.textContent = '';
        userScene.querySelectorAll('.user-card').forEach((card) => card.classList.remove('is-in'));
        void userScene.offsetWidth;
        userLater(() => userScene.classList.add('is-docked'), 900);
        userLater(() => {
            const cards = userScene.querySelectorAll('.user-card');
            cards.forEach((card, i) => {
                userLater(() => card.classList.add('is-in'), i * 700);
            });
            userLater(() => {
                let cursor = 0;
                const type = () => {
                    cursor += 1;
                    userWelcome.textContent = WELCOME_LINE.slice(0, cursor);
                    if (cursor < WELCOME_LINE.length) userLater(type, 40);
                    else {
                        userScene.classList.add('is-note');
                        userScene.classList.add('is-ready');
                    }
                };
                type();
            }, cards.length * 700 + 200);
        }, 1650);
    }

    const featureScene = document.getElementById('featureScene');
    let featureStarted = false;
    let featureTimers = [];

    function featureLater(fn, ms) {
        const id = setTimeout(fn, ms);
        featureTimers.push(id);
    }

    function stopFeature() {
        featureTimers.forEach((id) => clearTimeout(id));
        featureTimers = [];
        featureStarted = false;
        if (featureScene) {
            featureScene.classList.remove('is-shown');
            featureScene.hidden = true;
        }
    }

    function playFeature() {
        if (featureStarted && featureScene && !featureScene.hidden) return;
        featureStarted = true;
        featureScene.classList.remove('is-shown');
        snapTitle(featureScene);
        featureLater(() => {
            if (featureScene && !featureScene.hidden) featureScene.classList.add('is-docked');
        }, 900);
        featureLater(() => {
            if (featureScene && !featureScene.hidden) featureScene.classList.add('is-shown');
        }, 1650);
    }

    document.getElementById('featurePlay').addEventListener('click', () => {
        if (featureScene.classList.contains('is-docked')) showStage(5);
    });

    const storyScene = document.getElementById('storyScene');
    const storyTitle = document.getElementById('storyTitle');
    const storyStage = document.getElementById('storyStage');
    const STORY = {
        5: {
            no: 'Stage 5',
            title: '차별성',
            kind: 'uk'
        },
        6: {
            no: 'Stage 6',
            title: '기대효과 및 활용 방안',
            kind: 'level'
        },
        7: {
            no: 'Stage 7',
            title: '향후 발전 가능성',
            kind: 'ideas'
        },
        8: {
            no: 'Stage 8',
            title: '창업 가능성',
            kind: 'mind'
        },
        9: {
            no: 'Stage 9',
            title: '방문하고 싶은 회사',
            kind: 'visit'
        }
    };
    let storyTimers = [];

    function stopStory() {
        storyTimers.forEach((id) => clearTimeout(id));
        storyTimers = [];
        if (storyScene) storyScene.hidden = true;
    }

    function storyLater(fn, ms) {
        storyTimers.push(setTimeout(fn, ms));
    }

    function layoutMindLines() {
        const stage = document.querySelector('.mind-stage');
        if (!stage) return;
        const svg = stage.querySelector('.mind-lines');
        const lines = svg ? [...svg.querySelectorAll('line')] : [];
        const coreEl = stage.querySelector('.mind-core');
        const nodeEls = ['.n1', '.n2', '.n3'].map((sel) => stage.querySelector(sel));
        if (!svg || lines.length < 3 || !coreEl || nodeEls.some((el) => !el)) return;
        const origin = stage.getBoundingClientRect();
        if (!origin.width || !origin.height) return;
        svg.setAttribute('viewBox', `0 0 ${origin.width} ${origin.height}`);
        const rel = (el) => {
            const r = el.getBoundingClientRect();
            return {
                l: r.left - origin.left,
                t: r.top - origin.top,
                r: r.right - origin.left,
                b: r.bottom - origin.top
            };
        };
        const edgePoint = (rect, other) => {
            const cx = (rect.l + rect.r) / 2;
            const cy = (rect.t + rect.b) / 2;
            const ox = (other.l + other.r) / 2;
            const oy = (other.t + other.b) / 2;
            const dx = ox - cx;
            const dy = oy - cy;
            let hit = null;
            let best = Infinity;
            const consider = (t, x, y) => {
                if (t > 0 && t < best) {
                    best = t;
                    hit = { x, y };
                }
            };
            if (dx !== 0) {
                consider((rect.l - cx) / dx, rect.l, cy + dy * ((rect.l - cx) / dx));
                consider((rect.r - cx) / dx, rect.r, cy + dy * ((rect.r - cx) / dx));
            }
            if (dy !== 0) {
                consider((rect.t - cy) / dy, cx + dx * ((rect.t - cy) / dy), rect.t);
                consider((rect.b - cy) / dy, cx + dx * ((rect.b - cy) / dy), rect.b);
            }
            if (!hit) return { x: cx, y: cy };
            const border = 2;
            if (hit.x === rect.l) return { x: rect.l + border, y: hit.y };
            if (hit.x === rect.r) return { x: rect.r - border, y: hit.y };
            if (hit.y === rect.t) return { x: hit.x, y: rect.t + border };
            return { x: hit.x, y: rect.b - border };
        };
        const core = rel(coreEl);
        nodeEls.forEach((nodeEl, i) => {
            const node = rel(nodeEl);
            const from = edgePoint(node, core);
            const to = edgePoint(core, node);
            lines[i].setAttribute('x1', from.x);
            lines[i].setAttribute('y1', from.y);
            lines[i].setAttribute('x2', to.x);
            lines[i].setAttribute('y2', to.y);
        });
    }

    window.addEventListener('resize', layoutMindLines);

    function playStory() {
        const data = STORY[index];
        if (!data || !storyScene) return;
        stopStory();
        storyTitle.innerHTML = `<span class="stage-no">${data.no}</span><span>${data.title}</span>`;
        storyStage.replaceChildren();
        storyStage.classList.remove('is-in');
        snapTitle(storyScene);
        if (data.kind === 'uk') {
            storyStage.innerHTML = `
                <div class="diff-stage">
                    <div class="diff-col">
                        <div class="diff-bubbles">
                            <p class="diff-bubble bubble-coffee tail-left"><i class="diff-shape" aria-hidden="true"></i><span>Would you like some coffee?</span></p>
                            <p class="diff-bubble bubble-hospital tail-right"><i class="diff-shape" aria-hidden="true"></i><span>I can take you to the haspital</span></p>
                            <p class="diff-bubble bubble-accident tail-left"><i class="diff-shape" aria-hidden="true"></i><span>I had an accident last night...</span></p>
                        </div>
                        <p class="diff-caption" id="diffLeft"></p>
                    </div>
                    <div class="diff-col">
                        <figure class="uk-map">
                            <img src="uk-map-photoroom.png" alt="영국 지역 지도">
                            <span class="uk-label" style="left:62.6%;top:24%">Scotland</span>
                            <span class="uk-label" style="left:38.3%;top:43.1%">Northern<br>Ireland</span>
                            <span class="uk-label" style="left:54.2%;top:68.4%">Wales</span>
                            <span class="uk-label" style="left:calc(73.3% + 13px);top:69.6%">England</span>
                        </figure>
                        <p class="diff-caption" id="diffRight"></p>
                    </div>
                </div>`;
            const leftLine = '미국, 영국, 호주 등의 일부 국가뿐만 아니라\n유럽, 동아시아, 중동, 아프리카 등\n다양한 지역의 악센트를 배울 수 있습니다';
            const rightLine = '나라별 뿐만 아니라\n지역별 악센트의 차이를 배울 수 있습니다';
            const typeInto = (el, text, done) => {
                let cursor = 0;
                const step = () => {
                    cursor += 1;
                    el.textContent = text.slice(0, cursor);
                    if (cursor < text.length) storyLater(step, 28);
                    else if (done) done();
                };
                step();
            };
            storyLater(() => storyScene.classList.add('is-docked'), 900);
            storyLater(() => {
                storyStage.classList.add('is-in');
                typeInto(document.getElementById('diffLeft'), leftLine, () => {
                    typeInto(document.getElementById('diffRight'), rightLine);
                });
            }, 1700);
            return;
        }
        if (data.kind === 'level') {
            const floaters = [
                ['+LISTENING SKILL', '8%', '18%'],
                ['+SPEAKING SKILL', '62%', '12%'],
                ['+LISTENING SKILL', '70%', '42%'],
                ['+SPEAKING SKILL', '6%', '48%'],
                ['+LISTENING SKILL', '28%', '8%'],
                ['+SPEAKING SKILL', '48%', '62%'],
                ['+LISTENING SKILL', '18%', '66%'],
                ['+SPEAKING SKILL', '74%', '24%']
            ];
            storyStage.innerHTML = `
                <div class="level-stage">
                    <p class="level-up">Level Up!</p>
                    <div class="level-float">
                        ${floaters.map(([label, left, top], i) => {
                const kind = label.includes('LISTENING') ? 'is-listen' : 'is-speak';
                return `<span class="skill-pop ${kind}" style="left:${left};top:${top};animation-delay:${i * 0.35}s"><span class="skill-word">${label}</span></span>`;
            }).join('')}
                        <span class="level-girl">
                            <img src="level-angel.png" alt="민트 드레스를 입은 도트 캐릭터">
                        </span>
                    </div>
                    <p class="diff-caption level-caption" id="levelLine"><span class="level-lead"></span><span class="level-rest"></span></p>
                </div>`;
            const lead = '리스닝과 스피킹 실력의 향상이 주된 기대효과입니다';
            const rest = '\n해외살이 이전 리스닝, 스피킹 연습이나\n어학시험의 리스닝, 스피킹 문제 연습 등으로 활용할 수 있으리라 기대합니다';
            storyLater(() => storyScene.classList.add('is-docked'), 900);
            storyLater(() => {
                storyStage.classList.add('is-in');
                const leadEl = document.querySelector('#levelLine .level-lead');
                const restEl = document.querySelector('#levelLine .level-rest');
                let cursor = 0;
                const step = () => {
                    cursor += 1;
                    if (cursor <= lead.length) leadEl.textContent = lead.slice(0, cursor);
                    else restEl.textContent = rest.slice(0, cursor - lead.length);
                    if (cursor < lead.length + rest.length) storyLater(step, 28);
                };
                step();
            }, 1700);
            return;
        }
        if (data.kind === 'ideas') {
            storyStage.innerHTML = `
                <div class="idea-stage">
                    <p class="feature-row-label">추가 개발 아이디어</p>
                    <div class="idea-row">
                        <section class="idea-demo">
                            <div class="idea-screen">
                                <p class="idea-kicker">Culture Note</p>
                                <p class="idea-word">Bless you</p>
                                <p class="idea-note">누군가 재채기를 하면 건강과 안녕을 빌어 주는 인사입니다. 6세기 유럽에 전염병이 돌 때, 재채기를 초기 증상으로 여겨 교황 그레고리 1세가 가호를 빌게 한 데서 시작됐다는 이야기가 있습니다.</p>
                            </div>
                            <p class="idea-title">언어 속 숨어있는 문화적 배경, 역사 등을 학습하는 기능</p>
                            <p class="feature-desc">학습효율이 더욱 향상될 것이라 기대됨</p>
                        </section>
                        <section class="idea-demo">
                            <div class="idea-screen idea-chat">
                                <p class="idea-kicker">Exchange</p>
                                <p class="chat-line mine">can과 can't는 들을 때 어떻게 구별하나요?</p>
                                <p class="chat-line">'can'은 '킨'이나 '큰'처럼 발음되고, 'can't'는 '캔'으로 미세하게 달라요</p>
                                <p class="chat-line mine">그렇군요, 고마워요!</p>
                            </div>
                            <p class="idea-title">언어교환 커뮤니티</p>
                            <p class="feature-desc">AI나 인터넷만으로 해결할 수 없는 언어적 궁금증을 앱내 커뮤니티를<br>통해 해소</p>
                        </section>
                    </div>
                    <p class="idea-task" id="ideaTask"></p>
                </div>`;
            const task = '문화는 지속적으로 바뀌기 때문에 변화하는 악센트, 새로운 단어와 문장을\n빠르게 AI에게 학습시키는 것이 과제가 될 것입니다';
            storyLater(() => storyScene.classList.add('is-docked'), 900);
            storyLater(() => {
                storyStage.classList.add('is-in');
                const el = document.getElementById('ideaTask');
                let cursor = 0;
                const step = () => {
                    cursor += 1;
                    el.textContent = task.slice(0, cursor);
                    if (cursor < task.length) storyLater(step, 28);
                };
                step();
            }, 1700);
            return;
        }
        if (data.kind === 'mind') {
            storyStage.innerHTML = `
                <div class="mind-stage">
                    <svg class="mind-lines" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
                        <line x1="0" y1="0" x2="0" y2="0" />
                        <line x1="0" y1="0" x2="0" y2="0" />
                        <line x1="0" y1="0" x2="0" y2="0" />
                    </svg>
                    <p class="mind-core">현재 가진 인프라를 최대한 활용할 것!</p>
                    <p class="mind-node n1"><span class="mind-em">개발자로 일하고 있는 가족에게</span><br><span class="mind-em">상담 및 조언을 구하기</span><br>가능하면 가족이 일하는 회사에<br>소개하는 기회를 만들거나<br>피드백을 적극 수용</p>
                    <p class="mind-node n2"><span class="mind-em">일하고 있는 영어학원에 앱 사용 권유</span><br>원장님께 허락 받은 후<br>실제 수업시간에 앱을 활용 수업,<br>퀄리티를 향상</p>
                    <p class="mind-node n3"><span class="mind-em">앱 스토어에 출시</span><br>이후 SNS를 활용한 홍보</p>
                </div>`;
            storyLater(() => {
                storyScene.classList.add('is-docked');
                layoutMindLines();
            }, 900);
            storyLater(() => {
                storyStage.classList.add('is-in');
                layoutMindLines();
            }, 1700);
            requestAnimationFrame(layoutMindLines);
            return;
        }
        if (data.kind === 'visit') {
            storyStage.innerHTML = `
                <div class="visit-stage">
                    <div class="diff-col">
                        <img class="speak-logo" src="speak-logo.png" alt="Speak 영어 회화 앱">
                        <p class="diff-caption" id="visitLine"><span class="visit-facts"></span><span class="visit-opinion"></span></p>
                    </div>
                    <div class="visit-note">
                        <p class="note-title">Interview</p>
                        <div class="note-list">
                            <label class="note-item"><span class="note-box"></span><span>사용자의 수준에 따른 난이도 설정은 어떻게 했나요?</span></label>
                            <label class="note-item"><span class="note-box"></span><span>사용자의 발화오류를 잡아내는 AI는 어떤 기준을 가지고 있나요?</span></label>
                            <label class="note-item"><span class="note-box"></span><span>AI와의 대화와 현실 대화의 괴리는 어떻게 해소할 수 있다고 생각하시나요?</span></label>
                        </div>
                    </div>
                </div>`;
            const facts = '• 미국 실리콘밸리에 본사를 둔 스픽이지랩스에서 출시한 AI 영어 스피킹 애플리케이션\n• 2024년 1월 기준 국내 500만 다운로드를 돌파\n\n';
            const opinion = '현재 국내에서 영어학습 앱으로 가장 유명하고\n실제로 ai를 활용한 영어회화 기능을 가장 효과적으로\n구현한 회사라고 생각한다.';
            storyLater(() => storyScene.classList.add('is-docked'), 900);
            storyLater(() => {
                storyStage.classList.add('is-in');
                const factsEl = document.querySelector('#visitLine .visit-facts');
                const opinionEl = document.querySelector('#visitLine .visit-opinion');
                let cursor = 0;
                const step = () => {
                    cursor += 1;
                    if (cursor <= facts.length) factsEl.textContent = facts.slice(0, cursor);
                    else opinionEl.textContent = opinion.slice(0, cursor - facts.length);
                    if (cursor < facts.length + opinion.length) storyLater(step, 28);
                };
                step();
            }, 1700);
            return;
        }
        data.cards.forEach((card) => {
            const article = document.createElement('article');
            article.className = `user-card ${card.pos}`;
            const travel = card.dot === 'dot-travel';
            article.innerHTML = travel
                ? `<div class="dot dot-travel" aria-hidden="true"><img src="title-angel-suitcase.png" alt=""></div><p></p>`
                : `<div class="dot" aria-hidden="true"><span class="dot-hair"></span><span class="dot-body"></span><span class="${card.dot}"></span></div><p></p>`;
            article.querySelector('p').textContent = card.text;
            storyStage.appendChild(article);
        });
        void storyScene.offsetWidth;
        storyLater(() => storyScene.classList.add('is-docked'), 900);
        storyLater(() => {
            storyStage.querySelectorAll('.user-card').forEach((card, i) => {
                storyLater(() => card.classList.add('is-in'), i * 500);
            });
        }, 1650);
    }

    document.getElementById('startBtn').addEventListener('click', () => showStage(0));
    prevBtn.addEventListener('click', () => {
        if (index === 5) showStage(3);
        else if (index > 0) showStage(index - 1);
    });
    nextBtn.addEventListener('click', () => {
        if (index === 3 || index === 4) showStage(5);
        else if (index < STAGES.length - 1) showStage(index + 1);
        else showClear();
    });
    document.getElementById('restartBtn').addEventListener('click', () => {
        started = false;
        if (navStageLabel) navStageLabel.textContent = 'READY';
        setScreen('title');
    });

    document.addEventListener('keydown', (event) => {
        if (!started || clearScreen.hidden === false) {
            if (event.key === 'Enter' && !titleScreen.hidden) showStage(0);
            return;
        }
        if (event.key === 'ArrowRight') {
            if (index === 0) advanceDialogue();
            else if (index === 1) {
                if (goalScene.classList.contains('is-ready')) showStage(2);
            } else if (index === 2) {
                if (userScene.classList.contains('is-ready')) showStage(3);
            } else if (index === 3 || index === 4) showStage(5);
            else if (index < STAGES.length - 1) showStage(index + 1);
            else showClear();
        } else if (event.key === 'ArrowLeft' && index > 0) {
            if (index === 5) showStage(3);
            else showStage(index - 1);
        }
    });
});
