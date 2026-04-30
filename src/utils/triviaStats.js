const STORAGE_KEY = 'trivia-stats-v1'

const DEFAULT_STATS = {
  highestStreak: 0,
  category: {},
  difficulty: {}
}

function safeParseStats(raw) {
  if (!raw) {
    return { ...DEFAULT_STATS }
  }

  try {
    const parsed = JSON.parse(raw)
    return {
      highestStreak: Number.isFinite(parsed.highestStreak)
        ? parsed.highestStreak
        : 0,
      category: parsed.category && typeof parsed.category === 'object'
        ? parsed.category
        : {},
      difficulty: parsed.difficulty && typeof parsed.difficulty === 'object'
        ? parsed.difficulty
        : {}
    }
  } catch {
    return { ...DEFAULT_STATS }
  }
}

export function loadTriviaStats() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { ...DEFAULT_STATS }
  }

  return safeParseStats(window.localStorage.getItem(STORAGE_KEY))
}

function saveTriviaStats(stats) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}

function updateBucket(bucket, key, isCorrect) {
  const safeBucket = bucket && typeof bucket === 'object' ? bucket : {}
  const existing = safeBucket[key] || { correct: 0, incorrect: 0 }
  const next = {
    correct: existing.correct + (isCorrect ? 1 : 0),
    incorrect: existing.incorrect + (isCorrect ? 0 : 1)
  }

  return {
    ...safeBucket,
    [key]: next
  }
}

export function recordTriviaResponse({ category, difficulty, isCorrect, currentStreak }) {
  const stats = loadTriviaStats()
  const categoryKey = category || 'Uncategorized'
  const difficultyKey = difficulty || 'Unknown'

  stats.category = updateBucket(stats.category, categoryKey, isCorrect)
  stats.difficulty = updateBucket(stats.difficulty, difficultyKey, isCorrect)

  if (isCorrect && Number.isFinite(currentStreak)) {
    stats.highestStreak = Math.max(stats.highestStreak, currentStreak)
  }

  saveTriviaStats(stats)
  return stats
}
