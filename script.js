$("#random_button").click(function () {
    $.get("https://api.jikan.moe/v4/random/anime?sfw", function (data, status) {
        let image = 'https://pbs.twimg.com/profile_images/1190380284295950339/Py6XnxvH_400x400.jpg';
        // console.log(data);
        // const trailer = data.data.trailer;
        // $("div.video_holder")
        //     .html(`<iframe width="560" height="315" src=${data.data.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        const title = data.data.title;
        $('div.title_holder')
            .text(title)
        const synopsis = data.data.synopsis;
        $('div.synopsis_holder')
            .text(synopsis)
        const rating = data.data.rating;
        if (rating != undefined) {
            $('#rating_title').show();
        } else {
            $('#rating_title').hide();
        }
        $('div.rating_holder')
            .text(rating)
        const score = data.data.score;
        if (score != undefined) {
            $('#score_title').show();
            $('div.score_holder')
            .text(score)
        } else {
            $('#score_title').hide();
            $('div.score_holder')
            .text('')
        }
        image = data.data.images.jpg.large_image_url;
        if(rating != 'Rx - Hentai' || rating != 'R+ - Mild Nudity' ){
            $('#image_holder').attr("src", image)
        } else {
            $('#image_holder').attr("src", "https://pbs.twimg.com/profile_images/1190380284295950339/Py6XnxvH_400x400.jpg")
        }
    
    });
});