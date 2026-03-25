import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-CjFSsu8k.js";import{t as n}from"./tokens.stories-Bm-IU7NY.js";var r,i,a,o,s,c;e((()=>{n(),r=t(),i={title:`Tokens/Spacing`,parameters:{layout:`padded`}},a=[{token:`--farco-spacing-1`,value:`4px`},{token:`--farco-spacing-2`,value:`8px`},{token:`--farco-spacing-3`,value:`12px`},{token:`--farco-spacing-4`,value:`16px`},{token:`--farco-spacing-5`,value:`20px`},{token:`--farco-spacing-6`,value:`24px`},{token:`--farco-spacing-8`,value:`32px`},{token:`--farco-spacing-10`,value:`40px`},{token:`--farco-spacing-12`,value:`48px`},{token:`--farco-spacing-16`,value:`64px`}],o={name:`Spacing Scale`,render:()=>(0,r.jsxs)(`div`,{className:`token-stories`,children:[(0,r.jsx)(`h2`,{children:`Spacing`}),(0,r.jsx)(`p`,{className:`subtitle`,children:`Consistent spacing scale based on a 4px grid. Used for padding, margin, and gaps.`}),a.map(({token:e,value:t})=>(0,r.jsxs)(`div`,{className:`spacing-row`,children:[(0,r.jsx)(`span`,{className:`spacing-row__label`,children:e.replace(`--farco-`,``)}),(0,r.jsx)(`div`,{className:`spacing-row__bar`,style:{width:`var(${e})`}}),(0,r.jsx)(`span`,{className:`spacing-row__value`,children:t})]},e))]})},s={name:`Box Model Demo`,render:()=>(0,r.jsxs)(`div`,{className:`token-stories`,children:[(0,r.jsx)(`h2`,{children:`Spacing in Context`}),(0,r.jsx)(`p`,{className:`subtitle`,children:`How spacing tokens are used for padding and gaps between elements.`}),(0,r.jsxs)(`div`,{className:`token-section`,children:[(0,r.jsx)(`h3`,{className:`token-section__title`,children:`Padding`}),(0,r.jsx)(`p`,{className:`token-section__description`,children:`Each box below uses a different spacing token for padding.`}),(0,r.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[{token:`--farco-spacing-2`,label:`spacing-2 (8px)`},{token:`--farco-spacing-4`,label:`spacing-4 (16px)`},{token:`--farco-spacing-6`,label:`spacing-6 (24px)`},{token:`--farco-spacing-8`,label:`spacing-8 (32px)`}].map(({token:e,label:t})=>(0,r.jsx)(`div`,{style:{padding:`var(${e})`,border:`1px solid var(--farco-color-border)`,borderRadius:`var(--farco-radius-md)`,background:`var(--farco-color-bg-subtle)`},children:(0,r.jsx)(`span`,{style:{fontSize:`12px`,fontFamily:`monospace`},children:t})},e))})]}),(0,r.jsxs)(`div`,{className:`token-section`,style:{marginTop:`40px`},children:[(0,r.jsx)(`h3`,{className:`token-section__title`,children:`Gap`}),(0,r.jsx)(`p`,{className:`token-section__description`,children:`Items spaced apart using gap tokens.`}),[{token:`--farco-spacing-1`,label:`gap: spacing-1 (4px)`},{token:`--farco-spacing-2`,label:`gap: spacing-2 (8px)`},{token:`--farco-spacing-4`,label:`gap: spacing-4 (16px)`},{token:`--farco-spacing-6`,label:`gap: spacing-6 (24px)`}].map(({token:e,label:t})=>(0,r.jsxs)(`div`,{style:{marginBottom:`24px`},children:[(0,r.jsx)(`div`,{style:{fontSize:`12px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-50)`,marginBottom:`8px`},children:t}),(0,r.jsx)(`div`,{style:{display:`flex`,gap:`var(${e})`},children:[1,2,3,4,5].map(e=>(0,r.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`var(--farco-radius-sm)`,background:`var(--farco-color-primary)`}},e))})]},e))]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Spacing Scale',
  render: () => <div className="token-stories">
      <h2>Spacing</h2>
      <p className="subtitle">Consistent spacing scale based on a 4px grid. Used for padding, margin, and gaps.</p>

      {spacingTokens.map(({
      token,
      value
    }) => <div key={token} className="spacing-row">
          <span className="spacing-row__label">{token.replace('--farco-', '')}</span>
          <div className="spacing-row__bar" style={{
        width: \`var(\${token})\`
      }} />
          <span className="spacing-row__value">{value}</span>
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Box Model Demo',
  render: () => <div className="token-stories">
      <h2>Spacing in Context</h2>
      <p className="subtitle">How spacing tokens are used for padding and gaps between elements.</p>

      <div className="token-section">
        <h3 className="token-section__title">Padding</h3>
        <p className="token-section__description">
          Each box below uses a different spacing token for padding.
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {[{
          token: '--farco-spacing-2',
          label: 'spacing-2 (8px)'
        }, {
          token: '--farco-spacing-4',
          label: 'spacing-4 (16px)'
        }, {
          token: '--farco-spacing-6',
          label: 'spacing-6 (24px)'
        }, {
          token: '--farco-spacing-8',
          label: 'spacing-8 (32px)'
        }].map(({
          token,
          label
        }) => <div key={token} style={{
          padding: \`var(\${token})\`,
          border: \`1px solid var(--farco-color-border)\`,
          borderRadius: 'var(--farco-radius-md)',
          background: 'var(--farco-color-bg-subtle)'
        }}>
              <span style={{
            fontSize: '12px',
            fontFamily: 'monospace'
          }}>{label}</span>
            </div>)}
        </div>
      </div>

      <div className="token-section" style={{
      marginTop: '40px'
    }}>
        <h3 className="token-section__title">Gap</h3>
        <p className="token-section__description">
          Items spaced apart using gap tokens.
        </p>
        {[{
        token: '--farco-spacing-1',
        label: 'gap: spacing-1 (4px)'
      }, {
        token: '--farco-spacing-2',
        label: 'gap: spacing-2 (8px)'
      }, {
        token: '--farco-spacing-4',
        label: 'gap: spacing-4 (16px)'
      }, {
        token: '--farco-spacing-6',
        label: 'gap: spacing-6 (24px)'
      }].map(({
        token,
        label
      }) => <div key={token} style={{
        marginBottom: '24px'
      }}>
            <div style={{
          fontSize: '12px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-50)',
          marginBottom: '8px'
        }}>
              {label}
            </div>
            <div style={{
          display: 'flex',
          gap: \`var(\${token})\`
        }}>
              {[1, 2, 3, 4, 5].map(i => <div key={i} style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--farco-radius-sm)',
            background: 'var(--farco-color-primary)'
          }} />)}
            </div>
          </div>)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Scale`,`BoxModel`]}))();export{s as BoxModel,o as Scale,c as __namedExportsOrder,i as default};