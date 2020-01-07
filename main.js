$(document).ready(function () {
    var click = true;
    $(document).on('click', 'div.dropdown', function (e) {
        e.preventDefault();
        if (click) {
            $('.option').stop().slideDown(300);
            click = false;
        } else {
            $('.option').stop().slideUp(300);
            click = true;
        }

    });

    $(document).on('click', '.option li', function (e) {
        e.preventDefault();
        var option_value = $(this).find('a').text();
        $('.dropdown p').text(option_value);
        $('.option').slideUp(300);
        click = true;
    });
});

var buttons = document.getElementsByClassName("footer-nav-heading-button");
var i;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var expandOrderBtns = document.getElementsByClassName("order-date");
var i;
for (i = 0; i < expandOrderBtns.length; i++) {
    expandOrderBtns[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var ordersBackground = this.parentNode.parentNode;
        var orderedProducts = this.parentNode.nextElementSibling.nextElementSibling;
        var productCards = this.parentNode.nextElementSibling.nextElementSibling.children;
        var deliveryInfo = this.parentNode.nextElementSibling;

        if (productCards[1].children[2].style.display === "none") {

            orderedProducts.style.width = "90%";
            orderedProducts.style.flexDirection = "column";
            ordersBackground.style.background = "#fff";
            deliveryInfo.children[8].style.display = "flex";

            for (j = 0; j < productCards.length; j++) {
                productCards[j].children[1].style.marginTop = "40px";
                productCards[j].children[2].style.display = "block";
                productCards[j].children[3].style.display = "block";
                productCards[j].children[4].style.display = "block";
                productCards[j].style.display = "flex";
                productCards[j].style.width = "100%";
                productCards[j].style.flexDirection = "column";
                productCards[j].style.flexWrap = "wrap";
                productCards[j].style.margin = "0";
                productCards[j].style.marginTop = "20px";
                productCards[j].style.height = "140px";
                productCards[j].style.borderBottom = "1px solid #ccc";
            }
            productCards[productCards.length - 1].style.borderBottom = "0";

            if (window.screen.width > 768) {

                orderedProducts.style.right = "35px";
                orderedProducts.style.left = "35px";
                ordersBackground.style.border = "2px solid #EBECEF";
                orderedProducts.style.marginTop = "400px";
                deliveryInfo.children[2].style.left = "600px";
                deliveryInfo.children[2].style.top = "200px";
                deliveryInfo.children[3].style.left = "0";
                deliveryInfo.children[3].style.top = "10px";

                deliveryInfo.children[4].style.left = "0";
                deliveryInfo.children[4].style.top = "20px";

                deliveryInfo.children[5].style.left = "0";
                deliveryInfo.children[5].style.top = "40px";

                deliveryInfo.children[6].style.left = "0";
                deliveryInfo.children[6].style.top = "50px";

                deliveryInfo.children[7].style.left = "0";
                deliveryInfo.children[7].style.top = "60px";
            }

            if (window.screen.width > 414 && window.screen.width <= 768) {
                orderedProducts.style.marginTop = "500px";
                deliveryInfo.children[2].style.left = "0";
                deliveryInfo.children[2].style.top = "230px";

                deliveryInfo.children[3].style.left = "0";
                deliveryInfo.children[3].style.top = "10px";

                deliveryInfo.children[4].style.left = "0";
                deliveryInfo.children[4].style.top = "20px";

                deliveryInfo.children[5].style.left = "0";
                deliveryInfo.children[5].style.top = "40px";

                deliveryInfo.children[6].style.left = "0";
                deliveryInfo.children[6].style.top = "50px";

                deliveryInfo.children[7].style.left = "0";
                deliveryInfo.children[7].style.top = "60px";

                deliveryInfo.children[8].style.display = "flex";
                deliveryInfo.children[8].children[4].style.fontSize = "18px";
                deliveryInfo.children[8].children[5].style.fontSize = "18px";

                for (j = 0; j < productCards.length; j++) {
                    productCards[j].style.display = "flex";
                    productCards[j].style.height = "120px";
                    productCards[j].children[1].style.whiteSpace = "nowrap";
                    productCards[j].children[1].style.margin = "20px 0 0 0";
                    productCards[j].children[3].style.margin = "10px 0 10px 0";
                    // productCards[j].children[0].style.width = "100px";
                    productCards[j].children[0].style.height = "100px";
                    productCards[j].children[0].style.margin = "0 0 20px 0";
                    productCards[j].children[4].style.margin = "40px 0 0 0";

                }
            }

            if (window.screen.width <= 414) {
                deliveryInfo.children[2].style.top = "330px";
                orderedProducts.style.marginTop = "600px";
                // orderedProducts.style.marginLeft = "20px";
                
                deliveryInfo.children[2].style.left = "0";


                deliveryInfo.children[3].style.left = "0";
                deliveryInfo.children[3].style.top = "10px";

                deliveryInfo.children[4].style.left = "0";
                deliveryInfo.children[4].style.top = "20px";

                deliveryInfo.children[5].style.left = "0";
                deliveryInfo.children[5].style.top = "40px";

                deliveryInfo.children[6].style.left = "0";
                deliveryInfo.children[6].style.top = "50px";

                deliveryInfo.children[7].style.left = "0";
                deliveryInfo.children[7].style.top = "60px";

                for (j = 0; j < productCards.length; j++) {
                    productCards[j].style.display = "flex";
                    productCards[j].style.height = "120px";
                    productCards[j].children[1].style.whiteSpace = "nowrap";
                    productCards[j].children[1].style.margin = "20px 0 0 0";
                    productCards[j].children[3].style.margin = "10px 0 10px 0";
                    // productCards[j].children[0].style.width = "100px";
                    productCards[j].children[4].style.margin = "40px 0 0 0";

                }
                
                
            }


            if (window.screen.width <= 320) {

                orderedProducts.style.marginTop = "450px";
                deliveryInfo.children[3].style.left = "0";
                deliveryInfo.children[3].style.top = "-30px";

                deliveryInfo.children[4].style.left = "0";
                deliveryInfo.children[4].style.top = "-30px";

                deliveryInfo.children[5].style.left = "0";
                deliveryInfo.children[5].style.top = "-30px";

                deliveryInfo.children[6].style.left = "0";
                deliveryInfo.children[6].style.top = "-30px";

                deliveryInfo.children[7].style.left = "0";
                deliveryInfo.children[7].style.top = "-30px";

                for (j = 0; j < productCards.length; j++) {
                    productCards[j].children[0].style.height = "100px";
                    productCards[j].children[1].style.marginTop = "10px";
                    productCards[j].children[4].style.position = "absolute";
                    productCards[j].children[4].style.top = "20px";
                    productCards[j].children[4].style.right = "10px";
                }
                
                
            }


        } else {
            orderedProducts.style.marginTop = "310px";
            orderedProducts.style.flexDirection = "row";
            orderedProducts.style.width = "100%";
            orderedProducts.style.flexDirection = "row";
            ordersBackground.style.background = "#F8F8F8";
            ordersBackground.style.border = "0";
            deliveryInfo.children[3].style.left = "500px";
            deliveryInfo.children[3].style.top = "-50px";
            deliveryInfo.children[4].style.left = "500px";
            deliveryInfo.children[4].style.top = "-40px";
            deliveryInfo.children[5].style.left = "500px";
            deliveryInfo.children[5].style.top = "-30px";
            deliveryInfo.children[6].style.left = "500px";
            deliveryInfo.children[6].style.top = "-20px";
            deliveryInfo.children[7].style.left = "500px";
            deliveryInfo.children[7].style.top = "-10px";
            deliveryInfo.children[2].style.left = "0";
            deliveryInfo.children[2].style.top = "60px";
            deliveryInfo.children[8].style.display = "none";

            for (j = 0; j < productCards.length; j++) {
                productCards[j].children[2].style.display = "none";
                productCards[j].children[3].style.display = "none";
                productCards[j].children[4].style.display = "none";
                productCards[j].style.display = "block";
                productCards[j].style.border = "0";
                productCards[j].style.margin = "35px 20px";
                productCards[j].style.width = "160px";
                productCards[j].style.height = "190px";
            }

            if (window.screen.width <= 768 && window.screen.width > 414) {
                for (j = 0; j < productCards.length; j++) {
                    productCards[j].style.height = "152px";
                    productCards[j].style.width = "125px";
                    productCards[j].style.margin = "10px 14px";
                    productCards[j].children[1].style.whiteSpace = "normal";
                }
                orderedProducts.style.marginTop = "430px";
                deliveryInfo.children[2].style.left = "0";
                deliveryInfo.children[2].style.top = "230px";
                deliveryInfo.children[2].style.left = "250px";
                deliveryInfo.children[2].style.top = "190px";
                deliveryInfo.children[3].style.left = "0";
                deliveryInfo.children[3].style.top = "10px";
                deliveryInfo.children[4].style.left = "0";
                deliveryInfo.children[4].style.top = "20px";
                deliveryInfo.children[5].style.left = "0";
                deliveryInfo.children[5].style.top = "40px";
                deliveryInfo.children[6].style.left = "0";
                deliveryInfo.children[6].style.top = "50px";
                deliveryInfo.children[7].style.left = "0";
                deliveryInfo.children[7].style.top = "60px";
            }
            if (window.screen.width <= 414 && window.screen.width > 320) {
                orderedProducts.style.flexDirection = "column";
                orderedProducts.style.marginTop = "430px";
                for (j = 0; j < productCards.length; j++) {
                    productCards[j].style.display = "flex";
                    productCards[j].style.height = "120px";
                    productCards[j].style.margin = "10px 14px";
                    productCards[j].children[1].style.margin = "45px 0 45px 40px";
                    
                }
                deliveryInfo.children[2].style.left = "0";
                deliveryInfo.children[2].style.top = "230px";
                deliveryInfo.children[2].style.left = "240px";
                deliveryInfo.children[2].style.top = "190px";
                deliveryInfo.children[3].style.left = "0";
                deliveryInfo.children[3].style.top = "10px";
                deliveryInfo.children[4].style.left = "0";
                deliveryInfo.children[4].style.top = "20px";
                deliveryInfo.children[5].style.left = "0";
                deliveryInfo.children[5].style.top = "40px";
                deliveryInfo.children[6].style.left = "0";
                deliveryInfo.children[6].style.top = "50px";
                deliveryInfo.children[7].style.left = "0";
                deliveryInfo.children[7].style.top = "60px";
            }
            if (window.screen.width <= 320) {
                orderedProducts.style.flexDirection = "column";
                orderedProducts.style.marginTop = "300px";
                orderedProducts.style.marginLeft = "0";
                deliveryInfo.children[2].style.top = "170px";
                deliveryInfo.children[2].style.left = "150px";
                deliveryInfo.children[3].style.left = "0";
                deliveryInfo.children[3].style.top = "-30px";
                deliveryInfo.children[4].style.left = "0";
                deliveryInfo.children[4].style.top = "-30px";
                deliveryInfo.children[5].style.left = "0";
                deliveryInfo.children[5].style.top = "-30px";
                deliveryInfo.children[6].style.left = "0";
                deliveryInfo.children[6].style.top = "-30px";
                deliveryInfo.children[7].style.left = "0";
                deliveryInfo.children[7].style.top = "-30px";
                for (j = 0; j < productCards.length; j++) {
                    
                    // productCards[j].children[0].style.marginLeft = "70px";
                    productCards[j].children[1].style.marginTop = "10px";
                    productCards[j].style.display = "flex";
                    productCards[j].style.height = "100px";
                    productCards[j].style.width = "auto";
                    productCards[j].children[1].style.marginTop = "30px";
                    productCards[j].style.margin = "0";
                    productCards[j].children[0].style.height = "70px";
                    productCards[j].children[0].style.objectFit = "contain";
                }
                
                
                
            }

        }
    })
}