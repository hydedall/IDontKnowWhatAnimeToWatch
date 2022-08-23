$("#random_button").click(function () {
    $.get("https://api.jikan.moe/v4/random/anime", function (data, status) {
        const trailer = data.trailer;
        $("div.video_holder")
            .html(`<video controls> < source src = "${trailer.url}" 
            type = "video/mp4" > </video > `);
        const title = data.title;
        $("div.title_holder")
            .text(title)

    });
});

// my data isnt allowing me to access the trailer which 