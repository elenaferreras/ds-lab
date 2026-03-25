import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./iframe-CjFSsu8k.js";import{t as n}from"./tokens.stories-Bm-IU7NY.js";function r({token:e,value:t}){return(0,a.jsxs)(`div`,{className:`token-card`,children:[(0,a.jsx)(`div`,{className:`token-card__preview`,style:{background:`var(${e})`}}),(0,a.jsxs)(`div`,{className:`token-card__info`,children:[(0,a.jsx)(`span`,{className:`token-card__name`,children:e}),(0,a.jsx)(`span`,{className:`token-card__value`,children:t})]})]})}function i({title:e,description:t,colors:n}){return(0,a.jsxs)(`div`,{className:`token-section`,children:[(0,a.jsx)(`h3`,{className:`token-section__title`,children:e}),t&&(0,a.jsx)(`p`,{className:`token-section__description`,children:t}),(0,a.jsx)(`div`,{className:`token-grid`,children:n.map(({token:e,value:t})=>(0,a.jsx)(r,{token:e,value:t},e))})]})}var a,o,s,c,l,u,d;e((()=>{n(),a=t(),o={title:`Tokens/Colors`,parameters:{layout:`padded`}},s={render:()=>(0,a.jsxs)(`div`,{className:`token-stories`,children:[(0,a.jsx)(`h2`,{children:`Primary Colors`}),(0,a.jsx)(`p`,{className:`subtitle`,children:`Core brand colors used for interactive elements and emphasis.`}),(0,a.jsx)(i,{title:`Primary`,description:`Main brand color and its interactive states.`,colors:[{token:`--farco-color-primary`,value:`Primary`},{token:`--farco-color-primary-hover`,value:`Hover state`},{token:`--farco-color-primary-active`,value:`Active state`},{token:`--farco-color-accent`,value:`Accent / highlight`}]})]})},c={render:()=>(0,a.jsxs)(`div`,{className:`token-stories`,children:[(0,a.jsx)(`h2`,{children:`Semantic Colors`}),(0,a.jsx)(`p`,{className:`subtitle`,children:`Colors with specific meaning for feedback and status.`}),(0,a.jsx)(i,{title:`Feedback`,description:`Used for alerts, validation, and status indicators.`,colors:[{token:`--farco-color-success`,value:`Success`},{token:`--farco-color-warning`,value:`Warning`},{token:`--farco-color-danger`,value:`Danger / Error`}]}),(0,a.jsx)(i,{title:`Surface & Border`,description:`Background and border colors.`,colors:[{token:`--farco-color-bg-base`,value:`Base background`},{token:`--farco-color-bg-subtle`,value:`Subtle background`},{token:`--farco-color-border`,value:`Border`}]})]})},l={render:()=>(0,a.jsxs)(`div`,{className:`token-stories`,children:[(0,a.jsx)(`h2`,{children:`Neutral Colors`}),(0,a.jsx)(`p`,{className:`subtitle`,children:`Grayscale ramp from white to black, used for text, backgrounds, and borders.`}),(0,a.jsx)(`div`,{className:`token-grid`,children:[{token:`--farco-color-neutral-0`,value:`#ffffff`},{token:`--farco-color-neutral-10`,value:`#f5f5f5`},{token:`--farco-color-neutral-20`,value:`#e8e8e8`},{token:`--farco-color-neutral-30`,value:`#d9d9d9`},{token:`--farco-color-neutral-40`,value:`#bfbfbf`},{token:`--farco-color-neutral-50`,value:`#8c8c8c`},{token:`--farco-color-neutral-60`,value:`#595959`},{token:`--farco-color-neutral-70`,value:`#434343`},{token:`--farco-color-neutral-80`,value:`#262626`},{token:`--farco-color-neutral-90`,value:`#1f1f1f`},{token:`--farco-color-neutral-100`,value:`#000000`}].map(({token:e,value:t})=>(0,a.jsx)(r,{token:e,value:t},e))})]})},u={name:`All Colors`,render:()=>(0,a.jsxs)(`div`,{className:`token-stories`,children:[(0,a.jsx)(`h2`,{children:`All Colors`}),(0,a.jsx)(`p`,{className:`subtitle`,children:`Complete color palette. Switch themes using the toolbar to compare.`}),(0,a.jsx)(i,{title:`Primary`,colors:[{token:`--farco-color-primary`,value:`Primary`},{token:`--farco-color-primary-hover`,value:`Hover`},{token:`--farco-color-primary-active`,value:`Active`},{token:`--farco-color-accent`,value:`Accent`}]}),(0,a.jsx)(i,{title:`Feedback`,colors:[{token:`--farco-color-success`,value:`Success`},{token:`--farco-color-warning`,value:`Warning`},{token:`--farco-color-danger`,value:`Danger`}]}),(0,a.jsx)(i,{title:`Surface & Border`,colors:[{token:`--farco-color-bg-base`,value:`Base bg`},{token:`--farco-color-bg-subtle`,value:`Subtle bg`},{token:`--farco-color-border`,value:`Border`}]}),(0,a.jsx)(i,{title:`Neutrals`,colors:[{token:`--farco-color-neutral-0`,value:`0`},{token:`--farco-color-neutral-10`,value:`10`},{token:`--farco-color-neutral-20`,value:`20`},{token:`--farco-color-neutral-30`,value:`30`},{token:`--farco-color-neutral-40`,value:`40`},{token:`--farco-color-neutral-50`,value:`50`},{token:`--farco-color-neutral-60`,value:`60`},{token:`--farco-color-neutral-70`,value:`70`},{token:`--farco-color-neutral-80`,value:`80`},{token:`--farco-color-neutral-90`,value:`90`},{token:`--farco-color-neutral-100`,value:`100`}]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="token-stories">
      <h2>Primary Colors</h2>
      <p className="subtitle">Core brand colors used for interactive elements and emphasis.</p>
      <ColorSection title="Primary" description="Main brand color and its interactive states." colors={[{
      token: '--farco-color-primary',
      value: 'Primary'
    }, {
      token: '--farco-color-primary-hover',
      value: 'Hover state'
    }, {
      token: '--farco-color-primary-active',
      value: 'Active state'
    }, {
      token: '--farco-color-accent',
      value: 'Accent / highlight'
    }]} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="token-stories">
      <h2>Semantic Colors</h2>
      <p className="subtitle">Colors with specific meaning for feedback and status.</p>
      <ColorSection title="Feedback" description="Used for alerts, validation, and status indicators." colors={[{
      token: '--farco-color-success',
      value: 'Success'
    }, {
      token: '--farco-color-warning',
      value: 'Warning'
    }, {
      token: '--farco-color-danger',
      value: 'Danger / Error'
    }]} />
      <ColorSection title="Surface & Border" description="Background and border colors." colors={[{
      token: '--farco-color-bg-base',
      value: 'Base background'
    }, {
      token: '--farco-color-bg-subtle',
      value: 'Subtle background'
    }, {
      token: '--farco-color-border',
      value: 'Border'
    }]} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="token-stories">
      <h2>Neutral Colors</h2>
      <p className="subtitle">Grayscale ramp from white to black, used for text, backgrounds, and borders.</p>
      <div className="token-grid">
        {[{
        token: '--farco-color-neutral-0',
        value: '#ffffff'
      }, {
        token: '--farco-color-neutral-10',
        value: '#f5f5f5'
      }, {
        token: '--farco-color-neutral-20',
        value: '#e8e8e8'
      }, {
        token: '--farco-color-neutral-30',
        value: '#d9d9d9'
      }, {
        token: '--farco-color-neutral-40',
        value: '#bfbfbf'
      }, {
        token: '--farco-color-neutral-50',
        value: '#8c8c8c'
      }, {
        token: '--farco-color-neutral-60',
        value: '#595959'
      }, {
        token: '--farco-color-neutral-70',
        value: '#434343'
      }, {
        token: '--farco-color-neutral-80',
        value: '#262626'
      }, {
        token: '--farco-color-neutral-90',
        value: '#1f1f1f'
      }, {
        token: '--farco-color-neutral-100',
        value: '#000000'
      }].map(({
        token,
        value
      }) => <ColorSwatch key={token} token={token} value={value} />)}
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All Colors',
  render: () => <div className="token-stories">
      <h2>All Colors</h2>
      <p className="subtitle">Complete color palette. Switch themes using the toolbar to compare.</p>

      <ColorSection title="Primary" colors={[{
      token: '--farco-color-primary',
      value: 'Primary'
    }, {
      token: '--farco-color-primary-hover',
      value: 'Hover'
    }, {
      token: '--farco-color-primary-active',
      value: 'Active'
    }, {
      token: '--farco-color-accent',
      value: 'Accent'
    }]} />

      <ColorSection title="Feedback" colors={[{
      token: '--farco-color-success',
      value: 'Success'
    }, {
      token: '--farco-color-warning',
      value: 'Warning'
    }, {
      token: '--farco-color-danger',
      value: 'Danger'
    }]} />

      <ColorSection title="Surface & Border" colors={[{
      token: '--farco-color-bg-base',
      value: 'Base bg'
    }, {
      token: '--farco-color-bg-subtle',
      value: 'Subtle bg'
    }, {
      token: '--farco-color-border',
      value: 'Border'
    }]} />

      <ColorSection title="Neutrals" colors={[{
      token: '--farco-color-neutral-0',
      value: '0'
    }, {
      token: '--farco-color-neutral-10',
      value: '10'
    }, {
      token: '--farco-color-neutral-20',
      value: '20'
    }, {
      token: '--farco-color-neutral-30',
      value: '30'
    }, {
      token: '--farco-color-neutral-40',
      value: '40'
    }, {
      token: '--farco-color-neutral-50',
      value: '50'
    }, {
      token: '--farco-color-neutral-60',
      value: '60'
    }, {
      token: '--farco-color-neutral-70',
      value: '70'
    }, {
      token: '--farco-color-neutral-80',
      value: '80'
    }, {
      token: '--farco-color-neutral-90',
      value: '90'
    }, {
      token: '--farco-color-neutral-100',
      value: '100'
    }]} />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Primary`,`Semantic`,`Neutrals`,`AllColors`]}))();export{u as AllColors,l as Neutrals,s as Primary,c as Semantic,d as __namedExportsOrder,o as default};