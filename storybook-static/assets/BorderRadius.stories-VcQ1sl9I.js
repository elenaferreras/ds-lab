import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-CjFSsu8k.js";import{t as n}from"./tokens.stories-Bm-IU7NY.js";var r,i,a,o,s,c;e((()=>{n(),r=t(),i={title:`Tokens/Border Radius`,parameters:{layout:`padded`}},a=[{token:`--farco-radius-none`,value:`0`},{token:`--farco-radius-sm`,value:`4px`},{token:`--farco-radius-md`,value:`6px`},{token:`--farco-radius-lg`,value:`8px`},{token:`--farco-radius-xl`,value:`12px`},{token:`--farco-radius-full`,value:`9999px`}],o={name:`Radius Scale`,render:()=>(0,r.jsxs)(`div`,{className:`token-stories`,children:[(0,r.jsx)(`h2`,{children:`Border Radius`}),(0,r.jsx)(`p`,{className:`subtitle`,children:`Corner rounding options from sharp to fully rounded.`}),(0,r.jsx)(`div`,{className:`radius-grid`,children:a.map(({token:e,value:t})=>(0,r.jsxs)(`div`,{className:`radius-card`,children:[(0,r.jsx)(`div`,{className:`radius-card__preview`,style:{borderRadius:`var(${e})`}}),(0,r.jsx)(`span`,{className:`radius-card__name`,children:e.replace(`--farco-`,``)}),(0,r.jsx)(`span`,{className:`radius-card__value`,children:t})]},e))})]})},s={name:`In Context`,render:()=>(0,r.jsxs)(`div`,{className:`token-stories`,children:[(0,r.jsx)(`h2`,{children:`Radius in Context`}),(0,r.jsx)(`p`,{className:`subtitle`,children:`How radius tokens look applied to cards and buttons.`}),(0,r.jsxs)(`div`,{className:`token-section`,children:[(0,r.jsx)(`h3`,{className:`token-section__title`,children:`Cards`}),(0,r.jsx)(`p`,{className:`token-section__description`,children:`Same card with different radius values.`}),(0,r.jsx)(`div`,{style:{display:`flex`,gap:`24px`,flexWrap:`wrap`},children:a.map(({token:e,value:t})=>(0,r.jsx)(`div`,{style:{width:`140px`,height:`100px`,borderRadius:`var(${e})`,border:`1px solid var(--farco-color-border)`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`var(--farco-color-bg-base)`},children:(0,r.jsx)(`span`,{style:{fontSize:`11px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-50)`},children:t})},e))})]}),(0,r.jsxs)(`div`,{className:`token-section`,style:{marginTop:`40px`},children:[(0,r.jsx)(`h3`,{className:`token-section__title`,children:`Buttons`}),(0,r.jsx)(`p`,{className:`token-section__description`,children:`Same button shape with different radius values.`}),(0,r.jsx)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`,alignItems:`center`},children:a.map(({token:e,value:t})=>(0,r.jsx)(`div`,{style:{height:`40px`,padding:`0 20px`,borderRadius:`var(${e})`,border:`1px solid var(--farco-color-neutral-100)`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,fontSize:`12px`,fontFamily:`monospace`},children:t},e))})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Radius Scale',
  render: () => <div className="token-stories">
      <h2>Border Radius</h2>
      <p className="subtitle">Corner rounding options from sharp to fully rounded.</p>

      <div className="radius-grid">
        {radiusTokens.map(({
        token,
        value
      }) => <div key={token} className="radius-card">
            <div className="radius-card__preview" style={{
          borderRadius: \`var(\${token})\`
        }} />
            <span className="radius-card__name">
              {token.replace('--farco-', '')}
            </span>
            <span className="radius-card__value">{value}</span>
          </div>)}
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'In Context',
  render: () => <div className="token-stories">
      <h2>Radius in Context</h2>
      <p className="subtitle">How radius tokens look applied to cards and buttons.</p>

      <div className="token-section">
        <h3 className="token-section__title">Cards</h3>
        <p className="token-section__description">Same card with different radius values.</p>
        <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
          {radiusTokens.map(({
          token,
          value
        }) => <div key={token} style={{
          width: '140px',
          height: '100px',
          borderRadius: \`var(\${token})\`,
          border: \`1px solid var(--farco-color-border)\`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--farco-color-bg-base)'
        }}>
              <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-neutral-50)'
          }}>
                {value}
              </span>
            </div>)}
        </div>
      </div>

      <div className="token-section" style={{
      marginTop: '40px'
    }}>
        <h3 className="token-section__title">Buttons</h3>
        <p className="token-section__description">Same button shape with different radius values.</p>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          {radiusTokens.map(({
          token,
          value
        }) => <div key={token} style={{
          height: '40px',
          padding: '0 20px',
          borderRadius: \`var(\${token})\`,
          border: \`1px solid var(--farco-color-neutral-100)\`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontFamily: 'monospace'
        }}>
              {value}
            </div>)}
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Scale`,`InContext`]}))();export{s as InContext,o as Scale,c as __namedExportsOrder,i as default};