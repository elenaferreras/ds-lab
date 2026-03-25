import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-CjFSsu8k.js";import{t as n}from"./tokens.stories-Bm-IU7NY.js";var r,i,a,o,s,c,l;e((()=>{n(),r=t(),i={title:`Tokens/Shadows`,parameters:{layout:`padded`}},a=[{token:`--farco-shadow-sm`,value:`0 1px 2px rgba(0,0,0,0.05)`,description:`Subtle elevation for cards and inputs.`},{token:`--farco-shadow-md`,value:`0 4px 8px rgba(0,0,0,0.1)`,description:`Medium elevation for dropdowns and popovers.`},{token:`--farco-shadow-lg`,value:`0 8px 24px rgba(0,0,0,0.12)`,description:`High elevation for modals and dialogs.`}],o={name:`Shadow Scale`,render:()=>(0,r.jsxs)(`div`,{className:`token-stories`,children:[(0,r.jsx)(`h2`,{children:`Shadows`}),(0,r.jsx)(`p`,{className:`subtitle`,children:`Elevation levels for layered UI elements.`}),(0,r.jsx)(`div`,{className:`shadow-grid`,children:a.map(({token:e,value:t,description:n})=>(0,r.jsxs)(`div`,{className:`shadow-card`,children:[(0,r.jsx)(`div`,{className:`shadow-card__preview`,style:{boxShadow:`var(${e})`}}),(0,r.jsx)(`span`,{className:`shadow-card__name`,children:e.replace(`--farco-`,``)}),(0,r.jsx)(`span`,{className:`shadow-card__value`,children:t})]},e))})]})},s={name:`In Context`,render:()=>(0,r.jsxs)(`div`,{className:`token-stories`,children:[(0,r.jsx)(`h2`,{children:`Shadows in Context`}),(0,r.jsx)(`p`,{className:`subtitle`,children:`How shadow tokens create visual hierarchy between elements.`}),(0,r.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`40px`,maxWidth:`400px`},children:a.map(({token:e,description:t})=>(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`div`,{style:{fontSize:`12px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-50)`,marginBottom:`12px`},children:e.replace(`--farco-`,``)}),(0,r.jsxs)(`div`,{style:{padding:`var(--farco-spacing-6)`,borderRadius:`var(--farco-radius-lg)`,background:`var(--farco-color-bg-base)`,boxShadow:`var(${e})`},children:[(0,r.jsx)(`div`,{style:{fontSize:`var(--farco-font-size-md)`,fontWeight:`var(--farco-font-weight-medium)`,marginBottom:`4px`},children:`Card title`}),(0,r.jsx)(`div`,{style:{fontSize:`var(--farco-font-size-sm)`,color:`var(--farco-color-neutral-50)`},children:t})]})]},e))})]})},c={name:`Stacked Layers`,render:()=>(0,r.jsxs)(`div`,{className:`token-stories`,children:[(0,r.jsx)(`h2`,{children:`Stacked Layers`}),(0,r.jsx)(`p`,{className:`subtitle`,children:`Demonstrating visual depth hierarchy using shadow tokens.`}),(0,r.jsxs)(`div`,{style:{position:`relative`,height:`320px`,width:`400px`},children:[(0,r.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`300px`,height:`200px`,borderRadius:`var(--farco-radius-lg)`,background:`var(--farco-color-bg-base)`,boxShadow:`var(--farco-shadow-sm)`,padding:`var(--farco-spacing-4)`,border:`1px solid var(--farco-color-neutral-10)`},children:(0,r.jsx)(`span`,{style:{fontSize:`11px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-40)`},children:`shadow-sm (base layer)`})}),(0,r.jsx)(`div`,{style:{position:`absolute`,top:`60px`,left:`40px`,width:`300px`,height:`200px`,borderRadius:`var(--farco-radius-lg)`,background:`var(--farco-color-bg-base)`,boxShadow:`var(--farco-shadow-md)`,padding:`var(--farco-spacing-4)`},children:(0,r.jsx)(`span`,{style:{fontSize:`11px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-40)`},children:`shadow-md (middle layer)`})}),(0,r.jsx)(`div`,{style:{position:`absolute`,top:`120px`,left:`80px`,width:`300px`,height:`200px`,borderRadius:`var(--farco-radius-lg)`,background:`var(--farco-color-bg-base)`,boxShadow:`var(--farco-shadow-lg)`,padding:`var(--farco-spacing-4)`},children:(0,r.jsx)(`span`,{style:{fontSize:`11px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-40)`},children:`shadow-lg (top layer)`})})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Shadow Scale',
  render: () => <div className="token-stories">
      <h2>Shadows</h2>
      <p className="subtitle">Elevation levels for layered UI elements.</p>

      <div className="shadow-grid">
        {shadowTokens.map(({
        token,
        value,
        description
      }) => <div key={token} className="shadow-card">
            <div className="shadow-card__preview" style={{
          boxShadow: \`var(\${token})\`
        }} />
            <span className="shadow-card__name">
              {token.replace('--farco-', '')}
            </span>
            <span className="shadow-card__value">{value}</span>
          </div>)}
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'In Context',
  render: () => <div className="token-stories">
      <h2>Shadows in Context</h2>
      <p className="subtitle">How shadow tokens create visual hierarchy between elements.</p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      maxWidth: '400px'
    }}>
        {shadowTokens.map(({
        token,
        description
      }) => <div key={token}>
            <div style={{
          fontSize: '12px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-50)',
          marginBottom: '12px'
        }}>
              {token.replace('--farco-', '')}
            </div>
            <div style={{
          padding: 'var(--farco-spacing-6)',
          borderRadius: 'var(--farco-radius-lg)',
          background: 'var(--farco-color-bg-base)',
          boxShadow: \`var(\${token})\`
        }}>
              <div style={{
            fontSize: 'var(--farco-font-size-md)',
            fontWeight: 'var(--farco-font-weight-medium)',
            marginBottom: '4px'
          }}>
                Card title
              </div>
              <div style={{
            fontSize: 'var(--farco-font-size-sm)',
            color: 'var(--farco-color-neutral-50)'
          }}>
                {description}
              </div>
            </div>
          </div>)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Stacked Layers',
  render: () => <div className="token-stories">
      <h2>Stacked Layers</h2>
      <p className="subtitle">Demonstrating visual depth hierarchy using shadow tokens.</p>

      <div style={{
      position: 'relative',
      height: '320px',
      width: '400px'
    }}>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '300px',
        height: '200px',
        borderRadius: 'var(--farco-radius-lg)',
        background: 'var(--farco-color-bg-base)',
        boxShadow: 'var(--farco-shadow-sm)',
        padding: 'var(--farco-spacing-4)',
        border: '1px solid var(--farco-color-neutral-10)'
      }}>
          <span style={{
          fontSize: '11px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-40)'
        }}>
            shadow-sm (base layer)
          </span>
        </div>

        <div style={{
        position: 'absolute',
        top: '60px',
        left: '40px',
        width: '300px',
        height: '200px',
        borderRadius: 'var(--farco-radius-lg)',
        background: 'var(--farco-color-bg-base)',
        boxShadow: 'var(--farco-shadow-md)',
        padding: 'var(--farco-spacing-4)'
      }}>
          <span style={{
          fontSize: '11px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-40)'
        }}>
            shadow-md (middle layer)
          </span>
        </div>

        <div style={{
        position: 'absolute',
        top: '120px',
        left: '80px',
        width: '300px',
        height: '200px',
        borderRadius: 'var(--farco-radius-lg)',
        background: 'var(--farco-color-bg-base)',
        boxShadow: 'var(--farco-shadow-lg)',
        padding: 'var(--farco-spacing-4)'
      }}>
          <span style={{
          fontSize: '11px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-40)'
        }}>
            shadow-lg (top layer)
          </span>
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}},l=[`Scale`,`InContext`,`Stacked`]}))();export{s as InContext,o as Scale,c as Stacked,l as __namedExportsOrder,i as default};