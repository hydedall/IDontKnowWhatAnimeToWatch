$("#random_button").click(function () {
    $.get("https://api.jikan.moe/v4/random/anime", function (data, status) {
        // console.log(data);
        const trailer = data.data.trailer;
        $("div.video_holder")
            .html(`<video controls> < source src = ${"trailer.url"}
            type = "video/mp4" > </video > `);
        const title = data.data.title;
        $(`div.title_holder`)
            .text(title)
    });
}); 

// the video itself isn't loading but the box is atleast appearing

