require(["./js/config.js"], function() {
    require(["jquery"], function($) {
        var data = [{
                title: "满300减30",
                img: "img/img1.jpg",
                price: 489
            },
            {
                title: "满300减50",
                img: "img/img2.jpg",
                price: 599
            },
            {
                title: "3件8折",
                img: "img/img3.jpg",
                price: 99
            },
            {
                title: "满999减100",
                img: "img/img4.jpg",
                price: 1299
            },
            {
                title: "满五免一",
                img: "img/img5.jpg",
                price: 39
            }
        ];

        data.forEach(function(item) {
            var str = "";
            str += `
        <dl>
            <dd>${item.title}</dd>
            <dt><img src="${item.img}" alt=""></dt>
            <dd>${item.price}</dd>
        </dl>`

            $(".wrap").append(str)
        })
    })
})