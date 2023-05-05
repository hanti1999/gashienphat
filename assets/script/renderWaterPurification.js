var products = [
    {
        id: 1,
        link: '#',
        img: './assets/img/product/daikiosan-dsw-32009h2.png',
        name: 'Máy lọc nước RO 9 lõi Daikiosan DSW 32009H2', 
        warranty: './assets/img/2yearWarranty.png',
        apr: 'Trả góp 0%',
        sale: '1.350.000đ',
        oldPrice: '6.650.000đ',
        newPrice: '5.300.000đ',
        gift: '',
        description: [
            '9 cấp lọc',
            'Linh kiệt nhập khẩu Mỹ, Đài Loan, ...',
            'Chức năng: chỉ lọc',
            'Công suất lọc: 10L/h',
            'Bình áp: ~10L',
            'Lắp ráp tại Việt Nam'
        ]
    },
    {
        id: 2,
        link: '#',
        img: './assets/img/product/mutosi-mp-370U.png',
        name: 'Máy lọc nước 7 lõi để gầm Mutosi MP-370U', 
        warranty: './assets/img/2yearWarranty.png',
        apr: 'Trả góp 0%',
        sale: '200.000đ',
        oldPrice: '6.135.000đ',
        newPrice: '5.925.000đ',
        gift: '',
        description: [
            '7 cấp lọc',
            'Công suất lọc: 20L/h',
            'Chức năng: chỉ lọc',
            'Bình áp 6L',
            'Lắp ráp tại Việt Nam'
        ]
    },
    {
        id: 3,
        link: '#',
        img: './assets/img/product/mutosi-md-203.png',
        name: 'Cây nước Nóng Lạnh Mutosi MD-203', 
        warranty: './assets/img/2yearWarranty.png',
        apr: 'Trả góp 0%',
        sale: '140.000đ',
        oldPrice: '4.090.000đ',
        newPrice: '3.950.000đ',
        gift: 'Lưu ý: Chỉ dùng bình nước đầu đứng',
        description: [
            'Công nghệ làm lạnh bằng Block giúp làm lạnh nhanh và sâu 6ºC ~ 12ºC',
            'Làm nóng nhanh và cao 85ºC ~ 95ºC',
            'Tủ chứa đồ lớn, lên tới 14L',
            'Công tắc nóng lạnh riêng biệt',
            'Vỏ tủ chắc chắn, thân tủ kín, bảo vệ các linh kiện bên trong',
            'Thiết kế úp bình',
            'Lắp ráp tại Việt Nam'
        ]
    },
    {
        id: 4,
        link: '#',
        img: './assets/img/product/mutosi-mp-582h.png',
        name: 'Cây lọc nước Nóng Nguội 8 lõi Mutosi MP-582H', 
        warranty: './assets/img/2yearWarranty.png',
        apr: 'Trả góp 0%',
        sale: '600.000đ',
        oldPrice: '8.290.000đ',
        newPrice: '7.690.000đ',
        gift: '',
        description: [
            '8 cấp lọc tích hợp lõi ORP Hydrogen làm kiềm nước',
            '1 vòi 2 chức năng Nóng - Nguội tiện lợi',
            'Tiết kiệm điện năng với công tắc bật tắt chế độ nóng',
            'Nước sau lọc đạt quy chuẩn nước uống đóng chai QCVN 6-1:2010/BYT',
            'Vỏ tủ chắc chắn, thân tủ kín, bảo vệ các linh kiện bên trong',
            'Lắp ráp tại Việt Nam'
        ]
    }
]

function renderProduct(products) {
    var htmls = products.map(function(product) {
        return `
            <!-- Product -->
            <div class="col l-3 m-4 c-6">
                <a href="${product.link}" class="product-item-link">
                    <div class="product-item">
                        <div class="product-item__head">
                            <div class="product__img">
                                <img src="${product.img}" alt="">
                            </div>
                            <div class="product__ribbon APR">${product.apr}</div>
                            <div class="product__ribbon">Giảm ${product.sale}</div>
                            <img src="${product.warranty}" class="product__warranty"></img>
                        </div>
                        <div class="product__name">
                            <h1>${product.name}</h1>
                        </div>
                        <div class="product__price">
                            <span class="product__price-old">${product.oldPrice}</span>
                            <span class="product__price-current">${product.newPrice}</span>
                        </div>
                        <div class="product-info">
                            <ul>
                                ${product.description.map(function(des) {
                                    return `<li>${des}</li>`
                                }).join('')}
                                <span>${product.gift}</span>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        `
    })
    document.querySelector('.waterPurificationBlock').innerHTML = htmls.join('');
};
renderProduct(products);