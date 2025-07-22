
const questions = [
    {
        q: "1. 고단했던 한주의 끝, 힐링이 필요하다. 당신의 선택은?",
        a: [
            { text: "사람들이랑 노는것이 힐링이다..", type: "E" },
            { text: "혼자 누워서 얼른 에너지를 충전해야한다.", type: "I" }
        ]
    },
    {
        q: "2. 친구와 여행을 온 당신, 식당에서 밥을 다 먹었다. 이제 어디로 가지...",
        a: [
            { text: "정해져 있지 않아도 마음이 편하다. 친구가 가자는 곳 아무데나 상관 없다.", type: "P" },
            { text: "정해져 있지 않으면 마음이 불안하다.. 얼른 직접 찾아본다..", type: "J" }
        ]
    },
    {
        q: "3. 직장동료가 내가 전혀 겪어보지 않은 상황에 대해 힘들다고 고민을 털어 놓는다..",
        a: [
            { text: "겪어보진 않았지만 힘들다고 하니 그 감정에 공감해준다.", type: "F" },
            { text: "겪어보지 않았으므로 솔직히 깊은 공감이 어렵다.", type: "T" }
        ]
    },
    {
        q: "4. 심리학/철학 등에 관심이 많고 흥미롭다고 생각한다.",
        a: [
            { text: "예", type: "N" },
            { text: "아니오", type: "S" }
        ]
    },
    {
        q: "5. 금요일 오후 11시, 직장회식이 슬슬 마무리되는 분위기다..",
        a: [
            { text: "빨리 집에가서 눕고 혼자서 에너지 충전하고 싶다", type: "I" },
            { text: "아쉽다. 남은 사람끼리 더 놀고 싶다.", type: "E" }
        ]
    },
    {
        q: "6. 해야할 과제/업무가 생겼다. 기한내에 끝내야 한다.",
        a: [
            { text: "계획을 세세하게 세운다.세우지 않으면 마음이 불안하기 때문이다.", type: "J" },
            { text: "계획을 대충 세운다. 세우고 안지켜도 상관없긴 하다. or 아예 안세우고 일단 냅다 시작한다.", type: "P" }
        ]
    },
    {
        q: "7. 친한 친구가 옆에서 고민을 털어놓으며 힘들다고 울고 있다. 우선적으로 취하는 행동은?",
        a: [
            { text: "나까지 괜히 슬프고 울컥한다.", type: "F" },
            { text: "그정도는 아니고 어떻게 하면 도와줄수 있을까 생각한다.", type: "T" }
        ]
    },
    {
        q: "8. 다음 중 당신의 가치관에 조금 더 가까운 보기는?",
        a: [
            { text: "지금 당장 또는 가까운 미래에 가질 재산이나 행복이 중요하다.", type: "S" },
            { text: "조금 더 먼 미래에 가지고 싶은 재산이나 행복이 중요하다.", type: "N" }
        ]
    }
];

