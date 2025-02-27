'use client';

import { listSupportedLocales } from '@generaltranslation/supported-locales';
import { getLocaleProperties } from 'generaltranslation';
import { useState } from 'react';

export default function SupportedLocales() {
  const [searchQuery, setSearchQuery] = useState('');

  const styles = {
    supportedLocales: {
      margin: '2rem 0',
    },
    searchContainer: {
      marginBottom: '1.5rem',
    },
    searchInput: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #ddd',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    localeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      padding: 0,
      listStyleType: 'none',
    },
    localeItem: {
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: '#f5f5f5',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    localeCode: {
      fontWeight: 'bold',
      fontFamily: 'monospace',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    localeName: {
      color: '#666',
      marginTop: '0.25rem',
    },
  };

  // Filter locales based on search query
  const filteredLocales = listSupportedLocales().filter((locale) => {
    const properties = getLocaleProperties(locale);
    const searchLower = searchQuery.toLowerCase();
    return (
      locale.toLowerCase().includes(searchLower) ||
      properties.name.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div style={styles.supportedLocales}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
          aria-label="Search locales"
        />
      </div>

      <ul style={styles.localeGrid}>
        {filteredLocales.map((locale) => {
          const properties = getLocaleProperties(locale);
          return (
            <li
              key={locale}
              style={styles.localeItem}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.localeCode} suppressHydrationWarning>
                {locale}
                <span
                  role="img"
                  aria-label={`${properties.name} flag`}
                  suppressHydrationWarning
                >
                  {properties.emoji}
                </span>
              </div>
              <div style={styles.localeName} suppressHydrationWarning>
                {properties.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
