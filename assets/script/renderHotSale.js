var products = [
    {
        id: 1,
        link: '#',
        img: './assets/img/product/kaff-kf-fl866gih.png',
        name: 'Bếp điện KAFF KF-FL866GII (1 từ 1 hồng ngoại)', 
        warranty: './assets/img/5yearWarranty.png',
        apr: 'Trả góp 0%',
        sale: '4.000.000đ',
        oldPrice: '14.800.000đ',
        newPrice: '10.800.000đ',
        gift: 'Lưu ý: đầu từ chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt kính Ceramic cường lực, chịu lực, chịu sốc nhiệt',
            'Đầu đốt EGO (Made in Germany)',
            'Điều khiển cảm ứng trượt trên mặt bếp',
            'Chức năng inverter và chia công suất tiết kiệm điện và bảo vệ bếp',
            'Chức năng chống tràn, khóa trẻ em, cảm ứng quá nhiệt',
            'Đa chức năng, hẹn giờ độc lập',
            'Sản xuất tại Malaysia'
        ]
    },
    {
        id: 2,
        link: '#',
        img: './assets/img/product/Kangaroo-KG435i.png',
        name: 'Bếp điện từ đôi Kangaroo KG435i', 
        warranty: './assets/img/2yearWarranty.png',
        apr: 'Trả góp 0%',
        sale: '2.200.000đ',
        oldPrice: '8.000.000đ',
        newPrice: '5.800.000đ',
        gift: 'Lưu ý: bếp chỉ sử dụng với các sản phẩm có đáy từ',
        description: [
            'Mặt kính cường lực Ceramic chống bám nước, chống xước, chịu sốc nhiệt',
            'Công nghệ dẫn nhiệt theo chiều dọc, tiết kiệm điện năng',
            'Điều khiển cảm ứng trượt trên mặt bếp',
            'Cảnh báo khi không có nồi/sai loại nồi, khóa trẻ em, cảm ứng quá nhiệt',
            'Đa chức năng, hẹn giờ độc lập',
            'Thương hiệu Việt Nam'
        ]
    },
    {
        id: 3,
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
        id: 4,
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
            'Thiết kế úp bình'
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
    document.querySelector('.hotSaleBlock').innerHTML = htmls.join('');
};
renderProduct(products);