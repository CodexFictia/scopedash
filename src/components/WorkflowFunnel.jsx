import { ArrowRight } from 'lucide-react'

/**
 * Page-wide AM client workflow funnel.
 * Shows each stage with count + client-wise prompts.
 *
 * stages: [{
 *   name, count, color,
 *   prompts: [{ client, prompt }]
 * }]
 */
export default function WorkflowFunnel({ title = 'AM Client Workflow — Funnel View', stages = [] }) {
  return (
    <div
      style={{
        background: '#1c2333',
        border: '1px solid #30363d',
        borderRadius: 8,
        padding: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3' }}>{title}</div>
        <div style={{ fontSize: 11, color: '#656d76' }}>
          Total: {stages.reduce((s, x) => s + (Number(x.count) || 0), 0)} clients
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.max(stages.length, 1)}, 1fr)`,
          gap: 10,
          alignItems: 'stretch',
        }}
      >
        {stages.map((s, i) => (
          <div key={i} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                background: '#0d1117',
                border: `1px solid ${(s.color || '#f97316') + '60'}`,
                borderRadius: 6,
                padding: '12px 12px 10px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                position: 'relative',
              }}
            >
              {/* top bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: s.color || '#f97316',
                  borderRadius: '6px 6px 0 0',
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: s.color || '#f97316',
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                  }}
                >
                  Stage {i + 1}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3', marginTop: 2 }}>{s.name}</div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 6,
                    marginTop: 4,
                  }}
                >
                  <span style={{ fontSize: 22, fontWeight: 700, color: s.color || '#f97316', lineHeight: 1 }}>
                    {s.count}
                  </span>
                  <span style={{ fontSize: 10, color: '#656d76' }}>clients</span>
                </div>
              </div>

              <div
                style={{
                  borderTop: '1px solid #30363d',
                  paddingTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 7,
                }}
              >
                {(s.prompts || []).map((p, j) => (
                  <div key={j} style={{ fontSize: 10, lineHeight: 1.45 }}>
                    <div style={{ color: '#c9d1d9', fontWeight: 600 }}>{p.client}</div>
                    <div style={{ color: '#8b949e' }}>{p.prompt}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrow between stages */}
            {i < stages.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  right: -9,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 16,
                  height: 16,
                  borderRadius: 9,
                  background: '#1c2333',
                  border: '1px solid #30363d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <ArrowRight size={10} color="#8b949e" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
