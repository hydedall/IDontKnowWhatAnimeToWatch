$("#random_button").click(function () {
    $.get("https://api.jikan.moe/v4/random/anime?sfw", function (data, status) {
        console.log(data);
        // const trailer = data.data.trailer;
        // $("div.video_holder")
        //     .html(`<iframe width="560" height="315" src=${data.data.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        const title = data.data.title;
        $('div.title_holder')
            .text(title)
        const synopsis = data.data.synopsis;
        $('div.synopsis_holder')
            .text(synopsis)
        const image = data.data.images.jpg.large_image_url;
        $('#image_holder').attr("src", image)
        const rating = data.data.rating;
        $('div.rating_holder')
            .text(rating)
    
    });
});

// the video itself isn't loading but the box is atleast appearing

// var url = $("#trailer_holder").attr('trailer.url');