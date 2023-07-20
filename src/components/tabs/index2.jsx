import React, { useCallback, useMemo, useState } from 'react';

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
  // const [currentTab, setCurrentTab] = useState(TAB.HISTORY);
  const [selectList, setSelectList] = useState([TAB.HISTORY, TAB.CULTURE])
  // const [isActive1, setIsActive1] = useState(true);
  // const [isActive2, setIsActive2] = useState(false);
  // const [isActive3, setIsActive3] = useState(false);
  // const [isActive4, setIsActive4] = useState(false);

  // const onActive1 = () => {
  //   setIsActive1(true);
  //   setIsActive2(false);
  //   setIsActive3(false);
  //   setIsActive4(false);
  // }
  // const onActive2 = () => {
  //   setIsActive1(false);
  //   setIsActive2(true);
  //   setIsActive3(false);
  //   setIsActive4(false);
  // }
  // const onActive3 = () => {
  //   setIsActive1(false);
  //   setIsActive2(false);
  //   setIsActive3(true);
  //   setIsActive4(false);
  // }
  // const onActive4 = () => {
  //   setIsActive1(false);
  //   setIsActive2(false);
  //   setIsActive3(false);
  //   setIsActive4(true);
  // }

  // const onSelectTab = (event) => {
  //   setCurrentTab(event.target.value);
  // };
  const onSelectTab = useCallback((event) => {
    const tab = event.target.value;
    let newList = selectList;
    
      if (newList.includes(tab)) {
        newList = newList.filter((t) => t !== tab);
    } else {
      newList.push(event.target.value)
    }

    setSelectList([...newList]);
  }, [selectList]);

  console.log('««««« selectList »»»»»', selectList);

  // useMemo
  // useCallback
  // const displayContent = useMemo(() => {
  //   const description = tabs.find((t) => t.name === currentTab).description;
  //   return description;
  // }, [currentTab]);

  return (
    <div className={styles.tabBlock}>
      <div className={styles.tabList}>
        {tabs.map((t) => {
          // không xử lý
        //   return (
        //     <button
        //       key={t.name}
        //       value={t.name}
        //       className={`${styles.tabItem} ${
        //         currentTab === t.name ? styles.tabActive : ''
        //       }`}
        //       onClick={onSelectTab}
        //     >
        //       {t.name}
        //     </button>
        //   );
        // })}
          return (
            <button
              key={t.name}
              value={t.name}
              className={`${styles.tabItem} ${
                selectList.includes(t.name) ? styles.tabActive : ''
              }`}
              onClick={onSelectTab}
            >
              {t.name}
            </button>
          );
        })}
        {/* <div className={`${styles.tabItem} ${isActive1 ? styles.tabActive : ''}`} onClick={onActive1}>{TAB.HISTORY}</div>
        <div className={`${styles.tabItem} ${isActive2 ? styles.tabActive : ''}`} onClick={onActive2}>{TAB.APPROACH}</div>
        <div className={`${styles.tabItem} ${isActive3 ? styles.tabActive : ''}`} onClick={onActive3}>{TAB.CULTURE}</div>
        <div className={`${styles.tabItem} ${isActive4 ? styles.tabActive : ''}`} onClick={onActive4}>{TAB.METHOD}</div> */}
      </div>

      {/* <p className={styles.description}>{displayContent}</p> */}
    </div>
  );
}

export default Tabs;
