/** @typedef {{ id: string, label: string }} DatePresetDefinition */

/** @typedef {{ from: Date, to: Date }} DateRange */

/**
 * @param {Date} date
 * @returns {Date}
 */
export function startOfDay(date) {
  const next = new Date(date)
  next.setHours(0, 0, 0, 0)
  return next
}

/**
 * @param {Date} date
 * @returns {Date}
 */
export function endOfDay(date) {
  const next = new Date(date)
  next.setHours(23, 59, 59, 999)
  return next
}

/**
 * @param {Date} date
 * @param {number} days
 * @returns {Date}
 */
function addDays(date, days) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

/**
 * @param {Date} date
 * @returns {Date}
 */
function startOfMonth(date) {
  return startOfDay(new Date(date.getFullYear(), date.getMonth(), 1))
}

/**
 * @param {Date} date
 * @returns {Date}
 */
function endOfMonth(date) {
  return endOfDay(new Date(date.getFullYear(), date.getMonth() + 1, 0))
}

/** @type {DatePresetDefinition[]} */
export const DEFAULT_DATE_PRESETS = [
  { id: 'today', label: 'Today' },
  { id: 'yesterday', label: 'Yesterday' },
  { id: 'last7', label: 'Last 7 days' },
  { id: 'last30', label: 'Last 30 days' },
  { id: 'thisMonth', label: 'This month' },
  { id: 'lastMonth', label: 'Last month' },
]

/**
 * @param {string} id
 * @param {Date} [referenceDate]
 * @returns {DateRange}
 */
export function getPresetRange(id, referenceDate = new Date()) {
  const today = startOfDay(referenceDate)

  switch (id) {
    case 'today':
      return { from: today, to: endOfDay(today) }
    case 'yesterday': {
      const yesterday = addDays(today, -1)
      return { from: yesterday, to: endOfDay(yesterday) }
    }
    case 'last7':
      return { from: addDays(today, -6), to: endOfDay(today) }
    case 'last30':
      return { from: addDays(today, -29), to: endOfDay(today) }
    case 'thisMonth':
      return { from: startOfMonth(today), to: endOfDay(today) }
    case 'lastMonth': {
      const lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1)
      return { from: startOfMonth(lastMonthDate), to: endOfMonth(lastMonthDate) }
    }
    default:
      return { from: today, to: endOfDay(today) }
  }
}

/**
 * @param {Date} date
 * @param {string} [locale]
 * @returns {string}
 */
export function formatDate(date, locale = 'es-ES') {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

/**
 * @param {Date} from
 * @param {Date} to
 * @param {string} [locale]
 * @returns {string}
 */
export function formatDateRange(from, to, locale = 'es-ES') {
  const sameYear = from.getFullYear() === to.getFullYear()
  const sameMonth = sameYear && from.getMonth() === to.getMonth()

  if (sameMonth && from.getDate() === to.getDate()) {
    return formatDate(from, locale)
  }

  const fromFormatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    ...(sameYear ? {} : { year: 'numeric' }),
  })

  const toFormatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return `${fromFormatter.format(from)} - ${toFormatter.format(to)}`
}

/**
 * @param {Date} date
 * @returns {string}
 */
export function toInputDateValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * @param {string} value
 * @returns {Date | null}
 */
export function fromInputDateValue(value) {
  if (!value) return null
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return null
  const date = new Date(year, month - 1, day)
  if (Number.isNaN(date.getTime())) return null
  return date
}

/**
 * @param {Date} from
 * @param {Date} to
 * @param {{ minDate?: Date, maxDate?: Date }} [bounds]
 * @returns {{ valid: boolean, from: Date, to: Date, error?: string }}
 */
export function validateDateRange(from, to, bounds = {}) {
  const { minDate, maxDate } = bounds
  const normalizedFrom = startOfDay(from)
  const normalizedTo = endOfDay(to)

  if (normalizedFrom > normalizedTo) {
    return { valid: false, from: normalizedFrom, to: normalizedTo, error: 'Start date must be before end date.' }
  }

  if (minDate && normalizedFrom < startOfDay(minDate)) {
    return { valid: false, from: normalizedFrom, to: normalizedTo, error: 'Start date is before the minimum allowed date.' }
  }

  if (maxDate && normalizedTo > endOfDay(maxDate)) {
    return { valid: false, from: normalizedFrom, to: normalizedTo, error: 'End date is after the maximum allowed date.' }
  }

  return { valid: true, from: normalizedFrom, to: normalizedTo }
}
