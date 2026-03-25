import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{a as r,c as i,l as a,n as o,o as s,r as c,s as l,t as u}from"./iframe-CjFSsu8k.js";var d,f=t((()=>{d={icon:{tag:`svg`,attrs:{viewBox:`64 64 896 896`,focusable:`false`},children:[{tag:`path`,attrs:{d:`M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z`}}]},name:`search`,theme:`outlined`}}));function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var m,h,g,_=t((()=>{m=e(n()),f(),s(),h=(e,t)=>m.createElement(r,p({},e,{ref:t,icon:d})),g=m.forwardRef(h)})),v=t((()=>{}));function y({children:e=`Label`,variant:t=`default`,size:n=`middle`,icon:r,showArrow:i=!0,block:a=!1,disabled:o=!1,loading:s=!1,danger:l=!1,href:u,target:d,onClick:f,...p}){let m=t===`primary`?`primary`:t===`text`?`text`:t===`dashed`?`dashed`:`default`;return(0,b.jsxs)(c,{className:`ds-button ds-button--${t} ds-button--${n}`,type:m,size:n,icon:r,block:a,disabled:o,loading:s,danger:l,href:u,target:d,onClick:f,...p,children:[(0,b.jsx)(`span`,{className:`ds-button__label`,children:e}),i&&!s&&(0,b.jsx)(`svg`,{className:`ds-button__arrow`,width:`13`,height:`13`,viewBox:`79.78 13.78 12.44 12.44`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M92.22 19.9891L85.9743 26.2227L85.3959 25.6454L90.6405 20.4109L79.78 20.4109L79.7801 19.6109L90.707 19.6109L85.4317 14.3457L85.9985 13.78L92.22 19.9891Z`,fill:`currentColor`})})]})}var b,x=t((()=>{o(),v(),b=u(),y.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{defaultValue:{value:`'Label'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},size:{defaultValue:{value:`'middle'`,computed:!1},required:!1},showArrow:{defaultValue:{value:`true`,computed:!1},required:!1},block:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},danger:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),S=t((()=>{_()})),C=t((()=>{a(),S(),l(),i.Provider})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;t((()=>{x(),C(),w=u(),T={title:`Components/Button`,component:y,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`primary`,`dashed`,`text`],description:`Visual style of the button`},size:{control:`select`,options:[`small`,`middle`,`large`],description:`Button size`},children:{control:`text`,description:`Button label`},showArrow:{control:`boolean`,description:`Show arrow icon after label`},disabled:{control:`boolean`,description:`Disabled state`},loading:{control:`boolean`,description:`Loading state`},danger:{control:`boolean`,description:`Danger state`},block:{control:`boolean`,description:`Full width button`}}},E={args:{children:`Label`,variant:`default`}},D={args:{children:`Label`,variant:`primary`}},O={args:{children:`Label`,variant:`dashed`}},k={args:{children:`Label`,variant:`text`}},A={name:`Without Arrow`,args:{children:`Label`,variant:`default`,showArrow:!1}},j={name:`With Icon`,args:{children:`Search`,variant:`default`,icon:(0,w.jsx)(g,{}),showArrow:!1}},M={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,w.jsx)(y,{size:`small`,children:`Small`}),(0,w.jsx)(y,{size:`middle`,children:`Middle`}),(0,w.jsx)(y,{size:`large`,children:`Large`})]})},N={args:{children:`Delete`,variant:`default`,danger:!0}},P={name:`Danger Primary`,args:{children:`Delete`,variant:`primary`,danger:!0}},F={args:{children:`Label`,variant:`default`,disabled:!0}},I={name:`Disabled Primary`,args:{children:`Label`,variant:`primary`,disabled:!0}},L={args:{children:`Loading`,variant:`default`,loading:!0}},R={args:{children:`Full Width`,variant:`default`,block:!0}},z={name:`All Variants`,render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{style:{fontSize:`12px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-50)`,marginBottom:`8px`},children:`Variants`}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,w.jsx)(y,{variant:`default`,children:`Default`}),(0,w.jsx)(y,{variant:`primary`,children:`Primary`}),(0,w.jsx)(y,{variant:`dashed`,children:`Dashed`}),(0,w.jsx)(y,{variant:`text`,children:`Text`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{style:{fontSize:`12px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-50)`,marginBottom:`8px`},children:`Sizes`}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,w.jsx)(y,{size:`small`,children:`Small`}),(0,w.jsx)(y,{size:`middle`,children:`Middle`}),(0,w.jsx)(y,{size:`large`,children:`Large`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{style:{fontSize:`12px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-50)`,marginBottom:`8px`},children:`States`}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,w.jsx)(y,{children:`Default`}),(0,w.jsx)(y,{disabled:!0,children:`Disabled`}),(0,w.jsx)(y,{loading:!0,children:`Loading`}),(0,w.jsx)(y,{danger:!0,children:`Danger`}),(0,w.jsx)(y,{variant:`primary`,danger:!0,children:`Danger Primary`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{style:{fontSize:`12px`,fontFamily:`monospace`,color:`var(--farco-color-neutral-50)`,marginBottom:`8px`},children:`Without Arrow`}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,w.jsx)(y,{showArrow:!1,children:`No Arrow`}),(0,w.jsx)(y,{showArrow:!1,icon:(0,w.jsx)(g,{}),children:`With Icon`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'default'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'primary'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'dashed'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'text'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Without Arrow',
  args: {
    children: 'Label',
    variant: 'default',
    showArrow: false
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    children: 'Search',
    variant: 'default',
    icon: <SearchOutlined />,
    showArrow: false
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button size="small">Small</Button>
      <Button size="middle">Middle</Button>
      <Button size="large">Large</Button>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'default',
    danger: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Danger Primary',
  args: {
    children: 'Delete',
    variant: 'primary',
    danger: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'default',
    disabled: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Primary',
  args: {
    children: 'Label',
    variant: 'primary',
    disabled: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    variant: 'default',
    loading: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width',
    variant: 'default',
    block: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <div style={{
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--farco-color-neutral-50)',
        marginBottom: '8px'
      }}>
          Variants
        </div>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="text">Text</Button>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--farco-color-neutral-50)',
        marginBottom: '8px'
      }}>
          Sizes
        </div>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button size="small">Small</Button>
          <Button size="middle">Middle</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--farco-color-neutral-50)',
        marginBottom: '8px'
      }}>
          States
        </div>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button danger>Danger</Button>
          <Button variant="primary" danger>Danger Primary</Button>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--farco-color-neutral-50)',
        marginBottom: '8px'
      }}>
          Without Arrow
        </div>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button showArrow={false}>No Arrow</Button>
          <Button showArrow={false} icon={<SearchOutlined />}>With Icon</Button>
        </div>
      </div>
    </div>
}`,...z.parameters?.docs?.source}}},B=[`Default`,`Primary`,`Dashed`,`Text`,`WithoutArrow`,`WithIcon`,`Sizes`,`Danger`,`DangerPrimary`,`Disabled`,`DisabledPrimary`,`Loading`,`Block`,`AllVariants`]}))();export{z as AllVariants,R as Block,N as Danger,P as DangerPrimary,O as Dashed,E as Default,F as Disabled,I as DisabledPrimary,L as Loading,D as Primary,M as Sizes,k as Text,j as WithIcon,A as WithoutArrow,B as __namedExportsOrder,T as default};