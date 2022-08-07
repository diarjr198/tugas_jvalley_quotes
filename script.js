// Daftar Quotes
const quotes = [
    {
        name: "Bro Raihan Nurliansyah",
        quote: `"Perbanyak sabar dan jangan lupa doakan, karena
mengingatkan harus ikhlas, sebab tidak mudah mengubah
kebiasaan atau sikap seseorang. Cinta memang butuh
kesabaran, namun tetap harus ada batasannya. Sebab cinta
gabungan dari dua kesatuan, yang satu terus terusan
sabar dan yang satunya lagi tidak kunjung sadar."`,
    },
    {
        name: "Bro Fandy Araya",
        quote: `"Orang yang sabar bukan berarti dia yang tidak akan
        pernah marah. Namun mereka hanya sebagian orang yang
        masih bisa tetap diam saat melihat masalah. Sebab
        adakalanya sebuah keputusan tidak sesuai dengan apa yang
        kita harapkan. Tetapi dari situlah kita belajar untuk
        ikhlas dan sabar ketika apa yang kita harapkan tidak
        sesuai dengan apa yang kita inginkan."`,
    },
    {
        name: "Bro Twiki JSA",
        quote: `"Jangan pernah menyerah saat hidup memberi kita seratus
        alasan untuk bersedih dan menangis, jangan pula menyerah
        ataupun berkeluh kesah dengan keadaan hidup kita
        sekarang. Sebab apa yang sekarang kita anggap kurang
        bisa jadi sangat berlebih bagi orang lain yang nasibnya
        kurang beruntung dibandingkan dengan kita."`,
    },
];

$(document).ready(function () {
    for (let i = 0; i < quotes.length; i++) {
        let tempVal;
        let image;
        if ((i + 1) % 3 === 0) {
            tempVal = 3;
            image =
                "https://images.pexels.com/photos/4641265/pexels-photo-4641265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        } else if ((i + 1) % 3 === 1) {
            tempVal = 1;
            image =
                "https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        } else if ((i + 1) % 3 === 2) {
            tempVal = 2;
            image =
                "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        }
        const quoteTemplate = `
        <div class="quotes_card q${tempVal}" id="q${i + 1}">
            <p>
                ${quotes[i].quote} - <b>${quotes[i].name}</b>
            </p>

            <a ${
                i === quotes.length - 1
                    ? `style="width: 227px; left: calc(50vw - 113.5px) !important;"`
                    : ""
            } href="#q${i !== quotes.length - 1 ? i + 2 : 1}">${
            i !== quotes.length - 1 ? "↓ NEXT" : "↑ GO TO FIRST"
        } QUOTES</a>

            <img
                class="image-fit"
                src=${image}
                alt="quotes ${i + 1}+"
            />
            <div class="black"></div>
        </div>
        `;
        $("#quotesCard").append(quoteTemplate);
    }

    $("button#add_quotes").click(function (e) {
        e.preventDefault();
        let nameQuote = $("input#nama").val();
        let textQuote = $("textarea#quotes").val();
        if (nameQuote !== "" && textQuote !== "") {
            quotes.push({
                name: nameQuote,
                quote: textQuote,
            });
            console.log(quotes);
            $(".quotes_card").remove();
            $("#quotes-modal").remove();
            $(".modal-content").append(`
            <a id="quotes-modal" href="#q${quotes.length}">
                See Your Quotes
            </a>
            `);
            for (let i = 0; i < quotes.length; i++) {
                let tempVal;
                let image;
                if ((i + 1) % 3 === 0) {
                    tempVal = 3;
                    image =
                        "https://images.pexels.com/photos/4641265/pexels-photo-4641265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                } else if ((i + 1) % 3 === 1) {
                    tempVal = 1;
                    image =
                        "https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                } else if ((i + 1) % 3 === 2) {
                    tempVal = 2;
                    image =
                        "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                }
                const quoteTemplate = `
                <div class="quotes_card q${tempVal}" id="q${i + 1}">
                    <p>
                        ${quotes[i].quote} - <b>${quotes[i].name}</b>
                    </p>

                    <a ${
                        i === quotes.length - 1
                            ? `style="width: 216px; left: calc(50vw - 108px) !important;"`
                            : ""
                    } href="#q${i !== quotes.length - 1 ? i + 2 : 1}">${
                    i !== quotes.length - 1 ? "↓ NEXT" : "↑ GO TO FIRST"
                } QUOTES</a>

                    <img
                        class="image-fit"
                        src=${image}
                        alt="quotes ${i + 1}+"
                    />
                    <div class="black"></div>
                </div>
                `;
                $("#quotesCard").append(quoteTemplate);
            }
            var modal = document.getElementById("myModal");
            modal.style.display = "block";

            var modalQuote = document.getElementById("quotes-modal");

            modalQuote.onclick = function () {
                modal.style.display = "none";
            };

            $("#form-quotes")[0].reset();
        }
    });
});

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