const results = {
    "ISTJ": { title: "신중하고 책임감 있는 관리자", description: "조용하지만 결단력 있고, 체계적으로 문제를 해결하는 능력이 뛰어납니다.", image: "images/ISTJ.png" },
    "ISFJ": { title: "성실하고 배려심 깊은 수호자", description: "타인을 돕는 것을 좋아하며, 헌신적이고 책임감이 강한 성격입니다.", image: "images/ISFJ.png" },
    "INFJ": { title: "통찰력 있는 조용한 이상주의자", description: "깊이 있는 사고와 강한 직관력을 가진 조용한 리더형입니다.", image: "images/INFJ.png" },
    "INTJ": { title: "전략적인 사색가", description: "분석력과 전략적 사고에 능하며, 비전을 실현하려는 독립적인 성향입니다.", image: "images/INTJ.png" },
    "ISTP": { title: "과묵하고 유연한 문제 해결자", description: "직접적인 경험을 중시하며, 논리적이고 효율적인 방식으로 문제를 처리합니다.", image: "images/ISTP.png" },
    "ISFP": { title: "온순하고 예술적인 이상주의자", description: "감성적이고 조용하며, 예술적 감각이 뛰어나고 조화를 중시합니다.", image: "images/ISFP.png" },
    "INFP": { title: "열정적인 중재자", description: "이상과 가치를 중시하며, 창의적이고 감성적인 성향을 가지고 있습니다.", image: "images/INFP.png" },
    "INTP": { title: "논리적인 사색가", description: "지적 호기심이 강하고 독립적인 사고를 중시하는 이론가형입니다.", image: "images/INTP.png" },
    "ESTP": { title: "활동적인 모험가", description: "즉흥적이고 에너지 넘치는 성격으로, 현실 감각이 뛰어납니다.", image: "images/ESTP.png" },
    "ESFP": { title: "사교적이고 재치 있는 연예인", description: "다정하고 즐거움을 추구하며, 타인과의 교류를 즐깁니다.", image: "images/ESFP.png" },
    "ENFP": { title: "창의적이고 열정적인 활동가", description: "열정과 호기심으로 가득하며, 타인에게 영감을 주는 성향입니다.", image: "images/ENFP.png" },
    "ENTP": { title: "토론을 즐기는 혁신가", description: "풍부한 아이디어와 유연한 사고로 새로운 것을 추구합니다.", image: "images/ENTP.png" },
    "ESTJ": { title: "현실적이고 단호한 관리자", description: "체계적이고 조직적인 접근을 선호하며, 리더십이 강합니다.", image: "images/ESTJ.png" },
    "ESFJ": { title: "다정다감한 사교가", description: "타인의 감정을 잘 이해하고 배려하는 협력형 리더입니다.", image: "images/ESFJ.png" },
    "ENFJ": { title: "카리스마 있는 지도자", description: "이해심과 통찰력을 바탕으로 사람들을 이끄는 능력이 뛰어납니다.", image: "images/ENFJ.png" },
    "ENTJ": { title: "대담하고 효율적인 리더", description: "결단력과 추진력이 강하고 목표 달성을 중요시합니다.", image: "images/ENTJ.png" }
};

let current = 0;
let scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

function showQuestion() {
    const qBox = document.getElementById("question");
    const oBox = document.getElementById("options");

    if (current >= questions.length) return showResult();

    qBox.innerHTML = questions[current].q;
    oBox.innerHTML = "";

    questions[current].a.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerHTML = opt.text;
        btn.onclick = () => {
            scores[opt.type]++;
            current++;
            showQuestion();
        };
        oBox.appendChild(btn);
    });
}

function showResult(resultType = null) {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";

    const type = resultType || 
        (scores["E"] > scores["I"] ? "E" : "I")
      + (scores["S"] > scores["N"] ? "S" : "N")
      + (scores["T"] > scores["F"] ? "T" : "F")
      + (scores["J"] > scores["P"] ? "J" : "P");

    const result = results[type];

    const img = document.createElement("img");
    img.src = result.image;
    img.alt = type + " 이미지";
    img.style.maxWidth = "100%";
    img.style.borderRadius = "10px";

    document.getElementById("result-type").innerText = type + " - " + result.title;
    document.getElementById("result-description").innerText = result.description;
    document.getElementById("result-box").prepend(img);

    const shareBox = document.createElement("div");
    shareBox.style.marginTop = "20px";
    const copyBtn = document.createElement("button");
    copyBtn.innerText = "🔗 결과 링크 복사";
    copyBtn.onclick = () => {
        const shareURL = window.location.origin + window.location.pathname + "?result=" + type;
        navigator.clipboard.writeText(shareURL)
            .then(() => alert("결과 링크가 복사되었습니다."));
    };
    shareBox.appendChild(copyBtn);
    document.getElementById("result-box").appendChild(shareBox);
}

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const directResult = params.get("result");
    if (directResult && results[directResult]) {
        showResult(directResult);
    } else {
        showQuestion();
    }
};
