function make_album(artist:string , title:string , NumOfTracks?: Number){
    const albumObj = {}
    albumObj['name'] = artist,
    albumObj['album'] = title,
    albumObj['number of tracks'] = NumOfTracks
    console.log(albumObj)
}
make_album("artist name","title",2)
make_album("artist name2","title")
make_album("artist name3","title")