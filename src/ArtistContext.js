import React, {createContext, useState} from 'react';


    const artistsData = [
      {
        artistimage: "https://www.dailynews.com/wp-content/uploads/2020/03/LDN-L-INTHEEND-0313-02-1.jpg?w=620",
        name: "Linkin Park",
        genre: "pop-rock",

        description: `Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon.`,

        songs: [
          {name: "In the end", releasedate: "2001", songurl: "https://www.youtube.com/watch?v=eVTXPUF4Oz4&ab_channel=LinkinPark", albumimage: "https://www.factinate.com/wp-content/uploads/2017/07/In-the-End.jpg"}
          ,
          {name: "Numb", releasedate: "2003", songurl: "https://www.youtube.com/watch?v=kXYiU_JCYtU", albumimage: "https://images.genius.com/96b71b235c8bd246a46d75deba3ac149.1000x960x1.jpg"}
        ],
      },

      {
        artistimage: "https://www.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2018/05/03/donald-glover.jpg",
        name: "Donald Glover",
        genre: "rap",

        description: `Donald McKinley Glover Jr., also known by his stage name Childish Gambino, is an American actor, singer, rapper, writer, comedian, director, and producer.`,

        songs: [
          {name: "Redbone", releasedate: "2015", songurl: "https://www.youtube.com/watch?v=ezbsbkqoRrs", albumimage: "https://hiphop-n-more.com/wp-content/uploads/2017/06/maino-redbone-remix.jpg"}
          ,
          {name: "This is America", releasedate: "2018", songurl: "https://www.youtube.com/watch?v=VYOjWnS4cMY", albumimage: "https://upload.wikimedia.org/wikipedia/en/6/62/This_Is_America_%28single_cover%29_2018.jpg"}
        ],
      },
      {
        artistimage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Axwell_Ingrosso_Live.png",
        name: "Axwell & Ingrosso",
        genre: "Electro house",

        description: `Axwell & Ingrosso (stylised as Axwell Λ Ingrosso) is a Swedish DJ duo consisting of Swedish House Mafia members Axwell and Sebastian Ingrosso. They made their debut performance at the 2014 Governors Ball Music Festival in New York City in June.`,

        songs: [
          {name: "On My Way", releasedate: "2015", songurl: "https://www.youtube.com/watch?v=opxhEVjNvdk", albumimage: "https://upload.wikimedia.org/wikipedia/en/5/56/On_My_Way_Axwell_Ingrosso.jpg"}
          ,
          {name: "Sun is Shining", releasedate: "2014", songurl: "https://www.youtube.com/watch?v=nbXgHAzUWB0", albumimage: "https://i.ytimg.com/vi/9w-VOLsaDLE/maxresdefault.jpg"}
        ],
      },
    ];

    export const ArtistContext = createContext();

    export const ArtistProvider = (props) => {
        const [artists, setArtists] = useState(artistsData)
        return (
            <ArtistContext.Provider value={[artists, setArtists]}>
                {props.children}
            </ArtistContext.Provider>
        )

    }
