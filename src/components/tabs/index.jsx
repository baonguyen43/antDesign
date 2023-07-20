import React, { useMemo, useState } from 'react';

import styles from './tabs.module.scss';

const TAB = {
  HISTORY: 'History',
  APPROACH: 'Approach',
  CULTURE: 'Culture',
  METHOD: 'Method',
};

const tabs = [
  {
    name: TAB.HISTORY,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    name: TAB.APPROACH,
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    name: TAB.CULTURE,
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.',
  },
  {
    name: TAB.METHOD,
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  },
];

function Tabs(props) {
  const [currentTab, setCurrentTab] = useState(TAB.HISTORY);
  
  const onSelectTab = (event) => {
    setCurrentTab(event.target.value);
  };

  const displayContent = useMemo(() => {
    const description = tabs.find((t) => t.name === currentTab).description;
    return description;
  }, [currentTab]);

  return (
    <div className={styles.tabBlock}>
      <div className={styles.tabList}>
        {tabs.map((t) => {
          // không xử lý
          return (
            <button
              key={t.name}
              value={t.name}
              className={`${styles.tabItem} ${
                currentTab === t.name ? styles.tabActive : ''
              }`}
              onClick={onSelectTab}
            >
              {t.name}
            </button>
          );
        })}
      </div>

      <p className={styles.description}>{displayContent}</p>
    </div>
  );
}

export default Tabs;
