import React, { memo, useCallback, useEffect, useState } from 'react';
import MusicPlay from 'pages/playList/musicPlay';

import './playList.css';

const allList = [
  {
    id: 1,
    name: 'ChimSau',
    cover: require('assets/image/music/1.jpg'),
    src: require('assets/music/ChimSau-MCKTrungTran-7205660.mp3'),
    artist: 'NF Real music',
    isLiked: false,
  },
  {
    id: 2,
    name: 'coaycuaanhay',
    cover: require('assets/image/music/2.jpg'),
    src: require('assets/music/coaycuaanhay.mp3'),
    artist: 'NF Real 2',
    isLiked: false,
  },
  {
    id: 3,
    name: 'DontCoi',
    cover: require('assets/image/music/3.jpg'),
    src: require('assets/music/DontCoi-RPTOrijinnRonboogz-8345160.mp3'),
    artist: 'NF Real 3',
    isLiked: false,
  },
  {
    id: 4,
    name: 'KiaBongDangAi',
    cover: require('assets/image/music/4.jpg'),
    src: require('assets/music/KiaBongDangAi-Phao-8544353.mp3'),
    artist: 'NF Real 4',
    isLiked: false,
  },
  {
    id: 5,
    name: 'LuonYeuDoi',
    cover: require('assets/image/music/5.jpg'),
    src: require('assets/music/LuonYeuDoi-Den-8692742.mp3'),
    artist: 'NF Real 5',
    isLiked: false,
  },
  {
    id: 6,
    name: 'YeuAnhDiMeAnhBanBanhMi',
    cover: require('assets/image/music/6.jpg'),
    src: require('assets/music/YeuAnhDiMeAnhBanBanhMi-PhucDu-8698703.mp3'),
    artist: 'NF Real 6',
    isLiked: false,
  },
]

function PlayList(props) {
  const [selectedMusic, setSelectedMusic] = useState(allList[0]);
  const [playList, setPlayList] = useState();

  useEffect(() => {
    setPlayList(allList.filter((m) => m.id !== selectedMusic.id));
  }, [selectedMusic.id]);

  const onHandleSelectedMusic = useCallback((id) => () => {
    const selected = playList.find((m) => m.id === id);

    setSelectedMusic(selected);
  }, [playList]);

  return (
    <div className="music-space">
      <div className="music-list">
        <div className="list-title text-strong">Most Popular</div>

        <div className="list-sub">92 songs</div>

        <div className="play-list">
          {
            playList?.length > 0 ? playList.map((m) => (
              <div className="play-item" key={m.name}>
              <button className="play-block" onClick={onHandleSelectedMusic(m.id)}>
                <span className="index text-strong">{m.id}</span>
  
                <img
                  src={m.cover}
                  alt="My Stress"
                  className="thumbnail"
                />

                {
                  selectedMusic?.id === m.id
                    ? <i className="fa-solid fa-volume-high play-icon"></i>
                    : <i className="fa-solid fa-play play-icon"></i>
                }

                <span className="music-name text-strong" >{m.name}</span>
              </button>
  
              <span className="play-author">{m.artist}</span>
  
              <span className="timer">3:22</span>
  
              <i className={`fa-solid fa-heart ${m.isLike ? 'icon-like' : ''}`}></i>
            </div>
            )) : <p>Không có bài hát trong danh sách</p>
          }
        </div>
      </div>

      <div className="music-playing">
        <MusicPlay
          name={selectedMusic.name}
          artist={selectedMusic.artist}
          cover={selectedMusic.cover}
          id={selectedMusic.id}
          src={selectedMusic.src}
        />
      </div>
    </div>
  );
}

export default memo(PlayList);
