
function loadPostData() {
    $.getJSON('post_data.json', function(data) {
        let posts = $('#posts');


        for ( let post of data.en ) {
            posts.append(
                '<div class="post">' +
                    '<div class="postHeader">' +
                        '8/13/21 - This is a thought' +
                    '</div>' +
                    '<br/>' +
                    '<div class="postBody">' +
                        'Hi!' +
                    '</div>' +
                '</div>'
            )
        }
    });
};


function loadMusicData() {
    $.getJSON('music_data.json', function(data) {
        let list = $('#list');
        // let tracks = $('#tracks');

        let classicalTrackNumber =  1 // counts classical tracks which have been displayed, as to
        let filmAndGameTrackNumber =  1 // display an even ammount in each column (either col 1 2 or 3)

        for ( let track of data.en ) {

            list.append(
                '<tr id=' + track.trackUrlID + '>' +
                '<td>' + track.trackName + '</td>' +
                '<td>' + track.trackNumID + '</td>' +
                '<td>' + track.trackUrlID + '</td>' +
                '</tr>'
            )

            var row = document.getElementById(track.name);

            let tracks = $('#tracks' + classicalTrackNumber);

            if (track.tag == "Film and Game") {

                filmAndGameTrackNumber = filmAndGameTrackNumber + 1
                if (filmAndGameTrackNumber == 4) { filmAndGameTrackNumber = 1 }

                let tracks = $('#FGTracks' + filmAndGameTrackNumber);
                tracks.append(
                    // '<%- include(\'../partials/musicTrack\', {trackNumID: ' + track.trackNumID + ', trackUrlID: "' + track.trackUrlID + '", trackName: "' + track.trackName + '"}); %>'
                    "<div className=\"track\" > <iframe height = \"100vw\"scrolling = \"no\"frameBorder = \"no\"allow = \"autoplay\"width = \"100%\"src = \"https:\/\/w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + track.trackNumID + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe></div>"
                    + "<br/>"
                )

            } else {

                classicalTrackNumber = classicalTrackNumber + 1
                if (classicalTrackNumber == 4) { classicalTrackNumber = 1 }

                let tracks = $('#CTracks' + classicalTrackNumber);
                tracks.append(
                    // '<%- include(\'../partials/musicTrack\', {trackNumID: ' + track.trackNumID + ', trackUrlID: "' + track.trackUrlID + '", trackName: "' + track.trackName + '"}); %>'
                    "<div className=\"track\" > <iframe height = \"100vw\"scrolling = \"no\"frameBorder = \"no\"allow = \"autoplay\"width = \"100%\"src = \"https:\/\/w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + track.trackNumID + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe></div>"
                    + "<br/>"
                )
            }
        }
    });
};