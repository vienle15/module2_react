import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class Main extends Component {
  render() {
    return (
      <main>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-inner container">
            <div className="carousel-item active">
              <img
                src="./bt.img/banner-slide.jpg"
                className="d-block w-100"
                alt="..."
                height="500px"
                width="100%"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./bt.img/banner-slide-2.jpg"
                className="d-block w-100"
                alt="..."
                height="500px"
                width="100%"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./bt.img/banner-slide-3.jpg"
                className="d-block w-100"
                alt="..."
                height="500px"
                width="100%"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
          <div className="middle-promo">
            <h5 style={{ marginTop: 20 }}>Just In</h5>
            <h1>WTF READY PACK</h1>
            <h6>
              Bạn là người độc/lạ ?? Hãy chọn cho mình những đôi giày thể hiện
              cá tính vượt trội, khác người.
            </h6>
            <button className="middle-promo-btn">Shop All</button>
          </div>
        </div>
        <div className="promo-slide">
          <h2
            className="container"
            style={{ backgroundColor: "white !important" }}
          >
            Stay Fresh For Less
          </h2>
        </div>
        <div id="carousel-banner" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row render-stay" />
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img src="/" className="card-img-top" alt="..." />
                    <div className="container card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img
                      src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img
                      src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img
                      src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img
                      src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img
                      src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img
                      src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 cold-md-6 col-lg-3">
                  <div className="card">
                    <img
                      src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Giày thượng đình x Louis Vuitton
                      </h5>
                      <p className="card-text">350.000.000VND</p>
                      <a href="#" className="btn btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                      <a href="#" className="btn btn-primary">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel-banner"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel-banner"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="products-main">
          <div className="bg-text">
            <h1>Sản phẩm gợi ý</h1>
          </div>
          <div className="container">
            <div className="random-products row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img
                    src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Giày thượng đình x Louis Vuitton
                    </h5>
                    <p className="card-text">350.000.000VND</p>
                    <a href="#" className="btn btn-primary">
                      Thêm vào giỏ hàng
                    </a>
                    <a href="#" className="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img
                    src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Giày thượng đình x Louis Vuitton
                    </h5>
                    <p className="card-text">350.000.000VND</p>
                    <a href="#" className="btn btn-primary">
                      Thêm vào giỏ hàng
                    </a>
                    <a href="#" className="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img
                    src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Giày thượng đình x Louis Vuitton
                    </h5>
                    <p className="card-text">350.000.000VND</p>
                    <a href="#" className="btn btn-primary">
                      Thêm vào giỏ hàng
                    </a>
                    <a href="#" className="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img
                    src="./images/giay-thuong-dinh-de-dinh-mau-trang_s277.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Giày thượng đình x Louis Vuitton
                    </h5>
                    <p className="card-text">350.000.000VND</p>
                    <a href="#" className="btn btn-primary">
                      Thêm vào giỏ hàng
                    </a>
                    <a href="#" className="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container something">
          <img
            className="something-img col-6 col-sm-12"
            src="./images/stan-smith.webp"
            alt=""
          />
          <div className="container text-something col-6 col-sm-12">
            <h1>HISTORY SIGNATURE</h1>
            <span>
              Đôi giày này có thiết kế khá đơn giản, thường được làm từ da ở
              phần thân trên và lưỡi gà. Không giống như phần lớn các mẫu giày
              khác của Adidas, nó không có biểu tượng ba sọc ở bên ngoài. Thay
              vào đó, đôi giày có ba đường thẳng được đục lỗ ở cả hai bên. Một
              số phiên bản của mẫu giày này có thể in hình chân dung của tay vợt
              Stan Smith ở phần lưỡi giày. Một số khác lại có in hình biểu tượng
              Adidas rất nhỏ. Thiết kế và kiểu dáng của đôi giày gần như vẫn giữ
              nguyên kể từ khi ra mắt cho tới giờ, tuy nhiên rất nhiều các phiên
              bản với màu sắc khác nhau của mẫu giày Stan Smith vẫn được xuất
              hiện qua các năm.
              <strong>
                ĐÂY LÀ 1 TRONG NHỮNG ĐÔI GIÀY BÁN CHẠY NHẤT LỊCH SỬ.
              </strong>
            </span>
          </div>
        </div>
        <figcaption>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </figcaption>
        <div className="container ratio ratio-16x9">
          <div className="ratio ratio-16x9">
            <iframe
              width="400px"
              height="250px"
              src="https://www.youtube.com/embed/lAd3LYIZMjs?si=3sUwcKrtEHmh09zI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
        <figcaption>The more you came, the less you came!!</figcaption>
      </main>
    );
  }
}

export default Main;
