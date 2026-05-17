import { useState, useRef } from "react";
import { motion } from "motion/react";
import haeyulrinImg from '../../../images/roblox_hae.jfif';
import dasongImg from '../../../images/roblox_song.jfif';
import gameImg from '../../../images/gameImg.jpeg';
import correctImg from '../../../images/quiz_correct.jpeg';
import wrongImg from '../../../images/quiz_wrong.jpeg';
import correctSound from '../../../songs/correct.mp3';
import wrongSound from '../../../songs/wrong.mp3';
import perfectSound from '../../../songs/perfect.mp3';
import failSound from '../../../songs/fail.mp3';

interface RobloxAppProps {
  onClose: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: Question[] = [
  {
    question: "강해가 좋아하는 자세",
    options: ["69", "Doggy", "Missionary", "Flatiron"],
    correctAnswer: 3,
  },
  {
    question: "강해가 좋아하는 은재 머리",
    options: ["밤톨머리 후루룩쫩쫩", "삭발", "텍스쳐가 많은 머리", "내린 머리"],
    correctAnswer: 0,
  },
  {
    question: "이태리에서 강해가 제일 인상 깊었던거",
    options: ["마르코씨", "더 커진 데미안", "11일동안 파스타만 쳐먹은 우리", "신발 밟고 인대 파열된 은재"],
    correctAnswer: 1,
  },
  {
    question: "강해가 제일 좋아하는 애정표현",
    options: ["볼뽀뽀 300번", "은재가 귀엽다고 해줄때", "나 뚫어져라 쳐다볼때 :)", "데미안이 자기주장 할때 (i love…)"],
    correctAnswer: 3,
  },
  {
    question: "강해가 안좋아하는거",
    options: ["은재가 못생긴 사진만 찍을때", "운전할때 손 안잡아줄때 😔", "쌩얼인데 자꾸 얼굴 보려고 할때", "밑에 너무 자세히 보려고 할때 😡"],
    correctAnswer: 3,
  },
  {
    question: "강해가 제일 좋아하는 과자",
    options: ["화이트하임", "홈런볼", "쿠크다스", "칙촉"],
    correctAnswer: 1,
  },
  {
    question: "은재가 제일 맛있을때 😋",
    options: ["신음 소리 낼때 💦", "주체 못해서 막 대해줄때 😈", "아침에 엄청 딱딱할때 🥵", "모두 다"],
    correctAnswer: 3,
  },
  {
    question: "강해가 제일 좋아하는 은재 부위",
    options: ["손", "팔뚝", "어깨", "궁댕이"],
    correctAnswer: 0,
  },
  {
    question: "강해의 안좋은 기억 탑 1",
    options: ["밀면 먹고 체했을때", "방탈출에서 은재가 혼자 두고 오줌싸러 갔을때", "새벽 두시에 찬물 목욕 했을때", "샤워실에서 은재가 떨궜을때"],
    correctAnswer: 0,
  },
  {
    question: "강해가 은재 만나는 이유",
    options: ["얼굴", "데미안", "성격", "귀여워서"],
    correctAnswer: 3,
  },
];

// ── 하단 탭 아이콘 ──────────────────────────────────────────────
function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
        fill={active ? "#1a1a1a" : "none"}
        stroke={active ? "#1a1a1a" : "#888"}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="12"
        width="4"
        height="9"
        rx="1"
        stroke="#888"
        strokeWidth="1.8"
      />
      <rect
        x="10"
        y="7"
        width="4"
        height="14"
        rx="1"
        stroke="#888"
        strokeWidth="1.8"
      />
      <rect
        x="17"
        y="3"
        width="4"
        height="18"
        rx="1"
        stroke="#888"
        strokeWidth="1.8"
      />
    </svg>
  );
}
function PartyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="9"
        cy="7"
        r="3"
        stroke="#888"
        strokeWidth="1.8"
      />
      <circle
        cx="17"
        cy="10"
        r="2.5"
        stroke="#888"
        strokeWidth="1.8"
      />
      <path
        d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="#888"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 20c0-2.2.9-4.2 2.3-5.6"
        stroke="#888"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#888"
        strokeWidth="1.8"
      />
      <circle cx="8" cy="12" r="1" fill="#888" />
      <circle cx="12" cy="12" r="1" fill="#888" />
      <circle cx="16" cy="12" r="1" fill="#888" />
    </svg>
  );
}

