import React, { useState, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import logo1 from "../../assets/Bookshop.gif";
import scrollImg from "../../assets/scroll.gif";
import "../ProductView/style.css";
import { Link } from "react-router-dom";
import mangaBg from "../../assets/maxresdefault.jpg";
import bioBg from "../../assets/biography.jpg";
import fictionBg from "../../assets/fiction.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "../SliderImage/slider";

const Products = ({ products, onAddToCart, featureProducts }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef(null);
  const images = [
    'https://newshop.vn/public/uploads/news/nhung-cuon-sach-van-hoc-hay.jpg',
    'https://meannhien.com/wp-content/uploads/2023/07/image-10-1024x303.png',
    'https://meannhien.com/wp-content/uploads/2023/07/image-13-1024x303.png',
  ];
  const handleInputClick = () => {
    // Scrolls to the section when the input is clicked
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={classes.mainPage}>
      <ImageSlider images={images} />
      {/*<div className={classes.toolbar} />*/}
      {/*<img src={scrollImg} className={classes.scrollImg} />*/}
      <div className={classes.hero}>
        {/*<img className={classes.heroImg} src={logo1} height="720px" />*/}
        <div className={classes.heroCont}>
          <h1 className={classes.heroHeader} ref={sectionRef}>
            Khuyến Mãi Cực Hot Dành Cho Thành Viên Mới.
          </h1>
          <h3 className={classes.heroDesc} >
           Giảm 500k cho những thành viên mới với bất kỳ loại sách cho hóa đơn
            có giá trị trên 799k.
          </h3>
          <div className={classes.searchs}>
            <Input
              className={classes.searchb}
              type="text"
              placeholder="Tìm sách của bạn tại đây."
               onClick={handleInputClick}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
        </div>
      </div>

      {searchTerm === "" && (
        <div className={classes.categorySection}>
          <h1 className={classes.categoryHeader}>Categories</h1>
          <h3 className={classes.categoryDesc}>
            Browse our featured categories
          </h3>
          <div className={classes.buttonSection}>
            <div>
              <Link to="manga">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${mangaBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>Manga</div>
            </div>
            <div>
              <Link to="biography">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${bioBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>Biography</div>
            </div>
            <div>
              <Link to="fiction">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${fictionBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>Fiction</div>
            </div>
          </div>
        </div>
      )}

      <div className={classes.carouselSection}>
        <Carousel
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
        >
          <div>
            <Link to="manga">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${mangaBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>Manga</div>
          </div>
          <div>
            <Link to="biography">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${bioBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>Biography</div>
          </div>
          <div>
            <Link to="fiction">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${fictionBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>Fiction</div>
          </div>
        </Carousel>
      </div>

      {searchTerm === "" && (
        <>
          <div>
            <h3 className={classes.contentHeader}>
              Best <span style={{ color: "#f1361d" }}>Sellers</span>
            </h3>
            <Grid
              className={classes.contentFeatured}
              container
              justify="center"
              spacing={1}
            >
              {featureProducts.map((product) => (
                <Grid
                  className={classes.contentFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
                >
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}

      <div>
        {searchTerm === "" && (
          <>
            <h1 className={classes.booksHeader}>
              Discover <span style={{ color: "#f1361d" }}>Books</span>
            </h1>
            <h3 className={classes.booksDesc}>
              Explore our comprehensive collection of books.
            </h3>
          </>
        )}
        <div className={classes.mobileSearch}>
          <div className={classes.mobSearchs}>
            <Input
              className={classes.mobSearchb}
              type="text"
              placeholder="Search for books"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
        </div>
        <Grid
          className={classes.content}
          container
          justify="center"
          spacing={2}
        >
          {products
            .filter((product) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.name
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <Grid
                className={classes.content}
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                id="pro"
              >
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
