import React  from "react"; 
function Home(){
    
    return(
        <div>   
                    {/* <h1>welcome to Home</h1> */}
            {/* <img src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Homeimage" /><br /> */}
            
            <div>
            <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2215142d1633405432-mahindra-xuv700-review-20211005_091310.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5> NEW XUV 700</h5>
        <p> Experience a rush like never before · When you're driving the #XUV700, every weather is favorable for adrenaline filled.</p>
      </div>
    </div>
    
    
    <div class="carousel-item">
      <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/gallery/xuv700/photos/popup-images/big04.jpg?rev=28b1d6e9ae6f4e08b7fccd67cdbc1cd9" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>XUV 700 REDcolor</h5>
        <p> Experience a rush like never before · When you're driving the #XUV700, every weather is favorable for adrenaline filled.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/gallery/xuv700/photos/popup-images/big01.jpg?rev=77a9d625ccc142068357cecd332b2625" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>XUV 700 bluecolor</h5>
        <p> Experience a rush like never before · When you're driving the #XUV700, every weather is favorable for adrenaline filled.</p>
      </div>
    </div>
  </div>
  <br />
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/gallery/xuv700/photos/popup-images/big10.jpg?rev=d7d74571b02343c9bee6fccbe1010a62" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">XUV700</h5>
        <p class="card-text">Experience a rush like never before · When you're driving the #XUV700, every weather is favorable for adrenaline filled</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.news18.com/ibnlive/uploads/2018/02/Mahindra-Thar-DC-Hammer-Feature.jpg?im=FitAndFill=(1200,675)" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">THAR</h5>
        <p class="card-text">Experience a rush like never before · When you're driving the #XUV700, every weather is favorable for adrenaline filled.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/gallery/xuv700/photos/popup-images/big04.jpg?rev=28b1d6e9ae6f4e08b7fccd67cdbc1cd9" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">XUV700</h5>
        <p class="card-text">Experience a rush like never before · When you're driving the #XUV700, every weather is favorable for adrenaline filled</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/gallery/xuv700/photos/popup-images/big01.jpg?rev=77a9d625ccc142068357cecd332b2625" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">XUV700</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    
  </div>
</div>

        </div>
    )
}

export default Home;