export default function RobloxApp({ onClose }: RobloxAppProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const resultSoundPlayed = useRef(false); // ← 추가
  const currentAudio = useRef<HTMLAudioElement | null>(null); // ← 추가

  const handleAnswer = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    const isCorrect = answerIndex === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      currentAudio.current = new Audio(correctSound);
      currentAudio.current.play();
      setScore((s) => s + 1);
    } else {
      currentAudio.current = new Audio(wrongSound);
      currentAudio.current.play();
    }
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((q) => q + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const stopAudio = () => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
      currentAudio.current = null;
    }
  };

  const resetQuiz = () => {
    stopAudio(); // ← 추가
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
    resultSoundPlayed.current = false;
  };

  const tabs = [
    {
      label: "홈",
      icon: <HomeIcon active={activeTab === 0} />,
    },
    { label: "차트", icon: <ChartIcon /> },
    {
      label: "아바타",
      icon: (
        // 아바타 탭 — 캐릭터 사진으로 교체 가능
        <div className="w-[28px] h-[28px] rounded-full bg-[#e0c4a8] flex items-center justify-center overflow-hidden border-2 border-gray-300">
          <img src={dasongImg} className="w-full h-full object-cover" />
        </div>
      ),
    },
    { label: "파티", icon: <PartyIcon /> },
    { label: "더 보기", icon: <MoreIcon /> },
  ];

  return (
    <motion.div
      className="w-full h-full flex flex-col bg-white"
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => {
        if (info.offset.y < -200) onClose();
      }}
    >
      {/* ── STATUS BAR 공간 ── */}
      <div className="h-[50px]" />

      {/* ── QUIZ 화면 ── */}
      {showQuiz ? (
        !showResult ? (
          <div className="flex-1 flex flex-col bg-gradient-to-br from-purple-500 to-pink-500 p-6">
            <button
              onClick={() => setShowQuiz(false)}
              className="self-start mb-4"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-sm text-gray-500 mb-2">
                  질문 {currentQuestion + 1} /{" "}
                  {quizQuestions.length}
                </div>
                <h3 className="text-xl font-bold mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map(
                    (option, index) => {
                      const isCorrect =
                        index ===
                        quizQuestions[currentQuestion]
                          .correctAnswer;
                      const isSelected =
                        selectedAnswer === index;
                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          disabled={showFeedback}
                          className={`w-full p-4 rounded-xl font-medium transition-all ${
                            showFeedback && isCorrect
                              ? "bg-green-500 text-white"
                              : showFeedback && isSelected
                                ? "bg-red-500 text-white"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
      ) : (
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
                {(() => {
                  if (!resultSoundPlayed.current) {
                    resultSoundPlayed.current = true;
                    setTimeout(() => {
                      currentAudio.current = new Audio(score === quizQuestions.length ? perfectSound : failSound);
                      currentAudio.current.play();
                    }, 100);
                  }
                  return null;
                })()}
              <img
                src={score === quizQuestions.length ? correctImg : wrongImg}
                alt="result"
                className="w-[140px] h-[140px] object-cover rounded-2xl mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">완료!</h3>
              <p className="text-xl mb-6">
                점수: {score} / {quizQuestions.length}
              </p>
              <div className="space-y-3">
                <button onClick={resetQuiz} className="w-full bg-purple-500 text-white py-3 rounded-xl font-medium">
                  다시 하기
                </button>
                <button onClick={() => { stopAudio(); setShowQuiz(false); }} className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-medium">
                  돌아가기
                </button>
              </div>
            </div>
          </div>
        )
      ) : (
        /* ── 메인 홈 화면 ── */
        <>
          {/* ── 상단 헤더 ── */}
          <div className="px-5 pt-1 pb-3 flex justify-between items-center">
            <span
              className="text-[26px] font-black text-[#1a1a1a]"
              style={{
                fontFamily: "-apple-system, sans-serif",
              }}
            >
              홈
            </span>
            <div className="flex items-center gap-5">
              {/* 서치 */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                />
                <path
                  d="M16.5 16.5L21 21"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {/* 로블록스 육각형 */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              {/* 알림 + 뱃지 */}
              <div className="relative">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.73 21a2 2 0 0 1-3.46 0"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">
                    9
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex-1 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {/* ── 프로필 ── */}
            <div className="px-5 py-3 flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-[#e0c4a8] flex items-center justify-center overflow-hidden border border-gray-200">
                <img src={dasongImg} className="w-full h-full object-cover" />
              </div>
              <span
                className="text-[17px] font-bold text-[#1a1a1a]"
                style={{
                  fontFamily: "-apple-system, sans-serif",
                }}
              >
                hehekangbabo
              </span>
            </div>

            {/* ── 채팅 배너 ── */}
            {showBanner && (
              <div className="mx-4 mb-4 border border-gray-200 rounded-2xl p-4 flex gap-3 items-start bg-gray-100 shadow-sm">
                {/* 캔달 아이콘 */}
                <div className="mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="#888" strokeWidth="1.8"/>
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#888" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                {/* 텍스트 영역 */}
                <div className="flex-1">
                  <p className="text-[15px] font-semibold text-[#1a1a1a] mb-1" style={{ fontFamily: '-apple-system, sans-serif' }}>
                    채팅을 사용할 수 있도록 나이를 확인하겠습니다
                  </p>
                  <p className="text-[14px] text-gray-500 mb-3" style={{ fontFamily: '-apple-system, sans-serif' }}>
                    안전한 채팅을 위한 절차입니다. 잠깐이면 끝낼 수 있어요.
                  </p>
                  <div className="bg-gray-400 rounded-lg px-4 py-2 inline-block">
                    <span className="text-[14px] text-black font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>
                      채팅 잠금 해제
                    </span>
                  </div>
                </div>
                {/* X 버튼 — 오른쪽 상단, 텍스트와 pl-2로 간격 */}
                <button onClick={() => setShowBanner(false)} className="pl-2 pt-0 self-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 1l14 14M15 1L1 15" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            )}

            {/* ── 친구 섹션 ── */}
            <div className="px-5 mb-4">
              <div className="flex items-center gap-1 mb-3">
                <span
                  className="text-[20px] font-black text-[#1a1a1a]"
                  style={{
                    fontFamily: "-apple-system, sans-serif",
                  }}
                >
                  친구 (1명)
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex gap-4">
                {/* 친구 추가 버튼 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[82px] h-[82px] rounded-full bg-gray-100 flex items-center justify-center">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span
                    className="text-[12px] text-gray-500"
                    style={{
                      fontFamily: "-apple-system, sans-serif",
                    }}
                  >
                    친구 추가
                  </span>
                </div>
                {/* 친구 캐릭터 — 사진 교체 가능 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[82px] h-[82px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-200">
                    <img src={haeyulrinImg} className="w-full h-full object-cover" />
                  </div>
                  <span
                    className="text-[12px] text-[#1a1a1a] font-medium"
                    style={{
                      fontFamily: "-apple-system, sans-serif",
                    }}
                  >
                    haeyulrin
                  </span>
                </div>
              </div>
            </div>

            {/* ── 이런 건 어떠세요 ── */}
            <div className="px-5 mb-4">
              <span
                className="text-[20px] font-black text-[#1a1a1a] block mb-3"
                style={{
                  fontFamily: "-apple-system, sans-serif",
                }}
              >
                이런 건 어떠세요
              </span>

              {/* 게임 카드 — Quiz */}
              <button
                onClick={() => setShowQuiz(true)}
                className="w-full text-left active:scale-[0.98] transition-transform"
              >
                <div className="w-[48%] rounded-xl overflow-hidden">
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <img src={gameImg} className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <p
                      className="text-[14px] font-semibold text-[#1a1a1a]"
                      style={{
                        fontFamily: "-apple-system, sans-serif",
                      }}
                    >
                      강해 남자친구 테스트
                    </p>
              <p className="text-[12px] text-gray-500" style={{ fontFamily: '-apple-system, sans-serif' }}>
                <span style={{ filter: 'grayscale(100%)' }}>👍</span> 평점 100%
              </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* ── 하단 탭 바 ── */}
          <div className="border-t border-gray-200 bg-white flex justify-around items-center pt-2 pb-6 px-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex flex-col items-center gap-[3px]"
              >
                {tab.icon}
                <span
                  className="text-[10px]"
                  style={{
                    fontFamily: "-apple-system, sans-serif",
                    color: activeTab === i ? "#1a1a1a" : "#888",
                    fontWeight: activeTab === i ? 600 : 400,
                  }}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}