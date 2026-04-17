import { createContext, useContext, useState, useEffect } from 'react'

// ─── Token maps ───────────────────────────────────────────────────────────────
export const DARK = {
  bgRoot:      '#0d1117',
  bgSurface:   '#161b22',
  bgCard:      '#1c2333',
  bgCardHover: '#222d3f',
  bgInput:     '#1c2333',
  bgSelect:    '#0d1117',
  bgTag:       '#30363d',
  border:      '#30363d',
  borderSub:   '#21262d',
  textPrimary: '#e6edf3',
  textBody:    '#c9d1d9',
  textMuted:   '#8b949e',
  textSubtle:  '#656d76',
  shadow:      'rgba(0,0,0,0.5)',
  shadowLight: 'rgba(0,0,0,0.3)',
}

export const LIGHT = {
  bgRoot:      '#f0f2f5',
  bgSurface:   '#ffffff',
  bgCard:      '#ffffff',
  bgCardHover: '#f6f8fa',
  bgInput:     '#f6f8fa',
  bgSelect:    '#ffffff',
  bgTag:       '#eaeef2',
  border:      '#d0d7de',
  borderSub:   '#eaeef2',
  textPrimary: '#1f2328',
  textBody:    '#24292f',
  textMuted:   '#57606a',
  textSubtle:  '#6e7781',
  shadow:      'rgba(0,0,0,0.15)',
  shadowLight: 'rgba(0,0,0,0.08)',
}

// ─── Context ──────────────────────────────────────────────────────────────────
const ThemeContext = createContext(null)
export const useTheme = () => useContext(ThemeContext)

// ─── Provider ─────────────────────────────────────────────────────────────────
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('sw-theme') !== 'light' } catch { return true }
  })

  const t = isDark ? DARK : LIGHT

  // Inject CSS variables on <html> so any var() in inline styles resolves automatically
  useEffect(() => {
    const root = document.documentElement
    Object.entries(t).forEach(([k, v]) => root.style.setProperty(`--${k}`, v))
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')
    try { localStorage.setItem('sw-theme', isDark ? 'dark' : 'light') } catch {}
  }, [isDark]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggleTheme = () => setIsDark(d => !d)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, t }}>
      {children}
    </ThemeContext.Provider>
  )
}
