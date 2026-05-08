import { useState, useEffect } from 'react';
import { Avatar } from '../components/ui/avatar';

export default {
  title: 'Get Started',
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};

function ContributorCard({ login, avatar_url, html_url }) {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--ds-spacing-12)',
        padding: 'var(--ds-spacing-16)',
        background: 'var(--ds-color-background-surface-raised)',
        border: '1px solid var(--ds-color-border-surface-default)',
        borderRadius: 'var(--ds-radius-md)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color 0.15s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--ds-color-border-surface-strong)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--ds-color-border-surface-default)'}
    >
      <Avatar src={avatar_url} alt={login} fallback={login.slice(0, 2).toUpperCase()} size="xl" />
      <span style={{
        fontSize: 'var(--ds-font-size-sm)',
        fontWeight: 500,
        color: 'var(--ds-color-foreground-text-primary)',
        textAlign: 'center',
        fontFamily: 'var(--ds-font-family-body)',
      }}>
        {login}
      </span>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--ds-spacing-12)',
      padding: 'var(--ds-spacing-16)',
      background: 'var(--ds-color-background-surface-raised)',
      border: '1px solid var(--ds-color-border-surface-default)',
      borderRadius: 'var(--ds-radius-md)',
    }}>
      {/* Avatar skeleton — matches xl size (48px) */}
      <div style={{
        width: 'var(--ds-spacing-48)',
        height: 'var(--ds-spacing-48)',
        borderRadius: '9999px',
        background: 'var(--ds-color-background-surface-subtle)',
        animation: 'pulse 1.5s ease-in-out infinite',
      }} />
      <div style={{
        width: '72px',
        height: '14px',
        borderRadius: 'var(--ds-radius-sm)',
        background: 'var(--ds-color-background-surface-subtle)',
        animation: 'pulse 1.5s ease-in-out infinite',
      }} />
    </div>
  );
}

function GetStartedPage() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/elenaferreras/ds-lab/contributors')
      .then(res => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setContributors(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      padding: '3rem 40px',
      maxWidth: '720px',
      fontFamily: 'var(--ds-font-family-body)',
    }}>
      {/* Header */}
      <h1 style={{
        fontSize: 'var(--ds-font-size-xl)',
        fontWeight: 700,
        color: 'var(--ds-color-foreground-text-primary)',
        margin: '0 0 var(--ds-spacing-8) 0',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
      }}>
        Design System
      </h1>
      <p style={{
        fontSize: 'var(--ds-font-size-md)',
        color: 'var(--ds-color-foreground-text-secondary)',
        margin: '0 0 var(--ds-spacing-24) 0',
        lineHeight: 1.5,
      }}>
        A shared library of components, tokens, and patterns for building consistent Farco products.
        Use the sidebar to explore components and design tokens.
      </p>

      {/* Hero image */}
      <div style={{
        borderRadius: 'var(--ds-radius-lg)',
        overflow: 'hidden',
        marginBottom: 'var(--ds-spacing-32)',
      }}>
        <img
          src="get-started-hero.png"
          alt=""
          style={{ display: 'block', width: '100%' }}
        />
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'var(--ds-color-border-surface-default)',
        marginBottom: 'var(--ds-spacing-32)',
      }} />

      {/* Contributors */}
      <div>
        <h2 style={{
          fontSize: 'var(--ds-font-size-xs)',
          fontWeight: 500,
          color: 'var(--ds-color-foreground-text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: '0 0 var(--ds-spacing-16) 0',
        }}>
          Contributors
        </h2>

        {error ? (
          <p style={{
            fontSize: 'var(--ds-font-size-sm)',
            color: 'var(--ds-color-foreground-feedback-danger)',
          }}>
            Could not load contributors: {error}
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 'var(--ds-spacing-12)',
          }}>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
              : contributors.map(c => (
                  <ContributorCard
                    key={c.id}
                    login={c.login}
                    avatar_url={c.avatar_url}
                    html_url={c.html_url}
                  />
                ))
            }
          </div>
        )}
      </div>
    </div>
  );
}

export const Page = {
  name: 'Page',
  render: () => <GetStartedPage />,
};
