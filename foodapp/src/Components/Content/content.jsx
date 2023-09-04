import React from 'react'
import './Content.css';

export default function () {
  return (
    <div id='maind'>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item carousel-image bg-img-1 active" data-bs-interval="3000">
            <div class="carousel-caption d-none d-md-block">
              <h1 id='bgtext'>Welcome Customers!</h1>
              <p id='ptext'>Enjoy World Class Culinary Cuisines that tantalizes taste buds and celebrates flavors at FoodApp! </p>
            </div>
          </div>
          <div class="carousel-item carousel-image bg-img-2" data-bs-interval="3000" >
            <div class="carousel-caption d-none d-md-block">
              <h1 id='bgtext'>Delecious Dilemma😊</h1>
              <p id='ptext'>Dive into a treasure trove of carefully curated recipes, thoughtfully crafted to cater to every palate and occasion. </p>
            </div>
          </div>
          <div class="carousel-item carousel-image bg-img-3">
            <div class="carousel-caption d-none d-md-block">
              <p id='ptext'>Beyond recipes, we offer a wealth of resources to elevate your culinary prowess. Discover insightful articles penned by passionate food experts, exploring diverse cuisines. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-4 g-4 cards">
        <div class="col">
          <div class="card">
            <img src="https://shorturl.at/iklM8" class="card-img-top"
              alt="Peri Peri Pasta" />
            <div class="card-body">
              <h5 class="card-title">Peri Peri Pasta</h5>
              <p class="card-text">
                Peri peri pasta is unique vegetarian pasta dish where the small macaroni pasta is paired up with creamy peri peri sauce.
              </p>
              <button class="btn btn-primary foodlink" >Order Now🧺</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://shorturl.at/jkF34" class="card-img-top"
              alt="Manchurian" />
            <div class="card-body">
              <h5 class="card-title">Manchurian</h5>
              <p class="card-text">
                Manchurian is a class of Chinese dish made by roughly chopping and deep-frying ingredients such as cauliflower.
              </p>
              <button class="btn btn-primary foodlink">Order Now🧺</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://shorturl.at/yTX28" class="card-img-top" alt="Dal Makhani" />
            <div class="card-body">
              <h5 class="card-title">Dal Makhani</h5>
              <p class="card-text">Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils.</p>
              <button class="btn btn-primary foodlink" >Order Now🧺</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg" class="card-img-top" alt="Dosa" />
            <div class="card-body">
              <h5 class="card-title">Dosa</h5>
              <p class="card-text">A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice.</p>
              <button class="btn btn-primary foodlink" data-toggle="modal" data-target="#exampleModal">Order Now🧺</button>
              
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}




